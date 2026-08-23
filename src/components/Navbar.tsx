import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenConnect?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onOpenConnect }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 pb-2 pointer-events-none transition-all duration-300">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`pointer-events-auto mx-auto w-full max-w-5xl rounded-full px-5 sm:px-6 py-2.5 sm:py-3 transition-all duration-500 flex items-center justify-between border ${
            isScrolled
              ? 'bg-[#201f20]/80 backdrop-blur-2xl border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.6)]'
              : 'bg-[#201f20]/40 backdrop-blur-xl border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
          }`}
        >
          {/* Brand Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="font-bold text-lg sm:text-xl tracking-tight text-[#e5e2e1] hover:text-white transition-all flex items-center gap-1.5 group cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-[#c8c5cb] group-hover:scale-125 transition-transform shadow-[0_0_8px_#c8c5cb]" />
            <span>P. Ramanan</span>
          </button>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-semibold uppercase tracking-widest text-[#c8c5cb]/70">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className={`transition-all duration-300 relative py-1 hover:text-[#e5e2e1] cursor-pointer ${
                      isActive ? 'text-[#e5e2e1] font-bold' : 'text-[#c8c5cb]/70'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavTab"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#c8c5cb] shadow-[0_0_8px_rgba(200,197,203,0.8)] rounded-full"
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Connect Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (onOpenConnect) onOpenConnect();
                else handleLinkClick('contact');
              }}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest px-5 py-2 rounded-full bg-[#c8c5cb] text-[#141313] hover:bg-white hover:shadow-[0_0_20px_rgba(200,197,203,0.4)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-[#c8c5cb] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-[#141313]/95 backdrop-blur-2xl pt-24 px-6 pb-12 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#c8c5cb]/40 mb-4">
                Navigation
              </div>
              <ul className="space-y-4">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <li key={link.id}>
                      <button
                        onClick={() => handleLinkClick(link.id)}
                        className={`text-2xl font-bold tracking-tight w-full text-left flex items-center justify-between py-2 transition-colors cursor-pointer ${
                          isActive ? 'text-white border-l-2 border-[#c8c5cb] pl-4' : 'text-[#c8c5cb]/70 hover:text-white'
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive && <span className="text-xs tracking-widest uppercase text-[#c8c5cb]">Active</span>}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenConnect) onOpenConnect();
                  else handleLinkClick('contact');
                }}
                className="w-full py-3.5 rounded-full bg-[#c8c5cb] text-[#141313] font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white transition-colors cursor-pointer"
              >
                <span>Connect with Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <p className="text-center text-xs text-[#c8c5cb]/50">
                © 2026 P. Ramanan • Building Intelligence
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
