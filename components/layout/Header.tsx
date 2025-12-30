
import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Linkedin, Search, Phone, ChevronRight, Package, Calculator, FileText, Award, Mail, Layers, Settings, Box, Factory, Home, Menu, X, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../common/LanguageSwitcher';
import { NavLinks } from './NavLinks';
import WhatsappIcon from '../common/icons/WhatsappIcon';
import Logo from '../common/Logo';
import { SOCIAL_LINKS, NAV_LINKS, PRODUCT_CATEGORIES } from '../../lib/constants';
import CommandPalette from '../common/CommandPalette';
import { useRouter } from '../../hooks/useRouter';

const SOCIAL_ICONS: Record<string, any> = {
    facebook: Facebook,
    instagram: Instagram,
    linkedin: Linkedin,
};

// Grouping Logic for Mobile Menu
const MOBILE_PRODUCT_GROUPS = [
    {
        id: 'tubular',
        label: 'Tubulação & Linhas',
        icon: <Layers size={20} />,
        description: 'Tubos, Eletrodutos e Grooved',
        items: ['tubes', 'conduits', 'grooved']
    },
    {
        id: 'conexoes',
        label: 'Conexões & Válvulas',
        icon: <Settings size={20} />,
        description: 'Flanges, Conexões e Válvulas',
        items: ['flanges', 'fittings', 'valves']
    },
    {
        id: 'estrutural',
        label: 'Aço Estrutural & Civil',
        icon: <Box size={20} />,
        description: 'Perfis, Chapas, Grades e Telhas',
        items: ['profiles', 'plates', 'gratings', 'tiles', 'civil']
    },
    {
        id: 'industrial',
        label: 'Soluções Industriais',
        icon: <Factory size={20} />,
        description: 'Corte, Tanques e Caldeiraria',
        items: ['boilermaking', 'cutting', 'tanks']
    }
];

