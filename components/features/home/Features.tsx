import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useOnScreen } from '../../../hooks/useOnScreen';
import { FEATURES_LIST } from '../../../lib/constants';
import { ASSETS } from '../../../lib/media';

const accessibilityStyles = `
  @media (prefers-reduced-motion: reduce) {
    .bg-fixed {
      background-attachment: scroll !important;
    }
  }
`;

interface FeatureData {
    icon: React.ReactElement;
    title: string;
    description: string;
}

const FeatureItem: React.FC<FeatureData> = ({ icon, title, description }) => (
    <div className="flex flex-col text-center items-center gap-4 h-full group">
        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-brand-orange to-orange-400 rounded-full flex items-center justify-center shadow-lg mb-2 group-hover:scale-110 transition-transform duration-300">
            {React.isValidElement(icon) && React.cloneElement(icon as React.ReactElement<{ size: number }>, { size: 32 })}
        </div>
        <div className="flex flex-col">
            <h3 className="font-bold text-lg text-white mb-2">{title}</h3>
            <p className="text-sm text-white/80 leading-relaxed">{description}</p>
        </div>
    </div>
);

const Features: React.FC = () => {
    const { t } = useTranslation();
    const featuresContainerRef = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(featuresContainerRef, 0.2);
    
    return (
        <>
            <style>{accessibilityStyles}</style>
            <section 
                id="features" 
                className="relative py-12 md:py-16 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url('${ASSETS.HERO.FEATURES_BG}')` }}
                aria-label="Principais características"
            >
                <div className="absolute inset-0 bg-brand-blue-dark/85 backdrop-brightness-50"></div>
                
                <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
                    <div ref={featuresContainerRef} className="grid grid-cols-1 divide-y divide-brand-midnight/50 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0 max-w-7xl mx-auto">
                        {FEATURES_LIST.map((feature, index) => (
                             <div 
                                key={index} 
                                className={`p-6 transition-all duration-700 ease-out
                                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <FeatureItem 
                                    icon={feature.icon}
                                    title={t(`features.list.${feature.id}.title`)}
                                    description={t(`features.list.${feature.id}.description`)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;