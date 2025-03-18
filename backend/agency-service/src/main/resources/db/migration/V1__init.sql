-- V1__init.sql: Initial migration to create the "agency" table
CREATE SEQUENCE users_seq START WITH 1 INCREMENT BY 1;

CREATE TABLE users (
    user_id BIGINT PRIMARY KEY DEFAULT nextval('users_seq'),
    username VARCHAR(255) NOT NULL,
    unique_identifier VARCHAR(255) NOT NULL
);