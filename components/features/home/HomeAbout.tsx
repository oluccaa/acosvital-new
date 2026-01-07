import React from 'react';
import { useI18n } from '../../../context/I18nContext';
import { ASSETS } from '../../../lib/media';
import { ArrowRight } from 'lucide-react';

interface HomeAboutProps {
    showButton?: boolean;
}

const HomeAbout: React.FC<HomeAboutProps> = ({ showButton = true }) => {
    const { t } = useI18n();
    const title = t('about.title');

    return (
        <section id="about-content" className="py-20 md:py-28 bg-white relative overflow-hidden">
            {/* Elemento Decorativo de Fundo */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gray-50 rounded-br-full -translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-none"></div>

            <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10 max-w-[1920px]">
                {/* 
                    Grid System Atualizado: 12 Colunas
                    - Imagem: 5 colunas (mais estreita)
                    - Texto: 7 colunas (mais largo/esticado)
                    - Gap reduzido de 20 para 10/12 para aproximar elementos
                */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                    
                    {/* Image Column - Ocupa 5 de 12 colunas */}
                    {/* Width adjusted for better responsiveness: w-full on smallest screens */}
                    <div className="lg:col-span-5 relative group w-full sm:w-[85%] md:w-[70%] lg:w-full mx-auto">
                        <div className="absolute inset-0 bg-brand-orange rounded-2xl transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                        <img 
                            src={ASSETS.ABOUT.CONTENT_IMAGE} 
                            alt={title} 
                            // Altura reduzida: lg:h-[500px] (antes era 600px) e sm:h-[450px]
                            className="relative rounded-2xl object-cover w-full shadow-2xl h-[350px] sm:h-[450px] lg:h-[500px] transition-all duration-700 ease-in-out filter-none"
                            style={{ filter: 'none' }} 
                        />
                    </div>

                    {/* Text Column - Ocupa 7 de 12 colunas (Mais espaço horizontal) */}
                    <div className="lg:col-span-7 text-center lg:text-left lg:pl-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-dark/5 text-brand-blue-dark text-xs font-bold uppercase tracking-widest mb-6 border border-brand-blue-dark/10">
                            <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
                            Sobre a Aços Vital
                        </div>
                        
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-blue-dark mb-6 leading-tight">
                            {title}
                        </h2>
                        
                        <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                            <p>{t('about.p1')}</p>
                            <p>{t('about.p2')}</p>
                            <p className="hidden md:block">{t('about.p3')}</p>
                        </div>

                        {/* Call-to-action button */}
                        {showButton && (
                          <div className="mt-8">
                              <a 
                                  href="#/about" 
                                  className="inline-flex items-center gap-3 bg-brand-orange text-white font-bold py-4 px-10 rounded-full hover:bg-brand-orange-dark transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-brand-orange/30 text-sm uppercase tracking-wider group"
                              >
                                 {t('about.callToAction.buttonText')}
                                 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                              </a>
                          </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeAbout;