-- Add land_phone column to the phone table
ALTER TABLE phone ADD COLUMN IF NOT EXISTS land_phone VARCHAR(50);