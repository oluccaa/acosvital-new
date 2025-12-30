import React from 'react';
import { useI18n } from '../../../context/I18nContext';
import { ArrowRight, FileText, Package } from 'lucide-react';

const CatalogActions: React.FC = () => {
    const { t } = useI18n();

    return (
        <section className="bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left Side: Products */}
                <div className="bg-brand-blue-dark text-white py-16 px-6 sm:px-12 flex flex-col items-center justify-center text-center group relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-brand-blue-light/5 group-hover:bg-brand-blue-light/10 transition-colors"></div>
                    
                    <div className="relative z-10">
                        <div className="mb-6 inline-flex p-4 rounded-full bg-white/10 text-brand-orange mb-4">
                             <Package size={32} />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 max-w-md">{t('catalogPage.links.products.title')}</h2>
                        <a 
                            href="#/products" 
                            className="inline-flex items-center bg-brand-orange text-white font-bold py-3 px-8 rounded-md hover:bg-brand-orange-dark transition-all duration-300 transform hover:scale-105 uppercase tracking-wider text-sm"
                        >
                            {t('catalogPage.links.products.buttonText')} <ArrowRight className="ml-2" size={18} />
                        </a>
                    </div>
                </div>

                {/* Right Side: Tables */}
                <div className="bg-brand-off-white text-brand-blue-dark py-16 px-6 sm:px-12 flex flex-col items-center justify-center text-center group relative overflow-hidden">
                     {/* Background Pattern */}
                     <div className="absolute inset-0 bg-gray-200/50 group-hover:bg-gray-200 transition-colors"></div>

                    <div className="relative z-10">
                        <div className="mb-6 inline-flex p-4 rounded-full bg-brand-blue-dark/10 text-brand-blue-dark mb-4">
                             <FileText size={32} />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 max-w-md">{t('catalogPage.links.tables.title')}</h2>
                        <a 
                            href="#/tables"
                            className="inline-flex items-center bg-brand-blue-dark text-white font-bold py-3 px-8 rounded-md hover:bg-brand-blue-light transition-all duration-300 transform hover:scale-105 uppercase tracking-wider text-sm"
                        >
                            {t('catalogPage.links.tables.buttonText')} <ArrowRight className="ml-2" size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CatalogActions;