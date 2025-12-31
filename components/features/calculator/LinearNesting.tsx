
import React, { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Trash2, Scissors, Settings, ChevronDown } from 'lucide-react';
import { DENSITIES, MaterialType } from '../../../hooks/useSteelCalculator';
import { useEngineering } from '../../../context/EngineeringContext';

interface BarResult { id: number; cuts: number[]; waste: number; usage: number; }
interface NestingResult { bars: BarResult[]; totalBars: number; totalWaste: number; totalWastePercent: number; weightUsed: number; weightScrap: number; totalMaterialWeight: number; }

const LinearNesting: React.FC = () => {
  const { t } = useTranslation();
  const { 
    calculatorState, 
    updateCalculatorField, 
    nestingItems, 
    addNestingItem, 
    removeNestingItem, 
    nestingPayload, 
    clearNestingPayload 
  } = useEngineering();

  // Local state for temporary inputs
  const [calcMode, setCalcMode] = useState<'dimensional' | 'manual'>('dimensional');
  const [width, setWidth] = useState<string>('');
  const [thickness, setThickness] = useState<string>('');
  const [material, setMaterial] = useState<MaterialType>('carbon');
  const [manualLinearWeight, setManualLinearWeight] = useState<string>(''); 
  const [newItemLength, setNewItemLength] = useState<string>('');
  const [newItemQty, setNewItemQty] = useState<string>('1');
  const [result, setResult] = useState<NestingResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const stockLength = parseFloat(calculatorState.nestStockLength) || 6000;
  const bladeWidth = parseFloat(calculatorState.nestBladeWidth) || 3;

  const calculatedLinearWeight = useMemo(() => {
    if (calcMode === 'manual') return parseFloat(manualLinearWeight) || 0;
    const w = parseFloat(width);
    const t = parseFloat(thickness);
    if (!w || !t) return 0;
    return (w * t * DENSITIES[material]) / 1000;
  }, [calcMode, width, thickness, material, manualLinearWeight]);

  useEffect(() => {
      if (nestingPayload) {
          nestingPayload.items.forEach(item => {
             addNestingItem({
                id: Math.random().toString(36).substr(2, 9),
                length: item.length,
                quantity: item.quantity
             });
          });
          clearNestingPayload();
          document.getElementById('cut-list-container')?.scrollIntoView({ behavior: 'smooth' });
      }
  }, [nestingPayload, addNestingItem, clearNestingPayload]);

  const handleAddItem = () => {
    setError(null);
    const len = parseFloat(newItemLength);
    const qty = parseInt(newItemQty);
    if (isNaN(len) || len <= 0) { setError("Comprimento inválido."); return; }
    if (len + bladeWidth > stockLength) { setError(t('calculatorPage.nesting.errorLength')); return; }
    
    addNestingItem({ id: Math.random().toString(36).substr(2, 9), length: len, quantity: qty });
    setNewItemLength('');
    setNewItemQty('1'); // Reset qty to 1 for better UX
    setResult(null); // Clear previous results as input changed
    
    // Focus back on length input
    document.getElementById('nest-length-input')?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
          handleAddItem();
      }
  };

  const calculateNesting = () => {
    if (nestingItems.length === 0) return;
    
    // Flatten the list of items based on quantity
    let allPieces: number[] = [];
    nestingItems.forEach(item => { 
        for (let i = 0; i < item.quantity; i++) allPieces.push(item.length); 
    });
    
    // Sort descending (First Fit Decreasing Algorithm)
    allPieces.sort((a, b) => b - a);

    const bars: { cuts: number[], remaining: number }[] = [];
    
    for (const piece of allPieces) {
      let placed = false;
      for (let bar of bars) {
        // Check if piece fits in remaining space (considering blade width if it's not the first piece? 
        // Conservative approach: Always assume blade width is needed/lost per cut)
        if (bar.remaining >= (piece + bladeWidth)) {
          bar.cuts.push(piece);
          bar.remaining -= (piece + bladeWidth);
          placed = true;
          break;
        }
      }
      if (!placed) {
          // New Bar
          bars.push({ cuts: [piece], remaining: stockLength - (piece + bladeWidth) });
      }
    }

    const barResults = bars.map((bar, idx) => {
        const cutsLen = bar.cuts.reduce((a, b) => a + b, 0);
        // Correct waste calculation: Stock - Used - Kerfs
        // Note: The algorithm subtracted (piece + blade) from remaining.
        // So waste is effectively what's left in 'remaining', plus the blade of the last piece if we consider the bar end doesn't need a cut.
        // But simplifying: 
        const waste = stockLength - cutsLen - (bar.cuts.length * bladeWidth);
        // Ensure non-negative waste (in case of float precision issues)
        const safeWaste = Math.max(0, waste);
        
        return { 
            id: idx + 1, 
            cuts: bar.cuts, 
            waste: safeWaste, 
            usage: ((stockLength - safeWaste) / stockLength) * 100 
        };
    });

    const totalBars = barResults.length;
    const totalMatW = (totalBars * stockLength / 1000) * calculatedLinearWeight;
    const piecesW = (allPieces.reduce((a, b) => a + b, 0) / 1000) * calculatedLinearWeight;

    setResult({
        bars: barResults, 
        totalBars, 
        totalWaste: (totalBars * stockLength) - allPieces.reduce((a,b)=>a+b,0), // Simple waste (Stock - Net Parts)
        totalWastePercent: (((totalBars * stockLength) - allPieces.reduce((a,b)=>a+b,0)) / (totalBars * stockLength)) * 100,
        weightUsed: piecesW, 
        weightScrap: totalMatW - piecesW, 
        totalMaterialWeight: totalMatW
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 animate-in fade-in">
        
        {/* Left Panel: Settings & Inputs */}
        <div className="lg:col-span-5 bg-[#0f172a] border border-white/5 rounded-xl p-5 shadow-xl space-y-5 h-fit">
            
            {/* Stock Settings */}
            <div>
                <h3 className="text-white font-bold text-xs uppercase flex items-center gap-2 border-b border-white/5 pb-2 mb-3">
                    <Settings size={14} className="text-brand-orange" /> {t('calculatorPage.nesting.params')}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                        <label className="text-[10px] text-gray-500 font-bold uppercase">{t('calculatorPage.nesting.barLength')} (mm)</label>
                        <input 
                            type="number" 
                            value={calculatorState.nestStockLength} 
                            onChange={e => updateCalculatorField('nestStockLength', e.target.value)} 
                            className="w-full bg-[#1e293b] border border-white/10 rounded p-2 text-white text-xs outline-none focus:border-brand-orange transition-colors" 
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] text-gray-500 font-bold uppercase">{t('calculatorPage.nesting.bladeWidth')} (mm)</label>
                        <input 
                            type="number" 
                            value={calculatorState.nestBladeWidth} 
                            onChange={e => updateCalculatorField('nestBladeWidth', e.target.value)} 
                            className="w-full bg-[#1e293b] border border-white/10 rounded p-2 text-white text-xs outline-none focus:border-brand-orange transition-colors" 
                        />
                    </div>
                </div>
            </div>

            {/* Input Form */}
            <div>
                <h3 className="text-white font-bold text-xs uppercase flex items-center gap-2 border-b border-white/5 pb-2 mb-3">
                    <Plus size={14} className="text-brand-orange" /> {t('calculatorPage.nesting.addPieces')}
                </h3>
                <div className="flex flex-col sm:flex-row gap-2 mb-2">
                    <div className="flex-1 relative">
                        <input 
                            id="nest-length-input"
                            type="number" 
                            placeholder={`${t('calculatorPage.nesting.length')} (mm)`}
                            value={newItemLength} 
                            onChange={e => setNewItemLength(e.target.value)} 
                            onKeyDown={handleKeyDown}
                            className="w-full bg-[#1e293b] border border-white/10 rounded p-2 text-white text-xs outline-none focus:border-brand-orange h-10" 
                        />
                    </div>
                    <div className="flex gap-2">
                        <div className="w-20 relative">
                             <input 
                                type="number" 
                                placeholder={t('calculatorPage.nesting.qty')}
                                value={newItemQty} 
                                onChange={e => setNewItemQty(e.target.value)} 
                                onKeyDown={handleKeyDown}
                                className="w-full bg-[#1e293b] border border-white/10 rounded p-2 text-white text-xs outline-none text-center focus:border-brand-orange h-10" 
                            />
                        </div>
                        <button 
                            onClick={handleAddItem} 
                            className="bg-brand-orange text-white px-4 rounded hover:bg-brand-orange-dark h-10 flex items-center justify-center transition-colors shadow-lg active:scale-95 flex-1 sm:flex-none"
                        >
                            <Plus size={18} strokeWidth={3} />
                        </button>
                    </div>
                </div>
                {error && <p className="text-red-400 text-[10px] mb-2 font-bold animate-pulse">{error}</p>}
            </div>

            {/* Cut List */}
            <div className="flex-1 flex flex-col min-h-[200px]">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] text-gray-500 font-bold uppercase">{t('calculatorPage.nesting.cutList')} ({nestingItems.length})</span>
                    {nestingItems.length > 0 && (
                        <span className="text-[10px] text-brand-orange font-bold">
                            Total: {nestingItems.reduce((acc, i) => acc + (i.length * i.quantity), 0).toFixed(0)}mm
                        </span>
                    )}
                </div>
                
                <div id="cut-list-container" className="bg-black/20 rounded-lg p-2 max-h-60 overflow-y-auto border border-white/5 custom-scrollbar">
                    {nestingItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-40 text-gray-600 opacity-50">
                            <Scissors size={32} className="mb-2" />
                            <span className="text-xs italic">{t('calculatorPage.nesting.waitingDesc')}</span>
                        </div>
                    ) : (
                        <div className="space-y-1">
                            {nestingItems.map(i => (
                                <div key={i.id} className="flex justify-between items-center text-xs text-gray-300 p-2 border-b border-white/5 last:border-0 hover:bg-white/5 rounded transition-colors group">
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-white bg-white/10 px-1.5 rounded">{i.quantity}x</span>
                                        <span>{i.length} mm</span>
                                    </div>
                                    <button 
                                        onClick={() => removeNestingItem(i.id)} 
                                        className="text-gray-600 hover:text-red-400 p-1 transition-colors"
                                        title="Remover item"
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <button 
                onClick={calculateNesting} 
                disabled={nestingItems.length === 0} 
                className="w-full bg-white text-brand-blue-dark font-bold py-3 rounded-lg hover:bg-gray-100 transition-all uppercase text-xs tracking-widest disabled:opacity-30 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform active:scale-[0.99]"
            >
                {t('calculatorPage.nesting.calculateBtn')}
            </button>
        </div>

        {/* Right Panel: Results */}
        <div className="lg:col-span-7">
            {result ? (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
                    
                    {/* Summary Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="bg-[#1e293b] p-4 rounded-xl text-center border border-white/10 shadow-lg relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-12 h-12 bg-white/5 rounded-bl-full -mr-2 -mt-2 transition-transform group-hover:scale-110"></div>
                            <span className="text-[10px] text-gray-400 uppercase block font-bold tracking-wider mb-1">{t('calculatorPage.nesting.results.totalBars')}</span>
                            <span className="text-2xl font-bold text-white">{result.totalBars}</span>
                            <span className="block text-[9px] text-gray-500 mt-1">de {stockLength}mm</span>
                        </div>
                        <div className="bg-[#1e293b] p-4 rounded-xl text-center border border-white/10 shadow-lg relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-12 h-12 bg-green-500/10 rounded-bl-full -mr-2 -mt-2 transition-transform group-hover:scale-110"></div>
                            <span className="text-[10px] text-gray-400 uppercase block font-bold tracking-wider mb-1">{t('calculatorPage.nesting.results.barUsage')}</span>
                            <span className="text-2xl font-bold text-green-400">{(100 - result.totalWastePercent).toFixed(1)}%</span>
                            <span className="block text-[9px] text-gray-500 mt-1">{t('calculatorPage.nesting.results.efficiency')}</span>
                        </div>
                        <div className="bg-[#1e293b] p-4 rounded-xl text-center border border-white/10 shadow-lg relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-12 h-12 bg-red-500/10 rounded-bl-full -mr-2 -mt-2 transition-transform group-hover:scale-110"></div>
                            <span className="text-[10px] text-gray-400 uppercase block font-bold tracking-wider mb-1">{t('calculatorPage.nesting.results.totalWaste')}</span>
                            <span className="text-2xl font-bold text-red-400">{result.totalWaste.toFixed(0)}<span className="text-sm">mm</span></span>
                            <span className="block text-[9px] text-gray-500 mt-1">{t('calculatorPage.nesting.results.scraps')}</span>
                        </div>
                    </div>

                    {/* Bars Visualization */}
                    <div className="bg-[#0f172a] border border-white/5 rounded-xl p-4 shadow-xl">
                        <h4 className="text-white font-bold text-xs uppercase mb-4 flex justify-between items-center">
                            <span>{t('calculatorPage.nesting.results.cutPlan')}</span>
                            <span className="text-[9px] font-normal text-gray-500">{t('calculatorPage.nesting.results.hoverDetails')}</span>
                        </h4>
                        
                        <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                            {result.bars.map(bar => (
                                <div key={bar.id} className="bg-[#1e293b] border border-white/5 rounded-lg p-3 hover:border-white/10 transition-colors">
                                    <div className="flex justify-between text-[10px] text-gray-300 mb-2 uppercase font-bold tracking-wide">
                                        <span className="flex items-center gap-2">
                                            <span className="w-5 h-5 rounded-full bg-brand-blue-dark flex items-center justify-center text-brand-orange border border-white/10">#{bar.id}</span>
                                        </span>
                                        <span>{t('calculatorPage.nesting.results.barUsage')}: <span className={bar.usage > 90 ? "text-green-400" : bar.usage > 70 ? "text-yellow-400" : "text-gray-400"}>{bar.usage.toFixed(1)}%</span></span>
                                    </div>
                                    
                                    <div className="h-8 bg-gray-900 rounded-md flex overflow-hidden border border-white/5 relative">
                                        {bar.cuts.map((c, idx) => (
                                            <div 
                                                key={idx} 
                                                style={{ width: `${(c/stockLength)*100}%` }} 
                                                className="h-full bg-brand-blue-light border-r border-black/30 flex items-center justify-center text-[10px] font-bold text-white group relative cursor-help hover:bg-brand-blue-light/80 transition-colors first:rounded-l-md"
                                            >
                                                {/* Text only if space permits (heuristic) */}
                                                {(c/stockLength) > 0.1 && <span className="truncate px-1 drop-shadow-md">{c}</span>}
                                                
                                                {/* Tooltip */}
                                                <div className="absolute bottom-full mb-2 bg-black text-white text-[10px] px-2 py-1 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none border border-white/20">
                                                    {c} mm
                                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                                                </div>
                                            </div>
                                        ))}
                                        
                                        {/* Waste Part */}
                                        <div className="flex-1 bg-red-500/10 flex items-center justify-center relative group pattern-diagonal-lines-sm">
                                             <div className="absolute bottom-full mb-2 bg-black text-red-300 text-[10px] px-2 py-1 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none border border-red-500/30">
                                                {t('calculatorPage.nesting.results.totalWaste')}: {bar.waste.toFixed(0)} mm
                                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex justify-between mt-1.5 text-[9px] text-gray-600 font-mono">
                                        <span>0mm</span>
                                        <span>{stockLength}mm</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="h-full bg-[#1e293b]/30 border-2 border-dashed border-white/5 rounded-xl flex flex-col items-center justify-center text-gray-500 p-8 min-h-[300px]">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                      <Scissors size={32} className="opacity-40" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-400 mb-1">{t('calculatorPage.nesting.waiting')}</h4>
                  <span className="text-xs italic max-w-xs text-center">{t('calculatorPage.nesting.waitingDesc')}</span>
                </div>
            )}
        </div>
    </div>
  );
};

export default LinearNesting;
