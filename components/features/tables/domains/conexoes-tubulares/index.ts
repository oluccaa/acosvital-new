import { TableItem } from '../../shared/types';
import { curvas } from './curvas';
import { teCruzetaCap } from './te-cruzeta-cap';
import { teCruzetaReducao } from './te-reducao';
import { tolerancias } from './tolerancias';
import { pestanas } from './pestanas';
import { nipleReducaoConcentrica } from './reducao-concentrica';
import { nipleReducaoExcentrica } from './reducao-excentrica';
import { curvasKg45 } from './curvas-kg-45';
import { curvasKg90Folder } from './curvas-kg-90';
import { tesKg } from './tes-kg';
import { capsKg } from './caps-kg';
import { reducaoKg } from './reducao-kg';
import { pestanaKg } from './pestana-kg';
import { curvasRaio3x5x } from './curvas-raio-3x-5x';

export {
    curvas,
    teCruzetaCap,
    teCruzetaReducao,
    tolerancias,
    pestanas,
    nipleReducaoConcentrica,
    nipleReducaoExcentrica,
    curvasKg45,
    curvasKg90Folder,
    tesKg,
    capsKg,
    reducaoKg,
    pestanaKg,
    curvasRaio3x5x
};

export const conexoesTubularesDomain: TableItem[] = [
    curvas,
    teCruzetaCap,
    teCruzetaReducao,
    tolerancias,
    pestanas,
    nipleReducaoConcentrica,
    nipleReducaoExcentrica,
    curvasKg45,
    curvasKg90Folder,
    tesKg,
    capsKg,
    reducaoKg,
    pestanaKg,
    curvasRaio3x5x
];