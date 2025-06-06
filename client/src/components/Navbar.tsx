import { useState, useEffect } from "react";
import { AIGenticBrosLogo } from "./ui/logo";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll to add background to navbar when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-40 text-white py-4 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold">AIGentic Bros</span>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <button 
            onClick={() => scrollToSection('module1')} 
            className="text-white hover:text-neutral-200 font-medium transition duration-300"
          >
            Module 1
          </button>
          <button 
            onClick={() => scrollToSection('module2')} 
            className="text-white hover:text-neutral-200 font-medium transition duration-300"
          >
            Module 2
          </button>
          <button 
            onClick={() => scrollToSection('module3')} 
            className="text-white hover:text-neutral-200 font-medium transition duration-300"
          >
            Module 3
          </button>
          <button 
            onClick={() => scrollToSection('resources')} 
            className="text-white hover:text-neutral-200 font-medium transition duration-300"
          >
            Resources
          </button>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/10" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary-dark absolute w-full py-3 px-4 top-16 shadow-lg animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3">
            <button 
              onClick={() => scrollToSection('module1')} 
              className="text-white hover:text-neutral-200 font-medium transition duration-300 py-2"
            >
              Module 1
            </button>
            <button 
              onClick={() => scrollToSection('module2')} 
              className="text-white hover:text-neutral-200 font-medium transition duration-300 py-2"
            >
              Module 2
            </button>
            <button 
              onClick={() => scrollToSection('module3')} 
              className="text-white hover:text-neutral-200 font-medium transition duration-300 py-2"
            >
              Module 3
            </button>
            <button 
              onClick={() => scrollToSection('resources')} 
              className="text-white hover:text-neutral-200 font-medium transition duration-300 py-2"
            >
              Resources
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
