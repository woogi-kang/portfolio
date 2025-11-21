-- Add cover_image column to projects table
ALTER TABLE projects
ADD COLUMN cover_image TEXT;

-- Add comment to explain the column
COMMENT ON COLUMN projects.cover_image IS 'URL of the cover/thumbnail image for the project';
