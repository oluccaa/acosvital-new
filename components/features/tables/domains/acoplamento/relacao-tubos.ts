import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const relacaoTubosAcoplamento: TableItem = {
    name: "Relação entre Tubos-Acoplamento",
    description: "Tabela de relação entre tubos e acoplamientos K10.",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Ø", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "ASME B36.10 Ø\nNominal [pol]", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "Acoplamento\na ser utilizado", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20" },
            { text: "Anel de Aço\na ser utilizado", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark" }
        ]
    ],
    headers: ["Externo [mm]", "Nominal [pol]"],
    rows: [
        ["355", "14", "14", "K10 368mm", "K10 355mm"],
        ["368", "14", "-", "K10 368mm", "K10 368mm"],
        ["406", "16", "16", "K10 419mm", "K10 406mm"],
        ["419", "16", "-", "K10 419mm", "K10 419mm"],
        ["457", "18", "18", "K10 470mm", "K10 457mm"],
        ["470", "18", "-", "K10 470mm", "K10 470mm"],
        ["508", "20", "20", "K10 521mm", "K10 508mm"],
        ["521", "20", "-", "K10 521mm", "K10 521mm"],
        ["558", "22", "22", "K10 572mm", "K10 558mm"],
        ["572", "22", "-", "K10 572mm", "K10 572mm"],
        ["609", "24", "24", "K10 622mm", "K10 609mm"],
        ["622", "24", "-", "K10 622mm", "K10 622mm"],
        ["660", "26", "26", "K10 660mm", "K10 660mm"],
        ["711", "28", "28", "K10 711mm", "K10 711mm"],
        ["762", "30", "30", "K10 762mm", "K10 762mm"],
        ["812", "32", "32", "K10 812mm", "K10 812mm"],
        ["914", "36", "36", "K10 914mm", "K10 914mm"],
        ["1016", "40", "40", "K10 1016mm", "K10 1016mm"],
        ["1219", "48", "48", "K10 1219mm", "K10 1219mm"],
    ]
};
