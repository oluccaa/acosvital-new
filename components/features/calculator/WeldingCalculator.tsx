
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Flame, Info, Ruler } from 'lucide-react';
import { DENSITIES, MaterialType } from '../../../hooks/useSteelCalculator';
import { useEngineering, CalculatorState } from '../../../context/EngineeringContext';

type JointType = 'fillet' | 'buttV' | 'buttX';

const WeldDiagram: React.FC<{ type: JointType }> = ({ type }) => {
    const metalColor = "#475569";
    const weldColor = "#ea6100";
    const dimColor = "#94a3b8";
    const textColor = "#e2e8f0";

    const Text: React.FC<{ x: number, y: number, text: string, anchor?: "start" | "middle" | "end" }> = ({ x, y, text, anchor = "middle" }) => (
        <text x={x} y={y} fill={textColor} fontSize="12" fontWeight="bold" textAnchor={anchor} style={{ pointerEvents: 'none' }}>{text}</text>
    );

    const Line: React.FC<{ x1: number, y1: number, x2: number, y2: number, dashed?: boolean }> = ({ x1, y1, x2, y2, dashed }) => (
        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={dimColor} strokeWidth="1" strokeDasharray={dashed ? "3 3" : ""} />
    );

    const Arrow: React.FC<{ x1: number, y1: number, x2: number, y2: number, label?: string }> = ({ x1, y1, x2, y2, label }) => (
        <g>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={dimColor} strokeWidth="1" />
            <polygon points={`${x1},${y1} ${x1+3},${y1-3} ${x1+3},${y1+3}`} fill={dimColor} transform={`rotate(${Math.atan2(y2-y1, x2-x1)*180/Math.PI + 180}, ${x1}, ${y1})`} />
            <polygon points={`${x2},${y2} ${x2-3},${y2-3} ${x2-3},${y2+3}`} fill={dimColor} transform={`rotate(${Math.atan2(y2-y1, x2-x1)*180/Math.PI}, ${x2}, ${y2})`} />
            {label && <Text x={(x1+x2)/2} y={(y1+y2)/2 - 5} text={label} />}
        </g>
    );

    if (type === 'fillet') {
        return (
            <svg width="100%" height="180" viewBox="0 0 300 180" className="bg-black/20 rounded-lg">
                <rect x="50" y="110" width="200" height="30" fill={metalColor} rx="2" />
                <rect x="135" y="30" width="30" height="80" fill={metalColor} rx="2" />
                <path d="M135 110 L105 110 L135 80 Z" fill={weldColor} />
                <path d="M165 110 L195 110 L165 80 Z" fill={weldColor} />
                <Line x1={105} y1={110} x2={105} y2={140} dashed />
                <Line x1={135} y1={110} x2={135} y2={140} dashed />
                <Arrow x1={105} y1={135} x2={135} y2={135} label="z (Perna)" />
                <Line x1={165} y1={80} x2={215} y2={80} dashed />
                <Line x1={195} y1={110} x2={215} y2={110} dashed />
                <Arrow x1={210} y1={80} x2={210} y2={110} label="z" />
            </svg>
        );
    }

    if (type === 'buttV') {
        return (
            <svg width="100%" height="180" viewBox="0 0 300 180" className="bg-black/20 rounded-lg">
                <path d="M20 70 L110 70 L130 110 L20 110 Z" fill={metalColor} />
                <path d="M280 70 L190 70 L170 110 L280 110 Z" fill={metalColor} />
                <path d="M110 70 L190 70 L170 110 L130 110 Z" fill={weldColor} />
                <path d="M110 70 Q150 60 190 70" fill={weldColor} />
                <Line x1={20} y1={70} x2={10} y2={70} dashed />
                <Line x1={20} y1={110} x2={10} y2={110} dashed />
                <Arrow x1={15} y1={70} x2={15} y2={110} label="t (Espessura)" />
                <Line x1={130} y1={110} x2={130} y2={140} dashed />
                <Line x1={170} y1={110} x2={170} y2={140} dashed />
                <Arrow x1={130} y1={135} x2={170} y2={135} label="g (Raiz)" />
                <Text x={200} y={60} text="α (Ângulo)" />
            </svg>
        );
    }

    if (type === 'buttX') {
        return (
            <svg width="100%" height="180" viewBox="0 0 300 180" className="bg-black/20 rounded-lg">
                 <path d="M20 60 L110 60 L130 90 L110 120 L20 120 Z" fill={metalColor} />
                 <path d="M280 60 L190 60 L170 90 L190 120 L280 120 Z" fill={metalColor} />
                 <path d="M110 60 L190 60 L170 90 L190 120 L110 120 L130 90 Z" fill={weldColor} />
                 <path d="M110 60 Q150 50 190 60" fill={weldColor} />
                 <path d="M110 120 Q150 130 190 120" fill={weldColor} />
                 <Line x1={20} y1={60} x2={10} y2={60} dashed />
                 <Line x1={20} y1={120} x2={10} y2={120} dashed />
                 <Arrow x1={15} y1={60} x2={15} y2={120} label="t" />
                 <Text x={150} y={94} text="g" />
                 <Text x={205} y={60} text="α" />
            </svg>
        );
    }
    return null;
};

