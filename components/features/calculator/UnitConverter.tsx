
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeftRight, Ruler, Weight, Box, Gauge } from 'lucide-react';

type Category = 'length' | 'weight' | 'area' | 'pressure';

const UnitConverter: React.FC = () => {
    const { t } = useTranslation();
    const [category, setCategory] = useState<Category>('length');
    const [amount, setAmount] = useState<number>(1);
    const [fromUnit, setFromUnit] = useState<string>('mm');
    const [toUnit, setToUnit] = useState<string>('in');

    const factors: Record<Category, Record<string, number>> = {
        length: { mm: 1, cm: 10, m: 1000, in: 25.4, ft: 304.8 },
        weight: { kg: 1, lb: 0.453592, ton: 1000 },
        area: { m2: 1, cm2: 0.0001, ft2: 0.092903, in2: 0.00064516 },
        pressure: { bar: 1, psi: 0.0689476, mpa: 10, kgfcm2: 0.980665 }
    };

    const icons = {
        length: <Ruler size={16} />,
        weight: <Weight size={16} />,
        area: <Box size={16} />,
        pressure: <Gauge size={16} />
    };

    const calculateResult = () => {
        const baseValue = amount * factors[category][fromUnit];
        return baseValue / factors[category][toUnit];
    };

    const handleCategoryChange = (cat: Category) => {
        setCategory(cat);
        const keys = Object.keys(factors[cat]);
        setFromUnit(keys[0]);
        setToUnit(keys[1] || keys[0]);
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
            <div className="grid grid-cols-4 gap-2 mb-6">
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
                        <span>{t(`calculatorPage.converter.categories.${cat}`)}</span>
                    </button>
                ))}
            </div>

            {/* Converter Form */}
            <div className="flex flex-col md:flex-row gap-4 items-end">
                
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
                            className="w-1/2 bg-[#1e293b] border border-white/10 rounded-lg p-2 text-white font-mono text-sm outline-none h-10"
                        />
                        <select 
                            value={fromUnit} 
                            onChange={(e) => setFromUnit(e.target.value)}
                            className="w-1/2 bg-[#1e293b] border border-white/10 rounded-lg p-2 text-white text-xs outline-none h-10"
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
                    className="p-2 mb-0.5 rounded-full bg-white/5 text-brand-orange hover:bg-brand-orange hover:text-white transition-all shadow-md flex-shrink-0"
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
                            className="w-1/2 bg-[#1e293b] border border-white/10 rounded-lg p-2 text-white text-xs outline-none h-10"
                        >
                            {Object.keys(factors[category]).map((unit) => (
                                <option key={unit} value={unit}>{t(`calculatorPage.converter.units.${unit}`)}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            
            <div className="mt-4 pt-3 border-t border-white/5 text-center">
                 <p className="text-[10px] text-gray-500 font-mono">
                    1 {fromUnit} ≈ {(factors[category][fromUnit] / factors[category][toUnit]).toExponential(2)} {toUnit}
                </p>
            </div>
        </div>
    );
};

export default UnitConverter;
