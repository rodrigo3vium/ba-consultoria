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
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-orange-400/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-orange-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 leading-tight text-white">
              Blog{' '}
              <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                Nexus
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 font-inter leading-relaxed">
              Insights, tutoriais e cases de sucesso sobre IA e transformação digital
            </p>
            <div className="w-16 h-1 bg-orange-400 mx-auto mb-8"></div>
            <p className="text-lg text-slate-400 max-w-4xl mx-auto font-inter leading-relaxed">
              Conteúdo especializado para empresas que querem liderar o futuro com inteligência artificial.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros de Categoria */}
      <section className="py-12 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer transition-colors ${
                  selectedCategory === category
                    ? "bg-orange-400 text-slate-900 hover:bg-orange-500 font-medium" 
                    : "border-orange-400/50 text-orange-300 hover:bg-orange-400 hover:text-slate-900 hover:border-orange-400"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Posts */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-400">Nenhum post encontrado nesta categoria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800 hover:scale-105 hover:border-blue-500/30">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={post.image || '/placeholder.svg'} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="text-xs bg-orange-400/20 text-orange-300 border-orange-400/30">
                          {post.category}
                        </Badge>
                        {isAdmin && (
                          <Badge variant="outline" className="text-xs bg-blue-500/10 text-blue-300 border-blue-500/30">
                            Admin
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center text-xs text-slate-400 gap-3">
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
                    <CardTitle className="text-lg group-hover:text-blue-300 transition-colors line-clamp-2 text-white">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm mb-4 line-clamp-3 text-slate-300">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
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
      <section className="py-20 bg-slate-800/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-orange-400/10 rounded-full blur-xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-poppins text-white">Não perca nenhuma novidade</CardTitle>
                <CardDescription className="text-lg font-inter text-slate-300">
                  Receba os melhores insights sobre IA e automação diretamente no seu e-mail.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail"
                  className="px-4 py-3 rounded-lg border border-slate-600 bg-slate-700/50 backdrop-blur-sm flex-1 max-w-sm focus:outline-none focus:ring-2 focus:ring-orange-400 font-inter text-white placeholder-slate-400"
                />
                <button className="px-6 py-3 bg-orange-400 text-slate-900 rounded-lg hover:bg-orange-500 transition-colors font-medium whitespace-nowrap font-inter">
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
