import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const chapaFinaQuente: TableItem = {
    name: "Chapa Fina a Quente",
    description: "Tabela de especificações para Chapa Fina a Quente.",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Chapa Fina a Quente", colSpan: 3, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Bitola\nMSG", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Espessura\nmm", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Peso Teórico\nkg/m²", colSpan: 1, className: "bg-brand-blue-dark text-center align-middle" }
        ]
    ],
    headers: [],
    rows: [
        ["--- Normas: ASTM A-36 / SAE 1008/1020 / NBR NM87/2000 / NBR 11888/92 ---"],
        ["16", "1,5", "12"],
        ["15", "1,8", "14,4"],
        ["14", "2", "16"],
        ["13", "2,25", "18"],
        ["12", "2,65", "21,2"],
        ["11", "3", "24"],
        ["10", "3,35", "26,8"],
        ["9", "3,75", "30"],
        ["8", "4,25", "34"],
        ["7", "4,5", "36"],
        ["3/16\"", "4,75", "38"],
        ["*", "5", "40"]
    ]
};
