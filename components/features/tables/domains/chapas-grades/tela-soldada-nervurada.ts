import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const telaSoldadaNervurada: TableItem = {
    name: "Tela Soldada Nervurada",
    description: "Tabela de especificações para Tela Soldada Nervurada (Aço CA-60)",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Tela Soldada Nervurada", colSpan: 12, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Aço CA-60\n\nTELA", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "REF.", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Diâmetro (mm)", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
            { text: "Espaçamento (cm)", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
            { text: "Seções (cm²/m)", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
            { text: "Dimensões (m)", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
            { text: "Peso", colSpan: 2, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Long.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Transv.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Long.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Transv.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Long.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Transv.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Largura", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Compr.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Kg/m²", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Kg/Peça", colSpan: 1, className: "bg-brand-blue-dark text-center text-xs" }
        ]
    ],
    headers: [],
    rows: [
        ["PAINEL", "Q 61", "3,4", "3,4", "15", "15", "0,61", "0,61", "2,45", "6", "0,97", "14,26"],
        ["PAINEL", "Q 75", "3,8", "3,8", "15", "15", "0,75", "0,75", "2,45", "6", "1,21", "17,79"],
        ["PAINEL", "Q 92", "4,2", "4,2", "15", "15", "0,92", "0,92", "2,45", "6", "1,48", "21,76"],
        ["PAINEL", "Q 113", "3,8", "3,8", "10", "10", "1,13", "1,13", "2,45", "6", "1,8", "26,46"],
        ["PAINEL", "Q 138", "4,2", "4,2", "10", "10", "1,38", "1,38", "2,45", "6", "2,2", "32,34"],
        ["PAINEL", "R 138", "4,2", "4,2", "10", "15", "1,38", "0,92", "2,45", "6", "1,83", "26,9"],
        ["PAINEL", "M 138", "4,2", "4,2", "10", "20", "1,38", "0,69", "2,45", "6", "1,65", "24,26"],
        ["PAINEL", "Q 159", "4,5", "4,5", "10", "10", "1,59", "1,59", "2,45", "6", "2,52", "37,04"],
        ["PAINEL", "R 159", "4,5", "4,5", "10", "15", "1,59", "1,06", "2,45", "6", "2,11", "31,02"],
        ["PAINEL", "M 159", "4,5", "4,5", "10", "20", "1,59", "0,79", "2,45", "6", "1,9", "27,93"],
        ["PAINEL", "L 159", "4,5", "4,5", "10", "30", "1,59", "0,53", "2,45", "6", "1,69", "24,84"],
        ["PAINEL", "Q 196", "5", "5", "10", "10", "1,96", "1,96", "2,45", "6", "3,11", "45,72"],
        ["PAINEL", "R 196", "5", "5", "10", "15", "1,96", "1,3", "2,45", "6", "2,6", "38,22"],
        ["PAINEL", "M 196", "5", "5", "10", "20", "1,96", "0,98", "2,45", "6", "2,34", "34,4"],
        ["PAINEL", "L 196", "5", "5", "10", "30", "1,96", "0,65", "2,45", "6", "2,09", "30,72"],
        ["PAINEL", "T 196", "5", "5", "30", "10", "0,65", "1,96", "2,45", "6", "2,11", "31,02"],
        ["PAINEL", "Q 246", "5,6", "5,6", "10", "10", "2,46", "2,46", "2,45", "6", "3,97", "57,48"],
        ["PAINEL", "R 246", "5,6", "5,6", "10", "15", "2,46", "1,64", "2,45", "6", "3,26", "47,92"],
        ["PAINEL", "M 246", "5,6", "5,6", "10", "20", "2,46", "1,23", "2,45", "6", "2,94", "43,22"],
        ["PAINEL", "L 246", "5,6", "5,6", "10", "30", "2,46", "0,85", "2,45", "6", "2,62", "38,51"],
        ["PAINEL", "T 246", "5,6", "5,6", "30", "10", "0,82", "2,46", "2,45", "6", "2,64", "38,81"],
        ["PAINEL", "Q 283", "6", "6", "10", "10", "2,83", "2,83", "2,45", "6", "4,48", "65,86"],
        ["PAINEL", "R 283", "6", "6", "10", "15", "2,83", "1,88", "2,45", "6", "3,74", "54,98"],
        ["PAINEL", "M 283", "6", "6", "10", "20", "2,83", "1,41", "2,45", "6", "3,37", "49,54"],
        ["PAINEL", "L 283", "6", "6", "10", "30", "2,83", "0,94", "2,45", "6", "3", "44,1"],
        ["PAINEL", "Q 335", "8", "8", "15", "15", "3,35", "3,35", "2,45", "6", "5,37", "78,94"],
        ["PAINEL", "L 335", "8", "6", "15", "30", "3,35", "0,94", "2,45", "6", "3,48", "51,16"],
        ["PAINEL", "T 335", "6", "8", "30", "15", "0,94", "3,35", "2,45", "6", "4,45", "65,42"],
        ["PAINEL", "Q 396", "7,1", "7,1", "10", "10", "3,96", "3,96", "2,45", "6", "6,28", "92,32"],
        ["PAINEL", "L 396", "7,1", "6", "10", "30", "3,96", "0,94", "2,45", "6", "3,91", "57,48"],
        ["PAINEL", "Q 503", "8", "8", "10", "10", "5,03", "5,03", "2,45", "6", "7,97", "117,16"],
        ["PAINEL", "L 503", "8", "6", "10", "30", "5,03", "0,94", "2,45", "6", "4,77", "70,12"],
        ["PAINEL", "T 503", "6", "8", "30", "10", "0,94", "5,03", "2,45", "6", "4,76", "69,97"],
        ["PAINEL", "Q 636", "9", "9", "10", "10", "6,36", "6,36", "2,45", "6", "10,09", "148,32"],
        ["PAINEL", "L 636", "9", "6", "10", "30", "6,36", "0,94", "2,45", "6", "5,84", "85,85"],
        ["PAINEL", "Q 785", "10", "10", "10", "10", "7,85", "7,85", "2,45", "6", "12,46", "183,16"],
        ["PAINEL", "L 785", "10", "6", "10", "30", "7,85", "0,94", "2,45", "6", "7,03", "103,34"]
    ]
};
