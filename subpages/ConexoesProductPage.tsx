
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

const ConexoesProductPage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        ASSETS.PRODUCTS.CONEXOES,
        ...ASSETS.PRODUCT_PAGES.CONEXOES.SLIDES
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const models = [
        { 
            name: "ALTA PRESSÃO / FORJADAS", 
            desc: "Equipamento padrão para conectar tubos, válvulas e mangueiras. O diferencial desta junta é a sua capacidade de operação em condições extremas, suportando pressões de média e alta intensidade sem vazamentos.", 
            specs: [],
            image: ASSETS.PRODUCT_PAGES.CONEXOES.MODELS.ALTA_PRESSAO 
        },
        { 
            name: "GOMADAS", 
            desc: "Sua robustez proporciona vedação eficiente e resistência ao desgaste, mesmo em ambientes com altas demandas de performance. São essenciais para garantir a integridade de sistemas que necessitam de flexibilidade sem comprometer a estanqueidade.", 
            specs: [],
            image: ASSETS.PRODUCT_PAGES.CONEXOES.MODELS.GOMADAS 
        },
        { 
            name: "TUBULARES", 
            desc: "Componentes de alta resistência usadas para unir seções de tubos com outras peças de controle de fluxo, como válvulas e bombas, para a criação de sistemas de tubulações que vão conduzir diversos tipos de fluídos.", 
            specs: [],
            image: ASSETS.PRODUCT_PAGES.CONEXOES.MODELS.TUBULARES 
        },
    ];

    const technicalData = [
        {
            title: "Tipos de Conexões",
            icon: <Settings size={24} />,
            items: [
                "Flange Slip-On (SO)",
                "Conexões Tubulares (Sch.40 ao Sch.XXS)",
                "Conexão Alta Pressão (2000#; 3000#; 6000#; 9000#)",
                "Conexão em Ferro Maleável",
                "Conexão Gomada"
            ]
        },
        {
            title: "Tipos de Materiais",
            icon: <Layers size={24} />,
            items: [
                "Aço Carbono (Forjado e Laminado)",
                "Aço Inoxidável (Forjado e Laminado)",
                "Ligas Especiais",
                "Ferro Maleável"
            ]
        },
        {
            title: "Normas de Fabricação",
            icon: <FileText size={24} />,
            items: [
                "ANSI B16.9",
                "ANSI B16.11",
                "ABNT NBR 6925",
                "AWWA C-208"
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
                    <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-widest drop-shadow-2xl">CONEXÕES</h1>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-gray-600 text-lg leading-relaxed space-y-6 text-justify">
                            <p>
                                As conexões são componentes fundamentais para sistemas de tubulação, utilizadas para unir, direcionar, reduzir ou finalizar linhas em diversos tipos de instalações. Fabricamos três modelos de Conexões, sendo elas Forjadas, Gomadas e Tubulares, todas projetadas para oferecer resistência e confiabilidade em aplicações críticas.
                            </p>
                            <p>
                                Fabricadas em materiais como aço carbono (forjado e laminado), aço inoxidável, ligas especiais e ferro maleável, as conexões devem seguir rigorosos padrões de qualidade e segurança. Entre as principais normas de fabricação estão: ANSI B16.9 (conexões forjadas de aço para solda de topo), ANSI B16.11 (conexões forjadas para rosca e soquete), ABNT NBR 6925 (conexões de ferro maleável) e AWWA C-208 (recomendada para tubulações de água).
                            </p>
                            <p>
                                A conformidade com essas normas garante desempenho confiável, resistência à pressão e durabilidade, sendo essencial para a segurança e eficiência de toda a rede.
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
                            <span className="text-brand-orange font-bold tracking-widest text-sm uppercase">Peças Essenciais</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">Catálogo de Conexões</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Detalhes de engenharia para projetos industriais.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                                <span className="uppercase tracking-wide text-sm">Ver Tabela de Conexões</span>
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

export default ConexoesProductPage;
