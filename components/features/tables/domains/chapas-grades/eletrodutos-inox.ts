import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const eletrodutosInox: TableItem = {
    name: "Eletrodutos Inox",
    items: [
        {
            name: "Eletrodutos | Inox SCH.10",
            description: "Eletrodutos de Aço Inox Schedule 10",
            imageUrls: [DEFAULT_DIAGRAM_URL],
            headerGroups: [
                [
                    { text: "Eletrodutos | Inox SCH.10", colSpan: 5, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ],
                [
                    { text: "REF.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
                    { text: "Diâmetro Nominal", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "Diâmetro Externo", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "Parede", colSpan: 1, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ],
                [
                    { text: "Eletroduto", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "Pol.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "(dn mm)", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "(mm)", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "(mm)", colSpan: 1, className: "bg-brand-blue-dark text-center text-xs" }
                ]
            ],
            headers: [],
            rows: [
                ["EC-EDI 1", "1/2\"", "15", "21,3", "2,11"],
                ["EC-EDI 2", "3/4\"", "20", "26,9", "2,11"],
                ["EC-EDI 3", "1\"", "25", "33,7", "2,77"],
                ["EC-EDI 4", "1 1/4\"", "32", "42,4", "2,77"],
                ["EC-EDI 5", "1 1/2\"", "40", "48,3", "2,77"],
                ["EC-EDI 6", "2\"", "50", "60,3", "2,77"]
            ]
        },
        {
            name: "Eletrodutos | Inox SCH.40",
            description: "Eletrodutos de Aço Inox Schedule 40",
            imageUrls: [DEFAULT_DIAGRAM_URL],
            headerGroups: [
                [
                    { text: "Eletrodutos | Inox SCH.40", colSpan: 5, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ],
                [
                    { text: "REF.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
                    { text: "Diâmetro Nominal", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "Diâmetro Externo", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
                    { text: "Parede", colSpan: 1, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ],
                [
                    { text: "Eletroduto", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "Pol.", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "(dn mm)", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "(mm)", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
                    { text: "(mm)", colSpan: 1, className: "bg-brand-blue-dark text-center text-xs" }
                ]
            ],
            headers: [],
            rows: [
                ["EC-EDI 7", "1/2\"", "15", "21,3", "2,77"],
                ["EC-EDI 8", "3/4\"", "20", "26,9", "2,87"],
                ["EC-EDI 9", "1\"", "25", "33,7", "3,38"],
                ["EC-EDI 10", "1 1/4\"", "32", "42,4", "3,56"],
                ["EC-EDI 11", "1 1/2\"", "40", "48,3", "3,68"],
                ["EC-EDI 12", "2\"", "50", "60,3", "3,91"],
                ["EC-EDI 13", "2.1/2\" BSP", "65", "76", "5,16"],
                ["EC-EDI 14", "2.1/2\" NPT", "65", "73", "5,16"],
                ["EC-EDI 15", "3\"", "80", "88,9", "5,49"],
                ["EC-EDI 16", "4\"", "100", "114,3", "6,02"]
            ]
        }
    ]
};