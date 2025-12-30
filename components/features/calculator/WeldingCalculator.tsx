
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
        <text x={x} y={y} fill={textColor} fontSize="10" fontWeight="bold" textAnchor={anchor} style={{ pointerEvents: 'none' }}>{text}</text>
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
            <svg width="100%" height="120" viewBox="0 0 300 120" className="bg-black/20 rounded">
                <rect x="80" y="80" width="140" height="20" fill={metalColor} rx="2" />
                <rect x="140" y="20" width="20" height="60" fill={metalColor} rx="2" />
                <path d="M140 80 L110 80 L140 50 Z" fill={weldColor} />
                <path d="M160 80 L190 80 L160 50 Z" fill={weldColor} />
                <Arrow x1={110} y1={95} x2={140} y2={95} label="z (Perna)" />
            </svg>
        );
    }

    if (type === 'buttV') {
        return (
            <svg width="100%" height="120" viewBox="0 0 300 120" className="bg-black/20 rounded">
                <path d="M40 50 L130 50 L145 90 L40 90 Z" fill={metalColor} />
                <path d="M260 50 L170 50 L155 90 L260 90 Z" fill={metalColor} />
                <path d="M130 50 L170 50 L155 90 L145 90 Z" fill={weldColor} />
                <path d="M130 50 Q150 40 170 50" fill={weldColor} />
                <Arrow x1={30} y1={50} x2={30} y2={90} label="t (Espessura)" />
                <Text x={150} y={40} text="α (Ângulo)" />
            </svg>
        );
    }
    
    // Default X
    return (
        <svg width="100%" height="120" viewBox="0 0 300 120" className="bg-black/20 rounded">
             <path d="M40 40 L130 40 L145 60 L130 80 L40 80 Z" fill={metalColor} />
             <path d="M260 40 L170 40 L155 60 L170 80 L260 80 Z" fill={metalColor} />
             <path d="M130 40 L170 40 L155 60 L170 80 L130 80 L145 60 Z" fill={weldColor} />
             <Arrow x1={30} y1={40} x2={30} y2={80} label="t" />
        </svg>
    );
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

    const inputClass = "w-full bg-[#1e293b] border border-white/10 rounded p-1.5 text-white text-xs outline-none h-8";
    const labelClass = "block text-[9px] text-gray-400 uppercase font-bold mb-0.5";

    return (
        <div className="max-w-5xl mx-auto bg-[#0f172a] border border-white/10 rounded-xl p-4 shadow-xl flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3 flex flex-col gap-4">
                <h3 className="text-white/80 font-bold text-sm uppercase tracking-widest flex items-center gap-2 border-b border-white/5 pb-2">
                    <Flame size={16} className="text-brand-orange" /> {t('calculatorPage.welding.title')}
                </h3>

                <div className="w-full bg-[#1e293b] rounded-lg border border-white/5 p-2 flex items-center justify-center relative overflow-hidden shadow-inner">
                    <WeldDiagram type={calculatorState.weldJointType} />
                </div>

                <div className="grid grid-cols-3 gap-2">
                    {(['fillet', 'buttV', 'buttX'] as JointType[]).map(type => (
                        <button 
                            key={type}
                            onClick={() => updateCalculatorField('weldJointType', type)}
                            className={`p-2 rounded-lg border transition-all flex flex-col items-center gap-1 ${calculatorState.weldJointType === type ? 'bg-brand-orange border-brand-orange text-white shadow-md' : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'}`}
                        >
                            <span className="text-[9px] font-bold uppercase">{t(`calculatorPage.welding.types.${type}`)}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="md:w-2/3 flex flex-col gap-4">
                <div className="bg-white/5 rounded-lg p-4 border border-white/5 space-y-3">
                    <div>
                        <label className={labelClass}>{t('calculatorPage.selectMaterial')}</label>
                        <select value={calculatorState.material} onChange={(e) => updateCalculatorField('material', e.target.value)} className={inputClass}>
                            <option value="carbon">{t('calculatorPage.materials.carbon')}</option>
                            <option value="inox304">{t('calculatorPage.materials.inox304')}</option>
                            <option value="inox316">{t('calculatorPage.materials.inox316')}</option>
                            <option value="aluminum">{t('calculatorPage.materials.aluminum')}</option>
                        </select>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                        {calculatorState.weldJointType === 'fillet' ? (
                            <div className="col-span-1"><label className={labelClass}>Perna (z) mm</label><input type="number" value={calculatorState.weldLegSize} onChange={e => updateCalculatorField('weldLegSize', e.target.value)} className={inputClass} /></div>
                        ) : (
                            <>
                                <div className="col-span-1"><label className={labelClass}>Espessura (t) mm</label><input type="number" value={calculatorState.thickness} onChange={e => updateCalculatorField('thickness', e.target.value)} className={inputClass} /></div>
                                <div className="col-span-1"><label className={labelClass}>Raiz (g) mm</label><input type="number" value={calculatorState.weldGap} onChange={e => updateCalculatorField('weldGap', e.target.value)} className={inputClass} /></div>
                                <div className="col-span-1"><label className={labelClass}>Ângulo (α) °</label><input type="number" value={calculatorState.weldAngle} onChange={e => updateCalculatorField('weldAngle', e.target.value)} className={inputClass} /></div>
                            </>
                        )}
                        <div className="col-span-1"><label className={labelClass}>Comp. Solda (m)</label><input type="number" value={calculatorState.weldLength} onChange={e => updateCalculatorField('weldLength', e.target.value)} className={inputClass} /></div>
                        <div className="col-span-1"><label className={labelClass}>Reforço (%)</label><input type="number" value={calculatorState.weldReinforcement} onChange={e => updateCalculatorField('weldReinforcement', e.target.value)} className={inputClass} /></div>
                    </div>
                </div>

                <div className="flex-1 grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-br from-brand-blue-dark to-[#0f172a] rounded-lg p-4 border border-white/10 flex flex-col justify-center items-center shadow-md">
                        <span className="text-brand-blue-light text-[10px] uppercase tracking-widest font-bold mb-1">Peso Estimado</span>
                        <div className="text-2xl font-mono font-bold text-white">{resultWeight.toFixed(2)} <span className="text-xs text-gray-400">kg</span></div>
                    </div>
                    <div className="bg-[#1e293b] rounded-lg p-4 border border-white/5 flex flex-col justify-center items-center shadow-md">
                        <span className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mb-1">Volume</span>
                        <div className="text-xl font-mono font-bold text-white">{resultVolume.toFixed(0)} <span className="text-xs text-gray-500">cm³</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeldingCalculator;
