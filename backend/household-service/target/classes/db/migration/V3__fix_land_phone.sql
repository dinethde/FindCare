-- Add NOT NULL constraint to phone_number if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_name = 'phone'
        AND column_name = 'phone_number'
        AND is_nullable = 'NO'
    ) THEN
        ALTER TABLE phone ALTER COLUMN phone_number SET NOT NULL;
    END IF;
END $$;
