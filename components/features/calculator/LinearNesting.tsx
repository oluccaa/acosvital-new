
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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 bg-[#0f172a] border border-white/5 rounded-2xl p-6 shadow-xl space-y-6">
            <h3 className="text-white font-bold text-sm uppercase flex items-center gap-2 border-b border-white/5 pb-2"><Settings size={16} className="text-brand-orange" /> Parâmetros de Stock</h3>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1"><label className="text-[10px] text-gray-500 font-bold uppercase">Barra (mm)</label><input type="number" value={stockLength} onChange={e => setStockLength(Number(e.target.value))} className="w-full bg-[#1e293b] border border-white/10 rounded-lg p-2 text-white outline-none focus:border-brand-orange" /></div>
                <div className="space-y-1"><label className="text-[10px] text-gray-500 font-bold uppercase">Serra (mm)</label><input type="number" value={bladeWidth} onChange={e => setBladeWidth(Number(e.target.value))} className="w-full bg-[#1e293b] border border-white/10 rounded-lg p-2 text-white outline-none focus:border-brand-orange" /></div>
            </div>
            <div className="pt-4 border-t border-white/5">
                <div className="flex gap-2 mb-4">
                    <input type="number" placeholder="Comprimento" value={newItemLength} onChange={e => setNewItemLength(e.target.value)} className="flex-1 bg-[#1e293b] border border-white/10 rounded-lg p-2 text-white outline-none" />
                    <input type="number" placeholder="Qtd" value={newItemQty} onChange={e => setNewItemQty(e.target.value)} className="w-20 bg-[#1e293b] border border-white/10 rounded-lg p-2 text-white outline-none text-center" />
                    <button onClick={handleAddItem} className="bg-brand-orange text-white p-2 rounded-lg hover:bg-brand-orange-dark"><Plus size={20} /></button>
                </div>
                {error && <p className="text-red-400 text-[10px] mb-2">{error}</p>}
                <div id="cut-list-container" className="bg-black/20 rounded-xl p-2 max-h-40 overflow-y-auto">
                    {items.map(i => (
                        <div key={i.id} className="flex justify-between items-center text-xs text-gray-300 p-2 border-b border-white/5 last:border-0">
                            <span>{i.quantity}x {i.length}mm</span>
                            <button onClick={() => setItems(prev => prev.filter(x => x.id !== i.id))}><Trash2 size={12} /></button>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={calculateNesting} disabled={items.length === 0} className="w-full bg-white text-brand-blue-dark font-bold py-3 rounded-xl hover:bg-gray-100 transition-all uppercase text-xs tracking-widest disabled:opacity-30">Calcular Otimização</button>
        </div>
        <div className="lg:col-span-7">
            {result ? (
                <div className="space-y-4 animate-in fade-in">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-[#1e293b] p-4 rounded-xl text-center"><span className="text-[10px] text-gray-500 uppercase block">Barras</span><span className="text-2xl font-bold text-white">{result.totalBars}</span></div>
                        <div className="bg-[#1e293b] p-4 rounded-xl text-center"><span className="text-[10px] text-gray-500 uppercase block">Aproveitamento</span><span className="text-2xl font-bold text-green-400">{(100 - result.totalWastePercent).toFixed(1)}%</span></div>
                        <div className="bg-[#1e293b] p-4 rounded-xl text-center"><span className="text-[10px] text-gray-500 uppercase block">Sucata</span><span className="text-2xl font-bold text-red-400">{result.weightScrap.toFixed(2)} kg</span></div>
                    </div>
                    {result.bars.map(bar => (
                        <div key={bar.id} className="bg-[#0f172a] border border-white/5 rounded-xl p-4">
                            <div className="flex justify-between text-[10px] text-gray-400 mb-2 uppercase font-bold"><span>Barra #{bar.id}</span><span>Uso: {bar.usage.toFixed(1)}%</span></div>
                            <div className="h-8 bg-gray-800 rounded flex overflow-hidden border border-white/5">
                                {bar.cuts.map((c, idx) => (
                                    <div key={idx} style={{ width: `${(c/stockLength)*100}%` }} className="h-full bg-brand-blue-light border-r border-black/20 flex items-center justify-center text-[8px] font-bold text-white">{c}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : <div className="h-full border-2 border-dashed border-white/5 rounded-2xl flex items-center justify-center text-gray-600 text-sm italic">Adicione itens e calcule para ver o resultado.</div>}
        </div>
    </div>
  );
};

export default LinearNesting;
