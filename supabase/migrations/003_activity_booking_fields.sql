-- Sprint 2: add booking/confirmation fields to activities and locked_at to trips

-- Activities: booking and confirmation tracking
ALTER TABLE activities ADD COLUMN IF NOT EXISTS confirmed_at timestamptz;
ALTER TABLE activities ADD COLUMN IF NOT EXISTS booked_at timestamptz;
ALTER TABLE activities ADD COLUMN IF NOT EXISTS booking_ref text;

-- Trips: lock timestamp
ALTER TABLE trips ADD COLUMN IF NOT EXISTS locked_at timestamptz;
