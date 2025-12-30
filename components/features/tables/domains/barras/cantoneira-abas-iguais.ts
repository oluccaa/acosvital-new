import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const cantoneiraAbasIguais: TableItem = {
    name: "Cantoneira Abas Iguais",
    description: "Tabela de pesos e medidas para Cantoneira de Abas Iguais.",
    imageUrls: [DEFAULT_DIAGRAM_URL],
    headerGroups: [
        [
            { text: "Cantoneira Abas Iguais", colSpan: 2, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
        ],
        [
            { text: "Bitola", colSpan: 1, className: "bg-brand-blue-dark border-r border-white/20 text-center align-middle" },
            { text: "Peso Teórico\nkg/m", colSpan: 1, className: "bg-brand-blue-dark text-center align-middle" }
        ]
    ],
    headers: [],
    rows: [
        ["--- Normas: NBR 7007 graus, MR 250 (ASTM A-36) , AR 350 (ASTM A-572 GR50), AR 350COR (ASTM A-572 GR60) e AR 415 (ASTM A-588 GRB) ---"],
        ["1/8 x 1/2\"", "0,55"],
        ["1/8 x 5/8\"", "0,71"],
        ["1/8 x 3/4\"", "0,87"],
        ["1/8 x 7/8\"", "1,04"],
        ["1/8 x 1\"", "1,19"],
        ["1/8 x 1.1/4\"", "1,5"],
        ["1/8 x 1.1/2\"", "1,83"],
        ["1/8 x 1.3/4\"", "2,14"],
        ["1/8 x 2\"", "2,46"],
        ["3/16 x 1\"", "1,73"],
        ["3/16 x 1.1/4\"", "2,2"],
        ["3/16 x 1.1/2\"", "2,68"],
        ["3/16 x 1.3/4\"", "3,15"],
        ["3/16 x 2", "3,63"],
        ["3/16 x 2.1/2\"", "4,52"],
        ["3/16 x 3\"", "5,52"],
        ["1/4 x 1\"", "2,29"],
        ["1/4 x 1.1/4\"", "2,86"],
        ["1/4 x 1.1/2\"", "3,48"],
        ["1/4 x 1.3/4\"", "4,12"],
        ["1/4 x 2\"", "4,75"],
        ["1/4 x 2.1/2\"", "6,1"],
        ["1/4 x 3\"", "7,3"],
        ["1/4 x 3.1/2\"", "8,63"],
        ["1/4 x 4\"", "9,81"],
        ["5/16 x 2\"", "5,83"],
        ["5/16 x 2.1/2\"", "7,44"],
        ["5/16 x 3\"", "9,07"],
        ["5/16 x 3.1/2\"", "10,7"],
        ["5/16 x 4\"", "12,19"],
        ["3/8 x 2\"", "6,99"],
        ["3/8 x 2.1/2\"", "8,78"],
        ["3/8 x 3\"", "10,72"],
        ["3/8 x 3.1/2\"", "12,5"],
        ["3/8 x 4\"", "14,58"],
        ["3/8 x 5\"", "18,3"],
        ["3/8 x 6\"", "22,2"],
        ["1/2 x 3\"", "13,9"],
        ["1/2 x 4\"", "19.05"],
        ["1/2 x 5\"", "24,1"],
        ["1/2 x 6\"", "29,2"],
        ["5/8 x 4\"", "23,42"],
        ["5/8 x 5\"", "29,8"],
        ["5/8 x 6\"", "36"],
        ["5/8 x 8\"", "48,78"],
        ["3/4 x 5\"", "35,1"],
        ["3/4 x 6\"", "42,7"],
        ["3/4 x 8\"", "57,8"]
    ]
};
