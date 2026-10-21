import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  onNavigate: (page: 'home' | 'services' | 'about') => void;
  currentPage: string;
  onOpenContact: () => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f1e8]/95 backdrop-blur-sm border-b border-[#d0cdc5]">
      <div className="px-8 md:px-16 lg:px-32 py-6 flex items-center justify-between">
        <div
          className="text-2xl font-extralight text-[#5a5a5a] tracking-wide cursor-pointer"
          onClick={() => handleNavClick('/')}
        >
          Kerrville Lawn Company
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => handleNavClick('/')}
            className={`text-sm tracking-wider hover:text-[#2a2a2a] transition-colors ${isActive('/') ? 'text-[#2a2a2a]' : ''}`}
          >
            HOME
          </button>
          <button
            onClick={() => handleNavClick('/services')}
            className={`text-sm tracking-wider hover:text-[#2a2a2a] transition-colors ${isActive('/services') ? 'text-[#2a2a2a]' : ''}`}
          >
            SERVICES
          </button>
          <button
            onClick={() => handleNavClick('/about')}
            className={`text-sm tracking-wider hover:text-[#2a2a2a] transition-colors ${isActive('/about') ? 'text-[#2a2a2a]' : ''}`}
          >
            ABOUT
          </button>
          <button
            onClick={onOpenContact}
            className="px-6 py-2 border border-[#d0cdc5] rounded-full text-xs tracking-wider hover:bg-[#e8e5dd] transition-colors"
          >
            GET A QUOTE
          </button>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-[#d0cdc5] bg-[#f5f1e8] px-8 py-6 flex flex-col gap-6">
          <button
            onClick={() => handleNavClick('/')}
            className={`text-sm tracking-wider hover:text-[#2a2a2a] transition-colors text-left ${isActive('/') ? 'text-[#2a2a2a]' : ''}`}
          >
            HOME
          </button>
          <button
            onClick={() => handleNavClick('/services')}
            className={`text-sm tracking-wider hover:text-[#2a2a2a] transition-colors text-left ${isActive('/services') ? 'text-[#2a2a2a]' : ''}`}
          >
            SERVICES
          </button>
          <button
            onClick={() => handleNavClick('/about')}
            className={`text-sm tracking-wider hover:text-[#2a2a2a] transition-colors text-left ${isActive('/about') ? 'text-[#2a2a2a]' : ''}`}
          >
            ABOUT
          </button>
          <button
            onClick={() => {
              onOpenContact();
              setMobileMenuOpen(false);
            }}
            className="px-6 py-2 border border-[#d0cdc5] rounded-full text-xs tracking-wider hover:bg-[#e8e5dd] transition-colors"
          >
            GET A QUOTE
          </button>
        </nav>
      )}
    </header>
  );
}
