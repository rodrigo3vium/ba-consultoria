import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-ba-black py-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold font-poppins bg-gradient-primary bg-clip-text text-transparent mb-4">
              BA Consultoria
            </h3>
            <p className="text-muted-foreground font-inter mb-4 max-w-md">
              Transformamos empresas através da implementação inteligente de soluções de IA, 
              focando em produtividade e resultados reais.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-ba-blue-light transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-muted-foreground hover:text-ba-blue-light transition-colors">
                WhatsApp
              </a>
              <a href="#" className="text-muted-foreground hover:text-ba-blue-light transition-colors">
                Email
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold font-poppins text-foreground mb-4">Serviços</h4>
            <ul className="space-y-2 font-inter">
              <li><a href="#" className="text-muted-foreground hover:text-ba-blue-light transition-colors">Automação IA</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-ba-blue-light transition-colors">Chatbots</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-ba-blue-light transition-colors">Análise Preditiva</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-ba-blue-light transition-colors">Consultoria</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold font-poppins text-foreground mb-4">Empresa</h4>
            <ul className="space-y-2 font-inter">
              <li><a href="#sobre" className="text-muted-foreground hover:text-ba-blue-light transition-colors">Sobre</a></li>
              <li><a href="#casos" className="text-muted-foreground hover:text-ba-blue-light transition-colors">Casos de Sucesso</a></li>
              <li><a href="#contato" className="text-muted-foreground hover:text-ba-blue-light transition-colors">Contato</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-ba-blue-light transition-colors">Privacidade</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground font-inter">
            © 2024 BA Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;