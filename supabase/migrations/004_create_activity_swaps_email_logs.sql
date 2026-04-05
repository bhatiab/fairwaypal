-- Activity swaps (for the swap flow)
create table activity_swaps (
  id                       uuid primary key default gen_random_uuid(),
  original_activity_id     uuid references activities(id),
  trip_id                  uuid references trips(id),
  constraint_reason        text,
  alternatives             jsonb,
  status                   text default 'pending' check (status in ('pending','selected','dismissed')),
  selected_alternative_index int,
  created_at               timestamptz default now()
);

create index activity_swaps_trip_idx on activity_swaps (trip_id);

-- Email logs
create table email_logs (
  id        uuid primary key default gen_random_uuid(),
  trip_id   uuid references trips(id),
  type      text,
  subject   text,
  sent_at   timestamptz default now(),
  status    text
);

create index email_logs_trip_idx on email_logs (trip_id);
