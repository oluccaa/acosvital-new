
import React, { useState, useEffect } from 'react';
import CallToAction from '../common/CallToAction';
import { CheckCircle, ChevronRight } from 'lucide-react';

export interface ProductModel {
    name: string;
    desc: string;
    specs?: string[];
    image: string;
    sub?: string;
}

export interface TechnicalSection {
    title: string;
    icon: React.ReactNode;
    items: string[];
}

interface ProductDetailLayoutProps {
    title: string;
    slides: string[];
    aboutText: React.ReactNode;
    modelsTitle?: string;
    models: ProductModel[];
    techTitle?: string;
    techSubtitle?: string;
    techData: TechnicalSection[];
    tablesLink?: string;
    tablesLinkText?: string;
}

const ProductDetailLayout: React.FC<ProductDetailLayoutProps> = ({
    title,
    slides,
    aboutText,
    modelsTitle = "Modelos Disponíveis",
    models,
    techTitle = "ESPECIFICAÇÕES TÉCNICAS",
    techSubtitle = "Padrões rigorosos de qualidade e normas técnicas.",
    techData,
    tablesLink = "#/tables",
    tablesLinkText = "Consultar Tabelas Completas"
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (slides.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="bg-white">
            {/* 1. HERO SLIDER */}
            <section className="relative h-[40vh] min-h-[350px] overflow-hidden bg-gray-900 flex items-center justify-center">
                {slides.map((img, index) => (
                    <div 
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <div 
                            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-linear ${index === currentSlide ? 'scale-110' : 'scale-100'}`}
                            style={{ backgroundImage: `url(${img})` }}
                        ></div>
                        <div className="absolute inset-0 bg-black/50"></div>
                    </div>
                ))}
                <div className="relative z-20 container mx-auto px-6 sm:px-12 lg:px-24 text-center animate-in fade-in zoom-in duration-700">
                    <div className="w-20 h-1.5 bg-brand-orange mx-auto mb-6 rounded-full shadow-lg"></div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-widest drop-shadow-2xl">
                        {title}
                    </h1>
                </div>
            </section>

            {/* 2. SOBRE O PRODUTO */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-gray-600 text-lg leading-relaxed space-y-6 text-justify">
                            {aboutText}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. MODELOS DO PRODUTO */}
            <section className="py-24 bg-brand-blue-dark relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                
                <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <span className="text-brand-orange font-bold tracking-widest text-sm uppercase">Catálogo</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">{modelsTitle}</h2>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {models.map((model, idx) => (
                                <div key={idx} className="group flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-brand-blue-light/20 transition-all duration-300 relative mt-24 mb-4 border border-white/5 transform hover:-translate-y-1">
                                    {/* Image Circle */}
                                    <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-56 h-56 rounded-full border-8 border-white shadow-xl overflow-hidden bg-white z-10 transition-transform duration-500 group-hover:scale-105">
                                        <img 
                                            src={model.image} 
                                            alt={model.name}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="p-6 pt-40 flex-grow flex flex-col">
                                        <div className="text-center mb-4">
                                            <h3 className="text-xl font-bold text-brand-blue-dark tracking-wide drop-shadow-sm uppercase">
                                                {model.name}
                                            </h3>
                                            {model.sub && <span className="block text-xs font-bold text-brand-orange mt-1 tracking-wider">{model.sub}</span>}
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow text-center md:text-left">
                                            {model.desc}
                                        </p>

                                        {/* Specs */}
                                        {model.specs && model.specs.length > 0 && (
                                            <div className="mt-auto pt-4 border-t border-gray-100 space-y-2">
                                                {model.specs.map((spec, i) => (
                                                    <div key={i} className="flex items-center text-xs text-gray-500 font-medium">
                                                        <CheckCircle size={14} className="text-brand-orange mr-2 flex-shrink-0" />
                                                        <span>{spec}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. INFORMAÇÕES TÉCNICAS */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-16 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-4">{techTitle}</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto text-lg">{techSubtitle}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {techData.map((section, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-xl p-6 border-l-4 border-brand-orange hover:shadow-lg transition-shadow duration-300 h-full">
                                    <div className="flex items-center mb-6">
                                        <div className="p-2 bg-white rounded-lg shadow-sm text-brand-orange mr-3 border border-gray-100">
                                            {section.icon}
                                        </div>
                                        <h4 className="text-lg font-bold text-brand-blue-dark leading-tight">{section.title}</h4>
                                    </div>
                                    <ul className="space-y-3">
                                        {section.items.map((item, i) => (
                                            <li key={i} className="flex items-start text-gray-600 text-sm">
                                                <span className="w-1.5 h-1.5 bg-brand-blue-dark rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="mt-20 text-center">
                            <a 
                                href={tablesLink}
                                className="inline-flex items-center bg-brand-orange text-white font-bold py-4 px-10 rounded-full hover:bg-brand-orange-dark transition-all duration-300 shadow-lg hover:shadow-brand-orange/30 transform hover:-translate-y-1 group"
                            >
                                <span className="uppercase tracking-wide text-sm">{tablesLinkText}</span>
                                <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <CallToAction />
        </div>
    );
};

export default ProductDetailLayout;
