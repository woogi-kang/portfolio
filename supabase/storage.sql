-- Create a new storage bucket for portfolio assets
insert into storage.buckets (id, name, public)
values ('portfolio-assets', 'portfolio-assets', true);

-- Policy to allow public access to view files
create policy "Public Access"
  on storage.objects for select
  using ( bucket_id = 'portfolio-assets' );

-- Policy to allow authenticated users to upload files
create policy "Authenticated users can upload"
  on storage.objects for insert
  with check (
    bucket_id = 'portfolio-assets'
    and auth.role() = 'authenticated'
  );

-- Policy to allow authenticated users to update files
create policy "Authenticated users can update"
  on storage.objects for update
  using (
    bucket_id = 'portfolio-assets'
    and auth.role() = 'authenticated'
  );

-- Policy to allow authenticated users to delete files
create policy "Authenticated users can delete"
  on storage.objects for delete
  using (
    bucket_id = 'portfolio-assets'
    and auth.role() = 'authenticated'
  );
