import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const tuboIndustrialQuadrado: TableItem = {
    name: "Tubo Industrial Quadrado",
    description: "Tabela de Pesos Teóricos (kg/m) para Tubo Industrial Quadrado. Outras bitolas sob consulta.",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Tubo Industrial Quadrado", colSpan: 22, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Peso Teórico kg/m", colSpan: 22, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Bitola\nmm", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Espessura mm", colSpan: 21, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "0,9", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "1,1", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "1,2", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "1,5", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "1,9", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "2", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "2,3", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "2,65", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "3", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "3,35", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "3,75", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "4,25", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "4,5", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "4,75", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "5", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "5,4", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "5,6", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "6,3", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "7,3", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "8", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "9,5", colSpan: 1, className: "bg-brand-blue-dark text-center text-xs" }
        ]
    ],
    headers: [],
    rows: [
        ["--- Outras bitolas sob consulta. ---"],
        ["15 x 15", "0,4", "0,5", "0,5", "0,7", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["16 x 16", "0,43", "0,5", "0,6", "0,7", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["20 x 20", "0,54", "0,6", "0,7", "0,9", "1,1", "1,1", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["25 x 25", "0,68", "0,8", "0,9", "1,1", "1,4", "1,5", "1,6", "1,9", "2,13", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["30 x 30", "0,83", "1", "1,1", "1,4", "1,7", "1,8", "2", "2,32", "2,6", "2,87", "3,18", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["35 x 35", "0,97", "1,1", "1,3", "1,6", "2", "2,1", "2,3", "2,73", "3,07", "3,4", "3,76", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["40 x 40", "1,11", "1,3", "1,5", "1,8", "2,3", "2,4", "2,7", "3,15", "3,54", "3,92", "4,35", "4,88", "5,14", "5,39", "-", "-", "-", "-", "-", "-", "-"],
        ["50 x 50", "1,6", "1,8", "2,3", "2,9", "3", "3,4", "3,98", "4,48", "4,97", "5,53", "6,21", "6,55", "6,88", "7,05", "7,54", "7,79", "8,62", "-", "-", "-"],
        ["60 x 60", "2", "2,2", "2,8", "3,5", "3,7", "4,1", "4,81", "5,42", "6,02", "6,7", "7,54", "7,96", "8,37", "8,78", "9,43", "9,75", "10,86", "-", "-", "-"],
        ["63,5 x 63,5", "2,4", "2,9", "3,7", "3,9", "4,4", "5,1", "5,74", "6,39", "7,11", "8,01", "8,45", "8,89", "9,33", "10", "10,4", "11,55", "-", "-", "-"],
        ["70 x 70", "2,6", "3,2", "4,1", "4,3", "4,8", "5,64", "6,36", "7,07", "7,87", "8,87", "9,37", "9,86", "10,4", "11,1", "11,5", "12,83", "-", "-", "-"],
        ["80 x 80", "3,7", "4,7", "4,9", "5,5", "6,47", "7,29", "8,12", "9,05", "10,2", "10,8", "11,4", "11,9", "12,8", "13,3", "14,81", "-", "-", "-"],
        ["90 x 90", "4,2", "5,3", "5,5", "6,2", "7,3", "8,23", "9,17", "10,2", "11,5", "12,2", "12,8", "13,5", "14,5", "15", "16,78", "19,3", "21", "24,6"],
        ["100 x 100", "6,2", "6,9", "8,13", "9,17", "10,2", "11,4", "12,9", "13,6", "14,3", "15", "16,2", "16,8", "18,75", "21,6", "23,5", "27,5"],
        ["110 x 110", "6,8", "7,6", "8,96", "10,1", "11,3", "12,6", "14,2", "15", "15,8", "16,6", "17,9", "18,5", "20,73", "23,8", "26", "30,5"],
        ["120 x 120", "7,4", "8,3", "9,79", "11,1", "12,3", "13,8", "15,5", "16,4", "17,3", "18,2", "19,6", "20,3", "22,7", "26,1", "28,5", "33,5"],
        ["130 x 130", "8", "9", "10,6", "12", "13,4", "14,9", "16,9", "17,8", "18,8", "19,7", "21,3", "22", "24,67", "28,4", "31", "36,5"],
        ["150 x 150", "12,3", "13,9", "15,5", "17,3", "19,5", "20,6", "21,8", "22,9", "24,7", "25,5", "28,62", "33", "36", "42,4"],
        ["160 x 160", "13,1", "14,8", "16,5", "18,5", "20,9", "22,1", "23,3", "24,4", "26,3", "27,3", "30,59", "35,3", "38,5", "45,4"],
        ["170 x 170", "13,9", "15,8", "17,6", "19,6", "22,2", "23,5", "24,7", "26", "28", "29", "32,57", "37,6", "41", "48,4"],
        ["175 x 175", "14,4", "16,2", "18,1", "20,2", "22,9", "24,2", "25,5", "26,8", "28,9", "29,9", "33,55", "38,7", "42,3", "49,8"]
    ]
};
