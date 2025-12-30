import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const chapaFinaFrio: TableItem = {
    name: "Chapa Fina a Frio",
    description: "Tabela de especificações para Chapa Fina a Frio.",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Chapa Fina a Frio", colSpan: 3, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Bitola\nMSG", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Espessura\nmm", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Peso Teórico\nkg/m²", colSpan: 1, className: "bg-brand-blue-dark text-center align-middle" }
        ]
    ],
    headers: [],
    rows: [
        ["--- Normas: SAE 1008/1020 / NBR NM87/2000 / NBR 11888/92 ---"],
        ["30", "0,3", "2,4"],
        ["28", "0,38", "3,04"],
        ["26", "0,45", "3,6"],
        ["24", "0,6", "4,8"],
        ["22", "0,75", "6"],
        ["20", "0,9", "7,2"],
        ["19", "1,06", "8,48"],
        ["18", "1,2", "9,6"],
        ["16", "1,5", "12"],
        ["14", "1,9", "15,2"]
    ]
};
