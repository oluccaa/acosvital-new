import React from 'react';
import { HelpCircle } from 'lucide-react';

interface TooltipProps {
    text: string;
    className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text, className = "" }) => {
    return (
        <div className={`group relative inline-flex items-center ml-1.5 cursor-help ${className}`}>
            <HelpCircle size={12} className="text-gray-500 hover:text-brand-orange transition-colors" />
            
            {/* Tooltip Content */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-gray-900 text-white text-[10px] leading-tight rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none text-center border border-white/10">
                {text}
                {/* Seta do Tooltip */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
            </div>
        </div>
    );
};

export default Tooltip;