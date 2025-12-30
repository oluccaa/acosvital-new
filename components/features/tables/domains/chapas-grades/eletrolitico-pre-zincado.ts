import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const eletroliticoPreZincado: TableItem = {
    name: "Eletrolítico Pré-Zincado",
    items: [
        {
            name: "Eletrolítico Pré-Zincado - Leve",
            description: "Tabela de especificações para Eletrolítico Pré-Zincado - Linha Leve",
            imageUrls: [DEFAULT_DIAGRAM_URL],
            headerGroups: [
                [
                    { text: "Eletrolítico Pré-Zincado - Leve", colSpan: 6, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ],
                [
                    { text: "REF.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
                    { text: "Diâmetro Nominal", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "Parede", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "Diâmetro Externo", colSpan: 2, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ]
            ],
            headers: ["Eletr. Leve", "Pol.", "(dn mm)", "(mm)", "Mín. (mm)", "Máx. (mm)"],
            rows: [
                ["EC-EDE 11", "1/2\"", "15", "0,5", "20", "20,4"],
                ["EC-EDE 12", "3/4\"", "20", "0,5", "25,2", "25,6"],
                ["EC-EDE 13", "1\"", "25", "0,5", "31,5", "31,9"]
            ]
        },
        {
            name: "Eletrolítico Pré-Zincado - Médio",
            description: "Tabela de especificações para Eletrolítico Pré-Zincado - Linha Média",
            imageUrls: [DEFAULT_DIAGRAM_URL],
            headerGroups: [
                [
                    { text: "Eletrolítico Pré-Zincado - Médio", colSpan: 6, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ],
                [
                    { text: "REF.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
                    { text: "Diâmetro Nominal", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "Parede", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "Diâmetro Externo", colSpan: 2, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ]
            ],
            headers: ["Eletr. Médio", "Pol.", "(dn mm)", "(mm)", "Mín. (mm)", "Máx. (mm)"],
            rows: [
                ["EC-EDE 21", "1/2\"", "15", "0,9", "20", "20,4"],
                ["EC-EDE 22", "3/4\"", "20", "0,9", "25,2", "25,6"],
                ["EC-EDE 23", "1\"", "25", "0,9", "31,5", "31,9"],
                ["EC-EDE 24", "1 1/4\"", "32", "0,9", "40,5", "41"],
                ["EC-EDE 25", "1 1/2\"", "40", "0,9", "46,6", "47,1"],
                ["EC-EDE 26", "2\"", "50", "0,9", "58,4", "59"],
                ["EC-EDE 27", "2 1/2\"", "65", "1,2", "74,1", "74,9"],
                ["EC-EDE 28", "3\"", "80", "1,5", "86,8", "87,6"],
                ["EC-EDE 29", "4\"", "100", "1,5", "111,6", "112,7"]
            ]
        },
        {
            name: "Eletrolítico Pré-Zincado - Pesado",
            description: "Tabela de especificações para Eletrolítico Pré-Zincado - Linha Pesada | NBR 13057",
            imageUrls: [DEFAULT_DIAGRAM_URL],
            headerGroups: [
                [
                    { text: "Eletrolítico Pré-Zincado - Pesado | NBR 13057", colSpan: 6, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ],
                [
                    { text: "REF.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
                    { text: "Diâmetro Nominal", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "Parede", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "Diâmetro Externo", colSpan: 2, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ]
            ],
            headers: ["Eletr. Pesado", "Pol.", "(dn mm)", "(mm)", "Mín. (mm)", "Máx. (mm)"],
            rows: [
                ["EC-EDE 51", "1/2\"", "15", "1,5", "20", "20,4"],
                ["EC-EDE 52", "3/4\"", "20", "1,5", "25,2", "25,6"],
                ["EC-EDE 53", "1\"", "25", "1,5", "31,5", "31,9"],
                ["EC-EDE 54", "1 1/4\"", "32", "2", "40,5", "41"],
                ["EC-EDE 55", "1 1/2\"", "40", "2,25", "46,6", "47,1"],
                ["EC-EDE 56", "2\"", "50", "2,25", "58,4", "59"],
                ["EC-EDE 57", "2 1/2\"", "65", "2,65", "74,1", "74,9"],
                ["EC-EDE 58", "3\"", "80", "2,65", "86,8", "87,6"],
                ["EC-EDE 59", "4\"", "100", "2,65", "111,6", "112,7"]
            ]
        },
        {
            name: "Eletrolítico Pré-Zincado - Conexões",
            description: "Conexões Eletrolítico Pré-Zincado | Pesada, Média e Luva",
            imageUrls: [DEFAULT_DIAGRAM_URL],
            headerGroups: [
                [
                    { text: "Eletrolítico Pré-Zincado - Conexões | Pesada, Média e Luva", colSpan: 5, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ],
                [
                    { text: "REF.", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "Tamanho Nominal", colSpan: 2, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ]
            ],
            headers: ["Curva Média", "Curva Pesada", "Luva", "Pol.", "(dn mm)"],
            rows: [
                ["EC-EDE 71", "EC-EDE 81", "EC-EDE 91", "1/2\"", "15"],
                ["EC-EDE 72", "EC-EDE 82", "EC-EDE 92", "3/4\"", "20"],
                ["EC-EDE 73", "EC-EDE 83", "EC-EDE 93", "1\"", "25"],
                ["EC-EDE 74", "EC-EDE 84", "EC-EDE 94", "1 1/4\"", "32"],
                ["EC-EDE 75", "EC-EDE 85", "EC-EDE 95", "1 1/2\"", "40"],
                ["EC-EDE 76", "EC-EDE 86", "EC-EDE 96", "2\"", "50"],
                ["EC-EDE 77", "EC-EDE 87", "EC-EDE 97", "2 1/2\"", "65"],
                ["EC-EDE 78", "EC-EDE 88", "EC-EDE 98", "3\"", "80"],
                ["EC-EDE 79", "EC-EDE 89", "EC-EDE 99", "4\"", "100"]
            ]
        }
    ]
};