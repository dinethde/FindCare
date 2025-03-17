-- V1__init.sql: Initial migration to create the "agency" table
CREATE TABLE agency (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255)
);
