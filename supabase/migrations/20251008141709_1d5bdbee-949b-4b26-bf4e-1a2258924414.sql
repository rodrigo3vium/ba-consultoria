-- Add slug and status columns to blog_posts table
ALTER TABLE public.blog_posts 
ADD COLUMN slug TEXT,
ADD COLUMN status TEXT NOT NULL DEFAULT 'published' CHECK (status IN ('draft', 'published'));

-- Create unique index on slug (only for non-null slugs)
CREATE UNIQUE INDEX idx_blog_posts_slug ON public.blog_posts(slug) WHERE slug IS NOT NULL;

-- Add comment for clarity
COMMENT ON COLUMN public.blog_posts.slug IS 'URL-friendly identifier for the post';
COMMENT ON COLUMN public.blog_posts.status IS 'Publication status: draft or published';