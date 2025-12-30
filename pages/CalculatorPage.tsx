
import React, { useState, useRef, useEffect } from 'react';
import SteelCalculator from '../components/features/calculator/SteelCalculator';
import UnitConverter from '../components/features/calculator/UnitConverter';
import LinearNesting from '../components/features/calculator/LinearNesting';
import WeldingCalculator from '../components/features/calculator/WeldingCalculator';
import { useTranslation } from 'react-i18next';
import { Calculator, ArrowLeftRight, Scissors, Flame, Box, Maximize2, Minimize2 } from 'lucide-react';
import { EngineeringProvider, useEngineering, TabType } from '../context/EngineeringContext';
import { ASSETS } from '../lib/media';

// Helper para gerar link do WhatsApp
const getWhatsappLink = (productName: string) => {
    const phone = "551147972352"; // Número da Aços Vital
    const text = encodeURIComponent(`Olá! Vi o anúncio de *${productName}* na página da Calculadora e gostaria de uma cotação.`);
    return `https://wa.me/${phone}?text=${text}`;
};

// --- ADVERTISING SIDEBAR COMPONENT (BILLBOARD STYLE) ---
const AdSidebar: React.FC<{ side: 'left' | 'right' }> = ({ side }) => {
    // Using Featured Images for a "Billboard" look (Full photography)
    // Redirecionando para o WhatsApp
    const ads = side === 'left' ? [
        { img: ASSETS.HOME_FEATURED.TUBOS, link: getWhatsappLink("Tubos Industriais") },
        { img: ASSETS.HOME_FEATURED.VALVULAS, link: getWhatsappLink("Válvulas Industriais") }
    ] : [
        { img: ASSETS.HOME_FEATURED.FLANGE, link: getWhatsappLink("Flanges") },
        { img: ASSETS.HOME_FEATURED.CONEXOES, link: getWhatsappLink("Conexões") }
    ];

    return (
        <div className={`hidden 2xl:flex flex-col gap-4 w-72 h-full p-4 bg-[#081437] border-${side === 'left' ? 'r' : 'l'} border-white/5`}>
            {ads.map((ad, idx) => (
                <a 
                    key={idx} 
                    href={ad.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex-1 rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all hover:border-brand-orange/50 cursor-pointer"
                >
                    {/* Dark Gradient Overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity z-10 duration-500"></div>
                    
                    {/* Billboard Image */}
                    <img 
                        src={ad.img} 
                        alt="Anúncio Aços Vital" 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out" 
                    />
                    
                    {/* Subtle Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20 bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
                    
                    {/* WhatsApp Icon Overlay (Optional hint) */}
                    <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-[#25D366] p-2 rounded-full shadow-lg">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
};

// --- MAIN CONTENT COMPONENT ---
const CalculatorPageContent: React.FC = () => {
    const { t } = useTranslation();
    const { activeTab, setActiveTab } = useEngineering();
    const [isFullScreen, setIsFullScreen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const tabs = [
        { id: 'calculator', label: t('calculatorPage.tabs.calculator'), icon: <Calculator size={18} />, desc: "Cálculo de Peso Teórico" },
        { id: 'nesting', label: t('calculatorPage.tabs.nesting'), icon: <Scissors size={18} />, desc: "Otimização de Corte" },
        { id: 'welding', label: t('calculatorPage.tabs.welding'), icon: <Flame size={18} />, desc: "Consumíveis de Solda" },
        { id: 'converter', label: t('calculatorPage.tabs.converter'), icon: <ArrowLeftRight size={18} />, desc: "Conversor Universal" },
    ];

    const renderContent = () => {
        switch(activeTab) {
            case 'calculator': return <SteelCalculator />;
            case 'nesting': return <LinearNesting />;
            case 'welding': return <WeldingCalculator />;
            case 'converter': return <UnitConverter />;
            default: return <SteelCalculator />;
        }
    };

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        } else {
            document.exitFullscreen();
        }
    };

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullScreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    return (
        <div 
            ref={containerRef}
            className={`
                bg-[#0b1121] text-slate-200 font-sans selection:bg-brand-orange selection:text-white flex overflow-hidden
                ${isFullScreen ? 'fixed inset-0 z-50 h-screen w-screen' : 'min-h-screen relative'}
            `}
        >
            
            {/* Background Grid - High Tech Feel */}
            <div 
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ 
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            ></div>

            {/* Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-blue-light/10 rounded-full blur-[120px] pointer-events-none"></div>
            
            {/* LEFT AD BANNER (Visible on Ultra Wide Screens) */}
            <AdSidebar side="left" />

            {/* CENTER CONTENT */}
            <div className="flex-1 flex flex-col h-full overflow-hidden relative z-10">
                
                {/* Scrollable Container */}
                <div className="flex-1 overflow-y-auto custom-scrollbar px-4 sm:px-6 lg:px-8 py-6">
                    <div className="w-full max-w-[1600px] mx-auto flex flex-col min-h-full">
                        
                        {/* Header da Workstation */}
                        <header className="flex flex-col xl:flex-row xl:items-end justify-between mb-8 gap-6 bg-[#0b1121]/80 backdrop-blur-sm sticky top-0 z-20 py-4 border-b border-white/5">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-brand-blue-dark border border-white/10 rounded-xl shadow-2xl shadow-brand-blue-light/5 hidden sm:block">
                                    <Box size={32} className="text-brand-orange" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3">
                                        <h1 className="text-xl md:text-3xl font-bold text-white tracking-tight uppercase">
                                            {t('calculatorPage.title')}
                                        </h1>
                                        <button 
                                            onClick={toggleFullScreen}
                                            className="p-2 bg-white/5 hover:bg-brand-orange hover:text-white rounded-lg transition-colors border border-white/10"
                                            title={isFullScreen ? "Sair da Tela Cheia" : "Tela Cheia"}
                                        >
                                            {isFullScreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                                        </button>
                                    </div>
                                    <p className="text-slate-400 text-[10px] md:text-sm uppercase tracking-widest font-semibold mt-1">
                                        {t('calculatorPage.subtitle')}
                                    </p>
                                </div>
                            </div>

                            {/* Barra de Ferramentas (Tabs) */}
                            <div className="w-full xl:w-auto grid grid-cols-2 md:grid-cols-4 gap-2">
                                {tabs.map(tab => {
                                    const isActive = activeTab === tab.id;
                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id as TabType)}
                                            className={`
                                                relative group flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 px-3 py-2.5 rounded-lg border transition-all duration-300 w-full
                                                ${isActive 
                                                    ? 'bg-brand-blue-light/10 border-brand-orange shadow-[0_0_15px_rgba(234,97,0,0.2)]' 
                                                    : 'bg-[#1e293b]/50 border-white/5 hover:bg-[#1e293b] hover:border-white/10'
                                                }
                                            `}
                                        >
                                            <div className={`mt-0.5 transition-colors duration-300 ${isActive ? 'text-brand-orange' : 'text-slate-400 group-hover:text-white'}`}>
                                                {React.cloneElement(tab.icon as React.ReactElement<{ size: number }>, { size: 18 })}
                                            </div>
                                            <div className="text-center sm:text-left overflow-hidden">
                                                <span className={`block text-[10px] sm:text-xs font-bold uppercase tracking-wide truncate ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
                                                    {tab.label}
                                                </span>
                                                <span className="hidden sm:block text-[9px] text-slate-500 font-medium truncate max-w-[100px]">
                                                    {tab.desc}
                                                </span>
                                            </div>
                                            {isActive && (
                                                <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-brand-orange rounded-full m-1.5 animate-pulse"></div>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </header>

                        {/* Área de Conteúdo Principal */}
                        <main className="animate-in fade-in slide-in-from-bottom-4 duration-700 flex-grow">
                            {renderContent()}
                        </main>

                        {/* MOBILE AD BANNER (Visible only when sidebars are hidden) */}
                        <div className="2xl:hidden mt-8 mb-4">
                             <a 
                                href={getWhatsappLink("Soluções de Caldeiraria e Industrial")} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block relative h-40 w-full rounded-xl overflow-hidden border border-white/10 shadow-lg group"
                             >
                                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/20 opacity-60 z-10"></div>
                                <img
                                    src={ASSETS.HOME_FEATURED.CALDEIRARIA}
                                    alt="Soluções Industriais"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* Optional: A subtle visual cue it's clickable */}
                                <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/10 transition-colors z-20 flex items-center justify-center">
                                    <div className="bg-[#25D366]/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                        </svg>
                                    </div>
                                </div>
                             </a>
                        </div>

                    </div>
                </div>
            </div>

            {/* RIGHT AD BANNER (Visible on Ultra Wide Screens) */}
            <AdSidebar side="right" />

        </div>
    );
};

// Wrapper Principal
const CalculatorPage: React.FC = () => {
    return (
        <EngineeringProvider>
            <CalculatorPageContent />
        </EngineeringProvider>
    );
};

export default CalculatorPage;
