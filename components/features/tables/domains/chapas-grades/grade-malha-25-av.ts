import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const gradeMalha25AV: TableItem = {
    name: "Grade Malha 25 AV",
    description: "Tabela de especificações para Grades de Piso Industrial - Malha 25 AV.",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Grades de Piso Industrial - Malha 25 AV", colSpan: 7, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
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
        ["AV-25X100-20-2", "16", "C.U.D ¹", "3827kgs", "1701kgs", "870kgs", "443kgs"],
        ["AV-25X50-20-2", "18", "FLEXA²", "1,1mm", "2,5mm", "4mm", "5mm"],
        ["AV-25X100-20-3", "22", "C.U.D ¹", "5740kgs", "2551kgs", "1304kgs", "665kgs"],
        ["AV-25X50-20-3", "24", "FLEXA²", "1,1mm", "2,5mm", "4mm", "5mm"],
        ["AV-25X100-20-5", "34", "C.U.D ¹", "8993kgs", "3997kgs", "2044kgs", "1043kgs"],
        ["AV-25X50-20-5", "36", "FLEXA²", "1,1mm", "2,5mm", "4mm", "5mm"],
        ["AV-25X100-25-2", "20", "C.U.D ¹", "5979kgs", "2657kgs", "1495kgs", "854kgs"],
        ["AV-25X50-25-2", "22", "FLEXA²", "0,9mm", "2mm", "2,7mm", "5mm"],
        ["AV-25X100-25-3", "27", "C.U.D ¹", "8969kgs", "3986kgs", "1772kgs", "974kgs"],
        ["AV-25X50-25-3", "29", "FLEXA²", "0,9mm", "2mm", "3,6mm", "5mm"],
        ["AV-25X100-25-5", "42", "C.U.D ¹", "14051kgs", "6245kgs", "3513kgs", "2007kgs"],
        ["AV-25X50-25-5", "44", "FLEXA²", "0,9mm", "2mm", "3,5mm", "5mm"],
        ["AV-25X100-30-2", "23", "C.U.D ¹", "8610kgs", "3827kgs", "2153kgs", "1378kgs"],
        ["AV-25X50-30-2", "25", "FLEXA²", "0,7mm", "1,7mm", "3mm", "4,6mm"],
        ["AV-25X100-30-3", "32", "C.U.D ¹", "12915kgs", "5740kgs", "3229kgs", "2066kgs"],
        ["AV-25X50-30-3", "35", "FLEXA²", "0,7mm", "1,7mm", "3mm", "4,6mm"],
        ["AV-25X100-30-5", "50", "C.U.D ¹", "20234kgs", "8993kgs", "5058kgs", "3237kgs"],
        ["AV-25X50-30-5", "52", "FLEXA²", "0,7mm", "1,7mm", "3mm", "4,6mm"],
        ["AV-25X100-35-2", "27", "C.U.D ¹", "11719kgs", "5209kgs", "2930kgs", "1875kgs"],
        ["AV-25X50-35-2", "29", "FLEXA²", "0,6mm", "1,4mm", "2,5mm", "4mm"],
        ["AV-25X100-35-3", "37", "C.U.D ¹", "17579kgs", "7813kgs", "4395kgs", "2913kgs"],
        ["AV-25X50-35-3", "40", "FLEXA²", "0,6mm", "1,4mm", "2,5mm", "4mm"],
        ["AV-25X100-35-5", "58", "C.U.D ¹", "27540kgs", "12240kgs", "6885kgs", "4406kgs"],
        ["AV-25X50-35-5", "60", "FLEXA²", "0,6mm", "1,4mm", "2,5mm", "4mm"],
        ["AV-25X100-40-2", "30", "C.U.D ¹", "15307kgs", "6803kgs", "3827kgs", "2449kgs"],
        ["AV-25X50-40-2", "32", "FLEXA²", "0,6mm", "1,3mm", "2,2mm", "3,5mm"],
        ["AV-25X100-40-3", "42", "C.U.D ¹", "22960kgs", "10204kgs", "5740kgs", "3674kgs"],
        ["AV-25X25-40-3", "45", "FLEXA²", "0,6mm", "1,3mm", "2,2mm", "3,5mm"],
        ["AV-25X100-40-5", "66", "C.U.D ¹", "35971kgs", "15987kgs", "8993kgs", "5755kgs"],
        ["AV-25X50-40-5", "68", "FLEXA²", "0,6mm", "1,2mm", "2,2mm", "3,5mm"]
    ]
};
