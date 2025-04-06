package com.findcare.agency.config;

import javax.sql.DataSource;

import com.zaxxer.hikari.HikariDataSource;
import jakarta.persistence.EntityManagerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.Properties;

@Configuration
@EnableJpaRepositories(basePackages = "com.findcare.agency.repository", entityManagerFactoryRef = "tenantEntityManagerFactory", transactionManagerRef = "tenantTransactionManager")
public class DataSourceConfig {
    @Value("${spring.datasource.url}")
    private String masterUrl;

    @Value("${spring.datasource.username}")
    private String masterUsername;

    @Value("${spring.datasource.password}")
    private String masterPassword;

    @Value("${spring.datasource.driver-class-name}")
    private String driverClassName;

    @Value("${tenant.datasource.url-base}")
    private String tenantUrlBase;

    @Value("${tenant.datasource.username}")
    private String tenantUsername;

    @Value("${tenant.datasource.password}")
    private String tenantPassword;

    @Value("${tenant.datasource.pool.max-size}")
    private int maxPoolSize;

    @Value("${tenant.datasource.pool.min-idle}")
    private int minIdle;

    @Value("${tenant.datasource.pool.max-lifetime}")
    private long maxLifetime;

    // Store tenant datasources
    private final Map<String, DataSource> tenantDataSources = new ConcurrentHashMap<>();

    @Bean
    @Primary
    public DataSource masterDataSource() {
        HikariDataSource dataSource = new HikariDataSource();
        dataSource.setJdbcUrl(masterUrl);
        dataSource.setUsername(masterUsername);
        dataSource.setPassword(masterPassword);
        dataSource.setDriverClassName(driverClassName);
        dataSource.setPoolName("master-pool");
        return dataSource;
    }

    /**
     * Create a JdbcTemplate using the master datasource
     */
    @Bean
    public JdbcTemplate jdbcTemplate(@Qualifier("masterDataSource") DataSource dataSource) {
        return new JdbcTemplate(dataSource);
    }

    @Bean
    public DataSource tenantRoutingDataSource() {
        TenantRoutingDataSource routingDataSource = new TenantRoutingDataSource();
        routingDataSource.setDefaultTargetDataSource(masterDataSource());
        routingDataSource.setTargetDataSources(new HashMap<>());
        return routingDataSource;
    }

    /**
     * Configure the entity manager factory for JPA
     */
    @Bean
    public LocalContainerEntityManagerFactoryBean tenantEntityManagerFactory() {
        LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
        em.setDataSource(tenantRoutingDataSource());
        em.setPackagesToScan("com.findcare.agency.entity");

        HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
        em.setJpaVendorAdapter(vendorAdapter);

        Properties properties = new Properties();
        properties.setProperty("hibernate.dialect", "org.hibernate.dialect.PostgreSQLDialect");
        properties.setProperty("hibernate.hbm2ddl.auto", "validate");
        properties.setProperty("hibernate.show_sql", "true");
        properties.setProperty("hibernate.format_sql", "true");

        // // Add entity filtering to exclude tenant-specific entities when using master
        // DB
        // properties.setProperty("hibernate.exclude-unlisted-classes", "false");

        em.setJpaProperties(properties);

        return em;
    }

    /**
     * Configure transaction manager
     */
    @Bean
    public PlatformTransactionManager tenantTransactionManager(
            @Qualifier("tenantEntityManagerFactory") EntityManagerFactory emf) {
        JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(emf);
        return transactionManager;
    }

    /*
     * Configure transaction manager for JDBC operations
     */
    @Bean
    public PlatformTransactionManager dataSourceTransactionManager() {
        return new DataSourceTransactionManager(tenantRoutingDataSource());
    }

    /**
     * Add a new tenant datasource to the routing datasource
     */
    public void addTenantDataSource(String tenantId, String dbName) {
        // Create a new datasource for the tenant
        HikariDataSource dataSource = new HikariDataSource();
        dataSource.setJdbcUrl(tenantUrlBase + dbName);
        dataSource.setUsername(tenantUsername);
        dataSource.setPassword(tenantPassword);
        dataSource.setDriverClassName(driverClassName);
        dataSource.setPoolName(tenantId + "-pool");
        dataSource.setMaximumPoolSize(maxPoolSize);
        dataSource.setMinimumIdle(minIdle);
        dataSource.setMaxLifetime(maxLifetime);

        // Add to map of tenant datasources
        tenantDataSources.put(tenantId, dataSource);

        // Update the target datasources in the routing datasource
        TenantRoutingDataSource routingDataSource = (TenantRoutingDataSource) tenantRoutingDataSource();
        Map<Object, Object> targetDataSources = new HashMap<>();
        tenantDataSources.forEach(targetDataSources::put);
        routingDataSource.setTargetDataSources(targetDataSources);
        routingDataSource.afterPropertiesSet();
    }
}
