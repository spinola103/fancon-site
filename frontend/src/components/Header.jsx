import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className="fixed top-0 w-full z-50 dark-transition"
      style={{
        background: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '16px 7.6923%',
        height: '80px'
      }}
    >
      <div className="flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="https://customer-assets.emergentagent.com/job_511407e8-29a0-45f6-9b32-47f1ce2c42fa/artifacts/xyttlo1l_FanCon_logo-removebg-preview.png"
            alt="FanCon"
            className="h-10 object-contain cursor-pointer"
            onClick={() => scrollToSection('hero')}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('services')}
            className="body-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] dark-transition cursor-pointer"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="body-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] dark-transition cursor-pointer"
          >
            Portfolio
          </button>
          <button 
            onClick={() => scrollToSection('clients')}
            className="body-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] dark-transition cursor-pointer"
          >
            Clients
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-primary"
          >
            GM! Let's Collab 🚀
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[var(--text-primary)]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div 
          className="md:hidden absolute top-full left-0 w-full dark-transition"
          style={{
            background: 'var(--bg-primary)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '20px 7.6923%'
          }}
        >
          <nav className="flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection('services')}
              className="body-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] dark-transition text-left"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="body-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] dark-transition text-left"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('clients')}
              className="body-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] dark-transition text-left"
            >
              Clients
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary mt-4"
            >
              GM! Let's Collab 🚀
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;