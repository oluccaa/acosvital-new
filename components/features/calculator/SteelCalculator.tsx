import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
    Calculator, Circle, Square, Box, Layers, Disc, Grid, LayoutGrid, 
    Cylinder, CornerDownRight, Package, Hammer, Construction, ChevronDown,
    Printer, ShoppingCart, BoxSelect, RefreshCcw, Plus, Trash2, Ruler
} from 'lucide-react';
import WhatsappIcon from '../../common/icons/WhatsappIcon';
import MeasurementInput from '../../common/MeasurementInput';
import { useSteelCalculator, ProductType } from '../../../hooks/useSteelCalculator';
import { useEngineering, ProjectItem } from '../../../context/EngineeringContext';

const generateId = () => Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
const safeParseUI = (val: string | number): number => {
    if (typeof val === 'number') return val;
    if (!val) return 0;
    return parseFloat(val.toString().replace(',', '.')) || 0;
};

// --- MAPA DE NORMAS TÉCNICAS ---
const MATERIAL_SPECS: Record<string, string> = {
    carbon: "Aço Carbono ASTM A36 / SAE 1020",
    inox304: "Aço Inox AISI 304 / ASTM A276",
    inox316: "Aço Inox AISI 316 / ASTM A276",
    aluminum: "Alumínio Liga 5052 H34"
};

// --- BIBLIOTECA DE PADRÕES DE CHAPA EXPANDIDA ---
const EXPANDED_PATTERNS = [
    { id: "xp-13", label: "XP-13 (Micro)", swd: 13, strand: 1.5, thickness: 1.5 },
    { id: "gme-13", label: "GME-13 (Padrão)", swd: 13, strand: 2.0, thickness: 2.0 },
    { id: "gme-20", label: "GME-20 (Industrial)", swd: 25, strand: 3.0, thickness: 2.65 },
    { id: "gme-38", label: "GME-38 (Médio)", swd: 38, strand: 3.5, thickness: 3.0 },
    { id: "gr-500", label: "GR-500 (Pesado)", swd: 50, strand: 5.0, thickness: 4.75 },
    { id: "gr-700", label: "GR-700 (Extra Pesado)", swd: 70, strand: 6.0, thickness: 6.35 },
    { id: "custom", label: "Personalizado / Outra Medida", swd: 0, strand: 0, thickness: 0 }
];

type TubeField = 'outerDiameter' | 'innerDiameter' | 'thickness';

const MESH_OPTIONS = [
    { id: "25-100", pitch: "25", label: "25x100mm - Leve (Econômica)" },
    { id: "30-100", pitch: "30", label: "30x100mm - Padrão (Industrial)" },
    { id: "30-50",  pitch: "30", label: "30x50mm - Reforçada (Tráfego)" },
    { id: "34-38",  pitch: "34", label: "34x38mm - Malha Fechada (Segurança)" },
    { id: "custom", pitch: "",   label: "Outra / Personalizada" }
];

