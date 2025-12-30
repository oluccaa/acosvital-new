
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
    Calculator, Circle, Square, Box, Layers, Disc, Grid, LayoutGrid, 
    Cylinder, CornerDownRight, ShoppingCart, BoxSelect, RefreshCcw, Plus, Trash2, Info, ChevronDown,
    Filter, Split, Package, Printer, Share2, Copy
} from 'lucide-react';
import WhatsappIcon from '../../common/icons/WhatsappIcon';
import MeasurementInput, { ForcedUnit } from '../../common/MeasurementInput';
import Tooltip from '../../common/Tooltip';
import { useSteelCalculator, ProductType } from '../../../hooks/useSteelCalculator';
import { useEngineering, ProjectItem } from '../../../context/EngineeringContext';

const generateId = () => Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
const safeParseUI = (val: string | number): number => {
    if (typeof val === 'number') return val;
    if (!val) return 0;
    return parseFloat(val.toString().replace(',', '.')) || 0;
};

// --- PRESETS DE ESPESSURA ---
const COMMON_THICKNESSES = [
    { label: '1/8"', val: '3,17' },
    { label: '3/16"', val: '4,76' },
    { label: '1/4"', val: '6,35' },
    { label: '3/8"', val: '9,52' },
    { label: '1/2"', val: '12,7' }
];

// --- DICIONÁRIO DE DESCRIÇÕES (TOOLTIPS) ---
const DESCRIPTIONS: Record<string, string> = {
    // Produtos
    'plate': 'Chapas planas de aço (xadrez, lisas, perfuradas).',
    'bar_round': 'Barras sólidas de seção circular.',
    'bar_square': 'Barras sólidas de seção quadrada.',
    'tube_round': 'Tubos industriais com costura ou sem costura.',
    'fitting_elbow': 'Curvas de gomo (segmentadas) ou curvas prontas.',
    'fitting_reducer': 'Peça de caldeiraria para união de diâmetros diferentes (Cone).',
    'fitting_tee': 'Conexão em formato de T para derivação.',
    'flange_square': 'Anéis cortados de chapas ou flanges planos.',
    'tube_calendered': 'Tubo fabricado a partir do curvamento de chapas.',
    'grating': 'Grades de piso para passarelas e plataformas.',
    'expanded_metal': 'Chapa metálica cortada e esticada (losangos).',
    
    // Campos
    'swd': 'Short Way of Design: Diagonal menor do losango.',
    'strand': 'Largura do cordão (fio) da malha.',
    'pitch': 'Distância entre centros das barras.',
    'radius': 'Raio de centro da curva.',
    'angle': 'Grau de abertura da curva ou gomo.'
};

// --- CONSTANTES ---
const MATERIAL_SPECS: Record<string, string> = {
    carbon: "Aço Carbono",
    inox304: "Inox 304",
    inox316: "Inox 316",
    aluminum: "Alumínio"
};

const EXPANDED_PATTERNS = [
    { id: "xp-13", label: "XP-13", swd: 13, strand: 1.5, thickness: 1.5 },
    { id: "gme-13", label: "GME-13", swd: 13, strand: 2.0, thickness: 2.0 },
    { id: "gme-20", label: "GME-20", swd: 25, strand: 3.0, thickness: 2.65 },
    { id: "gme-38", label: "GME-38", swd: 38, strand: 3.5, thickness: 3.0 },
    { id: "gr-500", label: "GR-500", swd: 50, strand: 5.0, thickness: 4.75 },
    { id: "custom", label: "Outro", swd: 0, strand: 0, thickness: 0 }
];

type TubeField = 'outerDiameter' | 'innerDiameter' | 'thickness';

const MESH_OPTIONS = [
    { id: "25-100", pitch: "25", label: "25x100mm" },
    { id: "30-100", pitch: "30", label: "30x100mm" },
    { id: "30-50",  pitch: "30", label: "30x50mm" },
    { id: "34-38",  pitch: "34", label: "34x38mm" },
    { id: "custom", pitch: "",   label: "Outra" }
];

