import { TableItem } from '../../../shared/types';
import { toleranciasASMEB169 } from './asme-b16-9';
import { toleranciasMSSSP43 } from './mss-sp-43';

export const tolerancias: TableItem = {
    name: "Tolerâncias",
    items: [
        toleranciasASMEB169,
        toleranciasMSSSP43
    ]
};
