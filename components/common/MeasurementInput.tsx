
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Wand2 } from 'lucide-react';
import Tooltip from './Tooltip';

export type MeasurementUnit = 'mm' | 'cm' | 'm' | 'pol';

export interface ForcedUnit {
    unit: MeasurementUnit;
    timestamp: number;
}

interface MeasurementInputProps {
    value: string;
    onChange: (value: string) => void;
    label: string;
    placeholder?: string;
    isAuto?: boolean;
    hasError?: boolean;
    helpText?: string;
    className?: string;
    forceUnit?: ForcedUnit; // Prop para forçar a mudança de unidade externamente
    onFocus?: () => void; // Novo prop para notificar o pai quando focado
    isActiveField?: boolean; // Novo prop para indicar visualmente que este campo receberá o preset
}

const MeasurementInput: React.FC<MeasurementInputProps> = ({
    value, onChange, label, placeholder = "0.00", isAuto = false, hasError = false, helpText, className = "", forceUnit, onFocus, isActiveField
}) => {
    const [unit, setUnit] = useState<MeasurementUnit>('mm');
    
    const factors: Record<MeasurementUnit, number> = { mm: 1, cm: 10, m: 1000, pol: 25.4 };

    // Observa mudanças no forceUnit para atualizar a unidade localmente
    useEffect(() => {
        if (forceUnit) {
            setUnit(forceUnit.unit);
        }
    }, [forceUnit]);

    const convertFromMm = (mmValue: string, targetUnit: MeasurementUnit): string => {
        if (!mmValue) return '';
        const mm = parseFloat(mmValue.replace(',', '.'));
        if (isNaN(mm)) return '';
        const val = mm / factors[targetUnit];
        
        // Se for polegada, tenta manter até 4 casas decimais para precisão
        return val.toLocaleString('pt-BR', { maximumFractionDigits: 4 });
    };

    const [displayValue, setDisplayValue] = useState<string>(() => value ? convertFromMm(value, unit) : '');
    const [isFocused, setIsFocused] = useState(false);
    const lastEmittedValue = useRef<string>(value);

    const parseInput = (input: string): number | null => {
        if (!input) return null;
        let clean = input.trim();
        
        // Lógica robusta para frações (ex: "1/2", "2 1/2", "2-1/2")
        if (clean.includes('/')) {
            try {
                // Substitui traço por espaço para padronizar "2-1/2" -> "2 1/2"
                clean = clean.replace('-', ' ');
                const parts = clean.split(' ').filter(p => p.trim() !== '');
                
                let total = 0;
                for (const part of parts) {
                    if (part.includes('/')) {
                        const [n, d] = part.split('/');
                        const num = parseFloat(n);
                        const den = parseFloat(d);
                        if (den !== 0) total += num / den;
                    } else {
                        total += parseFloat(part);
                    }
                }
                return isNaN(total) ? null : total;
            } catch { return null; }
        }

        // Parse normal numérico
        clean = clean.replace(/\s/g, '').replace(/\.(?=[^,]*$)/g, '').replace(',', '.');
        const num = parseFloat(clean);
        return isNaN(num) ? null : num;
    };

    const handleInputChange = (text: string) => {
        // Permite números, vírgula, ponto, barra e espaço (para frações)
        const sanitized = text.replace(/[^0-9,./\- ]/g, '');
        setDisplayValue(sanitized);
        
        const num = parseInput(sanitized);
        
        if (num !== null) {
            // Converte o valor inserido (na unidade atual) para mm
            const mmValue = num * factors[unit];
            const mmString = mmValue.toFixed(4).replace('.', ','); 
            
            lastEmittedValue.current = mmString;
            onChange(mmString);
        } else if (text === '') {
            lastEmittedValue.current = '';
            onChange('');
        }
    };

    // Atualiza o display quando o valor externo (mm) ou a unidade muda
    useEffect(() => {
        if (value !== lastEmittedValue.current && !isFocused) {
             setDisplayValue(value ? convertFromMm(value, unit) : '');
             lastEmittedValue.current = value;
        } else if (value && !isFocused) {
            // Força atualização se a unidade mudou e não estamos digitando
             setDisplayValue(convertFromMm(value, unit));
        }
    }, [value, unit, isFocused]);

    const handleFocus = () => {
        setIsFocused(true);
        if (onFocus) onFocus();
    };

    return (
        <div className={`relative group ${className}`}>
            {/* Label Compacto */}
            <div className="flex justify-between items-center mb-0.5">
                <label className={`text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 ${hasError ? 'text-red-400' : isAuto ? 'text-brand-orange' : isActiveField ? 'text-brand-orange' : 'text-gray-400'}`}>
                    {label.replace(/\(mm\)/gi, ``)}
                    {isAuto && <Wand2 size={10} className="text-brand-orange animate-pulse" />}
                    {helpText && <Tooltip text={helpText} />}
                </label>
            </div>

            {/* Input Super Compacto (h-8) */}
            <div className={`
                flex items-center bg-[#0f172a] border rounded transition-all h-8 
                ${hasError ? 'border-red-500' : isAuto ? 'border-brand-orange/50' : isActiveField ? 'border-brand-orange ring-1 ring-brand-orange/20' : 'border-white/10 hover:border-white/20'}
            `}>
                <input 
                    type="text" 
                    value={displayValue} 
                    onChange={e => handleInputChange(e.target.value)} 
                    onFocus={handleFocus} 
                    onBlur={() => setIsFocused(false)} 
                    className={`w-full bg-transparent px-2 text-xs font-mono outline-none ${isAuto ? 'text-brand-orange font-bold' : 'text-white'}`} 
                    placeholder={placeholder} 
                />
                
                {/* Seletor de Unidade Micro */}
                <div className="relative h-full border-l border-white/5 flex items-center bg-white/5">
                    <select 
                        value={unit} 
                        onChange={e => setUnit(e.target.value as MeasurementUnit)} 
                        className="h-full bg-transparent pl-1.5 pr-3 text-[9px] font-bold uppercase cursor-pointer outline-none appearance-none text-gray-400 hover:text-white"
                    >
                        {['mm','cm','m','pol'].map(u => <option key={u} value={u} className="bg-[#1e293b] text-gray-300">{u}</option>)}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default MeasurementInput;
