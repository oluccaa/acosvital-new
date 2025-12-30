
import { TableItem } from '../../shared/types';
import { valvulaEsfera } from './valvula-esfera';
import { valvulaGaveta } from './valvula-gaveta';
import { valvulaBorboleta } from './valvula-borboleta';
import { valvulaRetencaoDupla } from './valvula-retencao-dupla';
import { valvulaGuilhotina } from './valvula-guilhotina';
import { valvulaGlobo } from './valvula-globo';
import { tubosAcoInox } from './tubos-aco-inox';
import { tubosNbr5580 } from './tubos-nbr-5580';
import { tubosDinNbr5580 } from './tubos-din-nbr-5580';
import { tubosNbr5590 } from './tubos-nbr-5590';
import { tubosAcoCarbono } from './tubos-aco-carbono';
import { tubosMecanicosLaminados } from './tubos-mecanicos-laminados';
import { tubosCalandrados } from './tubos-calandrados';
import { tuboIndustrialQuadrado } from './tubo-industrial-quadrado';
import { tuboIndustrialRedondo } from './tubo-industrial-redondo';
import { tuboIndustrialRetangular } from './tubo-industrial-retangular';

export {
    valvulaEsfera,
    valvulaGaveta,
    valvulaBorboleta,
    valvulaRetencaoDupla,
    valvulaGuilhotina,
    valvulaGlobo,
    tubosAcoInox,
    tubosNbr5580,
    tubosDinNbr5580,
    tubosNbr5590,
    tubosAcoCarbono,
    tubosMecanicosLaminados,
    tubosCalandrados,
    tuboIndustrialQuadrado,
    tuboIndustrialRedondo,
    tuboIndustrialRetangular
};

export const valvulasTubosDomain: TableItem[] = [
    tubosAcoCarbono,
    tuboIndustrialQuadrado,
    tuboIndustrialRetangular,
    tuboIndustrialRedondo,
    tubosCalandrados,
    tubosMecanicosLaminados,
    tubosAcoInox,
    tubosNbr5580,
    tubosDinNbr5580,
    tubosNbr5590,
    valvulaEsfera,
    valvulaGaveta,
    valvulaGlobo,
    valvulaBorboleta,
    valvulaRetencaoDupla,
    valvulaGuilhotina
];
