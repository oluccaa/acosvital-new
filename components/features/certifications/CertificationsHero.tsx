import React from 'react';
import { useI18n } from '../../../context/I18nContext';
import { ChevronDown } from 'lucide-react';
import { ASSETS } from '../../../lib/media';

const CertificationsHero: React.FC = () => {
    const { t } = useI18n();
    const hero = {
        title: t('certificationsPage.hero.title'),
        subtitle: t('certificationsPage.hero.subtitle'),
    };

    return (
        <section
            className="relative h-[45vh] min-h-[350px] text-white flex items-center justify-center text-center bg-cover bg-center"
            style={{ backgroundImage: `url(${ASSETS.CERTIFICATIONS.HERO_BG})` }}
            aria-labelledby="certifications-hero-title"
        >
            <div className="absolute inset-0 bg-brand-blue-dark/70"></div>
            <div className="relative z-10 container mx-auto px-6 sm:px-12 lg:px-24">
                <h1 id="certifications-hero-title" className="text-4xl md:text-6xl font-bold tracking-tight">{hero.title}</h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">{hero.subtitle}</p>
            </div>
            <a
              href="#certifications-grid"
              className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer group"
              aria-label="Rolar para o conteúdo"
            >
              <ChevronDown size={32} className="text-white/80 group-hover:text-white transition-colors animate-bounce" />
            </a>
        </section>
    );
};

export default CertificationsHero;