import { TableItem } from '../../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../../shared/constants';

export const cotovelosTeCruzetaEn: TableItem = {
    name: "Cotovelos, Te e Cruzeta EN",
    description: "Conexões Tipo Encaixe ASME B16.11 - Dimensões em mm",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Conexões Tipo Encaixe ASME B16.11", colSpan: 16, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "DN", rowSpan: 3, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle" },
            { text: "DN\nTubo", rowSpan: 3, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle" },
            { text: "Centro à Face Cotovelos 90°, Tes e Cruzetas", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20" },
            { text: "Centro à Face 45° Cotovelos", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20" },
            { text: "Diâm. Externo", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20" },
            { text: "Espessura Mín.", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20" },
            { text: "Comprim. Mín. da Rosca (nota 1)", colSpan: 2, className: "bg-brand-blue-dark border-b border-white/20" }
        ],
        [
            { text: "A", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs font-bold" },
            { text: "C", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs font-bold" },
            { text: "H", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs font-bold" },
            { text: "G", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs font-bold" },
            { text: "B", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "L2", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark align-middle text-xs" }
        ],
        [
            { text: "2000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "3000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "6000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "2000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "3000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "6000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "2000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "3000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "6000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "2000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "3000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "6000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" }
        ]
    ],
    headers: [],
    rows: [
        ["6", "1/8\"", "20,57", "20,57", "24,64", "17,53", "17,53", "19,05", "22,35", "22,35", "25,4", "3,18", "3,18", "6,35", "6,35", "6,7"],
        ["8", "1/4\"", "20,57", "24,64", "28,45", "17,53", "19,05", "22,35", "22,35", "25,4", "33,27", "3,18", "3,3", "6,6", "8,13", "10,21"],
        ["10", "3/8\"", "24,64", "28,45", "33,27", "19,05", "22,35", "25,4", "25,4", "33,27", "38,1", "3,18", "3,51", "6,99", "9,14", "10,36"],
        ["15", "1/2\"", "28,45", "33,27", "38,1", "22,35", "25,4", "28,45", "33,27", "38,1", "45,97", "3,18", "4,09", "8,15", "10,92", "13,56"],
        ["20", "3/4\"", "33,27", "38,1", "44,45", "25,4", "28,45", "33,27", "38,1", "45,97", "55,63", "3,18", "4,32", "8,53", "12,7", "13,86"],
        ["25", "1\"", "38,1", "44,45", "50,8", "28,45", "33,27", "35,05", "45,97", "55,63", "61,98", "3,68", "4,98", "9,93", "14,73", "17,34"],
        ["32", "1.1/4\"", "44,45", "50,8", "60,45", "33,27", "35,05", "42,93", "55,63", "61,98", "75,44", "3,89", "5,28", "10,59", "17,02", "17,95"],
        ["40", "1.1/2\"", "50,8", "60,45", "63,5", "35,05", "42,93", "43,69", "61,98", "75,44", "84,07", "4,01", "5,56", "11,07", "17,78", "18,38"],
        ["50", "2\"", "60,45", "63,5", "82,55", "42,93", "43,69", "52,32", "75,44", "84,07", "101,6", "4,27", "7,14", "12,09", "19,05", "19,22"],
        ["65", "2.1/2\"", "76,2", "82,55", "92,25", "52,32", "52,32", "63,5", "91,95", "101,6", "120,65", "5,61", "7,65", "15,29", "23,62", "28,91"],
        ["80", "3\"", "85,85", "95,25", "106,43", "63,5", "63,5", "79,25", "109,47", "120,65", "146,05", "5,99", "8,84", "16,64", "25,91", "30,48"],
        ["100", "4\"", "106,43", "114,3", "114,3", "79,25", "79,25", "79,25", "146,05", "152,4", "152,4", "6,55", "11,18", "18,67", "27,69", "33,02"]
    ]
};