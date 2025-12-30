import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../common/LanguageSwitcher';
import { NavLinks } from './NavLinks';
import WhatsappIcon from '../common/icons/WhatsappIcon';
import Logo from '../common/Logo';
import { SOCIAL_LINKS, NAV_LINKS } from '../../lib/constants';

const SOCIAL_ICONS: Record<string, any> = {
    facebook: Facebook,
    instagram: Instagram,
    linkedin: Linkedin,
};

const Header: React.FC = () => {
    const { t } = useTranslation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const closeMobileMenu = () => setIsMobileMenuOpen(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

    // Map constants to structure expected by NavLinks
    const navLinksData = NAV_LINKS.map(link => ({
        text: t(`header.navLinks.${link.key}`),
        href: link.href
    }));

    return (
        <header className="bg-brand-blue-dark relative z-50 shadow-md">
            {/* Top Bar */}
            <div className="border-b border-gray-700">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2 text-white">
                    {/* Social Links Nav */}
                    <nav aria-label="Redes sociais">
                        <ul className="flex items-center space-x-4">
                            {SOCIAL_LINKS.map((link) => {
                                const Icon = SOCIAL_ICONS[link.key];
                                return (
                                    <li key={link.key}>
                                        <a 
                                            href={link.href} 
                                            aria-label={link.key} 
                                            className="hover:text-brand-orange transition-colors block"
                                        >
                                            {Icon && <Icon size={16} aria-hidden="true" />}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <LanguageSwitcher />
                </div>
            </div>

            {/* Main Header */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex justify-between items-center py-4">
                    {/* Logo - Left */}
                    <a href="#/" aria-label="Aços Vital Home" className="flex-shrink-0 z-10">
                        <Logo />
                    </a>
                    
                    {/* Desktop Navigation - Absolute Center */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full justify-center pointer-events-none">
                        <div className="pointer-events-auto">
                            <NavLinks links={navLinksData} />
                        </div>
                    </div>
                    
                    {/* Right Side: WhatsApp + Mobile Menu Button */}
                    <div className="flex items-center gap-4 z-10">
                        <a href="#" className="hidden lg:flex items-center bg-brand-whatsapp text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-brand-whatsapp-dark transition-colors">
                            <WhatsappIcon size={16} className="mr-2" />
                            {t('header.whatsapp')}
                        </a>
                        
                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button 
                                onClick={toggleMobileMenu} 
                                aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                                aria-controls="mobile-menu"
                                aria-expanded={isMobileMenuOpen}
                                className="p-1 focus:outline-none focus:ring-2 focus:ring-brand-orange rounded"
                            >
                                {isMobileMenuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Mobile Menu */}
             {isMobileMenuOpen && (
                <div id="mobile-menu" className="lg:hidden bg-brand-blue-dark border-t border-gray-700 pb-6 animate-slide-in">
                    <nav className="container mx-auto px-6 sm:px-12 lg:px-24 flex flex-col items-center space-y-4 pt-4" aria-label="Navegação móvel">
                        <NavLinks className="items-center" links={navLinksData} onLinkClick={closeMobileMenu} />
                         <a href="#" onClick={closeMobileMenu} className="flex w-full justify-center items-center bg-brand-whatsapp text-white text-sm font-bold py-3 px-4 rounded-md hover:bg-brand-whatsapp-dark transition-colors mt-4">
                            <WhatsappIcon size={16} className="mr-2" />
                            {t('header.whatsapp')}
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;