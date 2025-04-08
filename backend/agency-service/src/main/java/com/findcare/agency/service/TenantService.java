package com.findcare.agency.service;

import com.findcare.agency.config.DataSourceConfig;
import com.findcare.agency.config.TenantContext;
import com.findcare.agency.dto.Tenant;
import com.findcare.agency.repository.TenantRepository;
import org.flywaydb.core.Flyway;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TenantService {

    private final Logger logger = LoggerFactory.getLogger(TenantService.class);

    private final TenantRepository tenantRepository;

    private final DataSourceConfig dataSourceConfig;

    private final JdbcTemplate jdbcTemplate;

    /**
     * Create a new tenant with a dedicated database
     */
    @Transactional(transactionManager = "tenantTransactionManager")
    public Tenant createTenant(String tenantId, String name) {
        // Check if tenant already exists
        if (tenantRepository.existsByTenantId(tenantId)) {
            throw new RuntimeException("Tenant already exists: " + tenantId);
        }

        // Create a new tenant entity
        Tenant tenant = new Tenant(tenantId, name);
        String dbName = tenant.getDbName();

        // Create a new database for the tenant
        try {
            // Create database
            jdbcTemplate.execute("CREATE DATABASE " + dbName);

            // Save tenant in the master database
            tenant = tenantRepository.save(tenant);

            // Setup the datasource for the new tenant
            dataSourceConfig.addTenantDataSource(tenantId, dbName);

            // Run Flyway migrations on the new database and populate tenant account data
            runFlywayMigrations(tenantId, dbName, name);

            return tenant;
        } catch (Exception e) {
            // If anything goes wrong, try to clean up
            try {
                jdbcTemplate.execute("DROP DATABASE IF EXISTS " + dbName);
            } catch (Exception ex) {
                // Logging would be appropriate here
                e.printStackTrace();
            }
            throw new RuntimeException("Failed to create tenant: " + e.getMessage(), e);
        }
    }

    /**
     * Get a tenant by ID
     */
    public Optional<Tenant> getTenant(String tenantId) {
        return tenantRepository.findByTenantId(tenantId);
    }

    /**
     * Get all tenants
     */
    public List<Tenant> getAllTenants() {
        return tenantRepository.findAll();
    }

    /**
     * Initialize tenant datasources on application startup
     */
    @PostConstruct
    public void initializeTenants() {
        List<Tenant> tenants = tenantRepository.findAll();
        for (Tenant tenant : tenants) {
            if (tenant.isActive()) {
                // Setup datasource for existing tenant
                dataSourceConfig.addTenantDataSource(tenant.getTenantId(), tenant.getDbName());
            }
        }
    }

    /**
     * Set the current tenant context
     */
    public void setCurrentTenant(String tenantId) {
        // Verify tenant exists
        if (!tenantRepository.existsByTenantId(tenantId)) {
            throw new RuntimeException("Tenant does not exist: " + tenantId);
        }

        TenantContext.setTenantId(tenantId);
    }

    /**
     * Run Flyway migrations for a new tenant database
     */
    private void runFlywayMigrations(String tenantId, String dbName, String name) {
        // Create Flyway instance - without setting tenant context yet
        Flyway flyway = Flyway.configure()
                .dataSource(
                        "jdbc:postgresql://postgres:5432/" + dbName,
                        "postgres",
                        "postgres")
                .locations("classpath:app/db/migration/tenant")
                .baselineOnMigrate(true)
                .load();

        // Run migrations
        flyway.migrate();

        // Populate tenant account data with direct connection
        populateTenantAccountData(tenantId, dbName, name);
    }

    /**
     * Populate tenant account data in the tenant-specific database
     */
    private void populateTenantAccountData(String tenantId, String dbName, String name) {
        try {
            logger.info("Populating tenant account data for tenant: {}", tenantId);

            // Create a direct connection to the tenant database
            String url = "jdbc:postgresql://postgres:5432/" + dbName;
            try (Connection connection = DriverManager.getConnection(url, "postgres", "postgres")) {
                String sql = "INSERT INTO Tenant_Account (tenant_id, name) VALUES (?, ?)";
                try (PreparedStatement statement = connection.prepareStatement(sql)) {
                    statement.setString(1, tenantId);
                    statement.setString(2, name);
                    statement.executeUpdate();
                }
            }

            logger.info("Successfully populated tenant account data for tenant: {}", tenantId);
        } catch (Exception e) {
            logger.error("Failed to populate tenant account data: {}", e.getMessage(), e);
            // We don't want to fail the entire tenant creation if just this step fails
            // So we log the error but don't rethrow
        }
    }
}