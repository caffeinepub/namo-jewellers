import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'Beautiful designs at very affordable prices!',
    author: 'Priya S.',
    rating: 5,
  },
  {
    quote: 'Best place for trendy one gram gold jewellery.',
    author: 'Meena R.',
    rating: 5,
  },
  {
    quote: 'Excellent quality and friendly service.',
    author: 'Kavitha D.',
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'fill-gold text-gold' : 'text-gold/30'}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-charcoal relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold/60" />
            <span className="font-body text-xs tracking-[0.4em] text-gold uppercase">Reviews</span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-ivory tracking-wide">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
          </div>
        </div>

        {/* Overall Rating */}
        <div className="flex flex-col items-center mb-16 p-8 border border-gold/30 bg-gold/5 max-w-sm mx-auto">
          <p className="font-display text-7xl text-gold font-bold leading-none mb-2">4.7</p>
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className={i < 5 ? 'fill-gold text-gold' : 'text-gold/30'} />
            ))}
          </div>
          <p className="font-body text-xs tracking-[0.3em] text-champagne/60 uppercase text-center">
            Rated 4.7 by Our Happy Customers
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, author, rating }) => (
            <div
              key={author}
              className="relative p-8 border border-gold/20 hover:border-gold/50 bg-charcoal-light transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <Quote size={32} className="text-gold" />
              </div>

              <StarRating rating={rating} />
              <p className="font-display text-lg text-ivory italic leading-relaxed mt-4 mb-6">
                "{quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gold/60" />
                <span className="font-body text-xs tracking-widest text-champagne/50 uppercase">{author}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center font-body text-sm text-champagne/40 tracking-widest mt-10 uppercase">
          Our 4.7 rating reflects the love and trust of our valued customers
        </p>
      </div>
    </section>
  );
}
