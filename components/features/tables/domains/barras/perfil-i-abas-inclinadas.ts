import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const perfilIAbasInclinadas: TableItem = {
    name: "Perfil I - Abas Inclinadas",
    description: "Barras com 6 e 12m. Normas: NBR 7007 MR 250 / ASTM A-36",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Perfil I - Abas Inclinadas", colSpan: 6, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
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
        ["--- Barras com 6 e 12m. Normas: NBR 7007 MR 250 / ASTM A-36 ---"],
        ["3\" x 2.3/8\"", "76,20 x 59,20", "1ª", "4,32", "0,17", "8,48"],
        ["3\" x 2.3/8\"", "76,20 x 61,20", "2ª", "6,38", "0,251", "9,68"],
        ["4\" x 2.5/8\"", "101,60 x 67,60", "1ª", "4,9", "0,193", "11,46"],
        ["4\" x 2.5/8\"", "101,60 x 69,20", "2ª", "6,43", "0,253", "12,65"],
        ["5\" x 3\"", "127,00 x 76,20", "1ª", "5,44", "0,214", "14,88"],
        ["5\" x 3\"", "127,00 x 79,70", "2ª", "8,81", "0,347", "18,2"],
        ["6\" x 3.3/8\"", "152,40 x 84,60", "1ª", "5,89", "0,232", "18,6"],
        ["6\" x 3.3/8\"", "152,40 x 87,50", "2ª", "8,71", "0,343", "22"]
    ]
};