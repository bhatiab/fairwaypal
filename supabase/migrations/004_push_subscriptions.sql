-- Sprint 3: add push subscription storage to participants
ALTER TABLE participants ADD COLUMN IF NOT EXISTS push_subscription jsonb;
