-- Add household_id column to address table
ALTER TABLE address ADD COLUMN IF NOT EXISTS household_id BIGINT;

-- Add foreign key constraint
ALTER TABLE address 
ADD CONSTRAINT fk_address_household 
FOREIGN KEY (household_id) 
REFERENCES household(household_id) 
ON DELETE CASCADE;

-- Copy data from household_address bridge table if exists
UPDATE address a
SET household_id = ha.household_id
FROM household_address ha
WHERE ha.address_id = a.address_id;