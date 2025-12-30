import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const trelica: TableItem = {
    name: "Treliça",
    description: "Tabela de especificações para Treliças.",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Treliça", colSpan: 6, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Designação do\nProduto", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Altura (cm)", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Banzo Superior", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Diagonal", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Banzo Inferior", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Peso (kg/m)", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark text-center align-middle" }
        ]
    ],
    headers: ["(mm)", "(mm)", "(mm)"],
    rows: [
        ["TG8L", "8", "6", "4,2", "4,2", "0,735"],
        ["TG8M", "8", "6", "4,2", "5", "0,821"],
        ["TG12M", "12", "6", "4,2", "5", "0,886"],
        ["TG12R", "12", "6", "4,2", "6", "1,016"],
        ["TG16L", "16", "7", "4,2", "5", "1,032"],
        ["TG16R", "16", "7", "4,2", "6", "1,168"],
        ["TG20L", "20", "7", "4,2", "5", "1,111"],
        ["TG20R", "20", "7", "5", "6", "1,446"],
        ["TG25L", "25", "8", "5", "6", "1,686"],
        ["TG25R", "25", "8", "5", "7", "1,855"]
    ]
};