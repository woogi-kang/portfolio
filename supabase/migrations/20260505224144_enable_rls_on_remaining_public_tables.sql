-- Enable RLS on public tables that were left open after the portfolio schema
-- migration. These tables are not queried by the current app, so no public
-- read/write policies are added for them here.
do $$
declare
  table_name text;
begin
  foreach table_name in array array[
    'old_blog_posts',
    'old_experience',
    'old_education',
    'qualifications',
    'skills'
  ]
  loop
    if to_regclass(format('public.%I', table_name)) is not null then
      execute format('alter table public.%I enable row level security', table_name);
      execute format('revoke insert, update, delete on table public.%I from anon', table_name);
      execute format('revoke insert, update, delete on table public.%I from authenticated', table_name);
    end if;
  end loop;
end $$;

-- Keep anonymous clients from mutating the app-facing tables even though their
-- RLS policies already deny these writes.
do $$
declare
  table_name text;
begin
  foreach table_name in array array[
    'projects',
    'resume',
    'posts',
    'old_projects'
  ]
  loop
    if to_regclass(format('public.%I', table_name)) is not null then
      execute format('revoke insert, update, delete on table public.%I from anon', table_name);
    end if;
  end loop;
end $$;
