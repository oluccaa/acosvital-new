import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const perfilLaminadoTee: TableItem = {
    name: "Perfil Laminado Tee",
    description: "Barras com 6m - Normas: NBR 7007 MR 250 / ASTM A-36",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Perfil Laminado Tee", colSpan: 3, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Bitola", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Peso Teórico\nkg/m", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark text-center align-middle" }
        ],
        [
            { text: "pol.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "mm", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" }
        ]
    ],
    headers: [],
    rows: [
        ["Serralheiro x 3/4\"", "2,50 x 19,05", "0,69"],
        ["1/8 x 5/8\"", "3,18 x 15,88", "0,71"],
        ["1/8 x 3/4\"", "3,18 x 19,05", "0,86"],
        ["1/8 x 7/8\"", "3,18 x 22,23", "0,99"],
        ["1/8 x 1\"", "3,18 x 25,40", "1,18"],
        ["1/8 x 1.1/4\"", "3,18 x 31,75", "1,5"],
        ["1/8 x 1.1/2\"", "3,18 x 38,10", "1,82"],
        ["3/16 x 1.1/4\"", "4,76 x 31,75", "2,16"],
        ["3/16 x 1.1/2\"", "4,76 x 38,10", "2,65"],
        ["3/16 x 2\"", "4,76 x 50,80", "3,62"],
        ["1/4 x 1.1/2\"", "6,35 x 38,10", "3,42"],
        ["1/4 x 2\"", "6,35 x 50,80", "4,74"]
    ]
};