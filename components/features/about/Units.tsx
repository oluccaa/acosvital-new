import React from 'react';
import { useI18n } from '../../../context/I18nContext';
import { ASSETS } from '../../../lib/media';

const Units: React.FC = () => {
    // Fetch content from the i18n context.
    const { t } = useI18n();
    const subtitle = t('units.subtitle');
    const title = t('units.title');
    
    return (
        <section className="py-16 md:py-24 bg-brand-blue-dark text-white overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                {/* Standardized max-width container */}
                <div className="max-w-7xl mx-auto text-center">
                    <div className="mb-12">
                        {/* Decorative orange line */}
                        <div className="w-20 h-1 bg-brand-orange mb-4 inline-block"></div>
                        <p className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">{subtitle}</p>
                        <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
                    </div>
                    {/* Image container */}
                    <div className="w-full -mx-4 sm:mx-auto">
                        <img 
                            src={ASSETS.ABOUT.UNITS_MAP}
                            alt="Mapa das unidades Aços Vital na América do Sul"
                            className="w-full h-auto object-contain max-h-[600px]"
                            loading="lazy" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Units;