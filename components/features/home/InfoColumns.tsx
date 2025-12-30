import React, { useRef } from 'react';
import { useI18n } from '../../../context/I18nContext';
import { useOnScreen } from '../../../hooks/useOnScreen';
import { INFO_COLUMNS_TABS } from '../../../lib/constants';

interface TabContent {
    description: React.ReactNode;
    items?: string[];
}

interface ColumnTab {
    id: string;
    title: string;
    icon: React.ReactElement;
    content: TabContent;
}

const InfoColumns: React.FC = () => {
    const { t } = useI18n();
    
    const columns: ColumnTab[] = INFO_COLUMNS_TABS.map(tab => ({
        ...tab,
        title: t(`infoColumns.tabs.${tab.id}.title`),
        content: {
            description: t(`infoColumns.tabs.${tab.id}.description`),
            items: tab.items
        }
    }));
    
    const containerRef = useRef<HTMLUListElement>(null);
    const isVisible = useOnScreen(containerRef, 0.1);

    return (
        <section className="py-16 md:py-24 bg-brand-off-white" aria-labelledby="info-columns-title">
            <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                <div className="text-center mb-12">
                    <h2 id="info-columns-title" className="text-3xl md:text-4xl font-bold text-brand-blue-dark">
                        {t('infoColumns.title')}
                    </h2>
                </div>

                <ul ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {columns.map((column, index) => (
                        <li
                            key={column.id}
                            className={`bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center text-center
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                            `}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="flex justify-center mb-6">
                                {/* Matched reference: Brand orange icon on a light orange (opacity) background */}
                                <div className="w-20 h-20 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange">
                                    {React.isValidElement(column.icon) && 
                                        React.cloneElement(column.icon as React.ReactElement<{ size: number, "aria-hidden": string, className?: string }>, { 
                                            size: 40, 
                                            "aria-hidden": "true",
                                            // Force the class to text-brand-orange to override 'text-white' from translations
                                            className: "text-brand-orange"
                                        })
                                    }
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-brand-blue-dark mb-4">{column.title}</h3>
                            <div className="text-brand-text text-base leading-relaxed flex-grow text-gray-700">
                                {column.content.description}
                            </div>

                            {column.content.items && (
                                <div className="flex flex-wrap gap-2 justify-center mt-6">
                                    {column.content.items.map((item) => (
                                        <span key={item} className="bg-gray-200 text-gray-800 text-xs font-bold px-3 py-1 rounded-full">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default InfoColumns;