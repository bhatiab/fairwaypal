-- Sprint 1: participants, votes, comments tables
-- Run in Supabase dashboard SQL editor or via: supabase db push

-- participants
CREATE TABLE IF NOT EXISTS participants (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  trip_id         uuid NOT NULL REFERENCES trips(id) ON DELETE CASCADE,
  name            text NOT NULL,
  initial         text NOT NULL,
  color           text NOT NULL,
  role            text NOT NULL CHECK (role IN ('organiser', 'golfer', 'partner')),
  device_uuid     text,
  has_voted       boolean NOT NULL DEFAULT false,
  opened_link     boolean NOT NULL DEFAULT false,
  last_seen       timestamptz,
  created_at      timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS participants_trip_id_idx ON participants (trip_id);
CREATE INDEX IF NOT EXISTS participants_device_uuid_idx ON participants (device_uuid);

-- votes
CREATE TABLE IF NOT EXISTS votes (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  activity_id     uuid NOT NULL REFERENCES activities(id) ON DELETE CASCADE,
  trip_id         uuid NOT NULL REFERENCES trips(id) ON DELETE CASCADE,
  participant_id  uuid NOT NULL REFERENCES participants(id) ON DELETE CASCADE,
  direction       text NOT NULL CHECK (direction IN ('up', 'down')),
  created_at      timestamptz NOT NULL DEFAULT now(),
  UNIQUE(activity_id, participant_id)
);

CREATE INDEX IF NOT EXISTS votes_activity_id_idx ON votes (activity_id);
CREATE INDEX IF NOT EXISTS votes_trip_id_idx ON votes (trip_id);

-- comments
CREATE TABLE IF NOT EXISTS comments (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  activity_id     uuid NOT NULL REFERENCES activities(id) ON DELETE CASCADE,
  trip_id         uuid NOT NULL REFERENCES trips(id) ON DELETE CASCADE,
  participant_id  uuid NOT NULL REFERENCES participants(id) ON DELETE CASCADE,
  text            text NOT NULL,
  sentiment       text CHECK (sentiment IN ('up', 'down')),
  created_at      timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS comments_activity_id_idx ON comments (activity_id);

-- RLS policies (permissive for Sprint 1)
ALTER TABLE participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  -- participants: public read/insert
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'participants' AND policyname = 'public_read_participants') THEN
    CREATE POLICY "public_read_participants" ON participants FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'participants' AND policyname = 'public_insert_participants') THEN
    CREATE POLICY "public_insert_participants" ON participants FOR INSERT WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'participants' AND policyname = 'public_update_participants') THEN
    CREATE POLICY "public_update_participants" ON participants FOR UPDATE USING (true);
  END IF;

  -- votes: public read/insert/update
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'votes' AND policyname = 'public_read_votes') THEN
    CREATE POLICY "public_read_votes" ON votes FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'votes' AND policyname = 'public_insert_votes') THEN
    CREATE POLICY "public_insert_votes" ON votes FOR INSERT WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'votes' AND policyname = 'public_update_votes') THEN
    CREATE POLICY "public_update_votes" ON votes FOR UPDATE USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'votes' AND policyname = 'public_delete_votes') THEN
    CREATE POLICY "public_delete_votes" ON votes FOR DELETE USING (true);
  END IF;

  -- comments: public read/insert
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'comments' AND policyname = 'public_read_comments') THEN
    CREATE POLICY "public_read_comments" ON comments FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'comments' AND policyname = 'public_insert_comments') THEN
    CREATE POLICY "public_insert_comments" ON comments FOR INSERT WITH CHECK (true);
  END IF;

  -- activities: update policy (needed for status changes)
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'activities' AND policyname = 'public_update_activities') THEN
    CREATE POLICY "public_update_activities" ON activities FOR UPDATE USING (true);
  END IF;

  -- trips: update policy (needed for status changes)
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'trips' AND policyname = 'public_update_trips') THEN
    CREATE POLICY "public_update_trips" ON trips FOR UPDATE USING (true);
  END IF;
END
$$;
