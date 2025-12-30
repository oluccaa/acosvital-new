
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

    // Helper to get display language (first 2 chars)
    const currentLang = i18n.language ? i18n.language.substring(0, 2).toUpperCase() : 'PT';

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setIsLangDropdownOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center space-x-1 text-sm text-white hover:text-brand-orange"
                aria-haspopup="true"
                aria-expanded={isLangDropdownOpen}
                aria-label="Selecionar idioma"
            >
                <Globe size={16} aria-hidden="true" />
                <span>{currentLang}</span>
                <ChevronDown
                    size={16}
                    aria-hidden="true"
                    className={`transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`}
                />
            </button>
            
            {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-50" role="menu">
                    <ul className="py-1 text-gray-700">
                        <li>
                            <button
                                onClick={() => changeLanguage('pt')}
                                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                role="menuitem"
                            >
                                Português
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => changeLanguage('en')}
                                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                role="menuitem"
                            >
                                English
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => changeLanguage('es')}
                                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                role="menuitem"
                            >
                                Español
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
