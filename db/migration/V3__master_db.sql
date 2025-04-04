-- Master database schema for tenant management
CREATE TABLE tenant (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    clerk_id VARCHAR(255) NOT NULL UNIQUE,
    database_name VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'active'
);

-- Add indexes for performance
CREATE INDEX idx_tenant_clerk_id ON tenant(clerk_id);
CREATE INDEX idx_tenant_database_name ON tenant(database_name);

-- Table to store database connection details
CREATE TABLE tenant_datasource (
    id SERIAL PRIMARY KEY,
    tenant_id INTEGER NOT NULL,
    jdbc_url VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    driver_class_name VARCHAR(255) DEFAULT 'org.postgresql.Driver',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (tenant_id) REFERENCES tenant(id) ON DELETE CASCADE
);