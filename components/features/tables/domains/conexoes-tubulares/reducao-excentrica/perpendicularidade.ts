import { TableItem } from '../../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../../shared/constants';

export const perpendicularidadeExcentrica: TableItem = {
    name: "Perpendicularidade da Face",
    description: "Tolerâncias de perpendicularidade da face",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "DN", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "H", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "Perpendicularidade da Face", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "Espess.", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark" }
        ],
        [
            { text: "Face Plana", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "Outras Faces", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20" }
        ]
    ],
    rows: [
        ["1/8\" a 3/8\"", "+ ou - 1,52", "+0,38/-0,76", "+ ou - 0,76", "Não menor que 87,50% da espessura nominal"],
        ["1/2\" a 1.1/2\"", "+ ou - 1,52", "+0,38/-0,76", "+1,52/-0,76", "Não menor que 87,50% da espessura nominal"],
        ["2\" a 2.1/2\"", "+ ou - 3,05", "+ ou - 0,76", "+1,52/-0,76", "Não menor que 87,50% da espessura nominal"],
        ["3\" a 4\"", "+ ou - 3,05", "+ ou - 0,76", "+ ou - 1,52", "Não menor que 87,50% da espessura nominal"],
        ["5\" a 6\"", "+ ou - 4,83", "+2,29/-1,52", "+2,29/-1,52", "Não menor que 87,50% da espessura nominal"],
        ["8\" a 12\"", "+ ou - 6,35", "+4,06/-3,05", "+4,06/-3,05", "Não menor que 87,50% da espessura nominal"]
    ]
};
