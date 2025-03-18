-- Migrate data from household_address bridge table to direct relationship in address table
UPDATE address a
SET household_id = ha.household_id
FROM household_address ha
WHERE a.address_id = ha.address_id;

-- Make household_id NOT NULL since it's required by the entity relationship
ALTER TABLE address ALTER COLUMN household_id SET NOT NULL;

-- Drop the bridge table since we now have a direct relationship
DROP TABLE IF EXISTS household_address;