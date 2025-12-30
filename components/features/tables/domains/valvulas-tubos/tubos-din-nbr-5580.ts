import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const tubosDinNbr5580: TableItem = {
    name: "Tubo (antiga norma DIN) - NBR 5580",
    description: "Tabela de Tubos NBR 5580 (Antiga DIN) com Classe Leve e Média",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Tubo (antiga norma DIN) - NBR 5580", colSpan: 8, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Norma NBR 5580", colSpan: 8, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Diâmetro", colSpan: 2, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Classe Leve", colSpan: 3, className: "bg-brand-blue-dark border-r border-white/20 border-b border-white/20 text-center" },
            { text: "Classe Média", colSpan: 3, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "tw\nmm", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "tf\nmm", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Espessura\nmm", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Peso Teórico\nPreto kg/m", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Peso Teórico\nGalv kg/m", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Espessura\nmm", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Peso Teórico\nPreto kg/m", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center text-xs" },
            { text: "Peso Teórico\nGalv kg/m", colSpan: 1, className: "bg-brand-blue-dark text-center text-xs" }
        ]
    ],
    headers: [],
    rows: [
        ["1/2\"", "21,3", "2,25", "1,06", "1,11", "2,65", "1,22", "1,27"],
        ["3/4\"", "26,9", "2,25", "1,37", "1,44", "2,65", "1,58", "1,66"],
        ["1\"", "33,7", "2,65", "2,03", "2,12", "3,35", "2,51", "2,6"],
        ["1.1/4\"", "42,4", "2,65", "2,6", "2,72", "3,35", "3,23", "3,34"],
        ["1.1/2\"", "48,3", "3", "3,35", "3,49", "3,35", "3,71", "3,84"],
        ["2\"", "60,3", "3", "4,24", "4,41", "3,75", "5,23", "5,4"],
        ["2.1/2\"", "76,1", "3,35", "6,01", "6,22", "3,75", "6,69", "6,91"],
        ["3\"", "88,9", "3,35", "7,07", "7,32", "3,75", "7,9", "8,13"],
        ["4\"", "114,3", "3,75", "10,22", "10,55", "4,5", "12,19", "12,5"],
        ["5\"", "139,7", "", "", "", "4,75", "15,81", "16,2"],
        ["6\"", "165,1", "", "", "", "5", "19,74", "20,22"]
    ]
};
