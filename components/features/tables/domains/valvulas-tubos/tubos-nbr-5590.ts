import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const tubosNbr5590: TableItem = {
    name: "Tubo SCH 40 e 80 - NBR 5590",
    description: "Tabela de Tubos NBR 5590 - Schedule 40 e 80",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Tubo SCH 40 e 80 - NBR 5590", colSpan: 6, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Diâmetro", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "SCH 40", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
            { text: "SCH 80", colSpan: 2, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Pol.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "mm", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Espessura\nmm", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Peso\nkg/m", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Espessura\nmm", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Peso\nkg/m", colSpan: 1, className: "bg-brand-blue-dark text-center text-xs" }
        ]
    ],
    headers: [],
    rows: [
        ["1/2\"", "21,3", "2,77", "1,26", "3,73", "1,62"],
        ["3/4\"", "26,7", "2,87", "1,68", "3,91", "2,19"],
        ["1\"", "33,4", "3,38", "2,50", "4,55", "3,23"],
        ["1.1/4\"", "42,2", "3,56", "3,38", "4,85", "4,46"],
        ["1.1/2\"", "48,3", "3,68", "4,05", "5,08", "5,40"],
        ["2\"", "60,3", "3,91", "5,43", "5,54", "7,47"],
        ["2.1/2\"", "73,0", "5,16", "8,62", "7,01", "11,40"],
        ["3\"", "88,9", "5,49", "11,28", "7,62", "15,25"],
        ["3.1/2\"", "101,6", "5,74", "13,56", "8,08", "18,60"],
        ["4\"", "114,3", "8,56", "22,29", "8,56", "22,29"],
        ["5\"", "141,3", "6,55", "21,75", "9,52", "30,92"],
        ["6\"", "168,3", "7,11", "28,23", "10,97", "42,51"],
        ["8\"", "219,1", "8,18", "42,48", "12,70", "64,56"],
        ["10\"", "273,05", "9,27", "60,23", "15,10", "95,87"],
        ["12\"", "323,84", "10,31", "79,64", "17,47", "131,88"]
    ]
};