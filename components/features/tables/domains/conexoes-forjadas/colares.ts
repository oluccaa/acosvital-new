import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const colares: TableItem = {
    name: "Colares (Weldolet / Elbolet)",
    items: [
        {
            name: "Weldolet MSS SP 97",
            description: "Dimensões A (mm) para Weldolet - STD, XS e 160",
            imageUrls: [DEFAULT_DIAGRAM_URL],
            headerGroups: [
                [
                    { text: "Weldolet MSS SP 97", colSpan: 7, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ],
                [
                    { text: "DN\nTubo", rowSpan: 3, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle" },
                    { text: "A", colSpan: 6, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ],
                [
                    { text: "STD", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "XS", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "160", colSpan: 2, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ],
                [
                    { text: "Redução", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "Cheio", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "Redução", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "Cheio", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "Redução", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "Cheio", colSpan: 1, className: "bg-brand-blue-dark text-center text-xs" }
                ]
            ],
            headers: [],
            rows: [
                ["1/8\"", "15,75", "-", "15,75", "-", "-", "-"],
                ["1/4\"", "15,75", "-", "15,75", "-", "-", "-"],
                ["3/8\"", "19,05", "-", "19,05", "-", "-", "-"],
                ["1/2\"", "19,05", "19,05", "19,05", "19,05", "28,45", "28,45"],
                ["3/4\"", "22,35", "22,35", "22,35", "22,35", "31,75", "31,75"],
                ["1\"", "26,92", "26,92", "26,92", "26,92", "38,1", "38,1"],
                ["1.1/4\"", "31,75", "31,75", "31,75", "31,75", "44,45", "44,45"],
                ["1.1/2\"", "33,27", "33,27", "33,27", "33,27", "50,8", "50,8"],
                ["2\"", "38,1", "38,1", "38,1", "38,1", "55,37", "55,37"],
                ["2.1/2\"", "41,15", "41,15", "41,15", "41,15", "61,98", "61,98"],
                ["3\"", "44,45", "44,45", "44,45", "44,45", "73,15", "73,15"],
                ["3.1/2\"", "47,75", "50,8", "47,75", "50,8", "-", "-"],
                ["4\"", "50,8", "50,8", "50,8", "50,8", "84,07", "84,07"],
                ["5\"", "57,15", "57,15", "57,15", "57,15", "93,73", "93,73"],
                ["6\"", "60,45", "60,45", "77,72", "77,72", "104,65", "104,65"],
                ["8\"", "69,85", "69,85", "98,55", "98,55", "-", "-"],
                ["10\"", "77,72", "77,72", "93,73", "88,9", "-", "-"],
                ["12\"", "85,85", "85,85", "103,12", "100,08", "-", "-"],
                ["14\"", "88,9", "88,9", "100,08", "104,95", "-", "-"],
                ["16\"", "93,73", "93,73", "106,17", "112,78", "-", "-"],
                ["18\"", "96,77", "103,12", "111,25", "119,13", "-", "-"],
                ["20\"", "101,6", "117,35", "119,13", "127", "-", "-"],
                ["24\"", "115,82", "136,65", "139,7", "139,7", "-", "-"]
            ]
        },
        {
            name: "Elbolet MSS SP 97",
            description: "Dimensões e Pesos para Elbolet",
            imageUrls: [DEFAULT_DIAGRAM_URL],
            headerGroups: [
                [
                    { text: "Elbolet MSS SP 97", colSpan: 6, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ],
                [
                    { text: "DN", rowSpan: 3, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle" },
                    { text: "3000 - Sch STD e XS", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "6000 - Sch 160", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "Peso\nkg", rowSpan: 3, colSpan: 1, className: "bg-brand-blue-dark align-middle text-center" }
                ],
                [
                    { text: "Redução", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-center text-xs" },
                    { text: "Cheio", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-center text-xs" },
                    { text: "Redução", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-center text-xs" },
                    { text: "Cheio", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-center text-xs" }
                ]
            ],
            headers: [],
            rows: [
                ["1/4\"", "41", "38", "17,53", "17,53", "0,35"],
                ["3/8\"", "41", "38", "17,53", "19,05", "0,35"],
                ["1/2\"", "41", "38", "19,05", "22,35", "4"],
                ["3/4\"", "47,5", "43", "22,35", "25,4", "0,67"],
                ["1\"", "57", "57", "25,4", "28,45", "1"],
                ["1.1/4\"", "63,5", "73", "28,45", "33,27", "1,32"],
                ["1.1/2\"", "70", "79,5", "33,27", "35,05", "2,8"],
                ["2\"", "82,5", "106,5", "35,05", "42,93", "3,6"]
            ]
        },
        {
            name: "Tolerância Weldolet",
            description: "Tolerâncias dimensionais para Weldolet",
            imageUrls: [DEFAULT_DIAGRAM_URL],
            headerGroups: [
               [
                   { text: "Tolerância Weldolet", className: "bg-brand-blue-dark text-center border-b border-white/20", colSpan: 2 }
               ]
            ],
            headers: [],
            rows: [
                ["1/8\" a 3/4\"", "+ ou - 0,8"],
                ["1\" a 4\"", "+ ou - 1,52"],
                ["5\" a 12\"", "+ ou - 3"],
                ["14\" a 24\"", "+ ou - 4,8"]
            ]
        }
    ]
};