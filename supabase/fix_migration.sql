-- Robust Migration Fix Script
-- Run this ENTIRE script in Supabase SQL Editor

-- 1. Safe Rename of Old Tables (using PL/pgSQL to avoid errors if already renamed)
DO $$
BEGIN
    -- Rename projects -> old_projects
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'projects') 
       AND NOT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'old_projects') THEN
        ALTER TABLE public.projects RENAME TO old_projects;
    END IF;

    -- Rename experience -> old_experience
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'experience') 
       AND NOT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'old_experience') THEN
        ALTER TABLE public.experience RENAME TO old_experience;
    END IF;

    -- Rename education -> old_education
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'education') 
       AND NOT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'old_education') THEN
        ALTER TABLE public.education RENAME TO old_education;
    END IF;

    -- Rename blog_posts -> old_blog_posts
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'blog_posts') 
       AND NOT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'old_blog_posts') THEN
        ALTER TABLE public.blog_posts RENAME TO old_blog_posts;
    END IF;
END $$;

-- 2. Drop New Tables (to ensure we start fresh with correct schema)
DROP TABLE IF EXISTS public.projects CASCADE;
DROP TABLE IF EXISTS public.resume CASCADE;
DROP TABLE IF EXISTS public.posts CASCADE;

-- 3. Create New Schema

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Projects Table
CREATE TABLE public.projects (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  description text,
  content text,
  images text[],
  tags text[],
  demo_url text,
  repo_url text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Resume Table
CREATE TABLE public.resume (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  role text NOT NULL,
  company text NOT NULL,
  start_date date NOT NULL,
  end_date date,
  description text,
  type text CHECK (type IN ('work', 'education')),
  skills text[],
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Posts Table
CREATE TABLE public.posts (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  excerpt text,
  content text,
  published boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resume ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Create Policies (Drop first just in case, though DROP TABLE CASCADE should handle it)
-- Re-creating policies ensures they are attached to the new tables
CREATE POLICY "Public projects are viewable by everyone" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Public resume is viewable by everyone" ON public.resume FOR SELECT USING (true);
CREATE POLICY "Public posts are viewable by everyone" ON public.posts FOR SELECT USING (published = true);

CREATE POLICY "Authenticated users can insert projects" ON public.projects FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can update projects" ON public.projects FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can delete projects" ON public.projects FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can insert resume" ON public.resume FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can update resume" ON public.resume FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can delete resume" ON public.resume FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can insert posts" ON public.posts FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can update posts" ON public.posts FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can delete posts" ON public.posts FOR DELETE USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can view all posts" ON public.posts FOR SELECT USING (auth.role() = 'authenticated');


-- 4. Migrate Data (from old_* tables)

-- Migrate Projects
INSERT INTO public.projects (title, slug, description, content, images, tags, demo_url, repo_url, created_at)
SELECT 
    title,
    lower(regexp_replace(title, '[^a-zA-Z0-9]+', '-', 'g')) || '-' || floor(random() * 1000)::text,
    description,
    description || E'\n\n' || summary,
    image_urls,
    (
        SELECT array_agg(item)
        FROM jsonb_array_elements_text(tech_stack::jsonb -> 0 -> 'items') as item
    ),
    live_url,
    github_url,
    created_at::timestamp with time zone
FROM public.old_projects
ON CONFLICT (slug) DO NOTHING;

-- Migrate Experience -> Resume (Work)
INSERT INTO public.resume (role, company, start_date, end_date, description, type, skills, created_at)
SELECT 
    role,
    company,
    to_date(split_part(period, ' - ', 1), 'YYYY.MM'),
    CASE 
        WHEN split_part(period, ' - ', 2) = 'Present' THEN NULL
        WHEN split_part(period, ' - ', 2) = '' THEN NULL
        ELSE to_date(split_part(period, ' - ', 2), 'YYYY.MM')
    END,
    description,
    'work',
    ARRAY[]::text[],
    created_at::timestamp with time zone
FROM public.old_experience;

-- Migrate Education -> Resume (Education)
INSERT INTO public.resume (role, company, start_date, end_date, description, type, skills, created_at)
SELECT 
    degree || ' in ' || major,
    institution,
    to_date(split_part(period, ' - ', 1), 'YYYY.MM'),
    CASE 
        WHEN split_part(period, ' - ', 2) = 'Present' THEN NULL
        WHEN split_part(period, ' - ', 2) = '' THEN NULL
        ELSE to_date(split_part(period, ' - ', 2), 'YYYY.MM')
    END,
    description,
    'education',
    ARRAY[]::text[],
    now()
FROM public.old_education;

-- Migrate Blog Posts -> Posts
INSERT INTO public.posts (title, slug, excerpt, content, published, created_at)
SELECT 
    title,
    lower(regexp_replace(title, '[^a-zA-Z0-9]+', '-', 'g')) || '-' || floor(random() * 1000)::text,
    description,
    content,
    true,
    created_at::timestamp with time zone
FROM public.old_blog_posts
ON CONFLICT (slug) DO NOTHING;
