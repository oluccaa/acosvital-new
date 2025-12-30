
import React, { useState } from 'react';
import { useRouter } from '../../hooks/useRouter';
import { ChevronDown, ArrowRight, FileText, Layers, Box, Settings, Factory, ShieldCheck, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../../lib/constants';

export interface NavLinkData {
    key?: string;
    text: string;
    href: string;
}

interface NavLinksProps {
  className?: string;
  links: NavLinkData[];
  onLinkClick?: () => void;
  isMobile?: boolean; // Kept for interface compatibility but ignored for layout logic now
  isScrolled?: boolean;
}

// Grouping logic for the Mega Menu (Desktop Only now)
const PRODUCT_GROUPS = [
    {
        id: 'tubular',
        label: 'Tubulação & Linhas',
        icon: <Layers size={18} />,
        description: 'Tubos, Eletrodutos e conexões ranhuradas.',
        items: ['tubes', 'conduits', 'grooved']
    },
    {
        id: 'conexoes',
        label: 'Conexões & Flanges',
        icon: <Settings size={18} />,
        description: 'Soluções para união e vedação de sistemas.',
        items: ['flanges', 'fittings', 'valves']
    },
    {
        id: 'estrutural',
        label: 'Aço Estrutural',
        icon: <Box size={18} />,
        description: 'Perfis, Chapas e soluções para construção.',
        items: ['profiles', 'plates', 'gratings', 'tiles', 'civil']
    },
    {
        id: 'industrial',
        label: 'Soluções Industriais',
        icon: <Factory size={18} />,
        description: 'Serviços de corte, tanques e caldeiraria.',
        items: ['boilermaking', 'cutting', 'tanks']
    }
];

export const NavLinks: React.FC<NavLinksProps> = ({ className = '', links, onLinkClick, isMobile = false, isScrolled = false }) => {
    const currentHash = useRouter();
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [activeGroup, setActiveGroup] = useState<string>('tubular'); // Default group

    const isActive = (href: string): boolean => {
        if (href === '#/') {
            return currentHash === '' || currentHash === '#/';
        }
        return currentHash.startsWith(href);
    };

    // Filter products based on active group
    const currentGroupProducts = PRODUCT_CATEGORIES.filter(prod => 
        PRODUCT_GROUPS.find(g => g.id === activeGroup)?.items.includes(prod.id)
    );

    // If mobile, render nothing (handled by Header.tsx now for better control)
    if (isMobile) return null;

    return (
        <nav 
            className={`flex flex-row items-center space-x-1 ${className}`}
            onMouseLeave={() => setHoveredLink(null)}
        >
             {links.map((link) => {
                 const active = isActive(link.href);
                 const isProducts = link.key === 'products';
                 const isMegaMenuOpen = isProducts && hoveredLink === 'products';

                 return (
                    <div 
                        key={link.href} 
                        className="relative group"
                        onMouseEnter={() => setHoveredLink(link.key || null)}
                    >
                        <a 
                            href={link.href} 
                            onClick={onLinkClick}
                            aria-current={active ? 'page' : undefined}
                            className={`
                                relative flex items-center justify-start gap-1 transition-all duration-300 whitespace-nowrap
                                px-3 py-4 lg:py-6 text-sm font-bold tracking-wide text-gray-300 hover:text-white
                                ${active ? 'text-brand-orange' : ''}
                            `}
                        >
                            <span className="flex items-center gap-1.5">
                                {link.text}
                            </span>
                            {isProducts && (
                                <ChevronDown 
                                    size={14} 
                                    className={`transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180 text-brand-orange' : ''}`} 
                                />
                            )}
                            
                            {/* Hover Underline */}
                            <span className={`absolute bottom-4 left-3 right-3 h-0.5 bg-brand-orange transform origin-left transition-transform duration-300 ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                        </a>

                        {/* =================================================================================
                           DESKTOP MEGA MENU - PREMIUM LAYOUT
                           ================================================================================= */}
                        {isProducts && (
                            <div 
                                className={`
                                    fixed left-0 right-0 mx-auto w-[90vw] max-w-6xl 
                                    bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border-t-4 border-brand-orange 
                                    transition-all duration-300 origin-top z-50 overflow-hidden ring-1 ring-black/5
                                    ${isScrolled ? 'top-[65px]' : 'top-[125px]'}
                                    ${isMegaMenuOpen ? 'opacity-100 scale-100 visible translate-y-0' : 'opacity-0 scale-95 invisible -translate-y-4 pointer-events-none'}
                                `}
                            >
                                <div className="flex h-[480px]">
                                    
                                    {/* COL 1: CATEGORY NAVIGATION (SIDEBAR) */}
                                    <div className="w-1/4 bg-gray-50/80 border-r border-gray-100 p-4 flex flex-col gap-2">
                                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 py-2">
                                            Departamentos
                                        </div>
                                        {PRODUCT_GROUPS.map((group) => (
                                            <button
                                                key={group.id}
                                                onMouseEnter={() => setActiveGroup(group.id)}
                                                className={`
                                                    text-left px-4 py-4 rounded-xl transition-all duration-200 group/btn flex items-start gap-3
                                                    ${activeGroup === group.id 
                                                        ? 'bg-white shadow-md text-brand-blue-dark border border-gray-100' 
                                                        : 'text-gray-500 hover:bg-gray-200/50 hover:text-gray-800'
                                                    }
                                                `}
                                            >
                                                <div className={`mt-0.5 ${activeGroup === group.id ? 'text-brand-orange' : 'text-gray-400 group-hover/btn:text-gray-600'}`}>
                                                    {group.icon}
                                                </div>
                                                <div>
                                                    <span className="block font-bold text-sm leading-none mb-1">{group.label}</span>
                                                    <span className="block text-[10px] opacity-70 font-medium">{group.description}</span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>

                                    {/* COL 2: DYNAMIC PRODUCT GRID */}
                                    <div className="w-2/4 p-8 bg-white overflow-y-auto custom-scrollbar">
                                        <div className="flex justify-between items-end mb-6 border-b border-gray-100 pb-4">
                                            <div>
                                                <h3 className="text-lg font-bold text-brand-blue-dark">
                                                    {PRODUCT_GROUPS.find(g => g.id === activeGroup)?.label}
                                                </h3>
                                                <p className="text-xs text-gray-500">Selecione um produto para ver detalhes técnicos.</p>
                                            </div>
                                            <a href="#/products" className="text-xs font-bold text-brand-orange hover:underline flex items-center gap-1">
                                                Ver Todos <ArrowRight size={12} />
                                            </a>
                                        </div>
                                        
                                        <div className="grid grid-cols-2 gap-4">
                                            {currentGroupProducts.map((cat) => (
                                                <a 
                                                    key={cat.id} 
                                                    href={cat.href} 
                                                    onClick={() => setHoveredLink(null)} 
                                                    className="group/card flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100 hover:shadow-sm"
                                                >
                                                    <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gray-100 p-0.5 overflow-hidden border border-gray-200 group-hover/card:border-brand-orange/30 transition-colors">
                                                        <img src={cat.imageUrl} alt={cat.id} className="w-full h-full object-cover rounded-md" />
                                                    </div>
                                                    <div>
                                                        <span className="block text-sm font-bold text-gray-700 group-hover/card:text-brand-orange transition-colors">
                                                            {cat.id.replace(/_/g, ' ').toUpperCase()}
                                                        </span>
                                                        <span className="text-[10px] text-gray-400 group-hover/card:text-gray-500">
                                                            Ver especificações
                                                        </span>
                                                    </div>
                                                    <ChevronRightIcon size={16} className="ml-auto text-gray-300 group-hover/card:text-brand-orange opacity-0 group-hover/card:opacity-100 transition-all transform group-hover/card:translate-x-1" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    {/* COL 3: HIGHLIGHT / CATALOG */}
                                    <div className="w-1/4 bg-brand-blue-dark p-8 flex flex-col justify-between relative overflow-hidden">
                                        {/* Background Decoration */}
                                        <div className="absolute top-0 right-0 w-40 h-40 bg-brand-orange rounded-full blur-[80px] opacity-20 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
                                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-blue-light rounded-full blur-[60px] opacity-20 pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

                                        <div className="relative z-10">
                                            <div className="inline-flex p-3 rounded-xl bg-white/10 text-brand-orange mb-6 shadow-inner border border-white/5">
                                                <FileText size={24} />
                                            </div>
                                            <h4 className="text-xl font-bold text-white mb-2">Catálogo Técnico Completo</h4>
                                            <p className="text-sm text-blue-100/80 leading-relaxed">
                                                Tenha acesso a todas as tabelas de medidas, normas e especificações em um único documento PDF.
                                            </p>
                                        </div>

                                        <div className="relative z-10 space-y-3">
                                            <div className="flex items-center gap-2 text-xs text-gray-400">
                                                <ShieldCheck size={14} className="text-green-400" />
                                                <span>Atualizado 2025</span>
                                            </div>
                                            <a 
                                                href="#/catalog" 
                                                onClick={() => setHoveredLink(null)} 
                                                className="flex items-center justify-between w-full bg-brand-orange text-white text-sm font-bold py-3.5 px-5 rounded-xl hover:bg-white hover:text-brand-orange transition-all duration-300 shadow-lg group/cta"
                                            >
                                                <span>Baixar Agora</span>
                                                <ArrowRight size={16} className="group-hover/cta:translate-x-1 transition-transform" />
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </nav>
    );
};
