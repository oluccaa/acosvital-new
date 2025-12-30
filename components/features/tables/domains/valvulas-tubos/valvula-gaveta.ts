import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const valvulaGaveta: TableItem = {
    name: "Válvula Gaveta",
    description: "Válvula Gaveta Classe 150",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Válvula Gaveta Classe 150", colSpan: 10, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Bitola", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
            { text: "Dimensões", colSpan: 7, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
            { text: "Peso kg", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark text-center align-middle" }
        ],
        [
            { text: "Pol.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "DN", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "A", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "B", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "ØC", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "ØD", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "ØE", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "ØF", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "N", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" }
        ]
    ],
    rows: [
        ["1.1/2\"", "40", "165", "309", "179", "98,4", "127", "16", "4", "12"],
        ["2\"", "50", "178", "328,5", "195", "120,5", "152", "19", "4", "19"],
        ["2.1/2\"", "62", "190", "369", "195", "139,5", "178", "19", "4", "29"],
        ["3\"", "80", "203", "401", "245", "152,5", "190", "19", "4", "33"],
        ["4\"", "100", "229", "461", "275", "190,5", "229", "19", "8", "47"],
        ["6\"", "150", "267", "602", "345", "241,5", "279", "22", "8", "76"],
        ["8\"", "200", "292", "755", "345", "298,5", "343", "22", "8", "120"],
        ["10\"", "250", "330", "910", "400", "362", "406", "25", "12", "190"],
        ["12\"", "300", "356", "1082", "447", "432", "483", "25", "12", "290"],
        ["14\"", "350", "381", "1145", "500", "476,3", "533", "29", "12", "360"],
        ["16\"", "400", "406", "1333", "500", "539,8", "597", "29", "16", "480"]
    ]
};