
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Cookie, X } from 'lucide-react';

const CookieBanner: React.FC = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already consented
        const consent = localStorage.getItem('acosvital_cookie_consent');
        if (!consent) {
            // Slight delay for better UX (doesn't pop up instantly)
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('acosvital_cookie_consent', 'true');
        setIsVisible(false);
    };

    const handleDecline = () => {
        // Even if declined, we store the preference to avoid asking again in this session
        // In a real implementation with analytics, this would disable non-essential scripts
        localStorage.setItem('acosvital_cookie_consent', 'false');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-4 duration-500">
            <div className="max-w-7xl mx-auto bg-brand-blue-dark/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 md:gap-8">
                
                {/* Icon & Text */}
                <div className="flex items-start gap-4 flex-1">
                    <div className="p-2 bg-brand-orange/10 rounded-full text-brand-orange hidden sm:block">
                        <Cookie size={24} />
                    </div>
                    <div className="text-sm text-gray-300 leading-relaxed">
                        <p>
                            {t('privacy.cookieBanner.text')}{' '}
                            <a href="#/privacy" className="text-white font-bold underline hover:text-brand-orange transition-colors">
                                {t('privacy.cookieBanner.link')}
                            </a>.
                        </p>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <button 
                        onClick={handleDecline}
                        className="flex-1 md:flex-none px-4 py-2.5 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-colors text-xs font-bold uppercase tracking-wide"
                    >
                        {t('privacy.cookieBanner.decline')}
                    </button>
                    <button 
                        onClick={handleAccept}
                        className="flex-1 md:flex-none px-6 py-2.5 rounded-lg bg-brand-orange text-white font-bold hover:bg-brand-orange-dark transition-colors shadow-lg shadow-brand-orange/20 text-xs uppercase tracking-wide"
                    >
                        {t('privacy.cookieBanner.accept')}
                    </button>
                </div>

                {/* Close X (Optional, acts as decline/dismiss) */}
                <button 
                    onClick={() => setIsVisible(false)}
                    className="absolute top-2 right-2 p-1 text-gray-500 hover:text-white transition-colors md:hidden"
                >
                    <X size={16} />
                </button>
            </div>
        </div>
    );
};

export default CookieBanner;
