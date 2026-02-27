import { CheckCircle2 } from 'lucide-react';

const reasons = [
  { title: 'High Fashion Designs', desc: 'Curated styles that reflect the latest jewellery trends.' },
  { title: 'Premium Gold Finish', desc: 'Lustrous gold plating that retains its shine beautifully.' },
  { title: 'Budget Friendly Prices', desc: 'Luxury look without the luxury price tag.' },
  { title: 'Latest Trend Collections', desc: 'New arrivals that keep you ahead of fashion.' },
  { title: 'Trusted by Happy Customers', desc: 'A 4.7-star rating earned through genuine satisfaction.' },
  { title: 'Friendly Customer Service', desc: 'Warm, personalized assistance every step of the way.' },
];

export default function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-24 lg:py-32 bg-ivory relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold/60" />
            <span className="font-body text-xs tracking-[0.4em] text-gold uppercase">Our Promise</span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal tracking-wide">
            Why Choose Namo Jewellers?
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map(({ title, desc }) => (
            <div
              key={title}
              className="group flex gap-4 p-6 border border-gold/20 hover:border-gold/50 bg-white/50 hover:bg-white transition-all duration-300"
            >
              <div className="flex-shrink-0 mt-0.5">
                <CheckCircle2 size={22} className="text-gold" />
              </div>
              <div>
                <h3 className="font-display text-lg text-charcoal mb-1 tracking-wide">{title}</h3>
                <p className="font-body text-sm text-charcoal/60 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="text-center border-t border-gold/20 pt-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold/60" />
            <div className="w-2 h-2 rotate-45 bg-gold/60" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold/60" />
          </div>
          <p className="font-display text-xl md:text-2xl text-charcoal italic max-w-2xl mx-auto leading-relaxed">
            "We focus on giving you luxury style without compromising on affordability."
          </p>
        </div>
      </div>
    </section>
  );
}
