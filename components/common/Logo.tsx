import React from 'react';
import { ASSETS } from '../../lib/media';

interface LogoProps {
    className?: string;
}

/**
 * Reusable Logo Component
 * Centralizes the logo image source and default alt text.
 */
const Logo: React.FC<LogoProps> = ({ className = "h-[3.85rem]" }) => (
    <div className="flex items-center">
        <img 
            src={ASSETS.LOGO} 
            alt="Aços Vital Logo" 
            className={`w-auto object-contain ${className}`}
            loading="eager" // Logo should always load immediately
        />
    </div>
);

export default Logo;