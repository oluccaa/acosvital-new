
import React from 'react';
import { useI18n } from '../../../context/I18nContext';
import { CheckCircle } from 'lucide-react';

const CertificationsContent: React.FC = () => {
    const { t } = useI18n();
    
    // Using the 'policy' translations which are more structured for this section
    const title = t('certificationsPage.policy.title');
    const description = t('certificationsPage.policy.description');
    
    // Extract points. Since t() might return an object or array depending on i18n setup,
    // we ensure we handle the array correctly.
    const points = t('certificationsPage.policy.points', { returnObjects: true }) as string[];

    return (
        <section className="py-20 bg-white border-b border-gray-100">
            <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto text-center">
                    
                    <div className="inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                        Gestão de Qualidade
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-6 leading-tight">
                        {title}
                    </h2>
                    
                    <p className="text-gray-600 text-lg mb-12 leading-relaxed max-w-3xl mx-auto">
                        {description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        {Array.isArray(points) && points.map((point, index) => (
                            <div key={index} className="flex items-start p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-brand-orange/30 transition-colors duration-300">
                                <CheckCircle className="text-brand-orange flex-shrink-0 mt-1 mr-4" size={20} />
                                <p className="text-brand-blue-dark font-medium">{point}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CertificationsContent;
