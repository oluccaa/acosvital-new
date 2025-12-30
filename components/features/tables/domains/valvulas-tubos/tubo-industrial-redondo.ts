import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const tuboIndustrialRedondo: TableItem = {
    name: "Tubo Industrial Redondo",
    description: "Tabela de Pesos Teóricos (kg/m) para Tubo Industrial Redondo. Outras bitolas sob consulta.",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Tubo Industrial Redondo", colSpan: 23, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Peso Teórico kg/m", colSpan: 23, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Diâmetro", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Espessura mm", colSpan: 21, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "pol.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "mm", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "1", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "1", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "1", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "2", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "2", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "2", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "2,3", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "2,7", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "3", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "3,4", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "3,8", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "4,3", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "4,5", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "4,8", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
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
        ["1/2\"", "12,7", "0,3", "0,3", "0,3", "0,4", "0,5", "0,5", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["5/8\"", "15,9", "0,3", "0,4", "0,4", "0,5", "0,7", "0,7", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["3/4\"", "19,1", "0,4", "0,5", "0,5", "0,7", "0,8", "0,8", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["7/8\"", "22,2", "0,5", "0,6", "0,6", "0,8", "1", "1", "1,46", "1,28", "1,42", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["1\"", "25,4", "0,5", "0,6", "0,7", "0,9", "1,1", "1,2", "1,64", "1,49", "1,66", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "26,9", "0,6", "0,7", "0,8", "0,9", "1,2", "1,2", "1,73", "1,58", "1,77", "1,95", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["1.1/8\"", "28,6", "0,6", "0,7", "0,8", "1", "1,3", "1,3", "1,75", "1,7", "1,89", "2,09", "2,3", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["1.1/4\"", "31,8", "0,7", "0,8", "0,9", "1,1", "1,4", "1,5", "1,81", "1,9", "2,13", "2,35", "2,59", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "33,4", "0,7", "0,9", "1", "1,2", "1,5", "1,6", "1,99", "2,01", "2,25", "2,48", "2,74", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", "33,7", "0,7", "0,9", "1", "1,2", "1,5", "1,6", "2,17", "2,03", "2,27", "2,51", "2,77", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["1.3/8\"", "34,9", "0,8", "0,9", "1", "1,2", "1,6", "1,6", "2,23", "2,11", "2,36", "2,61", "2,88", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["1.1/2\"", "38,1", "0,8", "1", "1,1", "1,4", "1,7", "1,8", "2,34", "2,32", "2,6", "2,87", "3,18", "3,55", "3,73", "3,91", "-", "-", "-", "-", "-", "-"],
        ["1.5/8\"", "41,3", "0,9", "1,1", "1,2", "1,5", "1,8", "1,9", "2,52", "2,52", "2,83", "3,13", "3,47", "3,88", "4,08", "4,28", "-", "-", "-", "-", "-", "-"],
        ["-", "42,4", "0,9", "1,1", "1,2", "1,5", "1,9", "2", "2,56", "2,6", "2,91", "3,23", "3,57", "4", "4,21", "4,41", "-", "-", "-", "-", "-", "-"],
        ["1.3/4\"", "44,5", "1", "1,1", "1,3", "1,6", "2", "2,1", "2,69", "2,73", "3,07", "3,4", "3,76", "4,21", "4,43", "4,65", "-", "-", "-", "-", "-", "-"],
        ["1.7/8\"", "47,6", "1", "1,2", "1,4", "1,7", "2,1", "2,3", "3,05", "2,94", "3,3", "3,66", "4,06", "4,54", "4,78", "5,02", "-", "-", "-", "-", "-", "-"],
        ["-", "48,3", "1,1", "1,2", "1,4", "1,7", "2,2", "2,3", "3,22", "2,98", "3,35", "3,71", "4,12", "4,62", "4,86", "5,1", "-", "-", "-", "-", "-", "-"],
        ["2\"", "50,8", "1,1", "1,3", "1,5", "1,8", "2,3", "2,4", "3,4", "3,15", "3,54", "3,92", "4,35", "4,88", "5,14", "5,39", "5,65", "6,05", "6,24", "6,91", "-", "-"],
        ["2.1/4\"", "57,2", "1,3", "1,5", "1,7", "2,1", "2,6", "2,7", "4,1", "3,56", "4,01", "4,44", "4,94", "5,54", "5,84", "6,14", "6,43", "6,89", "7,12", "7,9", "-", "-"],
        ["2.3/8\"", "60,3", "1,3", "1,6", "1,8", "2,2", "2,7", "2,9", "4,81", "3,77", "4,24", "4,7", "5,23", "5,87", "6,19", "6,51", "6,82", "7,31", "7,55", "8,39", "-", "-"],
        ["2.1/2\"", "63,5", "1,4", "1,6", "1,8", "2,3", "2,9", "3", "5,51", "3,98", "4,48", "4,97", "5,53", "6,21", "6,55", "6,88", "7,21", "7,74", "8", "8,89", "-", "-"],
        ["3\"", "76,2", "1,7", "2", "2,2", "2,8", "3,5", "3,7", "6,22", "4,81", "5,42", "6,02", "6,7", "7,54", "7,96", "8,37", "8,78", "9,43", "9,75", "10,9", "-", "-"],
        ["3.1/2\"", "88,9", "-", "-", "2,6", "3,2", "4,1", "4,3", "6,92", "5,64", "6,36", "7,07", "7,87", "8,87", "9,37", "9,86", "10,4", "11,1", "11,5", "12,8", "-", "-"],
        ["4\"", "102", "-", "-", "3", "3,7", "4,7", "4,9", "7,63", "6,47", "7,29", "8,12", "9,05", "10,2", "10,8", "11,4", "11,9", "12,8", "13,26", "14,8", "-", "-"],
        ["4.1/2\"", "114", "-", "-", "-", "4,2", "5,3", "5,5", "8,33", "7,3", "8,23", "9,17", "10,2", "11,5", "12,2", "12,8", "13,5", "14,5", "15,01", "16,8", "19,3", "21, 24,55"],
        ["5\"", "127", "-", "-", "-", "4,6", "5,9", "6,2", "9,04", "8,13", "9,17", "10,2", "11,4", "12,9", "13,6", "14,3", "15", "16,2", "16,77", "18,8", "21,6", "23,5, 27,53"],
        ["5.1/2\"", "140", "-", "-", "-", "5,1", "6,5", "6,8", "9,21", "8,96", "10,1", "11,3", "12,6", "14,2", "15", "15,8", "16,6", "17,9", "18,52", "20,7", "23,8", "26, 30,5"],
        ["6\"", "152", "-", "-", "-", "5,6", "7,1", "7,4", "11,2", "9,79", "11,1", "11,1", "12,3", "13,8", "15,5", "16,4", "17,3", "18,2", "19,6", "20,27", "22,7", "26,1, 28,5, 33,48"],
        ["6.1/2\"", "165", "-", "-", "-", "-", "8", "-", "1,11", "10,6", "12", "13,4", "14,9", "16,9", "17,8", "18,8", "19,7", "21,3", "22,03", "24,7", "28,4", "31, 36,45"],
        ["6.5/8\"", "168", "-", "-", "-", "-", "8,2", "-", "1,28", "10,8", "12,2", "13,6", "15,2", "17,2", "18,2", "19,2", "20,1", "21,7", "22,47", "25,2", "29, 31,6, 37,2"],
        ["8\"", "203", "-", "-", "-", "-", "9,9", "-", "1,37", "13,1", "14,8", "16,5", "18,5", "20,9", "22,1", "23,3", "24,4", "26,3", "27,29", "30,6", "35,3, 38,5, 45,38"]
    ]
};