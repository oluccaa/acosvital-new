import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const luvaMeiaLuaCap: TableItem = {
    name: "Luva, Meia Lua e Cap",
    description: "Conexões Tipo Encaixe ASME B16.11 - Dimensões em mm",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Conexões Tipo Encaixe ASME B16.11", colSpan: 18, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "DN", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle" },
            { text: "DN\nTubo", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle" },
            { text: "B", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle" },
            { text: "C", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20" },
            { text: "D", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20" },
            { text: "J\nmín.", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle" },
            { text: "E", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle" },
            { text: "F", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle" },
            { text: "Tolerância (+)", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20" },
            { text: "K mín.", colSpan: 3, className: "bg-brand-blue-dark border-b border-white/20" }
        ],
        [
            { text: "3000\nmax.\nmin.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "6000\nmax.\nmin.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "9000\nmax.\nmin.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "3000\nmax.\nmin.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "6000\nmax.\nmin.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "9000\nmax.\nmin.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "E", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "F", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "3000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "6000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle text-xs" },
            { text: "9000", colSpan: 1, className: "bg-brand-blue-dark align-middle text-xs" }
        ]
    ],
    headers: [],
    rows: [
        ["6", "1/8\"", "11,20\n10,80", "7,60\n6,10", "4,80\n3,20", "-", "3,18\n3,18", "3,96\n3,43", "-", "9,5", "6,5", "16", "1,5", "1", "4,8", "6,4", "-"],
        ["8", "1/4\"", "14,60\n14,20", "10,00\n8,50", "7,10\n5,60", "-", "3,78\n3,30", "4,60\n4,01", "-", "9,5", "6,5", "16", "1,5", "1", "4,8", "6,4", "-"],
        ["10", "3/8\"", "18,00\n17,60", "13,30\n11,80", "9,90\n8,40", "-", "4,01\n3,50", "5,03\n4,37", "-", "9,5", "6,5", "17,5", "3", "1,5", "4,8", "6,4", "-"],
        ["15", "1/2\"", "22,20\n21,80", "16,6\n15", "12,50\n11,00", "7,20\n5,60", "4,67\n4,09", "5,97\n5,18", "9,35\n8,18", "9,5", "9,5", "22,5", "3", "1,5", "6,4", "7,9", "11,2"],
        ["20", "3/4\"", "27,60\n27,20", "21,70\n20,20", "16,30\n14,80", "11,80\n10,30", "4,90\n4,27", "6,96\n6,04", "9,78\n8,56", "12,5", "9,5", "24", "3", "1,5", "6,4", "7,9", "12,7"],
        ["25", "1\"", "34,30\n33,90", "27,40\n25,90", "21,50\n19,90", "16,00\n14,40", "5,69\n4,98", "7,92\n6,93", "11,38\n9,96", "12,5", "12,5", "28,5", "4", "2", "9,6", "11,2", "14,2"],
        ["32", "1.1/4\"", "43,10\n42,70", "35,80\n34,30", "30,20\n28,70", "23,50\n22,00", "6,07\n5,28", "7,92\n6,93", "12,14\n10,62", "12,5", "12,5", "30", "4", "2", "9,6", "11,2", "14,2"],
        ["40", "1.1/2\"", "49,20\n48,80", "41,60\n40,10", "34,70\n33,20", "28,70\n27,20", "6,35\n5,54", "8,92\n7,80", "12,70\n11,12", "12,5", "12,5", "32", "4", "2", "11,2", "12,7", "15,7"],
        ["50", "2\"", "61,70\n61,20", "53,30\n51,70", "43,60\n42,10", "38,90\n37,40", "6,93\n6,04", "10,92\n9,50", "13,84\n12,12", "16", "19", "41", "4", "2", "12,7", "15,7", "19"],
        ["65", "2.1/2\"", "74,40\n73,90", "64,20\n61,20", "-", "-", "8,76\n7,67", "-", "-", "16", "19", "43", "5", "2,5", "15,7", "19", "-"],
        ["80", "3\"", "90,30\n89,80", "79,40\n76,40", "-", "-", "9,52\n8,30", "-", "-", "16", "19", "44,5", "5", "2,5", "19", "22,4", "-"],
        ["100", "4\"", "115,70\n115,20", "103,80\n100,70", "-", "-", "10,69\n9,35", "-", "-", "19", "19", "48", "5", "2,5", "22,4", "28,4", "-"]
    ]
};