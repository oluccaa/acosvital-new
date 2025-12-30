
import React, { useState, useEffect } from 'react';
import CallToAction from '../components/common/CallToAction';
import { ASSETS } from '../lib/media';
import { 
    CheckCircle,
    ChevronRight,
    FileText,
    Settings,
    Ruler,
    Layers,
    Paintbrush,
    ClipboardCheck,
    Camera,
    Flame,
    Wrench,
    Factory,
    Scan
} from 'lucide-react';

const TanqueCombustivelProductPage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        ASSETS.PRODUCTS.TANQUES,
        ...ASSETS.PRODUCT_PAGES.TANQUES.SLIDES
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    // --- PRODUTOS ---
    const productModels = [
        { 
            name: "Tanque Aéreo (Vertical/Horizontal)", 
            desc: "Tanques metálicos para armazenamento de combustíveis e óleos acima do solo. Construídos em aço carbono com bacia de contenção integrada opcional.",
            specs: ["Norma NBR 15461", "Capacidades Variadas", "Fácil Instalação"],
            image: ASSETS.PRODUCT_PAGES.TANQUES.MODELS.AEREO 
        },
        { 
            name: "Tanque Jaquetado (Subterrâneo)", 
            desc: "Sistema de parede dupla (aço carbono + fibra de vidro) com monitoramento intersticial para evitar vazamentos e contaminação do solo.",
            specs: ["Norma NBR 16161", "Segurança Ambiental", "Postos de Serviço"],
            image: ASSETS.PRODUCT_PAGES.TANQUES.MODELS.JAQUETADO 
        },
        { 
            name: "Tanque para GLP", 
            desc: "Vasos de pressão projetados especificamente para o armazenamento seguro de Gás Liquefeito de Petróleo, atendendo rigorosas normas de segurança.",
            specs: ["ASME Seção VIII", "Alta Pressão", "Indústria/Comércio"],
            image: ASSETS.PRODUCT_PAGES.TANQUES.MODELS.GLP 
        },
        { 
            name: "Módulos de Abastecimento", 
            desc: "Soluções completas (Skids) que integram tanque e bomba de abastecimento, ideais para frotas próprias, obras e agronegócio.",
            specs: ["Solução Plug & Play", "Mobilidade", "Gestão de Frota"],
            image: ASSETS.PRODUCT_PAGES.TANQUES.MODELS.MODULOS 
        },
    ];

    // --- SERVIÇOS ---
    const services = [
        {
            title: "Inspeção de Pintura",
            icon: <Paintbrush size={32} />,
            description: "A Inspeção de Pintura Industrial assegura a qualidade e durabilidade dos revestimentos aplicados em estruturas e equipamentos. Nossa equipe técnica realiza verificações minuciosas em todas as etapas, desde a preparação da superfície até a aplicação final.",
            benefits: ["Evita falhas como bolhas/descascamento", "Protege contra corrosão", "Reduz custos de manutenção", "Assegura conformidade técnica"],
            docs: "Procedimentos, normas e relatórios técnicos."
        },
        {
            title: "Inspeção de Equipamentos",
            icon: <Settings size={32} />,
            description: "Garante segurança, eficiência e conformidade das suas máquinas e sistemas. Realizamos análises detalhadas, prevenindo falhas, otimizando o desempenho e assegurando que suas operações estejam de acordo com as normas regulamentadoras.",
            benefits: ["Aumenta produtividade", "Prolonga vida útil", "Conformidade com normas", "Manutenção preventiva"],
            docs: "Procedimentos, normas e relatórios técnicos."
        },
        {
            title: "Inspeção de Fabricação",
            icon: <Factory size={32} />,
            description: "Voltada para garantir a qualidade, segurança e conformidade dos processos produtivos de caldeiraria e tubulação. Atuamos em todas as etapas, desde a análise de materiais até a inspeção final, utilizando ensaios não destrutivos.",
            benefits: ["Segurança operacional", "Qualidade assegurada", "Confiabilidade", "Conformidade internacional (ASME/API)"],
            docs: "Especificações, Desenhos, ITP, Certificados de Material, Relatórios de CQ."
        },
        {
            title: "Inspeção por Drone",
            icon: <Camera size={32} />,
            description: "Método que utiliza drones equipados com câmeras de alta resolução, térmicas e sensores para avaliar a integridade de estruturas e instalações de tanques. Coleta e análise de dados com alta precisão e segurança.",
            benefits: ["Acesso a áreas difíceis", "Redução de riscos (altura/confinado)", "Detecção de falhas invisíveis a olho nu", "Agilidade e economia"],
            docs: "Relatórios de imagem, análise térmica e estrutural."
        },
        {
            title: "Inspeção de Soldagem",
            icon: <Flame size={32} />,
            description: "Essencial para garantir a integridade e segurança das estruturas metálicas. Realizamos testes rigorosos em cada etapa do processo de soldagem, identificando defeitos e garantindo conformidade.",
            benefits: ["Integridade estrutural", "Prevenção de falhas críticas", "Redução de riscos de acidentes", "Prolongamento da vida útil"],
            docs: "Procedimentos, normas e relatórios técnicos."
        },
        {
            title: "Auditoria de Soldagem",
            icon: <ClipboardCheck size={32} />,
            description: "Análise completa dos procedimentos de soldagem, materiais, qualificações de soldadores e desempenho de equipamentos. Identificamos falhas e propomos soluções para otimizar processos.",
            benefits: ["Melhoria na qualidade", "Redução de retrabalhos", "Conformidade internacional", "Otimização de custos"],
            docs: "WPS, Qualificações, Registros de Inspeção/END, Certificados."
        },
        {
            title: "Controle Dimensional",
            icon: <Ruler size={32} />,
            description: "Assegura a precisão e a conformidade das peças e estruturas industriais. Utilizamos equipamentos de alta precisão para evitar problemas de montagem e garantir a qualidade final.",
            benefits: ["Precisão milimétrica", "Redução de falhas de montagem", "Garantia de tolerâncias", "Qualidade do produto final"],
            docs: "Procedimentos, normas e relatórios técnicos."
        },
        {
            title: "Manutenção Industrial",
            icon: <Wrench size={32} />,
            description: "Conjunto especializado de atividades para garantir o funcionamento eficiente de instalações. Inclui desde diagnóstico e reparos até montagens novas de estruturas, vasos de pressão e tubulações.",
            benefits: ["Segurança operacional", "Otimização de processos", "Redução de custos", "Melhoria da produtividade"],
            docs: "Procedimentos de fabricação/montagem, certificados."
        },
        {
            title: "Manutenção Tanques API 650",
            icon: <Scan size={32} />,
            description: "Serviços especializados para garantir a integridade e eficiência de tanques de armazenamento, seguindo rigorosamente as normas API 650. Equipe qualificada e equipamentos de última geração.",
            benefits: ["Alta durabilidade", "Conformidade normativa", "Rapidez na execução", "Garantia da qualidade"],
            docs: "Procedimentos, instruções, EPS, RQPS."
        }
    ];

    const technicalData = [
        {
            title: "Normas de Fabricação",
            icon: <FileText size={24} />,
            items: [
                "NBR 15461 (Aéreos)",
                "NBR 16161 (Subterrâneos)",
                "ASME VIII (Vasos de Pressão)",
                "Portaria INMETRO"
            ]
        },
        {
            title: "Capacidades",
            icon: <Ruler size={24} />,
            items: [
                "De 5.000 a 60.000 litros",
                "Dimensões padronizadas",
                "Projetos especiais sob medida",
                "Compartimentação opcional"
            ]
        },
        {
            title: "Acessórios",
            icon: <Settings size={24} />,
            items: [
                "Boca de visita",
                "Escada e Guarda-corpo",
                "Conexões flangeadas/roscadas",
                "Bacia de contenção"
            ]
        },
        {
            title: "Segurança",
            icon: <Layers size={24} />,
            items: [
                "Parede dupla (Jaquetado)",
                "Sensor de vazamento",
                "Teste de estanqueidade",
                "Pintura anticorrosiva"
            ]
        }
    ];

    return (
        <div className="bg-white">
            {/* HERO */}
            <section className="relative h-[40vh] min-h-[350px] overflow-hidden bg-gray-900 flex items-center justify-center">
                {slides.map((img, index) => (
                    <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                        <div className={`absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-linear ${index === currentSlide ? 'scale-110' : 'scale-100'}`} style={{ backgroundImage: `url(${img})` }}></div>
                        <div className="absolute inset-0 bg-black/50"></div>
                    </div>
                ))}
                <div className="relative z-20 container mx-auto px-6 sm:px-12 lg:px-24 text-center animate-in fade-in zoom-in duration-700">
                    <div className="w-20 h-1.5 bg-brand-orange mx-auto mb-6 rounded-full shadow-lg"></div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-widest drop-shadow-2xl">
                        Tanques e Serviços
                    </h1>
                    <p className="text-white/90 text-lg mt-4 font-medium tracking-wide">Fabricação, Manutenção e Reforma</p>
                </div>
            </section>

            {/* INTRODUÇÃO */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-6">Excelência em Armazenamento e Serviços</h2>
                            <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
                        </div>
                        <div className="text-gray-600 text-lg leading-relaxed space-y-6 text-justify">
                            <p>
                                A fabricação, manutenção e reforma de <strong>Tanques de Combustível e Tanques GLP</strong> feito pela Aços Vital é fundamental para garantir segurança, durabilidade e eficiência operacional. Com uma restauração completa, interna e externa, seu tanque retorna ao mercado com desempenho equivalente a um novo, mas com um investimento muito mais vantajoso.
                            </p>
                            <p>
                                Nossa equipe altamente qualificada utiliza técnicas avançadas para recuperar a estrutura e funcionalidade do equipamento, garantindo um acabamento impecável e resistência superior. Além disso, trabalhamos com prazos reduzidos para que você receba seu tanque rapidamente e sem impacto nas operações.
                            </p>
                            <p>
                                Optar pela reforma não apenas reduz custos em comparação à fabricação de um novo tanque, mas também melhora a eficiência no transporte, proporcionando maior segurança e economia no longo prazo. Invista em uma solução confiável, econômica e de alto padrão.
                            </p>
                            <div className="bg-brand-blue-light/10 p-6 rounded-xl border border-brand-blue-light/20 mt-8">
                                <p className="text-brand-blue-dark font-bold text-center text-xl">
                                    CAPACIDADE DE ATENDIMENTO: Tanques com variação de 10.000 a 200.000 litros.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRODUTOS (TANQUES) */}
            <section className="py-24 bg-brand-off-white relative overflow-hidden">
                <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <span className="text-brand-orange font-bold tracking-widest text-sm uppercase">Linha de Produtos</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-brand-blue-dark mt-3">Modelos de Tanques</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {productModels.map((model, idx) => (
                                <div key={idx} className="group flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative mt-24 mb-4 border border-gray-100 transform hover:-translate-y-1">
                                    <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-40 h-40 rounded-full border-8 border-white shadow-xl overflow-hidden bg-white z-10 transition-transform duration-500 group-hover:scale-105">
                                        <img src={model.image} alt={model.name} className="w-full h-full object-cover" loading="lazy" />
                                    </div>
                                    <div className="p-6 pt-24 flex-grow flex flex-col">
                                        <div className="text-center mb-4">
                                            <h3 className="text-lg font-bold text-brand-blue-dark tracking-wide uppercase">{model.name}</h3>
                                        </div>
                                        <p className="text-gray-600 text-xs leading-relaxed mb-6 flex-grow text-center">{model.desc}</p>
                                        <div className="mt-auto pt-4 border-t border-gray-100 space-y-2">
                                            {model.specs.map((spec, i) => (
                                                <div key={i} className="flex items-center text-xs text-gray-500 font-medium">
                                                    <CheckCircle size={14} className="text-brand-orange mr-2 flex-shrink-0" />
                                                    <span>{spec}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVIÇOS ESPECIALIZADOS */}
            <section className="py-24 bg-brand-blue-dark text-white relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

                <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <span className="text-brand-orange font-bold tracking-widest text-sm uppercase">Soluções Completas</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">Nossos Serviços</h2>
                            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Inspeção, manutenção e auditoria com tecnologia de ponta e equipe certificada.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, idx) => (
                                <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                                    <div className="flex items-center mb-6">
                                        <div className="p-3 bg-brand-orange/20 rounded-lg text-brand-orange mr-4 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                                    </div>
                                    
                                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-xs font-bold text-brand-orange uppercase tracking-wider mb-2">Benefícios</h4>
                                            <ul className="grid grid-cols-1 gap-1">
                                                {service.benefits.slice(0, 4).map((benefit, i) => (
                                                    <li key={i} className="flex items-start text-xs text-gray-400">
                                                        <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div className="pt-4 border-t border-white/10">
                                            <p className="text-xs text-gray-500">
                                                <span className="font-bold text-gray-400">Doc. Requerida:</span> {service.docs}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* DADOS TÉCNICOS (PRODUTOS) */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-16 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-4">ESPECIFICAÇÕES DE FABRICAÇÃO</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Garantia de qualidade e conformidade normativa para novos tanques.</p>
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
                                <span className="uppercase tracking-wide text-sm">Consultar Tabelas Técnicas</span>
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

export default TanqueCombustivelProductPage;
