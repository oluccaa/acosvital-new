import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Logo from '../common/Logo';

const Footer: React.FC = () => {
    const { t } = useTranslation();

    // Lista unificada de todos os links, todos em CAIXA ALTA
    const allLinks = [
        { key: 'home', label: 'INÍCIO', href: '#/' },
        { key: 'about', label: 'SOBRE NÓS', href: '#/about' },
        { key: 'products', label: 'PRODUTOS', href: '#/products' },
        { key: 'catalog', label: 'CATÁLOGO', href: '#/catalog' },
        { key: 'calculator', label: 'CALCULADORA', href: '#/calculator' },
        { key: 'certifications', label: 'CERTIFICAÇÕES', href: '#/certifications' },
        { key: 'contact', label: 'CONTATO', href: '#/contact' },
        { key: 'privacy', label: 'POLÍTICA DE PRIVACIDADE', href: '#/privacy' }
    ];

    // Divide os links em duas colunas para o layout
    const midPoint = Math.ceil(allLinks.length / 2);
    const leftLinks = allLinks.slice(0, midPoint);
    const rightLinks = allLinks.slice(midPoint);

    return (
        <footer className="bg-brand-blue-dark text-gray-400 pt-16 pb-8 border-t-[3px] border-brand-orange font-sans">
            <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1920px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    
                    {/* COLUNA 1: Logo, Descrição e Social */}
                    <div className="space-y-6">
                        <a href="#/" aria-label="Aços Vital" className="block w-48">
                            <Logo className="h-auto w-full" />
                        </a>
                        <p className="text-sm leading-relaxed text-gray-400">
                            Aços Vital destaca-se como fabricante de Flanges, Curvas de Gomos, Tubos Calandrados, Chapas Expandidas e Grades de Piso com a mais alta qualidade para atender as demandas do mercado.
                        </p>
                        
                        <div className="pt-2">
                            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">SIGA-NOS</h4>
                            <div className="flex gap-3">
                                <a href="#" className="w-10 h-10 rounded-full bg-[#111827] flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all duration-300 group border border-white/5">
                                    <Facebook size={18} className="text-gray-400 group-hover:text-white" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-[#111827] flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all duration-300 group border border-white/5">
                                    <Instagram size={18} className="text-gray-400 group-hover:text-white" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-[#111827] flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all duration-300 group border border-white/5">
                                    <Linkedin size={18} className="text-gray-400 group-hover:text-white" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-[#111827] flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all duration-300 group border border-white/5">
                                    <Youtube size={18} className="text-gray-400 group-hover:text-white" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* COLUNA 2 e 3 (Combinadas): PÁGINAS */}
                    <div className="lg:col-span-2 lg:pl-12">
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">PÁGINAS</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                            <ul className="space-y-3">
                                {leftLinks.map(link => (
                                    <li key={link.key}>
                                        <a href={link.href} className="flex items-center gap-2 hover:text-brand-orange transition-colors text-sm font-medium uppercase group">
                                            <ChevronRight size={14} className="text-gray-600 group-hover:text-brand-orange transition-colors" />
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-3">
                                {rightLinks.map(link => (
                                    <li key={link.key}>
                                        <a href={link.href} className="flex items-center gap-2 hover:text-brand-orange transition-colors text-sm font-medium uppercase group">
                                            <ChevronRight size={14} className="text-gray-600 group-hover:text-brand-orange transition-colors" />
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* COLUNA 4: CONTATO */}
                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">CONTATO</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 group">
                                <div className="mt-1">
                                    <MapPin size={20} className="text-brand-orange" />
                                </div>
                                <address className="not-italic text-sm text-gray-400 leading-relaxed group-hover:text-white transition-colors">
                                    Rod. Pedro Eroles, nº 1855 – KM49<br/>
                                    Jardim Aracy, Mogi das Cruzes - SP<br/>
                                    CEP 08770-490
                                </address>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <Phone size={20} className="text-brand-orange" />
                                <a href="tel:1147972352" className="text-sm text-gray-400 group-hover:text-white transition-colors">
                                    (11) 4797-2352
                                </a>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <Mail size={20} className="text-brand-orange" />
                                <a href="mailto:acosvital@acosvital.com.br" className="text-sm text-gray-400 group-hover:text-white transition-colors">
                                    acosvital@acosvital.com.br
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear() + 1} Aços Vital Indústria e Comércio. Todos os direitos reservados.</p>
                    <p className="opacity-80 hover:opacity-100 transition-opacity">Desenvolvido com excelência</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;