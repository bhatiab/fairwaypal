-- Add booking fields to activities
alter table activities add column if not exists booking_url text;
alter table activities add column if not exists booking_ref text;
alter table activities add column if not exists affiliate_source text;
alter table activities add column if not exists booked_at timestamptz;
alter table activities add column if not exists confirmed_at timestamptz;

-- Add budget + lock fields to trips
alter table trips add column if not exists budget_per_golfer int;
alter table trips add column if not exists budget_per_partner int;
alter table trips add column if not exists locked_at timestamptz;