const SteelCalculator: React.FC = () => {
    const { t } = useTranslation();
    const { 
        projectItems, 
        addToProject: addProjectItem, 
        removeFromProject, 
        clearProject,
        calculatorState,
        updateCalculatorField
    } = useEngineering();

    const selectedType = (calculatorState.selectedType as ProductType) || 'plate';
    const setSelectedType = (type: ProductType) => updateCalculatorField('selectedType', type);

    const [meshId, setMeshId] = useState<string>('30-100');
    const [expandedPatternId, setExpandedPatternId] = useState<string>('gme-13');
    const [isCustomExpanded, setIsCustomExpanded] = useState<boolean>(false);
    const [editHistory, setEditHistory] = useState<TubeField[]>([]);
    const [copied, setCopied] = useState(false);
    
    // Estado para forçar a unidade do input de espessura
    const [thicknessUnitForce, setThicknessUnitForce] = useState<ForcedUnit | undefined>(undefined);

    const { 
        values, extras, totalWeight, unitWeight, engData, 
        handleInputChange, calculate, reset, setValues
    } = useSteelCalculator();

    useEffect(() => {
        calculate(selectedType);
    }, [calculatorState, extras, calculate, selectedType]);

    // Lógica de Stack para Tubos (Cálculo automático de parede/diâmetro)
    const handleTubeInput = (field: TubeField, value: string) => {
        const currentValues = { ...calculatorState, [field]: value };
        let newHistory = editHistory.filter(f => f !== field);
        if (value && value.trim() !== '') {
            newHistory.push(field);
        }
        if (newHistory.length > 2) {
            newHistory.shift(); 
        }
        
        const allFields: TubeField[] = ['outerDiameter', 'innerDiameter', 'thickness'];
        
        if (newHistory.length === 2) {
            const input1 = newHistory[0];
            const input2 = newHistory[1];
            const target = allFields.find(f => f !== input1 && f !== input2);
            
            if (target) {
                 const v1 = parseFloat(currentValues[input1]?.replace(',', '.') || '0');
                 const v2 = parseFloat(currentValues[input2]?.replace(',', '.') || '0');
                 
                 if (v1 > 0 && v2 > 0) {
                     let res = 0;
                     let isValid = true;
                     const getVal = (name: TubeField) => (input1 === name ? v1 : v2);

                     if (target === 'thickness') {
                          const od = getVal('outerDiameter');
                          const id = getVal('innerDiameter');
                          if (od > id) res = (od - id) / 2;
                          else isValid = false;
                     } else if (target === 'outerDiameter') {
                          const id = getVal('innerDiameter');
                          const th = getVal('thickness');
                          res = id + (2 * th);
                     } else if (target === 'innerDiameter') {
                          const od = getVal('outerDiameter');
                          const th = getVal('thickness');
                          if (od > (2*th)) res = od - (2 * th);
                          else isValid = false;
                     }
                     
                     if (isValid && res > 0) {
                         currentValues[target] = res.toFixed(2).replace('.', ',');
                     } else {
                         currentValues[target] = '';
                     }
                 } else {
                     currentValues[target] = '';
                 }
            }
        }
        setEditHistory(newHistory);
        setValues(currentValues);
    };
    
    const getCalculatedField = (): TubeField | null => {
        if (editHistory.length < 2) return null;
        const allFields: TubeField[] = ['outerDiameter', 'innerDiameter', 'thickness'];
        const target = allFields.find(f => !editHistory.includes(f));
        if (target && values[target]) return target;
        return null;
    };

    const calculatedField = getCalculatedField();

    const renderTubeInput = (field: TubeField, label: string) => {
        const isAuto = calculatedField === field;
        const isThickness = field === 'thickness';
        
        return (
            <MeasurementInput 
                value={values[field] || ''} 
                onChange={(newValue) => handleTubeInput(field, newValue)}
                label={label}
                isAuto={isAuto}
                forceUnit={isThickness ? thicknessUnitForce : undefined}
            />
        );
    };

    const handleMeshSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const id = e.target.value;
        setMeshId(id);
        const option = MESH_OPTIONS.find(opt => opt.id === id);
        if (option) {
            if (id !== 'custom') {
                handleInputChange('pitch', option.pitch);
            }
        }
    };

    const handleExpandedPatternSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const id = e.target.value;
        setExpandedPatternId(id);
        if (id === 'custom') {
            setIsCustomExpanded(true);
        } else {
            setIsCustomExpanded(false);
            const pattern = EXPANDED_PATTERNS.find(p => p.id === id);
            if (pattern) {
                setValues(prev => ({
                    ...prev,
                    meshSWD: String(pattern.swd),
                    strandWidth: String(pattern.strand),
                    thickness: String(pattern.thickness)
                }));
            }
        }
    };

    const isTubeType = ['tube_round', 'tube_calendered', 'flange_square', 'fitting_elbow'].includes(selectedType);

    // Tipos que não usam espessura ou que tem lógica muito específica onde o preset não cabe
    const typesWithoutThickness = ['bar_round', 'bar_square']; 

    const handlePresetClick = (val: string) => {
        handleInputChange('thickness', val);
        // Força a unidade para 'mm' ao clicar no preset
        setThicknessUnitForce({ unit: 'mm', timestamp: Date.now() });
    };

    const CATEGORIES = {
        raw: { id: 'raw', label: "Matéria Prima", items: [
            { id: 'plate', icon: <Layers size={14} />, label: "Chapa" },
            { id: 'bar_round', icon: <Disc size={14} />, label: "Barra Red." },
            { id: 'bar_square', icon: <Box size={14} />, label: "Barra Quad." },
        ]},
        piping: { id: 'piping', label: "Tubulação", items: [
            { id: 'tube_round', icon: <Circle size={14} />, label: "Tubo Ind." },
            { id: 'fitting_elbow', icon: <CornerDownRight size={14} />, label: "Curva" },
            { id: 'fitting_reducer', icon: <Filter size={14} />, label: "Redução" },
            { id: 'fitting_tee', icon: <Split size={14} />, label: "Tê" },
            { id: 'flange_square', icon: <Square size={14} className="fill-current" />, label: "Anel" },
            { id: 'tube_calendered', icon: <Cylinder size={14} />, label: "Tubo Cal." },
        ]},
        structural: { id: 'structural', label: "Estrutural", items: [
            { id: 'grating', icon: <Grid size={14} />, label: "Grade Piso" },
            { id: 'expanded_metal', icon: <LayoutGrid size={14} />, label: "Expandida" },
        ]}
    };

    const generateTechnicalSpec = () => {
        const mat = MATERIAL_SPECS[values.material] || values.material;
        const fmt = (v: string, suffix: string = "mm") => v ? `${v}${suffix}` : "?";
        
        switch(selectedType) {
            case 'plate': return `Chapa ${mat} - ${fmt(values.thickness)} x ${fmt(values.width)} x ${fmt(values.length)}`;
            case 'bar_round': return `Barra Red. ${mat} - Ø ${fmt(values.outerDiameter)} x ${fmt(values.length)}`;
            case 'bar_square': return `Barra Quad. ${mat} - ${fmt(values.width)} x ${fmt(values.length)}`;
            case 'tube_round': return `Tubo ${mat} - Ø ${fmt(values.outerDiameter)} x Parede ${fmt(values.thickness)} x ${fmt(values.length)}`;
            case 'tube_calendered': return `Tubo Cal. ${mat} - Ø ${fmt(values.outerDiameter)} x ${fmt(values.thickness)} x ${fmt(values.length)}`;
            case 'flange_square': return `Anel ${mat} - Ø Ext ${fmt(values.outerDiameter)} x Ø Int ${fmt(values.innerDiameter)} x ${fmt(values.thickness)}`;
            case 'fitting_elbow': return `Curva Gomo ${mat} - Ø ${fmt(values.outerDiameter)} x ${fmt(values.thickness)} - R ${fmt(values.radius)} (${values.angle}°)`;
            case 'fitting_reducer': return `Redução ${mat} - Ø Maior ${fmt(values.outerDiameter)} x Ø Menor ${fmt(values.innerDiameter)} x ${fmt(values.thickness)} x H ${fmt(values.length)}`;
            case 'fitting_tee': return `Tê ${mat} - Ø ${fmt(values.outerDiameter)} x ${fmt(values.thickness)} - Corpo ${fmt(values.length)} / Deriv. ${fmt(values.height)}`;
            case 'grating': return `Grade ${mat} - ${values.length}x${values.width} - Barra ${values.height}x${values.thickness}`;
            case 'expanded_metal': return `Chapa Exp. ${mat} - ${values.width}x${values.length}`;
            default: return `Item ${mat}`;
        }
    };

    const addItem = () => {
        if (totalWeight <= 0) return;
        const qty = safeParseUI(values.quantity) > 0 ? safeParseUI(values.quantity) : 1;
        const mainItem: ProjectItem = {
            id: generateId(),
            type: selectedType,
            material: values.material,
            specs: generateTechnicalSpec(),
            quantity: qty,
            unitWeight: unitWeight,
            totalWeight: totalWeight,
            timestamp: Date.now(),
            meta: engData.meta
        };
        addProjectItem(mainItem);
    };

    const handleWhatsAppQuote = () => {
        if (projectItems.length === 0) return;
        let message = "*Cotação Aços Vital*\n\n";
        projectItems.forEach((item, index) => {
            message += `*${index + 1}.* ${item.specs}\nQtd: ${item.quantity} | Peso: ${item.totalWeight.toFixed(2)}kg\n\n`;
        });
        message += `*Total: ${projectItems.reduce((acc, i) => acc + i.totalWeight, 0).toFixed(2)} kg*`;
        window.open(`https://wa.me/551147972352?text=${encodeURIComponent(message)}`, '_blank');
    };

    const copyResult = () => {
        navigator.clipboard.writeText(`${totalWeight.toFixed(2)} kg`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 font-sans">
            
            {/* 1. PAINEL ESQUERDO (CONTROLES) */}
            <div className="lg:col-span-4 flex flex-col gap-4">
                
                {/* Product Grid - LISTA AGRUPADA (Full View) */}
                <div className="bg-[#0f172a] border border-white/5 rounded-xl p-3 shadow-xl flex flex-col max-h-[450px]">
                    <div className="flex justify-between items-center mb-2 px-1">
                        <h3 className="text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                            <BoxSelect size={12} className="text-brand-orange" /> Seleção de Item
                        </h3>
                        <button onClick={reset} className="text-gray-500 hover:text-white transition-colors" title="Resetar">
                            <RefreshCcw size={12} />
                        </button>
                    </div>
                    
                    {/* Container com Scroll para todas as categorias */}
                    <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar space-y-4">
                        {(Object.values(CATEGORIES) as any[]).map((cat) => (
                            <div key={cat.id}>
                                <div className="text-[9px] text-gray-500 font-bold uppercase tracking-wider mb-2 pl-2 border-l-2 border-brand-orange/30">
                                    {cat.label}
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    {cat.items.map((prod: any) => (
                                        <button
                                            key={prod.id}
                                            onClick={() => setSelectedType(prod.id as ProductType)}
                                            className={`
                                                relative flex flex-col items-center justify-center gap-1 p-2 rounded-lg border transition-all duration-200 group min-h-[60px]
                                                ${selectedType === prod.id 
                                                    ? 'bg-brand-blue-dark border-brand-orange text-white shadow-[0_0_10px_rgba(234,97,0,0.2)]' 
                                                    : 'bg-[#1e293b]/50 border-white/5 text-gray-400 hover:bg-[#1e293b] hover:border-white/20 hover:text-white'
                                                }
                                            `}
                                        >
                                            <div className={`${selectedType === prod.id ? 'text-brand-orange' : 'text-gray-500 group-hover:text-white'} transition-colors transform scale-90`}>
                                                {React.cloneElement(prod.icon, { size: 16 })}
                                            </div>
                                            <span className="text-[8px] font-bold uppercase text-center leading-tight w-full truncate px-0.5">
                                                {prod.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Inputs Section - Compacto */}
                <div className="bg-[#0f172a] border border-white/5 rounded-xl p-4 shadow-xl flex-1">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                            <Calculator size={12} className="text-brand-blue-light" /> Parâmetros
                        </h3>
                        <div className="relative w-32">
                             <select value={values.material} onChange={(e) => handleInputChange('material', e.target.value)} className="w-full bg-[#1e293b] border border-white/10 rounded text-[9px] uppercase font-bold text-white py-1 pl-2 pr-6 outline-none appearance-none cursor-pointer hover:border-brand-orange/50 transition-colors h-7">
                                <option value="carbon">Aço Carbono</option>
                                <option value="inox304">Inox 304</option>
                                <option value="inox316">Inox 316</option>
                                <option value="aluminum">Alumínio</option>
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={10} />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                             {(selectedType === 'plate' || selectedType === 'bar_square' || selectedType === 'flange_square') && (
                                <MeasurementInput value={values.width} onChange={(v) => handleInputChange('width', v)} label={(selectedType === 'flange_square' || selectedType === 'bar_square') ? "Lado" : "Largura"} />
                            )}

                             {selectedType === 'grating' && (
                                <>
                                    <div className="col-span-2 grid grid-cols-2 gap-3 bg-[#1e293b]/50 p-2 rounded-lg border border-white/5">
                                         <MeasurementInput value={values.length} onChange={(v) => handleInputChange('length', v)} label="Comp. (Vão)" />
                                         <MeasurementInput value={values.width} onChange={(v) => handleInputChange('width', v)} label="Largura" />
                                    </div>
                                    <MeasurementInput value={values.height} onChange={(v) => handleInputChange('height', v)} label="Alt. Barra" />
                                    <MeasurementInput 
                                        value={values.thickness} 
                                        onChange={(v) => handleInputChange('thickness', v)} 
                                        label="Esp. Barra" 
                                        forceUnit={thicknessUnitForce}
                                    />
                                    <div className="col-span-2">
                                        <div className="flex items-center gap-1 mb-0.5">
                                            <label className="text-[10px] text-gray-400 uppercase font-bold">Malha</label>
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="relative flex-1">
                                                <select value={meshId} onChange={handleMeshSelect} className="w-full bg-[#1e293b] border border-white/10 rounded-md py-1.5 pl-2 text-white text-[10px] outline-none appearance-none h-8">
                                                    {MESH_OPTIONS.map(opt => (<option key={opt.id} value={opt.id}>{opt.label}</option>))}
                                                </select>
                                                <ChevronDown size={10} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"/>
                                            </div>
                                            {meshId === 'custom' && (<MeasurementInput value={values.pitch} onChange={(v) => handleInputChange('pitch', v)} label="" placeholder="mm" className="flex-1" />)}
                                        </div>
                                    </div>
                                </>
                            )}

                            {selectedType === 'expanded_metal' && (
                                <>
                                    <div className="col-span-2">
                                        <label className="text-[10px] text-gray-400 uppercase font-bold mb-0.5 block">Malha</label>
                                        <div className="relative">
                                            <select value={expandedPatternId} onChange={handleExpandedPatternSelect} className="w-full bg-[#1e293b] border border-white/10 rounded-md py-1.5 pl-2 text-white text-[10px] outline-none appearance-none mb-2 h-8">
                                                {EXPANDED_PATTERNS.map(opt => (<option key={opt.id} value={opt.id}>{opt.label}</option>))}
                                            </select>
                                            <ChevronDown size={10} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none -mt-1"/>
                                        </div>
                                    </div>
                                    {isCustomExpanded && (
                                        <>
                                            <MeasurementInput 
                                                value={values.thickness} 
                                                onChange={(v) => handleInputChange('thickness', v)} 
                                                label="Espessura" 
                                                forceUnit={thicknessUnitForce}
                                            />
                                            <MeasurementInput value={values.strandWidth} onChange={(v) => handleInputChange('strandWidth', v)} label="Cordão" helpText={DESCRIPTIONS['strand']} />
                                            <MeasurementInput value={values.meshSWD} onChange={(v) => handleInputChange('meshSWD', v)} label="SWD" helpText={DESCRIPTIONS['swd']} />
                                        </>
                                    )}
                                    <MeasurementInput value={values.width} onChange={(v) => handleInputChange('width', v)} label="Largura" />
                                    <MeasurementInput value={values.length} onChange={(v) => handleInputChange('length', v)} label="Comprimento" />
                                </>
                            )}

                             {(selectedType !== 'flange_square' && selectedType !== 'fitting_elbow' && selectedType !== 'grating' && selectedType !== 'expanded_metal' && selectedType !== 'fitting_reducer' && selectedType !== 'fitting_tee') && (
                                <MeasurementInput value={values.length} onChange={(v) => handleInputChange('length', v)} label="Comprimento" />
                            )}

                            {isTubeType && (
                                <div className="col-span-2 grid grid-cols-2 gap-3 bg-[#1e293b]/50 p-2 rounded-lg border border-white/5 relative">
                                    <div className="absolute -top-1.5 right-2 text-[8px] bg-brand-orange text-white px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider">Auto Calc</div>
                                    {renderTubeInput('outerDiameter', "Ø Externo")}{renderTubeInput('innerDiameter', "Ø Interno")}{renderTubeInput('thickness', "Parede")}
                                </div>
                            )}

                            {selectedType === 'bar_round' && (<MeasurementInput value={values.outerDiameter} onChange={(v) => handleInputChange('outerDiameter', v)} label="Diâmetro" />)}
                            
                            {selectedType === 'fitting_elbow' && (
                                <>
                                    <MeasurementInput value={values.radius} onChange={(v) => handleInputChange('radius', v)} label="Raio Centro" helpText={DESCRIPTIONS['radius']} />
                                    <div>
                                        <div className="flex items-center gap-1 mb-0.5">
                                            <label className="text-[10px] text-gray-400 uppercase font-bold">Ângulo</label>
                                            <Tooltip text={DESCRIPTIONS['angle']} />
                                        </div>
                                        <input type="text" value={values.angle} onChange={(e) => handleInputChange('angle', e.target.value)} className="w-full bg-[#1e293b] border border-white/10 rounded-md py-1.5 px-2 text-white text-xs outline-none focus:border-brand-orange transition-colors h-8" />
                                    </div>
                                </>
                            )}

                             {selectedType === 'fitting_reducer' && (
                                <>
                                    <MeasurementInput value={values.outerDiameter} onChange={(v) => handleInputChange('outerDiameter', v)} label="Ø Maior (Ext)" />
                                    <MeasurementInput value={values.innerDiameter} onChange={(v) => handleInputChange('innerDiameter', v)} label="Ø Menor (Ext)" />
                                    <MeasurementInput value={values.length} onChange={(v) => handleInputChange('length', v)} label="Altura" />
                                    <MeasurementInput 
                                        value={values.thickness} 
                                        onChange={(v) => handleInputChange('thickness', v)} 
                                        label="Espessura" 
                                        forceUnit={thicknessUnitForce}
                                    />
                                </>
                            )}

                            {selectedType === 'fitting_tee' && (
                                <>
                                    <MeasurementInput value={values.outerDiameter} onChange={(v) => handleInputChange('outerDiameter', v)} label="Ø Corpo (Ext)" />
                                    <MeasurementInput 
                                        value={values.thickness} 
                                        onChange={(v) => handleInputChange('thickness', v)} 
                                        label="Espessura" 
                                        forceUnit={thicknessUnitForce}
                                    />
                                    <MeasurementInput value={values.length} onChange={(v) => handleInputChange('length', v)} label="Comp. Corpo" />
                                    <MeasurementInput value={values.height} onChange={(v) => handleInputChange('height', v)} label="Comp. Derivação" />
                                </>
                            )}

                            {(selectedType === 'plate') && (
                                <div className="col-span-2">
                                    <MeasurementInput 
                                        value={values.thickness} 
                                        onChange={(v) => handleInputChange('thickness', v)} 
                                        label="Espessura" 
                                        forceUnit={thicknessUnitForce}
                                    />
                                </div>
                            )}

                            {/* PRESETS DE ESPESSURA - EXIBIDO PARA TODOS OS TIPOS QUE USAM ESPESSURA/PAREDE */}
                            {(!typesWithoutThickness.includes(selectedType) && !isCustomExpanded) && (
                                <div className="col-span-2 flex gap-1.5 flex-wrap">
                                    {COMMON_THICKNESSES.map((t) => (
                                        <button 
                                            key={t.label} 
                                            onClick={() => handlePresetClick(t.val)}
                                            className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] text-gray-400 hover:text-white hover:bg-white/10 hover:border-brand-orange/30 transition-all"
                                        >
                                            {t.label}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {(selectedType !== 'plate' && !isTubeType && !typesWithoutThickness.includes(selectedType) && !['fitting_reducer', 'fitting_tee', 'grating', 'expanded_metal'].includes(selectedType)) && (
                                <MeasurementInput 
                                    value={values.thickness} 
                                    onChange={(v) => handleInputChange('thickness', v)} 
                                    label="Espessura" 
                                    forceUnit={thicknessUnitForce}
                                />
                            )}
                        </div>

                        <div className="pt-3 border-t border-white/5">
                            <label className="text-[10px] text-gray-400 uppercase font-bold mb-0.5 block">Quantidade</label>
                            <div className="flex items-center bg-[#1e293b] border border-white/10 rounded-md p-0.5 h-8">
                                <input type="number" value={values.quantity} onChange={(e) => handleInputChange('quantity', e.target.value)} min="1" className="flex-1 bg-transparent px-2 text-white text-xs font-bold outline-none h-full" />
                                <span className="text-gray-500 text-[10px] px-2 border-l border-white/5 h-full flex items-center">UN</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. PAINEL DIREITO (RESULTADOS E LISTA) */}
            <div className="lg:col-span-8 flex flex-col gap-4">
                
                {/* Cartão "Digital Twin" de Resultado - Compacto */}
                <div className="bg-brand-blue-dark rounded-xl p-5 relative overflow-hidden shadow-2xl border border-white/5 group min-h-[160px] flex flex-col justify-between">
                    
                    {/* Background Effects */}
                    <div className="absolute right-0 top-0 w-48 h-48 bg-brand-orange/10 rounded-full blur-3xl -mr-12 -mt-12 pointer-events-none"></div>
                    <div className="absolute left-0 bottom-0 w-32 h-32 bg-brand-blue-light/10 rounded-full blur-3xl -ml-8 -mb-8 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-4">
                        <div className="w-full">
                             <div className="flex justify-between items-start">
                                 <div>
                                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/10 border border-white/10 text-brand-orange text-[9px] font-bold uppercase tracking-widest mb-2 backdrop-blur-sm">
                                        <Info size={10} /> Estimativa
                                    </span>
                                    <div className="flex items-baseline gap-2 group/weight cursor-pointer" onClick={copyResult} title="Clique para copiar">
                                        <span className="text-5xl md:text-6xl font-mono font-bold text-white tracking-tighter tabular-nums leading-none">
                                            {totalWeight > 0 ? totalWeight.toFixed(2) : '0.00'}
                                        </span>
                                        <span className="text-lg md:text-xl text-white/50 font-medium">kg</span>
                                        {copied && <span className="text-xs text-green-400 font-bold animate-pulse ml-2">Copiado!</span>}
                                    </div>
                                 </div>
                             </div>

                            <div className="mt-3 flex flex-wrap gap-3 text-[10px] font-medium text-blue-200/60">
                                <div className="flex items-center gap-1.5 bg-black/20 px-2 py-1 rounded border border-white/5">
                                    <span className="text-brand-orange uppercase">Unit:</span> {unitWeight.toFixed(2)} kg
                                </div>
                                {engData.surfaceArea && (
                                    <div className="flex items-center gap-1.5 bg-black/20 px-2 py-1 rounded border border-white/5">
                                        <span className="text-brand-orange uppercase">Área:</span> {engData.surfaceArea.toFixed(2)} m²
                                    </div>
                                )}
                            </div>
                        </div>

                        <button 
                            type="button" 
                            onClick={addItem} 
                            disabled={totalWeight <= 0}
                            className="w-full md:w-auto bg-brand-orange hover:bg-white hover:text-brand-orange text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-brand-orange/20 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 uppercase tracking-wider text-xs whitespace-nowrap"
                        >
                            <Plus size={16} /> Adicionar
                        </button>
                    </div>
                </div>

                {/* Lista de Materiais - Data Grid Compacto */}
                <div className="bg-[#0f172a] border border-white/5 rounded-xl shadow-xl flex-1 flex flex-col overflow-hidden min-h-[300px]">
                    <div className="px-4 py-3 border-b border-white/5 bg-[#1e293b]/50 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <div>
                            <h3 className="font-bold text-white flex items-center gap-2 uppercase text-xs tracking-wide">
                                <ShoppingCart size={14} className="text-brand-orange" /> Lista de Materiais
                            </h3>
                        </div>
                        <div className="flex gap-1.5">
                             <button className="text-gray-400 hover:text-white p-1.5 rounded hover:bg-white/10 transition-colors" title="Imprimir">
                                <Printer size={14} />
                             </button>
                             <button className="text-gray-400 hover:text-white p-1.5 rounded hover:bg-white/10 transition-colors" title="Compartilhar">
                                <Share2 size={14} />
                             </button>
                             <div className="w-px h-5 bg-white/10 mx-1 self-center"></div>
                             <button onClick={clearProject} className="text-red-400 hover:text-red-300 flex items-center gap-1 px-2 py-1 rounded hover:bg-red-500/10 transition-colors text-[10px] font-bold uppercase">
                                <Trash2 size={12} /> Limpar
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 overflow-auto max-h-[400px] scrollbar-thin scrollbar-thumb-gray-600 p-0">
                        {projectItems.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-48 text-gray-500">
                                <Package size={32} className="mb-2 opacity-20" />
                                <p className="text-xs font-medium">Nenhum item adicionado.</p>
                            </div>
                        ) : (
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-[#1e293b] text-gray-400 font-bold text-[9px] uppercase tracking-wider sticky top-0 z-10 shadow-sm">
                                    <tr>
                                        <th className="px-4 py-2 border-b border-white/5">Item</th>
                                        <th className="px-4 py-2 border-b border-white/5 text-center">Qtd</th>
                                        <th className="px-4 py-2 border-b border-white/5 text-right">Peso</th>
                                        <th className="px-4 py-2 border-b border-white/5 w-8"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {projectItems.map((item, idx) => (
                                        <tr key={item.id} className="hover:bg-white/5 transition-colors group">
                                            <td className="px-4 py-2.5">
                                                <div className="font-bold text-gray-200 text-[11px] leading-tight">{idx + 1}. {item.type.toUpperCase().replace('_', ' ')}</div>
                                                <div className="text-[9px] text-gray-500 mt-0.5 font-mono leading-tight">{item.specs}</div>
                                            </td>
                                            <td className="px-4 py-2.5 text-center text-xs font-medium text-gray-400">{item.quantity}</td>
                                            <td className="px-4 py-2.5 text-right font-mono text-xs font-bold text-brand-blue-light">
                                                {item.totalWeight.toFixed(2)} <span className="text-[9px] text-gray-600 font-normal">kg</span>
                                            </td>
                                            <td className="px-4 py-2.5 text-center">
                                                <button onClick={() => removeFromProject(item.id)} className="text-gray-600 hover:text-red-400 transition-colors p-1 rounded hover:bg-red-500/10">
                                                    <Trash2 size={12} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>

                    {projectItems.length > 0 && (
                        <div className="p-4 bg-[#1e293b]/30 border-t border-white/5 flex justify-between items-center gap-4">
                            <div>
                                <span className="text-[9px] text-gray-500 uppercase font-bold tracking-widest block">Total</span>
                                <div className="text-2xl font-bold text-white leading-none">
                                    {projectItems.reduce((acc, i) => acc + i.totalWeight, 0).toFixed(2)} <span className="text-xs text-gray-500 font-medium">kg</span>
                                </div>
                            </div>
                            <button onClick={handleWhatsAppQuote} className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-2 px-4 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-1.5 text-xs uppercase tracking-wide">
                                <WhatsappIcon size={16} /> <span className="hidden sm:inline">Solicitar Cotação</span>
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default SteelCalculator;
