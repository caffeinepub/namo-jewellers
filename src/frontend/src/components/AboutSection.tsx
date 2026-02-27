import { Star, Award, Heart, Sparkles } from 'lucide-react';

const stats = [
  { icon: Star, value: '4.7★', label: 'Customer Rating' },
  { icon: Heart, value: '1000+', label: 'Happy Customers' },
  { icon: Award, value: '100%', label: 'Authentic Quality' },
  { icon: Sparkles, value: '500+', label: 'Unique Designs' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-ivory">
      {/* Section Header */}
      <div className="text-center mb-16 px-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-gold/60" />
          <span className="font-body text-xs tracking-[0.4em] text-gold uppercase">Our Story</span>
          <div className="h-px w-12 bg-gold/60" />
        </div>
        <h2 className="font-display text-4xl md:text-5xl text-charcoal tracking-wide">About Us</h2>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
          <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 border border-gold/20" />
            <div className="absolute -inset-2 border border-gold/10" />
            <img
              src="/assets/generated/about-illustration-silver.dim_800x600.png"
              alt="Namo Jewellers Silver Collection"
              className="w-full h-auto object-cover relative z-10"
            />
            {/* Rating Badge Overlay */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-charcoal px-6 py-4 border border-silver/40 shadow-silver-md">
              <div className="flex gap-1 mb-1">
                {(['a','b','c','d','e'] as const).map((id) => (
                  <Star key={id} size={14} className="fill-silver text-silver" />
                ))}
              </div>
              <p className="font-display text-2xl text-silver font-bold leading-none">4.7</p>
              <p className="font-body text-xs text-moonstone/60 tracking-widest uppercase mt-1">Star Rating</p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="font-display text-2xl md:text-3xl text-charcoal italic leading-relaxed mb-6">
              "Every woman deserves to shine with the timeless beauty of silver."
            </p>
            <div className="w-16 h-px bg-silver mb-8" />
            <p className="font-body text-base text-charcoal/70 leading-relaxed mb-6">
              Welcome to <strong className="text-charcoal font-semibold">Namo Jewellers</strong>, your trusted destination for high fashion Sterling Silver Jewellery. We believe in making luxury accessible to every woman.
            </p>
            <p className="font-body text-base text-charcoal/70 leading-relaxed mb-8">
              Our silver collection blends traditional craftsmanship with modern trends — from oxidised ethnic pieces to polished contemporary designs. With a 4.7-star customer rating, we are known for quality, trust, and customer satisfaction.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3 p-4 border border-gold/20 bg-champagne/30">
                  <div className="w-10 h-10 flex items-center justify-center bg-gold/10 border border-gold/30">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-display text-lg text-charcoal font-bold leading-none">{value}</p>
                    <p className="font-body text-xs text-charcoal/50 tracking-wider uppercase mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
