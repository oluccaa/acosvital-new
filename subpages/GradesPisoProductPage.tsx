
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

const GradesPisoProductPage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        ASSETS.PRODUCTS.GRADES,
        ...ASSETS.PRODUCT_PAGES.GRADES.SLIDES
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const models = [
        { 
            name: "INDUSTRIAL 25 E 30 CM", 
            desc: "Constituída por barras de metal, as Grades de Piso Industrial de 25x25cm e 30x30cm são largamente utilizadas para permitir a passagem de pessoas e veículos em canaletas e cabines de pintura. Uma de suas vantagens é a facilidade que ela agrega ao processo de higienização.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.GRADES.MODELS.INDUSTRIAL 
        },
        { 
            name: "MALHAS ESPECIAIS", 
            desc: "As grades de piso com malhas especiais, feitas em barras metálicas, assim como a industrial, oferecem resistência e segurança. Permitem a passagem de pessoas e veículos, facilitam a higienização e podem ser fabricadas sob medida, atendendo necessidades específicas de carga, ventilação ou escoamento em ambientes industriais.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.GRADES.MODELS.MALHAS 
        },
    ];

    const technicalData = [
        {
            title: "Tipos de Grades",
            icon: <Settings size={24} />,
            items: [
                "Industrial 25x25cm",
                "Industrial 30x30cm",
                "Malhas especiais"
            ]
        },
        {
            title: "Tipos de Materiais",
            icon: <Layers size={24} />,
            items: [
                "Aço carbono",
                "Aço inoxidável",
                "Alumínio"
            ]
        },
        {
            title: "Tipos de Acabamento",
            icon: <Ruler size={24} />,
            items: [
                "Galvanização a fogo",
                "Passivação",
                "Pintura especial"
            ]
        },
        {
            title: "Normas de Fabricação",
            icon: <FileText size={24} />,
            items: [
                "ASTM-A123",
                "ABNT-NBR-6323"
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
                    <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-widest drop-shadow-2xl">GRADES DE PISO</h1>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-gray-600 text-lg leading-relaxed space-y-6 text-justify">
                            <p>
                                Forjadas com materiais nobres, como aço carbono, aço inoxidável e alumínio, as Grades de Piso Aços Vital são essenciais devido a durabilidade do produto e a segurança dos ambientes, além da versatilidade de acabamentos variados, incluindo galvanização a fogo, conforme as normas ASTM-A123 e ABNT-NBR-6323, passivação e opções de pintura especial.
                            </p>
                            <p>
                                Desenvolvemos nossas grades com atenção às necessidades específicas de cada setor, utilizando barras serrilhadas para proporcionar uma superfície antiderrapante, ideal para áreas de tráfego intenso. Com malhas de 25 e 30, além de opções personalizadas, nossas grades oferecem soluções adaptáveis para diversas aplicações, contribuindo para a eficiência e segurança operacional.
                            </p>
                            <p>
                                Os recortes e rodapés são personalizados para atender aos requisitos de resistência, altura e espessura, garantindo a segurança e funcionalidade necessárias. A facilidade de higienização é um diferencial importante, especialmente em ambientes industriais onde a limpeza é uma prioridade.
                            </p>
                            <p>
                                A Aços Vital entrega com precisão Grades de Piso que atendem os mais elevados níveis de exigência do mercado
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
                            <span className="text-brand-orange font-bold tracking-widest text-sm uppercase">Pisos e Acessos</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">Modelos de Grades</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-4">DADOS TÉCNICOS</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Especificações para garantir segurança e durabilidade.</p>
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
                                <span className="uppercase tracking-wide text-sm">Tabela de Cargas de Grades</span>
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

export default GradesPisoProductPage;
