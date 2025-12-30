
import React, { useState, useEffect } from 'react';
import CallToAction from '../components/common/CallToAction';
import { ASSETS } from '../lib/media';
import { 
    CheckCircle,
    ChevronRight,
    FileText,
    Settings,
    Zap,
    Flame
} from 'lucide-react';

const OxicorteProductPage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        ASSETS.PRODUCTS.OXICORTE,
        ...ASSETS.PRODUCT_PAGES.OXICORTE.SLIDES
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const models = [
        { 
            name: "MAÇARICO", 
            desc: "O corte com maçarico oferece excelente precisão para chapas espessas, sendo versátil e eficiente para cortes manuais em aço carbono, ideal para ajustes e acabamentos específicos.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.OXICORTE.MODELS.MACARICO 
        },
        { 
            name: "MÁQUINA TARTARUGA", 
            desc: "A Máquina Tartaruga realiza cortes automáticos, perfeitos para grandes chapas, oferecendo uniformidade e precisão ao longo de cortes retos, com alta eficiência para produções em série.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.OXICORTE.MODELS.TARTARUGA 
        },
        { 
            name: "MÁQUINA CNC PLASMA", 
            desc: "A Máquina CNC Plasma combina alta velocidade e precisão em cortes complexos, controlados por computador, oferecendo excelente acabamento em chapas de aço e materiais similares.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.OXICORTE.MODELS.PLASMA 
        },
        { 
            name: "MÁQUINA FOTOCELULA", 
            desc: "A Máquina Fotocélula segue moldes ou desenhos com sensores, garantindo cortes precisos e reproduzindo formas complexas, sendo uma solução ideal para grandes volumes de produção.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.OXICORTE.MODELS.FOTOCELULA 
        },
    ];

    const technicalData = [
        {
            title: "Processos de Corte",
            icon: <Flame size={24} />,
            items: [
                "Oxicorte Manual (Maçarico)",
                "Oxicorte Mecanizado (Tartaruga/Fotocélula)",
                "Plasma CNC (Alta Definição)"
            ]
        },
        {
            title: "Materiais Processados",
            icon: <Settings size={24} />,
            items: [
                "Aço Carbono (Chapas Espessas)",
                "Aço Inox",
                "Materiais similares"
            ]
        },
        {
            title: "Tipos de Corte",
            icon: <Zap size={24} />,
            items: [
                "Cortes Retos Automatizados",
                "Cortes Complexos via Desenho/Molde",
                "Cortes Personalizados Manuais",
                "Reprodução de Modelos"
            ]
        },
        {
            title: "Vantagens",
            icon: <FileText size={24} />,
            items: [
                "Excelente acabamento",
                "Ausência de rebarbas indesejadas",
                "Alta precisão dimensional",
                "Integridade do material mantida"
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
                    <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-widest drop-shadow-2xl">OXICORTE E PLASMA</h1>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-gray-600 text-lg leading-relaxed space-y-6 text-justify">
                            <p>
                                Nossa empresa se destaca pela qualidade e precisão nos cortes metálicos, alcançados através da técnica de oxicorte. Esse processo, amplamente utilizado na indústria metalúrgica, nos permite realizar cortes com extrema exatidão, mantendo a integridade e as propriedades dos materiais. Contamos com uma infraestrutura moderna e equipamentos de ponta, que garantem resultados consistentes e de alta performance.
                            </p>
                            <p>
                                Utilizamos maçaricos manuais, ideais para cortes mais personalizados e de alta precisão. Além disso, temos à disposição a Máquina Tartaruga, que automatiza os cortes retos em chapas espessas, proporcionando uniformidade e eficiência. Nossa Máquina Fotocélula, equipada com tecnologia avançada, assegura a reprodução precisa de modelos a partir de desenhos pré-definidos. Por fim, a Máquina CNC Plasma, com sua capacidade de corte de alta velocidade e extrema precisão, é indicada para cortes complexos e detalhados em chapas de aço carbono e outros materiais.
                            </p>
                            <p>
                                A combinação desses equipamentos, somada à expertise de nossa equipe, nos permite entregar produtos com excelente acabamento, sem rebarbas indesejadas, e com altíssima precisão, independente da complexidade do projeto. Esse compromisso com a qualidade e a eficiência nos torna capazes de atender com excelência a diversos setores industriais, sempre respeitando prazos e garantindo a satisfação de nossos clientes.
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
                            <span className="text-brand-orange font-bold tracking-widest text-sm uppercase">Tecnologia de Corte</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">Soluções Disponíveis</h2>
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
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-4">TECNOLOGIA E PRECISÃO</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Equipamentos modernos para garantir o melhor corte.</p>
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
                                <span className="uppercase tracking-wide text-sm">Consultar Tabelas de Chapas</span>
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

export default OxicorteProductPage;
