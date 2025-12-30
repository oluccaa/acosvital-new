import React from 'react';
import { useI18n } from '../../../context/I18nContext';
import { ASSETS } from '../../../lib/media';

interface HomeAboutProps {
    showButton?: boolean;
}

const HomeAbout: React.FC<HomeAboutProps> = ({ showButton = true }) => {
    const { t } = useI18n();
    const title = t('about.title');

    return (
        <section id="about-content" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                {/* Responsive grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
                    
                    {/* Image Column */}
                    <div className="lg:col-span-2">
                        <img 
                            src={ASSETS.ABOUT.CONTENT_IMAGE} 
                            alt={title} 
                            className="rounded-xl object-cover w-full shadow-lg h-64 sm:h-80 md:h-96 lg:h-[500px]"
                        />
                    </div>

                    {/* Text Column */}
                    <div className="lg:col-span-3 text-center md:text-left">
                        {/* Decorative orange line */}
                        <div className="w-20 h-1 bg-brand-orange mb-4 mx-auto md:mx-0"></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-6">
                            {title}
                        </h2>
                        <div className="space-y-4 text-brand-text text-lg leading-relaxed text-gray-700">
                            <p>{t('about.p1')}</p>
                            <p>{t('about.p2')}</p>
                            <p>{t('about.p3')}</p>
                            <p>{t('about.p4')}</p>
                        </div>
                        {/* Call-to-action button */}
                        {showButton && (
                          <a 
                              href="#" 
                              className="inline-block mt-8 bg-brand-orange text-white font-bold py-3 px-8 rounded-md hover:bg-brand-orange-dark transition-all duration-300 transform hover:scale-105 text-sm uppercase tracking-wider"
                          >
                             {t('about.callToAction.buttonText')}
                          </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeAbout;