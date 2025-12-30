import { TableItem } from '../../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../../shared/constants';

export const luvaMeiaLuaCapRosca: TableItem = {
    name: "Luva, Meia Lua e Cap Rosca",
    description: "Conexões Tipo Roscado B16.11 - Dimensões em mm",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Conexões Tipo Roscado B16.11", colSpan: 11, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "DN", rowSpan: 3, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle" },
            { text: "DN\nTubo", rowSpan: 3, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle" },
            { text: "Comp. Total Luvas", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20" },
            { text: "Comp. Total CAPS", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20" },
            { text: "Diâm. Externo", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20" },
            { text: "Espessura Mín.", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20" },
            { text: "Comprim. Mín. da Rosca\n(nota 1)", colSpan: 2, rowSpan: 2, className: "bg-brand-blue-dark border-b border-white/20 align-middle text-xs" }
        ],
        [
            { text: "W", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs font-bold" },
            { text: "P", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs font-bold" },
            { text: "D", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs font-bold" },
            { text: "G", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs font-bold" }
        ],
        [
            { text: "3000/6000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "3000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "6000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "3000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "6000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "B", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "L2", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "B", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "L2", colSpan: 1, className: "bg-brand-blue-dark align-middle text-xs" }
        ]
    ],
    headers: [],
    rows: [
        ["6", "1/8\"", "31,75", "19,05", "-", "15,75", "22,35", "4,83", "-", "6,35", "6,7"],
        ["8", "1/4\"", "35,05", "25,4", "26,92", "19,05", "25,4", "4,83", "6,35", "8,13", "10,21"],
        ["10", "3/8\"", "38,1", "25,4", "26,92", "22,35", "31,75", "4,83", "6,35", "9,14", "10,36"],
        ["15", "1/2\"", "47,75", "31,75", "33,27", "28,45", "38,1", "6,35", "7,87", "10,92", "13,56"],
        ["20", "3/4\"", "50,8", "36,58", "38,1", "35,05", "44,45", "6,35", "7,87", "12,7", "13,86"],
        ["25", "1\"", "60,45", "41,15", "42,93", "44,45", "57,15", "9,65", "11,18", "14,73", "17,34"],
        ["32", "1.1/4\"", "66,55", "44,45", "45,97", "57,15", "63,5", "9,65", "11,18", "17,02", "17,95"],
        ["40", "1.1/2\"", "79,25", "44,45", "47,75", "63,5", "76,2", "11,18", "12,7", "17,78", "18,38"],
        ["50", "2\"", "85,85", "47,75", "50,8", "76,2", "91,95", "12,7", "15,75", "19,05", "19,22"],
        ["65", "2.1/2\"", "91,95", "60,45", "63,5", "91,95", "107,95", "15,75", "19,05", "23,62", "28,91"],
        ["80", "3\"", "107,95", "65,02", "68,33", "107,95", "127", "19,05", "22,35", "25,91", "30,48"],
        ["100", "4\"", "120,65", "68,33", "74,68", "139,7", "158,75", "22,35", "28,45", "27,69", "33,02"]
    ]
};