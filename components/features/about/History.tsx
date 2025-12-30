import React from 'react';
import { useI18n } from '../../../context/I18nContext';

const History: React.FC = () => {
    // Fetch content from the i18n context.
    const { t } = useI18n();
    const title = t('history.title');
    const youtubeUrl = t('history.youtubeUrl');

    return (
        <section 
            className="relative py-16 md:py-24 bg-white text-brand-blue-dark overflow-hidden"
        >
            <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
                </div>
                
                {/* Responsive Iframe Container: `aspect-video` maintains a 16:9 ratio. */}
                <div className="max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl">
                    <iframe 
                        className="w-full h-full"
                        src={youtubeUrl} 
                        title="DOCUMENTÁRIO - AÇOS VITAL" // Important for accessibility.
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default History;