import React from 'react';
import { useI18n } from '../../context/I18nContext';
import { SECTORS_LIST } from '../../lib/constants';

const animationStyles = `
  @keyframes scroll-left {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
  @keyframes scroll-right {
    from { transform: translateX(-50%); }
    to { transform: translateX(0); }
  }
  .animate-scroll-left {
    animation: scroll-left 60s linear infinite;
  }
  .animate-scroll-right {
    animation: scroll-right 60s linear infinite;
  }
  
  /* Pause animation on hover for better UX */
  .group:hover .animate-scroll-left,
  .group:hover .animate-scroll-right {
    animation-play-state: paused;
  }
  
  /* Accessibility: Pause animation for users who prefer reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .animate-scroll-left,
    .animate-scroll-right {
      animation-play-state: paused !important;
    }
  }
`;

interface Sector {
    id: string;
    name: string;
    imgSrc: string;
}

const SectorPill: React.FC<Sector> = ({ name, imgSrc }) => (
    <div className="flex flex-shrink-0 items-center gap-4 bg-white rounded-full py-2.5 pl-2.5 pr-6 shadow-md border border-gray-100 cursor-default hover:shadow-lg hover:scale-105 transition-all duration-300 hover:border-brand-orange/30">
        <div className="flex-shrink-0 w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center overflow-hidden">
            <img 
                src={imgSrc} 
                alt="" // Decorative image
                className="w-full h-full object-cover"
                loading="lazy"
            />
        </div>
        <span className="font-medium text-brand-blue-dark text-sm tracking-wide whitespace-nowrap">{name}</span>
    </div>
);

const ScrollerRow: React.FC<{ sectors: Sector[]; direction: 'left' | 'right' }> = ({ sectors, direction }) => {
    // Duplicate items enough times to ensure smooth infinite scroll without gaps
    const items = [...sectors, ...sectors, ...sectors, ...sectors];
    
    const animationClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';
    
    return (
        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]">
            <div className={`flex w-max gap-3 py-2 ${animationClass}`}>
                {items.map((sector, index) => (
                    <SectorPill key={`${sector.id}-${index}`} {...sector} />
                ))}
            </div>
        </div>
    );
};

const Sectors: React.FC = () => {
    const { t } = useI18n();
    
    const allSectors = SECTORS_LIST.map(s => ({
        ...s,
        name: t(`sectors.list.${s.id}`)
    }));

    const row1Sectors = allSectors;
    const row2Sectors = [...allSectors].reverse();

    return (
        <>
            <style>{animationStyles}</style>
            <section className="py-16 md:py-24 bg-brand-off-white overflow-hidden" aria-labelledby="sectors-title">
                <div className="container mx-auto px-6 sm:px-12 lg:px-24 text-center">
                    <h2 id="sectors-title" className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-4">
                        {t('sectors.title')}
                    </h2>
                    <p className="max-w-3xl mx-auto text-brand-text md:text-lg mb-12">
                        {t('sectors.description')}
                    </p>
                </div>
                {/* The main container with the `group` class enables the pause-on-hover effect for its children. */}
                <div className="group flex flex-col gap-3" role="marquee">
                    <ScrollerRow sectors={row1Sectors} direction="left" />
                    <ScrollerRow sectors={row2Sectors} direction="right" />
                </div>
            </section>
        </>
    );
};

export default Sectors;