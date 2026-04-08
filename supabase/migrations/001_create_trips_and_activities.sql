-- FairwayPal MVP: trips + activities tables

create extension if not exists "pgcrypto";

create table trips (
  id            uuid primary key default gen_random_uuid(),
  slug          text unique not null,
  name          text not null,
  destination   text not null,
  dates_start   date not null,
  dates_end     date not null,
  nights        int not null,
  golfers_count int not null,
  partners_count int default 0,
  budget_per_round int,
  vibe          text,
  status        text default 'draft',
  organiser_uuid text not null,
  organiser_email text,
  itinerary     jsonb not null,
  intake_data   jsonb,
  created_at    timestamptz default now()
);

create index trips_slug_idx on trips (slug);
create index trips_organiser_idx on trips (organiser_uuid);

create table activities (
  id            uuid primary key default gen_random_uuid(),
  trip_id       uuid references trips(id) on delete cascade,
  name          text not null,
  detail        text,
  time_of_day   text,
  day           text,
  day_index     int,
  sort_order    int,
  side          text not null,
  status        text default 'proposed',
  price         int,
  price_unit    text,
  tags          text[],
  ai_rationale  text,
  created_at    timestamptz default now()
);

create index activities_trip_idx on activities (trip_id);
