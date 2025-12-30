import { TableItem } from '../../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../../shared/constants';

export const toleranciasMSSSP43: TableItem = { 
    name: "MSS SP-43", 
    description: "Tolerâncias para Conexões MSS SP-43",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "DN", colSpan: 1, rowSpan: 3, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "Todas as conexões", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "Curvas 90° 45° e Tes", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "Reduções Pestanas", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "CAP", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "Curvas 180°", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "Pestanas", colSpan: 4, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "Angularidade", colSpan: 3, className: "bg-brand-blue-dark" }
        ],
        [
            { text: "Diâm.\nExterno", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "Diâm.\nInterno", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "Espess.", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "Centro a Face", className: "bg-brand-blue-dark border-r border-white/20", colSpan: 1 },
            { text: "Compr.", className: "bg-brand-blue-dark border-r border-white/20", colSpan: 1 },
            { text: "Compr.", className: "bg-brand-blue-dark border-r border-white/20", colSpan: 1 },
            { text: "Centro a Centro", className: "bg-brand-blue-dark border-r border-white/20", colSpan: 1 },
            { text: "Altura do Arco", className: "bg-brand-blue-dark border-r border-white/20", colSpan: 1 },
            { text: "Alinh. da Face", className: "bg-brand-blue-dark border-r border-white/20", colSpan: 1 },
            { text: "Diâm. Externo", className: "bg-brand-blue-dark border-r border-white/20", colSpan: 1 },
            { text: "Compr.", className: "bg-brand-blue-dark border-r border-white/20", colSpan: 1 },
            { text: "Raio", className: "bg-brand-blue-dark border-r border-white/20", colSpan: 1 },
            { text: "Espess.", className: "bg-brand-blue-dark border-r border-white/20", colSpan: 1 },
            { text: "DN", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "P", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "Q", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark" }
        ],
    ],
    headers: ["A, B, C, M", "H", "E", "O", "K", "U", "G", "F", "R", "T"],
    rows: [
        ["1/2\" a 2.1/2\"", "+ ou - 0,8", "-", "-", "+ ou - 1,5", "+ ou - 1,5", "+ ou - 3,0", "+ ou - 6,35", "+ ou - 6,35", "+ ou - 0,8", "+0/-0,8", "+ ou - 1,5", "-", "-", "-", "-", "-"],
        ["3\" a 3.1/2\"", "+ ou - 0,8", "-", "-", "+ ou - 1,5", "+ ou - 1,5", "+ ou - 3,0", "+ ou - 6,35", "+ ou - 6,35", "+ ou - 0,8", "+0/-0,8", "+ ou - 1,5", "-", "-", "-", "-", "-"],
        ["4\"", "+ ou - 0,8", "-", "-", "+ ou - 1,5", "+ ou - 1,5", "+ ou - 3,0", "+ ou - 6,35", "+ ou - 6,35", "+ ou - 0,8", "+0/-0,8", "+ ou - 1,5", "-", "-", "-", "-", "-"],
        ["5\" a 8\"", "+1,5\n-0,8", "-", "-", "+ ou - 1,5", "+ ou - 1,5", "+0\n-6,35", "+ ou - 6,35", "+ ou - 6,35", "+ ou - 0,8", "+0/-0,8", "+ ou - 1,5", "-", "-", "-", "-", "-"],
        ["10\" a 18\"", "+2,3\n-0,8", "-", "-", "+ ou - 2,3", "+ ou - 2,3", "+0\n-6,35", "+ ou - 9,65", "+ ou - 6,35", "+ ou - 1,5", "+0/-1,5", "+ ou - 2,3", "-", "-", "-", "-", "-"],
        ["20\" a 24\"", "+3,0\n-0,8", "-", "-", "+ ou - 2,3", "+ ou - 2,3", "+0\n-6,35", "+ ou - 6,35", "+ ou - 6,35", "+ ou - 1,5", "+0/-1,5", "+ ou - 2,3", "-", "-", "-", "-", "-"]
    ]
};
