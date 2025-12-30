
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

const PerfisLaminadosProductPage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        ASSETS.PRODUCTS.PERFIS,
        ...ASSETS.PRODUCT_PAGES.PERFIS.SLIDES
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const models = [
        { 
            name: "PERFIL W - ABAS PARALELAS", 
            desc: "O Perfil W é resistente e garante a sustentação do sistema de lajes e pilar, transferindo os esforços do peso aos demais elementos, como as colunas, paredes e portas. Esse modelo é composto por uma laminação em Aço ASTM A572 Grau 50, com comprimento padrão de 12 metros. É possível encontrar uma ampla variedade de bitolas de 150 a 610mm de altura, ou 6 a 24 polegadas.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.PERFIS.MODELS.W 
        },
        { 
            name: "I/HQ - ABAS INCLINADAS", 
            desc: "O Perfil I (Viga I) e Perfil HQ são ideais para suportar grandes cargas em projetos de vários tipos. Em virtude do formato tradicional com faces das abas internas inclinadas esse modelo possui alta inércia e maior resistência geométrica. A Viga I suporta altas cargas de tensões e outros esforços devido o aço ser resistente e projetado para atender aplicações de estruturas robustas.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.PERFIS.MODELS.I_HQ 
        },
        { 
            name: "PERFIL U - ABAS INCLINADAS", 
            desc: "O Perfil U é um aço versátil que pode ser aplicado em diferentes tipos de obras, fator que faz com que seja muito requisitado para promover encaixes nas construções civis. Assim, geram maior praticidade na montagem. Ele é são feitos de viga metálica em aço galvanizado, aço galvalume e aço zincalume.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.PERFIS.MODELS.U 
        },
        { 
            name: "PERFIL U - SIMPLES", 
            desc: "O Perfil U Simples é fabricado a partir de tiras de aço plano laminado a quente. É utilizado na construção mecânica em geral, em estruturas metálicas, na sinalização rodoviária, em máquinas, implementos agrícolas e em outras aplicações.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.PERFIS.MODELS.U_SIMPLES 
        },
        { 
            name: "PERFIL U -  ENRIJECIDO", 
            desc: "O Perfil U Enrijecido é uma variação do perfil U, cuja diferença se dá pelas dobras internas na parte que fica aberta. Esse modelo é feito a partir de uma placa de aço laminado. É muito parecido com o perfil anterior, inclusive no peso, o que faz com que esse perfil não exerça pressão extra na estrutura.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.PERFIS.MODELS.U_ENRIJECIDO 
        },
        { 
            name: "CANTONEIRA - PERFIL L - ABAS IGUAIS", 
            desc: "Formada por uma chapa de aço dobrada em ângulo reto e produzida a partir de aço carbono, a cantoneira de aço é um produto fundamental para a sustentação de estruturas. Muito utilizado em projetos de Construção Metálica, o produto oferece resistência, durabilidade e estabilidade.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.PERFIS.MODELS.CANTONEIRA 
        },
        { 
            name: "BARRA CHATA", 
            desc: "As barras com seção transversal retangular possuem superfícies lisas, sem cantos vivos. Este produto é extremamente versátil, sendo empregado principalmente em grades e portões, esquadrias, máquinas, implementos agrícolas e rodoviários, e na indústria mecânica em geral.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.PERFIS.MODELS.BARRA_CHATA 
        },
        { 
            name: "BARRA REDONDA", 
            desc: "As barras de aço carbono redondas podem ser fornecidas laminadas ou trefiladas. Em sua produção de forma laminada, são feitas várias camadas que, posteriormente, serão unidas e vão compor uma unidade da barra. A forma trefilada é feita de modo que sua largura é reduzida e seu tamanho aumentado, o material é torcido por uma máquina chamada trefila.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.PERFIS.MODELS.BARRA_REDONDA 
        },
    ];

    const technicalData = [
        {
            title: "Perfis Laminados",
            icon: <Layers size={24} />,
            items: [
                "Barra Chata",
                "Barra Redonda",
                "Perfil W (I) (Viga I)",
                "Perfil L (Cantoneira)",
                "Perfil U (Viga U)",
                "Perfil W (HP)"
            ]
        },
        {
            title: "Perfis Dobrados",
            icon: <Ruler size={24} />,
            items: [
                "Perfil L (Cantoneira)",
                "Perfil UDC - Simples",
                "Perfil UDC - Enrijecido"
            ]
        },
        {
            title: "Tipos de Materiais",
            icon: <Settings size={24} />,
            items: [
                "Aço carbono",
                "Aço inoxidável"
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
                    <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-widest drop-shadow-2xl">PERFIS LAMINADOS E DOBRADOS</h1>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-gray-600 text-lg leading-relaxed space-y-6 text-justify">
                            <p>
                                Os perfis, barras e cantoneiras Aços Vital são fabricados em três tipos de aço, laminados, dobrados e soldados, e são produzidos com materiais de alta qualidade, como aço carbono e aço inoxidável. Esses perfis garantem resistência e durabilidade, sendo ideais para atender as mais variadas demandas industriais.
                            </p>
                            <p>
                                Nossos perfis se destacam pela alta qualidade, proporcionando soluções sob medida que atendem às exigências técnicas de cada cliente, garantindo assim a segurança e a robustez necessária para os mais variados mercados, oferecendo soluções confiáveis para projetos de diferentes escalas.
                            </p>
                            <p>
                                Sua versatilidade permite atender a diferentes aplicações que demandam tanto capacidade de carga quanto resistência à corrosão, tornando-se cruciais em setores estratégicos que se aplicam.
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
                            <span className="text-brand-orange font-bold tracking-widest text-sm uppercase">Perfis, Barras e Cantoneiras</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">Modelos Disponíveis</h2>
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
                            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Aços de alta performance para sua estrutura.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                <span className="uppercase tracking-wide text-sm">Ver Tabelas de Perfis</span>
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

export default PerfisLaminadosProductPage;
