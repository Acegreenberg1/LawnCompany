import { ChevronDown, Menu, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  onNavigate: (page: 'home' | 'services' | 'about') => void;
  currentPage: string;
  onOpenContact: () => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = location.pathname.startsWith('/services');

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

          {/* Services with dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesDropdownOpen((prev) => !prev)}
              className={`flex items-center gap-1 text-sm tracking-wider hover:text-[#2a2a2a] transition-colors ${isServicesActive ? 'text-[#2a2a2a]' : ''}`}
            >
              SERVICES
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {servicesDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-[#f5f1e8] border border-[#d0cdc5] rounded-lg shadow-lg overflow-hidden min-w-[220px]">
                <button
                  onClick={() => handleNavClick('/services')}
                  className="w-full text-left px-6 py-4 text-sm tracking-wider text-[#4a4a4a] hover:bg-[#e8e5dd] hover:text-[#2a2a2a] transition-colors border-b border-[#d0cdc5]"
                >
                  ALL SERVICES
                </button>
                <button
                  onClick={() => handleNavClick('/services/lawn-mowing-bundle')}
                  className={`w-full text-left px-6 py-4 text-sm tracking-wider text-[#4a4a4a] hover:bg-[#e8e5dd] hover:text-[#2a2a2a] transition-colors ${isActive('/services/lawn-mowing-bundle') ? 'bg-[#e8e5dd] text-[#2a2a2a]' : ''}`}
                >
                  LAWN MOWING BUNDLE
                </button>
              </div>
            )}
          </div>

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

          {/* Mobile Services accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen((prev) => !prev)}
              className={`flex items-center gap-1 text-sm tracking-wider hover:text-[#2a2a2a] transition-colors text-left w-full ${isServicesActive ? 'text-[#2a2a2a]' : ''}`}
            >
              SERVICES
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="mt-3 pl-4 flex flex-col gap-4 border-l border-[#d0cdc5]">
                <button
                  onClick={() => handleNavClick('/services')}
                  className="text-sm tracking-wider text-[#4a4a4a] hover:text-[#2a2a2a] transition-colors text-left"
                >
                  ALL SERVICES
                </button>
                <button
                  onClick={() => handleNavClick('/services/lawn-mowing-bundle')}
                  className="text-sm tracking-wider text-[#4a4a4a] hover:text-[#2a2a2a] transition-colors text-left"
                >
                  LAWN MOWING BUNDLE
                </button>
              </div>
            )}
          </div>

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
