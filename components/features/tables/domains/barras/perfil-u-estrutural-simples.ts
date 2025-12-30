import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const perfilUEstruturalSimples: TableItem = {
    name: "Perfil U Estrutural - Simples",
    description: "Tabela de especificações para Perfil U Estrutural Simples. Outras medidas e espessuras poderão ser fornecidas sob consulta.",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Perfil U Estrutural - Simples", colSpan: 12, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Dimensão", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
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
        ["50", "25", "2", "1,75", "1,38", "6,66", "2,6", "1,94", "0,71", "1,07", "0,6", "0,78"],
        ["50", "25", "2,25", "2,07", "1,62", "7,7", "3", "1,92", "0,73", "1,26", "0,71", "0,77"],
        ["50", "25", "2,65", "2,38", "1,86", "8,66", "3,4", "1,9", "0,75", "1,43", "0,82", "0,77"],
        ["50", "25", "3", "2,67", "2,1", "9,55", "3,8", "1,88", "0,77", "1,59", "0,92", "0,77"],
        ["75", "38", "2", "2,8", "2,2", "25,1", "6,6", "2,99", "1,12", "4,55", "1,58", "1,27"],
        ["75", "38", "2,25", "3,32", "2,61", "29,43", "7,8", "2,97", "1,14", "5,37", "1,88", "1,27"],
        ["75", "38", "2,65", "3,84", "3,01", "33,56", "8,9", "2,95", "1,16", "6,15", "2,17", "1,26"],
        ["75", "38", "3", "4,35", "3,41", "37,49", "9,9", "2,93", "1,18", "6,91", "2,45", "1,26"],
        ["75", "38", "4,75", "6,48", "5,09", "52,75", "14", "2,85", "1,27", "10", "3,66", "1,24"],
        ["100", "40", "2", "3,27", "2,57", "49,01", "9,8", "3,86", "0,97", "4,99", "1,65", "1,23"],
        ["100", "40", "2,25", "3,89", "3,06", "57,67", "11,5", "3,84", "0,99", "5,89", "1,96", "1,22"],
        ["100", "40", "2,65", "4,51", "3,54", "65,99", "13,1", "3,82", "1,01", "6,76", "2,26", "1,22"],
        ["100", "40", "3", "5,11", "4,01", "73,99", "14,7", "3,8", "1,03", "7,61", "2,56", "1,22"],
        ["100", "40", "4,75", "7,67", "6,02", "105,9", "21,1", "3,71", "1,11", "11,09", "3,84", "1,2"],
        ["100", "50", "2", "3,65", "2,87", "58,15", "11,6", "3,98", "1,34", "9,24", "2,52", "1,58"],
        ["100", "50", "2,25", "4,35", "3,41", "68,55", "13,7", "3,96", "1,36", "10,94", "3", "1,58"],
        ["100", "50", "2,65", "5,04", "3,95", "78,6", "15,7", "3,94", "1,38", "12,59", "3,48", "1,58"],
        ["100", "50", "3", "5,71", "4,48", "88,29", "17,6", "3,92", "1,4", "14,2", "3,94", "1,57"],
        ["100", "50", "4,75", "8,63", "6,77", "127,5", "25,4", "3,84", "1,48", "20,89", "5,84", "1,55"]
    ]
};