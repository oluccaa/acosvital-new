import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const chapaExpandida: TableItem = {
    name: "Chapa Expandida",
    description: "Tabela de medidas e pesos para Chapa Expandida.",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Chapa Expandida", colSpan: 5, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Espessura", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Malha", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Peso Teórico\nkg/m", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark text-center align-middle" }
        ],
        [
            { text: "pol.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "mm", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "B\nmm", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "A\nmm", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" }
        ]
    ],
    headers: [],
    rows: [
        ["--- Outras medidas e espessuras sob consulta. ---"],
        ["1/8\"", "3", "75", "38", "4,2"],
        ["3/16\"", "4,75", "100", "40", "8"],
        ["1/4\"", "6,3", "100", "40", "11"]
    ]
};
