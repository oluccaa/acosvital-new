
import React, { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Trash2, Scissors, BarChart3, RefreshCcw, Info, AlertTriangle, Ruler, Scale, Box, Settings, Layers, ChevronDown } from 'lucide-react';
import { DENSITIES, MaterialType } from '../../../hooks/useSteelCalculator';
import { useEngineering } from '../../../context/EngineeringContext';

interface CutItem { id: string; length: number; quantity: number; }
interface BarResult { id: number; cuts: number[]; waste: number; usage: number; }
interface NestingResult { bars: BarResult[]; totalBars: number; totalWaste: number; totalWastePercent: number; weightUsed: number; weightScrap: number; totalMaterialWeight: number; }

const LinearNesting: React.FC = () => {
  const { t } = useTranslation();
  const { nestingPayload, clearNestingPayload } = useEngineering();

  const [stockLength, setStockLength] = useState<number>(6000);
  const [bladeWidth, setBladeWidth] = useState<number>(3);
  const [calcMode, setCalcMode] = useState<'dimensional' | 'manual'>('dimensional');
  const [width, setWidth] = useState<string>('');
  const [thickness, setThickness] = useState<string>('');
  const [material, setMaterial] = useState<MaterialType>('carbon');
  const [manualLinearWeight, setManualLinearWeight] = useState<string>(''); 
  const [items, setItems] = useState<CutItem[]>([]);
  const [newItemLength, setNewItemLength] = useState<string>('');
  const [newItemQty, setNewItemQty] = useState<string>('1');
  const [result, setResult] = useState<NestingResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculatedLinearWeight = useMemo(() => {
    if (calcMode === 'manual') return parseFloat(manualLinearWeight) || 0;
    const w = parseFloat(width);
    const t = parseFloat(thickness);
    if (!w || !t) return 0;
    return (w * t * DENSITIES[material]) / 1000;
  }, [calcMode, width, thickness, material, manualLinearWeight]);

  useEffect(() => {
      if (nestingPayload) {
          const newItems = nestingPayload.items.map(item => ({
              id: Math.random().toString(36).substr(2, 9),
              length: item.length,
              quantity: item.quantity
          }));
          setItems(prev => [...prev, ...newItems]);
          clearNestingPayload();
          document.getElementById('cut-list-container')?.scrollIntoView({ behavior: 'smooth' });
      }
  }, [nestingPayload]);

  const handleAddItem = () => {
    setError(null);
    const len = parseFloat(newItemLength);
    const qty = parseInt(newItemQty);
    if (isNaN(len) || len <= 0) { setError("Comprimento inválido."); return; }
    if (len + bladeWidth > stockLength) { setError("Peça maior que a barra de estoque."); return; }
    setItems(prev => [...prev, { id: Math.random().toString(36).substr(2, 9), length: len, quantity: qty }]);
    setNewItemLength('');
    setResult(null); 
  };

  const calculateNesting = () => {
    if (items.length === 0) return;
    let allPieces: number[] = [];
    items.forEach(item => { for (let i = 0; i < item.quantity; i++) allPieces.push(item.length); });
    allPieces.sort((a, b) => b - a);

    const bars: { cuts: number[], remaining: number }[] = [];
    for (const piece of allPieces) {
      let placed = false;
      for (let bar of bars) {
        if (bar.remaining >= (piece + bladeWidth)) {
          bar.cuts.push(piece);
          bar.remaining -= (piece + bladeWidth);
          placed = true;
          break;
        }
      }
      if (!placed) bars.push({ cuts: [piece], remaining: stockLength - (piece + bladeWidth) });
    }

    const barResults = bars.map((bar, idx) => {
        const cutsLen = bar.cuts.reduce((a, b) => a + b, 0);
        const waste = stockLength - cutsLen - (bar.cuts.length * bladeWidth);
        return { id: idx + 1, cuts: bar.cuts, waste: Math.max(0, waste), usage: ((stockLength - waste) / stockLength) * 100 };
    });

    const totalBars = barResults.length;
    const totalMatW = (totalBars * stockLength / 1000) * calculatedLinearWeight;
    const piecesW = (allPieces.reduce((a, b) => a + b, 0) / 1000) * calculatedLinearWeight;

    setResult({
        bars: barResults, totalBars, totalWaste: totalBars * stockLength - allPieces.reduce((a,b)=>a+b,0),
        totalWastePercent: ((totalBars * stockLength - allPieces.reduce((a,b)=>a+b,0)) / (totalBars * stockLength)) * 100,
        weightUsed: piecesW, weightScrap: totalMatW - piecesW, totalMaterialWeight: totalMatW
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
        <div className="lg:col-span-5 bg-[#0f172a] border border-white/5 rounded-xl p-4 shadow-xl space-y-4">
            <h3 className="text-white font-bold text-xs uppercase flex items-center gap-2 border-b border-white/5 pb-2"><Settings size={14} className="text-brand-orange" /> Parâmetros de Stock</h3>
            <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1"><label className="text-[10px] text-gray-500 font-bold uppercase">Barra (mm)</label><input type="number" value={stockLength} onChange={e => setStockLength(Number(e.target.value))} className="w-full bg-[#1e293b] border border-white/10 rounded p-1.5 text-white text-xs outline-none focus:border-brand-orange h-8" /></div>
                <div className="space-y-1"><label className="text-[10px] text-gray-500 font-bold uppercase">Serra (mm)</label><input type="number" value={bladeWidth} onChange={e => setBladeWidth(Number(e.target.value))} className="w-full bg-[#1e293b] border border-white/10 rounded p-1.5 text-white text-xs outline-none focus:border-brand-orange h-8" /></div>
            </div>
            <div className="pt-3 border-t border-white/5">
                <div className="flex gap-2 mb-3">
                    <input type="number" placeholder="Comprimento (mm)" value={newItemLength} onChange={e => setNewItemLength(e.target.value)} className="flex-1 bg-[#1e293b] border border-white/10 rounded p-1.5 text-white text-xs outline-none h-8" />
                    <input type="number" placeholder="Qtd" value={newItemQty} onChange={e => setNewItemQty(e.target.value)} className="w-16 bg-[#1e293b] border border-white/10 rounded p-1.5 text-white text-xs outline-none text-center h-8" />
                    <button onClick={handleAddItem} className="bg-brand-orange text-white px-3 rounded hover:bg-brand-orange-dark h-8 flex items-center justify-center"><Plus size={16} /></button>
                </div>
                {error && <p className="text-red-400 text-[10px] mb-2">{error}</p>}
                <div id="cut-list-container" className="bg-black/20 rounded-lg p-2 max-h-40 overflow-y-auto border border-white/5">
                    {items.length === 0 && <p className="text-center text-xs text-gray-600 py-4">Nenhuma peça adicionada</p>}
                    {items.map(i => (
                        <div key={i.id} className="flex justify-between items-center text-xs text-gray-300 p-1.5 border-b border-white/5 last:border-0 hover:bg-white/5 rounded">
                            <span>{i.quantity}x {i.length}mm</span>
                            <button onClick={() => setItems(prev => prev.filter(x => x.id !== i.id))} className="text-gray-500 hover:text-red-400"><Trash2 size={12} /></button>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={calculateNesting} disabled={items.length === 0} className="w-full bg-white text-brand-blue-dark font-bold py-2.5 rounded-lg hover:bg-gray-100 transition-all uppercase text-xs tracking-widest disabled:opacity-30">Calcular Otimização</button>
        </div>
        <div className="lg:col-span-7">
            {result ? (
                <div className="space-y-3 animate-in fade-in">
                    <div className="grid grid-cols-3 gap-3">
                        <div className="bg-[#1e293b] p-3 rounded-xl text-center border border-white/5"><span className="text-[9px] text-gray-500 uppercase block font-bold">Barras</span><span className="text-xl font-bold text-white">{result.totalBars}</span></div>
                        <div className="bg-[#1e293b] p-3 rounded-xl text-center border border-white/5"><span className="text-[9px] text-gray-500 uppercase block font-bold">Aproveitamento</span><span className="text-xl font-bold text-green-400">{(100 - result.totalWastePercent).toFixed(1)}%</span></div>
                        <div className="bg-[#1e293b] p-3 rounded-xl text-center border border-white/5"><span className="text-[9px] text-gray-500 uppercase block font-bold">Sucata (Comp)</span><span className="text-xl font-bold text-red-400">{result.totalWaste.toFixed(0)}mm</span></div>
                    </div>
                    <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1 custom-scrollbar">
                        {result.bars.map(bar => (
                            <div key={bar.id} className="bg-[#0f172a] border border-white/5 rounded-lg p-3">
                                <div className="flex justify-between text-[10px] text-gray-400 mb-1.5 uppercase font-bold"><span>Barra #{bar.id}</span><span>Uso: {bar.usage.toFixed(1)}%</span></div>
                                <div className="h-6 bg-gray-800 rounded flex overflow-hidden border border-white/5">
                                    {bar.cuts.map((c, idx) => (
                                        <div key={idx} style={{ width: `${(c/stockLength)*100}%` }} className="h-full bg-brand-blue-light border-r border-black/20 flex items-center justify-center text-[8px] font-bold text-white group relative cursor-help hover:bg-brand-blue-light/80">
                                            <span className="truncate px-0.5">{c}</span>
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 bg-black text-white text-[9px] px-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none mb-1 whitespace-nowrap z-10">{c}mm</div>
                                        </div>
                                    ))}
                                    <div className="flex-1 bg-red-900/30 flex items-center justify-center text-[8px] text-red-300 pattern-diagonal-lines-sm"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : <div className="h-full border-2 border-dashed border-white/5 rounded-xl flex flex-col items-center justify-center text-gray-600 p-8">
                  <Scissors size={32} className="mb-2 opacity-20" />
                  <span className="text-xs italic">Adicione peças e clique em calcular.</span>
                </div>}
        </div>
    </div>
  );
};

export default LinearNesting;
