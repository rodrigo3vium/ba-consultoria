import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { categories } from "@/lib/blogData";
import { CalendarDays, Clock, User, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

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
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-ba-blue-light/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-ba-orange/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-ba-blue-light via-white to-ba-orange bg-clip-text text-transparent leading-tight">
              Blog BA Consultoria
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Insights, tutoriais e cases de sucesso sobre IA e transformação digital
            </p>
          </div>
        </div>
      </section>

      {/* Filtros de Categoria */}
      <section className="py-12 bg-black border-y border-ba-blue-light/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-primary text-background hover:opacity-90 font-medium border-transparent" 
                    : "border-ba-blue-light/40 text-foreground hover:bg-ba-blue-light/10 hover:border-ba-blue-light/60"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Posts */}
      <section className="py-20 bg-gradient-to-b from-black via-ba-gray-dark/20 to-black relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-ba-blue-light" />
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">Nenhum post encontrado nesta categoria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="group bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 hover:shadow-glow hover:border-ba-blue-light/40 transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500"></div>
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={post.image || '/placeholder.svg'} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="text-xs bg-ba-orange/20 text-ba-orange border-ba-orange/30">
                          {post.category}
                        </Badge>
                        {isAdmin && (
                          <Badge variant="outline" className="text-xs bg-ba-blue-light/10 text-ba-blue-light border-ba-blue-light/30">
                            Admin
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground gap-3">
                        <div className="flex items-center gap-1">
                          <CalendarDays className="w-3 h-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          5 min
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-ba-blue-light transition-colors line-clamp-2 text-foreground">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 relative z-10">
                    <CardDescription className="text-sm mb-4 line-clamp-3 text-muted-foreground">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="text-ba-orange hover:text-ba-orange/80 text-sm font-medium transition-colors"
                      >
                        Ler mais →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-black border-y border-ba-blue-light/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-ba-blue-light/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-ba-orange/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-black/80 backdrop-blur-sm border border-ba-blue-light/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-foreground">Não perca nenhuma novidade</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Receba os melhores insights sobre IA e automação diretamente no seu e-mail.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail"
                  className="px-4 py-3 rounded-lg border border-ba-blue-light/40 bg-black/50 backdrop-blur-sm flex-1 max-w-sm focus:outline-none focus:ring-2 focus:ring-ba-blue-light text-foreground placeholder-muted-foreground"
                />
                <button className="px-6 py-3 bg-gradient-primary text-background rounded-lg hover:opacity-90 transition-opacity font-medium whitespace-nowrap">
                  Inscrever-se
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
