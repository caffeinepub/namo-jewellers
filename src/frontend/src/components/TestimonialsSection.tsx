import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'Beautiful designs at very affordable prices!',
    author: 'Priya S.',
    rating: 5,
  },
  {
    quote: 'Best place for trendy sterling silver jewellery.',
    author: 'Meena R.',
    rating: 5,
  },
  {
    quote: 'Excellent quality and friendly service.',
    author: 'Kavitha D.',
    rating: 5,
  },
];

const STAR_IDS = ['s1','s2','s3','s4','s5'] as const;

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {STAR_IDS.map((id, i) => (
        <Star
          key={id}
          size={14}
          className={i < rating ? 'fill-silver text-silver' : 'text-silver/30'}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-charcoal relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-silver/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-silver/60" />
            <span className="font-body text-xs tracking-[0.4em] text-silver uppercase">Reviews</span>
            <div className="h-px w-12 bg-silver/60" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-ivory tracking-wide">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-silver/60" />
            <div className="w-1.5 h-1.5 rotate-45 bg-silver" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-silver/60" />
          </div>
        </div>

        {/* Overall Rating */}
        <div className="flex flex-col items-center mb-16 p-8 border border-silver/30 bg-silver/5 max-w-sm mx-auto">
          <p className="font-display text-7xl text-silver font-bold leading-none mb-2">4.7</p>
          <div className="flex gap-1 mb-3">
            {STAR_IDS.map((id) => (
              <Star key={id} size={20} className="fill-silver text-silver" />
            ))}
          </div>
          <p className="font-body text-xs tracking-[0.3em] text-moonstone/60 uppercase text-center">
            Rated 4.7 by Our Happy Customers
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, author, rating }) => (
            <div
              key={author}
              className="relative p-8 border border-silver/20 hover:border-silver/50 bg-charcoal-light transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <Quote size={32} className="text-silver" />
              </div>

              <StarRating rating={rating} />
              <p className="font-display text-lg text-ivory italic leading-relaxed mt-4 mb-6">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-silver/60" />
                <span className="font-body text-xs tracking-widest text-moonstone/50 uppercase">{author}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center font-body text-sm text-moonstone/40 tracking-widest mt-10 uppercase">
          Our 4.7 rating reflects the love and trust of our valued customers
        </p>
      </div>
    </section>
  );
}