const Header: React.FC = () => {
    const { t } = useTranslation();
    const currentRoute = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    
    // Mobile Menu States
    const [activeProductGroup, setActiveProductGroup] = useState<string | null>(null);
    const [isProductsExpanded, setIsProductsExpanded] = useState(false);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setActiveProductGroup(null);
        setIsProductsExpanded(false);
    };

    const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setIsSearchOpen(true);
            }
            if (e.key === 'Escape' && isMobileMenuOpen) {
                closeMobileMenu();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isMobileMenuOpen]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMobileMenuOpen]);

    const navLinksData = NAV_LINKS.map(link => ({
        key: link.key,
        text: t(`header.navLinks.${link.key}`),
        href: link.href
    }));

    // Helper to check active state
    const isLinkActive = (href: string) => currentRoute === href || (currentRoute.startsWith(href) && href !== '#/');

    return (
        <>
            <header 
                className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-brand-blue-dark/95 backdrop-blur-md shadow-lg py-2' : 'bg-brand-blue-dark py-4'}`}
            >
                {/* Top Bar */}
                <div 
                    className={`
                        container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px] 
                        border-b border-white/10 
                        transition-all duration-300 ease-in-out
                        ${isScrolled 
                            ? 'h-0 overflow-hidden opacity-0 mb-0 pb-0 border-none' 
                            : 'h-auto opacity-100 mb-2 pb-2'
                        } 
                        flex justify-between items-center text-xs text-gray-300
                    `}
                >
                     <div className="flex items-center gap-4">
                        <a href="tel:1147972352" className="hover:text-brand-orange flex items-center gap-1 transition-colors">
                            <Phone size={12} /> (11) 4797-2352
                        </a>
                        <span className="hidden sm:inline opacity-50">|</span>
                        <span className="hidden sm:inline">Seg - Sex: 08:00 - 18:00</span>
                     </div>
                     <div className="flex items-center gap-4">
                        <nav aria-label="Redes sociais" className="hidden sm:block">
                            <ul className="flex items-center space-x-3">
                                {SOCIAL_LINKS.map((link) => {
                                    const Icon = SOCIAL_ICONS[link.key];
                                    return (
                                        <li key={link.key}>
                                            <a href={link.href} aria-label={link.key} className="hover:text-brand-orange transition-colors block">
                                                {Icon && <Icon size={14} aria-hidden="true" />}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                        <LanguageSwitcher />
                     </div>
                </div>

                {/* Main Header Content */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px] relative">
                    <div className="flex justify-between items-center gap-4">
                        {/* Logo */}
                        <a href="#/" aria-label="Aços Vital Home" className="flex-shrink-0 z-50 transition-transform hover:scale-105 origin-left">
                            <Logo className={isScrolled ? "h-[40px] md:h-[45px]" : "h-[50px] md:h-[60px]"} />
                        </a>
                        
                        {/* Desktop Nav */}
                        <div className="hidden lg:flex flex-1 justify-center px-2">
                            <NavLinks links={navLinksData} isScrolled={isScrolled} />
                        </div>
                        
                        {/* Actions */}
                        <div className="flex items-center gap-3 z-50 flex-shrink-0">
                            <button 
                                onClick={() => setIsSearchOpen(true)}
                                className="hidden lg:block p-2 text-white hover:text-brand-orange transition-colors rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-orange/50"
                                aria-label="Pesquisar (Ctrl+K)"
                                title="Pesquisar (Ctrl+K)"
                            >
                                <Search size={20} />
                            </button>

                            <a href="#" className="hidden lg:flex items-center bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white text-sm font-bold py-2.5 px-5 rounded-full transition-all shadow-lg hover:shadow-brand-whatsapp/30 transform hover:-translate-y-0.5 whitespace-nowrap">
                                <WhatsappIcon size={18} className="mr-2" />
                                <span className="hidden xl:inline">{t('header.whatsapp')}</span>
                                <span className="xl:hidden">WhatsApp</span>
                            </a>
                            
                            {/* Mobile Toggle Button */}
                            <div className="lg:hidden">
                                <button 
                                    onClick={toggleMobileMenu} 
                                    className="p-2 focus:outline-none text-white hover:text-brand-orange transition-colors relative z-50 group"
                                    aria-label={isMobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
                                >
                                    <div className="relative w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                                        <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                        <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                                        <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* --- PREMIUM MOBILE MENU OVERLAY --- */}
            <div 
                className={`
                    fixed inset-0 z-40 bg-brand-blue-dark/98 backdrop-blur-xl
                    flex flex-col h-[100dvh] w-screen overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
                `}
            >
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-blue-light/10 rounded-full blur-[80px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

                {/* Menu Header (Fixed) */}
                <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/5 relative z-10">
                     <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Menu Principal</span>
                     <div className="flex items-center gap-4">
                        <LanguageSwitcher />
                        {/* Dedicated Close Button */}
                        <button 
                            onClick={closeMobileMenu}
                            className="p-2 -mr-2 text-white/50 hover:text-white bg-white/5 hover:bg-brand-orange rounded-full transition-all duration-300"
                            aria-label="Fechar"
                        >
                            <X size={20} />
                        </button>
                     </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide px-6 py-6 relative z-10">
                    
                    {/* Search Bar */}
                    <div 
                        className="flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 mb-8 text-gray-300 active:bg-white/10 transition-colors cursor-text"
                        onClick={() => { closeMobileMenu(); setIsSearchOpen(true); }}
                    >
                        <Search size={20} className="mr-3 text-brand-orange" />
                        <span className="text-sm font-medium opacity-60">Buscar produtos, tabelas...</span>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-col gap-1">
                        {/* 1. HOME */}
                        <a 
                            href="#/" 
                            onClick={closeMobileMenu}
                            className={`flex items-center gap-4 p-4 rounded-xl transition-all ${isLinkActive('#/') ? 'bg-white/10 text-white' : 'text-gray-300 hover:bg-white/5'}`}
                        >
                            <Home size={20} className={isLinkActive('#/') ? 'text-brand-orange' : 'text-gray-500'} />
                            <span className="font-bold text-lg">Início</span>
                        </a>

                        {/* 2. INSTITUCIONAL */}
                        <a 
                            href="#/about" 
                            onClick={closeMobileMenu}
                            className={`flex items-center gap-4 p-4 rounded-xl transition-all ${isLinkActive('#/about') ? 'bg-white/10 text-white' : 'text-gray-300 hover:bg-white/5'}`}
                        >
                            <Award size={20} className={isLinkActive('#/about') ? 'text-brand-orange' : 'text-gray-500'} />
                            <span className="font-bold text-lg">Sobre a Empresa</span>
                        </a>

                        {/* 3. PRODUTOS (Accordion) */}
                        <div className="border-y border-white/5 my-2 py-2">
                            <button 
                                onClick={() => setIsProductsExpanded(!isProductsExpanded)}
                                className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${isProductsExpanded ? 'text-white' : 'text-gray-300'}`}
                            >
                                <div className="flex items-center gap-4">
                                    <Package size={20} className="text-brand-orange" />
                                    <span className="font-bold text-lg">Nossos Produtos</span>
                                </div>
                                <ChevronRight size={20} className={`transition-transform duration-300 ${isProductsExpanded ? 'rotate-90 text-brand-orange' : 'text-gray-500'}`} />
                            </button>

                            {/* Sub-Categories (Groups) */}
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isProductsExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="pl-4 pr-2 pb-4 space-y-3">
                                    {MOBILE_PRODUCT_GROUPS.map((group) => {
                                        const isActiveGroup = activeProductGroup === group.id;
                                        
                                        // Filter products for this group
                                        const groupProducts = PRODUCT_CATEGORIES.filter(prod => group.items.includes(prod.id));

                                        return (
                                            <div key={group.id} className="bg-white/5 rounded-lg overflow-hidden border border-white/5">
                                                <button 
                                                    onClick={() => setActiveProductGroup(isActiveGroup ? null : group.id)}
                                                    className="w-full flex items-center justify-between p-4 text-left"
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <div className={`mt-0.5 ${isActiveGroup ? 'text-brand-orange' : 'text-gray-400'}`}>
                                                            {group.icon}
                                                        </div>
                                                        <div>
                                                            <span className={`block font-bold text-sm ${isActiveGroup ? 'text-white' : 'text-gray-200'}`}>{group.label}</span>
                                                            <span className="block text-[10px] text-gray-500 mt-0.5">{group.description}</span>
                                                        </div>
                                                    </div>
                                                    <ChevronRight size={16} className={`transition-transform ${isActiveGroup ? 'rotate-90 text-brand-orange' : 'text-gray-600'}`} />
                                                </button>

                                                {/* Actual Products Links */}
                                                {isActiveGroup && (
                                                    <div className="bg-black/20 p-2 grid grid-cols-1 gap-1 animate-slide-in">
                                                        {groupProducts.map(prod => (
                                                            <a 
                                                                key={prod.id} 
                                                                href={prod.href}
                                                                onClick={closeMobileMenu}
                                                                className="flex items-center justify-between p-3 rounded-md hover:bg-white/5 transition-colors text-gray-300 hover:text-white group"
                                                            >
                                                                <span className="text-xs font-medium uppercase tracking-wide">
                                                                    {t(`productsPage.categories.${prod.id}`)}
                                                                </span>
                                                                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-brand-orange" />
                                                            </a>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                    
                                    <a 
                                        href="#/catalog" 
                                        onClick={closeMobileMenu}
                                        className="flex items-center justify-center gap-2 w-full p-4 mt-2 rounded-xl bg-brand-orange/10 border border-brand-orange/30 text-brand-orange font-bold text-xs uppercase tracking-wide hover:bg-brand-orange hover:text-white transition-all"
                                    >
                                        <FileText size={16} /> Baixar Catálogo Completo
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 4. TOOLS */}
                        <a 
                            href="#/calculator" 
                            onClick={closeMobileMenu}
                            className={`flex items-center gap-4 p-4 rounded-xl transition-all ${isLinkActive('#/calculator') ? 'bg-white/10 text-white' : 'text-gray-300 hover:bg-white/5'}`}
                        >
                            <Calculator size={20} className={isLinkActive('#/calculator') ? 'text-brand-orange' : 'text-gray-500'} />
                            <div className="flex flex-col">
                                <span className="font-bold text-lg">Calculadora de Aço</span>
                                <span className="text-[10px] text-gray-500 uppercase font-bold">Ferramenta</span>
                            </div>
                        </a>

                        <a 
                            href="#/tables" 
                            onClick={closeMobileMenu}
                            className={`flex items-center gap-4 p-4 rounded-xl transition-all ${isLinkActive('#/tables') ? 'bg-white/10 text-white' : 'text-gray-300 hover:bg-white/5'}`}
                        >
                            <FileText size={20} className={isLinkActive('#/tables') ? 'text-brand-orange' : 'text-gray-500'} />
                            <div className="flex flex-col">
                                <span className="font-bold text-lg">Tabelas Técnicas</span>
                                <span className="text-[10px] text-gray-500 uppercase font-bold">Normas & Medidas</span>
                            </div>
                        </a>
                        
                         <a 
                            href="#/contact" 
                            onClick={closeMobileMenu}
                            className={`flex items-center gap-4 p-4 rounded-xl transition-all ${isLinkActive('#/contact') ? 'bg-white/10 text-white' : 'text-gray-300 hover:bg-white/5'}`}
                        >
                            <Mail size={20} className={isLinkActive('#/contact') ? 'text-brand-orange' : 'text-gray-500'} />
                            <span className="font-bold text-lg">Fale Conosco</span>
                        </a>

                    </nav>
                </div>

                {/* Footer (Fixed) */}
                <div className="p-6 border-t border-white/10 bg-black/20 backdrop-blur-md relative z-20">
                     <a 
                        href="#" 
                        onClick={closeMobileMenu} 
                        className="flex w-full items-center justify-center gap-3 bg-[#25D366] text-white py-3.5 rounded-xl font-bold text-base shadow-[0_0_20px_rgba(37,211,102,0.2)] active:scale-95 transition-all mb-6"
                    >
                        <WhatsappIcon size={20} />
                        Atendimento WhatsApp
                    </a>
                    
                    <div className="flex justify-between items-end">
                        <div className="flex gap-6">
                             {SOCIAL_LINKS.map((link) => {
                                const Icon = SOCIAL_ICONS[link.key];
                                return (
                                    <a key={link.key} href={link.href} className="text-gray-500 hover:text-brand-orange transition-colors">
                                        {Icon && <Icon size={20} />}
                                    </a>
                                );
                            })}
                        </div>
                        <div className="text-right">
                             <p className="text-[10px] text-gray-600 font-bold uppercase">© Aços Vital</p>
                        </div>
                    </div>
                </div>
            </div>

            <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
};

export default Header;
