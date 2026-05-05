-- Remove broad grants from legacy tables that are not used by the current app.
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
      execute format('revoke all privileges on table public.%I from anon', table_name);
      execute format('revoke all privileges on table public.%I from authenticated', table_name);
    end if;
  end loop;
end $$;

-- Keep the public portfolio API read-only for anonymous users. Authenticated
-- users keep the existing insert/update/delete grants used by the admin page.
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
      execute format('revoke insert, update, delete, truncate, references, trigger on table public.%I from anon', table_name);
      execute format('revoke truncate, references, trigger on table public.%I from authenticated', table_name);
    end if;
  end loop;
end $$;
