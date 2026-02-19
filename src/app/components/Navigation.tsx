import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Solutions', id: 'solutions' },
    { label: 'Performance', id: 'performance' },
    { label: 'Team', id: 'team' },
    { label: 'Credentials', id: 'credentials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0a0e27]/95 backdrop-blur-md border-b border-cyan-500/20' 
            : 'bg-[#0a0e27]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button
              onClick={() => scrollToSection('home')}
              className="relative z-10"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl font-bold tracking-tight">
                  <span className="text-white">SENTI</span>
                  <span className="text-[#00d4ff]">METRIX</span>
                </div>
                <div className="hidden sm:block h-6 w-px bg-cyan-500/30"></div>
                <div className="hidden sm:block text-xs text-gray-400 uppercase tracking-wider">
                  Intelligence AI
                </div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-[14px] font-medium text-gray-300 hover:text-[#00d4ff] transition-colors uppercase tracking-wide"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="ml-4 px-6 py-2.5 bg-[#00d4ff] text-[#0a0e27] text-[14px] font-bold uppercase tracking-wide hover:bg-[#00b8e6] transition-colors"
              >
                Deploy Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-20 left-0 right-0 z-40 lg:hidden bg-[#0a0e27] border-b border-cyan-500/20"
          >
            <div className="px-6 py-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-cyan-500/10 hover:text-[#00d4ff] transition-colors uppercase tracking-wide text-sm"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full px-4 py-3 bg-[#00d4ff] text-[#0a0e27] font-bold uppercase tracking-wide hover:bg-[#00b8e6] transition-colors text-sm"
              >
                Deploy Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
