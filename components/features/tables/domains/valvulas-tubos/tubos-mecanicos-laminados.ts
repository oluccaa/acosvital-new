import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const tubosMecanicosLaminados: TableItem = {
    name: "Tubos Mecânicos Laminados",
    description: "Medidas de Laminação e Garantidas para Usinagem (ST52)",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Diâmetro\nNominal", rowSpan: 3, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle" },
            { text: "Medidas de Laminação", colSpan: 5, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
            { text: "Medidas de Laminação", colSpan: 4, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
            { text: "Peso", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 align-middle" },
            { text: "Comprimento", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-b border-white/20 align-middle" }
        ],
        [
            { text: "D.Ext.", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "(+/-)\nmm", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "Diâmetro\nInterno***", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "Parede", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "(+/-)\n%", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "Com Centragem\nExterna", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 align-middle text-xs" },
            { text: "Com Centragem\nInterna", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 align-middle text-xs" }
        ],
        [
            { text: "D. Ext.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "D. Int.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "D. Ext.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "D. Int.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "Kg/m", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "Metros", colSpan: 1, className: "bg-brand-blue-dark align-middle text-xs" }
        ]
    ],
    headers: [],
    rows: [
        ["32", "32,4", "0,5", "20,0", "6,5", "7,5", "31,5", "18,5", "30,5", "19,5", "4,15", "4 a 7"],
        ["36", "36,4", "0,5", "20,0", "8,0", "7,5", "35,5", "18,5", "34,5", "19,5", "5,52", "4 a 7"],
        ["40", "40,4", "0,5", "20,0", "10,0", "7,5", "39,5", "18,5", "38,5", "19,5", "7,35", "4 a 7"],
        ["45", "45,4", "0,5", "28,0", "8,5", "7,5", "44,5", "26,5", "43,5", "27,5", "7,62", "4 a 7"],
        ["50", "50,4", "0,6", "32,0", "9,0", "7,5", "49,5", "30,5", "48,5", "31,5", "9,05", "4 a 7"],
        ["56", "56,4", "0,6", "36,0", "10,0", "7,5", "55,5", "34,5", "54,5", "35,5", "11,28", "4 a 7"],
        ["63", "63,4", "0,7", "36,0", "13,5", "7,5", "62,5", "34,5", "61,5", "35,5", "16,35", "4 a 7"],
        ["71", "71,4", "0,7", "45,0", "13,0", "7,5", "70,5", "43,5", "69,5", "44,5", "18,50", "4 a 7"],
        ["80", "80,4", "0,8", "50,0", "15,0", "7,5", "79,5", "48,5", "78,5", "49,5", "23,90", "4 a 7"],
        ["90", "90,4", "0,9", "63,0", "13,5", "7,5", "89,5", "61,5", "88,5", "62,5", "25,30", "4 a 7"]
    ]
};