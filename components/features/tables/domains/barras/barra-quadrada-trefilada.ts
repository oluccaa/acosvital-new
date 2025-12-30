import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const barraQuadradaTrefilada: TableItem = {
    name: "Barra Quadrada Trefilada",
    description: "Tabela de pesos e medidas para Barra Quadrada Trefilada.",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Barra Quadrada Trefilada", colSpan: 3, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
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
        ["--- Barras com 5 a 7m. Normas: SAE 1020 e SAE 1045. Tolerância de acabamento H-11. ---"],
        ["3/16\"", "4,76", "0,18"],
        ["1/4\"", "6,35", "0,32"],
        ["5/16\"", "7,94", "0,5"],
        ["3/8\"", "9,53", "0,71"],
        ["7/16\"", "11,11", "0,97"],
        ["1/2\"", "12,7", "1,27"],
        ["9/16\"", "14,29", "1,6"],
        ["5/8\"", "15,88", "1,98"],
        ["11/16\"", "17,46", "2,39"],
        ["3/4\"", "19,05", "2,85"],
        ["-", "20", "3,14"],
        ["13/16\"", "20,64", "3,34"],
        ["7/8\"", "22,23", "3,88"],
        ["15/16\"", "23,81", "4,45"],
        ["-", "24", "4,55"],
        ["1\"", "25,4", "5,06"],
        ["1.1/16\"", "26,99", "5,72"],
        ["1.1/8\"", "28,58", "6,4"],
        ["1.1/4\"", "31,75", "7,91"],
        ["1.3/8\"", "34,93", "9,57"],
        ["1.1/2\"", "38,1", "11,39"],
        ["1.5/8\"", "41,28", "13,96"],
        ["1.3/4\"", "44,45", "15,5"],
        ["1.7/8\"", "47,63", "17,79"],
        ["2\"", "50,8", "20,24"]
    ]
};