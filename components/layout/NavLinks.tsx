import React from 'react';
import { useRouter } from '../../hooks/useRouter';

export interface NavLinkData {
    text: string;
    href: string;
}

interface NavLinksProps {
  className?: string;
  links: NavLinkData[];
  onLinkClick?: () => void;
}

export const NavLinks: React.FC<NavLinksProps> = ({ className = '', links, onLinkClick }) => {
    const currentHash = useRouter();

    /**
     * Determines if the link is active.
     * Handles the normalization of the root hash ('#/') vs empty hash ('').
     */
    const isActive = (href: string): boolean => {
        if (href === '#/') {
            return currentHash === '' || currentHash === '#/';
        }
        return currentHash === href;
    };

    return (
        <nav className={`flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 text-sm font-medium ${className}`}>
             {links.map((link) => {
                 const active = isActive(link.href);
                 return (
                    <a 
                        key={link.href} 
                        href={link.href} 
                        onClick={onLinkClick} 
                        aria-current={active ? 'page' : undefined}
                        className={`text-white hover:text-brand-orange py-2 transition-all duration-200 whitespace-nowrap
                            ${active 
                                ? 'border-b-2 border-brand-orange text-brand-orange' 
                                : 'border-b-2 border-transparent opacity-90 hover:opacity-100'
                            }`}
                    >
                        {link.text}
                    </a>
                );
            })}
        </nav>
    );
};