-- Drop and recreate the column with the correct name
ALTER TABLE address DROP COLUMN IF EXISTS postalcode;
ALTER TABLE address DROP COLUMN IF EXISTS postal_code;
ALTER TABLE address ADD COLUMN postal_code VARCHAR(50);

-- Update constraints to match entity
ALTER TABLE address ALTER COLUMN address TYPE VARCHAR(255);
ALTER TABLE address ALTER COLUMN city TYPE VARCHAR(100);
ALTER TABLE address ALTER COLUMN postal_code TYPE VARCHAR(50);