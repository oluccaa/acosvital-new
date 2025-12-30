
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FoldVertical, Settings, Info, BookOpen, CornerUpRight, Sigma } from 'lucide-react';

const BendingCalculator: React.FC = () => {
    const { t } = useTranslation();
    const [thickness, setThickness] = useState('3.0');
    const [radius, setRadius] = useState('3.0');
    const [angle, setAngle] = useState('90');
    const [kFactor, setKFactor] = useState('0.33');
    const [leg1, setLeg1] = useState('50');
    const [leg2, setLeg2] = useState('50');
    const [results, setResults] = useState({ bendAllowance: 0, bendDeduction: 0, flatLength: 0, setback: 0 });

    useEffect(() => {
        const T = parseFloat(thickness) || 0;
        const R = parseFloat(radius) || 0;
        const A = parseFloat(angle) || 0;
        const K = parseFloat(kFactor) || 0;
        const L1 = parseFloat(leg1) || 0;
        const L2 = parseFloat(leg2) || 0;

        if (T > 0 && A > 0) {
            const rad = (A * Math.PI) / 180;
            const BA = rad * (R + (K * T));
            const OSSB = Math.tan(rad / 2) * (R + T);
            const BD = (2 * OSSB) - BA;
            const Flat = L1 + L2 - BD;
            setResults({ bendAllowance: BA, bendDeduction: BD, flatLength: Flat, setback: OSSB });
        }
    }, [thickness, radius, angle, kFactor, leg1, leg2]);

    const inputClass = "w-full bg-[#1e293b] border border-white/10 rounded p-1.5 text-white text-xs outline-none focus:border-brand-orange h-8";
    const labelClass = "block text-[9px] text-gray-400 uppercase font-bold mb-0.5";

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 animate-in fade-in zoom-in-95 duration-500">
            {/* Inputs */}
            <div className="lg:col-span-5 space-y-4">
                <div className="bg-[#0f172a] border border-white/10 rounded-xl p-4 shadow-xl">
                    <h3 className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                        <Settings size={14} className="text-brand-blue-light" /> {t('calculatorPage.bending.params')}
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                        <div><label className={labelClass}>{t('calculatorPage.bending.inputs.thickness')}</label><input type="number" value={thickness} onChange={e => setThickness(e.target.value)} className={inputClass} /></div>
                        <div><label className={labelClass}>{t('calculatorPage.bending.inputs.radius')}</label><input type="number" value={radius} onChange={e => setRadius(e.target.value)} className={inputClass} /></div>
                        <div><label className={labelClass}>{t('calculatorPage.bending.inputs.angle')}</label><input type="number" value={angle} onChange={e => setAngle(e.target.value)} className={inputClass} /></div>
                        <div><label className={labelClass}>{t('calculatorPage.bending.inputs.kFactor')}</label><input type="number" step="0.01" value={kFactor} onChange={e => setKFactor(e.target.value)} className={inputClass} /></div>
                        <div><label className={labelClass}>{t('calculatorPage.bending.inputs.leg1')}</label><input type="number" value={leg1} onChange={e => setLeg1(e.target.value)} className={inputClass} /></div>
                        <div><label className={labelClass}>{t('calculatorPage.bending.inputs.leg2')}</label><input type="number" value={leg2} onChange={e => setLeg2(e.target.value)} className={inputClass} /></div>
                    </div>
                </div>
            </div>

            {/* Resultados */}
            <div className="lg:col-span-7 space-y-4">
                <div className="bg-brand-blue-dark rounded-xl p-4 border border-brand-blue-light/20 shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-2xl -mr-8 -mt-8 pointer-events-none"></div>
                    
                    <h3 className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 mb-2 z-10">
                        <FoldVertical size={14} className="text-brand-orange" /> {t('calculatorPage.bending.blankSize')}
                    </h3>
                    
                    <div className="text-4xl font-mono font-bold text-white mb-4 tracking-tighter">
                        {results.flatLength.toFixed(2)} <span className="text-sm text-white/40 font-sans">mm</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-3">
                        <div className="space-y-0.5">
                            <span className="text-[9px] text-gray-400 uppercase font-bold">{t('calculatorPage.bending.outputs.deduction')}</span>
                            <span className="text-lg font-mono font-bold text-red-400">-{results.bendDeduction.toFixed(2)} mm</span>
                        </div>
                        <div className="space-y-0.5">
                            <span className="text-[9px] text-gray-400 uppercase font-bold">{t('calculatorPage.bending.outputs.allowance')}</span>
                            <span className="text-lg font-mono font-bold text-green-400">{results.bendAllowance.toFixed(2)} mm</span>
                        </div>
                    </div>
                </div>

                <div className="bg-[#0f172a] border border-white/10 rounded-xl p-4 shadow-inner">
                    <div className="flex items-center gap-2 mb-2 border-b border-white/5 pb-1">
                        <Sigma size={14} className="text-brand-blue-light" />
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest">{t('calculatorPage.bending.theory')}</h4>
                    </div>
                    
                    <div className="space-y-2 text-[10px] text-gray-400">
                         <div className="bg-white/5 p-2 rounded border border-white/5">
                            <span className="text-brand-orange font-bold mr-2">Fator K:</span> Posição da linha neutra (LN). R &lt; 2T (K≈0.33), R &ge; 2T (K≈0.50).
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                             <div className="bg-white/5 p-2 rounded border border-white/5 flex flex-col">
                                <span className="text-white font-bold mb-1">BA (Comp. Arco)</span>
                                <code className="bg-black/30 p-1 rounded text-brand-blue-light font-mono text-[9px]">BA = A × (R + K×T)</code>
                            </div>
                            <div className="bg-white/5 p-2 rounded border border-white/5 flex flex-col">
                                <span className="text-white font-bold mb-1">BD (Dedução)</span>
                                <code className="bg-black/30 p-1 rounded text-brand-blue-light font-mono text-[9px]">BD = 2×OSSB - BA</code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BendingCalculator;