const WeldingCalculator: React.FC = () => {
    const { t } = useTranslation();
    const { calculatorState, updateCalculatorField, weldingPayload, clearWeldingPayload } = useEngineering();

    const [resultWeight, setResultWeight] = useState<number>(0);
    const [resultVolume, setResultVolume] = useState<number>(0);

    // Processar payload vindo da Calculadora de Aço (Interoperabilidade)
    useEffect(() => {
        if (weldingPayload) {
            updateCalculatorField('weldLength', weldingPayload.length.toString());
            if (weldingPayload.thickness) updateCalculatorField('thickness', weldingPayload.thickness.toString());
            clearWeldingPayload();
        }
    }, [weldingPayload]);

    useEffect(() => {
        const l = parseFloat(calculatorState.weldLength) || 0;
        const z = parseFloat(calculatorState.weldLegSize) || 0;
        const tVal = parseFloat(calculatorState.thickness) || 0;
        const g = parseFloat(calculatorState.weldGap) || 0;
        const ang = parseFloat(calculatorState.weldAngle) || 0;
        const r = parseFloat(calculatorState.weldReinforcement) || 0;

        if (l <= 0) { setResultVolume(0); setResultWeight(0); return; }

        let areaMM2 = 0;
        const angleRad = (ang * Math.PI) / 180;
        const tanHalfAngle = Math.tan(angleRad / 2);

        if (calculatorState.weldJointType === 'fillet') {
            areaMM2 = (z * z) / 2;
        } else if (calculatorState.weldJointType === 'buttV') {
            areaMM2 = (Math.pow(tVal, 2) * tanHalfAngle) + (g * tVal);
        } else if (calculatorState.weldJointType === 'buttX') {
            areaMM2 = ((Math.pow(tVal, 2) / 2) * tanHalfAngle) + (g * tVal);
        }

        const areaWithReinforcement = areaMM2 * (1 + (r / 100));
        const volumeCM3 = (areaWithReinforcement * (l * 1000)) / 1000;
        const density = DENSITIES[calculatorState.material] || 7.85;
        const weightKG = volumeCM3 * (density / 1000);

        setResultVolume(volumeCM3);
        setResultWeight(weightKG);
    }, [calculatorState]);

    return (
        <div className="space-y-12">
            <div className="max-w-6xl mx-auto bg-[#0f172a] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col lg:flex-row gap-8">
                <div className="lg:w-5/12 flex flex-col gap-6">
                    <h3 className="text-white/80 font-bold text-lg uppercase tracking-widest flex items-center gap-2">
                        <Flame size={20} className="text-brand-orange" /> {t('calculatorPage.welding.title')}
                    </h3>

                    <div className="w-full aspect-video bg-[#1e293b] rounded-xl border border-white/5 p-4 flex items-center justify-center relative overflow-hidden shadow-inner">
                        <WeldDiagram type={calculatorState.weldJointType} />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        {(['fillet', 'buttV', 'buttX'] as JointType[]).map(type => (
                            <button 
                                key={type}
                                onClick={() => updateCalculatorField('weldJointType', type)}
                                className={`p-3 rounded-xl border transition-all flex flex-col items-center gap-2 ${calculatorState.weldJointType === type ? 'bg-brand-orange border-brand-orange text-white shadow-lg' : 'bg-white/5 border-white/10 text-gray-400'}`}
                            >
                                <div className={`w-8 h-8 flex items-center justify-center ${type === 'fillet' ? 'border-b-2 border-l-2' : ''} font-bold`}>{type === 'buttX' ? 'X' : type === 'buttV' ? 'V' : ''}</div>
                                <span className="text-[10px] font-bold uppercase">{t(`calculatorPage.welding.types.${type}`)}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="lg:w-7/12 flex flex-col gap-6">
                    <div className="bg-white/5 rounded-xl p-6 border border-white/5 space-y-6">
                        <div>
                            <label className="block text-[10px] text-gray-400 uppercase font-bold mb-1">{t('calculatorPage.selectMaterial')}</label>
                            <select value={calculatorState.material} onChange={(e) => updateCalculatorField('material', e.target.value)} className="w-full bg-[#1e293b] border border-white/10 rounded-lg py-3 px-3 text-white text-sm outline-none">
                                <option value="carbon">{t('calculatorPage.materials.carbon')}</option>
                                <option value="inox304">{t('calculatorPage.materials.inox304')}</option>
                                <option value="inox316">{t('calculatorPage.materials.inox316')}</option>
                                <option value="aluminum">{t('calculatorPage.materials.aluminum')}</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {calculatorState.weldJointType === 'fillet' ? (
                                <div className="col-span-1"><label className="block text-[10px] text-gray-400 uppercase font-bold mb-1">Perna (z)</label><input type="number" value={calculatorState.weldLegSize} onChange={e => updateCalculatorField('weldLegSize', e.target.value)} className="w-full bg-[#1e293b] border border-white/10 rounded-lg py-3 px-3 text-white text-sm outline-none" /></div>
                            ) : (
                                <>
                                    <div className="col-span-1"><label className="block text-[10px] text-gray-400 uppercase font-bold mb-1">Espessura (t)</label><input type="number" value={calculatorState.thickness} onChange={e => updateCalculatorField('thickness', e.target.value)} className="w-full bg-[#1e293b] border border-white/10 rounded-lg py-3 px-3 text-white text-sm outline-none" /></div>
                                    <div className="col-span-1"><label className="block text-[10px] text-gray-400 uppercase font-bold mb-1">Raiz (g)</label><input type="number" value={calculatorState.weldGap} onChange={e => updateCalculatorField('weldGap', e.target.value)} className="w-full bg-[#1e293b] border border-white/10 rounded-lg py-3 px-3 text-white text-sm outline-none" /></div>
                                    <div className="col-span-1"><label className="block text-[10px] text-gray-400 uppercase font-bold mb-1">Ângulo (α)</label><input type="number" value={calculatorState.weldAngle} onChange={e => updateCalculatorField('weldAngle', e.target.value)} className="w-full bg-[#1e293b] border border-white/10 rounded-lg py-3 px-3 text-white text-sm outline-none" /></div>
                                </>
                            )}
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-1"><label className="block text-[10px] text-gray-400 uppercase font-bold mb-1">Comp. Solda (m)</label><input type="number" value={calculatorState.weldLength} onChange={e => updateCalculatorField('weldLength', e.target.value)} className="w-full bg-[#1e293b] border border-white/10 rounded-lg py-3 px-3 text-white text-sm outline-none" /></div>
                            <div className="col-span-1"><label className="block text-[10px] text-gray-400 uppercase font-bold mb-1">Reforço (%)</label><input type="number" value={calculatorState.weldReinforcement} onChange={e => updateCalculatorField('weldReinforcement', e.target.value)} className="w-full bg-[#1e293b] border border-white/10 rounded-lg py-3 px-3 text-white text-sm outline-none" /></div>
                        </div>
                    </div>

                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-brand-blue-dark to-[#0f172a] rounded-xl p-6 border border-white/10 flex flex-col justify-center items-center shadow-lg">
                            <span className="text-brand-blue-light text-xs uppercase tracking-widest font-bold mb-2">Peso Estimado</span>
                            <div className="text-4xl font-mono font-bold text-white">{resultWeight.toFixed(2)} <span className="text-lg text-gray-400">kg</span></div>
                        </div>
                        <div className="bg-[#1e293b] rounded-xl p-6 border border-white/5 flex flex-col justify-center items-center shadow-lg">
                            <span className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-2">Volume de Solda</span>
                            <div className="text-2xl font-mono font-bold text-white">{resultVolume.toFixed(0)} <span className="text-sm text-gray-500">cm³</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeldingCalculator;
