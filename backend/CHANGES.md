# Multi-Tenant Migration Changes

This document details the changes made to implement the multi-tenant architecture for FindCare.

## Key Changes

1. **Master Database Setup**
   - Created a new master database schema to store tenant metadata
   - Implemented tables for tenant information and database connection details

2. **Agency Service Changes**
   - Added multi-tenant configuration for dynamic database routing
   - Created tenant service for provisioning new tenant databases
   - Implemented tenant entity and repository classes
   - Added tenant controller for management operations
   - Updated application.yml to support multi-tenancy
   - Configured Flyway to work with the master and tenant databases

3. **Caregiver Service Changes**
   - Added multi-tenant support for database routing
   - Implemented tenant context and filter
   - Updated application.yml for multi-tenant configuration
   - Configured the service to get tenant information from the master database

4. **Database Container Setup**
   - Updated docker-compose.yml to create the master database
   - Added script to create multiple databases
   - Configured environment variables for multi-tenant support

5. **Documentation**
   - Added README explaining the multi-tenant architecture
   - Documented APIs and usage patterns

## Design Decisions

1. **Database Per Tenant**
   - Each agency has a completely isolated database
   - No risk of data leakage between tenants
   - Scalable solution for growing number of tenants

2. **Header-Based Routing**
   - Using `X-Tenant-ID` header for simplicity and flexibility
   - No JWT token modification required

3. **Automatic Provisioning**
   - New tenant databases are created automatically on signup
   - Flyway migrations ensure consistent schema across all tenant databases

4. **Master Database for Routing**
   - Single source of truth for tenant information
   - Efficient lookup and routing mechanism

## Migration Summary

The system has been transitioned from a single shared database to a siloed, multi-tenant model where:

1. Each agency (tenant) has its own dedicated Postgres database
2. A master database tracks tenant records and connection details
3. API requests are dynamically routed to the correct tenant database
4. Tenant onboarding is fully automated