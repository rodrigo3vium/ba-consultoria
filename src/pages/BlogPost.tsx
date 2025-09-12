import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { CalendarDays, Clock, User, ArrowLeft, ArrowRight, Share2 } from "lucide-react";
import { getBlogPostById, getPreviousPost, getNextPost, getRelatedPosts } from "@/lib/blogData";
import { BlogContent } from "@/components/BlogContent";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const postId = parseInt(id || "0");
  const post = getBlogPostById(postId);
  const previousPost = getPreviousPost(postId);
  const nextPost = getNextPost(postId);
  const relatedPosts = post ? getRelatedPosts(postId, post.category) : [];

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Blog Nexus`;
      
      // Update meta description
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
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <section className="pt-24 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/blog">Blog</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="line-clamp-1">{post.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Article Header */}
      <article className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card-premium/80 backdrop-blur-sm border border-card-premium-border">
            {/* Hero Image */}
            <div className="aspect-video overflow-hidden rounded-t-lg">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <CardContent className="p-8">
              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge variant="secondary" className="text-sm">
                  {post.category}
                </Badge>
                <div className="flex items-center text-sm text-muted-foreground gap-4">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('pt-BR')}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
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
                  className="ml-auto"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartilhar
                </Button>
              </div>

              {/* Article Title */}
              <h1 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-foreground">
                {post.title}
              </h1>

              {/* Article Content */}
              {post.content && (
                <BlogContent content={post.content} className="mb-12" />
              )}

              {/* Article Navigation */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 border-t border-border">
                {previousPost ? (
                  <Link to={`/blog/${previousPost.id}`}>
                    <Button variant="outline" className="group">
                      <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                      <div className="text-left">
                        <div className="text-xs text-muted-foreground">Anterior</div>
                        <div className="line-clamp-1 max-w-48">{previousPost.title}</div>
                      </div>
                    </Button>
                  </Link>
                ) : <div />}
                
                {nextPost && (
                  <Link to={`/blog/${nextPost.id}`}>
                    <Button variant="outline" className="group">
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground">Próximo</div>
                        <div className="line-clamp-1 max-w-48">{nextPost.title}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-foreground">Artigos Relacionados</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="group hover:shadow-premium transition-all duration-300 bg-card-premium/80 backdrop-blur-sm border border-card-premium-border hover:bg-card-premium-hover hover:scale-105">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="text-xs mb-3">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <Link 
                        to={`/blog/${relatedPost.id}`}
                        className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                      >
                        Ler mais →
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link to="/blog">
              <Button variant="outline" size="lg">
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