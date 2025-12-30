import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const valvulaGlobo: TableItem = {
    name: "Válvula Globo",
    description: "Dimensões da Válvula Globo",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Válvula Globo", colSpan: 9, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "DN", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "L", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "B", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "F", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "R", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "V", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "C", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "N", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "K", colSpan: 1, className: "bg-brand-blue-dark text-center align-middle" }
        ]
    ],
    rows: [
        ["3/4\"", "117", "12,7", "98,4", "42,9", "150", "69,8", "4", "5/8\""],
        ["1\"", "127", "14,2", "108", "50,8", "150", "79,2", "4", "5/8\""],
        ["1.1/4\"", "140", "14,2", "117", "63,5", "150", "88,9", "4", "5/8\""],
        ["1.1/2\"", "165", "14,2", "127", "73", "150", "98,6", "4", "5/8\""],
        ["2\"", "203", "15,8", "152,4", "92,1", "200", "120,7", "4", "3/4\""],
        ["2.1/2\"", "217", "17,5", "177,8", "105", "200", "139,7", "4", "3/4\""],
        ["3\"", "241", "19,1", "190,5", "127", "200", "152,4", "4", "3/4\""],
        ["4\"", "292", "23,9", "228,6", "157", "250", "190,5", "8", "3/4\""],
        ["5\"", "330", "23,9", "254", "186", "300", "215,9", "8", "7/8\""],
        ["6\"", "356", "25,4", "279,4", "216", "350", "241,3", "8", "7/8\""],
        ["8\"", "495", "28,4", "342,9", "270", "350", "298,5", "8", "7/8\""],
        ["10\"", "622", "30,2", "406,4", "324", "450", "362", "12", "1\""],
        ["12\"", "699", "31,8", "482,6", "381", "500", "431,8", "12", "1\""]
    ]
};