import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const aramesRecozidos: TableItem = {
    name: "Arames Recozidos",
    description: "Tabela de especificações para Arames Recozidos",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [{ text: "Arames Recozidos", colSpan: 3, className: "bg-brand-blue-dark border-b border-white/20 text-center" }],
        [
            { text: "BMG Nº", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Diâmetro", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Peso Aprox.\nKg/m", colSpan: 1, rowSpan: 2, className: "bg-brand-blue-dark text-center align-middle" }
        ],
        [
            { text: "(mm)", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" }
        ]
    ],
    headers: [],
    rows: [
        ["4", "6,05", "0,23"],
        ["7", "4,76", "0,13"],
        ["8", "4,19", "0,11"],
        ["10", "3,4", "0,071"],
        ["12", "2,77", "0,05"],
        ["14", "2,11", "0,03"],
        ["16", "1,65", "0,02"],
        ["18", "1,25", "0,01"]
    ]
};

export const barraTransferencia: TableItem = {
    name: "Barra de Transferência",
    description: "Tabela de especificações para Barra de Transferência",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [{ text: "Barra de Transferência", colSpan: 2, className: "bg-brand-blue-dark border-b border-white/20 text-center" }],
        [
            { text: "Diâmetro (mm)", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Peso por Barra", colSpan: 1, className: "bg-brand-blue-dark text-center align-middle" }
        ]
    ],
    headers: [],
    rows: [
        ["10", "0,308"],
        ["12,5", "0,482"],
        ["16", "0,789"],
        ["20", "1,233"],
        ["25", "1,927"],
        ["32", "3,157"]
    ]
};