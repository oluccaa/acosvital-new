import React from 'react';
import { useI18n } from '../../context/I18nContext';
import { ASSETS } from '../../lib/media';

const CallToAction: React.FC = () => {
    const { t } = useI18n();
    return (
        <section 
            className="relative py-24 md:py-32 bg-cover bg-center text-white"
            style={{ backgroundImage: `url('${ASSETS.CTA.BG_GIF}')` }}
        >
            {/* Overlay Div */}
            <div className="absolute inset-0 bg-brand-blue-dark bg-opacity-80"></div>
            
            {/* Content Container */}
            <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('callToAction.title')}</h2>
                <p className="text-xl md:text-2xl mb-8 text-white/90">{t('callToAction.subtitle')}</p>
                <p className="max-w-3xl mx-auto mb-10 text-white/80 leading-relaxed">
                    {t('callToAction.description')}
                </p>
                <button className="bg-brand-orange text-white font-bold py-3 px-8 rounded-md hover:bg-brand-orange-dark transition-colors text-sm uppercase tracking-wider shadow-lg transform hover:translate-y-[-2px]">
                    {t('callToAction.buttonText')}
                </button>
            </div>
        </section>
    );
};

export default CallToAction;