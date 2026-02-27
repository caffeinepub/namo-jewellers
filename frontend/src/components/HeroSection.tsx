import { Phone, MapPin, ShoppingBag, Star } from 'lucide-react';

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/hero-banner.dim_1440x700.png')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/85" />

      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 pb-16">
        {/* Rating Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 border border-gold/40 bg-gold/10 backdrop-blur-sm mb-8">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < 5 ? 'fill-gold text-gold' : 'text-gold/40'}
              />
            ))}
          </div>
          <span className="font-body text-xs tracking-widest text-champagne uppercase">
            Rated 4.7 by Our Happy Customers
          </span>
        </div>

        {/* Brand Name */}
        <div className="mb-4">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
            <span className="font-body text-xs tracking-[0.4em] text-gold/70 uppercase">Est. Premium Jewellery</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
          </div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-[0.15em] text-ivory font-bold leading-none">
            NAMO
          </h1>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl tracking-[0.5em] text-gold font-light mt-1">
            JEWELLERS
          </h2>
        </div>

        {/* Gold Divider */}
        <div className="flex items-center justify-center gap-3 my-6">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold/80" />
          <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold/80" />
        </div>

        {/* Tagline */}
        <p className="font-display text-lg md:text-xl text-champagne/90 tracking-widest mb-3 italic">
          A Hub of High Fashion One Gram Gold Jewellery
        </p>
        <p className="font-body text-sm md:text-base text-champagne/60 tracking-[0.2em] uppercase mb-10">
          Premium Look &nbsp;·&nbsp; Affordable Price &nbsp;·&nbsp; Timeless Elegance
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={() => handleScroll('#collections')}
            className="flex items-center gap-2.5 px-8 py-3.5 bg-gold text-charcoal font-body text-sm tracking-[0.2em] uppercase font-semibold hover:bg-gold-light transition-all duration-300 shadow-gold-md min-w-[180px] justify-center"
          >
            <ShoppingBag size={16} />
            Shop Now
          </button>
          <button
            onClick={() => handleScroll('#contact')}
            className="flex items-center gap-2.5 px-8 py-3.5 border border-gold/70 text-gold font-body text-sm tracking-[0.2em] uppercase hover:bg-gold/10 transition-all duration-300 min-w-[180px] justify-center"
          >
            <MapPin size={16} />
            Visit Store
          </button>
          <a
            href="tel:+91"
            className="flex items-center gap-2.5 px-8 py-3.5 border border-champagne/30 text-champagne/80 font-body text-sm tracking-[0.2em] uppercase hover:border-champagne/60 hover:text-champagne transition-all duration-300 min-w-[180px] justify-center"
          >
            <Phone size={16} />
            Call Us
          </a>
        </div>

        {/* Store Hours */}
        <div className="flex items-center justify-center gap-2 text-champagne/50">
          <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="font-body text-xs tracking-[0.3em] uppercase">Open Daily – Till 9:30 PM</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}
