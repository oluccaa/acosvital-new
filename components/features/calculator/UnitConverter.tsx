
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

    // Conversion Factors relative to a base unit (Length: mm, Weight: kg, Area: m², Pressure: bar)
    const factors: Record<Category, Record<string, number>> = {
        length: {
            mm: 1,
            cm: 10,
            m: 1000,
            in: 25.4,
            ft: 304.8
        },
        weight: {
            kg: 1,
            lb: 0.453592,
            ton: 1000
        },
        area: {
            m2: 1,
            cm2: 0.0001,
            ft2: 0.092903,
            in2: 0.00064516
        },
        pressure: {
            bar: 1,
            psi: 0.0689476,
            mpa: 10,
            kgfcm2: 0.980665
        }
    };

    // Icons map
    const icons = {
        length: <Ruler size={18} />,
        weight: <Weight size={18} />,
        area: <Box size={18} />,
        pressure: <Gauge size={18} />
    };

    // Calculate Result
    const calculateResult = () => {
        const baseValue = amount * factors[category][fromUnit];
        const result = baseValue / factors[category][toUnit];
        return result;
    };

    // Handle Category Change
    const handleCategoryChange = (cat: Category) => {
        setCategory(cat);
        // Set defaults for new category
        const keys = Object.keys(factors[cat]);
        setFromUnit(keys[0]);
        setToUnit(keys[1] || keys[0]);
    };

    // Swap Units
    const handleSwap = () => {
        setFromUnit(toUnit);
        setToUnit(fromUnit);
    };

    const result = calculateResult();

    return (
        <div className="max-w-4xl mx-auto bg-[#0f172a] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl">
            <h3 className="text-white/80 font-bold mb-8 text-center text-lg uppercase tracking-widest">
                {t('calculatorPage.converter.title')}
            </h3>

            {/* Category Selector */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {(Object.keys(factors) as Category[]).map((cat) => (
                    <button
                        key={cat}
                        onClick={() => handleCategoryChange(cat)}
                        className={`
                            flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 uppercase tracking-wide
                            ${category === cat 
                                ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20 transform scale-105' 
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                            }
                        `}
                    >
                        {icons[cat]}
                        {t(`calculatorPage.converter.categories.${cat}`)}
                    </button>
                ))}
            </div>

            {/* Converter Form */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-6 items-end">
                
                {/* FROM Section */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-xs text-brand-blue-light uppercase font-bold mb-2">
                            {t('calculatorPage.converter.labels.value')}
                        </label>
                        <input 
                            type="number" 
                            value={amount} 
                            onChange={(e) => setAmount(parseFloat(e.target.value) || 0)} 
                            className="w-full bg-[#1e293b] border border-white/10 rounded-xl p-4 text-white font-mono text-lg focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-xs text-gray-500 uppercase font-bold mb-2">
                            {t('calculatorPage.converter.labels.from')}
                        </label>
                        <select 
                            value={fromUnit} 
                            onChange={(e) => setFromUnit(e.target.value)}
                            className="w-full bg-[#1e293b] border border-white/10 rounded-xl p-4 text-white cursor-pointer hover:bg-[#243248] transition-colors outline-none appearance-none"
                        >
                            {Object.keys(factors[category]).map((unit) => (
                                <option key={unit} value={unit}>
                                    {t(`calculatorPage.converter.units.${unit}`)}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Swap Button */}
                <div className="flex justify-center md:pb-4">
                    <button 
                        onClick={handleSwap}
                        className="p-3 rounded-full bg-white/5 text-brand-orange hover:bg-brand-orange hover:text-white transition-all duration-300 transform hover:rotate-180 shadow-lg"
                        aria-label="Swap units"
                    >
                        <ArrowLeftRight size={24} />
                    </button>
                </div>

                {/* TO Section */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-xs text-brand-blue-light uppercase font-bold mb-2">
                            {t('calculatorPage.converter.labels.result')}
                        </label>
                        <div className="w-full bg-brand-blue-dark/50 border border-brand-blue-light/20 rounded-xl p-4 text-brand-orange font-mono text-xl font-bold flex items-center overflow-hidden">
                            {result.toLocaleString(undefined, { maximumFractionDigits: 4 })}
                        </div>
                    </div>
                    <div>
                         <label className="block text-xs text-gray-500 uppercase font-bold mb-2">
                            {t('calculatorPage.converter.labels.to')}
                        </label>
                        <select 
                            value={toUnit} 
                            onChange={(e) => setToUnit(e.target.value)}
                            className="w-full bg-[#1e293b] border border-white/10 rounded-xl p-4 text-white cursor-pointer hover:bg-[#243248] transition-colors outline-none appearance-none"
                        >
                            {Object.keys(factors[category]).map((unit) => (
                                <option key={unit} value={unit}>
                                    {t(`calculatorPage.converter.units.${unit}`)}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Formula Display (Simple) */}
            <div className="mt-10 text-center">
                <p className="text-xs text-gray-500 font-mono">
                    1 {t(`calculatorPage.converter.units.${fromUnit}`)} = {(factors[category][fromUnit] / factors[category][toUnit]).toExponential(4)} {t(`calculatorPage.converter.units.${toUnit}`)}
                </p>
            </div>
        </div>
    );
};

export default UnitConverter;
