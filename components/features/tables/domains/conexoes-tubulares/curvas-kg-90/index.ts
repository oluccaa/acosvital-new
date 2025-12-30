import { TableItem } from '../../../shared/types';
import { curvasASMEB169_90 } from './asme-b16-9-90';
import { curvasASMEB169_180 } from './asme-b16-9-180';

export const curvasKg90Folder: TableItem = {
    name: "Curvas (kg) 90º",
    items: [
        curvasASMEB169_90,
        curvasASMEB169_180
    ]
};