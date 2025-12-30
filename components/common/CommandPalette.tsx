import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ChevronRight, Package, Calculator, FileText, ArrowRight } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../../lib/constants';
import { useTranslation } from 'react-i18next';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  // Mock Search Data Structure
  const searchData = [
    // Products
    ...PRODUCT_CATEGORIES.map(cat => ({
      type: 'product',
      title: t(`productsPage.categories.${cat.id}`),
      href: cat.href,
      icon: <Package size={18} />
    })),
    // Tools
    { type: 'tool', title: t('calculatorPage.tabs.calculator'), href: '#/calculator', icon: <Calculator size={18} /> },
    { type: 'tool', title: t('calculatorPage.tabs.nesting'), href: '#/calculator', icon: <Calculator size={18} /> },
    { type: 'tool', title: t('calculatorPage.tabs.welding'), href: '#/calculator', icon: <Calculator size={18} /> },
    // Tables (Generic link for now)
    { type: 'table', title: t('header.navLinks.tables'), href: '#/tables', icon: <FileText size={18} /> },
  ];

  const filteredResults = searchData.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden animate-fade-in-scale ring-1 ring-black/5">
        
        {/* Header / Search Input */}
        <div className="flex items-center px-4 py-4 border-b border-gray-100">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent border-none outline-none text-lg text-gray-800 placeholder-gray-400"
            placeholder="O que você procura? (ex: Tubos, Flanges, Calculadora...)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="p-1 rounded-md hover:bg-gray-100 text-gray-400 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto py-2">
          {filteredResults.length > 0 ? (
            <div className="px-2">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 py-2">Sugestões</p>
              {filteredResults.map((result, idx) => (
                <a
                  key={idx}
                  href={result.href}
                  onClick={onClose}
                  className="flex items-center justify-between px-3 py-3 rounded-lg hover:bg-brand-blue-light/5 hover:text-brand-blue-dark group transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3 text-gray-600 group-hover:text-brand-blue-dark">
                    <div className={`p-2 rounded-md ${
                        result.type === 'product' ? 'bg-orange-100 text-brand-orange' :
                        result.type === 'tool' ? 'bg-blue-100 text-brand-blue-light' :
                        'bg-gray-100 text-gray-500'
                    }`}>
                      {result.icon}
                    </div>
                    <span className="font-medium">{result.title}</span>
                  </div>
                  <ChevronRight size={16} className="text-gray-300 group-hover:text-brand-orange opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center text-gray-400">
              <p>Nenhum resultado encontrado para "{query}"</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-4 py-3 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400">
          <div className="flex gap-4">
             <span><span className="font-bold bg-white border border-gray-200 px-1.5 py-0.5 rounded text-gray-600">↑↓</span> para navegar</span>
             <span><span className="font-bold bg-white border border-gray-200 px-1.5 py-0.5 rounded text-gray-600">Enter</span> para selecionar</span>
             <span><span className="font-bold bg-white border border-gray-200 px-1.5 py-0.5 rounded text-gray-600">Esc</span> para fechar</span>
          </div>
          <div className="flex items-center gap-1">
             Aços Vital <div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;