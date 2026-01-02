
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Lock, Eye, FileText, Mail } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
    const { t } = useTranslation();

    const sections = [
        { key: 'collection', icon: <FileText size={24} /> },
        { key: 'usage', icon: <Eye size={24} /> },
        { key: 'cookies', icon: <ShieldCheck size={24} /> },
        { key: 'security', icon: <Lock size={24} /> },
        { key: 'rights', icon: <ShieldCheck size={24} /> },
        { key: 'contact', icon: <Mail size={24} /> },
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <header className="bg-brand-blue-dark text-white py-16 md:py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange rounded-full blur-[150px] opacity-20 pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">{t('privacy.title')}</h1>
                    <p className="text-blue-200 text-sm md:text-base font-medium">{t('privacy.lastUpdated')}</p>
                </div>
            </header>

            {/* Content */}
            <main className="container mx-auto px-6 sm:px-12 lg:px-24 py-16">
                <div className="max-w-4xl mx-auto">
                    
                    {/* Intro */}
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-12">
                        <p className="text-gray-700 text-lg leading-relaxed">
                            {t('privacy.intro')}
                        </p>
                    </div>

                    {/* Sections */}
                    <div className="space-y-12">
                        {sections.map((section) => (
                            <div key={section.key} className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange">
                                        {section.icon}
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-xl md:text-2xl font-bold text-brand-blue-dark mb-4">
                                        {t(`privacy.sections.${section.key}.title`)}
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed text-justify">
                                        {t(`privacy.sections.${section.key}.text`)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer Note */}
                    <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
                        <p>&copy; {new Date().getFullYear()} Aços Vital Indústria e Comércio. Todos os direitos reservados.</p>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default PrivacyPolicyPage;
