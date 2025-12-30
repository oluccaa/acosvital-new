import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const perfilUAbasInclinadas: TableItem = {
    name: "Perfil U - Abas Inclinadas",
    description: "Barras com 6 e 12m - Normas: NBR 7007 MR 250 / ASTM A-36",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Perfil U - Abas Inclinadas", colSpan: 6, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Bitola (h x b)", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Alma", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Espessura da alma (e)", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
            { text: "Peso Teórico\nkg/m", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark text-center align-middle" }
        ],
        [
            { text: "pol.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "mm", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "B (mm)", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "A (pol.)", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" }
        ]
    ],
    headers: [],
    rows: [
        ["3\" x 1.1/2\"", "76,20 x 35,81", "1ª", "4,32", "0,17", "6,11"],
        ["3\" x 1.1/2\"", "76,20 x 38,05", "2ª", "6,55", "0,258", "7,44"],
        ["4\" x 1.5/8\"", "101,60 x 40,23", "1ª", "4,67", "0,183", "7,95"],
        ["4\" x 1.5/8\"", "101,60 x 41,83", "2ª", "6,27", "0,246", "9,3"],
        ["6\" x 2\"", "152,40 x 48,80", "1ª", "5,08", "0,2", "12,2"],
        ["6\" x 2\"", "152,40 x 51,70", "2ª", "7,98", "0,314", "15,6"],
        ["8\" x 2.1/4\"", "203,20 x 57,15", "1ª", "5,59", "0,22", "17,1"],
        ["8\" x 2.1/4\"", "203,20 x 57,15", "2ª", "7,7", "0,303", "20,5"],
        ["10\" x 2.5/8\"", "254,00 x 66,68", "1ª", "6,1", "0,24", "22,7"],
        ["10\" x 2.5/8\"", "254,00 x 66,68", "2ª", "9,63", "0,379", "29,8"],
        ["12\" x 3\"", "304,80 x 76,20", "1ª", "7,11", "0,28", "30,7"],
        ["12\" x 3\"", "304,80 x 76,20", "2ª", "9,83", "0,387", "37,2"],
        ["15\" x 3.3/8\"", "381,00 x 85,73", "1ª", "10,2", "0,4", "50,4"],
        ["15\" x 3.3/8\"", "381,00 x 85,73", "2ª", "10,7", "0,422", "52,1"]
    ]
};