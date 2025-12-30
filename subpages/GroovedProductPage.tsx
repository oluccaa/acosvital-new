
import React, { useState, useEffect } from 'react';
import CallToAction from '../components/common/CallToAction';
import { ASSETS } from '../lib/media';
import { 
    CheckCircle,
    ChevronRight,
    Settings,
    Layers,
    Wrench,
    Disc,
    Maximize,
    Minimize
} from 'lucide-react';

const GroovedProductPage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        ASSETS.PRODUCTS.GROOVED,
        ...ASSETS.PRODUCT_PAGES.GROOVED.SLIDES
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    // --- 17 Modelos Específicos ---
    const models = [
        { 
            name: "Acoplamentos Flexíveis", 
            sub: "Classe 300 Libras | 20MPA",
            desc: "Permite pequenas movimentações e absorção de vibrações entre tubos. Suporta até 300 libras de pressão (20MPA). Aplicado em sistemas hidráulicos, HVAC, combate a incêndio e instalações industriais que exigem flexibilidade e alta resistência.",
            specs: ["Absorção de Vibração", "Alta Resistência"],
            image: ASSETS.PRODUCT_PAGES.GROOVED.MODELS.FLEXIVEL 
        },
        { 
            name: "Acoplamentos Redução Flexível", 
            desc: "Conectam tubos de diferentes diâmetros mantendo flexibilidade. Absorvem expansão térmica e desalinhamentos. Utilizados em sistemas hidráulicos, de incêndio e ventilação, onde há transições de diâmetro e necessidade de movimentação do sistema.",
            specs: ["Transição de Diâmetro", "Flexibilidade"],
            image: ASSETS.PRODUCT_PAGES.GROOVED.MODELS.REDUCAO_FLEX 
        },
        { 
            name: "Acoplamentos Rígido", 
            desc: "Garantem conexão firme e sem movimento entre tubos. Usados quando não se deseja flexibilidade. Comuns em linhas fixas de água, ar comprimido e combate a incêndio, onde o alinhamento é estático e permanente.",
            specs: ["Conexão Firme", "Alinhamento Estático"],
            image: ASSETS.PRODUCT_PAGES.GROOVED.MODELS.RIGIDO 
        },
        { 
            name: "Cotovelo Ranhurado 45º", 
            desc: "Peça em ângulo para alterar a direção da tubulação em 45°. Facilita curvas suaves em sistemas grooved. Utilizado em redes de incêndio, refrigeração e HVAC, garantindo vedação e montagem rápida com acoplamentos.",
            specs: ["Desvio Suave", "Vedação Perfeita"],
            image: ASSETS.PRODUCT_PAGES.GROOVED.MODELS.COTOVELO_45 
        },
        { 
            name: "Cotovelo / Curva Ranhurado 90º", 
            desc: "Muda a direção da linha em 90°. Ideal para cantos e alterações de trajeto. Muito usado em redes de sprinklers, água potável e combate a incêndio com sistema grooved, permitindo fácil instalação.",
            specs: ["Desvio Padrão", "Fácil Instalação"],
            image: ASSETS.PRODUCT_PAGES.GROOVED.MODELS.COTOVELO_90 
        },
        { 
            name: "Cruzeta Mecânica Roscada", 
            desc: "Permite ramificação perpendicular em tubulação existente, com saída roscada. Ideal para sistemas de sprinkler e instalações que exigem derivações pontuais sem desmontagem da linha principal.",
            specs: ["Derivação Pontual", "Saída Roscada"],
            image: ASSETS.PRODUCT_PAGES.GROOVED.MODELS.CRUZETA_MEC 
        },
        { 
            name: "Cruzeta Ranhurada", 
            desc: "Com quatro saídas ranhuradas, distribui o fluxo em cruz. Aplicada em redes hidráulicas e de incêndio onde é necessário derivar duas direções a partir de uma linha central, mantendo padrão grooved.",
            specs: ["Distribuição em Cruz", "4 Saídas"],
            image: ASSETS.PRODUCT_PAGES.GROOVED.MODELS.CRUZETA_RAN 
        },
        { 
            name: "Tampão Ranhurado", 
            desc: "Fecha extremidades de tubulações grooved de forma segura e vedada. Usado para bloqueio temporário ou definitivo de redes hidráulicas, combate a incêndio ou linhas de teste e manutenção.",
            specs: ["Fechamento Seguro", "Bloqueio Estanque"],
            image: ASSETS.PRODUCT_PAGES.GROOVED.MODELS.TAMPAO 
        },
        { 
            name: "Luva Redução Concêntrica Ranhurada", 
            desc: "Conecta tubos de diferentes diâmetros mantendo o centro alinhado. Utilizada em transições verticais ou horizontais em sistemas de água, HVAC e incêndio. Ideal para manter fluxo simétrico.",
            specs: ["Fluxo Simétrico", "Alinhamento Central"],
            image: ASSETS.PRODUCT_PAGES.GROOVED.MODELS.LUVA_RED 
        },
        { 
            name: "Adaptador de Flange de Pescoço", 
            desc: "Permite transição entre sistema grooved e flanges com pescoço. Aplicado quando é necessário conectar tubulações a válvulas, bombas ou equipamentos que utilizam conexões flangeadas.",
            specs: ["Transição de Sistema", "Conexão a Equipamentos"],
            image: ASSETS.PRODUCT_PAGES.GROOVED.MODELS.ADAPTADOR 
        },
        { 
            name: "Tee Mecânico U-Bolted Spinkler Roscável", 
            desc: "Permite derivação com saída roscada para sprinkler sem cortar a tubulação. Fixação por abraçadeira em \"U\". Ideal para instalações rápidas em sistemas de combate a incêndio.",
            specs: ["Derivação Rápida", "Fixação U-Bolt"],
            image: ASSETS.PRODUCT_PAGES.GROOVED.MODELS.TEE_UBOLT 
        },
        { 
            name: "Tee Mecânico Ranhura x Rosca", 
            desc: "Une tubulação ranhurada com derivação roscada. Usado para conectar válvulas, registros ou sprinklers em sistemas mistos. Aplicado em redes hidráulicas e de incêndio com derivações precisas.",
            specs: ["Conexão Mista", "Versatilidade"],
            image: ASSETS.PRODUCT_PAGES.GROOVED.MODELS.TEE_MEC_ROSCA 
        },
        { 
            name: "Tee Mecânico Ranhura x Ranhura", 
            desc: "Faz a derivação de uma linha grooved para outra também grooved. Usado em sistemas que exigem ampliação de rede sem solda ou rosca. Fácil instalação em campo.",
            specs: ["Ampliação de Rede", "Totalmente Grooved"],
            image: ASSETS.PRODUCT_PAGES.GROOVED.MODELS.TEE_MEC_RAN 
        },
        { 
            name: "Tee Ranhurado", 
            desc: "Peça em “T” totalmente ranhurada para conexões de três ramificações. Utilizado em redes principais e derivadas de água, HVAC e combate a incêndio. Garantia de montagem rápida e vedada.",
            specs: ["3 Ramificações", "Montagem Rápida"],
            image: ASSETS.PRODUCT_PAGES.GROOVED.MODELS.TEE_RAN 
        },
        { 
            name: "Tee Redução Ranhura x Ranhura", 
            desc: "Faz derivação ranhurada com redução de diâmetro. Ideal para saídas menores a partir de uma linha principal. Muito aplicado em redes de sprinklers e derivações industriais otimizadas.",
            specs: ["Redução de Diâmetro", "Derivação Otimizada"],
            image: ASSETS.PRODUCT_PAGES.GROOVED.MODELS.TEE_RED_RAN 
        },
        { 
            name: "Tee Redução Ranhura x Rosca", 
            desc: "Permite saída roscada com redução de diâmetro a partir de linha ranhurada. Usado para ligar sprinklers, registros ou válvulas em pontos com necesidad de menor vazão.",
            specs: ["Saída Menor Vazão", "Conexão de Acessórios"],
            image: ASSETS.PRODUCT_PAGES.GROOVED.MODELS.TEE_RED_ROSCA 
        },
        { 
            name: "Flange Ranhurada Bipartido", 
            desc: "Facilita conexão entre sistema grooved e flangeado. Por ser bipartido, permite instalação sem desmontar a tubulação. Ideal para manutenções e acoplamentos com bombas, válvulas e equipamentos industriais.",
            specs: ["Instalação Fácil", "Manutenção Ágil"],
            image: ASSETS.PRODUCT_PAGES.GROOVED.MODELS.FLANGE_BIP 
        }
    ];

    const techElements = [
        { icon: <Layers size={24} />, title: "Tubo com ranhura", desc: "Base do sistema." },
        { icon: <Disc size={24} />, title: "Anel de vedação", desc: "Garante a estanqueidade." },
        { icon: <Settings size={24} />, title: "Segmento", desc: "Une os tubos." },
        { icon: <Wrench size={24} />, title: "Parafusos e Porcas", desc: "Fixam os segmentos." },
    ];

    return (
        <div className="bg-white">
            {/* 1. HERO SLIDER */}
            <section className="relative h-[40vh] min-h-[350px] overflow-hidden bg-gray-900 flex items-center justify-center">
                {slides.map((img, index) => (
                    <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                        <div className={`absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-linear ${index === currentSlide ? 'scale-110' : 'scale-100'}`} style={{ backgroundImage: `url(${img})` }}></div>
                        <div className="absolute inset-0 bg-black/60"></div>
                    </div>
                ))}
                <div className="relative z-20 container mx-auto px-6 sm:px-12 lg:px-24 text-center animate-in fade-in zoom-in duration-700">
                    <div className="w-20 h-1.5 bg-brand-orange mx-auto mb-6 rounded-full shadow-lg"></div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-widest drop-shadow-2xl">LINHA GROOVED</h1>
                </div>
            </section>

            {/* 2. UNIFIED SECTION: INTRO + TECHNOLOGY */}
            <section className="py-24 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        
                        {/* Title */}
                        <div className="mb-12 text-center">
                             <span className="text-brand-orange font-bold tracking-widest text-sm uppercase">ENGENHARIA E INOVAÇÃO</span>
                             <h2 className="text-3xl md:text-5xl font-bold text-brand-blue-dark mt-2 mb-6">Tecnologia de Ranhuras</h2>
                             <div className="w-24 h-1.5 bg-brand-orange mx-auto rounded-full"></div>
                             <p className="mt-6 text-gray-500 text-lg max-w-3xl mx-auto">
                                A tecnologia de ranhuras é a combinação de quatro elementos-chaves para uma união estanque e resistente.
                             </p>
                        </div>

                        {/* Intro Text */}
                        <div className="text-gray-600 text-lg leading-relaxed space-y-6 text-justify mb-20">
                            <p>
                                Os tubos e conexões grooved Aços Vital são ideais para sistemas de <strong>combate a incêndio, HVAC, água e gás</strong>, oferecendo instalação rápida, segura e com excelente vedação. Diferente dos sistemas tradicionais soldados ou roscados, o sistema grooved utiliza ranhuras nas extremidades dos tubos, unidas por acoplamentos K, que garantem flexibilidade, absorção de vibração e fácil manutenção.
                            </p>
                            <p>
                                Esse tipo de conexão reduz significativamente o tempo de montagem e <strong>dispensa o uso de solda ou rosca</strong>, tornando a instalação mais limpa e eficiente. Além disso, permite desmontagens rápidas em eventuais manutenções sem a necessidade de cortes.
                            </p>
                            <p>
                                A Aços Vital fornece tubos e conexões grooved com alta precisão dimensional e resistência, seguindo rigorosos padrões de qualidade. Ao adquirir conosco, você conta com agilidade no fornecimento, suporte técnico e a confiança de um produto durável, seguro e adaptado às exigências do seu projeto.
                            </p>
                        </div>

                        {/* Technology Visuals (Image + List) */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                            {/* Image - DIRECT ON BACKGROUND, NO BOX/SHADOW */}
                            <div className="relative flex justify-center">
                                 <img 
                                    src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-hostgator-brasil-v1-0-0%2F850%2F1911850%2FCU3jUjet%2F4c5807bb73d4482a9b03646b17efbc57&methods=resize%2C800%2C5000" 
                                    alt="Ilustração da Tecnologia de Ranhuras" 
                                    className="w-[85%] h-auto object-contain" 
                                    loading="lazy"
                                />
                            </div>

                            {/* Elements List */}
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-brand-blue-dark mb-6 border-b border-gray-200 pb-4">Elementos do Sistema</h3>
                                <div className="space-y-6">
                                    {techElements.map((item, idx) => (
                                        <div key={idx} className="flex items-start group">
                                            <div className="p-3 bg-white rounded-lg text-brand-orange mr-4 flex-shrink-0 shadow-sm border border-gray-100 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-brand-blue-dark leading-tight mb-1">{item.title}</h4>
                                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Intermediary Text */}
                        <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
                            Esses quatro componentes formam um acoplamento com ranhuras, agrupados em dois tipos:
                        </p>

                         {/* Coupling Types Cards */}
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Card Rígido */}
                            <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-brand-blue-dark hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                                <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Minimize size={120} className="text-brand-blue-dark" />
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center mb-6">
                                        <div className="p-3 bg-white rounded-lg shadow-sm text-brand-blue-dark mr-4 border border-gray-100">
                                            <Minimize size={28} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-brand-blue-dark">Acoplamentos Rígidos</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Não permitem movimento e podem ser usados sempre que a imobilidade na união do tubo for necessária, semelhante a uma união flangeada ou soldada.
                                    </p>
                                </div>
                            </div>

                            {/* Card Flexível */}
                            <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-brand-orange hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                                 <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Maximize size={120} className="text-brand-orange" />
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center mb-6">
                                        <div className="p-3 bg-white rounded-lg shadow-sm text-brand-orange mr-4 border border-gray-100">
                                            <Maximize size={28} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-brand-blue-dark">Acoplamentos Flexíveis</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Permitem uma quantidade limitada de movimento angular, absorvendo vibrações e acomodando desalinhamentos.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                 </div>
            </section>

            {/* 3. CATÁLOGO DE MODELOS (17 Modelos Específicos - Estilo Flanges) */}
            <section className="py-24 bg-brand-blue-dark relative overflow-hidden">
                {/* Background Pattern subtil para dar sofisticação */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                
                <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <span className="text-brand-orange font-bold tracking-widest text-sm uppercase">Linha Completa</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">Catálogo de Modelos</h2>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {models.map((model, idx) => (
                                <div key={idx} className="group flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-brand-blue-light/20 transition-all duration-300 relative mt-24 mb-4 border border-white/5 transform hover:-translate-y-1">
                                    {/* Image Circle Container - Floating */}
                                    <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-56 h-56 rounded-full border-8 border-white shadow-xl overflow-hidden bg-white z-10 transition-transform duration-500 group-hover:scale-105">
                                        <img 
                                            src={model.image} 
                                            alt={model.name}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="p-6 pt-40 flex-grow flex flex-col">
                                        <div className="text-center mb-4">
                                            <h3 className="text-xl font-bold text-brand-blue-dark tracking-wide drop-shadow-sm uppercase">
                                                {model.name}
                                            </h3>
                                            {model.sub && <span className="block text-xs font-bold text-brand-orange mt-1 tracking-wider">{model.sub}</span>}
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow text-center md:text-left">
                                            {model.desc}
                                        </p>

                                        {/* Footer Specs */}
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

            {/* 4. TECHNICAL SPECS & CTA */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center justify-between bg-brand-blue-light/5 rounded-3xl p-8 md:p-12 border border-brand-blue-light/10">
                            <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-bold text-brand-blue-dark mb-4">Dados Técnicos de Acoplamento</h3>
                                <p className="text-gray-600 max-w-xl">
                                    Acesse nossa tabela técnica completa para consultar dimensões, pressões de trabalho e especificações detalhadas do Modelo K10 e tubos compatíveis.
                                </p>
                            </div>
                            <a 
                                href="#/tables" 
                                className="whitespace-nowrap inline-flex items-center bg-brand-blue-dark text-white font-bold py-4 px-8 rounded-xl hover:bg-brand-blue-light transition-all duration-300 shadow-lg hover:shadow-brand-blue-dark/30 transform hover:-translate-y-1 group"
                            >
                                <span className="uppercase tracking-wide text-sm">Ver Tabela Técnica</span>
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

export default GroovedProductPage;
