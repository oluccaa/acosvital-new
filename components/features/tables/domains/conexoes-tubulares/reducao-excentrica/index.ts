import { TableItem } from '../../../shared/types';
import { reducaoExcentricaASMEB169 } from './asme-b16-9-mssp-95';
import { perpendicularidadeExcentrica } from './perpendicularidade';

export const nipleReducaoExcentrica: TableItem = {
    name: "Niple de Redução Excêntrica",
    items: [
        reducaoExcentricaASMEB169,
        perpendicularidadeExcentrica
    ]
};
