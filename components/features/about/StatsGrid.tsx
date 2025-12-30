

import React from 'react';
import { useI18n } from '../../../context/I18nContext';
import { STATS_LIST } from '../../../lib/constants';

const StatsGrid: React.FC = () => {
    const { t } = useI18n();

    return (
        <section className="py-12 bg-white border-t border-gray-100 relative z-10" aria-label="Estatísticas da empresa">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Standardized max-width container to match AboutContent */}
                <div className="max-w-7xl mx-auto">
                    {/* Responsive Grid: 1 col (mobile) -> 2 cols (sm) -> 4 cols (lg) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {STATS_LIST.map((stat, index) => {
                            const isLast = index === STATS_LIST.length - 1;
                            
                            // Tablet (sm) Logic helpers
                            // In a 2-column grid, odd indices are on the right.
                            const isTabletRightCol = index % 2 !== 0; 
                            // Calculate where the last row starts in a 2-column grid
                            const tabletRows = Math.ceil(STATS_LIST.length / 2);
                            const tabletLastRowStartIndex = (tabletRows - 1) * 2;
                            const isTabletLastRow = index >= tabletLastRowStartIndex;

                            let borderClasses = 'border-gray-200 ';

                            // --- MOBILE (Default: 1 Column) ---
                            // Bottom border on all items except the very last one.
                            if (!isLast) {
                                borderClasses += 'border-b ';
                            } else {
                                borderClasses += 'border-b-0 ';
                            }
                            // No right borders on mobile 1-col layout
                            borderClasses += 'border-r-0 ';


                            // --- TABLET (sm: 2 Columns) ---
                            
                            // Right Borders:
                            // Add right border to left column items (even index)
                            // Remove right border from right column items (odd index)
                            if (!isTabletRightCol) {
                                borderClasses += 'sm:border-r ';
                            } else {
                                borderClasses += 'sm:border-r-0 ';
                            }

                            // Bottom Borders:
                            // Remove border-b for items in the last row of the 2-col grid
                            if (isTabletLastRow) {
                                borderClasses += 'sm:border-b-0 ';
                            } else {
                                // Ensure items not in last row HAVE a bottom border
                                borderClasses += 'sm:border-b ';
                            }


                            // --- DESKTOP (lg: 4 Columns) ---
                            
                            // Bottom Borders:
                            // Remove ALL bottom borders as it becomes a single row
                            borderClasses += 'lg:border-b-0 ';

                            // Right Borders:
                            // Add right border to all items EXCEPT the very last one.
                            if (!isLast) {
                                borderClasses += 'lg:border-r ';
                            } else {
                                borderClasses += 'lg:border-r-0 ';
                            }

                            return (
                                <div 
                                    key={index} 
                                    className={`
                                        flex flex-col items-center justify-center text-center 
                                        py-8 px-2 sm:px-6 md:px-8
                                        h-full
                                        ${borderClasses}
                                    `}
                                >
                                    {/* Icon */}
                                    <div className="mb-4 sm:mb-6 text-brand-orange transform transition-transform duration-300 hover:scale-110">
                                        {stat.icon}
                                    </div>
                                    
                                    {/* Value - Whitespace nowrap ensures "+2K" or "36K m2" doesn't break */}
                                    <p className="font-extrabold text-brand-orange text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl tracking-tight mb-2 whitespace-nowrap">
                                        {t(`history.stats.${stat.id}.value`)}
                                    </p>
                                    
                                    {/* Label - Smaller text, limited width to encourage nice wrapping if needed */}
                                    <p className="text-brand-blue-dark font-bold text-xs sm:text-sm uppercase tracking-widest max-w-[200px] leading-relaxed">
                                        {t(`history.stats.${stat.id}.label`)}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsGrid;
