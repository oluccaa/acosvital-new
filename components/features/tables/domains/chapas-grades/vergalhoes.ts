import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const vergalhaoCA25: TableItem = {
    name: "Vergalhões CA-25",
    description: "Tabela de especificações para Vergalhões CA-25",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [{ text: "Vergalhões CA-25", colSpan: 3, className: "bg-brand-blue-dark border-b border-white/20 text-center" }],
        [
            { text: "Bitola", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Peso Aprox.\nKg/m", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark text-center align-middle" }
        ],
        [
            { text: "Pol.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "(mm)", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" }
        ]
    ],
    headers: [],
    rows: [
        ["1/4\"", "6,3", "0,25"],
        ["5/16\"", "8", "0,4"],
        ["3/8\"", "10", "0,62"],
        ["1/2\"", "12,5", "0,99"],
        ["5/8\"", "16", "1,58"],
        ["3/4\"", "20", "2,47"],
        ["7/8\"", "22", "3,119"],
        ["1\"", "25", "3,93"],
        ["1.1/4\"", "32", "6,31"],
        ["1.9/16\"", "40", "9,87"]
    ]
};

export const vergalhaoCA50: TableItem = {
    name: "Vergalhões CA-50",
    description: "Tabela de especificações para Vergalhões CA-50",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [{ text: "Vergalhões CA-50", colSpan: 3, className: "bg-brand-blue-dark border-b border-white/20 text-center" }],
        [
            { text: "Bitola", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Peso Aprox.\nKg/m", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark text-center align-middle" }
        ],
        [
            { text: "Pol.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "(mm)", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" }
        ]
    ],
    headers: [],
    rows: [
        ["1/4\"", "6,3", "0,25"],
        ["5/16\"", "8", "0,4"],
        ["3/8\"", "10", "0,62"],
        ["1/2\"", "12,5", "0,99"],
        ["5/8\"", "16", "1,58"],
        ["3/4\"", "20", "2,47"],
        ["7/8\"", "22", "3,119"],
        ["1\"", "25", "3,93"],
        ["1.1/4\"", "32", "6,31"],
        ["1.9/16\"", "40", "9,87"]
    ]
};

export const vergalhaoCA60: TableItem = {
    name: "Vergalhões CA-60",
    description: "Tabela de especificações para Vergalhões CA-60",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [{ text: "Vergalhões CA-60", colSpan: 2, className: "bg-brand-blue-dark border-b border-white/20 text-center" }],
        [
            { text: "Bitola", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Peso Aprox.\nKg/m", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark text-center align-middle" }
        ],
        [
            { text: "(mm)", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" }
        ]
    ],
    headers: [],
    rows: [
        ["4,2", "0,11"],
        ["5", "0,157"],
        ["6", "0,228"],
        ["7", "0,302"],
        ["8", "0,4"],
        ["9,5", "0,56"]
    ]
};