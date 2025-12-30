import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const valvulaRetencaoDupla: TableItem = {
    name: "Válvula Retenção Dupla Portinhola",
    description: "Dimensões para Válvula de Retenção Dupla Portinhola",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Válvula Retenção Dupla Portinhola", colSpan: 8, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "DN", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "A", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "B", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "C", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "D", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "R", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "L", colSpan: 2, className: "bg-brand-blue-dark border-b border-white/20 text-center align-middle" }
        ],
        [
            { text: "Parafuso", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Prisioneiro", colSpan: 1, className: "bg-brand-blue-dark text-center text-xs" }
        ]
    ],
    rows: [
        ["1.1/2\"", "82", "54", "60", "52", "W 1/2\"", "117", "130"],
        ["2\"", "106", "60", "60", "55", "W 5/8\"", "130", "136"],
        ["2.1/2\"", "125", "75", "67", "65", "W 5/8\"", "143", "150"],
        ["3\"", "137", "90", "73", "73", "W 5/8\"", "149", "162"],
        ["4\"", "170", "120", "73", "90", "W 5/8\"", "149", "162"],
        ["5\"", "194", "140", "86", "105", "W 3/4\"", "170", "181"],
        ["6\"", "220", "169", "98", "126", "W 3/4\"", "170", "181"],
        ["8\"", "275", "219", "127", "170", "W 3/4\"", "216", "230"],
        ["10\"", "332", "272", "146", "205", "W 7/8\"", "241", "260"],
        ["12\"", "400", "324", "181", "245", "W 7/8\"", "283", "296"],
        ["14\"", "442", "365", "184", "275", "W 1\"", "292", "311"],
        ["16\"", "495", "415", "190", "315", "W 1\"", "305", "324"],
        ["18\"", "540", "465", "203", "340", "W 1.1/8\"", "324", "349"],
        ["20\"", "595", "512", "219", "370", "W 1.1/8\"", "353", "372"],
        ["24\"", "718", "615", "222", "415", "W 1.1/4\"", "368", "394"],
        ["28\"", "803", "700", "305", "480", "W 1.1/4\"", "498", "525"],
        ["30\"", "878", "764", "305", "510", "W 1.1/4\"", "505", "532"],
        ["32\"", "909", "820", "326", "550", "W 1.1/2\"", "550", "580"],
        ["36\"", "1010", "900", "368", "610", "W 1.1/2\"", "610", "640"]
    ]
};