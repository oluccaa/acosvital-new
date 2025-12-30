
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

const CaldeirariaProductPage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        ASSETS.PRODUCTS.CALDEIRARIA,
        ...ASSETS.PRODUCT_PAGES.CALDEIRARIA.SLIDES
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const models = [
        { 
            name: "TUBOS E CONEXÕES CALANDRADOS", 
            desc: "Produzimos Tubos e Conexões de alta qualidade, de acordo com as especificações e necessidades únicas de cada cliente. Nosso processo de fabricação garante a precisão e a durabilidade de cada peça.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.CALDEIRARIA.MODELS.TUBOS_CALANDRADOS 
        },
        { 
            name: "PEÇAS PERSONALIZADAS", 
            desc: "Nossos especialistas em caldeiraria podem fabricar peças complexas e sob medida, atendendo a requisitos específicos de projeto e design.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.CALDEIRARIA.MODELS.PECAS_PERSONALIZADAS 
        },
        { 
            name: "EQUIPAMENTOS SOB ENCOMENDA", 
            desc: "Desenvolvemos equipamentos industriais customizados, com soluções inovadoras para atender às necessidades exclusivas de cada cliente.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.CALDEIRARIA.MODELS.EQUIPAMENTOS 
        },
    ];

    const technicalData = [
        {
            title: "Processo de Produção - Projeto",
            icon: <Settings size={24} />,
            items: [
                "Planejamento técnico minucioso",
                "Confecção e interpretação de desenhos",
                "Conformação mecânica da matéria prima",
                "Montagem em fábrica e entrega final"
            ]
        },
        {
            title: "Ensaios Não Destrutivos (END)",
            icon: <FileText size={24} />,
            items: [
                "Líquido Penetrante (LP)",
                "Ultrassom (U.T)",
                "Radiografia (R.X)",
                "Outros ensaios conforme projeto"
            ]
        },
        {
            title: "Soldagem e Qualificação",
            icon: <Layers size={24} />,
            items: [
                "Normas AWS e ASME",
                "Soldagem manual e automatizada",
                "Consumíveis rastreáveis",
                "Profissionais qualificados"
            ]
        },
        {
            title: "Inspeção e Qualidade",
            icon: <Ruler size={24} />,
            items: [
                "Rigorosos controles de qualidade",
                "Inspeções e testes dedicados",
                "Atendimento aos mais altos padrões",
                "Compromisso com a excelência"
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
                    <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-widest drop-shadow-2xl">CALDEIRARIA INDUSTRIAL</h1>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-gray-600 text-lg leading-relaxed space-y-6 text-justify">
                            <p>
                                Na Aços Vital, utilizamos a técnica de Caldeiraria Industrial para fabricar Tubos, Peças Personalizadas e Equipamentos sob encomenda, sempre com foco na alta qualidade e na precisão. O processo de fabricação é meticuloso, o que assegura que cada peça atenda aos padrões mais exigentes.
                            </p>
                            <p>
                                Além disso, nossos especialistas em caldeiraria são capazes de criar peças complexas e sob medida, atendendo a requisitos específicos de projeto e design. Isso proporciona soluções personalizadas que se adaptam perfeitamente às demandas de cada cliente, assegurando a funcionalidade e a eficácia desejadas.
                            </p>
                            <p>
                                Desenvolvemos também equipamentos industriais customizados, incorporando soluções inovadoras que atendem às necessidades exclusivas de cada projeto. A flexibilidade e a adaptabilidade de nossas soluções são fundamentais para garantir a satisfação do cliente.
                            </p>
                            <p>
                                Contamos com profissionais habilitados para a realização de ensaios não destrutivos (END), como líquido penetrante (LP), ultrassom (U.T), radiografia (R.X), entre outros, conforme os requisitos do cliente e/ou projeto. Essa abordagem não apenas reforça a qualidade dos nossos produtos, mas também assegura a segurança e a confiabilidade das estruturas fabricadas.
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
                            <span className="text-brand-orange font-bold tracking-widest text-sm uppercase">Projetos Especiais</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">Soluções em Caldeiraria</h2>
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
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-4">PROCESSO E FABRICAÇÃO</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Tecnologia, normas e controle de qualidade.</p>
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
                            <a 
                                href="#/tables" 
                                className="inline-flex items-center bg-brand-orange text-white font-bold py-4 px-10 rounded-full hover:bg-brand-orange-dark transition-all duration-300 shadow-lg hover:shadow-brand-orange/30 transform hover:-translate-y-1 group"
                            >
                                <span className="uppercase tracking-wide text-sm">Consultar Tabelas de Materiais</span>
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

export default CaldeirariaProductPage;
