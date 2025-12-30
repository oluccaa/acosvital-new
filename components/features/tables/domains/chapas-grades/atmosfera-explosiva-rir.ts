import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const atmosferaExplosivaRir: TableItem = {
    name: "Atmosfera Explosiva - RIR",
    items: [
        {
            name: "Eletroduto Galvanizado à fogo (RIR) NBR 5597/06 NPT",
            description: "Obs. Espessura do revestimento de zinco: 300g/m2.",
            imageUrls: [DEFAULT_DIAGRAM_URL],
            headerGroups: [
                [
                    { text: "Eletroduto Galvanizado à fogo (RIR) NBR 5597/06 NPT", colSpan: 5, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ],
                [
                    { text: "REF.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
                    { text: "Diâmetro Nominal", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "Diâmetro Externo", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "Parede", colSpan: 1, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ]
            ],
            headers: ["RIR NPT", "Pol.", "(dn mm)", "(mm)", "(mm)"],
            rows: [
                ["EC-EDN 1", "1/2\"", "15", "21,3", "2,25"],
                ["EC-EDN 2", "3/4\"", "20", "26,9", "2,25"],
                ["EC-EDN 3", "1\"", "25", "33,7", "2,65"],
                ["EC-EDN 4", "1 1/4\"", "32", "42,4", "3"],
                ["EC-EDN 5", "1 1/2\"", "40", "48,3", "3"],
                ["EC-EDN 6", "2\"", "50", "60,3", "3,35"],
                ["EC-EDN 7", "2 1/2\"", "65", "73", "3,75"],
                ["EC-EDN 8", "3\"", "80", "88,9", "3,75"],
                ["EC-EDN 9", "4\"", "100", "114,3", "4,25"],
                ["EC-EDN 10", "5\"", "125", "141,3", "5"],
                ["EC-EDN 11", "6\"", "150", "168,3", "5,3"]
            ]
        },
        {
            name: "Eletroduto Galvanizado à fogo (RIR) NBR 5598/09 BSP",
            description: "Obs. Espessura do revestimento de zinco: 300g/m2.",
            imageUrls: [DEFAULT_DIAGRAM_URL],
            headerGroups: [
                [
                    { text: "Eletroduto Galvanizado à fogo (RIR) NBR 5598/09 BSP", colSpan: 5, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ],
                [
                    { text: "REF.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
                    { text: "Diâmetro Nominal", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "Diâmetro Externo", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "Parede", colSpan: 1, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ]
            ],
            headers: ["RIR BSP", "Pol.", "(dn mm)", "(mm)", "(mm)"],
            rows: [
                ["EC-EDB 1", "1/2\"", "15", "21,3", "2,25"],
                ["EC-EDB 2", "3/4\"", "20", "26,9", "2,25"],
                ["EC-EDB 3", "1\"", "25", "33,7", "2,65"],
                ["EC-EDB 4", "1 1/4\"", "32", "42,4", "2,65"],
                ["EC-EDB 5", "1 1/2\"", "40", "48,3", "3"],
                ["EC-EDB 6", "2\"", "50", "60,3", "3"],
                ["EC-EDB 7", "2 1/2\"", "65", "76,1", "3,35"],
                ["EC-EDB 8", "3\"", "80", "88,9", "3,35"],
                ["EC-EDB 9", "4\"", "100", "114,3", "3,75"],
                ["EC-EDB 10", "5\"", "125", "139,7", "4,75"],
                ["EC-EDB 11", "6\"", "150", "165,1", "5"]
            ]
        }
    ]
};