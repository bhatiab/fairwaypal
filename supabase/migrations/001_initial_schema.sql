-- FairwayPal Sprint 1 schema
-- Run in Supabase dashboard SQL editor or via: supabase db push

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- trips
CREATE TABLE IF NOT EXISTS trips (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug             text UNIQUE NOT NULL,
  name             text NOT NULL,
  destination      text NOT NULL,
  dates_start      date NOT NULL,
  dates_end        date NOT NULL,
  nights           int NOT NULL,
  golfers_count    int NOT NULL,
  partners_count   int NOT NULL DEFAULT 0,
  budget_per_round int,
  vibe             text CHECK (vibe IN ('serious-golf', 'full-send', 'mixed')),
  status           text NOT NULL DEFAULT 'draft'
                     CHECK (status IN ('draft', 'voting', 'locked', 'completed')),
  organiser_uuid   text NOT NULL,
  organiser_email  text,
  intake_data      jsonb,
  created_at       timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS trips_organiser_uuid_idx ON trips (organiser_uuid);
CREATE INDEX IF NOT EXISTS trips_slug_idx ON trips (slug);

-- activities
CREATE TABLE IF NOT EXISTS activities (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  trip_id        uuid NOT NULL REFERENCES trips(id) ON DELETE CASCADE,
  name           text NOT NULL,
  detail         text,
  time_of_day    text,
  day            text,
  day_index      int,
  sort_order     int,
  side           text NOT NULL CHECK (side IN ('golf', 'partner', 'shared')),
  status         text NOT NULL DEFAULT 'proposed'
                   CHECK (status IN ('proposed','in-discussion','confirmed','booked','cancelled','removed')),
  price          int,        -- USD cents
  tags           text[],
  booking_url    text,
  ai_rationale   text,
  created_at     timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS activities_trip_id_idx ON activities (trip_id);
CREATE INDEX IF NOT EXISTS activities_order_idx ON activities (trip_id, day_index, sort_order);

-- Row Level Security (permissive for Sprint 1 — tighten in Sprint 2)
ALTER TABLE trips ENABLE ROW LEVEL SECURITY;
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'trips' AND policyname = 'public_read_trips') THEN
    CREATE POLICY "public_read_trips" ON trips FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'trips' AND policyname = 'public_insert_trips') THEN
    CREATE POLICY "public_insert_trips" ON trips FOR INSERT WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'activities' AND policyname = 'public_read_activities') THEN
    CREATE POLICY "public_read_activities" ON activities FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'activities' AND policyname = 'public_insert_activities') THEN
    CREATE POLICY "public_insert_activities" ON activities FOR INSERT WITH CHECK (true);
  END IF;
END
$$;
