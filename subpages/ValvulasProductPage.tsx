
import React, { useState, useEffect } from 'react';
import CallToAction from '../components/common/CallToAction';
import { ASSETS } from '../lib/media';
import { 
    CheckCircle,
    ChevronRight,
    Settings,
    Layers
} from 'lucide-react';

const ValvulasProductPage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        ASSETS.PRODUCTS.VALVULAS,
        ...ASSETS.PRODUCT_PAGES.VALVULAS.SLIDES
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const models = [
        { 
            name: "BORBOLETA", 
            desc: "A Válvula Borboleta, com seu design compacto, é amplamente empregada em sistemas de grande diâmetro, como na indústria de papel e celulose e no tratamento de efluentes, graças à sua capacidade de manusear fluidos com baixa pressão.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.VALVULAS.MODELS.BORBOLETA 
        },
        { 
            name: "ESFERA", 
            desc: "A Válvula de Esfera, amplamente utilizada em sistemas de alta pressão e fluídos corrosivos, destaca-se pela durabilidade e vedação precisa, sendo ideal para setores como petroquímico e óleo e gás.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.VALVULAS.MODELS.ESFERA 
        },
        { 
            name: "GAVETA", 
            desc: "A Válvula Gaveta, por sua vez, é recomendada para operações que exigem abertura total do fluxo, como em indústrias de mineração e siderurgia, garantindo robustez e confiabilidade mesmo em grandes tubulações.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.VALVULAS.MODELS.GAVETA 
        },
        { 
            name: "GLOBO", 
            desc: "A Válvula Globo oferece controle preciso do fluxo, sendo ideal para setores que demandam regulação minuciosa, como o de energia e indústrias químicas. A Aços Vital atende a todos os setores industriais, garantindo soluções confiáveis e adaptáveis às especificações de cada cliente.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.VALVULAS.MODELS.GLOBO 
        },
        { 
            name: "GUILHOTINA", 
            desc: "A Válvula Guilhotina, conhecida por sua eficiência no manuseio de líquidos com sólidos em suspensão, é especialmente usada em plantas de saneamento e no setor de papel e celulose.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.VALVULAS.MODELS.GUILHOTINA 
        },
        { 
            name: "RETENÇÃO", 
            desc: "A Válvula de Retenção é fundamental para evitar o retorno do fluido em sistemas críticos, sendo aplicada em setores de energia e hidráulica, onde o fluxo unidirecional é crucial para a operação segura.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.VALVULAS.MODELS.RETENCAO 
        },
    ];

    const technicalData = [
        {
            title: "Tipos de Válvulas",
            icon: <Layers size={24} />,
            items: [
                "Válvula Borboleta",
                "Válvula Esfera",
                "Válvula Gaveta",
                "Válvula Globo",
                "Válvula Guilhotina",
                "Válvula Retenção"
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
                    <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-widest drop-shadow-2xl">VÁLVULAS</h1>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-gray-600 text-lg leading-relaxed space-y-6 text-justify">
                            <p>
                                As válvulas Aços Vital são dispositivos essenciais para controlar, interromper ou direcionar o fluxo de fluidos em sistemas industriais, hidráulicos e sanitários. Trabalhamos com diversos modelos como válvula esfera (abertura e fechamento rápido), válvula gaveta (ideal para fluxo total), válvula borboleta (compacta e de fácil operação), válvula retenção (evita retorno do fluxo), e válvula guilhotina (eficaz em fluidos com sólidos em suspensão).
                            </p>
                            <p>
                                Cada modelo atende a uma aplicação específica, oferecendo controle preciso, durabilidade e segurança. Nossas válvulas são produzidas com rigor técnico e materiais de alta qualidade, garantindo resistência à pressão, corrosão e desgaste.
                            </p>
                            <p>
                                Ao optar por nossas válvulas, você assegura eficiência operacional, redução de manutenção e confiabilidade nos processos. Oferecemos suporte técnico, personalização conforme necessidade e estoque ágil, tornando nosso atendimento completo para obras, indústrias e sistemas que exigem performance e confiança.
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
                            <span className="text-brand-orange font-bold tracking-widest text-sm uppercase">Controle de Fluxo</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">Linha de Válvulas</h2>
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
                            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Detalhes de engenharia para máxima segurança operacional.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 max-w-2xl mx-auto">
                            {technicalData.map((section, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-xl p-6 border-l-4 border-brand-orange hover:shadow-lg transition-shadow duration-300 h-full">
                                    <div className="flex items-center mb-6">
                                        <div className="p-2 bg-white rounded-lg shadow-sm text-brand-orange mr-3 border border-gray-100">{section.icon}</div>
                                        <h4 className="text-lg font-bold text-brand-blue-dark leading-tight">{section.title}</h4>
                                    </div>
                                    <ul className="space-y-3 grid grid-cols-1 sm:grid-cols-2 gap-x-8">
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
                                <span className="uppercase tracking-wide text-sm">Tabelas de Válvulas</span>
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

export default ValvulasProductPage;
