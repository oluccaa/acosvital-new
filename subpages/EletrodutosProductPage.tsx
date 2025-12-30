
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

const EletrodutosProductPage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        ASSETS.PRODUCTS.ELETRODUTOS,
        ...ASSETS.PRODUCT_PAGES.ELETRODUTOS.SLIDES
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const models = [
        { 
            name: "ELETROLÍTICO PRÉ-ZINCADO LEVE", 
            desc: "Rígidos de aço, com uma luva em barras de três metros e protetor de rosca. Acabamento galvanizado eletrolítico ou pré-zincado. Indicado para ambientes internos.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.ELETRODUTOS.MODELS.LEVE 
        },
        { 
            name: "ELETROLÍTICO PRÉ-ZINCADO MÉDIO", 
            desc: "Rígidos de aço, com uma luva em barras de três metros e protetor de rosca. Acabamento galvanizado eletrolítico ou pré-zincado. Indicado para ambientes internos.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.ELETRODUTOS.MODELS.MEDIO 
        },
        { 
            name: "ELETROLÍTICO PRÉ-ZINCADO PESADO | NBR 13057", 
            desc: "Rígidos de aço, conforme a norma NBR 13057/93. Rosca NBR 8133, com uma luva e protetor de rosca em barras de 3 metros. Acabamento galvanizado eletrolítico ou pré-zincado. CS1 = 5 micras (padrão); CS2 = 12 micras (sob consulta). Indicado para ambientes internos.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.ELETRODUTOS.MODELS.PESADO 
        },
        { 
            name: "ELETROLÍTICO PRÉ-ZINCADO CONEXÕES", 
            desc: "Pesada, média e luva. Curvas de 45°, 90°, 135° e 180°. Acabamentos galvanizado eletrolítico.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.ELETRODUTOS.MODELS.CONEXOES_ELETRO 
        },
        { 
            name: "ELETROLÍTICO GALVANIZADO À FOGO MÉDIO", 
            desc: "Rígidos de aço, com uma luva e protetor de rosca em barras de três metros. Acabamento galvanizado à fogo (imersão a quente). Indicado para ambientes externos.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.ELETRODUTOS.MODELS.FOGO_MEDIO 
        },
        { 
            name: "ELETROLÍTICO GALV. À FOGO PESADO | NBR 5624", 
            desc: "Rígidos de aço, conforme a norma NBR 5624. Rosca NBR 8133, com uma luva e protetor de rosca em barras de 3 metros. Acabamento galvanizado à fogo (imersão a quente). Indicado para ambientes externos.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.ELETRODUTOS.MODELS.FOGO_PESADO 
        },
        { 
            name: "FOGO - CONEXÕES", 
            desc: "Curvas de 45°, 90°, 135° e 180°. Acabamento galvanizado à fogo (imersão a quente)",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.ELETRODUTOS.MODELS.FOGO_CONEXOES 
        },
        { 
            name: "RIR NPT | NBR 5597 - ATMOSFERA EXPLOSIVA", 
            desc: "Rígidos de aço carbono com rebarba interna removida, conforme norma NBR 5597 (EB341), com uma luva e protetor de rosca em barras de 3 metros. Acabamento galvanizado à fogo (imersão a quente). Com gravação na barra. Indicado para ambientes de atmosfera explosiva. Espessura do revestimento de zinco: 300g/m2.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.ELETRODUTOS.MODELS.RIR_NPT 
        },
        { 
            name: "RIR BSP | NBR 5598 - ATMOSFERA EXPLOSIVA", 
            desc: "Rígidos de aço carbono com rebarba interna removida, conforme norma NBR 5598 (EB342), com uma luva e protetor de rosca em barras de 3 metros. Acabamento galvanizado à fogo (imersão a quente). Com gravação na barra. Indicado para ambientes de atmosfera explosiva. Espessura do revestimento de zinco: 300g/m2.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.ELETRODUTOS.MODELS.RIR_BSP 
        },
        { 
            name: "ELETRODUTOS - INOX SCH.10", 
            desc: "Eletrodutos Rígidos em Aço Inox Schedule 10. BSP. Indicado em hospitais e indústrias alimentícias.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.ELETRODUTOS.MODELS.INOX_10 
        },
        { 
            name: "ELETRODUTOS - INOX SCH.40", 
            desc: "Eletrodutos Rígidos em Aço Inox Schedule 40. NPT/BSP. Indicado em hospitais e indústrias alimentícias.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.ELETRODUTOS.MODELS.INOX_40 
        },
        { 
            name: "ELETRODUTOS - CONEXÕES", 
            desc: "Curvas de 90° e Luvas para eletrodutos.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.ELETRODUTOS.MODELS.CONEXOES_GERAL 
        },
    ];

    const technicalData = [
        {
            title: "Tipos de Eletrodutos",
            icon: <Layers size={24} />,
            items: [
                "Eletrolítico Pré-Zincado - Leve, Médio e Pesado | NBR 13057",
                "Eletrolítico Pré-Zincado - Conexões | Pesada, Média e Luva",
                "Eletrolítico Galvanizado à Fogo - Médio e Pesado | NBR 5624",
                "RIR NPT | NBR 5597 e RIR BSP | NBR 5598",
                "Eletrodutos - Inox SCH.10 e SCH. 40",
                "Eletrodutos - Conexões"
            ]
        },
        {
            title: "Tipos de Materiais",
            icon: <Settings size={24} />,
            items: [
                "Aço Inox Schedule 10",
                "Aço Inox Schedule 40",
                "Aço Galvanizado"
            ]
        },
        {
            title: "Normas de Fabricação",
            icon: <FileText size={24} />,
            items: [
                "NBR 5597 (EB341)",
                "NBR 5598 (EB342)",
                "NBR 5624",
                "NBR 8133",
                "NBR 13057"
            ]
        },
        {
            title: "Tipos de Acabamento",
            icon: <Ruler size={24} />,
            items: [
                "NPT/BSP",
                "Galvanizado à fogo"
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
                    <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-widest drop-shadow-2xl">ELETRODUTOS</h1>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-gray-600 text-lg leading-relaxed space-y-6 text-justify">
                            <p>
                                Os Eletrodutos Aços Vital são fabricados com alto padrão de qualidade, oferecendo segurança e durabilidade em instalações elétricas. Trabalhamos com modelos como rebarba interna removida (facilita a passagem dos cabos, evitando danos), galvanizados eletroliticamente, pré-zincados e conexões compatíveis, garantindo proteção mecânica e contra corrosão.
                            </p>
                            <p>
                                Os eletrodutos são essenciais para conduzir e proteger cabos elétricos em ambientes industriais, comerciais e residenciais, proporcionando organização, segurança contra curtos-circuitos e facilidade de manutenção.
                            </p>
                            <p>
                                A qualidade dos nossos produtos assegura a integridade da fiação, prolonga a vida útil da instalação e contribui para o cumprimento de normas técnicas. Cada modelo é testado e desenvolvido para atender às exigências de resistência, vedação e praticidade.
                            </p>
                            <p>
                                Com nossos eletrodutos, você tem a confiança de um sistema elétrico eficiente, seguro e durável, adequado às mais diversas aplicações e ambientes.
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
                            <span className="text-brand-orange font-bold tracking-widest text-sm uppercase">Proteção Elétrica</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">Modelos de Eletrodutos</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {models.map((model, idx) => (
                                <div key={idx} className="group flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative mt-24 mb-4 border border-white/5 transform hover:-translate-y-1">
                                    <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-40 h-40 rounded-full border-8 border-white shadow-xl overflow-hidden bg-white z-10 transition-transform duration-500 group-hover:scale-105">
                                        <img src={model.image} alt={model.name} className="w-full h-full object-cover" loading="lazy" />
                                    </div>
                                    <div className="p-6 pt-24 flex-grow flex flex-col">
                                        <div className="text-center mb-4">
                                            <h3 className="text-lg font-bold text-brand-blue-dark tracking-wide uppercase">{model.name}</h3>
                                        </div>
                                        <p className="text-gray-600 text-xs leading-relaxed mb-6 flex-grow text-center">{model.desc}</p>
                                        {model.specs.length > 0 && (
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
                            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Segurança e conformidade para sua instalação.</p>
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
                                <span className="uppercase tracking-wide text-sm">Ver Tabela de Eletrodutos</span>
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

export default EletrodutosProductPage;
