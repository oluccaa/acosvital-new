import React, { useState } from 'react';
import { useRouter } from '../../hooks/useRouter';
import { ChevronDown, ArrowRight, FileText } from 'lucide-react';
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
  isMobile?: boolean;
}

export const NavLinks: React.FC<NavLinksProps> = ({ className = '', links, onLinkClick, isMobile = false }) => {
    const currentHash = useRouter();
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

    const isActive = (href: string): boolean => {
        if (href === '#/') {
            return currentHash === '' || currentHash === '#/';
        }
        return currentHash.startsWith(href);
    };

    const handleMobileToggle = (key: string | undefined, e: React.MouseEvent) => {
        if (isMobile && key === 'products') {
            e.preventDefault();
            setMobileExpanded(mobileExpanded === key ? null : key);
        } else if (onLinkClick) {
            onLinkClick();
        }
    };

    return (
        <nav 
            className={`flex ${isMobile ? 'flex-col space-y-2 w-full' : 'flex-row items-center space-x-1'} ${className}`}
            onMouseLeave={() => !isMobile && setHoveredLink(null)}
        >
             {links.map((link) => {
                 const active = isActive(link.href);
                 const isProducts = link.key === 'products';
                 const isMegaMenuOpen = !isMobile && isProducts && hoveredLink === 'products';
                 const isMobileAccordionOpen = isMobile && isProducts && mobileExpanded === 'products';

                 return (
                    <div 
                        key={link.href} 
                        className={`relative group ${isMobile ? 'w-full' : ''}`}
                        onMouseEnter={() => !isMobile && setHoveredLink(link.key || null)}
                    >
                        <a 
                            href={link.href} 
                            onClick={(e) => handleMobileToggle(link.key, e)}
                            aria-current={active ? 'page' : undefined}
                            className={`
                                relative px-4 py-4 lg:py-6 flex items-center justify-between lg:justify-start gap-1 text-sm font-bold tracking-wide transition-all duration-300
                                ${isMobile ? 'w-full border-b border-white/5 hover:bg-white/5 rounded-lg' : ''}
                                ${active ? 'text-brand-orange' : 'text-gray-300 hover:text-white'}
                            `}
                        >
                            <span className="flex items-center gap-2">
                                {link.text}
                            </span>
                            {isProducts && (
                                <ChevronDown 
                                    size={14} 
                                    className={`transition-transform duration-300 ${isMegaMenuOpen || isMobileAccordionOpen ? 'rotate-180 text-brand-orange' : ''}`} 
                                />
                            )}
                            
                            {/* Desktop Hover Underline */}
                            {!isMobile && (
                                <span className={`absolute bottom-4 left-4 right-4 h-0.5 bg-brand-orange transform origin-left transition-transform duration-300 ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                            )}
                        </a>

                        {/* DESKTOP MEGA MENU */}
                        {!isMobile && isProducts && (
                            <div 
                                className={`
                                    absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-6xl 
                                    bg-white rounded-xl shadow-2xl border-t-4 border-brand-orange 
                                    transition-all duration-300 origin-top z-50 overflow-hidden
                                    ${isMegaMenuOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'}
                                `}
                                style={{ marginTop: '-10px' }}
                            >
                                <div className="flex">
                                    {/* Sidebar */}
                                    <div className="w-1/4 bg-gray-50 p-6 border-r border-gray-100">
                                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Categorias</h4>
                                        <ul className="space-y-2">
                                            {PRODUCT_CATEGORIES.slice(0, 6).map((cat) => (
                                                <li key={cat.id}>
                                                    <a href={cat.href} onClick={() => setHoveredLink(null)} className="block text-gray-700 hover:text-brand-orange hover:bg-white px-3 py-2 rounded-lg transition-colors text-sm font-medium border border-transparent hover:border-gray-100 shadow-sm hover:shadow-md">
                                                        {cat.id.charAt(0).toUpperCase() + cat.id.slice(1).replace('_', ' ')}
                                                    </a>
                                                </li>
                                            ))}
                                            <li>
                                                <a href="#/products" onClick={() => setHoveredLink(null)} className="flex items-center gap-2 text-brand-orange font-bold text-sm mt-4 px-3 hover:underline">
                                                    Ver Todos <ArrowRight size={14} />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Main Grid */}
                                    <div className="w-3/4 p-8">
                                        <div className="flex justify-between items-end mb-6">
                                            <div>
                                                <h3 className="text-xl font-bold text-brand-blue-dark">Nossos Produtos</h3>
                                                <p className="text-sm text-gray-500">Soluções completas em aço para sua indústria.</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-4 gap-4">
                                            {PRODUCT_CATEGORIES.slice(0, 4).map((cat) => (
                                                <a key={cat.id} href={cat.href} onClick={() => setHoveredLink(null)} className="group/card flex flex-col items-center text-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100">
                                                    <div className="w-16 h-16 rounded-full bg-white border border-gray-200 p-1 shadow-sm group-hover/card:border-brand-orange group-hover/card:shadow-md transition-all">
                                                        <img src={cat.imageUrl} alt={cat.id} className="w-full h-full object-cover rounded-full" />
                                                    </div>
                                                    <span className="text-sm font-bold text-gray-700 group-hover/card:text-brand-orange transition-colors">
                                                        {cat.id.toUpperCase()}
                                                    </span>
                                                </a>
                                            ))}
                                        </div>
                                        <div className="mt-8 bg-brand-blue-dark/5 rounded-lg p-4 flex items-center justify-between border border-brand-blue-dark/10">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-brand-blue-dark text-white p-2 rounded-lg"><FileText size={20} /></div>
                                                <div>
                                                    <p className="text-sm font-bold text-brand-blue-dark">Catálogo Digital Completo</p>
                                                    <p className="text-xs text-gray-500">Baixe nosso PDF técnico.</p>
                                                </div>
                                            </div>
                                            <a href="#/catalog" onClick={() => setHoveredLink(null)} className="text-xs font-bold bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all shadow-sm">Acessar</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* MOBILE ACCORDION */}
                        {isMobile && isProducts && (
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isMobileAccordionOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="bg-black/20 rounded-lg mt-2 p-2 space-y-1 border-l-2 border-brand-orange ml-4">
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider px-3 py-2">Categorias</p>
                                    {PRODUCT_CATEGORIES.map((cat) => (
                                        <a 
                                            key={cat.id} 
                                            href={cat.href} 
                                            onClick={onLinkClick}
                                            className="block text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-md text-sm transition-colors flex items-center justify-between group/link"
                                        >
                                            {cat.id.charAt(0).toUpperCase() + cat.id.slice(1).replace('_', ' ')}
                                            <ArrowRight size={14} className="opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all text-brand-orange" />
                                        </a>
                                    ))}
                                    <a href="#/catalog" onClick={onLinkClick} className="block mt-2 text-center bg-brand-orange/10 text-brand-orange hover:bg-brand-orange hover:text-white py-3 rounded-lg text-xs font-bold uppercase transition-all">
                                        Baixar Catálogo PDF
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </nav>
    );
};