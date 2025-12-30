
import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const tuboIndustrialRetangular: TableItem = {
    name: "Tubo Industrial Retangular",
    description: "Tabela de Pesos Teóricos (kg/m) para Tubo Industrial Retangular. Outras bitolas sob consulta.",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Tubo Industrial Retangular", colSpan: 22, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
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
        ["30 x 20", "0,68", "0,8", "0,9", "1,12", "1,4", "1,47", "1,64", "1,9", "2,13", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["35 x 25", "0,83", "0,97", "1,09", "1,35", "1,7", "1,78", "1,99", "2,32", "2,6", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["40 x 20", "0,83", "0,97", "1,09", "1,35", "1,7", "1,78", "1,99", "2,32", "2,6", "2,87", "3,18", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["40 x 30", "0,97", "1,13", "1,28", "1,59", "1,99", "2,09", "2,34", "2,73", "3,07", "3,4", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["50 x 20", "0,97", "1,13", "1,28", "1,59", "1,99", "2,09", "2,34", "2,73", "3,07", "3,4", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["50 x 30", "1,11", "1,3", "1,47", "1,82", "2,29", "2,41", "2,69", "3,15", "3,54", "3,92", "4,35", "4,88", "5,14", "5,39", "-", "-", "-", "-", "-", "-", "-"],
        ["50 x 40", "-", "1,47", "1,66", "2,06", "2,59", "2,72", "3,05", "3,56", "4,01", "4,44", "4,94", "5,54", "5,84", "6,14", "-", "-", "-", "-", "-", "-", "-"],
        ["60 x 30", "-", "1,47", "1,66", "2,06", "2,59", "2,72", "3,05", "3,56", "4,01", "4,44", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["60 x 40", "-", "1,63", "1,84", "2,29", "2,89", "3,03", "3,4", "3,98", "4,48", "4,97", "5,53", "6,21", "6,55", "6,88", "-", "-", "-", "-", "-", "-", "-"],
        ["70 x 30", "-", "1,63", "1,84", "2,29", "2,89", "3,03", "3,4", "3,98", "4,48", "4,97", "5,53", "6,21", "6,55", "6,88", "-", "-", "-", "-", "-", "-", "-"],
        ["70 x 50", "-", "1,96", "2,22", "2,76", "3,48", "3,66", "4,1", "4,81", "5,42", "6,02", "6,7", "7,54", "7,96", "8,37", "8,78", "9,43", "9,75", "10,86", "-", "-", "-"],
        ["80 x 40", "-", "1,96", "2,22", "2,76", "3,48", "3,66", "4,1", "4,81", "5,42", "6,02", "6,7", "7,54", "7,96", "8,37", "8,78", "9,43", "9,75", "10,86", "-", "-", "-"],
        ["80 x 50", "-", "-", "-", "-", "3,97", "4,46", "5,22", "5,89", "6,54", "7,29", "8,21", "8,66", "9,11", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["80 x 60", "-", "-", "3,23", "4,08", "4,29", "4,81", "5,64", "6,36", "7,07", "7,87", "8,87", "9,37", "9,86", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["90 x 30", "-", "2,22", "2,76", "3,48", "3,66", "4,1", "4,81", "5,42", "6,02", "6,7", "7,54", "7,96", "8,37", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["100 x 40", "-", "-", "3,23", "4,08", "4,29", "4,81", "5,64", "6,36", "7,07", "7,87", "8,87", "9,37", "9,86", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["100 x 50", "-", "-", "3,47", "4,37", "4,6", "5,16", "6,05", "6,83", "7,59", "8,46", "9,54", "10,07", "10,6", "11,13", "11,97", "12,38", "13,82", "-", "-", "-", "-"],
        ["100 x 60", "-", "-", "3,7", "4,67", "4,91", "5,51", "6,47", "7,29", "8,12", "9,05", "10,2", "10,78", "11,35", "11,91", "12,81", "13,26", "14,81", "-", "-", "-", "-"],
        ["100 x 80", "-", "-", "4,17", "5,27", "5,54", "6,22", "7,3", "8,23", "9,17", "10,22", "11,53", "12,19", "12,83", "13,48", "14,5", "15,01", "16,78", "-", "-", "-", "-"],
        ["120 x 40", "-", "-", "3,7", "4,67", "4,91", "5,51", "6,47", "7,29", "8,12", "9,05", "10,2", "10,78", "11,35", "11,91", "12,81", "13,26", "14,81", "-", "-", "-", "-"],
        ["120 x 60", "-", "-", "4,17", "5,27", "5,54", "6,22", "7,3", "8,23", "9,17", "10,22", "11,53", "12,19", "12,83", "13,48", "14,5", "15,01", "16,78", "19,26", "20,97", "24,55", "-"],
        ["120 x 80", "-", "-", "-", "5,86", "6,17", "6,92", "8,13", "9,17", "10,22", "11,4", "12,87", "13,59", "14,32", "15,04", "16,19", "16,77", "18,75", "21,55", "23,48", "27,53", "30,5"],
        ["120 x 100", "-", "-", "-", "6,79", "7,63", "8,96", "10,11", "11,26", "12,57", "14,2", "15", "15,81", "16,61", "17,89", "18,52", "20,73", "23,84", "25,98", "30,5", "-", "-"],
        ["140 x 60", "-", "-", "-", "6,17", "6,92", "8,13", "9,17", "10,22", "11,4", "12,87", "13,59", "14,32", "15,04", "16,19", "16,77", "18,75", "-", "-", "-", "-", "-"],
        ["140 x 80", "-", "-", "-", "6,79", "7,63", "8,96", "10,11", "11,26", "12,57", "14,2", "15", "15,81", "16,61", "17,89", "18,52", "20,73", "-", "-", "-", "-", "-"],
        ["150 x 50", "-", "-", "-", "6,17", "6,92", "8,13", "9,17", "10,22", "11,4", "12,87", "13,59", "14,32", "15,04", "16,19", "16,77", "18,75", "21,55", "23,48", "27,53", "-", "-"],
        ["150 x 100", "-", "-", "-", "-", "-", "10,2", "11,52", "12,84", "14,33", "16,19", "17,12", "18,04", "18,96", "20,42", "21,15", "23,69", "27,27", "29,74", "34,97", "-", "-"],
        ["160 x 80", "-", "-", "-", "-", "-", "9,79", "11,05", "12,31", "13,75", "15,53", "16,41", "17,3", "18,18", "19,58", "20,27", "22,7", "26,12", "28,49", "33,48", "-", "-"],
        ["180 x 80", "-", "-", "-", "-", "-", "10,62", "11,99", "13,36", "14,92", "16,86", "17,82", "18,78", "19,74", "21,27", "22,03", "24,67", "28,41", "30,99", "36,45", "-", "-"],
        ["200 x 100", "-", "-", "-", "-", "-", "12,28", "13,87", "15,46", "17,27", "19,52", "20,64", "21,76", "22,87", "24,65", "25,54", "28,62", "32,98", "36,01", "42,41", "-", "-"]
    ]
};
