import { useState, useEffect } from "react";
import { Menu, X, ShieldCheck, Phone, Hammer } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { COMPANY_INFO } from "../types";

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onScrollToSection, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", id: "home" },
    { name: "Layanan", id: "layanan" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Kalkulator RAB", id: "rab" },
    { name: "Tentang Kami", id: "tentang" },
    { name: "FAQ", id: "faq" },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onScrollToSection(id);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-3"
          : "bg-white/80 backdrop-blur-sm md:bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Brand Title */}
          <div
            onClick={() => handleLinkClick("home")}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="p-2.5 bg-navy-900 text-amber-500 rounded-lg shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Hammer className="w-6 h-6" />
            </div>
            <div>
              <span className="font-display text-xl font-bold text-navy-900 tracking-wide block leading-none">
                YALES KONSTRUKSI
              </span>
              <span className="text-[9px] text-gray-500 font-mono tracking-wider block mt-1 uppercase">
                PT Yales Ultima Karya
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-sm font-semibold transition-colors duration-200 cursor-pointer hover:text-navy-800 ${
                    isActive
                      ? "text-navy-900 relative after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[2px] after:bg-navy-900 after:rounded-full"
                      : "text-gray-600"
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* Desktop Right CTA Action */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              id="cta-navbar"
              onClick={() => handleLinkClick("survey")}
              className="bg-navy-900 text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-sm hover:bg-navy-800 hover:shadow transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-amber-500 animate-pulse" />
              <span>Konsultasi Gratis</span>
            </button>
          </div>

          {/* Hamburger Mobile Menu toggle */}
          <div className="flex lg:hidden items-center">
            <button
              id="mobile-menu-burger"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-navy-900 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Hamburger Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`block w-full text-left px-3 py-3 rounded-md text-base font-semibold hover:bg-gray-50 hover:text-navy-900 ${
                    activeSection === link.id ? "text-navy-900 bg-gray-50/50" : "text-gray-600"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-100 px-3">
                <button
                  id="mobile-nav-cta"
                  onClick={() => handleLinkClick("survey")}
                  className="w-full flex justify-center items-center gap-2 bg-navy-900 text-white rounded-lg py-3 font-semibold shadow hover:bg-navy-800 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>Konsultasi Gratis</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
