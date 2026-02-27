import { Phone, MapPin, Clock, Heart } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Collections', href: '#collections' },
  { label: 'Why Choose Us', href: '#why-choose' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Visit Us', href: '#contact' },
];

const collections = [
  'Bridal Collection',
  'Necklaces',
  'Earrings',
  'Bangles & Bracelets',
  'Daily Wear Jewellery',
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'namo-jewellers');

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal border-t border-gold/20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <p className="font-display text-2xl tracking-[0.2em] text-gold font-bold leading-none">NAMO</p>
              <p className="font-display text-xs tracking-[0.4em] text-champagne/60 leading-none mt-1">JEWELLERS</p>
            </div>
            <div className="w-10 h-px bg-gold mb-4" />
            <p className="font-body text-sm text-champagne/50 leading-relaxed mb-6">
              Your trusted destination for high fashion One Gram Gold Jewellery. Premium look, affordable price.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="font-body text-xs text-champagne/40 tracking-widest uppercase">Open Till 9:30 PM</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm tracking-[0.3em] text-gold uppercase mb-5">Quick Links</h4>
            <div className="w-8 h-px bg-gold/40 mb-5" />
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-body text-sm text-champagne/50 hover:text-gold transition-colors duration-300 tracking-wide"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-display text-sm tracking-[0.3em] text-gold uppercase mb-5">Collections</h4>
            <div className="w-8 h-px bg-gold/40 mb-5" />
            <ul className="space-y-3">
              {collections.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick('#collections')}
                    className="font-body text-sm text-champagne/50 hover:text-gold transition-colors duration-300 tracking-wide"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm tracking-[0.3em] text-gold uppercase mb-5">Contact</h4>
            <div className="w-8 h-px bg-gold/40 mb-5" />
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-xs text-champagne/40 tracking-widest uppercase mb-0.5">Hours</p>
                  <p className="font-body text-sm text-champagne/60">Open Daily – Till 9:30 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-xs text-champagne/40 tracking-widest uppercase mb-0.5">Phone</p>
                  <a href="tel:+91" className="font-body text-sm text-champagne/60 hover:text-gold transition-colors">
                    Call for Latest Collections
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-xs text-champagne/40 tracking-widest uppercase mb-0.5">Location</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-champagne/60 hover:text-gold transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10 py-6 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-champagne/30 tracking-wide">
            © {year} Namo Jewellers. All rights reserved.
          </p>
          <p className="font-body text-xs text-champagne/30 flex items-center gap-1.5">
            Built with{' '}
            <Heart size={12} className="fill-gold text-gold" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/60 hover:text-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
