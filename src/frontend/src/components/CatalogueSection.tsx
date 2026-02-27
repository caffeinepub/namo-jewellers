interface Product {
  name: string;
  category: string;
  image: string;
}

const products: Product[] = [
  {
    name: 'Royal Silver Bridal Set',
    category: 'Bridal Collection',
    image: '/assets/generated/product-silver-bridal-set.dim_600x600.jpg',
  },
  {
    name: 'Oxidised Silver Necklace',
    category: 'Necklaces',
    image: '/assets/generated/product-silver-necklace.dim_600x600.jpg',
  },
  {
    name: 'Silver Jhumka Earrings',
    category: 'Earrings',
    image: '/assets/generated/product-silver-jhumka-earrings.dim_600x600.jpg',
  },
  {
    name: 'Traditional Silver Bangles',
    category: 'Bangles & Bracelets',
    image: '/assets/generated/product-silver-bangles.dim_600x600.jpg',
  },
  {
    name: 'Daily Wear Silver Pendant',
    category: 'Daily Wear',
    image: '/assets/generated/product-silver-daily-pendant.dim_600x600.jpg',
  },
  {
    name: 'Floral Silver Bracelet',
    category: 'Bangles & Bracelets',
    image: '/assets/generated/product-silver-bracelet.dim_600x600.jpg',
  },
];

const WHATSAPP_NUMBER = '919177066512';
const buildWhatsAppUrl = (productName: string): string => {
  const text = `Hi Namo Jewellers! I'm interested in the ${productName}. Please share more details.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function CatalogueSection() {
  return (
    <section id="catalogue" className="py-24 lg:py-32 bg-charcoal-light">
      {/* Section Header */}
      <div className="text-center mb-16 px-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-gold/60" />
          <span className="font-body text-xs tracking-[0.4em] text-gold uppercase">
            Catalogue
          </span>
          <div className="h-px w-12 bg-gold/60" />
        </div>
        <h2 className="font-display text-4xl md:text-5xl text-ivory tracking-wide">
          Our Products
        </h2>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
          <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
        </div>
        <p className="font-body text-moonstone/50 text-sm tracking-widest uppercase mt-6 max-w-md mx-auto">
          Tap any piece to enquire directly on WhatsApp
        </p>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col bg-charcoal border border-gold/20 hover:border-gold/60 overflow-hidden transition-all duration-500 hover:shadow-gold-md">
      {/* Image */}
      <div className="aspect-square relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
        {/* Category badge overlay */}
        <div className="absolute top-3 left-3">
          <span className="inline-block px-2.5 py-1 border border-gold/60 text-gold text-[10px] tracking-[0.2em] uppercase font-body bg-charcoal/80 backdrop-blur-sm">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-display text-ivory text-lg md:text-xl tracking-wide mb-3 leading-snug">
          {product.name}
        </h3>
        <div className="mt-auto">
          <a
            href={buildWhatsAppUrl(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-gold text-charcoal font-body text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 hover:bg-gold-light hover:shadow-gold-sm"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
