import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" }, // Anchor links for single page feel
    { name: "Why Us", href: "/#why-us" },
  ];

  const handleScroll = (id: string) => {
    setIsOpen(false);
    // Simple smooth scroll logic if on home page
    if (location === "/") {
      const element = document.getElementById(id.replace('/#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm h-20">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-20 relative">
           <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30">
             S
           </div>
           <span className="font-display font-bold text-xl tracking-tight text-slate-900">
             Somerset <span className="text-primary">Plumbing</span>
           </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('/#')) {
                  e.preventDefault();
                  handleScroll(link.href);
                }
              }}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex flex-col items-end mr-2">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">24/7 Emergency</span>
            <span className="text-sm font-bold text-slate-900 font-mono">021 851 1234</span>
          </div>
          <Button 
            className="rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5"
            size="lg"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-20 relative p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 bg-white border-b border-gray-100 p-4 pt-24 pb-8 md:hidden shadow-xl"
            >
              <nav className="flex flex-col gap-4 text-center">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('/#')) {
                        e.preventDefault();
                        handleScroll(link.href);
                      } else {
                        setIsOpen(false);
                      }
                    }}
                    className="text-lg font-medium text-slate-800 py-2"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="h-px bg-gray-100 my-2" />
                <Button className="w-full justify-center rounded-full" size="lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now: 021 851 1234
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
