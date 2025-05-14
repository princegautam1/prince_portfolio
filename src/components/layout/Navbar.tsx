"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
  { href: "/resume", label: "Resume", isPage: true },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/90 backdrop-blur-xl border-b border-orange-500/10 shadow-lg shadow-orange-600/5 py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="#home" 
            className="group flex items-center space-x-3"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-xl overflow-hidden">
              <span className="z-10">P</span>
              <motion.div 
                className="absolute inset-0 bg-white/20"
                initial={{ y: '100%' }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute -inset-1 rounded-xl bg-orange-500/30 blur-sm -z-10"
                animate={{ 
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror"
                }}
              />
            </div>
            <motion.span 
              className="text-xl font-bold font-heading gradient-text hidden sm:block"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Prince Gautam
            </motion.span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => {
              const isActive = link.isPage ? false : activeSection === link.href.substring(1);
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative px-3 py-2"
                >
                  <Link
                    href={link.href}
                    className={`relative font-medium text-sm tracking-wider uppercase font-heading transition-colors duration-300 ${
                      isActive ? "text-orange-500" : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span 
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
            
            {/* Call to action button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="ml-6"
            >
              <Link
                href="#contact"
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 text-white text-sm font-medium transition-all duration-300 hover:shadow-md hover:shadow-orange-600/20 hover:scale-105"
              >
                Hire Me
              </Link>
            </motion.div>
          </nav>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-7 h-7 relative">
              <span
                className={`absolute h-0.5 w-full bg-foreground transform transition duration-300 ${
                  isMenuOpen ? "rotate-45 top-3" : "rotate-0 top-1"
                }`}
              />
              <span
                className={`absolute h-0.5 bg-foreground transform transition-all duration-300 ${
                  isMenuOpen ? "w-0 opacity-0 left-1/2" : "w-full opacity-100 top-3"
                }`}
              />
              <span
                className={`absolute h-0.5 w-full bg-foreground transform transition duration-300 ${
                  isMenuOpen ? "-rotate-45 top-3" : "rotate-0 top-5"
                }`}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-orange-600/10"
          >
            <div className="px-4 py-6 space-y-3">
              {navLinks.map((link, index) => {
                const isActive = link.isPage ? false : activeSection === link.href.substring(1);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`block py-3 px-4 rounded-lg ${isActive ? 'bg-orange-500/10 text-orange-500 font-medium' : 'text-foreground/80 hover:text-orange-500'} transition-colors duration-200`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="pt-3 pb-4"
              >
                <Link
                  href="#contact"
                  className="block w-full py-3 px-4 text-center rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 hover:opacity-90 text-white font-medium transition-all duration-200 shadow-md shadow-orange-600/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hire Me
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
} 