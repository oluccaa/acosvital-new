import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const chapaXadrez: TableItem = {
    name: "Chapa Para Piso (Xadrez)",
    description: "Tabela de especificações para Chapa Xadrez.",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Chapa Para Piso (Xadrez)", colSpan: 3, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Espessura", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Peso Teórico\nkg/m²", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark text-center align-middle" }
        ],
        [
            { text: "pol.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "mm", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" }
        ]
    ],
    headers: [],
    rows: [
        ["--- Norma: NBR 7008 - ZC ---"],
        ["1/8\"", "3", "27"],
        ["3/16\"", "4,75", "41"],
        ["1/4\"", "6,3", "54"],
        ["5/16\"", "8", "68"],
        ["3/8\"", "9,5", "81"]
    ]
};
