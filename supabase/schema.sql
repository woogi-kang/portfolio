-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Projects Table
create table if not exists projects (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text not null unique,
  description text,
  content text,
  images text[],
  tags text[],
  demo_url text,
  repo_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Resume Table
create table if not exists resume (
  id uuid default uuid_generate_v4() primary key,
  role text not null,
  company text not null,
  start_date date not null,
  end_date date,
  description text,
  type text check (type in ('work', 'education')),
  skills text[],
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Posts Table
create table if not exists posts (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text not null unique,
  excerpt text,
  content text,
  published boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table projects enable row level security;
alter table resume enable row level security;
alter table posts enable row level security;

-- Create Policies
-- Public Read Access
create policy "Public projects are viewable by everyone" on projects for select using (true);
create policy "Public resume is viewable by everyone" on resume for select using (true);
create policy "Public posts are viewable by everyone" on posts for select using (published = true);

-- Authenticated Write Access (Assuming only the owner/admin adds content)
-- You might want to restrict this to specific user IDs in a real app
create policy "Authenticated users can insert projects" on projects for insert with check (auth.role() = 'authenticated');
create policy "Authenticated users can update projects" on projects for update using (auth.role() = 'authenticated');
create policy "Authenticated users can delete projects" on projects for delete using (auth.role() = 'authenticated');

create policy "Authenticated users can insert resume" on resume for insert with check (auth.role() = 'authenticated');
create policy "Authenticated users can update resume" on resume for update using (auth.role() = 'authenticated');
create policy "Authenticated users can delete resume" on resume for delete using (auth.role() = 'authenticated');

create policy "Authenticated users can insert posts" on posts for insert with check (auth.role() = 'authenticated');
create policy "Authenticated users can update posts" on posts for update using (auth.role() = 'authenticated');
create policy "Authenticated users can delete posts" on posts for delete using (auth.role() = 'authenticated');
create policy "Authenticated users can view all posts" on posts for select using (auth.role() = 'authenticated');
