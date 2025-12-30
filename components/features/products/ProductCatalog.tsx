
import React from 'react';
import { useI18n } from '../../../context/I18nContext';
import { PRODUCT_CATEGORIES } from '../../../lib/constants';

interface ProductCategory {
    name: string;
    imageUrl: string;
    href: string;
}

const ProductCategoryCard: React.FC<{ category: ProductCategory; buttonText: string }> = ({ category, buttonText }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 transform hover:-translate-y-1">
        <img
            src={category.imageUrl}
            alt={category.name}
            className="w-32 h-32 rounded-full object-cover flex-shrink-0 border-4 border-white ring-2 ring-gray-200"
            loading="lazy" 
            width={128}
            height={128}
        />
        <div className="flex-grow">
            <h3 className="font-bold text-xl text-brand-blue-dark mb-3 uppercase tracking-wide">{category.name}</h3>
            <a
                href={category.href}
                className="inline-block border-2 border-brand-orange text-brand-orange font-semibold py-2 px-6 rounded-md hover:bg-brand-orange hover:text-white transition-colors duration-300 text-sm"
            >
                {buttonText}
            </a>
        </div>
    </div>
);

const ProductCatalog: React.FC = () => {
    const { t } = useI18n();
    const title = t('productsPage.title');
    const description = t('productsPage.description');
    const buttonText = t('productsPage.buttonText');

    const categories = PRODUCT_CATEGORIES.map(cat => ({
        ...cat,
        name: t(`productsPage.categories.${cat.id}`)
    }));

    return (
        <section className="py-16 md:py-24 bg-brand-off-white">
            <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                {/* Section Header */}
                <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-orange mb-4">{title}</h1>
                    <p className="text-brand-text text-sm md:text-base leading-relaxed">{description}</p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {categories.map((category) => (
                        <ProductCategoryCard key={category.name} category={category} buttonText={buttonText} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCatalog;
