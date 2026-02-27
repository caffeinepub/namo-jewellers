interface Collection {
  emoji: string;
  name: string;
  description: string;
  image: string;
}

const collections: Collection[] = [
  {
    emoji: '👑',
    name: 'Bridal Collection',
    description: 'Stunning bridal sets designed to make your special day unforgettable.',
    image: '/assets/generated/collection-bridal.dim_600x400.png',
  },
  {
    emoji: '💎',
    name: 'Necklaces',
    description: 'Elegant and trendy necklace designs for every occasion.',
    image: '/assets/generated/collection-necklaces.dim_600x400.png',
  },
  {
    emoji: '✨',
    name: 'Earrings',
    description: 'From daily wear studs to grand festive earrings.',
    image: '/assets/generated/collection-earrings.dim_600x400.png',
  },
  {
    emoji: '💫',
    name: 'Bangles & Bracelets',
    description: 'Stylish pieces that enhance your traditional and modern outfits.',
    image: '/assets/generated/collection-bangles.dim_600x400.png',
  },
  {
    emoji: '🌸',
    name: 'Daily Wear Jewellery',
    description: 'Lightweight, fashionable designs perfect for everyday elegance.',
    image: '/assets/generated/collection-dailywear.dim_600x400.png',
  },
];

export default function CollectionsSection() {
  return (
    <section id="collections" className="py-24 lg:py-32 bg-charcoal">
      {/* Section Header */}
      <div className="text-center mb-16 px-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-gold/60" />
          <span className="font-body text-xs tracking-[0.4em] text-gold uppercase">Explore</span>
          <div className="h-px w-12 bg-gold/60" />
        </div>
        <h2 className="font-display text-4xl md:text-5xl text-ivory tracking-wide">Our Collections</h2>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
          <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
        </div>
        <p className="font-body text-champagne/50 text-sm tracking-widest uppercase mt-6 max-w-md mx-auto">
          Discover our exclusive range of high fashion one gram gold jewellery
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Featured first card (Bridal) */}
        <div className="mb-6">
          <CollectionCard collection={collections[0]} featured />
        </div>

        {/* Grid of remaining 4 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.slice(1).map((collection) => (
            <CollectionCard key={collection.name} collection={collection} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CollectionCard({ collection, featured = false }: { collection: Collection; featured?: boolean }) {
  return (
    <div
      className={`group relative overflow-hidden border border-gold/20 hover:border-gold/60 transition-all duration-500 cursor-pointer ${
        featured ? 'flex flex-col md:flex-row' : 'flex flex-col'
      }`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? 'md:w-2/3 h-72 md:h-auto' : 'h-56'}`}>
        <img
          src={collection.image}
          alt={collection.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
        {/* Emoji Badge */}
        <div className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center bg-charcoal/80 border border-gold/40 text-lg backdrop-blur-sm">
          {collection.emoji}
        </div>
      </div>

      {/* Content */}
      <div className={`p-6 bg-charcoal-light flex flex-col justify-center ${featured ? 'md:w-1/3' : ''}`}>
        <h3 className={`font-display text-ivory mb-2 tracking-wide ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
          {collection.name}
        </h3>
        <div className="w-8 h-px bg-gold mb-3" />
        <p className="font-body text-champagne/60 text-sm leading-relaxed">{collection.description}</p>
        <div className="mt-4 flex items-center gap-2 text-gold text-xs tracking-widest uppercase font-body group-hover:gap-3 transition-all duration-300">
          <span>Explore</span>
          <span>→</span>
        </div>
      </div>
    </div>
  );
}
