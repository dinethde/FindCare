package com.findcare.agency.multitenancy;

import com.findcare.agency.entity.TenantEntity;
import com.findcare.agency.repository.TenantRepository;
import com.zaxxer.hikari.HikariDataSource;
import org.flywaydb.core.Flyway;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.init.ResourceDatabasePopulator;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;
import java.util.List;
import java.util.Optional;

@Service
public class TenantService {

    private final TenantRepository tenantRepository;
    private final JdbcTemplate masterJdbcTemplate;
    private final TenantRoutingDataSource routingDataSource;
    private final DataSource masterDataSource;
    private final DataSourceBuilder dataSourceBuilder;
    
    @Autowired
    public TenantService(
            TenantRepository tenantRepository,
            @Qualifier("masterJdbcTemplate") JdbcTemplate masterJdbcTemplate,
            @Qualifier("tenantRoutingDataSource") TenantRoutingDataSource routingDataSource,
            @Qualifier("masterDataSource") DataSource masterDataSource) {
        this.tenantRepository = tenantRepository;
        this.masterJdbcTemplate = masterJdbcTemplate;
        this.routingDataSource = routingDataSource;
        this.masterDataSource = masterDataSource;
        this.dataSourceBuilder = new DataSourceBuilder();
    }
    
    @PostConstruct
    public void initializeTenantDataSources() {
        // Add master datasource
        routingDataSource.addTenantDataSource("master", masterDataSource);
        
        // Load existing tenants from the database
        List<TenantEntity> tenants = tenantRepository.findAll();
        tenants.forEach(tenant -> {
            if ("active".equals(tenant.getStatus())) {
                DataSource tenantDataSource = dataSourceBuilder.buildDataSource(
                        tenant.getDatasource().getJdbcUrl(),
                        tenant.getDatasource().getUsername(),
                        tenant.getDatasource().getPassword()
                );
                routingDataSource.addTenantDataSource(tenant.getClerkId(), tenantDataSource);
            }
        });
    }
    
    @Transactional
    public TenantEntity createTenant(String name, String clerkId) {
        // Check if tenant already exists
        if (tenantRepository.findByClerkId(clerkId).isPresent()) {
            throw new TenantAlreadyExistsException("Tenant with clerk ID " + clerkId + " already exists");
        }
        
        // Create a unique database name
        String databaseName = "tenant_" + clerkId.replaceAll("[^a-zA-Z0-9]", "_");
        
        // Create tenant record
        TenantEntity tenant = new TenantEntity();
        tenant.setName(name);
        tenant.setClerkId(clerkId);
        tenant.setDatabaseName(databaseName);
        tenant.setStatus("provisioning");
        
        tenant = tenantRepository.save(tenant);
        
        try {
            // Create a new database for this tenant
            createTenantDatabase(databaseName);
            
            // Add datasource connection info
            String jdbcUrl = buildJdbcUrl(databaseName);
            String username = "admin"; // Would use environment variables in production
            String password = "root123"; // Would use environment variables in production
            
            TenantDatasourceEntity datasource = new TenantDatasourceEntity();
            datasource.setTenant(tenant);
            datasource.setJdbcUrl(jdbcUrl);
            datasource.setUsername(username);
            datasource.setPassword(password);
            tenant.setDatasource(datasource);
            
            // Run database migrations to set up schema
            initializeTenantDatabase(jdbcUrl, username, password);
            
            // Create DataSource and add to routing
            DataSource tenantDataSource = dataSourceBuilder.buildDataSource(jdbcUrl, username, password);
            routingDataSource.addTenantDataSource(tenant.getClerkId(), tenantDataSource);
            
            // Update status
            tenant.setStatus("active");
            return tenantRepository.save(tenant);
        } catch (Exception e) {
            tenant.setStatus("failed");
            tenantRepository.save(tenant);
            throw new TenantProvisioningException("Failed to provision tenant database", e);
        }
    }
    
    private void createTenantDatabase(String databaseName) {
        // Create a new database for the tenant
        masterJdbcTemplate.execute("CREATE DATABASE " + databaseName);
    }
    
    private String buildJdbcUrl(String databaseName) {
        // We'll connect to the same Postgres instance, but a different database
        return "jdbc:postgresql://findcare-postgres:5432/" + databaseName;
    }
    
    private void initializeTenantDatabase(String jdbcUrl, String username, String password) {
        // Create a temporary DataSource to initialize the new database
        DataSource tenantDataSource = dataSourceBuilder.buildDataSource(jdbcUrl, username, password);
        
        // Initialize schema using Flyway
        Flyway flyway = Flyway.configure()
                .dataSource(tenantDataSource)
                .locations("classpath:db/migration/tenant")
                .baselineOnMigrate(true)
                .load();
        flyway.migrate();
    }
    
    public Optional<TenantEntity> getTenantByClerkId(String clerkId) {
        return tenantRepository.findByClerkId(clerkId);
    }
    
    // Simple DataSource builder inner class
    private static class DataSourceBuilder {
        public DataSource buildDataSource(String url, String username, String password) {
            HikariDataSource dataSource = new HikariDataSource();
            dataSource.setJdbcUrl(url);
            dataSource.setUsername(username);
            dataSource.setPassword(password);
            dataSource.setDriverClassName("org.postgresql.Driver");
            return dataSource;
        }
    }
    
    // Custom exceptions
    public static class TenantAlreadyExistsException extends RuntimeException {
        public TenantAlreadyExistsException(String message) {
            super(message);
        }
    }
    
    public static class TenantProvisioningException extends RuntimeException {
        public TenantProvisioningException(String message, Throwable cause) {
            super(message, cause);
        }
    }
}