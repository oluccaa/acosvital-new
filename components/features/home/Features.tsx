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
    <div className="flex flex-col text-center items-center gap-2 h-full group p-2 rounded-xl transition-colors duration-300 hover:bg-white/5 border border-transparent hover:border-white/5">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-xl rotate-3 group-hover:rotate-6 transition-transform duration-300 flex items-center justify-center shadow-lg shadow-brand-orange/20 border border-white/10">
            <div className="-rotate-3 group-hover:-rotate-6 transition-transform duration-300 text-white">
                 {React.isValidElement(icon) && React.cloneElement(icon as React.ReactElement<{ size: number }>, { size: 22 })}
            </div>
        </div>
        <div className="flex flex-col mt-1">
            <h3 className="font-bold text-sm text-white mb-1 tracking-wide group-hover:text-brand-orange transition-colors">{title}</h3>
            <p className="text-xs text-gray-300 leading-relaxed group-hover:text-white transition-colors">{description}</p>
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
                className="relative py-6 md:py-10 bg-cover bg-center bg-fixed border-b border-white/5"
                style={{ backgroundImage: `url('${ASSETS.HERO.FEATURES_BG}')` }}
                aria-label="Principais características"
            >
                {/* Overlay atualizado para brand-blue-dark #081437 */}
                <div className="absolute inset-0 bg-[#081437]/95 backdrop-brightness-75"></div>
                
                <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10 max-w-[1920px]">
                    <div ref={featuresContainerRef} className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0 max-w-7xl mx-auto">
                        {FEATURES_LIST.map((feature, index) => (
                             <div 
                                key={index} 
                                className={`p-4 transition-all duration-700 ease-out
                                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
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