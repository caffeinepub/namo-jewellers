import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Collections', href: '#collections' },
  { label: 'Why Us', href: '#why-choose' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Visit Us', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-charcoal/95 backdrop-blur-md shadow-gold-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex flex-col items-start group"
          >
            <span className="font-display text-xl tracking-[0.2em] text-gold font-bold leading-none">
              NAMO
            </span>
            <span className="font-display text-xs tracking-[0.35em] text-champagne/80 leading-none mt-0.5">
              JEWELLERS
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-body text-sm tracking-widest text-champagne/70 hover:text-gold transition-colors duration-300 uppercase"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+91"
              className="flex items-center gap-2 px-5 py-2 border border-gold/60 text-gold text-sm tracking-widest uppercase font-body hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              <Phone size={14} />
              Call Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gold p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-charcoal/98 backdrop-blur-md border-t border-gold/20">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-body text-sm tracking-widest text-champagne/70 hover:text-gold transition-colors duration-300 uppercase text-left"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+91"
              className="flex items-center gap-2 px-5 py-2.5 border border-gold/60 text-gold text-sm tracking-widest uppercase font-body hover:bg-gold hover:text-charcoal transition-all duration-300 w-fit mt-2"
            >
              <Phone size={14} />
              Call Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
