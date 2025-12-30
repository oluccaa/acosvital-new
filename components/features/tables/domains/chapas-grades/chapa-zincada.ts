import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const chapaZincada: TableItem = {
    name: "Chapa Zincada (Galvanizada)",
    description: "Tabela de especificações para Chapa Zincada.",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Chapa Zincada (Galvanizada)", colSpan: 3, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Bitola\nGSG", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Espessura\nmm", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Peso Teórico\nkg/m²", colSpan: 1, className: "bg-brand-blue-dark text-center align-middle" }
        ]
    ],
    headers: [],
    rows: [
        ["32", "0,3", "2,4"],
        ["30", "0,35", "2,8"],
        ["28", "0,43", "3,44"],
        ["26", "0,5", "4"],
        ["24", "0,65", "5,2"],
        ["22", "0,8", "6,4"],
        ["20", "0,95", "7,6"],
        ["19", "1,11", "8,88"],
        ["18", "1,25", "10"],
        ["16", "1,55", "12,4"],
        ["14", "1,95", "15,6"],
        ["13", "2,3", "18,4"],
        ["12", "2,7", "21,6"]
    ]
};
