
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type TabType = 'calculator' | 'nesting' | 'welding' | 'converter';

export interface CalculatorState {
    width: string;
    height: string;
    length: string;
    thickness: string;
    outerDiameter: string;
    innerDiameter: string;
    quantity: string;
    angle: string;
    pitch: string;
    strandWidth: string;
    meshSWD: string;
    radius: string;
    material: string;
    selectedType: string;
    // Campos específicos de Solda
    weldLegSize: string;
    weldGap: string;
    weldAngle: string;
    weldReinforcement: string;
    weldLength: string;
    weldJointType: 'fillet' | 'buttV' | 'buttX';
    // Campos específicos de Otimização
    nestStockLength: string;
    nestBladeWidth: string;
}

export interface ProjectItemMeta {
    outerDiameter?: number;
    innerDiameter?: number;
    thickness?: number;
    length?: number;
    width?: number;
}

export interface ProjectItem {
    id: string;
    type: string;
    material: string;
    specs: string;
    quantity: number;
    unitWeight: number;
    totalWeight: number;
    timestamp: number;
    meta?: ProjectItemMeta;
}

interface NestingPayload {
    items: { length: number; quantity: number }[];
}

interface WeldingPayload {
    length: number;
    thickness?: number;
}

interface EngineeringContextType {
    activeTab: TabType;
    setActiveTab: (tab: TabType) => void;
    
    calculatorState: CalculatorState;
    updateCalculatorField: (field: keyof CalculatorState, value: any) => void;

    projectItems: ProjectItem[];
    addToProject: (item: ProjectItem) => void;
    removeFromProject: (id: string) => void;
    clearProject: () => void;

    nestingPayload: NestingPayload | null;
    sendToNesting: (payload: NestingPayload) => void;
    clearNestingPayload: () => void;

    weldingPayload: WeldingPayload | null;
    sendToWelding: (payload: WeldingPayload) => void;
    clearWeldingPayload: () => void;
}

const EngineeringContext = createContext<EngineeringContextType | undefined>(undefined);

const STORAGE_KEY_CALC_STATE = 'acosvital_master_state_v4';
const STORAGE_KEY_PROJECT = 'acosvital_project_v4';
const STORAGE_KEY_ACTIVE_TAB = 'acosvital_active_tab_v4';

const DEFAULT_CALC_STATE: CalculatorState = {
    width: '',
    height: '',
    length: '',
    thickness: '',
    outerDiameter: '',
    innerDiameter: '',
    quantity: '1',
    angle: '90',
    pitch: '30',
    strandWidth: '',
    meshSWD: '',
    radius: '',
    material: 'carbon',
    selectedType: 'plate',
    weldLegSize: '6',
    weldGap: '2',
    weldAngle: '60',
    weldReinforcement: '10',
    weldLength: '1',
    weldJointType: 'fillet',
    nestStockLength: '6000',
    nestBladeWidth: '3'
};

export const EngineeringProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [activeTab, setActiveTab] = useState<TabType>(() => {
        return (localStorage.getItem(STORAGE_KEY_ACTIVE_TAB) as TabType) || 'calculator';
    });
    
    const [calculatorState, setCalculatorState] = useState<CalculatorState>(() => {
        const saved = localStorage.getItem(STORAGE_KEY_CALC_STATE);
        return saved ? { ...DEFAULT_CALC_STATE, ...JSON.parse(saved) } : DEFAULT_CALC_STATE;
    });

    const [projectItems, setProjectItems] = useState<ProjectItem[]>(() => {
        const raw = localStorage.getItem(STORAGE_KEY_PROJECT);
        return raw ? JSON.parse(raw) : [];
    });
    
    const [nestingPayload, setNestingPayload] = useState<NestingPayload | null>(null);
    const [weldingPayload, setWeldingPayload] = useState<WeldingPayload | null>(null);

    // Salvamento Automático em tempo real
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY_CALC_STATE, JSON.stringify(calculatorState));
    }, [calculatorState]);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY_PROJECT, JSON.stringify(projectItems));
    }, [projectItems]);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY_ACTIVE_TAB, activeTab);
    }, [activeTab]);

    const updateCalculatorField = (field: keyof CalculatorState, value: any) => {
        setCalculatorState(prev => ({ ...prev, [field]: value }));
    };

    const addToProject = (item: ProjectItem) => setProjectItems(prev => [item, ...prev]);
    const removeFromProject = (id: string) => setProjectItems(prev => prev.filter(i => i.id !== id));
    const clearProject = () => setProjectItems([]);

    const sendToNesting = (payload: NestingPayload) => {
        setNestingPayload(payload);
        setActiveTab('nesting');
    };

    const sendToWelding = (payload: WeldingPayload) => {
        setWeldingPayload(payload);
        setActiveTab('welding');
    };

    return (
        <EngineeringContext.Provider value={{
            activeTab, setActiveTab,
            calculatorState, updateCalculatorField,
            projectItems, addToProject, removeFromProject, clearProject,
            nestingPayload, sendToNesting, clearNestingPayload: () => setNestingPayload(null),
            weldingPayload, sendToWelding, clearWeldingPayload: () => setWeldingPayload(null)
        }}>
            {children}
        </EngineeringContext.Provider>
    );
};

export const useEngineering = () => {
    const context = useContext(EngineeringContext);
    if (!context) throw new Error('useEngineering must be used within an EngineeringProvider');
    return context;
};
