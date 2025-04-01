-- Ensure phone table consistency
DO $$ 
BEGIN
    -- Drop existing columns if they exist (to handle potential conflicts)
    BEGIN
        ALTER TABLE phone DROP COLUMN IF EXISTS land_phone;
    EXCEPTION WHEN undefined_column THEN
        -- Do nothing, column doesn't exist
    END;

    -- Add columns with proper constraints
    ALTER TABLE phone ADD COLUMN IF NOT EXISTS land_phone VARCHAR(50);
    
    -- Ensure phone_number is NOT NULL
    ALTER TABLE phone ALTER COLUMN phone_number SET NOT NULL;

    -- Add any missing indexes
    IF NOT EXISTS (
        SELECT 1 FROM pg_indexes 
        WHERE tablename = 'phone' AND indexname = 'idx_phone_household_id'
    ) THEN
        CREATE INDEX idx_phone_household_id ON phone(household_id);
    END IF;
END $$;