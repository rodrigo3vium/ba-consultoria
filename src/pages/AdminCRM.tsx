import { useNavigate } from "react-router-dom";
import { useRequireAuth } from "@/hooks/useRequireAuth";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const AdminCRM = () => {
  const navigate = useNavigate();
  const { loading } = useRequireAuth(true);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/admin")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar ao Dashboard
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">CRM</h1>
          <p className="text-muted-foreground">Gerencie clientes, leads e relacionamentos</p>
        </div>

        <div className="text-center py-12">
          <p className="text-muted-foreground">Em breve: Sistema de CRM completo</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminCRM;
