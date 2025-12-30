import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useI18n } from '../../../context/I18nContext';
import { ChevronDown } from 'lucide-react';
import { HERO_SLIDES } from '../../../lib/constants';

const SLIDE_DURATION_MS = 7000; 
const EFFECT_DURATION_MS = 600;

interface Slide {
  title: string;
  subtitle: string;
  buttonText: string;
  imageUrl: string;
}

const animationStyles = `
  @keyframes kenburns-effect {
    0% { transform: scale(1); }
    100% { transform: scale(1.1); }
  }
  .animate-kenburns {
    animation: kenburns-effect var(--slide-duration) ease-out forwards;
  }
  .animation-paused {
    animation-play-state: paused !important;
  }

  @keyframes ripple-effect {
    to {
      transform: translate(-50%, -50%) scale(4);
      opacity: 0;
    }
  }
  .ripple-effect {
    position: absolute; border-radius: 50%; border: 3px solid rgba(255, 255, 255, 0.7);
    width: 60px; height: 60px; transform: translate(-50%, -50%) scale(0);
    animation: ripple-effect ${EFFECT_DURATION_MS}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    pointer-events: none; z-index: 25;
  }
  
  @keyframes pulse-effect {
    from { transform: translate(-50%, -50%) scale(0); opacity: 0.6; }
    to { transform: translate(-50%, -50%) scale(3); opacity: 0; }
  }
  .pulse-effect {
    position: absolute; border-radius: 50%; background-color: rgba(255, 255, 255, 0.4);
    width: 70px; height: 70px; transform: translate(-50%, -50%) scale(0);
    animation: pulse-effect ${EFFECT_DURATION_MS}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    pointer-events: none; z-index: 25;
  }

  @keyframes slide-in-up {
    from { opacity: 0; transform: translateY(2rem); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-slide-in {
    opacity: 0; transform: translateY(2rem);
    animation: slide-in-up 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }
  
  @keyframes bounce-down {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(10px); }
    60% { transform: translateY(5px); }
  }
  .animate-bounce-down {
    animation: bounce-down 2s infinite;
  }
  
  @keyframes progress-ring {
    from { stroke-dashoffset: var(--circumference); }
    to { stroke-dashoffset: 0; }
  }

  @media (prefers-reduced-motion: reduce) {
    .animate-kenburns, .animate-bounce-down, .ripple-effect, .pulse-effect {
      animation: none; display: none;
    }
    .progress-ring { animation: none !important; }
  }
`;

