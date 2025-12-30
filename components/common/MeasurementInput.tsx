
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
    forceUnit?: ForcedUnit;
    onFocus?: () => void;
    isActiveField?: boolean;
}

const MeasurementInput: React.FC<MeasurementInputProps> = ({
    value, onChange, label, placeholder = "0.00", isAuto = false, hasError = false, helpText, className = "", forceUnit, onFocus, isActiveField
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

    const [displayValue, setDisplayValue] = useState<string>('');
    const [isFocused, setIsFocused] = useState(false);
    const lastEmittedValue = useRef<string>(value);

    // Effect: Handle forced unit change
    useEffect(() => {
        if (forceUnit) {
            setUnit(forceUnit.unit);
            // Immediately update display value based on current 'value' (mm) and new unit
            // This fixes the issue where unit changes but number stays "mm" visually until blur
            if (value) {
                setDisplayValue(convertFromMm(value, forceUnit.unit));
            }
        }
    }, [forceUnit, value]);

    // Effect: Sync display value when external value changes (and we are NOT typing)
    useEffect(() => {
        if (value !== lastEmittedValue.current) {
             if (!isFocused) {
                 setDisplayValue(value ? convertFromMm(value, unit) : '');
             }
             lastEmittedValue.current = value;
        }
    }, [value, unit, isFocused]);

    const parseInput = (input: string): number | null => {
        if (!input) return null;
        let clean = input.trim();
        
        // Handle fractions (1/2, 1 1/2)
        if (clean.includes('/')) {
            try {
                clean = clean.replace('-', ' '); // "1-1/2" -> "1 1/2"
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

        // Standard number parsing (pt-BR allows comma)
        // Convert 1.200,50 -> 1200.50 (if user types that way)
        // Or simple 1,5 -> 1.5
        clean = clean.replace(/\./g, '').replace(',', '.');
        const num = parseFloat(clean);
        return isNaN(num) ? null : num;
    };

    const handleInputChange = (text: string) => {
        setDisplayValue(text); // Always update UI immediately
        
        const num = parseInput(text);
        
        if (num !== null) {
            // Convert displayed value (in current unit) back to mm for the parent
            const mmValue = num * factors[unit];
            const mmString = mmValue.toFixed(4).replace('.', ','); 
            
            lastEmittedValue.current = mmString;
            onChange(mmString);
        } else if (text === '') {
            lastEmittedValue.current = '';
            onChange('');
        }
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        if (onFocus) onFocus();
        e.target.select(); // Auto-select text on focus (Senior UX)
    };

    return (
        <div className={`relative group ${className}`}>
            <div className="flex justify-between items-center mb-0.5">
                <label className={`text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors ${hasError ? 'text-red-400' : isAuto ? 'text-brand-orange' : isActiveField ? 'text-brand-orange' : 'text-gray-400'}`}>
                    {label.replace(/\(mm\)/gi, ``)}
                    {isAuto && <Wand2 size={10} className="text-brand-orange animate-pulse" />}
                    {helpText && <Tooltip text={helpText} />}
                </label>
            </div>

            <div className={`
                flex items-center bg-[#1e293b] border rounded transition-all h-8 
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
                
                <div className="relative h-full border-l border-white/5 flex items-center bg-white/5">
                    <select 
                        value={unit} 
                        onChange={e => {
                            const newUnit = e.target.value as MeasurementUnit;
                            setUnit(newUnit);
                            // When changing unit manually, re-convert the displayed value to match
                            if (value) {
                                setDisplayValue(convertFromMm(value, newUnit));
                            }
                        }} 
                        className="h-full bg-transparent pl-1.5 pr-3 text-[9px] font-bold uppercase cursor-pointer outline-none appearance-none text-gray-400 hover:text-white transition-colors"
                    >
                        {['mm','cm','m','pol'].map(u => <option key={u} value={u} className="bg-[#1e293b] text-gray-300">{u}</option>)}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default MeasurementInput;
