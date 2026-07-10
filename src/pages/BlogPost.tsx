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
import { Eyebrow, SAAS_BTN_GHOST } from "@/components/saas/ui";

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
          <div className="grid grid-cols-1 gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-white/[0.09] bg-saas-card p-8 animate-pulse">
                <div className="h-3 rounded-full bg-white/[0.06] w-24 mb-4" />
                <div className="h-6 rounded-full bg-white/[0.06] w-3/4 mb-3" />
                <div className="h-4 rounded-full bg-white/[0.06] w-full" />
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
      <section className="border-b border-white/[0.06] py-5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted">
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="hover:text-saas-ink transition-colors"
            >
              Home
            </Link>
            <span className="text-saas-faint-2">/</span>
            <Link
              to="/blog"
              onClick={() => window.scrollTo(0, 0)}
              className="hover:text-saas-ink transition-colors"
            >
              Blog
            </Link>
            <span className="text-saas-faint-2">/</span>
            <span className="text-saas-body line-clamp-1">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Artigo */}
      <article className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Imagem de capa */}
          {post.image && (
            <div className="aspect-video overflow-hidden mb-10 rounded-2xl border border-white/[0.09]">
              <img
                loading="lazy"
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Tag variant="cyan">{post.category || 'INSIGHT'}</Tag>
            {isAdmin && <Tag variant="default">ADMIN</Tag>}
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan">
              {post.date}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint">
              {post.author}
            </span>
            <button
              onClick={handleShare}
              className={SAAS_BTN_GHOST + " ml-auto !px-4 !py-2 !text-xs"}
            >
              <Share2 className="w-3 h-3" />
              Compartilhar
            </button>
          </div>

          {/* Titulo */}
          <h1 className="font-extrabold text-saas-ink text-[clamp(28px,4vw,46px)] leading-[1.1] tracking-tight mb-10">
            {post.title}
          </h1>

          {/* Conteudo */}
          {post.content && (
            <div className="text-saas-body text-[17px] leading-relaxed
              prose prose-lg max-w-none
              prose-headings:font-extrabold prose-headings:text-saas-ink prose-headings:tracking-tight prose-headings:leading-[1.15]
              prose-h1:text-[clamp(26px,3vw,40px)] prose-h1:mb-6 prose-h1:mt-12
              prose-h2:text-[clamp(23px,2.5vw,34px)] prose-h2:mb-5 prose-h2:mt-10
              prose-h3:text-[clamp(20px,2vw,28px)] prose-h3:mb-4 prose-h3:mt-8
              prose-h4:text-xl prose-h4:mb-3 prose-h4:mt-6
              prose-p:text-saas-body prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-saas-ink prose-strong:font-semibold
              prose-ul:mb-6 prose-ul:mt-4
              prose-ol:mb-6 prose-ol:mt-4
              prose-li:text-saas-body prose-li:mb-3 prose-li:leading-relaxed
              prose-blockquote:text-saas-body prose-blockquote:border-l-saas-cyan prose-blockquote:border-l-2 prose-blockquote:bg-saas-card prose-blockquote:rounded-r-2xl prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-8 prose-blockquote:not-italic
              prose-a:text-saas-cyan prose-a:no-underline prose-a:font-medium hover:prose-a:underline
              prose-code:text-saas-cyan prose-code:bg-saas-card prose-code:rounded-md prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-mono
              prose-pre:bg-saas-void-2 prose-pre:border prose-pre:border-white/[0.09] prose-pre:rounded-xl prose-pre:p-4 prose-pre:my-8
              prose-img:my-8 prose-img:rounded-2xl prose-img:border prose-img:border-white/[0.09]
              prose-hr:border-white/[0.06] prose-hr:my-12
              mb-12">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{processedContent}</ReactMarkdown>
            </div>
          )}

          {/* Navegacao anterior / proximo */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 border-t border-white/[0.06]">
            {previousPost ? (
              <Link
                to={`/blog/${previousPost.id}`}
                onClick={() => window.scrollTo(0, 0)}
                className="group flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-saas-muted hover:text-saas-ink transition-colors"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                <div className="text-left">
                  <div className="text-saas-cyan mb-0.5">ANTERIOR</div>
                  <div className="line-clamp-1 max-w-48 normal-case font-sans text-saas-body text-sm capitalize">{previousPost.title}</div>
                </div>
              </Link>
            ) : <div />}

            {nextPost && (
              <Link
                to={`/blog/${nextPost.id}`}
                onClick={() => window.scrollTo(0, 0)}
                className="group flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-saas-muted hover:text-saas-ink transition-colors"
              >
                <div className="text-right">
                  <div className="text-saas-cyan mb-0.5">PROXIMO</div>
                  <div className="line-clamp-1 max-w-48 normal-case font-sans text-saas-body text-sm capitalize">{nextPost.title}</div>
                </div>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            )}
          </div>
        </div>
      </article>

      {/* Posts relacionados */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-white/[0.06] py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <Eyebrow>Artigos relacionados</Eyebrow>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedPosts.map((relatedPost) => (
                <StratCard key={relatedPost.id} as="article" className="p-6">
                  {relatedPost.image && (
                    <div className="aspect-video overflow-hidden mb-4 rounded-xl border border-white/[0.09]">
                      <img
                        loading="lazy"
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <Tag variant="cyan">{relatedPost.category || 'INSIGHT'}</Tag>
                  <h3 className="font-bold text-lg text-saas-ink tracking-tight mt-3 leading-snug line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-saas-muted text-sm leading-relaxed mt-2 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <Link
                    to={`/blog/${relatedPost.id}`}
                    onClick={() => window.scrollTo(0, 0)}
                    className="mt-4 inline-block font-mono text-[11px] text-saas-cyan uppercase tracking-[0.14em] hover:text-saas-ink transition-colors"
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
      <section className="border-t border-white/[0.06] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            onClick={() => window.scrollTo(0, 0)}
            className={SAAS_BTN_GHOST}
          >
            ← Voltar para o blog
          </Link>
        </div>
      </section>

    </PageLayout>
  );
};

export default BlogPost;
