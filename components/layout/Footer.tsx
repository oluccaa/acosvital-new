
import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Logo from '../common/Logo';
import { NAV_LINKS } from '../../lib/constants';

interface SocialLink {
    icon: React.ReactElement;
    name: string;
    href: string;
}

const Footer: React.FC = () => {
    const { t } = useTranslation();

    const socialLinks: SocialLink[] = [
        { icon: <Facebook />, name: "Facebook", href: "#" },
        { icon: <Instagram />, name: "Instagram", href: "#" },
        { icon: <Linkedin />, name: "LinkedIn", href: "#" },
        { icon: <Youtube />, name: "YouTube", href: "#" },
    ];

    return (
        <footer className="bg-brand-midnight text-white pt-16 md:pt-20 pb-12">
            {/* Main Footer Content */}
            <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1920px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 items-start">
                    
                    {/* Column 1: Identity (Left) */}
                    <div className="space-y-6">
                        <a href="#/" aria-label="Voltar ao topo" className="block">
                            <Logo className="h-[60px] w-auto" />
                        </a>
                        <p className="text-gray-300 font-bold text-lg md:text-xl max-w-sm">{t('footer.slogan')}</p>
                    </div>

                    {/* Column 2: Navigation (Center) */}
                    <nav aria-labelledby="footer-pages-title" className="md:mx-auto">
                        <h4 id="footer-pages-title" className="font-bold text-lg mb-6 text-white">{t('footer.pagesTitle')}</h4>
                        <ul className="space-y-3">
                            {NAV_LINKS.map(page => (
                                <li key={page.key}>
                                    <a href={page.href} className="text-gray-300 hover:text-white transition-colors text-sm uppercase">
                                        {t(`header.navLinks.${page.key}`)}
                                    </a>
                                </li>
                            ))}
                             <li>
                                <a href="#/privacy" className="text-gray-300 hover:text-brand-orange transition-colors text-sm uppercase font-semibold">
                                    {t('footer.privacyPolicy')}
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Column 3: Social (Right) */}
                     <nav aria-labelledby="footer-social-title" className="md:ml-auto">
                        <h4 id="footer-social-title" className="font-bold text-lg mb-6 text-white">{t('footer.followUsTitle')}</h4>
                        <ul className="space-y-3">
                            {socialLinks.map(link => (
                                <li key={link.name}>
                                    <a href={link.href} className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors text-sm group">
                                        <span className="group-hover:text-white transition-colors">
                                            {React.isValidElement(link.icon) && React.cloneElement(link.icon as React.ReactElement<{ size: number, "aria-hidden": string }>, { size: 18, "aria-hidden": "true" })}
                                        </span>
                                        <span>{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="border-t border-white/10 w-full"></div>
            
            {/* Bottom Bar */}
            <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1920px]">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-10 space-y-8 lg:space-y-0 text-sm text-gray-400">
                    <address className="not-italic max-w-xs">
                        <p>Rod. Pedro Eroles, nº 1855 – KM49</p>
                        <p>Mogi das Cruzes 08770-490, BR</p>
                    </address>

                    <address className="not-italic flex flex-col items-start lg:items-center">
                        <a href="tel:1147972352" className="hover:text-white transition-colors mb-1">(11) 4797-2352</a>
                        <a href="mailto:acosvital@acosvital.com.br" className="hover:text-white transition-colors">acosvital@acosvital.com.br</a>
                    </address>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <p className="text-gray-500">&copy; {new Date().getFullYear()} Aços Vital</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
