-- FairwayPal: participants, votes, comments tables

create table participants (
  id              uuid primary key default gen_random_uuid(),
  trip_id         uuid references trips(id) on delete cascade,
  name            text not null,
  initial         text not null,
  color           text not null,
  role            text not null check (role in ('organiser','golfer','partner')),
  device_uuid     text,
  email           text,
  push_subscription jsonb,
  has_voted       boolean default false,
  opened_link     boolean default false,
  last_seen       timestamptz,
  created_at      timestamptz default now()
);

create index participants_trip_idx on participants (trip_id);
create unique index participants_device_trip_idx on participants (trip_id, device_uuid);

create table votes (
  id              uuid primary key default gen_random_uuid(),
  activity_id     uuid references activities(id) on delete cascade,
  trip_id         uuid references trips(id) on delete cascade,
  participant_id  uuid references participants(id),
  direction       text not null check (direction in ('up','down')),
  created_at      timestamptz default now(),
  unique(activity_id, participant_id)
);

create index votes_activity_idx on votes (activity_id);
create index votes_trip_idx on votes (trip_id);

create table comments (
  id              uuid primary key default gen_random_uuid(),
  activity_id     uuid references activities(id) on delete cascade,
  trip_id         uuid references trips(id) on delete cascade,
  participant_id  uuid references participants(id),
  text            text not null,
  sentiment       text check (sentiment in ('up','down') or sentiment is null),
  ai_summary      text,
  created_at      timestamptz default now()
);

create index comments_activity_idx on comments (activity_id);
