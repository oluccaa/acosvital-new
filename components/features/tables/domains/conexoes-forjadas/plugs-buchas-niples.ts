import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const plugsBuchasNiples: TableItem = {
    name: "Plugs, Buchas e Niples",
    description: "Plugs - Buchas - Niples ASME B16.11",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Plugs - Buchas - Niples ASME B16.11", colSpan: 15, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "DN", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle" },
            { text: "DN\nTubo", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle" },
            { text: "Comp.\nMínimo", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20" },
            { text: "Plug Cabeça\nQuadrada", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20" },
            { text: "Plug Cabeça\nRedonda", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20" },
            { text: "Plug Cabeça\nSextavada e Buchas", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20" },
            { text: "Niple Duplo", colSpan: 5, className: "bg-brand-blue-dark border-b border-white/20" }
        ],
        [
            { text: "A", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "B mín.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "C mín.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "E", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "D", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "F\nnom.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "G\nmín.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "G2\nmín.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "D\n3000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "D\n6000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "Porca\nH", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "L1", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "L1", colSpan: 1, className: "bg-brand-blue-dark align-middle text-xs" }
        ]
    ],
    headers: [],
    rows: [
        ["6", "1/8\"", "9,65", "6,35", "7,11", "10,41", "35,05", "11,18", "-", "6,35", "-", "-", "-", "-", "-"],
        ["8", "1/4\"", "11,18", "6,35", "9,65", "13,46", "41,15", "15,75", "3,05", "6,35", "7,6", "-", "15", "11,0", "6,0"],
        ["10", "3/8\"", "12,7", "7,87", "11,18", "17,53", "41,15", "17,53", "4,06", "7,87", "10,7", "-", "19", "13,0", "7,0"],
        ["15", "1/2\"", "14,22", "9,65", "14,22", "21,34", "44,45", "22,35", "4,83", "7,87", "13,8", "11,7", "22", "14,0", "8,0"],
        ["20", "3/4\"", "15,75", "11,18", "15,75", "26,92", "44,45", "26,92", "5,59", "9,65", "18,8", "15,5", "27", "16,0", "10,0"],
        ["25", "1\"", "19,05", "12,7", "20,57", "33,27", "50,8", "35,05", "6,35", "9,65", "24,3", "20,7", "35", "19,0", "10,0"],
        ["32", "1.1/4\"", "20,57", "14,22", "23,88", "42,93", "50,8", "44,45", "7,11", "14,22", "32,5", "29,5", "45,3", "21,0", "13,0"],
        ["40", "1.1/2\"", "20,57", "15,75", "28,45", "48,51", "50,8", "50,8", "7,87", "15,75", "38,1", "34,0", "50,8", "21,0", "14,0"],
        ["50", "2\"", "22,32", "17,53", "33,27", "60,45", "63,5", "63,5", "8,64", "17,53", "49,2", "42,8", "62,8", "22,0", "14,0"],
        ["65", "2.1/2\"", "26,92", "19,05", "38,1", "73,15", "69,85", "76,2", "9,65", "19,05", "58,9", "53,9", "80,5", "27,0", "16,0"],
        ["80", "3\"", "28,45", "20,57", "42,93", "88,9", "69,85", "88,9", "10.41", "20,57", "73,6", "66,6", "92,7", "28,0", "16,0"],
        ["100", "4\"", "31,75", "25,4", "63,5", "114,3", "76,2", "117,35", "12,7", "25,4", "97,1", "87,3", "119", "32,0", "16,0"]
    ]
};