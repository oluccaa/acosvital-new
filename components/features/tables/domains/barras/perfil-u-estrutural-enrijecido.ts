import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const perfilUEstruturalEnrijecido: TableItem = {
    name: "Perfil U Estrutural - Enrijecido",
    description: "Tabela de especificações para Perfil U Estrutural Enrijecido. Outras medidas e espessuras poderão ser fornecidas sob consulta.",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Perfil U Estrutural - Enrijecido", colSpan: 13, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Dimensão", colSpan: 4, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "S", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "P", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Jx", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Wx", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "ix", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "ey", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Jy", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Wy", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "iy", colSpan: 1, className: "bg-brand-blue-dark text-center align-middle" }
        ],
        [
            { text: "h\nmm", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "B\nmm", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "d\nmm", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "e=r\nmm", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "cm²", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "kg/m", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "cm⁴", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "cm³", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "cm", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "cm", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "cm⁴", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "cm³", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "cm", colSpan: 1, className: "bg-brand-blue-dark text-center text-xs" }
        ]
    ],
    headers: [],
    rows: [
        ["--- Outras medidas e espessuras poderão ser fornecidas sob consulta. ---"],
        ["50", "25", "10", "2,00", "2,00", "1,57", "7,40", "2,96", "1,92", "0,92", "1,68", "1,06", "0,92"],
        ["50", "25", "10", "2,25", "2,33", "1,83", "8,40", "3,36", "1,90", "0,92", "1,87", "1,18", "0,90"],
        ["50", "25", "10", "2,65", "2,64", "2,07", "9,28", "3,71", "1,88", "0,91", "2,02", "1,28", "0,88"],
        ["50", "25", "10", "3,00", "2,92", "2,30", "10,04", "4,01", "1,85", "0,91", "2,15", "1,35", "0,86"],
        ["75", "40", "15", "2,00", "3,23", "2,54", "28,46", "7,59", "2,97", "1,50", "7,43", "2,97", "1,52"],
        ["75", "40", "15", "2,25", "3,81", "2,99", "33,01", "8,80", "2,94", "1,49", "8,52", "3,40", "1,50"],
        ["75", "40", "15", "2,65", "4,37", "3,43", "37,25", "9,93", "2,92", "1,49", "9,50", "3,78", "1,48"],
        ["75", "40", "15", "3,00", "4,90", "3,85", "41,18", "10,98", "2,90", "1,48", "10,38", "4,13", "1,46"],
        ["100", "50", "17", "2,00", "4,16", "3,27", "66,05", "13,20", "3,98", "1,78", "14,87", "4,61", "1,89"],
        ["100", "50", "17", "2,25", "4,93", "3,87", "77,21", "15,44", "3,96", "1,77", "17,21", "5,33", "1,87"],
        ["100", "50", "17", "2,65", "5,67", "4,45", "87,80", "17,56", "3,94", "1,77", "19,36", "5,99", "1,85"],
        ["100", "50", "17", "3,00", "6,39", "5,02", "97,83", "19,57", "3,91", "1,76", "21,35", "6,59", "1,83"],
        ["127", "50", "17", "2,00", "4,68", "3,67", "115,45", "18,18", "4,97", "1,59", "16,17", "4,74", "1,86"],
        ["127", "50", "17", "2,25", "5,54", "4,35", "135,33", "21,31", "4,94", "1,59", "18,71", "5,48", "1,84"],
        ["127", "50", "17", "2,65", "6,39", "5,01", "154,31", "24,30", "4,92", "1,58", "21,07", "6,17", "1,82"],
        ["127", "50", "17", "3,00", "7,21", "5,66", "172,40", "27,15", "4,89", "1,58", "23,24", "6,79", "1,80"],
        ["150", "60", "20", "2,00", "5,61", "4,40", "195,38", "26,05", "5,90", "1,92", "28,36", "6,95", "2,25"],
        ["150", "60", "20", "2,25", "6,66", "5,23", "229,93", "30,66", "5,88", "1,91", "33,03", "8,08", "2,23"],
        ["150", "60", "20", "2,65", "7,69", "6,04", "263,19", "35,09", "5,85", "1,91", "37,42", "9,15", "2,21"],
        ["150", "60", "20", "3,00", "8,70", "6,83", "295,19", "39,36", "5,82", "1,91", "41,53", "10,14", "2,18"],
        ["200", "75", "25", "2,65", "10,08", "7,92", "614,20", "61,42", "7,80", "2,32", "77,80", "15,02", "2,78"],
        ["200", "75", "25", "3,00", "11,44", "8,98", "691,93", "69,19", "7,78", "2,32", "86,90", "16,76", "2,76"],
        ["200", "75", "25", "3,35", "12,76", "10,02", "766,84", "76,68", "7,75", "2,31", "95,46", "18,40", "2,73"],
        ["200", "75", "25", "3,75", "14,07", "11,04", "839,21", "83,92", "7,72", "2,31", "103,55", "19,94", "2,71"],
        ["200", "75", "25", "4,25", "15,35", "12,05", "909,31", "90,93", "7,70", "2,30", "111,20", "21,40", "2,69"],
        ["200", "75", "25", "4,75", "17,26", "13,55", "1012,80", "101,28", "7,66", "2,30", "123,17", "23,67", "2,67"]
    ]
};