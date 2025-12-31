
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeftRight, Ruler, Weight, Box, Gauge, CircleDashed, Info } from 'lucide-react';

type Category = 'length' | 'weight' | 'area' | 'pressure' | 'dn';

// Dados de Tabela de Tubos (NPS -> DN -> OD)
// Baseado em ASME B36.10
const PIPE_DATA = [
    { nps: "1/8", dn: 6, od: 10.3 },
    { nps: "1/4", dn: 8, od: 13.7 },
    { nps: "3/8", dn: 10, od: 17.1 },
    { nps: "1/2", dn: 15, od: 21.3 },
    { nps: "3/4", dn: 20, od: 26.7 },
    { nps: "1", dn: 25, od: 33.4 },
    { nps: "1.1/4", dn: 32, od: 42.2 },
    { nps: "1.1/2", dn: 40, od: 48.3 },
    { nps: "2", dn: 50, od: 60.3 },
    { nps: "2.1/2", dn: 65, od: 73.0 },
    { nps: "3", dn: 80, od: 88.9 },
    { nps: "3.1/2", dn: 90, od: 101.6 },
    { nps: "4", dn: 100, od: 114.3 },
    { nps: "5", dn: 125, od: 141.3 },
    { nps: "6", dn: 150, od: 168.3 },
    { nps: "8", dn: 200, od: 219.1 },
    { nps: "10", dn: 250, od: 273.0 },
    { nps: "12", dn: 300, od: 323.8 },
    { nps: "14", dn: 350, od: 355.6 },
    { nps: "16", dn: 400, od: 406.4 },
    { nps: "18", dn: 450, od: 457.0 },
    { nps: "20", dn: 500, od: 508.0 },
    { nps: "24", dn: 600, od: 610.0 },
];

