import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const gradeMalha30AV: TableItem = {
    name: "Grade Malha 30 AV",
    description: "Tabela de especificações para Grades de Piso Industrial - Malha 30 AV.",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Grades de Piso Industrial - Malha 30 AV", colSpan: 7, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Referência", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Peso M²", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Sobrecarga", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Vãos/mm - Carga Distribuída Uniformemente", colSpan: 4, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ]
    ],
    headers: ["400mm", "600mm", "800mm", "1000mm"],
    rows: [
        ["AV-30X100-20-2", "14", "C.U.D ¹", "3267kgs", "1452kgs", "743kgs", "379kgs"],
        ["AV-30X50-20-2", "16", "FLEXA²", "1,1mm", "2,5mm", "4mm", "5mm"],
        ["AV-30X100-20-3", "19", "C.U.D ¹", "4900kgs", "2178kgs", "1113kgs", "568kgs"],
        ["AV-30X50-20-3", "22", "FLEXA²", "1,1mm", "2,5mm", "4mm", "5mm"],
        ["AV-30X100-20-5", "30", "C.U.D ¹", "7677kgs", "3412kgs", "1745kgs", "890kgs"],
        ["AV-30X50-20-5", "32", "FLEXA²", "1,1mm", "2,5mm", "4mm", "5mm"],
        ["AV-30X100-25-2", "17", "C.U.D ¹", "5104kgs", "2269kgs", "1276kgs", "729kgs"],
        ["AV-30X50-25-2", "19", "FLEXA²", "0,9mm", "2mm", "3,6mm", "5mm"],
        ["AV-30X100-25-3", "24", "C.U.D ¹", "7656kgs", "3403kgs", "1914kgs", "1094kgs"],
        ["AV-30X50-25-3", "26", "FLEXA²", "0,9mm", "2mm", "3,6mm", "5mm"],
        ["AV-30X100-25-5", "37", "C.U.D ¹", "11995kgs", "5331kgs", "2999kgs", "1713,4kgs"],
        ["AV-30X50-25-5", "39", "FLEXA²", "0,9mm", "2mm", "3,6mm", "5mm"],
        ["AV-30X100-30-2", "20", "C.U.D ¹", "7350kgs", "3267kgs", "1838kgs", "1176kgs"],
        ["AV-30X50-30-2", "23", "FLEXA²", "0,7mm", "1,7mm", "3mm", "4,6mm"],
        ["AV-30X100-30-3", "28", "C.U.D ¹", "11025kgs", "4900kgs", "2756kgs", "1764kgs"],
        ["AV-30X50-30-3", "30", "FLEXA²", "0,7mm", "1,7mm", "3mm", "4,6mm"],
        ["AV-30X100-30-5", "43", "C.U.D ¹", "17273kgs", "7677kgs", "4318kgs", "2764kgs"],
        ["AV-30X50-30-5", "46", "FLEXA²", "0,7mm", "1,7mm", "3mm", "4,6mm"],
        ["AV-30X100-35-2", "23", "C.U.D ¹", "10004kgs", "4446kgs", "2501kgs", "1601kgs"],
        ["AV-30X50-35-2", "26", "FLEXA²", "0,6mm", "1,4mm", "2,5mm", "4mm"],
        ["AV-30X100-35-3", "32", "C.U.D ¹", "15006kgs", "6669kgs", "3752kgs", "2401kgs"],
        ["AV-30X50-35-3", "35", "FLEXA²", "0,6mm", "1,4mm", "2,5mm", "4mm"],
        ["AV-30X100-35-5", "50", "C.U.D ¹", "23510kgs", "10449kgs", "5877kgs", "3762kgs"],
        ["AV-30X50-35-5", "53", "FLEXA²", "0,6mm", "1,4mm", "2,5mm", "4mm"],
        ["AV-30X100-40-2", "26", "C.U.D ¹", "13067kgs", "5807kgs", "3267kgs", "2091kgs"],
        ["AV-30X50-40-2", "29", "FLEXA²", "0,6mm", "1,3mm", "2,2mm", "3,5mm"],
        ["AV-30X100-40-3", "37", "C.U.D ¹", "19600kgs", "8711kgs", "4900kgs", "3136kgs"],
        ["AV-30X50-40-3", "39", "FLEXA²", "0,6mm", "1,3mm", "2,2mm", "3,5mm"],
        ["AV-30X100-40-5", "57", "C.U.D ¹", "30707kgs", "13647kgs", "7677kgs", "4913kgs"],
        ["AV-30X50-40-5", "59", "FLEXA²", "0,6mm", "1,2mm", "2,2mm", "3,5mm"]
    ]
};