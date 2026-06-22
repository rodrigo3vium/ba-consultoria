import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { Share2 } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import PageLayout from "@/components/pb/PageLayout";
import StratCard from "@/components/pb/StratCard";
import Tag from "@/components/pb/Tag";

const preprocessMarkdown = (md: string) => {
  const lines = md.split("\n");
  const out: string[] = [];
  let inCode = false;

  const isList = (s: string) => /^(\*|-|\d+\.)\s+/.test(s);
  const isHeading = (s: string) => /^#{1,6}\s+/.test(s);
  const isQuote = (s: string) => /^>\s?/.test(s);
  const isFence = (s: string) => /^```/.test(s);

  for (let i = 0; i < lines.length; i++) {
    const curr = lines[i];
    const currTrim = curr.trim();

    if (isFence(currTrim)) {
      inCode = !inCode;
      out.push(curr);
      continue;
    }

    out.push(curr);

    if (inCode) continue;

    const next = i < lines.length - 1 ? lines[i + 1] : "";
    const nextTrim = next.trim();

    const currEmpty = currTrim === "";
    const nextEmpty = nextTrim === "";

    const currSpecial = isList(currTrim) || isHeading(currTrim) || isQuote(currTrim);
    const nextSpecial = isList(nextTrim) || isHeading(nextTrim) || isQuote(nextTrim);

    if (!currEmpty && !nextEmpty && !currSpecial && !nextSpecial) {
      out.push("");
    }
  }

  return out.join("\n");
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const { isAdmin } = useAuth();
  const { toast } = useToast();

  const { data: post, isLoading } = useQuery({
    queryKey: ['blog-post', id],
    queryFn: async () => {
      if (!id) throw new Error('ID não fornecido');

      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', parseInt(id))
        .maybeSingle();

      if (error) throw error;
      return data;
    }
  });

  const { data: allPosts } = useQuery({
    queryKey: ['all-blog-posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    }
  });

  const currentIndex = allPosts?.findIndex(p => p.id.toString() === id) ?? -1;
  const previousPost = currentIndex > 0 && allPosts ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex >= 0 && allPosts && currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  const relatedPosts = allPosts
    ?.filter(p => p.id.toString() !== id && p.category === post?.category)
    .slice(0, 3) || [];

  const processedContent = useMemo(
    () => (post?.content ? preprocessMarkdown(post.content) : ""),
    [post?.content]
  );

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Blog Nexus`;

      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.excerpt);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = post.excerpt;
        document.head.appendChild(meta);
      }
    }
  }, [post]);

  if (isLoading) {
    return (
      <PageLayout trackingName="BA Consultoria - Blog Post">
        <div className="max-w-4xl mx-auto px-4 py-24">
          <div className="grid grid-cols-1 gap-px bg-pb-grid-strong border border-pb-grid-strong">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-pb-void p-8 animate-pulse">
                <div className="h-3 bg-pb-void-elev w-24 mb-4" />
                <div className="h-6 bg-pb-void-elev w-3/4 mb-3" />
                <div className="h-4 bg-pb-void-elev w-full" />
              </div>
            ))}
          </div>
        </div>
      </PageLayout>
    );
  }

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copiado",
        description: "O link foi copiado para a area de transferencia."
      });
    }
  };

  return (
    <PageLayout trackingName="BA Consultoria - Blog Post">

      {/* Breadcrumb */}
      <section className="border-b border-pb-grid-strong py-5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="hover:text-pb-ink transition-colors"
            >
              Home
            </Link>
            <span className="text-pb-grid-strong">/</span>
            <Link
              to="/blog"
              onClick={() => window.scrollTo(0, 0)}
              className="hover:text-pb-ink transition-colors"
            >
              Blog
            </Link>
            <span className="text-pb-grid-strong">/</span>
            <span className="text-pb-ink-soft line-clamp-1">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Artigo */}
      <article className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Imagem de capa */}
          {post.image && (
            <div className="aspect-video overflow-hidden mb-10 border border-pb-grid-strong">
              <img
                loading="lazy"
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(20%)" }}
              />
            </div>
          )}

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Tag variant="cyan">{post.category || 'INSIGHT'}</Tag>
            {isAdmin && <Tag variant="default">ADMIN</Tag>}
            <span className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan">
              {post.date}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">
              {post.author}
            </span>
            <button
              onClick={handleShare}
              className="ml-auto flex items-center gap-1.5 btn-ghost"
            >
              <Share2 className="w-3 h-3" />
              COMPARTILHAR
            </button>
          </div>

          {/* Titulo */}
          <h1 className="font-display uppercase text-pb-ink text-[clamp(36px,4vw,64px)] leading-[0.92] mb-10">
            {post.title}
          </h1>

          {/* Conteudo */}
          {post.content && (
            <div className="font-body text-pb-ink-soft text-lg leading-relaxed
              prose prose-lg max-w-none
              prose-headings:font-display prose-headings:uppercase prose-headings:text-pb-ink prose-headings:leading-[0.95] prose-headings:font-normal
              prose-h1:text-[clamp(28px,3vw,48px)] prose-h1:mb-6 prose-h1:mt-12
              prose-h2:text-[clamp(24px,2.5vw,40px)] prose-h2:mb-5 prose-h2:mt-10
              prose-h3:text-[clamp(20px,2vw,32px)] prose-h3:mb-4 prose-h3:mt-8
              prose-h4:text-xl prose-h4:mb-3 prose-h4:mt-6
              prose-p:text-pb-ink-soft prose-p:leading-relaxed prose-p:mb-6 prose-p:font-body
              prose-strong:text-pb-ink prose-strong:font-semibold
              prose-ul:mb-6 prose-ul:mt-4
              prose-ol:mb-6 prose-ol:mt-4
              prose-li:text-pb-ink-soft prose-li:mb-3 prose-li:leading-relaxed prose-li:font-body
              prose-blockquote:text-pb-ink-soft prose-blockquote:border-l-pb-cyan prose-blockquote:border-l-2 prose-blockquote:bg-pb-void-card prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-8 prose-blockquote:italic prose-blockquote:not-italic
              prose-a:text-pb-cyan prose-a:no-underline prose-a:font-mono prose-a:text-sm hover:prose-a:text-pb-cyan-soft
              prose-code:text-pb-cyan prose-code:bg-pb-void-card prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-mono
              prose-pre:bg-pb-void-deep prose-pre:border prose-pre:border-pb-grid-strong prose-pre:p-4 prose-pre:my-8
              prose-img:my-8 prose-img:border prose-img:border-pb-grid-strong
              prose-hr:border-pb-grid-strong prose-hr:my-12
              mb-12">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{processedContent}</ReactMarkdown>
            </div>
          )}

          {/* Navegacao anterior / proximo */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 border-t border-pb-grid-strong">
            {previousPost ? (
              <Link
                to={`/blog/${previousPost.id}`}
                onClick={() => window.scrollTo(0, 0)}
                className="group flex items-center gap-3 font-mono text-[11px] uppercase tracking-mono-wide text-pb-ink-muted hover:text-pb-ink transition-colors"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                <div className="text-left">
                  <div className="text-pb-cyan mb-0.5">ANTERIOR</div>
                  <div className="line-clamp-1 max-w-48 normal-case text-pb-ink-soft font-body text-sm capitalize">{previousPost.title}</div>
                </div>
              </Link>
            ) : <div />}

            {nextPost && (
              <Link
                to={`/blog/${nextPost.id}`}
                onClick={() => window.scrollTo(0, 0)}
                className="group flex items-center gap-3 font-mono text-[11px] uppercase tracking-mono-wide text-pb-ink-muted hover:text-pb-ink transition-colors"
              >
                <div className="text-right">
                  <div className="text-pb-cyan mb-0.5">PROXIMO</div>
                  <div className="line-clamp-1 max-w-48 normal-case text-pb-ink-soft font-body text-sm capitalize">{nextPost.title}</div>
                </div>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            )}
          </div>
        </div>
      </article>

      {/* Posts relacionados */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-pb-grid-strong py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10 font-mono text-[11px] uppercase tracking-mono-wide">
              <span className="text-pb-cyan">→</span>
              <span className="h-px w-12 bg-pb-grid-strong" />
              <span className="text-pb-ink-muted">ARTIGOS RELACIONADOS</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-pb-grid-strong border border-pb-grid-strong">
              {relatedPosts.map((relatedPost) => (
                <StratCard key={relatedPost.id} as="article" className="p-6">
                  {relatedPost.image && (
                    <div className="aspect-video overflow-hidden mb-4 border border-pb-grid-strong">
                      <img
                        loading="lazy"
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                        style={{ filter: "grayscale(20%)" }}
                      />
                    </div>
                  )}
                  <Tag variant="cyan">{relatedPost.category || 'INSIGHT'}</Tag>
                  <h3 className="font-display text-xl uppercase text-pb-ink mt-3 leading-[0.95] line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="font-body text-pb-ink-soft text-sm leading-relaxed mt-2 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <Link
                    to={`/blog/${relatedPost.id}`}
                    onClick={() => window.scrollTo(0, 0)}
                    className="mt-4 inline-block font-mono text-[11px] text-pb-cyan uppercase tracking-mono-wide hover:text-pb-cyan-soft transition-colors"
                  >
                    LER →
                  </Link>
                </StratCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Voltar */}
      <section className="border-t border-pb-grid-strong py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            onClick={() => window.scrollTo(0, 0)}
            className="btn-ghost inline-flex items-center gap-2"
          >
            ← VOLTAR PARA O BLOG
          </Link>
        </div>
      </section>

    </PageLayout>
  );
};

export default BlogPost;
