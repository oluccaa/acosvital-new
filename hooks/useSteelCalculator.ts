
import { useState, useCallback, useEffect } from 'react';
import { useEngineering, ProjectItemMeta, CalculatorState } from '../context/EngineeringContext';

export type ProductType = 'plate' | 'tube_round' | 'bar_round' | 'bar_square' | 'flange_square' | 'grating' | 'tube_calendered' | 'expanded_metal' | 'fitting_elbow';
export type MaterialType = 'carbon' | 'inox304' | 'inox316' | 'aluminum';

export interface ExtraConfig {
    galvanized: boolean;
    addClips: boolean;
    isFlattened: boolean; 
}

export interface PaintConfig {
    coverage: string;
    coats: string;
    density: string;
}

export interface EngData {
    devLength?: number;
    surfaceArea?: number;
    grossWeight?: number;
    netWeight?: number;
    scrapRate?: number;
    arcOuter?: number;
    arcCenter?: number;
    arcInner?: number;
    paintVolume?: number; 
    paintWeight?: number;
    numBars?: number;
    clipsQty?: number;
    meta?: ProjectItemMeta;
    errors?: string[];
}

export const DENSITIES: Record<string, number> = {
    carbon: 7.85,
    inox304: 7.93,
    inox316: 7.98,
    aluminum: 2.70
};

const safeParse = (val: string | number | undefined): number => {
    if (typeof val === 'number') return val;
    if (!val) return 0;
    const str = val.toString().replace(',', '.');
    const num = parseFloat(str);
    return isNaN(num) ? 0 : num;
};

export const useSteelCalculator = () => {
    const { calculatorState, updateCalculatorField } = useEngineering();
    
    // Alias para manter compatibilidade com componentes existentes
    const values = calculatorState;

    const [paintConfig, setPaintConfig] = useState<PaintConfig>({ coverage: '10', coats: '1', density: '1.2' });
    const [extras, setExtras] = useState<ExtraConfig>({ galvanized: false, addClips: false, isFlattened: false });
    const [totalWeight, setTotalWeight] = useState<number>(0);
    const [unitWeight, setUnitWeight] = useState<number>(0);
    const [engData, setEngData] = useState<EngData>({});

    const handleInputChange = useCallback((field: keyof CalculatorState, value: string) => {
        updateCalculatorField(field, value);
    }, [updateCalculatorField]);

    const handlePaintChange = useCallback((field: keyof PaintConfig, value: string) => {
         setPaintConfig(prev => ({ ...prev, [field]: value }));
    }, []);

    const toggleExtra = useCallback((field: keyof ExtraConfig) => {
        setExtras(prev => ({ ...prev, [field]: !prev[field] }));
    }, []);

    const calculate = useCallback((selectedType: ProductType) => {
        const rawW = safeParse(values.width);
        const rawL = safeParse(values.length);
        const rawT = safeParse(values.thickness);
        const rawOD = safeParse(values.outerDiameter);
        const rawID = safeParse(values.innerDiameter);
        const rawH = safeParse(values.height);
        const rawR = safeParse(values.radius);
        const rawAng = safeParse(values.angle);
        const qty = Math.max(1, safeParse(values.quantity));
        
        const density = DENSITIES[values.material] || 7.85;
        let volume = 0; 
        let surfaceArea = 0;

        switch (selectedType) {
            case 'plate':
                volume = (rawW/10) * (rawL/10) * (rawT/10);
                surfaceArea = (2 * (rawW * rawL + rawW * rawT + rawL * rawT)) / 1000000;
                break;
            case 'tube_round':
                const r_out_tr = rawOD / 20;
                const r_in_tr = Math.max(0, r_out_tr - (rawT/10));
                volume = Math.PI * (Math.pow(r_out_tr, 2) - Math.pow(r_in_tr, 2)) * (rawL/10);
                surfaceArea = (Math.PI * rawOD * rawL) / 1000000;
                break;
            case 'bar_round':
                volume = Math.PI * Math.pow(rawOD / 20, 2) * (rawL/10);
                surfaceArea = (Math.PI * rawOD * rawL) / 1000000;
                break;
            case 'bar_square':
                volume = Math.pow(rawW/10, 2) * (rawL/10);
                surfaceArea = (4 * rawW * rawL) / 1000000;
                break;
            case 'flange_square':
                volume = Math.PI * (Math.pow(rawOD/20, 2) - Math.pow(rawID/20, 2)) * (rawT/10);
                surfaceArea = (Math.PI * (Math.pow(rawOD/2, 2) - Math.pow(rawID/2, 2)) * 2 + Math.PI * rawOD * rawT + Math.PI * rawID * rawT) / 1000000;
                break;
            case 'grating':
                const p = safeParse(values.pitch) || 30;
                const numBars = Math.floor(rawW / p) + 1;
                volume = (numBars * (rawL/10) * (rawH/10) * (rawT/10)) * 1.15;
                surfaceArea = (numBars * 2 * (rawL * rawH + rawL * rawT + rawH * rawT)) / 1000000;
                break;
            case 'tube_calendered':
                const r_out_tc = rawOD / 20;
                const r_in_tc = Math.max(0, r_out_tc - (rawT/10));
                volume = Math.PI * (Math.pow(r_out_tc, 2) - Math.pow(r_in_tc, 2)) * (rawL/10);
                surfaceArea = (Math.PI * rawOD * rawL) / 1000000;
                break;
            case 'expanded_metal':
                const swd = safeParse(values.meshSWD);
                const strand = safeParse(values.strandWidth);
                const t = safeParse(values.thickness);
                const areaReal = (rawW * rawL);
                const fatorAbertura = 1 - (2 * strand / swd);
                volume = (areaReal/100) * (t/10) * (1 - fatorAbertura);
                surfaceArea = (areaReal * 2) / 1000000;
                break;
            case 'fitting_elbow':
                const area_el = Math.PI * (Math.pow(rawOD/20, 2) - Math.pow((rawOD/20)-(rawT/10), 2));
                const arc_el = 2 * Math.PI * (rawR/10) * (rawAng/360);
                volume = area_el * arc_el;
                surfaceArea = (Math.PI * rawOD * (arc_el * 10)) / 1000000;
                break;
        }

        let uWeight = Math.max(0, (volume * density) / 1000);
        if (extras.galvanized) uWeight *= 1.07;

        setUnitWeight(uWeight);
        setTotalWeight(uWeight * qty);
        setEngData({ 
            surfaceArea, 
            meta: { length: rawL, width: rawW, thickness: rawT, outerDiameter: rawOD, innerDiameter: rawID },
            devLength: selectedType === 'tube_calendered' ? (rawOD - rawT) * Math.PI : undefined
        });
    }, [values, extras]);

    const reset = useCallback(() => {
        // Reseta mantendo apenas o material e o tipo
        updateCalculatorField('width', '');
        updateCalculatorField('height', '');
        updateCalculatorField('length', '');
        updateCalculatorField('thickness', '');
        updateCalculatorField('outerDiameter', '');
        updateCalculatorField('innerDiameter', '');
        updateCalculatorField('quantity', '1');
    }, [updateCalculatorField]);

    return { 
        values, 
        paintConfig, 
        extras, 
        totalWeight, 
        unitWeight, 
        engData, 
        handleInputChange, 
        handlePaintChange, 
        toggleExtra, 
        calculate, 
        reset, 
        setValues: (newVals: any) => {
            // Sincroniza um objeto inteiro com o contexto
            Object.keys(newVals).forEach(key => {
                updateCalculatorField(key as keyof CalculatorState, newVals[key]);
            });
        }
    };
};
