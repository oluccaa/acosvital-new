import { TableItem } from '../../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../../shared/constants';

export const cotovelosTesCruzetas: TableItem = {
    name: "Cotovelos, Tes e Cruzetas",
    description: "Conexões Tipo Encaixe ASME B16.11",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Conexões Tipo Encaixe ASME B16.11", colSpan: 20, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "DN", rowSpan: 3, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle" },
            { text: "DN\nTubo", rowSpan: 3, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle" },
            { text: "B", rowSpan: 3, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle" },
            { text: "C", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20" },
            { text: "D", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20" },
            { text: "E", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20" },
            { text: "J\nmín.", rowSpan: 3, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle" },
            { text: "A", colSpan: 6, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20" },
            { text: "Tol. (+)", colSpan: 1, className: "bg-brand-blue-dark border-b border-white/20 align-middle" }
        ],
        [
            { text: "3000\nmax.\nmin.", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "6000\nmax.\nmin.", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "9000\nmax.\nmin.", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "3000\nmax.\nmin.", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "6000\nmax.\nmin.", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "9000\nmax.\nmin.", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "3000\nmax.\nmin.", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "6000\nmax.\nmin.", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "9000\nmax.\nmin.", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "Cotovelo 90°,\nTes e Cruzetas", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 align-middle text-xs" },
            { text: "Cotovelo 45°", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 align-middle text-xs" },
            { text: "A", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark align-middle" }
        ],
        [
            { text: "3000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "6000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "9000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "3000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "6000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "9000", colSpan: 1, className: "bg-brand-blue-dark align-middle text-xs" }
        ]
    ],
    headers: [],
    rows: [
        ["6", "1/8\"", "11,20\n10,80", "7,60\n6,10", "4,80\n3,20", "-", "3,18\n3,18", "3,96\n3,43", "-", "2,41", "3,15", "-", "9,5", "11", "11", "-", "8", "8", "-", "1"],
        ["8", "1/4\"", "14,60\n14,20", "10,00\n8,50", "7,10\n5,60", "-", "3,78\n3,30", "4,60\n4,01", "-", "3,02", "3,38", "-", "9,5", "11", "13,5", "-", "8", "8", "-", "1"],
        ["10", "3/8\"", "18,00\n17,60", "13,30\n11,80", "9,90\n8,40", "-", "4,01\n3,50", "5,03\n4,37", "-", "3,2", "4,01", "-", "9,5", "13,5", "15,5", "-", "8", "11", "-", "1,5"],
        ["15", "1/2\"", "22,20\n21,80", "16,6\n15", "12,50\n11,00", "7,20\n5,60", "4,67\n4,09", "5,97\n5,18", "9,35\n8,18", "3,73", "4,78", "7,47", "9,5", "15,5", "19", "25,5", "11", "12,5", "15,5", "1,5"],
        ["20", "3/4\"", "27,60\n27,20", "21,70\n20,20", "16,30\n14,80", "11,80\n10,30", "4,90\n4,27", "6,96\n6,04", "9,78\n8,56", "3,91", "5,56", "7,82", "12,5", "19", "22,5", "28,5", "13", "14", "19", "1,5"],
        ["25", "1\"", "34,30\n33,90", "27,40\n25,90", "21,50\n19,90", "16,00\n14,40", "5,69\n4,98", "7,92\n6,93", "11,38\n9,96", "4,55", "6,35", "9,09", "12,5", "22,5", "27", "32", "14", "17,5", "20,5", "2"],
        ["32", "1.1/4\"", "43,10\n42,70", "35,80\n34,30", "30,20\n28,70", "23,50\n22,00", "6,07\n5,28", "7,92\n6,93", "12,14\n10,62", "4,85", "6,35", "9,7", "12,5", "27", "32", "35", "17,5", "20,5", "22,5", "2"],
        ["40", "1.1/2\"", "49,20\n48,80", "41,60\n40,10", "34,70\n33,20", "28,70\n27,20", "6,35\n5,54", "8,92\n7,80", "12,70\n11,12", "5,08", "7,14", "10,15", "12,5", "32", "38", "38", "20,5", "25,5", "25,5", "2"],
        ["50", "2\"", "61,70\n61,20", "53,30\n51,70", "43,60\n42,10", "38,90\n37,40", "6,93\n6,04", "10,92\n9,50", "13,84\n12,12", "5,54", "8,74", "11,07", "16", "38", "41", "54", "25,5", "28,5", "28,5", "2"],
        ["65", "2.1/2\"", "74,40\n73,90", "64,20\n61,20", "-", "-", "8,76\n7,67", "-", "-", "7,01", "-", "-", "16", "41", "-", "-", "28,5", "-", "-", "2,5"],
        ["80", "3\"", "90,30\n89,80", "79,40\n76,40", "-", "-", "9,52\n8,30", "-", "-", "7,62", "-", "-", "16", "57", "-", "-", "32", "-", "-", "2,5"],
        ["100", "4\"", "115,70\n115,20", "103,80\n100,70", "-", "-", "10,69\n9,35", "-", "-", "8,56", "-", "-", "19", "66,5", "-", "-", "41", "-", "-", "2,5"]
    ]
};