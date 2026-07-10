import { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "@/lib/blogData";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import PageLayout from "@/components/pb/PageLayout";
import StratCard from "@/components/pb/StratCard";
import Tag from "@/components/pb/Tag";
import { Accent, Eyebrow, SAAS_BTN_PRIMARY, SAAS_INPUT } from "@/components/saas/ui";

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
      <section className="relative overflow-hidden border-b border-white/[0.06] py-16 md:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-saas-violet/20 blur-[110px]" />
          <div className="absolute -top-10 right-0 w-[520px] h-[420px] rounded-full bg-saas-cyan/15 blur-[110px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>Blog</Eyebrow>
          <h1 className="mt-5 font-extrabold text-saas-ink text-[clamp(30px,4vw,52px)] leading-[1.1] tracking-tight max-w-3xl">
            Insights e casos de <Accent>IA</Accent>
          </h1>
          <p className="mt-5 text-saas-body text-base md:text-lg leading-relaxed max-w-2xl">
            Insights, tutoriais e cases de sucesso sobre IA e transformação digital
          </p>
        </div>
      </section>

      {/* Filtros de Categoria */}
      <section className="border-b border-white/[0.06] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full font-mono text-[10px] uppercase tracking-[0.14em] px-3.5 py-1.5 border transition-colors duration-200 ${
                  selectedCategory === category
                    ? "border-saas-cyan/40 bg-saas-cyan/[0.08] text-saas-cyan"
                    : "border-white/[0.10] text-saas-muted hover:border-white/[0.20] hover:text-saas-body"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Posts */}
      <section className="border-b border-white/[0.06] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-2xl border border-white/[0.09] bg-saas-card p-8 animate-pulse">
                  <div className="h-3 rounded bg-white/[0.06] w-24 mb-4" />
                  <div className="h-6 rounded bg-white/[0.06] w-3/4 mb-3" />
                  <div className="h-4 rounded bg-white/[0.06] w-full" />
                </div>
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-muted">
                Nenhum post encontrado nesta categoria.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <StratCard key={post.id} as="article" className="p-8">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <Tag variant="cyan">{post.category || 'INSIGHT'}</Tag>
                    {isAdmin && (
                      <Tag variant="default">ADMIN</Tag>
                    )}
                  </div>
                  {post.image && (
                    <div className="aspect-video overflow-hidden mb-4 rounded-xl border border-white/[0.09]">
                      <img
                        loading="lazy"
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <h2 className="mt-3 font-extrabold text-saas-ink text-xl leading-snug tracking-tight">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-saas-body text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-mono text-[10px] text-saas-faint uppercase tracking-[0.14em]">
                      {post.date || formatDate(post.created_at)}
                    </span>
                    <Link
                      to={`/blog/${post.id}`}
                      onClick={() => window.scrollTo(0, 0)}
                      className="font-mono text-[11px] text-saas-cyan uppercase tracking-[0.14em] hover:text-saas-ink transition-colors"
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
      <section className="border-b border-white/[0.06] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Eyebrow>Newsletter</Eyebrow>
            <h2 className="mt-5 font-extrabold text-saas-ink text-[clamp(24px,3vw,40px)] leading-[1.12] tracking-tight mb-5">
              Não perca nenhuma <Accent>novidade</Accent>
            </h2>
            <p className="text-saas-body text-base leading-relaxed mb-8">
              Receba os melhores insights sobre IA e automação diretamente no seu e-mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className={SAAS_INPUT + " flex-1 max-w-sm"}
              />
              <button className={SAAS_BTN_PRIMARY + " whitespace-nowrap"}>
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
};

export default Blog;
