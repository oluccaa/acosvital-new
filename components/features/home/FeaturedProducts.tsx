import React, { useRef } from 'react';
import { useI18n } from '../../../context/I18nContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FEATURED_PRODUCTS_LIST } from '../../../lib/constants';

interface Product {
    id: string;
    alt: string;
    imageUrl: string;
    href: string;
}

const ProductCard: React.FC<{ product: Product, viewDetailsText: string, onRequestText: string }> = ({ product, viewDetailsText, onRequestText }) => (
    <li className="snap-center flex-shrink-0 w-[85%] sm:w-[45%] md:w-[30%] lg:w-[23.5%] 2xl:w-[18%]">
        <a href={product.href} className="block group relative aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 ease-in-out h-full"
            aria-label={`Ver detalhes de ${product.alt}`}
        >
            <div
                style={{ backgroundImage: `url(${product.imageUrl})` }}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                role="img"
                aria-label={product.alt}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/90 via-brand-blue-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-end p-6 text-white">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                    <h3 className="font-bold text-xl mb-2 leading-tight">{product.alt}</h3>
                    <p className="text-brand-orange font-semibold text-lg mb-4">{onRequestText}</p>
                    <span className="inline-block bg-brand-orange text-white font-bold py-2 px-5 rounded-md text-xs uppercase tracking-wider hover:bg-brand-orange-dark transition-colors">
                        {viewDetailsText}
                    </span>
                </div>
            </div>
        </a>
    </li>
);

const FeaturedProducts: React.FC = () => {
    const { t } = useI18n();
    const sliderRef = useRef<HTMLUListElement>(null);
    
    const viewDetailsText = t('featuredProducts.viewDetails');
    const onRequestText = t('featuredProducts.onRequest');

    const scroll = (direction: 'left' | 'right') => {
        if (!sliderRef.current) return;
        const slider = sliderRef.current;
        const scrollAmount = slider.clientWidth * 0.75; 

        slider.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    };

    return (
        <section className="py-16 md:py-24 bg-brand-off-white overflow-hidden" aria-labelledby="featured-products-title">
            <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1920px]">
                <div className="max-w-7xl mx-auto text-center">
                     <h2 id="featured-products-title" className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-12">
                        {t('featuredProducts.title')}
                    </h2>
                </div>
            </div>
            
            <div className="relative max-w-[1920px] mx-auto">
                <ul
                    ref={sliderRef}
                    className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide -mb-4 pb-4 px-6 sm:px-12 lg:px-24"
                >
                    {FEATURED_PRODUCTS_LIST.map((product, index) => (
                        <ProductCard 
                            key={`${product.id}-${index}`} 
                            product={{
                                ...product,
                                alt: t(`featuredProducts.items.${product.id}`)
                            }} 
                            viewDetailsText={viewDetailsText}
                            onRequestText={onRequestText}
                        />
                    ))}
                </ul>
            </div>
            
            <div className="flex justify-center items-center space-x-4 mt-12">
                <button
                    onClick={() => scroll('left')}
                    aria-label="Produtos anteriores"
                    className="group rounded-full border-2 border-gray-300 w-14 h-14 flex items-center justify-center transition-all duration-300 hover:border-brand-orange hover:bg-brand-orange/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange"
                >
                    <ChevronLeft className="text-gray-500 group-hover:text-brand-orange transition-colors" size={28} aria-hidden="true" />
                </button>
                <button
                    onClick={() => scroll('right')}
                    aria-label="Próximos produtos"
                    className="group rounded-full bg-brand-orange border-2 border-brand-orange w-14 h-14 flex items-center justify-center transition-all duration-300 hover:bg-brand-orange-dark hover:border-brand-orange-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange"
                >
                    <ChevronRight className="text-white" size={28} aria-hidden="true" />
                </button>
            </div>
        </section>
    );
};

export default FeaturedProducts;