
import React from 'react';
import SteelCalculator from '../components/features/calculator/SteelCalculator';
import UnitConverter from '../components/features/calculator/UnitConverter';
import LinearNesting from '../components/features/calculator/LinearNesting';
import WeldingCalculator from '../components/features/calculator/WeldingCalculator';
import { useTranslation } from 'react-i18next';
import { Calculator, ArrowLeftRight, Scissors, Flame, Settings, Box } from 'lucide-react';
import { EngineeringProvider, useEngineering, TabType } from '../context/EngineeringContext';

// Componente Interno para consumir o contexto
const CalculatorPageContent: React.FC = () => {
    const { t } = useTranslation();
    const { activeTab, setActiveTab } = useEngineering();

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

    return (
        <div className="bg-[#0b1121] min-h-screen relative overflow-x-hidden text-slate-200 font-sans selection:bg-brand-orange selection:text-white">
            
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
            
            {/* Container Principal - Full Width com Margens Inteligentes */}
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
                
                {/* Header da Workstation */}
                <header className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-brand-blue-dark border border-white/10 rounded-xl shadow-2xl shadow-brand-blue-light/5">
                            <Box size={24} className="text-brand-orange" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-white tracking-tight">
                                {t('calculatorPage.title')}
                            </h1>
                            <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold mt-1">
                                Engineering Workstation v4.2
                            </p>
                        </div>
                    </div>

                    {/* Barra de Ferramentas (Tabs) */}
                    <div className="flex overflow-x-auto pb-2 lg:pb-0 gap-2 no-scrollbar">
                        {tabs.map(tab => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as TabType)}
                                    className={`
                                        relative group flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-300 min-w-max
                                        ${isActive 
                                            ? 'bg-brand-blue-light/10 border-brand-orange/50 shadow-[0_0_20px_rgba(234,97,0,0.15)]' 
                                            : 'bg-[#1e293b]/50 border-white/5 hover:bg-[#1e293b] hover:border-white/10'
                                        }
                                    `}
                                >
                                    <div className={`transition-colors duration-300 ${isActive ? 'text-brand-orange' : 'text-slate-400 group-hover:text-white'}`}>
                                        {tab.icon}
                                    </div>
                                    <div className="text-left">
                                        <span className={`block text-xs font-bold uppercase tracking-wide ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
                                            {tab.label}
                                        </span>
                                        <span className="block text-[10px] text-slate-500 font-medium">
                                            {tab.desc}
                                        </span>
                                    </div>
                                    {isActive && (
                                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-orange rounded-b-xl shadow-[0_-2px_10px_rgba(234,97,0,0.5)]"></div>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </header>

                {/* Área de Conteúdo */}
                <main className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                    {renderContent()}
                </main>
            </div>
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
