
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

const CivilProductPage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        ASSETS.PRODUCTS.CIVIL,
        ...ASSETS.PRODUCT_PAGES.CIVIL.SLIDES
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const models = [
        { 
            name: "ARAME RECOZIDO", 
            desc: "Capaz de aguentar e distribuir o peso da estrutura da sua obra, o Arame Recozido é extremamente versátil e pode ser utilizado para amarrar as formas de madeira e as barras de aço que fazem a estrutura interna das vigas e colunas/pilares de sustentação, garantindo benefícios no canteiro de obras, como praticidade, economia e produtividade, já que é de fácil manuseio e ideal para ser dobrado ou torcido.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.CIVIL.MODELS.ARAME 
        },
        { 
            name: "BARRA DE TRANSFERÊNCIA", 
            desc: "Amplamente utilizadas na Construção Civil, especialmente em projetos que envolvem estruturas de concreto armado, as Barras de Transferência são produtos de alta qualidade, que apresentam resistência e durabilidade superiores. São utilizadas sobretudo para distribuir as cargas sobre o piso e garantir mais estabilidade à obra.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.CIVIL.MODELS.BARRA_TRANSF 
        },
        { 
            name: "VERGALHÕES CA - 25|50|60", 
            desc: "Os Vergalhões CA-25, CA-50 e CA-60 são produzidos em processo de laminação a quente. Soldáveis, possuem superfície nervurada e atendem aos mais exigentes padrões de qualidade da Construção Civil. Indicados para processos que necessitam de alta produtividade e baixa perda metálica, como corte e dobra e armações prontas. A alta tecnologia empregada em sua produção garante o alinhamento das barras retas e a uniformidade dos rolos.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.CIVIL.MODELS.VERGALHOES 
        },
        { 
            name: "TELA SOLDADA NERVURADA", 
            desc: "A Tela Soldada Nervurada é uma armadura de aço que possui alta resistência mecânica e uma melhor aderência entre o aço e o concreto. Esse material é feito com aço CA 60 Nervurado e os fios utilizados são obtidos por laminação a frio. Pode ser aplicada em diferentes confecções, como pisos industriais, fundações em geral, revestimentos de túneis, lajes, paredes de concreto, caixas d’água, entre outros.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.CIVIL.MODELS.TELA 
        },
        { 
            name: "TRELIÇA", 
            desc: "A Treliça é uma peça espacial, produzida com aço CA60 nervurado em todos os fios de sua composição, o que melhora muito a aderência do concreto. Este material é usado principalmente para lajes treliçadas que superam grandes vãos e precisam aguentar cargas pesadas, com pouco escoramento. Esse produto diminui o uso de formas e escoras, reduz mão de obra e a montagem é muito mais rápida.",
            specs: [],
            image: ASSETS.PRODUCT_PAGES.CIVIL.MODELS.TRELICA 
        },
    ];

    const technicalData = [
        {
            title: "Tipos de Produtos",
            icon: <Layers size={24} />,
            items: [
                "Arame Recozido",
                "Barra de Transferência",
                "Tela Soldada Nervurada",
                "Treliça",
                "Vergalhões CA 25|50|60"
            ]
        },
        {
            title: "Tipos de Materiais",
            icon: <Settings size={24} />,
            items: [
                "Aço CA 25|50|60"
            ]
        },
        {
            title: "Tipos de Acabamento",
            icon: <Ruler size={24} />,
            items: [
                "Laminação a quente",
                "Soldagem"
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
                    <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-widest drop-shadow-2xl">CONSTRUÇÃO CIVIL</h1>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-gray-600 text-lg leading-relaxed space-y-6 text-justify">
                            <p>
                                Na Aços Vital, fabricamos materiais de aço de alta qualidade, projetados especialmente para a construção civil. Nossa linha inclui Vergalhões CA-25, CA-50 e CA-60, que garantem a resistência e durabilidade necessárias para estruturas robustas. O Arame Recozido é ideal para aplicações que exigem flexibilidade e alta resistência à tração, proporcionando soluções eficientes para amarrações e reforços.
                            </p>
                            <p>
                                Além disso, oferecemos Barra de Transferência, que facilita a distribuição de cargas, e Tela Soldada Nervurada, que oferece segurança e estabilidade em diversas aplicações. Nossas Treliças são desenvolvidas com precisão, oferecendo suporte estrutural confiável e otimizado.
                            </p>
                            <p>
                                Os produtos da Aços Vital são elaborados para atender aos mais diversos segmentos da construção, sempre com foco na superioridade e performance. Utilizamos processos de fabricação avançados e materiais de alta qualidade, garantindo que nossos produtos estejam em conformidade com as normas técnicas e de segurança vigentes.
                            </p>
                            <p>
                                A versatilidade de nossas soluções permite que sejam utilizadas em diversas aplicações, desde pequenas construções até grandes obras de infraestrutura, sempre com a garantia de resistência e durabilidade, contribuindo para o sucesso de seus projetos com excelência e confiabilidade.
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
                            <span className="text-brand-orange font-bold tracking-widest text-sm uppercase">Estrutura e Fundação</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">Aços para Construção</h2>
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
                            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Qualidade garantida e certificada para sua estrutura.</p>
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
                                <span className="uppercase tracking-wide text-sm">Ver Tabelas de Vergalhões</span>
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

export default CivilProductPage;
