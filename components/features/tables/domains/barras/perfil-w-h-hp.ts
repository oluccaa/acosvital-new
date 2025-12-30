import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const perfilWHHP: TableItem = {
    name: "Perfil W Abas Paralelas – Perfil (W) H - HP",
    description: "Tabela de medidas e pesos para Perfil W Abas Paralelas.",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Perfil W Abas Paralelas – Perfil (W) H - HP", colSpan: 7, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Bitola\nmm x kg/m", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Peso Teórico\nkg/m", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "d\nmm", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "bf\nmm", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "h\nmm", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Espessura", colSpan: 2, className: "bg-brand-blue-dark text-center border-b border-white/20" }
        ],
        [
            { text: "tw\nmm", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "tf\nmm", colSpan: 1, className: "bg-brand-blue-dark text-center text-xs" }
        ]
    ],
    headers: [],
    rows: [
        ["--- Barras com 6 e 12m - Normas: ASTM A-572 GR50 e ASTM A6/A6M ---"],
        ["W150 x 22,50", "22.5", "139", "152", "152", "5,8", "6,6"],
        ["W150 x 29,80", "29,8", "138", "153", "157", "6,6", "9,3"],
        ["W 150 x 37,10", "37,1", "139", "154", "162", "8,1", "11,6"],
        ["W 200 x 35,90", "35,9", "165", "201", "181", "6,2", "10,2"],
        ["W 200 x 41,70", "41,7", "181", "166", "205", "7,2", "11,8"],
        ["W 200 x 46,10", "46,1", "181", "203", "203", "7,2", "11"],
        ["W 200 x 52,00", "52", "206", "181", "204", "7,9", "12,6"],
        ["HP 200 x 53,00", "53", "204", "181", "207", "11,3", "11,3"],
        ["W 200 x 59,00", "59", "182", "205", "210", "9,1", "14,2"],
        ["W 200 x 71,00", "71", "181", "216", "206", "10,2", "17,4"],
        ["W200 x 86,00", "86", "209", "181", "222", "13", "20,6"],
        ["HP 250 x 62,00", "62", "246", "256", "225", "10,5", "10,7"],
        ["W250 x 73,00", "73", "254", "253", "225", "8,6", "14,2"],
        ["W250 x 80,00", "80", "225", "256", "255", "9,4", "15,6"],
        ["HP 250 x 85,00", "85", "260", "254", "225", "14,4", "14,4"],
        ["W250 x 89,00", "89", "260", "256", "225", "10,7", "17,3"],
        ["W250 x 101,00", "101", "257", "264", "225", "11,9", "19,6"],
        ["W250 x 115,00", "115", "269", "259", "225", "13,5", "22,1"],
        ["HP 310 x 79,00", "79", "299", "306", "277", "11", "11"],
        ["HP 310 x 93,00", "93", "303", "308", "277", "13,1", "13,1"],
        ["W310 x 97,00", "97", "308", "305", "277", "9,9", "15,4"],
        ["W310 x 107,00", "107", "311", "306", "277", "10,9", "17"],
        ["HP 310 x 110,00", "110", "308", "310", "277", "15,4", "15,5"],
        ["W310 x 117,00", "117", "314", "307", "277", "11,9", "18,7"],
        ["HP 310 x 125,00", "125", "312", "312", "277", "17.4", "17,4"],
        ["W 360 x 91,00", "91", "353", "254", "288", "9,5", "16,4"],
        ["W 360 x 101,00", "101", "357", "255", "286", "10,5", "18,3"],
        ["W 360 x 110,00", "110", "360", "256", "288", "11,4", "19,9"],
        ["W360 x 122,00", "122", "363", "257", "288", "13", "21,7"]
    ]
};