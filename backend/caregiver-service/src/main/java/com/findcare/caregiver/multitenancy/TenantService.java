package com.findcare.caregiver.multitenancy;

import com.zaxxer.hikari.HikariDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;
import java.util.List;
import java.util.Map;

@Service
public class TenantService {

    private final JdbcTemplate masterJdbcTemplate;
    private final TenantRoutingDataSource routingDataSource;
    private final DataSource masterDataSource;
    
    @Autowired
    public TenantService(
            @Qualifier("masterJdbcTemplate") JdbcTemplate masterJdbcTemplate,
            @Qualifier("tenantRoutingDataSource") TenantRoutingDataSource routingDataSource,
            @Qualifier("masterDataSource") DataSource masterDataSource) {
        this.masterJdbcTemplate = masterJdbcTemplate;
        this.routingDataSource = routingDataSource;
        this.masterDataSource = masterDataSource;
    }
    
    @PostConstruct
    public void initializeTenantDataSources() {
        // Add master datasource
        routingDataSource.addTenantDataSource("master", masterDataSource);
        
        // Load all tenants from the master database
        String sql = "SELECT t.id, t.clerk_id, t.database_name, td.jdbc_url, td.username, td.password " +
                     "FROM tenant t JOIN tenant_datasource td ON t.id = td.tenant_id " +
                     "WHERE t.status = 'active'";
        
        List<Map<String, Object>> tenants = masterJdbcTemplate.queryForList(sql);
        
        for (Map<String, Object> tenant : tenants) {
            String clerkId = (String) tenant.get("clerk_id");
            String jdbcUrl = (String) tenant.get("jdbc_url");
            String username = (String) tenant.get("username");
            String password = (String) tenant.get("password");
            
            DataSource tenantDataSource = createDataSource(jdbcUrl, username, password);
            routingDataSource.addTenantDataSource(clerkId, tenantDataSource);
        }
    }
    
    private DataSource createDataSource(String jdbcUrl, String username, String password) {
        HikariDataSource dataSource = new HikariDataSource();
        dataSource.setJdbcUrl(jdbcUrl);
        dataSource.setUsername(username);
        dataSource.setPassword(password);
        dataSource.setDriverClassName("org.postgresql.Driver");
        return dataSource;
    }
}