import { Menu, X, ChevronDown } from 'lucide-react';
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
  const isServicesActive =
    location.pathname === '/services' ||
    location.pathname === '/services/lawn-mowing-bundle' ||
    location.pathname === '/services/lawn-care-maintenance' ||
    location.pathname === '/services/tree-hedge-trimming' ||
    location.pathname === '/services/sod-installation';

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
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
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesDropdownOpen((o) => !o)}
              className={`flex items-center gap-1 text-sm tracking-wider hover:text-[#2a2a2a] transition-colors ${isServicesActive ? 'text-[#2a2a2a]' : ''}`}
            >
              SERVICES
              <ChevronDown className={`w-3 h-3 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-3 w-56 bg-[#f5f1e8] border border-[#d0cdc5] rounded-lg shadow-sm py-2 z-50">
                <button
                  onClick={() => handleNavClick('/services')}
                  className={`w-full text-left px-5 py-3 text-xs tracking-wider hover:bg-[#e8e5dd] transition-colors ${isActive('/services') ? 'text-[#2a2a2a]' : 'text-[#4a4a4a]'}`}
                >
                  ALL SERVICES
                </button>
                <button
                  onClick={() => handleNavClick('/services/lawn-mowing-bundle')}
                  className={`w-full text-left px-5 py-3 text-xs tracking-wider hover:bg-[#e8e5dd] transition-colors ${isActive('/services/lawn-mowing-bundle') ? 'text-[#2a2a2a]' : 'text-[#4a4a4a]'}`}
                >
                  LAWN MOWING BUNDLE
                </button>
                <button
                  onClick={() => handleNavClick('/services/lawn-care-maintenance')}
                  className={`w-full text-left px-5 py-3 text-xs tracking-wider hover:bg-[#e8e5dd] transition-colors ${isActive('/services/lawn-care-maintenance') ? 'text-[#2a2a2a]' : 'text-[#4a4a4a]'}`}
                >
                  LAWN CARE & MAINTENANCE
                </button>
                <button
                  onClick={() => handleNavClick('/services/tree-hedge-trimming')}
                  className={`w-full text-left px-5 py-3 text-xs tracking-wider hover:bg-[#e8e5dd] transition-colors ${isActive('/services/tree-hedge-trimming') ? 'text-[#2a2a2a]' : 'text-[#4a4a4a]'}`}
                >
                  TREE & HEDGE TRIMMING
                </button>
                <button
                  onClick={() => handleNavClick('/services/sod-installation')}
                  className={`w-full text-left px-5 py-3 text-xs tracking-wider hover:bg-[#e8e5dd] transition-colors ${isActive('/services/sod-installation') ? 'text-[#2a2a2a]' : 'text-[#4a4a4a]'}`}
                >
                  SOD INSTALLATION
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
          <button
            onClick={() => handleNavClick('/services')}
            className={`text-sm tracking-wider hover:text-[#2a2a2a] transition-colors text-left ${isActive('/services') ? 'text-[#2a2a2a]' : ''}`}
          >
            SERVICES
          </button>
          <button
            onClick={() => handleNavClick('/services/lawn-mowing-bundle')}
            className={`text-sm tracking-wider hover:text-[#2a2a2a] transition-colors text-left pl-4 ${isActive('/services/lawn-mowing-bundle') ? 'text-[#2a2a2a]' : 'text-[#6a6a6a]'}`}
          >
            ↳ LAWN MOWING BUNDLE
          </button>
          <button
            onClick={() => handleNavClick('/services/lawn-care-maintenance')}
            className={`text-sm tracking-wider hover:text-[#2a2a2a] transition-colors text-left pl-4 ${isActive('/services/lawn-care-maintenance') ? 'text-[#2a2a2a]' : 'text-[#6a6a6a]'}`}
          >
            ↳ LAWN CARE & MAINTENANCE
          </button>
          <button
            onClick={() => handleNavClick('/services/tree-hedge-trimming')}
            className={`text-sm tracking-wider hover:text-[#2a2a2a] transition-colors text-left pl-4 ${isActive('/services/tree-hedge-trimming') ? 'text-[#2a2a2a]' : 'text-[#6a6a6a]'}`}
          >
            ↳ TREE & HEDGE TRIMMING
          </button>
          <button
            onClick={() => handleNavClick('/services/sod-installation')}
            className={`text-sm tracking-wider hover:text-[#2a2a2a] transition-colors text-left pl-4 ${isActive('/services/sod-installation') ? 'text-[#2a2a2a]' : 'text-[#6a6a6a]'}`}
          >
            ↳ SOD INSTALLATION
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