const UnitConverter: React.FC = () => {
    const { t } = useTranslation();
    const [category, setCategory] = useState<Category>('length');
    
    // Estados para conversão padrão
    const [amount, setAmount] = useState<number>(1);
    const [fromUnit, setFromUnit] = useState<string>('mm');
    const [toUnit, setToUnit] = useState<string>('in');

    // Estado para conversão DN
    const [selectedPipeIndex, setSelectedPipeIndex] = useState<number>(5); // Default 1"

    const factors: Record<Category, Record<string, number>> = {
        length: { mm: 1, cm: 10, m: 1000, in: 25.4, ft: 304.8 },
        weight: { kg: 1, lb: 0.453592, ton: 1000 },
        area: { m2: 1, cm2: 0.0001, ft2: 0.092903, in2: 0.00064516 },
        pressure: { bar: 1, psi: 0.0689476, mpa: 10, kgfcm2: 0.980665 },
        dn: { 'in': 1, 'mm': 1 } // Não usado na nova lógica de UI
    };

    const icons = {
        length: <Ruler size={16} />,
        weight: <Weight size={16} />,
        area: <Box size={16} />,
        pressure: <Gauge size={16} />,
        dn: <CircleDashed size={16} />
    };

    const calculateResult = () => {
        if (category === 'dn') return 0; // Lógica separada
        const baseValue = amount * factors[category][fromUnit];
        return baseValue / factors[category][toUnit];
    };

    const handleCategoryChange = (cat: Category) => {
        setCategory(cat);
        if (cat !== 'dn') {
            const keys = Object.keys(factors[cat]);
            setFromUnit(keys[0]);
            setToUnit(keys[1] || keys[0]);
        }
    };

    const handleSwap = () => {
        setFromUnit(toUnit);
        setToUnit(fromUnit);
    };

    const result = calculateResult();

    return (
        <div className="max-w-2xl mx-auto bg-[#0f172a] border border-white/10 rounded-xl p-5 shadow-xl">
            <h3 className="text-white/80 font-bold mb-4 text-center text-sm uppercase tracking-widest border-b border-white/5 pb-2">
                {t('calculatorPage.converter.title')}
            </h3>

            {/* Category Selector Compacto */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-6">
                {(Object.keys(factors) as Category[]).map((cat) => (
                    <button
                        key={cat}
                        onClick={() => handleCategoryChange(cat)}
                        className={`
                            flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-lg font-bold text-[10px] transition-all duration-200 uppercase
                            ${category === cat 
                                ? 'bg-brand-orange text-white shadow-md' 
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                            }
                        `}
                    >
                        {icons[cat]}
                        <span className="truncate w-full text-center">{t(`calculatorPage.converter.categories.${cat}`)}</span>
                    </button>
                ))}
            </div>

            {/* Renderização Condicional: Lógica Especial para DN vs Padrão */}
            {category === 'dn' ? (
                // --- LÓGICA DE DN (PIPE TABLE) ---
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="bg-brand-blue-dark/50 border border-white/10 rounded-xl p-4 mb-4">
                        <div className="flex items-center gap-2 mb-4 text-brand-blue-light">
                            <Info size={16} />
                            <span className="text-xs font-bold uppercase tracking-wider">Tabela de Tubos (ANSI B36.10)</span>
                        </div>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-[10px] text-gray-400 uppercase font-bold mb-2">
                                    Selecione a Bitola (Nominal)
                                </label>
                                <select 
                                    value={selectedPipeIndex} 
                                    onChange={(e) => setSelectedPipeIndex(Number(e.target.value))}
                                    className="w-full bg-[#1e293b] border border-white/10 rounded-lg p-3 text-white text-sm outline-none focus:border-brand-orange transition-colors cursor-pointer"
                                >
                                    {PIPE_DATA.map((pipe, index) => (
                                        <option key={index} value={index}>
                                            {pipe.nps}" (Pol)  /  DN {pipe.dn}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-2">
                                <div className="bg-[#0b1121] p-3 rounded-lg border border-white/5 flex flex-col items-center justify-center">
                                    <span className="text-[10px] text-gray-500 uppercase font-bold">Diâmetro Nominal</span>
                                    <div className="text-xl font-bold text-white mt-1">DN {PIPE_DATA[selectedPipeIndex].dn}</div>
                                    <span className="text-[10px] text-gray-600">{PIPE_DATA[selectedPipeIndex].nps} pol</span>
                                </div>
                                
                                <div className="bg-brand-orange/10 p-3 rounded-lg border border-brand-orange/30 flex flex-col items-center justify-center relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-8 h-8 bg-brand-orange/20 rounded-bl-full"></div>
                                    <span className="text-[10px] text-brand-orange uppercase font-bold">Diâmetro Externo (Real)</span>
                                    <div className="text-2xl font-mono font-bold text-white mt-1">{PIPE_DATA[selectedPipeIndex].od} <span className="text-sm">mm</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-[10px] text-center text-gray-500">
                        * O Diâmetro Nominal (DN/NPS) não corresponde à medida real em mm. Use o <strong>Diâmetro Externo</strong> para cálculos de furação e encaixe.
                    </p>
                </div>
            ) : (
                // --- LÓGICA PADRÃO DE CONVERSÃO ---
                <>
                    <div className="flex flex-col md:flex-row gap-4 items-end animate-in fade-in slide-in-from-bottom-2 duration-300">
                        
                        {/* FROM Section */}
                        <div className="flex-1 w-full space-y-2">
                            <label className="block text-[10px] text-gray-400 uppercase font-bold">
                                {t('calculatorPage.converter.labels.value')} & {t('calculatorPage.converter.labels.from')}
                            </label>
                            <div className="flex gap-2">
                                <input 
                                    type="number" 
                                    value={amount} 
                                    onChange={(e) => setAmount(parseFloat(e.target.value) || 0)} 
                                    className="w-1/2 bg-[#1e293b] border border-white/10 rounded-lg p-2 text-white font-mono text-sm outline-none h-10 focus:border-brand-orange transition-colors"
                                />
                                <select 
                                    value={fromUnit} 
                                    onChange={(e) => setFromUnit(e.target.value)}
                                    className="w-1/2 bg-[#1e293b] border border-white/10 rounded-lg p-2 text-white text-xs outline-none h-10 cursor-pointer"
                                >
                                    {Object.keys(factors[category]).map((unit) => (
                                        <option key={unit} value={unit}>{t(`calculatorPage.converter.units.${unit}`)}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Swap Button */}
                        <button 
                            onClick={handleSwap}
                            className="p-2 mb-0.5 rounded-full bg-white/5 text-brand-orange hover:bg-brand-orange hover:text-white transition-all shadow-md flex-shrink-0 self-center md:self-end rotate-90 md:rotate-0 border border-white/5 active:scale-95"
                            title="Inverter Unidades"
                        >
                            <ArrowLeftRight size={16} />
                        </button>

                        {/* TO Section */}
                        <div className="flex-1 w-full space-y-2">
                            <label className="block text-[10px] text-brand-blue-light uppercase font-bold">
                                {t('calculatorPage.converter.labels.result')} & {t('calculatorPage.converter.labels.to')}
                            </label>
                            <div className="flex gap-2">
                                <div className="w-1/2 bg-brand-blue-dark/50 border border-brand-blue-light/20 rounded-lg p-2 text-brand-orange font-mono text-sm font-bold flex items-center h-10 overflow-hidden">
                                    {result.toLocaleString(undefined, { maximumFractionDigits: 4 })}
                                </div>
                                <select 
                                    value={toUnit} 
                                    onChange={(e) => setToUnit(e.target.value)}
                                    className="w-1/2 bg-[#1e293b] border border-white/10 rounded-lg p-2 text-white text-xs outline-none h-10 cursor-pointer"
                                >
                                    {Object.keys(factors[category]).map((unit) => (
                                        <option key={unit} value={unit}>{t(`calculatorPage.converter.units.${unit}`)}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6 pt-3 border-t border-white/5 text-center">
                         <p className="text-[10px] text-gray-500 font-mono">
                            <span>1 {fromUnit} ≈ {(factors[category][fromUnit] / factors[category][toUnit]).toExponential(2)} {toUnit}</span>
                        </p>
                    </div>
                </>
            )}
        </div>
    );
};

export default UnitConverter;
