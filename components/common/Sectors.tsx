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
    <div className="flex flex-shrink-0 items-center gap-4 bg-white rounded-full py-2.5 pl-2.5 pr-6 shadow-sm border border-gray-100 cursor-default hover:shadow-xl hover:shadow-brand-orange/10 hover:border-brand-orange/30 transition-all duration-300 hover:-translate-y-1">
        <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 border-white ring-1 ring-gray-100 group-hover:ring-brand-orange/30 transition-all">
            <img 
                src={imgSrc} 
                alt="" // Decorative image
                className="w-full h-full object-cover"
                loading="lazy"
            />
        </div>
        <span className="font-bold text-brand-blue-dark text-sm tracking-wide whitespace-nowrap">{name}</span>
    </div>
);

const ScrollerRow: React.FC<{ sectors: Sector[]; direction: 'left' | 'right' }> = ({ sectors, direction }) => {
    // Duplicate items enough times to ensure smooth infinite scroll without gaps
    const items = [...sectors, ...sectors, ...sectors, ...sectors];
    
    const animationClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';
    
    return (
        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]">
            <div className={`flex w-max gap-4 py-4 ${animationClass}`}>
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
            <section className="py-20 bg-brand-off-white overflow-hidden border-y border-gray-100" aria-labelledby="sectors-title">
                <div className="container mx-auto px-6 sm:px-12 lg:px-24 text-center mb-12">
                    <span className="text-brand-orange font-bold tracking-widest text-xs uppercase mb-2 block">Mercados</span>
                    <h2 id="sectors-title" className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-4">
                        {t('sectors.title')}
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-600 md:text-lg">
                        {t('sectors.description')}
                    </p>
                </div>
                {/* The main container with the `group` class enables the pause-on-hover effect for its children. */}
                <div className="group flex flex-col gap-2" role="marquee">
                    <ScrollerRow sectors={row1Sectors} direction="left" />
                    <ScrollerRow sectors={row2Sectors} direction="right" />
                </div>
            </section>
        </>
    );
};

export default Sectors;