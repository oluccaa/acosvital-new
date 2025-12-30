import React from 'react';
import SteelCalculator from '../components/features/calculator/SteelCalculator';
import UnitConverter from '../components/features/calculator/UnitConverter';
import LinearNesting from '../components/features/calculator/LinearNesting';
import WeldingCalculator from '../components/features/calculator/WeldingCalculator';
import { useTranslation } from 'react-i18next';
import { Calculator, ArrowLeftRight, Scissors, Flame, Info } from 'lucide-react';
import { EngineeringProvider, useEngineering, TabType } from '../context/EngineeringContext';

// Componente Interno para consumir o contexto
const CalculatorPageContent: React.FC = () => {
    const { t } = useTranslation();
    const { activeTab, setActiveTab } = useEngineering();

    const tabs = [
        { id: 'calculator', label: t('calculatorPage.tabs.calculator'), icon: <Calculator size={18} /> },
        { id: 'nesting', label: t('calculatorPage.tabs.nesting'), icon: <Scissors size={18} /> },
        { id: 'welding', label: t('calculatorPage.tabs.welding'), icon: <Flame size={18} /> },
        { id: 'converter', label: t('calculatorPage.tabs.converter'), icon: <ArrowLeftRight size={18} /> },
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

    const activeDescription = t(`calculatorPage.toolDescriptions.${activeTab}` as any);

    return (
        <div className="bg-brand-midnight min-h-screen relative overflow-hidden">
            
            {/* Background Grid */}
            <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ 
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            ></div>
            
            {/* Radial Glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-blue-dark/50 to-brand-midnight pointer-events-none"></div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-24 pt-32 pb-24 relative z-10">
                <header className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange font-mono text-xs tracking-widest uppercase backdrop-blur-md">
                        <Calculator size={12} /> Engineering Tools v4.1
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        {t('calculatorPage.title')}
                    </h1>
                    <p className="text-blue-200/60 text-base md:text-lg max-w-2xl mx-auto">
                        {t('calculatorPage.subtitle')}
                    </p>
                </header>

                {/* Tool Switcher / Tabs */}
                <div className="flex flex-col items-center mb-12">
                    <div className="bg-[#0f172a] p-1.5 rounded-2xl border border-white/10 inline-flex shadow-xl relative z-20 whitespace-nowrap overflow-x-auto max-w-full scrollbar-hide">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as TabType)}
                                className={`
                                    flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wide transition-all duration-300
                                    ${activeTab === tab.id 
                                        ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20 scale-105' 
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }
                                `}
                            >
                                {tab.icon}
                                <span className="hidden sm:inline">{tab.label}</span>
                            </button>
                        ))}
                    </div>
                    
                    {/* Contextual Description */}
                    <div className="mt-6 max-w-3xl text-center px-4 animate-in fade-in slide-in-from-top-2 duration-300" key={activeTab}>
                        <div className="inline-flex items-center gap-2 text-brand-blue-light text-xs font-bold uppercase tracking-widest mb-2">
                            <Info size={14} /> Sobre esta ferramenta
                        </div>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                            {activeDescription}
                        </p>
                    </div>
                </div>

                {/* Tab Content with Transition */}
                <div className="transition-all duration-500 ease-in-out min-h-[600px]">
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" key={activeTab}>
                        {renderContent()}
                    </div>
                </div>
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