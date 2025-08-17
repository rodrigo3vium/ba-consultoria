import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  // Dados de exemplo para os posts do blog
  const blogPosts = [
    {
      id: 1,
      title: "Como a IA está Revolucionando os Pequenos Negócios",
      excerpt: "Descubra como pequenas e médias empresas estão usando inteligência artificial para aumentar produtividade e reduzir custos operacionais.",
      author: "Equipe Nexus",
      date: "2024-01-15",
      readTime: "5 min",
      category: "IA para Negócios",
      image: "/lovable-uploads/cc361376-bdd4-4e0e-a3f3-0abb48b729f8.png"
    },
    {
      id: 2,
      title: "Automação no-code: O Futuro da Eficiência Empresarial",
      excerpt: "Aprenda como implementar automações poderosas sem precisar programar, usando ferramentas como Make e Zapier.",
      author: "Equipe Nexus",
      date: "2024-01-10",
      readTime: "7 min",
      category: "Automação",
      image: "/lovable-uploads/cc361376-bdd4-4e0e-a3f3-0abb48b729f8.png"
    },
    {
      id: 3,
      title: "5 Casos de Uso de IA que Todo Empresário Deveria Conhecer",
      excerpt: "Conheça aplicações práticas de IA que podem transformar vendas, atendimento ao cliente e gestão financeira do seu negócio.",
      author: "Equipe Nexus",
      date: "2024-01-05",
      readTime: "6 min",
      category: "Cases de Sucesso",
      image: "/lovable-uploads/cc361376-bdd4-4e0e-a3f3-0abb48b729f8.png"
    },
    {
      id: 4,
      title: "ChatGPT para Empresas: Guia Prático de Implementação",
      excerpt: "Tutorial completo sobre como integrar ChatGPT nos processos empresariais para maximizar resultados.",
      author: "Equipe Nexus",
      date: "2023-12-28",
      readTime: "8 min",
      category: "Tutorial",
      image: "/lovable-uploads/cc361376-bdd4-4e0e-a3f3-0abb48b729f8.png"
    },
    {
      id: 5,
      title: "ROI em IA: Como Medir o Retorno dos Seus Investimentos",
      excerpt: "Métricas e indicadores essenciais para avaliar o sucesso das suas iniciativas de inteligência artificial.",
      author: "Equipe Nexus",
      date: "2023-12-20",
      readTime: "5 min",
      category: "Estratégia",
      image: "/lovable-uploads/cc361376-bdd4-4e0e-a3f3-0abb48b729f8.png"
    },
    {
      id: 6,
      title: "Segurança em IA: Protegendo Dados Empresariais",
      excerpt: "Melhores práticas para implementar IA de forma segura, respeitando a LGPD e protegendo informações sensíveis.",
      author: "Equipe Nexus",
      date: "2023-12-15",
      readTime: "6 min",
      category: "Segurança",
      image: "/lovable-uploads/cc361376-bdd4-4e0e-a3f3-0abb48b729f8.png"
    }
  ];

  const categories = ["Todos", "IA para Negócios", "Automação", "Cases de Sucesso", "Tutorial", "Estratégia", "Segurança"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent mb-6">
            Blog Nexus
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, tutoriais e cases de sucesso sobre IA, automação e transformação digital para empresas que querem liderar o futuro.
          </p>
        </div>
      </section>

      {/* Filtros de Categoria */}
      <section className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant={category === "Todos" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Posts */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground gap-3">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                    >
                      Ler mais →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Não perca nenhuma novidade</CardTitle>
              <CardDescription className="text-lg">
                Receba os melhores insights sobre IA e automação diretamente no seu e-mail.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail"
                className="px-4 py-3 rounded-lg border border-border bg-background/50 backdrop-blur-sm flex-1 max-w-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium whitespace-nowrap">
                Inscrever-se
              </button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;