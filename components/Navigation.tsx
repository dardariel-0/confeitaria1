"use client";

import { useState } from "react";
import { Menu, X, Heart, Home, ShoppingBag, Users } from "lucide-react";
import { Button } from "./ui/button";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "produtos", label: "Produtos", icon: ShoppingBag },
    { id: "sobre", label: "Sobre Nós", icon: Users },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-candy-pink/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            <div className="bg-gradient-to-r from-candy-pink to-candy-purple p-2 rounded-full">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-candy-pink to-candy-purple bg-clip-text text-transparent">
              Doce Encanto
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "default" : "ghost"}
                onClick={() => onNavigate(item.id)}
                className={`
                  rounded-full px-6 py-2 transition-all duration-300
                  ${currentPage === item.id 
                    ? "bg-gradient-to-r from-candy-pink to-candy-purple text-white shadow-lg" 
                    : "hover:bg-candy-pink/10 text-gray-600"
                  }
                `}
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="md:hidden rounded-full"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant={currentPage === item.id ? "default" : "ghost"}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`
                    justify-start rounded-xl py-3 transition-all duration-300
                    ${currentPage === item.id 
                      ? "bg-gradient-to-r from-candy-pink to-candy-purple text-white" 
                      : "hover:bg-candy-pink/10 text-gray-600"
                    }
                  `}
                >
                  <item.icon className="h-4 w-4 mr-3" />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}