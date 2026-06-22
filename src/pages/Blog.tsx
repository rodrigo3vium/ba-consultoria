import { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "@/lib/blogData";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import PageLayout from "@/components/pb/PageLayout";
import StratCard from "@/components/pb/StratCard";
import Tag from "@/components/pb/Tag";

const formatDate = (dateStr: string) => {
  try {
    return new Date(dateStr).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
};

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const { isAdmin } = useAuth();

  const { data: posts, isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    }
  });

  const filteredPosts = selectedCategory === "Todos"
    ? (posts || [])
    : (posts || []).filter(post => post.category === selectedCategory);

  return (
    <PageLayout trackingName="BA Consultoria - Blog">

      {/* Hero */}
      <section className="border-b border-pb-grid-strong py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6 font-mono text-[11px] uppercase tracking-mono-wide">
            <span className="text-pb-cyan">01</span>
            <span className="h-px w-12 bg-pb-grid-strong" />
            <span className="text-pb-ink-muted">BLOG</span>
          </div>
          <h1 className="font-display uppercase text-pb-ink text-[clamp(36px,5vw,72px)] leading-[0.92] max-w-3xl">
            INSIGHTS E CASOS DE IA
          </h1>
          <p className="mt-5 font-body text-pb-ink-soft text-base md:text-lg leading-relaxed max-w-2xl">
            Insights, tutoriais e cases de sucesso sobre IA e transformação digital
          </p>
        </div>
      </section>

      {/* Filtros de Categoria */}
      <section className="border-b border-pb-grid-strong py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`font-mono text-[10px] uppercase tracking-mono-wide px-3 py-1.5 border transition-colors duration-200 ${
                  selectedCategory === category
                    ? "border-pb-cyan text-pb-cyan bg-pb-void-card"
                    : "border-pb-grid-strong text-pb-ink-muted hover:border-pb-cyan-dim hover:text-pb-ink-soft"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Posts */}
      <section className="border-b border-pb-grid-strong py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-pb-grid-strong border border-pb-grid-strong">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-pb-void p-8 animate-pulse">
                  <div className="h-3 bg-pb-void-elev w-24 mb-4" />
                  <div className="h-6 bg-pb-void-elev w-3/4 mb-3" />
                  <div className="h-4 bg-pb-void-elev w-full" />
                </div>
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-ink-muted">
                Nenhum post encontrado nesta categoria.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-pb-grid-strong border border-pb-grid-strong">
              {filteredPosts.map((post) => (
                <StratCard key={post.id} as="article" className="p-8">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <Tag variant="cyan">{post.category || 'INSIGHT'}</Tag>
                    {isAdmin && (
                      <Tag variant="default">ADMIN</Tag>
                    )}
                  </div>
                  {post.image && (
                    <div className="aspect-video overflow-hidden mb-4 border border-pb-grid-strong">
                      <img
                        loading="lazy"
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        style={{ filter: "grayscale(20%)" }}
                      />
                    </div>
                  )}
                  <h2 className="font-display text-2xl uppercase text-pb-ink mt-3 leading-[0.95]">
                    {post.title}
                  </h2>
                  <p className="font-body text-pb-ink-soft text-sm leading-relaxed mt-2 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-mono text-[10px] text-pb-ink-muted uppercase tracking-mono-wide">
                      {post.date || formatDate(post.created_at)}
                    </span>
                    <Link
                      to={`/blog/${post.id}`}
                      onClick={() => window.scrollTo(0, 0)}
                      className="font-mono text-[11px] text-pb-cyan uppercase tracking-mono-wide hover:text-pb-cyan-soft transition-colors"
                    >
                      LER →
                    </Link>
                  </div>
                </StratCard>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-b border-pb-grid-strong py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6 font-mono text-[11px] uppercase tracking-mono-wide">
              <span className="text-pb-cyan">02</span>
              <span className="h-px w-12 bg-pb-grid-strong" />
              <span className="text-pb-ink-muted">NEWSLETTER</span>
            </div>
            <h2 className="font-display uppercase text-pb-ink text-[clamp(24px,3vw,40px)] leading-[0.95] mb-5">
              NÃO PERCA NENHUMA NOVIDADE
            </h2>
            <p className="font-body text-pb-ink-soft text-base leading-relaxed mb-8">
              Receba os melhores insights sobre IA e automação diretamente no seu e-mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="pb-input flex-1 max-w-sm"
              />
              <button className="btn-primary whitespace-nowrap">
                INSCREVER-SE
              </button>
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
};

export default Blog;
