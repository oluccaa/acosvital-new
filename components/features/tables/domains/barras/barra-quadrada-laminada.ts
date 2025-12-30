import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const barraQuadradaLaminada: TableItem = {
    name: "Barra Quadrada Laminada",
    description: "Tabela de pesos e medidas para Barra Quadrada Laminada.",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Barra Quadrada Laminada", colSpan: 3, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
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
        ["--- Barras com 5 a 6m - Normas: NBR 7007 MR 250 / ASTM A-36, SAE 1020 e SAE 1045 ---"],
        ["1/4\"", "6,35", "0,32"],
        ["5/16\"", "7,94", "0,5"],
        ["3/8\"", "9,53", "0,71"],
        ["1/2\"", "12,7", "1,27"],
        ["5/8\"", "15,88", "1,98"],
        ["3/4\"", "19,05", "2,85"],
        ["7/8\"", "22,23", "3,88"],
        ["1\"", "25,4", "5,06"],
        ["1.1/8\"", "28,58", "6,4"],
        ["1.1/4\"", "31,75", "7,91"],
        ["1.5/16\"", "33,34", "8,73"],
        ["1.1/2\"", "38,1", "11,4"],
        ["1.3/4\"", "44,45", "15,51"],
        ["2\"", "50,8", "20,24"],
        ["2.1/4\"", "57,15", "25,62"],
        ["2.3/8\"", "60,33", "28,54"],
        ["2.1/2\"", "63,5", "31,62"],
        ["2.5/8\"", "66,68", "34,87"],
        ["2.3/4\"", "69,85", "38,27"],
        ["2.7/8\"", "73,03", "41,82"],
        ["3\"", "76,2", "45,54"],
        ["3.1/8\"", "79,38", "49,41"],
        ["3.1/4\"", "82,55", "53,44"],
        ["3.1/2\"", "88,9", "61,98"],
        ["3.3/4\"", "95,25", "71,15"],
        ["4\"", "101,6", "81,03"]
    ]
};