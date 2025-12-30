import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Wand2, AlertCircle } from 'lucide-react';

export type MeasurementUnit = 'mm' | 'cm' | 'm' | 'pol';

interface MeasurementInputProps {
    value: string;
    onChange: (value: string) => void;
    label: string;
    placeholder?: string;
    isAuto?: boolean;
    hasError?: boolean;
    className?: string;
}

const MeasurementInput: React.FC<MeasurementInputProps> = ({
    value, onChange, label, placeholder = "0.00", isAuto = false, hasError = false, className = ""
}) => {
    const [unit, setUnit] = useState<MeasurementUnit>('mm');
    
    const factors: Record<MeasurementUnit, number> = { mm: 1, cm: 10, m: 1000, pol: 25.4 };

    const convertFromMm = (mmValue: string, targetUnit: MeasurementUnit): string => {
        if (!mmValue) return '';
        const mm = parseFloat(mmValue.replace(',', '.'));
        if (isNaN(mm)) return '';
        const val = mm / factors[targetUnit];
        return val.toLocaleString('pt-BR', { maximumFractionDigits: 4 });
    };

    // Inicializa o estado de exibição com base no valor vindo das props (LocalStorage)
    const [displayValue, setDisplayValue] = useState<string>(() => value ? convertFromMm(value, unit) : '');
    const [isFocused, setIsFocused] = useState(false);
    const lastEmittedValue = useRef<string>(value);

    const parseInput = (input: string): number | null => {
        if (!input) return null;
        let clean = input.trim();
        // Suporte para frações polegadas (ex: 1 1/2)
        if (clean.includes('/') && !clean.includes(',')) {
            try {
                const parts = clean.split(' ');
                let total = 0;
                for (const part of parts) {
                    if (part.includes('/')) {
                        const [n, d] = part.split('/');
                        total += parseFloat(n) / parseFloat(d);
                    } else total += parseFloat(part);
                }
                return total;
            } catch { return null; }
        }
        clean = clean.replace(/\s/g, '').replace(/\.(?=[^,]*$)/g, '').replace(',', '.');
        const num = parseFloat(clean);
        return isNaN(num) ? null : num;
    };

    const handleInputChange = (text: string) => {
        const sanitized = text.replace(/[^0-9,./ ]/g, '');
        setDisplayValue(sanitized);
        const num = parseInput(sanitized);
        if (num !== null) {
            const mmString = (num * factors[unit]).toFixed(4).replace('.', ','); 
            lastEmittedValue.current = mmString;
            onChange(mmString);
        } else if (text === '') {
            lastEmittedValue.current = '';
            onChange('');
        }
    };

    // Sincroniza quando o valor global muda (refresh ou troca de ferramenta)
    useEffect(() => {
        if (value !== lastEmittedValue.current) {
             setDisplayValue(value ? convertFromMm(value, unit) : '');
             lastEmittedValue.current = value;
        }
    }, [value, unit]);

    return (
        <div className={`relative group ${className}`}>
            <div className="flex justify-between items-end mb-1">
                <label className={`text-[10px] uppercase font-bold flex items-center gap-1 ${hasError ? 'text-red-400' : isAuto ? 'text-brand-orange' : 'text-gray-400'}`}>
                    {label.replace(/\(mm\)/gi, `(${unit})`)}
                    {isAuto && <span className="flex items-center gap-0.5 text-[9px] bg-brand-orange/10 px-1 rounded animate-pulse"><Wand2 size={10} /> Auto</span>}
                    {hasError && <AlertCircle size={10} className="animate-bounce" />}
                </label>
            </div>

            <div className={`flex items-center bg-[#1e293b] border rounded-lg transition-all ${hasError ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)]' : isAuto ? 'border-brand-orange/50' : isFocused ? 'border-brand-orange' : 'border-white/10'}`}>
                <input 
                    type="text" 
                    value={displayValue} 
                    onChange={e => handleInputChange(e.target.value)} 
                    onFocus={() => setIsFocused(true)} 
                    onBlur={() => setIsFocused(false)} 
                    className={`w-full bg-transparent py-3 pl-3 pr-2 text-sm outline-none font-medium ${isAuto ? 'text-brand-orange font-bold' : 'text-white'}`} 
                    placeholder={placeholder} 
                />
                <div className="relative h-full border-l border-white/5">
                    <select 
                        value={unit} 
                        onChange={e => setUnit(e.target.value as MeasurementUnit)} 
                        className="h-full bg-transparent pl-2 pr-6 text-xs font-bold uppercase cursor-pointer outline-none appearance-none py-3 text-gray-400 hover:text-white"
                    >
                        {['mm','cm','m','pol'].map(u => <option key={u} value={u} className="bg-[#1e293b]">{u}</option>)}
                    </select>
                    <ChevronDown size={12} className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
                </div>
            </div>
        </div>
    );
};

export default MeasurementInput;