const SteelCalculator: React.FC = () => {
    const { t } = useTranslation();
    const { 
        projectItems, 
        addToProject: addProjectItem, 
        removeFromProject, 
        clearProject,
        sendToNesting,
        sendToWelding,
        calculatorState,
        updateCalculatorField
    } = useEngineering();

    const selectedType = (calculatorState.selectedType as ProductType) || 'plate';
    const setSelectedType = (type: ProductType) => updateCalculatorField('selectedType', type);

    const [meshId, setMeshId] = useState<string>('30-100');
    const [expandedPatternId, setExpandedPatternId] = useState<string>('gme-13');
    const [isCustomExpanded, setIsCustomExpanded] = useState<boolean>(false);
    const [editHistory, setEditHistory] = useState<TubeField[]>([]);

    const { 
        values, extras, totalWeight, unitWeight, engData, 
        handleInputChange, calculate, reset, setValues
    } = useSteelCalculator();

    useEffect(() => {
        calculate(selectedType);
    }, [calculatorState, extras, calculate, selectedType]);

    // Lógica de Stack para Tubos (Círculo de Apollonius Simplificado)
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
        return (
            <MeasurementInput 
                value={values[field] || ''} 
                onChange={(newValue) => handleTubeInput(field, newValue)}
                label={label}
                isAuto={isAuto}
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

    const CATEGORIES = {
        raw: { id: 'raw', label: t('calculatorPage.categories.raw'), icon: <Package size={16} />, items: [
            { id: 'plate', icon: <Layers size={20} />, label: t('calculatorPage.products.plate') },
            { id: 'bar_round', icon: <Disc size={20} />, label: t('calculatorPage.products.barRound') },
            { id: 'bar_square', icon: <Box size={20} />, label: t('calculatorPage.products.barSquare') },
        ]},
        piping: { id: 'piping', label: t('calculatorPage.categories.piping'), icon: <Hammer size={16} />, items: [
            { id: 'tube_round', icon: <Circle size={20} />, label: t('calculatorPage.products.tubeRound') },
            { id: 'fitting_elbow', icon: <CornerDownRight size={20} />, label: t('calculatorPage.products.fittingElbow') },
            { id: 'flange_square', icon: <Square size={20} className="fill-current" />, label: t('calculatorPage.products.flangeSquare') },
            { id: 'tube_calendered', icon: <Cylinder size={20} />, label: t('calculatorPage.products.tubeCalendered') },
        ]},
        structural: { id: 'structural', label: t('calculatorPage.categories.structural'), icon: <Construction size={16} />, items: [
            { id: 'grating', icon: <Grid size={20} />, label: t('calculatorPage.products.grating') },
            { id: 'expanded_metal', icon: <LayoutGrid size={20} />, label: t('calculatorPage.products.expandedMetal') },
        ]}
    };

    const generateTechnicalSpec = () => {
        const mat = MATERIAL_SPECS[values.material] || values.material;
        const fmt = (v: string, suffix: string = "mm") => v ? `${v}${suffix}` : "?";
        let desc = "";
        let finish = "";
        if (extras.galvanized) finish = " | Acabamento: Galvanizado a Fogo";
        if (extras.isFlattened && selectedType === 'expanded_metal') finish = " | Acabamento: Laminada (Achatada)";

        switch(selectedType) {
            case 'plate': desc = `Chapa ${mat} - Esp. ${fmt(values.thickness)} x Larg. ${fmt(values.width)} x Comp. ${fmt(values.length)}`; break;
            case 'bar_round': desc = `Barra Redonda ${mat} - Diâmetro Ø ${fmt(values.outerDiameter)} x Comp. ${fmt(values.length)}`; break;
            case 'bar_square': desc = `Barra Quadrada ${mat} - Bitola ${fmt(values.width)} x Comp. ${fmt(values.length)}`; break;
            case 'tube_round': desc = `Tubo Industrial Redondo ${mat} - Ø Ext. ${fmt(values.outerDiameter)} x Parede ${fmt(values.thickness)} x Comp. ${fmt(values.length)}`; break;
            case 'tube_calendered': desc = `Tubo Calandrado ${mat} - Ø Ext. ${fmt(values.outerDiameter)} x Parede ${fmt(values.thickness)} x Comp. ${fmt(values.length)} [Desenvolvimento: ${engData.devLength?.toFixed(1)}mm]`; break;
            case 'flange_square': desc = `Anel/Disco de Chapa ${mat} - Ø Ext. ${fmt(values.outerDiameter)} x Ø Int. ${fmt(values.innerDiameter)} x Esp. ${fmt(values.thickness)}`; break;
            case 'fitting_elbow': desc = `Curva de Gomo ${mat} - Ø ${fmt(values.outerDiameter)} x Parede ${fmt(values.thickness)} - Raio ${fmt(values.radius)} - Ângulo ${values.angle}°`; break;
            case 'grating': 
                 const meshName = meshId === 'custom' ? `Personalizada (${values.pitch}mm)` : MESH_OPTIONS.find(o => o.id === meshId)?.label.split('-')[0].trim();
                 desc = `Grade de Piso Eletrofundida ${mat} - Malha ${meshName} - Barra Portante ${values.height}x${values.thickness}mm - Dim. Painel ${values.length}(vão) x ${values.width}mm`;
                 break;
            case 'expanded_metal':
                 const patternName = isCustomExpanded ? 'Especial' : EXPANDED_PATTERNS.find(p => p.id === expandedPatternId)?.label.split('(')[0].trim();
                 desc = `Chapa Expandida ${mat} - Padrão ${patternName} [SWD ${fmt(values.meshSWD)} x Cordão ${fmt(values.strandWidth)} x Esp. ${fmt(values.thickness)}] - Dim. ${fmt(values.width)} x ${fmt(values.length)}`;
                 break;
            default: desc = `Item Personalizado ${mat}`;
        }
        return desc + finish;
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
        let message = "*Cotação Técnica - Aços Vital*\n\n";
        projectItems.forEach((item, index) => {
            message += `*Item ${index + 1}:* ${item.specs}\n`;
            message += `Qtd: ${item.quantity} | Peso Aprox: ${item.totalWeight > 0 ? item.totalWeight.toFixed(2) + ' kg' : '-'}\n\n`;
        });
        const grandTotal = projectItems.reduce((acc, i) => acc + i.totalWeight, 0);
        if (grandTotal > 0) message += `*Peso Total do Projeto: ${grandTotal.toFixed(2)} kg*`;
        window.open(`https://wa.me/551147972352?text=${encodeURIComponent(message)}`, '_blank');
    };

    const handleContextAction = (item: ProjectItem) => {
        const isLinear = ['tube_round', 'bar_round', 'bar_square', 'tube_calendered'].includes(item.type);
        const isWeldable = ['fitting_elbow', 'flange_square', 'tube_round', 'tube_calendered'].includes(item.type);

        if (isLinear && item.meta?.length) {
            sendToNesting({ items: [{ length: item.meta.length, quantity: item.quantity }] });
        } else if (isWeldable && item.meta?.outerDiameter) {
            const perimeter = Math.PI * item.meta.outerDiameter;
            sendToWelding({ length: parseFloat((perimeter / 1000).toFixed(3)), thickness: item.meta.thickness });
        }
    };

    return (
        <div className="max-w-6xl mx-auto font-sans space-y-8">
            {/* SELETOR DE PRODUTO */}
            <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-4 sm:p-6 shadow-xl print:hidden">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-brand-orange/20 rounded-lg text-brand-orange"><BoxSelect size={20} /></div>
                    <div>
                        <h3 className="text-white font-bold text-sm uppercase tracking-widest">{t('calculatorPage.selectProduct')}</h3>
                        <p className="text-xs text-gray-400">Escolha o perfil para iniciar o cálculo</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {(Object.values(CATEGORIES) as any[]).map((cat) => (
                        <div key={cat.id} className="space-y-3">
                            <div className="flex items-center gap-2 text-brand-blue-light/60 px-1">
                                {cat.icon}
                                <span className="text-[10px] font-bold uppercase tracking-widest">{cat.label}</span>
                                <div className="h-px flex-1 bg-white/5"></div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                {cat.items.map((prod: any) => (
                                    <button key={prod.id} onClick={() => setSelectedType(prod.id as ProductType)}
                                        className={`group flex flex-col items-center justify-center py-3 px-2 rounded-xl border transition-all duration-200 min-h-[80px] ${selectedType === prod.id ? 'bg-brand-blue-dark border-brand-orange text-white ring-1 ring-brand-orange shadow-lg shadow-brand-blue-dark/50' : 'bg-white/5 border-transparent text-gray-400 hover:bg-white/10 hover:text-white'}`}>
                                        <div className={`mb-1.5 transition-transform duration-200 ${selectedType === prod.id ? 'text-brand-orange scale-110' : 'group-hover:text-white'}`}>{prod.icon}</div>
                                        <span className="text-[9px] font-bold uppercase text-center leading-tight w-full truncate px-1">{prod.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ÁREA DE CÁLCULO */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 print:hidden">
                <div className="lg:col-span-7 space-y-6">
                    <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-4 sm:p-6 shadow-xl h-full">
                        <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                             <h3 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                                <Calculator size={16} className="text-brand-blue-light" /> Parâmetros
                            </h3>
                             <button onClick={reset} className="text-xs text-gray-500 hover:text-white flex items-center gap-1 transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5">
                                <RefreshCcw size={12} /> {t('calculatorPage.clear')}
                            </button>
                        </div>
                        
                        <div className="space-y-6">
                            <div>
                                <label className="input-label-lg">{t('calculatorPage.selectMaterial')}</label>
                                <div className="relative">
                                    <select value={values.material} onChange={(e) => handleInputChange('material', e.target.value)} className="input-field-lg w-full appearance-none cursor-pointer">
                                        <option value="carbon">{t('calculatorPage.materials.carbon')}</option>
                                        <option value="inox304">{t('calculatorPage.materials.inox304')}</option>
                                        <option value="inox316">{t('calculatorPage.materials.inox316')}</option>
                                        <option value="aluminum">{t('calculatorPage.materials.aluminum')}</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {(selectedType === 'plate' || selectedType === 'bar_square' || selectedType === 'flange_square') && (
                                    <MeasurementInput 
                                        value={values.width} 
                                        onChange={(v) => handleInputChange('width', v)} 
                                        label={(selectedType === 'flange_square' || selectedType === 'bar_square') ? t('calculatorPage.inputs.side') : t('calculatorPage.inputs.width')}
                                    />
                                )}
                                
                                {selectedType === 'grating' && (
                                    <>
                                        <div className="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/5 p-4 rounded-xl border border-white/5 mb-2">
                                             <div className="col-span-1 sm:col-span-2 text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-[-10px] flex items-center gap-1">
                                                <Ruler size={12} /> Dimensões da Peça
                                             </div>
                                             <MeasurementInput value={values.length} onChange={(v) => handleInputChange('length', v)} label="Comprimento (Vão/Portante)" />
                                             <MeasurementInput value={values.width} onChange={(v) => handleInputChange('width', v)} label="Largura (Sentido Travessa)" />
                                        </div>
                                        <MeasurementInput value={values.height} onChange={(v) => handleInputChange('height', v)} label="Altura da Barra (h)" />
                                        <MeasurementInput value={values.thickness} onChange={(v) => handleInputChange('thickness', v)} label="Espessura da Barra (e)" />
                                        <div className="col-span-1 sm:col-span-2">
                                            <label className="input-label">Passo da Malha</label>
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="relative">
                                                    <select value={meshId} onChange={handleMeshSelect} className="w-full bg-[#1e293b] border border-white/10 rounded-lg py-3 pl-3 pr-8 text-white text-sm outline-none appearance-none">
                                                        {MESH_OPTIONS.map(opt => (<option key={opt.id} value={opt.id}>{opt.label}</option>))}
                                                    </select>
                                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                                                </div>
                                                {meshId === 'custom' && (<MeasurementInput value={values.pitch} onChange={(v) => handleInputChange('pitch', v)} label="" placeholder="mm" />)}
                                            </div>
                                        </div>
                                    </>
                                )}
                                
                                {selectedType === 'expanded_metal' && (
                                    <>
                                        <div className="col-span-1 sm:col-span-2">
                                            <label className="input-label-lg">Malha / Modelo</label>
                                            <div className="relative">
                                                <select value={expandedPatternId} onChange={handleExpandedPatternSelect} className="w-full bg-[#1e293b] border border-white/10 rounded-lg py-3 pl-3 pr-8 text-white text-sm outline-none appearance-none cursor-pointer">
                                                    {EXPANDED_PATTERNS.map(opt => (<option key={opt.id} value={opt.id}>{opt.label}</option>))}
                                                </select>
                                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                                            </div>
                                        </div>
                                        {isCustomExpanded ? (
                                                <><MeasurementInput value={values.thickness} onChange={(v) => handleInputChange('thickness', v)} label="Espessura (e)" /><MeasurementInput value={values.strandWidth} onChange={(v) => handleInputChange('strandWidth', v)} label="Cordão (c)" /><MeasurementInput value={values.meshSWD} onChange={(v) => handleInputChange('meshSWD', v)} label="Passo SWD (Centro)" /></>
                                            ) : (
                                                <div className="col-span-1 sm:col-span-2 grid grid-cols-3 gap-3">
                                                    <div className="opacity-70"><label className="text-[10px] text-gray-500 font-bold uppercase block mb-1">Espessura</label><div className="bg-black/20 p-2 rounded-lg text-white text-xs">{values.thickness} mm</div></div>
                                                    <div className="opacity-70"><label className="text-[10px] text-gray-500 font-bold uppercase block mb-1">Cordão</label><div className="bg-black/20 p-2 rounded-lg text-white text-xs">{values.strandWidth} mm</div></div>
                                                    <div className="opacity-70"><label className="text-[10px] text-gray-500 font-bold uppercase block mb-1">Passo SWD</label><div className="bg-black/20 p-2 rounded-lg text-white text-xs">{values.meshSWD} mm</div></div>
                                                </div>
                                            )}
                                        <MeasurementInput value={values.width} onChange={(v) => handleInputChange('width', v)} label="Largura da Peça" />
                                        <MeasurementInput value={values.length} onChange={(v) => handleInputChange('length', v)} label="Comprimento" />
                                    </>
                                )}
                                
                                {(selectedType !== 'flange_square' && selectedType !== 'fitting_elbow' && selectedType !== 'grating' && selectedType !== 'expanded_metal') && (
                                    <MeasurementInput value={values.length} onChange={(v) => handleInputChange('length', v)} label={t('calculatorPage.inputs.length')} />
                                )}

                                {isTubeType && (
                                    <div className="col-span-1 sm:col-span-2 space-y-4 bg-white/5 p-4 rounded-xl border border-white/5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{renderTubeInput('outerDiameter', t('calculatorPage.inputs.outerDiameter'))}{renderTubeInput('innerDiameter', t('calculatorPage.inputs.innerDiameter'))}</div>
                                        {renderTubeInput('thickness', t('calculatorPage.inputs.thickness'))}
                                    </div>
                                )}

                                {selectedType === 'bar_round' && (<MeasurementInput value={values.outerDiameter} onChange={(v) => handleInputChange('outerDiameter', v)} label={t('calculatorPage.inputs.outerDiameter')} />)}
                                {selectedType === 'fitting_elbow' && (
                                    <>
                                        <MeasurementInput value={values.radius} onChange={(v) => handleInputChange('radius', v)} label={t('calculatorPage.inputs.radius')} />
                                        <div><label className="input-label">{t('calculatorPage.inputs.angle')}</label><input type="text" value={values.angle} onChange={(e) => handleInputChange('angle', e.target.value)} className="input-field" /></div>
                                    </>
                                )}
                                {selectedType === 'plate' && (<MeasurementInput value={values.thickness} onChange={(v) => handleInputChange('thickness', v)} label={t('calculatorPage.inputs.thickness')} />)}
                                
                                <div className="col-span-1 sm:col-span-2">
                                    <label className="input-label">{t('calculatorPage.inputs.quantity')}</label>
                                    <input type="number" value={values.quantity} onChange={(e) => handleInputChange('quantity', e.target.value)} min="1" className="input-field py-3 text-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-5 space-y-6">
                    <div className="bg-brand-blue-dark rounded-2xl p-6 border border-brand-blue-light/20 shadow-lg">
                         <span className="text-[10px] text-brand-blue-light uppercase font-bold mb-1 block">Peso Total Estimado</span>
                         <div className="flex items-baseline gap-2 mb-4">
                             <span className="text-4xl font-mono font-bold text-white">{totalWeight > 0 ? totalWeight.toFixed(2) : '0.00'}</span>
                             <span className="text-lg text-white/50 font-medium">kg</span>
                         </div>
                    </div>
                    <button type="button" onClick={addItem} disabled={totalWeight <= 0}
                        className="w-full bg-brand-orange text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:bg-brand-orange-dark transition-all disabled:opacity-30 flex items-center justify-center gap-2 text-sm uppercase">
                        <Plus size={18} /> {t('calculatorPage.project.add')}
                    </button>
                </div>
            </div>

            {/* LISTA DE PROJETO */}
            <div className="bg-[#0f172a] border border-white/10 rounded-2xl shadow-lg overflow-hidden">
                <div className="p-5 border-b border-white/10 bg-white/5 flex items-center justify-between">
                    <h3 className="font-bold text-white flex items-center gap-2 uppercase text-sm"><ShoppingCart size={18} /> {t('calculatorPage.project.title')}</h3>
                    <button onClick={clearProject} className="text-white/50 hover:text-red-400"><Trash2 size={18} /></button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm min-w-[500px]">
                        <thead className="bg-white/5 text-xs uppercase text-white font-bold border-b border-white/10">
                            <tr><th className="p-4">Item</th><th className="p-4 text-center">Qtd</th><th className="p-4 text-right">Peso (kg)</th><th className="p-4 text-center">Ação</th></tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {projectItems.length === 0 ? (
                                <tr><td colSpan={4} className="p-12 text-center text-gray-500 italic">{t('calculatorPage.project.empty')}</td></tr>
                            ) : (
                                projectItems.map((item) => (
                                    <tr key={item.id} className="hover:bg-white/5 transition-colors group">
                                        <td className="p-4">
                                            <div className="font-bold text-white">{item.specs}</div>
                                            <div className="flex gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button onClick={() => handleContextAction(item)} className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/30">Otimizar/Estimar</button>
                                            </div>
                                        </td>
                                        <td className="p-4 text-center text-gray-300 font-bold">{item.quantity}</td>
                                        <td className="p-4 text-right font-mono font-bold text-white">{item.totalWeight.toFixed(2)}</td>
                                        <td className="p-4 text-center"><button onClick={() => removeFromProject(item.id)} className="text-gray-500 hover:text-red-500"><Trash2 size={16} /></button></td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                        {projectItems.length > 0 && (
                            <tfoot>
                                <tr><td colSpan={2} className="p-4 text-right text-gray-400 uppercase text-xs">Total</td><td className="p-4 text-right text-brand-orange text-xl font-bold">{projectItems.reduce((acc, i) => acc + i.totalWeight, 0).toFixed(2)} kg</td><td></td></tr>
                            </tfoot>
                        )}
                    </table>
                </div>
                {projectItems.length > 0 && (
                    <div className="p-4 border-t border-white/10 flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={handleWhatsAppQuote} className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2"><WhatsappIcon size={20} /> Cotar no WhatsApp</button>
                        <button onClick={() => window.print()} className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2"><Printer size={20} /> Imprimir</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SteelCalculator;