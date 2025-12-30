import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const barraSextavadaTrefilada: TableItem = {
    name: "Barra Sextavada Trefilada",
    description: "Tabela de pesos e medidas para Barra Sextavada Trefilada.",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Barra Sextavada Trefilada", colSpan: 3, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Bitola", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Peso Teórico\nkg/m", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark text-center align-middle" }
        ],
        [
            { text: "pol.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "mm", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" }
        ]
    ],
    headers: [],
    rows: [
        ["--- Barras com 3 a 5m e 5 a 6m. Normas: SAE 1020 e SAE 1045. Tolerância de acabamento H-11. ---"],
        ["3/16\"", "4,76", "0,15"],
        ["1/4\"", "6,35", "0,27"],
        ["5/16\"", "7,94", "0,43"],
        ["3/8\"", "9,53", "0,62"],
        ["7/16\"", "11,11", "0,84"],
        ["1/2\"", "12,7", "1,1"],
        ["9/16\"", "14,29", "1,39"],
        ["5/8\"", "15,88", "1,71"],
        ["11/16\"", "17,46", "2,07"],
        ["3/4\"", "19,05", "2,47"],
        ["13/16\"", "20,64", "2,89"],
        ["7/8\"", "22,23", "3,36"],
        ["15/16\"", "23,81", "3,85"],
        ["1\"", "25,4", "4,39"],
        ["1.1/16\"", "26,99", "4,95"],
        ["1.1/8\"", "28,58", "5,55"],
        ["1.3/16\"", "30,16", "6,18"],
        ["1.1/4\"", "31,75", "6,85"],
        ["1.5/16\"", "33,34", "7,56"],
        ["1.3/8\"", "34,93", "8,29"],
        ["1.7/16\"", "36,51", "9,06"],
        ["1.1/2\"", "38,1", "9,87"],
        ["1.5/8\"", "41,28", "11,57"],
        ["1.3/4\"", "44,45", "13,43"],
        ["2\"", "50,8", "17,54"]
    ]
};
