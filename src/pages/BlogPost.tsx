import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { CalendarDays, Clock, User, ArrowLeft, ArrowRight, Share2, Loader2 } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useQuery } from "@tanstack/react-query";

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
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

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
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
      </div>
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
        title: "Link copiado!",
        description: "O link foi copiado para a área de transferência."
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <section className="pt-24 pb-8 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-slate-400 hover:text-white">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-slate-600" />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/blog" className="text-slate-400 hover:text-white">Blog</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-slate-600" />
              <BreadcrumbItem>
                <BreadcrumbPage className="line-clamp-1 text-white">{post.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      <article className="px-4 pb-20 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50">
            {post.image && (
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <CardContent className="p-8">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex gap-2">
                  <Badge variant="secondary" className="text-sm bg-orange-400/20 text-orange-300 border-orange-400/30">
                    {post.category}
                  </Badge>
                  {isAdmin && (
                    <Badge variant="outline" className="text-sm bg-blue-500/10 text-blue-300 border-blue-500/30">
                      Admin
                    </Badge>
                  )}
                </div>
                <div className="flex items-center text-sm text-slate-400 gap-4">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    5 min
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleShare}
                  className="ml-auto border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartilhar
                </Button>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-white font-poppins">
                {post.title}
              </h1>

              {post.content && (
                <div className="prose prose-lg max-w-none prose-invert 
                  prose-headings:font-poppins prose-headings:font-bold prose-headings:text-white
                  prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-12 prose-h1:leading-tight
                  md:prose-h1:text-5xl
                  prose-h2:text-3xl prose-h2:mb-5 prose-h2:mt-10 prose-h2:leading-snug
                  md:prose-h2:text-4xl
                  prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8 prose-h3:leading-snug
                  md:prose-h3:text-3xl
                  prose-h4:text-xl prose-h4:mb-3 prose-h4:mt-6
                  prose-h5:text-lg prose-h5:mb-3 prose-h5:mt-5
                  prose-h6:text-base prose-h6:mb-2 prose-h6:mt-4
                  prose-p:text-lg prose-p:text-slate-200 prose-p:mb-8 prose-p:leading-relaxed prose-p:mt-4
                  prose-strong:text-white prose-strong:font-semibold
                  prose-ul:mb-6 prose-ul:mt-4
                  prose-ol:mb-6 prose-ol:mt-4
                  prose-li:text-slate-200 prose-li:mb-3 prose-li:leading-relaxed
                  prose-blockquote:text-slate-300 prose-blockquote:border-l-orange-400 prose-blockquote:bg-slate-800/50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-8 prose-blockquote:italic
                  prose-a:text-blue-400 prose-a:no-underline prose-a:font-medium hover:prose-a:text-blue-300 hover:prose-a:underline
                  prose-code:text-pink-400 prose-code:bg-slate-800/80 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                  prose-pre:bg-slate-950/50 prose-pre:border prose-pre:border-slate-700 prose-pre:p-4 prose-pre:my-8 prose-pre:rounded-lg
                  prose-img:rounded-lg prose-img:my-8 prose-img:shadow-xl
                  prose-hr:border-slate-700 prose-hr:my-12
                  mb-12">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{processedContent}</ReactMarkdown>
                </div>
              )}

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 border-t border-slate-700">
                {previousPost ? (
                  <Link to={`/blog/${previousPost.id}`}>
                    <Button variant="outline" className="group border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">
                      <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                      <div className="text-left">
                        <div className="text-xs text-slate-500">Anterior</div>
                        <div className="line-clamp-1 max-w-48">{previousPost.title}</div>
                      </div>
                    </Button>
                  </Link>
                ) : <div />}
                
                {nextPost && (
                  <Link to={`/blog/${nextPost.id}`}>
                    <Button variant="outline" className="group border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">
                      <div className="text-right">
                        <div className="text-xs text-slate-500">Próximo</div>
                        <div className="line-clamp-1 max-w-48">{nextPost.title}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>

          {relatedPosts.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-white font-poppins">Artigos Relacionados</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800 hover:scale-105 hover:border-blue-500/30">
                    {relatedPost.image && (
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="text-xs mb-3 bg-orange-400/20 text-orange-300 border-orange-400/30">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors text-white">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-slate-300 mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <Link 
                        to={`/blog/${relatedPost.id}`}
                        className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
                      >
                        Ler mais →
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          <div className="mt-12 text-center">
            <Link to="/blog">
              <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para o Blog
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
