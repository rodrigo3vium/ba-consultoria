import { useNavigate } from 'react-router-dom';
import { useRequireAuth } from '@/hooks/useRequireAuth';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FileText, Users, Loader2 } from 'lucide-react';

const Admin = () => {
  const navigate = useNavigate();
  const { loading } = useRequireAuth(true);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const dashboardItems = [
    {
      title: "Blog",
      description: "Gerencie posts, categorias e conteúdo do blog",
      icon: FileText,
      action: () => navigate("/admin/blog"),
      buttonText: "Acessar Blog"
    },
    {
      title: "CRM",
      description: "Gerencie clientes, leads e relacionamentos",
      icon: Users,
      action: () => navigate("/admin/crm"),
      buttonText: "Acessar CRM"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto py-12 px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Painel Administrativo</h1>
          <p className="text-muted-foreground">Escolha uma área para gerenciar</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {dashboardItems.map((item) => (
            <Card 
              key={item.title}
              className="p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <item.icon className="w-12 h-12 text-primary" />
              </div>
              
              <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
              
              <p className="text-muted-foreground mb-8 flex-1">
                {item.description}
              </p>
              
              <Button 
                onClick={item.action}
                size="lg"
                className="w-full"
              >
                {item.buttonText}
              </Button>
            </Card>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
