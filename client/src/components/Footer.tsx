import { AIGenticBrosLogo } from "./ui/logo";
import { Link } from "wouter";
import { Twitter, Linkedin, Youtube, MessageCircle } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-10">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <span className="text-2xl font-bold">AIGentic Bros</span>
              </div>
              <p className="text-white/80 max-w-xs">
                Teaching AI-Driven Business Growth to entrepreneurs who want to build profitable AI-powered businesses.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => scrollToSection('module1')} 
                      className="text-white/80 hover:text-white transition duration-300"
                    >
                      Module 1
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('module2')} 
                      className="text-white/80 hover:text-white transition duration-300"
                    >
                      Module 2
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('module3')} 
                      className="text-white/80 hover:text-white transition duration-300"
                    >
                      Module 3
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('resources')} 
                      className="text-white/80 hover:text-white transition duration-300"
                    >
                      AI Starter Kit
                    </button>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="https://youtube.com" className="text-white/80 hover:text-white transition duration-300">
                      YouTube
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com" className="text-white/80 hover:text-white transition duration-300">
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link href="https://linkedin.com" className="text-white/80 hover:text-white transition duration-300">
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white/80 hover:text-white transition duration-300">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">&copy; 2023 AIGentic Bros. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-white transition duration-300">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition duration-300">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
