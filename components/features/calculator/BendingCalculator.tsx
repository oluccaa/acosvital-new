
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
            // Conversão Graus -> Radianos
            const rad = (A * Math.PI) / 180;
            
            // Bend Allowance (Comprimento do Arco na Linha Neutra)
            // BA = Ângulo(rad) * (Raio Interno + (K * Espessura))
            const BA = rad * (R + (K * T));
            
            // Outside Setback (Recuo Externo)
            // OSSB = tan(A/2) * (R + T)
            const OSSB = Math.tan(rad / 2) * (R + T);
            
            // Bend Deduction (Dedução de Dobra)
            // BD = 2 * OSSB - BA
            const BD = (2 * OSSB) - BA;
            
            // Comprimento Plano Total
            const Flat = L1 + L2 - BD;
            
            setResults({ bendAllowance: BA, bendDeduction: BD, flatLength: Flat, setback: OSSB });
        }
    }, [thickness, radius, angle, kFactor, leg1, leg2]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in zoom-in-95 duration-500">
            {/* Inputs */}
            <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 shadow-xl">
                    <h3 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                        <Settings size={16} className="text-brand-blue-light" /> Parâmetros de Dobra
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div><label className="text-[10px] text-gray-400 font-bold uppercase block mb-1">Espessura (T)</label><input type="number" value={thickness} onChange={e => setThickness(e.target.value)} className="w-full bg-[#1e293b] border border-white/10 rounded-lg py-2 pl-3 text-white text-sm focus:border-brand-orange outline-none" /></div>
                        <div><label className="text-[10px] text-gray-400 font-bold uppercase block mb-1">Raio Interno (R)</label><input type="number" value={radius} onChange={e => setRadius(e.target.value)} className="w-full bg-[#1e293b] border border-white/10 rounded-lg py-2 pl-3 text-white text-sm focus:border-brand-orange outline-none" /></div>
                        <div><label className="text-[10px] text-gray-400 font-bold uppercase block mb-1">Ângulo (°)</label><input type="number" value={angle} onChange={e => setAngle(e.target.value)} className="w-full bg-[#1e293b] border border-white/10 rounded-lg py-2 pl-3 text-white text-sm focus:border-brand-orange outline-none" /></div>
                        <div><label className="text-[10px] text-gray-400 font-bold uppercase block mb-1">Fator K (DIN 6935)</label><input type="number" step="0.01" value={kFactor} onChange={e => setKFactor(e.target.value)} className="w-full bg-[#1e293b] border border-white/10 rounded-lg py-2 pl-3 text-white text-sm focus:border-brand-orange outline-none" /></div>
                        <div><label className="text-[10px] text-gray-400 font-bold uppercase block mb-1">Aba 1 (Externa)</label><input type="number" value={leg1} onChange={e => setLeg1(e.target.value)} className="w-full bg-[#1e293b] border border-white/10 rounded-lg py-2 pl-3 text-white text-sm focus:border-brand-orange outline-none" /></div>
                        <div><label className="text-[10px] text-gray-400 font-bold uppercase block mb-1">Aba 2 (Externa)</label><input type="number" value={leg2} onChange={e => setLeg2(e.target.value)} className="w-full bg-[#1e293b] border border-white/10 rounded-lg py-2 pl-3 text-white text-sm focus:border-brand-orange outline-none" /></div>
                    </div>
                </div>
            </div>

            {/* Resultados */}
            <div className="lg:col-span-7 space-y-6">
                <div className="bg-brand-blue-dark rounded-2xl p-6 border border-brand-blue-light/20 shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                    
                    <h3 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2 mb-6 z-10">
                        <FoldVertical size={16} className="text-brand-orange" /> Tamanho do Blank (Corte)
                    </h3>
                    
                    <div className="text-5xl font-mono font-bold text-white mb-8 tracking-tighter">
                        {results.flatLength.toFixed(2)} <span className="text-xl text-white/40 font-sans">mm</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                        <div className="space-y-1">
                            <span className="text-[10px] text-gray-400 uppercase font-bold">Dedução de Dobra (BD)</span>
                            <span className="text-xl font-mono font-bold text-red-400">-{results.bendDeduction.toFixed(2)} mm</span>
                        </div>
                        <div className="space-y-1">
                            <span className="text-[10px] text-gray-400 uppercase font-bold">Tolerância de Dobra (BA)</span>
                            <span className="text-xl font-mono font-bold text-green-400">{results.bendAllowance.toFixed(2)} mm</span>
                        </div>
                    </div>
                </div>

                <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 shadow-inner">
                    <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                        <Sigma size={16} className="text-brand-blue-light" />
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest">Teoria da Conformação</h4>
                    </div>
                    
                    <div className="space-y-4 text-xs text-gray-400">
                        <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                            <strong className="text-brand-orange block mb-1 uppercase font-bold">Fator K (DIN 6935)</strong>
                            <p className="leading-relaxed mb-2">
                                Representa a posição da linha neutra (LN) na espessura da chapa. A LN é a fibra que não sofre compressão nem alongamento durante a dobra.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 ml-1">
                                <li>R &lt; 2T : K ≈ 0.33</li>
                                <li>R &ge; 2T : K ≈ 0.50</li>
                            </ul>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                <strong className="text-white block mb-2 font-bold">Bend Allowance (BA)</strong>
                                <code className="block bg-black/30 p-2 rounded text-brand-blue-light font-mono mb-1">BA = A × (R + K×T)</code>
                                <p className="text-gray-500">Comprimento do arco da dobra na linha neutra.</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                <strong className="text-white block mb-2 font-bold">Bend Deduction (BD)</strong>
                                <code className="block bg-black/30 p-2 rounded text-brand-blue-light font-mono mb-1">BD = 2×OSSB - BA</code>
                                <p className="text-gray-500">Valor a descontar da soma das abas externas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BendingCalculator;
