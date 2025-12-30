import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const colares2: TableItem = {
    name: "Colares (Sockolet / Thredolet)",
    items: [
        {
            name: "Sockolet MSS SP 97",
            description: "Dimensões para Sockolet MSS SP 97",
            imageUrls: [DEFAULT_DIAGRAM_URL],
            headerGroups: [
                [{ text: "Sockolet MSS SP 97", colSpan: 4, className: "bg-brand-blue-dark border-b border-white/20 text-center" }],
                [
                    { text: "DN", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle" },
                    { text: "B mín.", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle" },
                    { text: "C máx.", colSpan: 2, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ],
                [
                    { text: "3000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "6000", colSpan: 1, className: "bg-brand-blue-dark text-center text-xs" }
                ]
            ],
            headers: [],
            rows: [
                ["1/8\"", "9,65", "10,41", "-"],
                ["1/4\"", "9,65", "10,41", "-"],
                ["3/8\"", "9,65", "12,7", "-"],
                ["1/2\"", "9,65", "16,0", "23,88"],
                ["3/4\"", "12,7", "16,0", "25,4"],
                ["1\"", "12,7", "22,35", "28,7"],
                ["1.1/4\"", "12,7", "22,35", "30,23"],
                ["1.1/2\"", "12,7", "23,88", "31,75"],
                ["2\"", "15,75", "23,88", "36,58"],
                ["2.1/2\"", "15,75", "25,4", "-"],
                ["3\"", "15,75", "30,23", "-"],
                ["4\"", "19,05", "30,23", "-"]
            ]
        },
        {
            name: "Thredolet MSS SP 97",
            description: "Dimensões para Thredolet MSS SP 97",
            imageUrls: [DEFAULT_DIAGRAM_URL],
            headerGroups: [
                [{ text: "Thredolet MSS SP 97", colSpan: 3, className: "bg-brand-blue-dark border-b border-white/20 text-center" }],
                [
                    { text: "DN", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle" },
                    { text: "A", colSpan: 2, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ],
                [
                    { text: "3000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "6000", colSpan: 1, className: "bg-brand-blue-dark text-center text-xs" }
                ]
            ],
            headers: [],
            rows: [
                ["1/8\"", "19,05", "-"],
                ["1/4\"", "19,05", "-"],
                ["3/8\"", "20,37", "-"],
                ["1/2\"", "25,4", "31,75"],
                ["3/4\"", "26,92", "36,58"],
                ["1\"", "33,27", "39,62"],
                ["1.1/4\"", "33,27", "41,15"],
                ["1.1/2\"", "35,05", "42,93"],
                ["2\"", "38,1", "52,32"],
                ["2.1/2\"", "45,97", "-"],
                ["3\"", "50,8", "-"],
                ["4\"", "57,15", "-"]
            ]
        },
        {
            name: "Tolerâncias Thredolet",
            description: "Tolerâncias dimensionais para Thredolet",
            imageUrls: [DEFAULT_DIAGRAM_URL],
            headerGroups: [
                [{ text: "Tolerâncias Thredolet", colSpan: 2, className: "bg-brand-blue-dark border-b border-white/20 text-center" }]
            ],
            headers: [],
            rows: [
                ["1/8\" a 3/4\"", "+ ou - 0,8"],
                ["1\" a 4\"", "+ ou - 1,52"]
            ]
        }
    ]
};