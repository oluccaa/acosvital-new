import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Linkedin, Menu, X, Search, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../common/LanguageSwitcher';
import { NavLinks } from './NavLinks';
import WhatsappIcon from '../common/icons/WhatsappIcon';
import Logo from '../common/Logo';
import { SOCIAL_LINKS, NAV_LINKS } from '../../lib/constants';
import CommandPalette from '../common/CommandPalette';

const SOCIAL_ICONS: Record<string, any> = {
    facebook: Facebook,
    instagram: Instagram,
    linkedin: Linkedin,
};

const Header: React.FC = () => {
    const { t } = useTranslation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    
    const closeMobileMenu = () => setIsMobileMenuOpen(false);
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
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const navLinksData = NAV_LINKS.map(link => ({
        key: link.key,
        text: t(`header.navLinks.${link.key}`),
        href: link.href
    }));

    return (
        <>
            <header 
                className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-brand-blue-dark/95 backdrop-blur-md shadow-lg py-2' : 'bg-brand-blue-dark py-4'}`}
            >
                {/* Top Bar - Hidden on Scroll */}
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
                        <a href="#/" aria-label="Aços Vital Home" className="flex-shrink-0 z-10 transition-transform hover:scale-105 origin-left">
                            <Logo className={isScrolled ? "h-[40px] md:h-[45px]" : "h-[50px] md:h-[60px]"} />
                        </a>
                        
                        {/* Desktop Nav */}
                        <div className="hidden lg:flex flex-1 justify-center px-2">
                            <NavLinks links={navLinksData} isScrolled={isScrolled} />
                        </div>
                        
                        {/* Actions */}
                        <div className="flex items-center gap-3 z-10 flex-shrink-0">
                            {/* Search Trigger */}
                            <button 
                                onClick={() => setIsSearchOpen(true)}
                                className="p-2 text-white hover:text-brand-orange transition-colors rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-orange/50"
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
                            
                            {/* Mobile Toggle */}
                            <div className="lg:hidden">
                                <button 
                                    onClick={toggleMobileMenu} 
                                    className="p-2 focus:outline-none text-white hover:text-brand-orange transition-colors"
                                    aria-label={isMobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
                                >
                                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Mobile Drawer */}
                <div className={`fixed inset-0 top-[70px] bg-brand-blue-dark/98 z-30 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
                    <div className="h-full overflow-y-auto pb-20">
                        <nav className="container mx-auto px-6 py-8 flex flex-col space-y-6">
                            <NavLinks 
                                className="flex-col items-start w-full" 
                                links={navLinksData} 
                                onLinkClick={closeMobileMenu} 
                                isMobile={true} 
                            />
                            
                            <hr className="border-white/10" />
                            
                            <a href="#" onClick={closeMobileMenu} className="flex w-full justify-center items-center bg-brand-whatsapp text-white text-sm font-bold py-4 px-4 rounded-xl hover:bg-brand-whatsapp-dark transition-colors shadow-lg">
                                <WhatsappIcon size={20} className="mr-2" />
                                Falar no WhatsApp
                            </a>

                            <div className="flex justify-center gap-6 pt-4">
                                {SOCIAL_LINKS.map((link) => {
                                    const Icon = SOCIAL_ICONS[link.key];
                                    return (
                                        <a key={link.key} href={link.href} className="text-gray-400 hover:text-brand-orange transition-colors">
                                            {Icon && <Icon size={24} />}
                                        </a>
                                    );
                                })}
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
};

export default Header;