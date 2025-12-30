import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const encaixeRoscadoKg: TableItem = {
    name: "Encaixe e Roscado (kg)",
    items: [
        {
            name: "Pesos Aproximados de Conexões Encaixe SW",
            description: "Pesos em kg para conexões de encaixe (Socket Weld)",
            imageUrls: [DEFAULT_DIAGRAM_URL],
            headerGroups: [
                [
                    { text: "Pesos Aproximados de Conexões Encaixe SW", colSpan: 22, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ],
                [
                    { text: "DN", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle" },
                    { text: "Cotovelo 90°", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "Cotovelo 45°", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "Te", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "Cruzeta", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "Luva", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "Meia Luva", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "CAP", colSpan: 3, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ],
                [
                    { text: "3000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "6000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "9000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "3000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "6000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "9000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "3000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "6000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "9000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "3000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "6000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "9000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "3000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "6000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "9000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "3000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "6000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "9000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "3000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "6000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "9000", colSpan: 1, className: "bg-brand-blue-dark text-center text-xs" }
                ]
            ],
            headers: [],
            rows: [
                ["1/8\"", "0,09", "0,12", "-", "0,07", "0,11", "-", "0,1", "0,16", "-", "0,15", "0,23", "-", "0,03", "0,04", "-", "0,04", "0,05", "-", "-", "-", "-"],
                ["1/4\"", "0,09", "0,14", "-", "0,07", "0,13", "-", "0,1", "0,24", "-", "0,15", "0,35", "-", "0,05", "0,06", "-", "0,04", "0,08", "-", "0,06", "-", "-"],
                ["3/8\"", "0,1", "0,33", "-", "0,12", "0,24", "-", "0,14", "0,41", "-", "0,29", "0,38", "-", "0,06", "0,09", "-", "0,06", "0,11", "-", "0,07", "-", "-"],
                ["1/2\"", "0,23", "0,41", "-", "0,2", "0,37", "-", "0,31", "0,59", "-", "0,36", "0,68", "-", "0,11", "0,16", "-", "0,09", "0,19", "-", "0,14", "0,21", "-"],
                ["3/4\"", "0,34", "0,72", "-", "0,23", "0,7", "-", "0,4", "0,9", "-", "0,55", "1,0", "-", "0,17", "0,27", "-", "0,14", "0,31", "-", "0,2", "0,29", "-"],
                ["1\"", "0,45", "1,1", "-", "0,4", "0,99", "-", "0,65", "1,53", "-", "0,72", "1,69", "-", "0,34", "0,4", "-", "0,26", "0,5", "-", "0,32", "0,58", "-"],
                ["1.1/4\"", "0,74", "1,49", "-", "0,59", "1,43", "-", "0,97", "2,02", "-", "1,12", "2,06", "-", "0,51", "0,55", "-", "0,37", "0,65", "-", "0,46", "0,72", "-"],
                ["1.1/2\"", "1,13", "2,82", "-", "0,79", "1,83", "-", "1,11", "3,42", "-", "1,43", "3,86", "-", "0,59", "0,7", "-", "0,45", "0,86", "-", "0,57", "1,12", "-"],
                ["2\"", "1,59", "3,45", "-", "1,31", "2,22", "-", "2,01", "4,21", "-", "2,38", "6,03", "-", "0,91", "1,49", "-", "0,91", "1,7", "-", "0,99", "1,89", "-"],
                ["2.1/2\"", "2,49", "-", "-", "3,35", "-", "-", "4,03", "-", "-", "5,1", "-", "-", "1,47", "-", "-", "1,19", "-", "-", "1,6", "-", "-"],
                ["3\"", "4,65", "-", "-", "5,22", "-", "-", "6,21", "-", "-", "8,6", "-", "-", "2,07", "-", "-", "1,76", "-", "-", "2,15", "-", "-"],
                ["4\"", "14,97", "-", "-", "8,96", "-", "-", "12,9", "-", "-", "11,4", "-", "-", "3,91", "-", "-", "3,01", "-", "-", "3,37", "-", "-"]
            ]
        },
        {
            name: "Pesos Aproximados de Conexões Rosca NPT",
            description: "Pesos em kg para conexões roscadas (NPT)",
            imageUrls: [DEFAULT_DIAGRAM_URL],
            headerGroups: [
                [
                    { text: "Pesos Aproximados de Conexões Rosca NPT", colSpan: 22, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ],
                [
                    { text: "DN", rowSpan: 2, colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 align-middle" },
                    { text: "Cotovelo 90°", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "Cotovelo 45°", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "Te", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "Cruzeta", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "Luva", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "Meia Luva", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "CAP", colSpan: 3, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ],
                [
                    { text: "3000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "6000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "9000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "3000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "6000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "9000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "3000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "6000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "9000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "3000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "6000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "9000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "3000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "6000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "9000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "3000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "6000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "9000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "3000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "6000", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "9000", colSpan: 1, className: "bg-brand-blue-dark text-center text-xs" }
                ]
            ],
            headers: [],
            rows: [
                ["1/8\"", "-", "0,13", "0,12", "-", "0,14", "-", "0,11", "0,11", "0,23", "-", "0,2", "0,26", "-", "0,04", "0,08", "-", "-", "-", "-", "-", "-"],
                ["1/4\"", "-", "0,15", "0,34", "-", "0,14", "-", "0,1", "0,2", "0,46", "-", "0,17", "0,54", "-", "0,05", "0,12", "-", "-", "-", "-", "-", "0,1"],
                ["3/8\"", "-", "0,28", "0,54", "-", "0,23", "-", "0,16", "0,4", "0,67", "-", "0,46", "0,68", "-", "0,07", "0,2", "-", "-", "-", "-", "-", "0,15"],
                ["1/2\"", "0,26", "0,6", "0,74", "0,2", "0,34", "0,65", "0,26", "0,54", "0,96", "-", "0,68", "0,12", "-", "0,11", "0,23", "-", "0,09", "-", "-", "0,11", "0,26"],
                ["3/4\"", "0,31", "0,62", "1,19", "0,28", "0,54", "0,99", "0,43", "0,85", "1,64", "-", "1,13", "0,8", "-", "0,2", "0,45", "-", "0,11", "-", "-", "0,14", "0,38"],
                ["1\"", "0,51", "1,02", "1,59", "0,43", "1,85", "1,22", "0,65", "1,13", "2,1", "-", "1,62", "2,6", "-", "0,28", "0,96", "-", "0,14", "-", "-", "0,23", "0,73"],
                ["1.1/4\"", "0,77", "1,25", "3,06", "0,62", "0,96", "2,13", "0,91", "1,42", "3,16", "-", "1,87", "4,9", "-", "0,71", "1,08", "-", "0,34", "-", "-", "0,45", "0,87"],
                ["1.1/2\"", "1,02", "1,59", "3,4", "0,74", "1,36", "2,61", "1,25", "2,27", "4,37", "-", "2,95", "5,22", "-", "0,99", "1,98", "-", "0,51", "-", "-", "0,74", "1,34"],
                ["2\"", "1,59", "2,47", "6,1", "1,22", "1,93", "4,31", "2,1", "3,06", "8,56", "-", "3,81", "10,1", "-", "1,42", "3,52", "-", "0,71", "-", "-", "1,42", "2,05"],
                ["2.1/2\"", "2,95", "4,85", "9,47", "3,52", "3,35", "6,8", "3,94", "5,95", "12,73", "-", "7,6", "15,5", "-", "1,81", "4,88", "-", "0,91", "-", "-", "2,27", "3,47"],
                ["3\"", "4,76", "6,55", "15,68", "5,13", "6,12", "13,86", "5,98", "9,24", "20,7", "-", "12,34", "19,8", "-", "3,06", "6,12", "-", "1,53", "-", "-", "3,86", "5,05"],
                ["4\"", "10,32", "13,78", "17,24", "8,68", "8,65", "13,15", "12,36", "17,92", "22,67", "-", "25,5", "25,5", "-", "7,6", "11,11", "-", "3,8", "-", "-", "6,35", "8,62"]
            ]
        }
    ]
};