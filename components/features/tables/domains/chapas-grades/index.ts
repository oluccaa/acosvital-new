import { TableItem } from '../../shared/types';
import { chapaPerfuradaRedondo } from './chapa-perfurada-redondo';
import { gradeMalha25AV } from './grade-malha-25-av';
import { gradeMalha30AV } from './grade-malha-30-av';
import { vergalhaoCA25, vergalhaoCA50, vergalhaoCA60 } from './vergalhoes';
import { aramesRecozidos, barraTransferencia } from './arames-barras';
import { telaSoldadaNervurada } from './tela-soldada-nervurada';
import { trelica } from './trelica';
import { eletroliticoPreZincado } from './eletrolitico-pre-zincado';
import { eletroliticoGalvanizadoFogo } from './eletrolitico-galvanizado-fogo';
import { atmosferaExplosivaRir } from './atmosfera-explosiva-rir';
import { eletrodutosInox } from './eletrodutos-inox';
import { chapaExpandida } from './chapa-expandida';
import { chapaFinaFrio } from './chapa-fina-frio';
import { chapaFinaQuente } from './chapa-fina-quente';
import { chapaGrossa } from './chapa-grossa';
import { chapaXadrez } from './chapa-xadrez';
import { chapaZincada } from './chapa-zincada';

export {
    chapaPerfuradaRedondo,
    gradeMalha25AV,
    gradeMalha30AV,
    vergalhaoCA25, 
    vergalhaoCA50, 
    vergalhaoCA60,
    aramesRecozidos, 
    barraTransferencia,
    telaSoldadaNervurada,
    trelica,
    eletroliticoPreZincado,
    eletroliticoGalvanizadoFogo,
    atmosferaExplosivaRir,
    eletrodutosInox,
    chapaExpandida,
    chapaFinaFrio,
    chapaFinaQuente,
    chapaGrossa,
    chapaXadrez,
    chapaZincada
};

export const chapasGradesDomain: TableItem[] = [
    chapaPerfuradaRedondo,
    gradeMalha25AV,
    gradeMalha30AV,
    {
        name: "Vergalhões",
        items: [
            vergalhaoCA25,
            vergalhaoCA50,
            vergalhaoCA60
        ]
    },
    aramesRecozidos,
    barraTransferencia,
    telaSoldadaNervurada,
    trelica,
    eletroliticoPreZincado,
    eletroliticoGalvanizadoFogo,
    atmosferaExplosivaRir,
    eletrodutosInox
];
