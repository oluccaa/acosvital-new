import React from 'react';
import { useI18n } from '../../../context/I18nContext';
import { PILLARS_LIST } from '../../../lib/constants';

const Pillars: React.FC = () => {
    // Get content from the internationalization context.
    const { t } = useI18n();
    const subtitle = t('pillars.subtitle');
    const title = t('pillars.title');

    return (
        <section className="py-16 md:py-24 bg-brand-blue-dark text-white">
            <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                {/* Standardized max-width container to match AboutContent and StatsGrid */}
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">{subtitle}</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h2>
                    </div>
                    {/* Responsive grid for the pillar cards. */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        {PILLARS_LIST.map((pillar, index) => (
                            <div 
                                key={index} 
                                className="flex flex-col items-center text-center p-8 bg-brand-midnight/40 rounded-xl border border-white/5 hover:border-brand-orange/30 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                            >
                                {/* Icon container */}
                                <div className="w-20 h-20 bg-brand-blue-light/10 rounded-full flex items-center justify-center mb-6 border border-brand-blue-light/30 text-brand-orange">
                                    {pillar.icon}
                                </div>
                                {/* Pillar Title */}
                                <h3 className="text-xl font-bold uppercase tracking-wider mb-4 text-white">
                                    {t(`pillars.list.${pillar.id}.title`)}
                                </h3>
                                {/* Pillar Description */}
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {t(`pillars.list.${pillar.id}.description`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pillars;