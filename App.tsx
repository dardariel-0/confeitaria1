"use client";

import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { ProdutosPage } from "./components/ProdutosPage";
import { SobreNosPage } from "./components/SobreNosPage";
import { Heart, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "produtos":
        return <ProdutosPage />;
      case "sobre":
        return <SobreNosPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="transition-all-smooth">
        {renderCurrentPage()}
      </main>
      
      {/* Footer Simplificado */}
      <footer className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-candy-pink to-candy-purple p-2 rounded-full">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white">
                  Doce Encanto
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Criando momentos especiais através de doces artesanais únicos, 
                feitos com amor e ingredientes selecionados desde 2008.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Navegação</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { label: "Home", page: "home" },
                  { label: "Produtos", page: "produtos" },
                  { label: "Sobre Nós", page: "sobre" }
                ].map((item, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => handleNavigate(item.page)}
                      className="text-gray-300 hover:text-white transition-colors-smooth hover:translate-x-1 transition-transform-smooth block"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Contato</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(11) 99999-9999</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>contato@doceencanto.com.br</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <span>Rua das Delícias, 123<br />São Paulo - SP</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Horários</h4>
              <div className="bg-gray-700 rounded-lg p-4">
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex justify-between">
                    <span>Seg - Sex:</span>
                    <span className="text-white">8h às 18h</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sábados:</span>
                    <span className="text-white">8h às 16h</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Domingos:</span>
                    <span className="text-white">Fechado</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-300 text-sm">
                © 2024 Doce Encanto. Todos os direitos reservados.
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-gray-300 text-sm">Feito com</span>
                <Heart className="h-4 w-4 text-candy-pink" />
                <span className="text-gray-300 text-sm">para adoçar sua vida</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}