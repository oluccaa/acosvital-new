import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const valvulaBorboleta: TableItem = {
    name: "Válvula Borboleta",
    description: "Válvula Borboleta Tipo Wafer Revestida em PTFE",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Válvula Borboleta Tipo Wafer Revestida em PTFE", colSpan: 15, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Bitola", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
            { text: "A", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "B", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "C", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "D", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "E", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "ØF", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "ØG", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "H", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "ØI", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "ØJ", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "K°", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Torque (N.m)", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Peso kg", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark text-center align-middle" }
        ],
        [
            { text: "Pol.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "DN", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" }
        ]
    ],
    rows: [
        ["2\"", "50", "70", "149", "21", "45", "11", "50", "120,65", "215", "N-4 Ø 19", "7,5", "45", "*", "2,9"],
        ["2.1/2\"", "65", "87", "165", "21", "48", "11", "50", "139,7", "215", "N-4 Ø 19", "7,5", "45", "*", "3,6"],
        ["3\"", "80", "101", "165", "21", "49", "11", "50", "152,4", "215", "N-4 Ø 19", "7,5", "45", "*", "3,9"],
        ["4\"", "100", "110", "180", "24", "55", "11", "70", "190,5", "260", "N-4 Ø 19", "10", "22,5", "*", "5,5"],
        ["5\"", "125", "124", "205", "27", "58", "14", "70", "215,9", "260", "N-4 Ø 22,4", "10", "22,5", "*", "6,2"],
        ["6\"", "150", "137", "219", "27", "59", "14", "70", "241,3", "260", "N-4 Ø 22,4", "10", "22,5", "*", "8"],
        ["8\"", "200", "173", "252", "27", "64", "17", "102", "298,45", "363", "N-4 Ø 22,4", "12", "22,5", "*", "14,3"],
        ["10\"", "250", "204", "283", "32", "70", "22", "102", "361,95", "363", "N-4 Ø 25,4", "12", "15", "*", "21,8"],
        ["12\"", "300", "245", "332", "32", "80", "24", "102", "431,8", "363", "N-4 Ø 25,4", "12", "15", "*", "30,8"]
    ]
};