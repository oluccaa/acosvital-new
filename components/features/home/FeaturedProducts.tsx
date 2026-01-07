import React, { useRef } from 'react';
import { useI18n } from '../../../context/I18nContext';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { FEATURED_PRODUCTS_LIST } from '../../../lib/constants';

interface Product {
    id: string;
    alt: string;
    imageUrl: string;
    href: string;
}

const ProductCard: React.FC<{ product: Product, viewDetailsText: string, onRequestText: string }> = ({ product, viewDetailsText, onRequestText }) => (
    <li className="snap-center flex-shrink-0 w-[85%] sm:w-[45%] md:w-[32%] lg:w-[24%] 2xl:w-[20%] pl-4 first:pl-0">
        <a href={product.href} className="block group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 ease-in-out h-full border border-gray-100"
            aria-label={`Ver detalhes de ${product.alt}`}
        >
            {/* Background Image */}
            <div
                style={{ backgroundImage: `url(${product.imageUrl})` }}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                role="img"
                aria-label={product.alt}
            />
            
            {/* Overlay Gradient - Updated to Midnight Blue */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#081437] via-[#081437]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="inline-block px-2 py-1 mb-3 text-[10px] font-bold uppercase tracking-widest bg-brand-orange text-white rounded">
                        Destaque
                    </span>
                    <h3 className="font-bold text-2xl mb-2 leading-tight">{product.alt}</h3>
                    <div className="h-0.5 w-12 bg-white/30 mb-4 group-hover:w-full group-hover:bg-brand-orange transition-all duration-500"></div>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-orange">
                        {viewDetailsText} <ArrowRight size={16} />
                    </div>
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
        const scrollAmount = slider.clientWidth * 0.80; 

        slider.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    };

    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden relative" aria-labelledby="featured-products-title">
             {/* Decorative Background Text */}
             <div className="absolute top-10 left-0 w-full text-center pointer-events-none overflow-hidden opacity-[0.03]">
                <span className="text-[15vw] font-black uppercase text-brand-blue-dark leading-none whitespace-nowrap">
                    Catálogo
                </span>
            </div>

            <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1920px] relative z-10 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                     <span className="text-brand-orange font-bold tracking-widest text-sm uppercase">Nossos Produtos</span>
                     <h2 id="featured-products-title" className="text-3xl md:text-5xl font-bold text-brand-blue-dark mt-2">
                        {t('featuredProducts.title')}
                    </h2>
                </div>
                
                {/* Navigation Buttons */}
                <div className="flex gap-3">
                    <button
                        onClick={() => scroll('left')}
                        aria-label="Anterior"
                        className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-brand-blue-dark hover:border-brand-blue-dark hover:text-white transition-all duration-300"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        aria-label="Próximo"
                        className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-lg shadow-brand-orange/30 hover:bg-brand-orange-dark transition-all duration-300 hover:scale-110"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
            
            <div className="relative max-w-[1920px] mx-auto">
                <ul
                    ref={sliderRef}
                    className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-6 sm:px-12 lg:px-24 pb-12 pt-4"
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
        </section>
    );
};

export default FeaturedProducts;