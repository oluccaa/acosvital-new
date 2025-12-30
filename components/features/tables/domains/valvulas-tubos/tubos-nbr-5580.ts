import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const tubosNbr5580: TableItem = {
    name: "Tubos com Costura - NBR 5580",
    description: "NBR 5580 (Antigo DIN 2440)",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "NBR 5580 (Antigo DIN 2440)", colSpan: 8, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Nom.\nPol.", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Ø Ext.\n(mm)", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Espessura (mm)", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
            { text: "Peso por Metro (Kg/m)", colSpan: 3, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Leve", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Média", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Pesada", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Leve", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Média", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Pesada", colSpan: 1, className: "bg-brand-blue-dark text-center text-xs" }
        ]
    ],
    headers: [],
    rows: [
        ["1/4\"", "13,5", "2,0", "2,25", "3", "0,57", "0,62", "0,78"],
        ["3/8\"", "17,2", "2,0", "2,25", "3", "0,75", "0,83", "1,05"],
        ["1/2\"", "21,3", "2,25", "2,65", "3", "1,06", "1,22", "1,35"],
        ["3/4\"", "26,9", "2,25", "2,65", "3", "1,37", "1,58", "1,77"],
        ["1\"", "33,7", "2,65", "3,35", "3,75", "2,03", "2,51", "2,77"],
        ["1.1/4\"", "42,4", "2,65", "3,35", "3,75", "2,6", "3,23", "3,57"],
        ["1.1/2\"", "48,3", "3", "3,35", "3,75", "3,35", "3,71", "4,12"],
        ["2\"", "60,3", "3", "3,75", "4,5", "4,24", "5,23", "6,19"],
        ["2.1/2\"", "76,1", "3,35", "3,75", "4,5", "6,01", "6,69", "7,95"],
        ["3\"", "88,9", "3,35", "4", "4,5", "7,07", "8,38", "9,37"],
        ["3.1/2\"", "101,6", "3,75", "4,25", "5", "9,05", "10,2", "11,91"],
        ["4\"", "114,3", "3,75", "4,5", "5,6", "10,22", "12,18", "15,01"],
        ["5\"", "139,7", "-", "4,75", "5,6", "-", "15,81", "18,52"],
        ["6\"", "165,1", "-", "5", "5,6", "-", "19,74", "22,03"]
    ]
};