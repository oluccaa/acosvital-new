
import React from 'react';
import { useI18n } from '../../../context/I18nContext';
import { CERTIFICATIONS_LIST } from '../../../lib/constants';
import { Award } from 'lucide-react';

const CertificationsGrid: React.FC = () => {
    const { t } = useI18n();

    return (
        <section id="certifications-grid" className="py-24 bg-brand-off-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute left-1/4 top-20 w-96 h-96 bg-brand-blue-dark rounded-full blur-[128px]"></div>
                <div className="absolute right-1/4 bottom-20 w-96 h-96 bg-brand-orange rounded-full blur-[128px]"></div>
            </div>

            <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
                <div className="text-center mb-20">
                    <span className="inline-flex items-center justify-center p-3 bg-white rounded-xl shadow-md mb-6 text-brand-orange">
                        <Award size={32} />
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-blue-dark mb-6">
                        {t('certificationsPage.grid.title')}
                    </h2>
                    <div className="w-24 h-1.5 bg-brand-orange mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        {t('certificationsPage.grid.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
                    {CERTIFICATIONS_LIST.map((cert) => (
                        <div 
                            key={cert.id} 
                            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group relative overflow-hidden"
                        >
                            {/* Top Accent Line */}
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100 group-hover:bg-brand-orange transition-colors duration-300"></div>

                            {/* Logo Container - Increased height from h-40 to h-64 for larger logos */}
                            <div className="w-full h-64 flex items-center justify-center mb-8 p-6 bg-gray-50 rounded-xl group-hover:bg-white transition-colors duration-300">
                                <img
                                    src={cert.logoUrl}
                                    alt={t(`certificationsPage.grid.items.${cert.id}.name`)}
                                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="space-y-3">
                                <h3 className="font-bold text-xl text-brand-blue-dark">
                                    {t(`certificationsPage.grid.items.${cert.id}.name`)}
                                </h3>
                                <div className="inline-block px-3 py-1 bg-brand-blue-light/10 text-brand-blue-light text-xs font-bold rounded-full mb-2">
                                    {t(`certificationsPage.grid.items.${cert.id}.issuer`)}
                                </div>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {t(`certificationsPage.grid.items.${cert.id}.description`)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationsGrid;