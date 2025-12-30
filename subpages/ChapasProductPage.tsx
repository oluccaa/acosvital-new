
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

const ChapasProductPage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        ASSETS.PRODUCTS.CHAPAS,
        ...ASSETS.PRODUCT_PAGES.CHAPAS.SLIDES
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const models = [
        { 
            name: "CHAPA FINA FRIO E QUENTE", 
            desc: "O processo de laminação é utilizado para a fabricação de produtos como chapas com menor espessura e que apresentam um maior comprimento. São denominadas Chapas Finas a Frio (FF) as chapas que passam pelo processo de laminação a frio e possuem menos de 3 mm. Já as Chapas Finas a Quente (FQ) são desenvolvidas a partir de um processo de laminação feito em altas temperaturas.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.CHAPAS.MODELS.FINA 
        },
        { 
            name: "CHAPA GROSSA", 
            desc: "As Chapas Grossas provenientes de laminador de tiras a quente (chapa de bobina) e são destinadas à utilização em vários segmentos, ideais para utilização em componentes estruturais que precisam ter desempenho mecânico aliado a boas características de soldabilidade. Confeccionadas em aço, as chapas grossas se mostram extremamente resistentes, oferecendo segurança e durabilidade.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.CHAPAS.MODELS.GROSSA 
        },
        { 
            name: "CHAPA ZINCADA/GALVALUME", 
            desc: "As Chapas Zincadas/Galvalume são constituídas por folhas finas de material metálico que passaram por um processo denominado galvanização. Durante esse processo, o material é submerso em metais como o zinco. Isso faz com que se forme uma camada que o protege de corrosões.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.CHAPAS.MODELS.ZINCADA 
        },
        { 
            name: "CHAPA XADREZ", 
            desc: "A Chapa Xadrez é uma chapa de metal com pequenos relevos dispostos sobre ela em formato xadrez, fator que não a enquadra como totalmente lisa e proporcione a característica antiderrapante. Pelo seu alto-relevo, ela é utilizada para pisos em geral com aço de qualidade comercial.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.CHAPAS.MODELS.XADREZ 
        },
        { 
            name: "CHAPA PERFURADA - REDONDO", 
            desc: "Esse modelo de chapa possui furos redondos em sua estrutura e pode ser usada como solução em construções, além de permitir a passagem de ar, luz e som. A Chapa Perfurada é leve, fator que facilita seu transporte e aplicação.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.CHAPAS.MODELS.PERFURADA 
        },
        { 
            name: "CHAPA EXPANDIDA", 
            desc: "As Chapas Expandidas são de grande resistência e durabilidade, mas com um menor custo por área de produto final. Por terem uma grande área aberta, não impedem a passagem de luz, ar e som, possibilitando a execução de uma grande variedade de projetos dado a sua versatilidade.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.CHAPAS.MODELS.EXPANDIDA 
        },
    ];

    const technicalData = [
        {
            title: "Tipos de Chapas",
            icon: <Layers size={24} />,
            items: [
                "Chapa FF / FQ",
                "Chapa Expandida",
                "Chapa Grossa",
                "Chapa Perfurada",
                "Chapa Xadrez",
                "Chapa Zincada/Galvalume"
            ]
        },
        {
            title: "Tipos de Materiais",
            icon: <Settings size={24} />,
            items: [
                "Aço Carbono (Forjado e Laminado)",
                "Aço Inoxidável (Forjado e Laminado)",
                "Alumínio"
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
                    <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-widest drop-shadow-2xl">CHAPAS</h1>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-gray-600 text-lg leading-relaxed space-y-6 text-justify">
                            <p>
                                Na Aços Vital você encontra Chapas de aço nos modelos Laminados, Xadrez, Expandidas, entre outras, fabricadas a partir de materiais de alta qualidade, como aço carbono, aço inoxidável e alumínio. Esses materiais garantem excelente resistência, durabilidade e precisão, características essenciais para atender às mais diversas exigências industriais.
                            </p>
                            <p>
                                Elas combinam praticidade e resistência, sendo aplicáveis tanto em ambientes industriais quanto em projetos de arquitetura. E as chapas xadrez, com sua superfície antiderrapante, são ideais para pisos industriais, escadas e plataformas, sendo amplamente aplicadas em setores como transporte, mineração e indústria naval. Sua durabilidade e resistência a impactos as tornam uma escolha confiável para ambientes que exigem segurança e robustez.
                            </p>
                            <p>
                                Nossas chapas são desenvolvidas para garantir durabilidade e performance, sempre respeitando as especificações de cada projeto e setor.
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
                            <span className="text-brand-orange font-bold tracking-widest text-sm uppercase">Matéria-Prima</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">Modelos de Chapas</h2>
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
                                        <p className="text-gray-600 text-xs leading-relaxed mb-6 flex-grow text-center">{model.desc}</p>
                                        
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
                            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Variedade de ligas e acabamentos para sua aplicação.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
                                <span className="uppercase tracking-wide text-sm">Ver Tabelas de Chapas</span>
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

export default ChapasProductPage;
