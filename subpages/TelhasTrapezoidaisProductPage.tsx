
import React, { useState, useEffect } from 'react';
import CallToAction from '../components/common/CallToAction';
import { ASSETS } from '../lib/media';
import { 
    CheckCircle,
    ChevronRight,
    FileText,
    Settings,
    Ruler,
    Layers
} from 'lucide-react';

const TelhasTrapezoidaisProductPage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        ASSETS.PRODUCTS.TELHAS,
        ...ASSETS.PRODUCT_PAGES.TELHAS.SLIDES
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const models = [
        { 
            name: "TELHA TRAPEZOIDAL GALVALUME", 
            desc: "A telha trapezoidal na cor natural é resistente, prática e econômica, ideal para coberturas industriais, comerciais e rurais. Fabricada em aço galvanizado, oferece durabilidade e fácil instalação, sendo uma opção versátil para projetos de construção.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.TELHAS.MODELS.GALVALUME 
        },
        { 
            name: "TELHA TRAPEZOIDAL PINTADA", 
            desc: "A telha trapezoidal pintada une resistência do aço à proteção extra da pintura. Disponível em várias cores, garante beleza, durabilidade e maior proteção contra corrosão, sendo perfeita para obras que exigem estética e desempenho.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.TELHAS.MODELS.PINTADA 
        },
        { 
            name: "TELHA TRAPEZOIDAL TERMOSTÁTICA", 
            desc: "A telha trapezoidal termostática proporciona conforto térmico e eficiência energética. Produzida com tecnologia que reduz a absorção de calor, é ideal para galpões, indústrias e construções que buscam economia e sustentabilidade. Disponível na cor natural e pintada.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.TELHAS.MODELS.TERMOSTATICA 
        },
    ];

    const technicalData = [
        {
            title: "Modelo",
            icon: <Layers size={24} />,
            items: [
                "AT 40/980",
                "Trapezoidal"
            ]
        },
        {
            title: "Materiais",
            icon: <Settings size={24} />,
            items: [
                "Aço Galvalume"
            ]
        },
        {
            title: "Acabamento",
            icon: <Ruler size={24} />,
            items: [
                "Natural",
                "Pintura especial",
                "Preenchimento termoacústico (opcional)"
            ]
        },
        {
            title: "Normas de Fabricação",
            icon: <FileText size={24} />,
            items: [
                "NBR 14.514"
            ]
        }
    ];

    return (
        <div className="bg-white">
            <section className="relative h-[40vh] min-h-[350px] overflow-hidden bg-gray-900 flex items-center justify-center">
                {slides.map((img, index) => (
                    <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                        <div className={`absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-linear ${index === currentSlide ? 'scale-110' : 'scale-100'}`} style={{ backgroundImage: `url(${img})` }}></div>
                        <div className="absolute inset-0 bg-black/50"></div>
                    </div>
                ))}
                <div className="relative z-20 container mx-auto px-6 sm:px-12 lg:px-24 text-center animate-in fade-in zoom-in duration-700">
                    <div className="w-20 h-1.5 bg-brand-orange mx-auto mb-6 rounded-full shadow-lg"></div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-widest drop-shadow-2xl">TELHAS TRAPEZOIDAIS</h1>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-gray-600 text-lg leading-relaxed space-y-6 text-justify">
                            <p>
                                Fabricadas com aço galvalume, as telhas trapezoidais AT 40/980, também conhecidas como sanduíche e zinco, são muito utilizadas tanto para fechamentos laterais como para coberturas metálicas em geral. Disponíveis em formatos trapezoidais, as telhas podem ser fornecidas em acabamento natural ou com pintura especial, além de opções com preenchimento termoacústico para maior conforto e economia de energia.
                            </p>
                            <p>
                                Nós desenvolvemos telhas metálicas de alto desempenho, projetadas para oferecer proteção e eficiência em qualquer tipo de obra. Nossas telhas resistem à corrosão, maresia, variações de temperatura e demais condições climáticas adversas.
                            </p>
                            <p>
                                A Aços Vital combina tecnologia, qualidade e estética, fator determinante para que nossas telhas tenham longa vida útil e excelente desempenho, tornando-se a escolha ideal para projetos industriais, comerciais e residenciais que exigem segurança e confiabilidade.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-brand-blue-dark relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <span className="text-brand-orange font-bold tracking-widest text-sm uppercase">Coberturas Metálicas</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">Modelos Disponíveis</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {models.map((model, idx) => (
                                <div key={idx} className="group flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative mt-24 mb-4 border border-white/5 transform hover:-translate-y-1">
                                    <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-40 h-40 rounded-full border-8 border-white shadow-xl overflow-hidden bg-white z-10 transition-transform duration-500 group-hover:scale-105">
                                        <img src={model.image} alt={model.name} className="w-full h-full object-cover" loading="lazy" />
                                    </div>
                                    <div className="p-6 pt-24 flex-grow flex flex-col">
                                        <div className="text-center mb-4">
                                            <h3 className="text-lg font-bold text-brand-blue-dark tracking-wide uppercase">{model.name}</h3>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow text-center">{model.desc}</p>
                                        
                                        {/* Render specs only if available */}
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

            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-16 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-4">ESPECIFICAÇÕES TÉCNICAS</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Padrões de qualidade e durabilidade para sua obra.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {technicalData.map((section, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-xl p-6 border-l-4 border-brand-orange hover:shadow-lg transition-shadow duration-300 h-full">
                                    <div className="flex items-center mb-6">
                                        <div className="p-2 bg-white rounded-lg shadow-sm text-brand-orange mr-3 border border-gray-100">{section.icon}</div>
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
                            <a href="#/tables" className="inline-flex items-center bg-brand-orange text-white font-bold py-4 px-10 rounded-full hover:bg-brand-orange-dark transition-all duration-300 shadow-lg hover:shadow-brand-orange/30 transform hover:-translate-y-1 group">
                                <span className="uppercase tracking-wide text-sm">Consultar Tabelas</span>
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

export default TelhasTrapezoidaisProductPage;
