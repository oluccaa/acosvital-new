import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const valvulaEsfera: TableItem = {
    name: "Válvula Esfera",
    description: "Válvula da Esfera Monobloco Passagem Plena PN 40 (PP)",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Válvula da Esfera Monobloco Passagem Plena PN 40 (PP)", colSpan: 8, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Bitola", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
            { text: "A", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "B", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "C", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "D", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "E", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Peso kg", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark text-center align-middle" }
        ],
        [
            { text: "Pol.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "DN", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" }
        ]
    ],
    rows: [
        ["1/4\"", "8", "45,5", "12,5", "10", "36", "89", "0,135"],
        ["1/2\"", "15", "57,7", "16", "15", "40", "89", "0,2"],
        ["3/4\"", "20", "67", "17", "20", "44", "89", "0,31"],
        ["1\"", "25", "80,8", "20,7", "25", "58", "112", "0,5"],
        ["1.1/4\"", "32", "94,5", "23,5", "32", "66,5", "128", "0,755"],
        ["1.1/2\"", "40", "102,9", "24,5", "40", "72,6", "128", "1"],
        ["2\"", "50", "126,3", "28", "50", "83,5", "159,5", "1,74"],
        ["2.1/2\"", "65", "152,5", "33,5", "64", "118,7", "222", "3,94"]
    ]
};