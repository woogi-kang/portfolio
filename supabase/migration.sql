-- Migration Script: Old Tables -> New Tables

-- 1. Migrate Projects
-- Assuming old table is named 'projects' (public.projects)
-- We need to handle the JSON extraction for tags and date parsing if needed.
-- Since 'period' is a string, we'll just leave created_at as now() or try to parse if possible.
-- We'll generate slugs from titles.

INSERT INTO projects (title, slug, description, content, images, tags, demo_url, repo_url, created_at)
SELECT 
    title,
    lower(regexp_replace(title, '[^a-zA-Z0-9]+', '-', 'g')) || '-' || floor(random() * 1000)::text, -- Simple slug generation
    description,
    description || E'\n\n' || summary, -- Combine description and summary for content
    image_urls,
    -- Extract tech stack items. This is tricky in pure SQL if structure varies. 
    -- We'll try a simple approach or just leave empty if too complex.
    -- Assuming tech_stack is JSONB:
    (
        SELECT array_agg(item)
        FROM jsonb_array_elements_text(tech_stack::jsonb -> 0 -> 'items') as item
    ),
    live_url,
    github_url,
    created_at::timestamp with time zone
FROM public.projects -- OLD TABLE
ON CONFLICT (slug) DO NOTHING;

-- 2. Migrate Experience -> Resume (Work)
INSERT INTO resume (role, company, start_date, end_date, description, type, skills, created_at)
SELECT 
    role,
    company,
    -- Try to parse start date from "YYYY.MM - ..." string
    to_date(split_part(period, ' - ', 1), 'YYYY.MM'),
    -- Try to parse end date. If "Present", set to NULL.
    CASE 
        WHEN split_part(period, ' - ', 2) = 'Present' THEN NULL
        WHEN split_part(period, ' - ', 2) = '' THEN NULL
        ELSE to_date(split_part(period, ' - ', 2), 'YYYY.MM')
    END,
    description,
    'work',
    -- Extract skills from technical_achievements if possible, or just empty
    ARRAY[]::text[],
    created_at::timestamp with time zone
FROM public.experience; -- OLD TABLE

-- 3. Migrate Education -> Resume (Education)
INSERT INTO resume (role, company, start_date, end_date, description, type, skills, created_at)
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
FROM public.education; -- OLD TABLE

-- 4. Migrate Blog Posts -> Posts
INSERT INTO posts (title, slug, excerpt, content, published, created_at)
SELECT 
    title,
    lower(regexp_replace(title, '[^a-zA-Z0-9]+', '-', 'g')) || '-' || floor(random() * 1000)::text,
    description,
    content,
    true,
    created_at::timestamp with time zone
FROM public.blog_posts -- OLD TABLE
ON CONFLICT (slug) DO NOTHING;
