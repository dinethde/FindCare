# FindCare Multi-Tenant Backend Architecture

## Overview

This project implements a siloed multi-tenant architecture where each agency (tenant) has its own dedicated Postgres database. The system uses a master database to manage tenant records and routes API requests to the correct tenant database at runtime.

## Architecture

The system follows a database-per-tenant model:

1. **Master Database**: Stores tenant metadata including:
   - Tenant information (name, clerk ID, etc.)
   - Database connection details for each tenant
   
2. **Tenant Databases**: Each agency has a dedicated database containing:
   - Agency-specific data
   - Caregiver information
   - Agreements
   - All related data

3. **Services**:
   - **Agency Service**: Manages agency data and handles tenant provisioning
   - **Caregiver Service**: Manages caregiver data
   - **Household Service**: Operates independently with its own database

## How It Works

### Tenant Identification

1. Client applications include the tenant identifier in the request headers: `X-Tenant-ID: [clerk_id]`
2. The backend extracts this header and uses it to route to the correct database
3. If no tenant is specified, the system defaults to the master database

### Tenant Onboarding

When a new agency signs up:

1. The frontend sends the agency's unique Clerk ID to the backend
2. The backend automatically:
   - Creates a new record in the master database
   - Provisions a new Postgres database for the tenant
   - Applies all required database migrations to the new tenant database
   - Stores connection details in the master database

### Request Routing

1. For each incoming request, a filter extracts the tenant ID from the header
2. The system uses Hibernate's multi-tenancy support to select the correct database
3. All subsequent database operations within that request are routed to the tenant's database

## Database Schema

- **Master Database**: Contains tenant and connection details
- **Tenant Databases**: Contain the same schema but are isolated from each other

## Setup and Deployment

1. Start the shared database container:
   ```
   cd backend/shared-db
   docker-compose up -d
   ```

2. Start the agency service:
   ```
   cd backend/agency-service
   docker-compose up -d
   ```

3. Start the caregiver service:
   ```
   cd backend/caregiver-service
   docker-compose up -d
   ```

## API Endpoints

### Tenant Management
- `POST /api/tenants` - Create a new tenant
- `GET /api/tenants/{clerkId}` - Get tenant details

### Agency Operations
- Use tenant-specific endpoints with the `X-Tenant-ID` header

### Caregiver Operations
- Use tenant-specific endpoints with the `X-Tenant-ID` header