import { Phone, MapPin, Clock, Sparkles } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Banner Image */}
      <div className="relative h-[500px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/generated/contact-banner-silver.dim_1440x500.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/60 to-charcoal/80" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold/60" />
            <span className="font-body text-xs tracking-[0.4em] text-gold uppercase">Find Us</span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-ivory tracking-wide mb-4">
            Visit Us Today
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
          </div>
          <p className="font-body text-moonstone/70 text-sm tracking-widest uppercase mb-8">
            Step into a world of silver elegance at Namo Jewellers
          </p>

          {/* Store Hours */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 border border-gold/40 bg-gold/10 backdrop-blur-sm mb-8">
            <Clock size={14} className="text-gold" />
            <span className="font-body text-sm tracking-widest text-champagne uppercase">Open Till 9:30 PM Daily</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919177066512"
              className="flex items-center gap-2.5 px-8 py-3.5 bg-silver text-charcoal font-body text-sm tracking-[0.2em] uppercase font-semibold hover:bg-silver-light transition-all duration-300 shadow-silver-md min-w-[180px] justify-center"
            >
              <Phone size={16} />
              Call Now
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Shop+1300+Mahaveer+Arcade+Pioneer+Bazar+Bolarum+Secunderabad+Telangana+500010"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-8 py-3.5 border border-silver/70 text-silver font-body text-sm tracking-[0.2em] uppercase hover:bg-silver/10 transition-all duration-300 min-w-[180px] justify-center"
            >
              <MapPin size={16} />
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Closing Tagline */}
      <div className="bg-charcoal py-12 text-center border-t border-gold/20">
        <div className="flex items-center justify-center gap-4 mb-3">
          <Sparkles size={16} className="text-gold" />
          <p className="font-display text-2xl md:text-3xl text-gold italic tracking-wide">
            Shine Bright. Shine Affordable.
          </p>
          <Sparkles size={16} className="text-gold" />
        </div>
        <p className="font-body text-xs tracking-[0.4em] text-moonstone/40 uppercase">
          Namo Jewellers — Premium Sterling Silver Jewellery
        </p>
      </div>
    </section>
  );
}
