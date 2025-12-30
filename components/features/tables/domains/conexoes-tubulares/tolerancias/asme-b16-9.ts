import { TableItem } from '../../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../../shared/constants';

export const toleranciasASMEB169: TableItem = { 
    name: "ASME B16.9", 
    description: "Tolerâncias para Curvas, Te, Cruzeta, Te e Cruzeta de Redução, Reduções e CAP ASME B16.9",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "DN", colSpan: 1, rowSpan: 3, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "Todas as conexões", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "Curvas 90° 45° e Tes", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "Reduções Pestanas", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "CAP", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "Curvas 180°", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "Pestanas", colSpan: 4, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "Angularidade", colSpan: 3, className: "bg-brand-blue-dark" }
        ],
        [
            { text: "Diâm.\nExterno", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "Diâm.\nInterno", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "Espess.", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "Centro a Face", className: "bg-brand-blue-dark border-r border-white/20", colSpan: 1 },
            { text: "Compr.", className: "bg-brand-blue-dark border-r border-white/20", colSpan: 1 },
            { text: "Compr.", className: "bg-brand-blue-dark border-r border-white/20", colSpan: 1 },
            { text: "Centro a Centro", className: "bg-brand-blue-dark border-r border-white/20", colSpan: 1 },
            { text: "Altura do Arco", className: "bg-brand-blue-dark border-r border-white/20", colSpan: 1 },
            { text: "Alinh. da Face", className: "bg-brand-blue-dark border-r border-white/20", colSpan: 1 },
            { text: "Diâm. Externo", className: "bg-brand-blue-dark border-r border-white/20", colSpan: 1 },
            { text: "Compr.", className: "bg-brand-blue-dark border-r border-white/20", colSpan: 1 },
            { text: "Raio", className: "bg-brand-blue-dark border-r border-white/20", colSpan: 1 },
            { text: "Espess.", className: "bg-brand-blue-dark border-r border-white/20", colSpan: 1 },
            { text: "DN", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "P", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "Q", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark" }
        ],
    ],
    headers: ["A, B, C, M", "H", "E", "O", "K", "U", "G", "F", "R", "T"],
    rows: [
        ["1/2\" a 2.1/2\"", "+1,52\n-0,76", "0,76", "Min 87,5%", "1,52", "1,52", "3,05", "6,35", "6,35", "0,76", "+0", "1,52", "+0\n-0,76", "+1,52\n-0", "1/2\" a 4\"", "0,76", "1,52"],
        ["3\" a 3.1/2\"", "1,52", "1,52", "Min 87,5%", "1,52", "1,52", "3,05", "6,35", "6,35", "0,76", "+0\n-0,76", "1,52", "+0\n-0,76", "+1,52\n-0", "5\" a 8\"", "1,52", "3,05"],
        ["4\"", "1,52", "1,52", "Min 87,5%", "1,52", "1,52", "3,05", "6,35", "6,35", "0,76", "+0\n-1,52", "1,52", "+0\n-1,52", "+1,52\n-0", "10\" a 12\"", "2,29", "4,83"],
        ["5\" a 8\"", "+2,29\n-1,52", "1,52", "Min 87,5%", "1,52", "1,52", "6,35", "6,35", "6,35", "0,76", "+0\n-1,52", "1,52", "+0\n-1,52", "+1,52\n-0", "14\" a 16\"", "2,29", "6,35"],
        ["10\" a 18\"", "+4,06\n-3,05", "3,05", "Min 87,5%", "2,29", "2,29", "6,35", "9,65", "6,35", "1,52", "+0\n-1,52", "2,29", "+0\n-1,52", "+3,05\n-0", "18\" a 24\"", "3,05", "9,65"],
        ["20\" a 24\"", "+6,35\n-4,83", "4,83", "Min 87,5%", "2,29", "2,29", "6,35", "9,65", "6,35", "1,52", "+0\n-1,52", "2,29", "+0\n-1,52", "+3,05\n-0", "26\" a 30\"", "4,83", "9,65"],
        ["26\" a 30\"", "+6,35\n-4,83", "4,83", "Min 87,5%", "3,05", "4,83", "9,65", "-", "-", "-", "-", "4,83", "-", "-", "32\" a 42\"", "4,83", "12,7"],
        ["32\" a 48\"", "+6,35\n-4,83", "4,83", "Min 87,5%", "4,83", "4,83", "9,65", "-", "-", "-", "-", "4,83", "-", "-", "44\" a 48\"", "9,65", "19,05"]
    ]
};
