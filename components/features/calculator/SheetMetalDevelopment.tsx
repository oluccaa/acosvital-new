
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Cone, ArrowDownToLine, Ruler, AlertCircle, BookOpen, Calculator, Sigma } from 'lucide-react';

const SheetMetalDevelopment: React.FC = () => {
    const { t } = useTranslation();
    const [D, setD] = useState<string>(''); 
    const [d, setd] = useState<string>(''); 
    const [H, setH] = useState<string>(''); 
    const [T, setT] = useState<string>(''); 
    const [results, setResults] = useState<any>(null);

    const calculateCone = () => {
        const bigD = parseFloat(D);
        const smallD = parseFloat(d);
        const height = parseFloat(H);
        const thick = parseFloat(T) || 0;

        if (!bigD || !height || isNaN(smallD)) return;

        // Linha Neutra: Calcula-se a fibra média para a conformação.
        const effBigD = thick > 0 ? bigD - thick : bigD;
        const effSmallD = thick > 0 ? smallD - thick : smallD;
        
        const R = effBigD / 2;
        const r = effSmallD / 2;
        
        // Geratriz (Slant Height) via Pitágoras
        const g = Math.sqrt(Math.pow(height, 2) + Math.pow(R - r, 2));

        if (R === r) { setResults(null); return; }

        // Desenvolvimento
        // Raio Maior do Molde (Pattern Radius)
        const radiusLarge = (g * R) / (R - r);
        const radiusSmall = radiusLarge - g;
        
        // Ângulo do Setor Circular
        const angle = 360 * (R / radiusLarge);
        
        // Corda para traçagem (Chord Length)
        // L = 2 * r * sin(theta/2)
        const chordLarge = 2 * radiusLarge * Math.sin((angle * Math.PI / 180) / 2);

        setResults({ slantHeight: g, radiusLarge, radiusSmall, angle, chordLarge });
    };

    useEffect(() => { calculateCone(); }, [D, d, H, T]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in zoom-in-95 duration-500">
            {/* Esquerda: Inputs */}
            <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 shadow-xl h-full">
                    <h3 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                        <Ruler size={16} className="text-brand-blue-light" /> Dimensões do Cone
                    </h3>
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div><label className="text-[10px] text-gray-400 font-bold uppercase block mb-1">Ø Maior (D)</label><input type="number" value={D} onChange={e => setD(e.target.value)} className="w-full bg-[#1e293b] border border-white/10 rounded-lg py-2 pl-3 text-white text-sm focus:border-brand-orange outline-none" placeholder="mm" /></div>
                            <div><label className="text-[10px] text-gray-400 font-bold uppercase block mb-1">Ø Menor (d)</label><input type="number" value={d} onChange={e => setd(e.target.value)} className="w-full bg-[#1e293b] border border-white/10 rounded-lg py-2 pl-3 text-white text-sm focus:border-brand-orange outline-none" placeholder="mm" /></div>
                            <div><label className="text-[10px] text-gray-400 font-bold uppercase block mb-1">Altura (H)</label><input type="number" value={H} onChange={e => setH(e.target.value)} className="w-full bg-[#1e293b] border border-white/10 rounded-lg py-2 pl-3 text-white text-sm focus:border-brand-orange outline-none" placeholder="mm" /></div>
                            <div><label className="text-[10px] text-gray-400 font-bold uppercase block mb-1">Espessura (T)</label><input type="number" value={T} onChange={e => setT(e.target.value)} className="w-full bg-[#1e293b] border border-white/10 rounded-lg py-2 pl-3 text-white text-sm focus:border-brand-orange outline-none" placeholder="mm (Opcional)" /></div>
                        </div>
                        <p className="text-[10px] text-gray-500 italic flex items-center gap-1"><AlertCircle size={10} /> Cálculo pela linha neutra se espessura informada.</p>
                    </div>
                </div>
            </div>

            {/* Direita: Resultados */}
            <div className="lg:col-span-7 space-y-6">
                <div className="bg-brand-blue-dark rounded-2xl p-6 border border-brand-blue-light/20 shadow-lg relative overflow-hidden h-full flex flex-col">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                    
                    <h3 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2 mb-6 z-10">
                        <ArrowDownToLine size={16} className="text-brand-orange" /> Resultado da Planificação
                    </h3>

                    {!results ? (
                        <div className="flex-1 flex flex-col items-center justify-center text-white/20 min-h-[200px]">
                            <Cone size={48} className="mb-2 opacity-50" />
                            <p className="text-sm font-medium">Insira as dimensões para calcular</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 z-10 flex-1 content-start">
                            <div className="space-y-4">
                                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                                    <span className="text-[10px] text-gray-400 uppercase block mb-1">Raio Maior (Compasso)</span>
                                    <span className="text-2xl font-mono font-bold text-brand-orange">{results.radiusLarge.toFixed(1)} mm</span>
                                </div>
                                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                                    <span className="text-[10px] text-gray-400 uppercase block mb-1">Raio Menor</span>
                                    <span className="text-2xl font-mono font-bold text-white">{results.radiusSmall.toFixed(1)} mm</span>
                                </div>
                                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                                    <span className="text-[10px] text-gray-400 uppercase block mb-1">Ângulo do Setor</span>
                                    <span className="text-2xl font-mono font-bold text-white">{results.angle.toFixed(2)}°</span>
                                </div>
                            </div>
                            <div className="bg-black/20 p-4 rounded-xl border border-white/10 flex flex-col justify-center">
                                <span className="text-[10px] text-gray-400 uppercase block mb-1">Geratriz (Slant Height)</span>
                                <span className="text-2xl font-mono font-bold text-white mb-4">{results.slantHeight.toFixed(1)} mm</span>
                                
                                <span className="text-[10px] text-gray-400 uppercase block mb-1">Corda Maior (Traçagem)</span>
                                <span className="text-2xl font-mono font-bold text-white">{results.chordLarge.toFixed(1)} mm</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Explicação Técnica */}
            <div className="lg:col-span-12">
                <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 shadow-inner">
                    <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-2">
                        <Sigma size={16} className="text-brand-blue-light" />
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest">Memória de Cálculo</h4>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-400">
                        <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                            <strong className="text-brand-orange block mb-2 font-bold uppercase">1. Geratriz (g)</strong>
                            <div className="font-mono bg-black/30 p-2 rounded mb-2 text-white">g = √[H² + (R - r)²]</div>
                            <p className="leading-relaxed text-gray-500">
                                A geratriz é a hipotenusa do triângulo retângulo formado pela altura e a diferença dos raios da base e do topo.
                            </p>
                        </div>
                        
                        <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                            <strong className="text-brand-orange block mb-2 font-bold uppercase">2. Ângulo do Setor (θ)</strong>
                            <div className="font-mono bg-black/30 p-2 rounded mb-2 text-white">θ = 360° × (R / g)</div>
                            <p className="leading-relaxed text-gray-500">
                                O ângulo de abertura do molde plano é proporcional à razão entre o raio da base e a geratriz do cone.
                            </p>
                        </div>
                    </div>
                    
                    <div className="mt-4 text-[10px] text-gray-600 text-center italic">
                        * Cálculo baseado em geometria euclidiana para desenvolvimento de sólidos de revolução (Cones Concêntricos).
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SheetMetalDevelopment;
