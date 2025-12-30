import { TableItem } from '../../shared/types';
import { tubosHelicoidais } from './tubos-helicoidais';
import { modeloK10 } from './modelo-k10';
import { relacaoTubosAcoplamento } from './relacao-tubos';

export {
    tubosHelicoidais,
    modeloK10,
    relacaoTubosAcoplamento
};

export const acoplamentoDomain: TableItem = {
    name: "Acoplamento K",
    items: [
        tubosHelicoidais,
        modeloK10,
        relacaoTubosAcoplamento
    ]
};