import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Search, FileText, ChevronRight, ChevronDown, Folder, FolderOpen, X, Maximize2, Minimize2, Image as ImageIcon, ZoomIn, Filter, List } from 'lucide-react';
import { TableItem } from '../components/features/tables/shared/types';
import { getTablesData } from '../lib/tablesData';

// --- HELPER 1: TEXTO DESTACADO (HIGHLIGHT) ---
const HighlightedText: React.FC<{ text: string; highlight: string }> = React.memo(({ text, highlight }) => {
    if (!highlight || !highlight.trim()) {
        return <span>{text}</span>;
    }
    
    // Escapa caracteres especiais do regex para evitar quebra
    const escapedHighlight = highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedHighlight})`, 'gi');
    const parts = text.split(regex);

    return (
        <span>
            {parts.map((part, i) => 
                regex.test(part) ? (
                    <span key={i} className="bg-brand-orange/20 text-brand-blue-dark font-bold rounded-[2px] px-0.5 border-b-2 border-brand-orange/30">
                        {part}
                    </span>
                ) : (
                    <span key={i}>{part}</span>
                )
            )}
        </span>
    );
});

// --- HELPER 2: INPUT DE BUSCA ---
const SearchInput: React.FC<{
    value: string;
    onChange: (val: string) => void;
    placeholder: string;
    clearTitle?: string;
    icon?: React.ReactNode;
    className?: string;
}> = ({ value, onChange, placeholder, clearTitle, icon, className = "" }) => {
    return (
        <div className={`relative group ${className}`}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-brand-orange transition-colors">
                {icon || <Search size={16} />}
            </div>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="block w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-lg leading-5 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange focus:bg-white transition-all duration-200 text-sm"
            />
            {value && (
                <button 
                    onClick={() => onChange('')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                    aria-label={clearTitle}
                    title={clearTitle}
                >
                    <X size={16} />
                </button>
            )}
        </div>
    );
};

// --- HELPER 3: RENDERIZADOR DA SIDEBAR (MOVIDO PARA FORA) ---
// Isso corrige problemas de performance e foco
interface SidebarItemProps {
    item: TableItem;
    depth?: number;
    path?: string;
    selectedPath: string;
    expandedItems: Record<string, boolean>;
    searchTerm: string;
    onToggle: (path: string) => void;
    onSelect: (item: TableItem, path: string, isContentMatch: boolean) => void;
}

const SidebarItemRenderer: React.FC<SidebarItemProps> = React.memo(({ 
    item, 
    depth = 0, 
    path = '', 
    selectedPath, 
    expandedItems, 
    searchTerm, 
    onToggle, 
    onSelect 
}) => {
    const hasChildren = item.items && item.items.length > 0;
    const currentPath = path ? `${path}/${item.name}` : item.name;
    const isSelected = selectedPath === currentPath;
    const isExpanded = expandedItems[currentPath];
    const isContentMatch = item._isContentMatch;

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (hasChildren) {
            onToggle(currentPath);
        } else {
            onSelect(item, currentPath, !!isContentMatch);
        }
    };

    return (
        <div className="mb-1">
            <button
                onClick={handleClick}
                className={`
                    w-full flex items-center text-left py-3 px-3 rounded-lg transition-all duration-200 group relative
                    ${isSelected 
                        ? 'bg-brand-blue-dark text-white shadow-md shadow-brand-blue-dark/20' 
                        : 'text-brand-blue-dark hover:bg-gray-100'
                    }
                `}
                style={{ paddingLeft: `${depth * 16 + 12}px` }}
            >
                {isSelected && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-brand-orange rounded-r-full"></div>}

                <span className="mr-3 flex-shrink-0 relative">
                    {hasChildren ? (
                        isExpanded ? 
                            <FolderOpen size={18} className={isSelected ? 'text-brand-orange' : 'text-brand-blue-dark/80'} /> : 
                            <Folder size={18} className={isSelected ? 'text-gray-300' : 'text-brand-blue-dark/70 group-hover:text-brand-orange'} />
                    ) : (
                        <FileText size={18} className={isSelected ? 'text-brand-orange' : 'text-brand-blue-dark/70 group-hover:text-brand-blue-light'} />
                    )}
                </span>
                
                <div className="flex-1 flex flex-col min-w-0">
                    <span className={`text-sm tracking-wide leading-tight truncate ${isSelected ? 'font-bold' : 'font-medium'}`}>
                        <HighlightedText text={item.name} highlight={searchTerm} />
                    </span>
                    
                    {isContentMatch && (
                        <span className={`text-[10px] uppercase font-bold mt-0.5 flex items-center ${isSelected ? 'text-brand-orange' : 'text-gray-600'}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 animate-pulse"></span>
                            Contém item
                        </span>
                    )}
                </div>

                {hasChildren && (
                    <span className={`ml-auto pl-2 opacity-70 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}>
                        <ChevronRight size={14} />
                    </span>
                )}
            </button>

            {hasChildren && isExpanded && item.items && (
                <div className="mt-1 relative ml-4">
                    <div className="absolute left-0 top-0 bottom-2 w-px bg-gray-200"></div>
                    {item.items.map((child, idx) => (
                        <SidebarItemRenderer 
                            key={`${currentPath}-${idx}`}
                            item={child}
                            depth={depth + 1}
                            path={currentPath}
                            selectedPath={selectedPath}
                            expandedItems={expandedItems}
                            searchTerm={searchTerm}
                            onToggle={onToggle}
                            onSelect={onSelect}
                        />
                    ))}
                </div>
            )}
        </div>
    );
});


// --- COMPONENTE PRINCIPAL ---
const TablesPage: React.FC = () => {
    const { t, i18n } = useTranslation();
    
    // Cache tables data
    const tables = useMemo(() => getTablesData(t), [t, i18n.language]);
    
    // --- STATE ---
    const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
    const [selectedTable, setSelectedTable] = useState<TableItem | null>(null);
    const [selectedPath, setSelectedPath] = useState<string>(''); 
    
    // Search States
    const [sidebarSearchTerm, setSidebarSearchTerm] = useState('');
    const [tableSearchTerm, setTableSearchTerm] = useState('');
    
    // UI States
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [isGalleryOpen, setIsGalleryOpen] = useState(true);

    // --- CORREÇÃO IMPORTANTE: LÓGICA DE BUSCA ---
    // Removemos o setExpandedItems de dentro do useMemo para evitar loop infinito
    const { filteredTables, totalResults, pathsToExpand } = useMemo(() => {
        if (!sidebarSearchTerm.trim()) {
            return { filteredTables: tables, totalResults: 0, pathsToExpand: [] };
        }

        const lowerTerm = sidebarSearchTerm.toLowerCase();
        let matchCount = 0;
        const pathsFound: string[] = []; // Guardamos os caminhos aqui para expandir depois

        const filterRecursive = (items: TableItem[], pathPrefix = ''): TableItem[] => {
            return items.map(item => {
                const currentPath = pathPrefix ? `${pathPrefix}/${item.name}` : item.name;
                
                // 1. Match Nome
                const nameMatch = item.name.toLowerCase().includes(lowerTerm);
                
                // 2. Match Conteúdo
                let contentMatch = false;
                if (item.rows) {
                    contentMatch = item.rows.some(row => 
                        row.some(cell => cell && cell.toString().toLowerCase().includes(lowerTerm))
                    );
                }

                // 3. Recursão
                let filteredChildren: TableItem[] = [];
                if (item.items) {
                    filteredChildren = filterRecursive(item.items, currentPath);
                }

                const hasMatchingChildren = filteredChildren.length > 0;
                
                if (nameMatch || contentMatch || hasMatchingChildren) {
                    if (item.rows && (nameMatch || contentMatch)) {
                        matchCount++;
                    }

                    // Se tiver filhos correspondentes, salvamos o caminho para expandir
                    if (hasMatchingChildren) {
                        pathsFound.push(currentPath);
                    }

                    return {
                        ...item,
                        items: filteredChildren.length > 0 ? filteredChildren : undefined,
                        _isContentMatch: contentMatch && !nameMatch 
                    };
                }
                
                return null;
            }).filter(Boolean) as TableItem[];
        };

        const result = filterRecursive(tables);
        return { filteredTables: result, totalResults: matchCount, pathsToExpand: pathsFound };

    }, [sidebarSearchTerm, tables]);

    // --- EFFECT PARA EXPANDIR ITENS (SAFE) ---
    // Isso roda APÓS a renderização, corrigindo o erro de update loop
    useEffect(() => {
        if (sidebarSearchTerm && pathsToExpand.length > 0) {
            setExpandedItems(prev => {
                const newExpanded = { ...prev };
                let changed = false;
                pathsToExpand.forEach(path => {
                    if (!newExpanded[path]) {
                        newExpanded[path] = true;
                        changed = true;
                    }
                });
                return changed ? newExpanded : prev;
            });
        }
    }, [pathsToExpand, sidebarSearchTerm]);


    // --- LOAD INICIAL ---
    useEffect(() => {
        if (tables && tables.length > 0 && !selectedTable) {
            const firstCategory = tables[0];
            setExpandedItems(prev => ({ ...prev, [firstCategory.name]: true }));
            
            const findFirstLeaf = (items: TableItem[], path: string): { item: TableItem, path: string } | null => {
                for (const item of items) {
                    const currentPath = path ? `${path}/${item.name}` : item.name;
                    if (item.rows) return { item, path: currentPath };
                    if (item.items) {
                        const leaf = findFirstLeaf(item.items, currentPath);
                        if (leaf) return leaf;
                    }
                }
                return null;
            };

            const result = findFirstLeaf(firstCategory.items || [], firstCategory.name);
            if (result) {
                setSelectedTable(result.item);
                setSelectedPath(result.path);
            }
        }
    }, [tables, selectedTable]); 

    // --- HANDLERS ---
    const handleToggleExpand = useCallback((path: string) => {
        setExpandedItems(prev => ({ ...prev, [path]: !prev[path] }));
    }, []);

    const handleSelectTable = useCallback((item: TableItem, path: string, isContentMatch: boolean) => {
        setSelectedTable(item);
        setSelectedPath(path);
        setIsMobileMenuOpen(false);
        setIsGalleryOpen(true);
        
        if (sidebarSearchTerm && isContentMatch) {
            setTableSearchTerm(sidebarSearchTerm);
        } else {
            setTableSearchTerm('');
        }
    }, [sidebarSearchTerm]);

    // --- SHORTCUTS ---
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                if (previewImage) setPreviewImage(null);
                else if (isFullScreen) setIsFullScreen(false);
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isFullScreen, previewImage]);

    // --- FILTRAGEM DE LINHAS ---
    const filteredRows = useMemo(() => {
        if (!selectedTable?.rows) return [];
        if (!tableSearchTerm) return selectedTable.rows;

        const lowerTerm = tableSearchTerm.toLowerCase();
        return selectedTable.rows.filter(row => 
            row.some(cell => cell && cell.toString().toLowerCase().includes(lowerTerm))
        );
    }, [selectedTable, tableSearchTerm]);

    // Calcular total de colunas
    const totalCols = useMemo(() => {
        if (!selectedTable) return 0;
        let maxCols = 0;
        if (selectedTable.headers) maxCols = Math.max(maxCols, selectedTable.headers.length);
        if (selectedTable.headerGroups) {
            selectedTable.headerGroups.forEach(group => {
                const groupCols = group.reduce((acc, cell) => acc + (cell.colSpan || 1), 0);
                maxCols = Math.max(maxCols, groupCols);
            });
        }
        if (selectedTable.rows) {
             const maxRowLength = selectedTable.rows.reduce((max, row) => Math.max(max, row.length), 0);
             if (maxCols === 0) maxCols = maxRowLength;
        }
        return maxCols || 1;
    }, [selectedTable]);

    return (
        <div className={`bg-gray-50 min-h-screen font-sans flex flex-col ${isFullScreen ? 'overflow-hidden' : ''}`}>
            
            {!isFullScreen && (
                <header className="bg-brand-blue-dark text-white pt-24 pb-12 shadow-lg relative overflow-hidden flex-shrink-0">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute right-0 top-0 w-96 h-96 bg-brand-orange rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute left-10 bottom-0 w-64 h-64 bg-brand-blue-light rounded-full blur-[80px]"></div>
                    </div>

                    <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
                        <div className="max-w-4xl">
                            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-brand-orange text-xs font-bold uppercase tracking-widest mb-4 border border-white/5">
                                Área Técnica
                            </span>
                            <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight leading-tight">{t('tablesPage.title')}</h1>
                            <p className="text-blue-100/90 leading-relaxed max-w-2xl text-base md:text-lg">{t('tablesPage.subtitle')}</p>
                        </div>
                    </div>
                </header>
            )}

            <div className={isFullScreen ? 'contents' : 'container mx-auto px-6 sm:px-12 lg:px-24 -mt-8 mb-12 relative z-20'}>
                <div className={`
                    bg-white shadow-xl border border-gray-100 flex flex-col lg:flex-row transition-all duration-300
                    ${isFullScreen 
                        ? 'fixed inset-0 z-50 w-full h-full rounded-none m-0 border-0 overflow-hidden' 
                        : 'rounded-xl min-h-[700px]'
                    }
                `}>
                    
                    {/* MOBILE HEADER */}
                    <div className="lg:hidden p-3 border-b border-gray-100 bg-white/95 backdrop-blur-xl sticky top-0 z-50 flex items-center justify-between shadow-sm transition-all duration-300 supports-[backdrop-filter]:bg-white/60">
                        <div className="flex items-center gap-2.5">
                            <div className="bg-gradient-to-br from-brand-orange to-brand-orange-dark p-2 rounded-lg text-white shadow-md shadow-brand-orange/20">
                                <FileText size={18} strokeWidth={2.5} />
                            </div>
                            <div>
                                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-0.5">Catálogo</span>
                                <span className="block font-bold text-brand-blue-dark text-sm leading-none">Tabelas Técnicas</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                             <button
                                onClick={() => setIsFullScreen(!isFullScreen)}
                                className="p-2.5 bg-gray-50 text-gray-500 rounded-full hover:bg-gray-100 border border-gray-200 hover:border-brand-orange/30 hover:text-brand-orange transition-all active:scale-95 shadow-sm"
                                aria-label={isFullScreen ? "Sair da tela cheia" : "Tela cheia"}
                            >
                                {isFullScreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                            </button>
                            <button 
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`
                                    flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-300 border shadow-sm active:scale-95
                                    ${isMobileMenuOpen 
                                        ? 'bg-brand-orange text-white border-brand-orange shadow-brand-orange/20' 
                                        : 'bg-white text-gray-700 border-gray-200 hover:border-brand-orange hover:text-brand-orange'
                                    }
                                `}
                            >
                                <div className={`transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
                                    {isMobileMenuOpen ? <X size={18} /> : <List size={18} />}
                                </div>
                                <span>{isMobileMenuOpen ? 'Fechar' : 'Lista'}</span>
                            </button>
                        </div>
                    </div>

                    {/* SIDEBAR */}
                    <aside className={`
                        fixed lg:static inset-y-0 left-0 z-[60] lg:z-auto w-full sm:w-80 
                        bg-white lg:bg-gray-50/50 border-r border-gray-200 flex flex-col 
                        transform transition-transform duration-300 ease-in-out shadow-2xl lg:shadow-none
                        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                        ${!isFullScreen ? 'lg:rounded-l-xl' : ''}
                    `}>
                        <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50/90 backdrop-blur-sm sticky top-0 z-20">
                             <div className="flex items-center gap-2 text-brand-blue-dark">
                                <div className="p-1.5 bg-brand-orange/10 rounded-md text-brand-orange">
                                    <FolderOpen size={20} />
                                </div>
                                <span className="font-bold text-lg">Navegação</span>
                             </div>
                             <button 
                                onClick={() => setIsMobileMenuOpen(false)} 
                                className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600 shadow-sm active:scale-95 hover:text-red-500 hover:border-red-200 transition-colors"
                             >
                                <span>FECHAR</span>
                                <X size={16} />
                             </button>
                        </div>

                        <nav className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 hover:scrollbar-thumb-gray-300 pb-20 lg:pb-3">
                            <div className="p-4 border-b border-gray-200 bg-white space-y-3 mb-2">
                                <div className="flex items-center justify-between">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                                        <Search size={12} />
                                        {t('tablesPage.search.label')}
                                    </label>
                                    {sidebarSearchTerm && (
                                        <span className="text-[10px] font-bold bg-brand-orange/10 text-brand-orange px-2 py-0.5 rounded-full animate-in fade-in">
                                            {totalResults} {t('tablesPage.search.results')}
                                        </span>
                                    )}
                                </div>
                                
                                <SearchInput 
                                    value={sidebarSearchTerm}
                                    onChange={setSidebarSearchTerm}
                                    placeholder={t('tablesPage.search.placeholder')}
                                    clearTitle={t('tablesPage.search.clear')}
                                    className="shadow-sm"
                                />
                                
                                {sidebarSearchTerm && (
                                    <p className="text-[10px] text-gray-400 italic">
                                        {t('tablesPage.search.helper')}
                                    </p>
                                )}
                            </div>

                            {filteredTables.length > 0 ? (
                                <div className="p-3 pt-0">
                                    {filteredTables.map((category, index) => (
                                        <SidebarItemRenderer 
                                            key={index} 
                                            item={category} 
                                            selectedPath={selectedPath}
                                            expandedItems={expandedItems}
                                            searchTerm={sidebarSearchTerm}
                                            onToggle={handleToggleExpand}
                                            onSelect={handleSelectTable}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-10 px-4 text-gray-400">
                                    <FolderOpen size={32} className="mx-auto mb-2 opacity-50" />
                                    <p className="text-sm font-medium">{t('tablesPage.search.noResultsTitle')}</p>
                                    <p className="text-xs mt-1">{t('tablesPage.search.noResultsText')}</p>
                                    <button 
                                        onClick={() => setSidebarSearchTerm('')}
                                        className="mt-4 text-xs font-bold text-brand-orange hover:underline"
                                    >
                                        {t('tablesPage.search.clear')}
                                    </button>
                                </div>
                            )}
                        </nav>
                        
                        <div className="p-4 border-t border-gray-200 bg-gray-50 text-[10px] text-center text-gray-400 font-medium uppercase tracking-widest hidden lg:block">
                            {t('tablesPage.sidebarFooter')}
                        </div>
                    </aside>

                    {isMobileMenuOpen && (
                        <div 
                            className="fixed inset-0 bg-brand-blue-dark/20 z-50 lg:hidden backdrop-blur-sm animate-in fade-in duration-300" 
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-hidden="true"
                        ></div>
                    )}

                    {/* MAIN CONTENT AREA */}
                    <section className={`flex-1 flex flex-col min-w-0 bg-white relative ${!isFullScreen ? 'lg:rounded-r-xl overflow-hidden' : ''}`}>
                        {selectedTable ? (
                            <>
                                <div className="px-6 py-5 border-b border-gray-100 flex flex-col gap-4 bg-white sticky top-0 z-20 shadow-sm">
                                    
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center text-xs text-gray-500 uppercase tracking-wider mb-2 space-x-2 font-medium">
                                                <span>Tabela</span>
                                                <ChevronRight size={12} />
                                                <span className="text-brand-orange bg-brand-orange/5 px-2 py-0.5 rounded border border-brand-orange/10 truncate max-w-[200px]">
                                                    {selectedTable.name}
                                                </span>
                                            </div>
                                            <h2 className="text-xl md:text-2xl font-bold text-brand-blue-dark truncate leading-tight" title={selectedTable.name}>
                                                {selectedTable.name}
                                            </h2>
                                            {selectedTable.description && (
                                                <p className="text-sm text-gray-500 mt-1 line-clamp-2 max-w-3xl">{selectedTable.description}</p>
                                            )}
                                        </div>

                                        <div className="flex items-center gap-3 self-end md:self-auto">
                                            <button
                                                onClick={() => setIsFullScreen(!isFullScreen)}
                                                className="hidden lg:flex items-center justify-center w-10 h-10 text-gray-500 hover:text-brand-orange hover:bg-gray-50 rounded-lg transition-colors border border-gray-200 shadow-sm"
                                                title={isFullScreen ? "Sair da Tela Cheia (Esc)" : "Tela Cheia"}
                                            >
                                                {isFullScreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <SearchInput 
                                            value={tableSearchTerm} 
                                            onChange={setTableSearchTerm} 
                                            placeholder={t('tablesPage.search.filterPlaceholder')}
                                            clearTitle={t('tablesPage.search.filterClear')}
                                            icon={<Filter size={16} />}
                                            className="max-w-md"
                                        />
                                    </div>
                                </div>

                                <div className={`flex-1 flex flex-col p-4 md:p-6 bg-gray-50/30 overflow-y-auto ${isFullScreen ? 'h-[calc(100vh-180px)]' : ''}`}>
                                    
                                    <div className={`
                                        w-full overflow-auto scrollbar-thin scrollbar-thumb-gray-300 bg-white rounded-xl border border-gray-200 shadow-sm
                                        ${isFullScreen ? 'flex-1' : 'max-h-[600px]'}
                                    `}>
                                        {selectedTable.rows && selectedTable.rows.length > 0 ? (
                                            <table className="w-full divide-y divide-gray-200 text-left border-collapse">
                                                <thead className="bg-brand-blue-dark text-white sticky top-0 z-10 shadow-md">
                                                    {selectedTable.headerGroups?.map((row, rIdx) => (
                                                        <tr key={`hgroup-${rIdx}`} className="bg-brand-blue-dark text-white">
                                                            {row.map((cell, cIdx) => (
                                                                <th 
                                                                    key={cIdx} 
                                                                    colSpan={cell.colSpan} 
                                                                    rowSpan={cell.rowSpan}
                                                                    className="px-4 py-3 text-sm font-bold tracking-wider border border-white/10 text-center whitespace-pre-wrap uppercase bg-brand-blue-dark"
                                                                >
                                                                   {cell.text}
                                                                </th>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                    {selectedTable.headers && selectedTable.headers.length > 0 && (
                                                        <tr>
                                                            {selectedTable.headers.map((header, idx) => (
                                                                <th 
                                                                    key={idx} 
                                                                    scope="col" 
                                                                    className="px-4 py-3 text-xs font-bold text-blue-100 tracking-wider whitespace-nowrap border border-white/10 bg-brand-blue-dark/95 text-center uppercase"
                                                                >
                                                                    {header}
                                                                </th>
                                                            ))}
                                                        </tr>
                                                    )}
                                                </thead>
                                                <tbody className="divide-y divide-gray-100 bg-white">
                                                    {filteredRows.map((row, rIdx) => {
                                                        const isFullRowSeparator = row.length === 1 && typeof row[0] === 'string' && row[0].includes('---');

                                                        if (isFullRowSeparator) {
                                                            return (
                                                                <tr key={rIdx} className="bg-gray-100 text-brand-blue-dark border-y border-gray-200">
                                                                    <td 
                                                                        colSpan={totalCols} 
                                                                        className="px-4 py-2 text-center font-bold text-xs uppercase tracking-widest text-gray-600"
                                                                    >
                                                                        {row[0].replace(/---/g, '').trim()}
                                                                    </td>
                                                                </tr>
                                                            );
                                                        }

                                                        return (
                                                            <tr 
                                                                key={rIdx} 
                                                                className="hover:bg-brand-orange/5 transition-colors duration-150 group"
                                                            >
                                                                {row.map((cell, cIdx) => {
                                                                    const isMergeCell = typeof cell === 'string' && cell.includes('---');
                                                                    
                                                                    if (isMergeCell) {
                                                                        return (
                                                                            <td 
                                                                                key={cIdx} 
                                                                                colSpan={totalCols - cIdx}
                                                                                className="px-4 py-2 text-sm text-gray-500 italic text-center border-r border-gray-100 last:border-r-0 bg-gray-50/30"
                                                                            >
                                                                                {cell.replace(/---/g, '').trim()}
                                                                            </td>
                                                                        );
                                                                    }

                                                                    return (
                                                                        <td 
                                                                            key={cIdx} 
                                                                            className={`px-4 py-3 whitespace-nowrap text-sm text-gray-700 border-r border-gray-100 last:border-r-0 text-center relative
                                                                                ${cIdx === 0 ? 'font-bold text-brand-blue-dark bg-gray-50/30' : ''}
                                                                            `}
                                                                        >
                                                                            <HighlightedText text={cell ? cell.toString() : ''} highlight={tableSearchTerm} />
                                                                        </td>
                                                                    );
                                                                })}
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        ) : (
                                            <div className="py-32 flex flex-col items-center justify-center text-gray-400 bg-white">
                                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                                    <FolderOpen size={32} className="text-gray-300" />
                                                </div>
                                                <p className="font-medium text-gray-500">Tabela sem dados</p>
                                                <p className="text-sm">Esta especificação não possui linhas cadastradas.</p>
                                            </div>
                                        )}
                                        
                                        {selectedTable.rows && selectedTable.rows.length > 0 && filteredRows.length === 0 && (
                                            <div className="py-24 text-center flex flex-col items-center bg-white">
                                                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mb-4">
                                                    <Search size={28} className="text-brand-orange" />
                                                </div>
                                                <p className="text-gray-900 font-bold text-lg">{t('tablesPage.search.filterNoResultsTitle')}</p>
                                                <p className="text-gray-500 text-sm mt-1 max-w-xs">
                                                    {t('tablesPage.search.filterNoResultsText', { term: tableSearchTerm })}
                                                </p>
                                                <button 
                                                    onClick={() => setTableSearchTerm('')}
                                                    className="mt-6 px-6 py-2 bg-white border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 hover:text-brand-orange hover:border-brand-orange transition-all duration-200 text-sm shadow-sm"
                                                >
                                                    {t('tablesPage.search.filterClear')}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                    
                                    <div className="mt-3 flex justify-between items-center text-xs text-gray-500 flex-shrink-0 px-2">
                                        <span>{t('tablesPage.search.showingRecords', { count: filteredRows.length, total: selectedTable.rows?.length || 0 })}</span>
                                        {tableSearchTerm && (
                                            <span className="flex items-center text-brand-orange font-bold bg-brand-orange/10 px-2 py-1 rounded">
                                                <Filter size={10} className="mr-1" />
                                                {t('tablesPage.search.filterActive')}
                                            </span>
                                        )}
                                    </div>

                                     {selectedTable.imageUrls && selectedTable.imageUrls.length > 0 && (
                                        <div className="mt-8 bg-white rounded-xl border border-gray-200 shadow-sm flex-shrink-0 overflow-hidden">
                                            <button 
                                                onClick={() => setIsGalleryOpen(!isGalleryOpen)}
                                                className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group border-b border-gray-100"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-white rounded-lg border border-gray-200 text-brand-orange shadow-sm group-hover:border-brand-orange/50 transition-colors">
                                                        <ImageIcon size={20} />
                                                    </div>
                                                    <div className="text-left">
                                                        <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide">{t('tablesPage.gallery.title')}</h3>
                                                        <p className="text-xs text-gray-500">{t('tablesPage.gallery.subtitle')}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-[10px] font-bold text-gray-500 bg-white border border-gray-200 px-2.5 py-1 rounded-full group-hover:text-brand-blue-dark">
                                                        {selectedTable.imageUrls.length} {selectedTable.imageUrls.length === 1 ? t('tablesPage.gallery.item') : t('tablesPage.gallery.items')}
                                                    </span>
                                                    <div className={`transition-transform duration-300 ${isGalleryOpen ? 'rotate-180' : ''}`}>
                                                        <ChevronDown size={18} className="text-gray-400 group-hover:text-gray-600" />
                                                    </div>
                                                </div>
                                            </button>
                                            
                                            {isGalleryOpen && (
                                                <div className="p-6 bg-white animate-in slide-in-from-top-2 duration-300">
                                                    <div className={`grid gap-6 ${selectedTable.imageUrls.length === 1 ? 'grid-cols-1 max-w-2xl mx-auto' : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'}`}>
                                                        {selectedTable.imageUrls.map((url, index) => (
                                                            <div 
                                                                key={index} 
                                                                className="group/img relative bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 cursor-zoom-in hover:border-brand-orange/30"
                                                                onClick={() => setPreviewImage(url)}
                                                            >
                                                                <div className="relative w-full h-48 md:h-56 flex items-center justify-center mb-2">
                                                                    <img 
                                                                        src={url} 
                                                                        alt={t('tablesPage.gallery.altDiagram', { index: index + 1, tableName: selectedTable.name })}
                                                                        className="max-w-full max-h-full object-contain group-hover/img:scale-105 transition-transform duration-500" 
                                                                    />
                                                                </div>
                                                                
                                                                <div className="absolute inset-0 bg-brand-blue-dark/5 rounded-xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                                                                    <span className="bg-white text-brand-orange px-4 py-2 rounded-full shadow-lg font-bold text-xs flex items-center gap-2 transform translate-y-4 group-hover/img:translate-y-0 transition-transform duration-300">
                                                                        <ZoomIn size={14} /> {t('tablesPage.gallery.zoom')}
                                                                    </span>
                                                                </div>
                                                                
                                                                <div className="w-full flex justify-between items-center border-t border-gray-100 pt-3 mt-2">
                                                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{t('tablesPage.gallery.figure')} {index + 1}</span>
                                                                    <span className="text-[10px] text-brand-orange font-bold bg-brand-orange/5 px-2 py-0.5 rounded">{t('tablesPage.gallery.technicalView')}</span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    
                                                    <div className="mt-6 flex items-start gap-2 text-xs text-gray-500 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                                                        <div className="mt-0.5 min-w-[16px]"><FileText size={14} className="text-blue-400" /></div>
                                                        <p>{t('tablesPage.gallery.helpText')}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                </div>
                            </>
                        ) : (
                            <div className="flex-1 flex flex-col items-center justify-center text-gray-400 p-8 bg-gray-50">
                                <div className="bg-white p-8 rounded-full shadow-sm mb-6 border border-gray-100">
                                    <FileText size={64} className="text-brand-orange/20" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-700 mb-2">{t('tablesPage.search.selectPromptTitle')}</h3>
                                <p className="text-sm text-gray-500 max-w-xs text-center leading-relaxed">
                                    {t('tablesPage.search.selectPromptText')}
                                </p>
                            </div>
                        )}
                    </section>
                </div>
            </div>

            {previewImage && (
                <div 
                    className="fixed inset-0 z-[60] bg-brand-blue-dark/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
                    onClick={() => setPreviewImage(null)}
                >
                    <button 
                        className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all transform hover:rotate-90 duration-300"
                        onClick={() => setPreviewImage(null)}
                        aria-label="Fechar zoom"
                    >
                        <X size={24} />
                    </button>
                    
                    <div className="relative max-w-5xl w-full max-h-full flex flex-col items-center">
                        <img 
                            src={previewImage} 
                            alt={t('tablesPage.gallery.enlargedView')} 
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300 bg-white p-2"
                            onClick={(e) => e.stopPropagation()} 
                        />
                        <p className="mt-4 text-white/60 text-sm font-medium tracking-wide">
                            <Trans 
                                i18nKey="tablesPage.gallery.closeHint" 
                                components={{ kbd: <span className="text-white bg-white/20 px-1.5 py-0.5 rounded text-xs mx-1 border border-white/10" /> }} 
                            />
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TablesPage;