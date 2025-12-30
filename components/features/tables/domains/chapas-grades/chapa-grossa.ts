import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const chapaGrossa: TableItem = {
    name: "Chapas Grossas",
    description: "Tabela de especificações para Chapas Grossas.",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Chapas Grossas", colSpan: 3, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
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
        ["--- Normas: ASTM A-36 / SAE 1020 / SAE 1045. Espessura intermediária ou mais grossa, poderá ser fornecida mediante consulta ---"],
        ["1/4\"", "6,3", "49,39"],
        ["5/16\"", "8", "62,72"],
        ["3/8\"", "9,5", "74,48"],
        ["1/2\"", "12,5", "99"],
        ["5/8\"", "16", "125,44"],
        ["3/4\"", "19", "149,5"],
        ["7/8\"", "22,4", "175,84"],
        ["1\"", "25", "198"],
        ["1.1/4\"", "31,5", "247,27"],
        ["1.1/2\"", "37,5", "299"],
        ["1.3/4\"", "44,45", "350"],
        ["2\"", "50", "392,5"],
        ["2.1/2\"", "63", "494,55"],
        ["3\"", "75", "588,1"],
        ["3.1/2\"", "88,9", "697,8"],
        ["4\"", "100", "785"]
    ]
};