interface ProgressDotProps {
  isActive: boolean;
  isPaused: boolean;
  onClick: (event: React.MouseEvent) => void;
  slideIndex: number;
}
const ProgressDot: React.FC<ProgressDotProps> = ({ isActive, isPaused, onClick, slideIndex }) => {
  const size = 28;
  const strokeWidth = 3;
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <button
      onClick={onClick}
      className="relative w-7 h-7 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-blue-dark/50 focus:ring-white"
      style={{ '--circumference': circumference } as React.CSSProperties}
      aria-selected={isActive}
      role="tab"
      aria-label={`Ir para o slide ${slideIndex + 1}`}
    >
      <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle cx={center} cy={center} r={radius} className="stroke-white/30" strokeWidth={strokeWidth} fill="transparent" />
        {isActive && (
          <circle
            cx={center} cy={center} r={radius} className="stroke-brand-orange"
            strokeWidth={strokeWidth} fill="transparent" strokeDasharray={circumference}
            strokeDashoffset={circumference} transform={`rotate(-90 ${center} ${center})`}
            style={{
              animation: `progress-ring var(--slide-duration) linear forwards`,
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
          />
        )}
      </svg>
    </button>
  );
};

const Hero: React.FC = () => {
  const { t } = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [ripple, setRipple] = useState({ x: 0, y: 0, key: 0 });
  const [pulse, setPulse] = useState({ x: 0, y: 0, key: 0 });

  const slides: Slide[] = useMemo(() => HERO_SLIDES.map(slide => ({
    ...slide,
    title: t(`hero.slides.${slide.id}.title`),
    subtitle: t(`hero.slides.${slide.id}.subtitle`),
    buttonText: t(`hero.slides.${slide.id}.buttonText`)
  })), [t]);

  const advanceSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);
  
  useEffect(() => {
    if (isPaused) return;
    const timerId = setTimeout(advanceSlide, SLIDE_DURATION_MS);
    return () => clearTimeout(timerId);
  }, [currentIndex, advanceSlide, isPaused]);

  const handleClickOnSlider = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (isPaused) {
      setPulse({ x, y, key: Date.now() });
      setTimeout(() => setPulse(p => p.key === 0 ? p : { x: 0, y: 0, key: 0 }), EFFECT_DURATION_MS);
    } else {
      setRipple({ x, y, key: Date.now() });
      setTimeout(() => setRipple(r => r.key === 0 ? r : { x: 0, y: 0, key: 0 }), EFFECT_DURATION_MS);
    }
    setIsPaused(prev => !prev);
  };

  const goToSlide = (slideIndex: number) => {
    if (currentIndex !== slideIndex) setCurrentIndex(slideIndex);
  };
  
  const currentSlide = slides[currentIndex];

  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('features');
    if (targetElement) {
        const headerElement = document.querySelector('header');
        const headerHeight = headerElement ? headerElement.offsetHeight : 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{animationStyles}</style>
      <section 
        onClick={handleClickOnSlider}
        // Removed negative margin. The container ensures alignment.
        className="relative h-[85vh] min-h-[500px] md:h-[80vh] 2xl:max-h-[1080px] text-white overflow-hidden cursor-pointer w-full"
        style={{ '--slide-duration': `${SLIDE_DURATION_MS}ms` } as React.CSSProperties}
        aria-roledescription="carousel"
        aria-live={isPaused ? "polite" : "off"}
        aria-label="Hero slider"
      >
        <span className="sr-only">{isPaused ? "Slider pausado. Clique para retomar." : "Slider em reprodução. Clique para pausar."}</span>

        {slides.map((slide, index) => (
          <img
            key={index} src={slide.imageUrl} alt="" aria-hidden={index !== currentIndex}
            fetchPriority={index === 0 ? 'high' : 'auto'} loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out
              ${index === currentIndex ? 'opacity-100 animate-kenburns' : 'opacity-0'}
              ${isPaused ? 'animation-paused' : ''}`}
          />
        ))}
        
        {/* Gradient Overlay optimized for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/90 via-brand-blue-dark/60 md:via-brand-blue-dark/40 to-transparent"></div>
        
        {ripple.key !== 0 && <span key={ripple.key} className="ripple-effect" style={{ top: ripple.y, left: ripple.x }} aria-hidden="true" />}
        {pulse.key !== 0 && <span key={pulse.key} className="pulse-effect" style={{ top: pulse.y, left: pulse.x }} aria-hidden="true" />}

        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1920px]">
            <div className="max-w-xl md:max-w-2xl lg:max-w-3xl text-center md:text-left mx-auto md:mx-0">
              <div key={currentIndex} role="group" aria-roledescription="slide">
                {/* Responsive Typography */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 animate-slide-in text-shadow-lg" style={{ animationDelay: '0.2s' }}>
                    {currentSlide.title}
                </h1>
                <p className="text-base sm:text-lg lg:text-xl 2xl:text-2xl mb-8 sm:mb-10 text-gray-100 animate-slide-in font-medium max-w-lg md:max-w-none mx-auto md:mx-0" style={{ animationDelay: '0.4s' }}>
                    {currentSlide.subtitle}
                </p>
                <button onClick={(e) => e.stopPropagation()} className="bg-brand-orange text-white font-bold py-3.5 px-8 sm:px-10 rounded-lg hover:bg-brand-orange-dark transition-all duration-300 transform hover:scale-105 text-sm sm:text-base uppercase tracking-wider animate-slide-in shadow-lg shadow-brand-orange/30" style={{ animationDelay: '0.6s' }}>
                  {currentSlide.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Dots - Bottom Center */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex space-x-4" role="tablist" aria-label="Slides">
            {slides.map((_, slideIndex) => (
                <ProgressDot key={slideIndex} slideIndex={slideIndex} isActive={currentIndex === slideIndex} isPaused={isPaused}
                    onClick={(e) => { e.stopPropagation(); goToSlide(slideIndex); }}
                />
            ))}
        </div>

        <a href="#features" onClick={(e) => { e.stopPropagation(); handleScrollDown(e); }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer group"
          aria-label="Scroll to next section">
          <span className="text-[10px] sm:text-xs uppercase tracking-wider mb-1 text-white/80 group-hover:text-white transition-colors">{t('hero.scrollText')}</span>
          <ChevronDown size={24} className="animate-bounce-down text-white/80 group-hover:text-white transition-colors" />
        </a>
      </section>
    </>
  );
};

export default Hero;