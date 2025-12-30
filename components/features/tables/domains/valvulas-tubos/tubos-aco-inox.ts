import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const tubosAcoInox: TableItem = {
    name: "Tubos de Aço Inox",
    description: "Tabela de Dimensões e Pesos para Tubos de Aço Inox (Schedule 5S, 10S, 40S, 80S, 160S)",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Diâmetro Externo", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Espessura de Parede (mm)", colSpan: 10, className: "bg-brand-blue-dark text-center" }
        ],
        [
            { text: "Pol.", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "mm", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "5-S", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
            { text: "10-S", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
            { text: "40-S", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
            { text: "80-S", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
            { text: "160-S", colSpan: 2, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Parede", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Peso", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Parede", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Peso", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Parede", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Peso", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Parede", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Peso", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Parede", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Peso", colSpan: 1, className: "bg-brand-blue-dark text-center text-xs" }
        ]
    ],
    headers: [],
    rows: [
        ["1/8\"", "10,2", "-", "-", "1,24", "0,28", "1,73", "0,37", "2,41", "0,46", "-", "-"],
        ["1/4\"", "13,72", "-", "-", "1,65", "0,5", "2,24", "0,63", "3,02", "0,81", "-", "-"],
        ["3/8\"", "17,15", "-", "-", "1,65", "0,64", "2,31", "0,86", "3,2", "1,12", "-", "-"],
        ["1/2\"", "21,34", "1,65", "0,81", "2,11", "1,02", "2,77", "1,29", "3,73", "1,64", "4,75", "1,94"],
        ["3/4\"", "26,67", "1,65", "1,03", "2,11", "1,3", "2,87", "1,71", "3,91", "2,22", "5,54", "2,88"],
        ["1\"", "33,4", "1,65", "1,31", "2,77", "2,12", "3,38", "2,54", "4,55", "3,29", "6,35", "4,24"],
        ["1.1/4\"", "42,16", "1,65", "1,67", "2,77", "2,73", "3,56", "3,44", "4,85", "4,54", "6,35", "5,6"],
        ["1.1/2\"", "48,26", "1,65", "1,93", "2,77", "3,16", "3,68", "4,11", "5,08", "5,48", "7,14", "7,24"],
        ["2\"", "60,33", "1,65", "2,42", "2,77", "3,98", "3,91", "5,53", "5,54", "7,58", "8,71", "11,08"],
        ["2.1/2\"", "73,08", "2,11", "3,75", "3,05", "5,33", "5,16", "8,75", "7,01", "11,57", "9,53", "14,92"],
        ["3\"", "88,9", "2,11", "4,51", "3,05", "6,45", "5,49", "11,45", "7,62", "15,48", "11,13", "21,3"],
        ["3.1/2\"", "101,6", "2,11", "5,17", "3,05", "7,4", "5,74", "13,76", "8,08", "18,9", "12,7", "27,8"],
        ["4\"", "114,3", "2,11", "5,83", "3,05", "8,35", "6,02", "16,3", "8,56", "22,62", "13,49", "33,5"],
        ["5\"", "141,3", "2,77", "9,45", "3,4", "11,6", "6,55", "22,09", "9,53", "31,38", "15,88", "49,1"],
        ["6\"", "168,28", "2,77", "11,3", "3,4", "13,8", "7,11", "28,65", "10,97", "43,16", "18,24", "67,4"],
        ["8\"", "219,08", "2,77", "14,8", "3,76", "19,9", "8,18", "42,97", "12,7", "64,57", "23,02", "111,3"],
        ["10\"", "273,05", "3,4", "22,6", "4,19", "27,8", "9,27", "60,3", "12,7", "81,5", "28,57", "171,2"],
        ["12\"", "323,85", "3,96", "31,4", "4,57", "36", "9,53", "71,9", "12,7", "97,4", "33,34", "238,8"],
        ["14\"", "355,6", "3,96", "34,4", "4,78", "41,3", "-", "-", "-", "-", "-", "-"],
        ["16\"", "406,4", "4,2", "42,4", "4,78", "47,3", "-", "-", "-", "-", "-", "-"],
        ["18\"", "457,2", "4,2", "46,8", "4,78", "53,2", "-", "-", "-", "-", "-", "-"],
        ["20\"", "508", "4,78", "59,3", "5,54", "68,6", "-", "-", "-", "-", "-", "-"],
        ["24\"", "609,6", "5,54", "82,5", "6,35", "94,5", "-", "-", "-", "-", "-", "-"]
    ]
};