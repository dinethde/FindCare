#!/bin/bash

set -e
set -u

# Split comma-separated databases into an array
IFS=',' read -ra POSTGRES_MULTIPLE_DATABASES <<< "$POSTGRES_MULTIPLE_DATABASES"

# Create all requested databases
for db in "${POSTGRES_MULTIPLE_DATABASES[@]}"; do
  echo "Creating database: $db"
  psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname postgres <<-EOSQL
    CREATE DATABASE $db;
    GRANT ALL PRIVILEGES ON DATABASE $db TO $POSTGRES_USER;
EOSQL
done

echo "All databases created successfully!"