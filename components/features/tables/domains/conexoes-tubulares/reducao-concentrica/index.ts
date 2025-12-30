import { TableItem } from '../../../shared/types';
import { reducaoConcentricaASMEB169 } from './asme-b16-9-mssp-95';
import { perpendicularidadeConcentrica } from './perpendicularidade';

export const nipleReducaoConcentrica: TableItem = { 
    name: "Niple da Redução Concêntrica",
    items: [
        reducaoConcentricaASMEB169,
        perpendicularidadeConcentrica
    ]
};
