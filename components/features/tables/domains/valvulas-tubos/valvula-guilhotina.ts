import { TableItem } from '../../shared/types';
import { DEFAULT_DIAGRAM_URL } from '../../shared/constants';

export const valvulaGuilhotina: TableItem = {
    name: "Válvula Guilhotina",
    description: "Especificações Técnicas, Dimensões e Flanges para Válvula Guilhotina",
    items: [
        {
            name: "Dimensões Gerais",
            description: "Dimensões principais em milímetros",
            imageUrls: [DEFAULT_DIAGRAM_URL],
            headerGroups: [
                [
                    { text: "Dimensões", colSpan: 6, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ]
            ],
            headers: ["DN", "A", "B", "ØC", "D", "ØE"],
            rows: [
                ["2\"", "322", "250", "40", "40", "220"],
                ["2.1/2\"", "292", "250", "54", "40", "220"],
                ["3\"", "406", "250", "64", "50", "220"],
                ["4\"", "470", "258", "85", "50", "360"],
                ["5\"", "495", "258", "110", "50", "360"],
                ["6\"", "545", "306", "135", "60", "360"],
                ["8\"", "644", "390", "180", "60", "440"],
                ["10\"", "757", "450", "230", "70", "440"],
                ["12\"", "902", "370", "280", "70", "440"],
                ["14\"", "1007", "456", "320", "76,2", "580"],
                ["16\"", "1110", "466", "370", "88,9", "580"],
                ["18\"", "1260", "542", "420", "88,9", "580"],
                ["20\"", "1300", "542", "470", "114,3", "580"]
            ]
        },
        {
            name: "Flange ANSI B16.5 - 150",
            description: "Especificações de furação ANSI 150",
            imageUrls: [DEFAULT_DIAGRAM_URL],
            headerGroups: [
                [
                    { text: "Flange ANSI B16.5 - 150", colSpan: 5, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ]
            ],
            headers: ["DN", "ØK", "ØF (Nº)", "ØG (Nº)", "J"],
            rows: [
                ["2\"", "120,7", "-", "3/4\"(4x)", "4"],
                ["2.1/2\"", "139,7", "-", "3/4\"(4x)", "4"],
                ["3\"", "152,4", "5/8\"(2x)", "3/4\"(2x)", "4"],
                ["4\"", "190,5", "5/8\"(2x)", "3/4\"(2x)", "8"],
                ["5\"", "215,9", "3/4\"(2x)", "7/8\"(2x)", "8"],
                ["6\"", "241,3", "3/4\"(2x)", "7/8\"(2x)", "8"],
                ["8\"", "298,5", "3/4\"(2x)", "7/8\"(2x)", "8"],
                ["10\"", "362", "7/8\"(4x)", "1\"(4x)", "12"],
                ["12\"", "431,8", "7/8\"(4x)", "-", "12"],
                ["14\"", "476,3", "1\"(4x)", "-", "12"],
                ["16\"", "539,8", "1\"(6x)", "-", "16"],
                ["18\"", "577,9", "1.1/8\"(6x)", "-", "16"],
                ["20\"", "635", "1.1/8\"(8x)", "-", "20"]
            ]
        },
        {
            name: "Flange DIN - PN10",
            description: "Especificações de furação DIN PN10",
            imageUrls: [DEFAULT_DIAGRAM_URL],
            headerGroups: [
                [
                    { text: "Flange DIN - PN10", colSpan: 5, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ]
            ],
            headers: ["DN", "ØK", "ØF (Nº)", "ØG (Nº)", "J"],
            rows: [
                ["2\"", "125", "-", "18,0(4x)", "4"],
                ["2.1/2\"", "145", "-", "18,0(4x)", "4"],
                ["3\"", "160", "M16(2x)", "18,0(2x)", "8"],
                ["4\"", "180", "M16(2x)", "18,0(2x)", "8"],
                ["5\"", "210", "M16(2x)", "18,0(2x)", "8"],
                ["6\"", "240", "M20(2x)", "23,0(2x)", "8"],
                ["8\"", "295", "M20(2x)", "23,0(2x)", "8"],
                ["10\"", "350", "M20(4x)", "23,0(4x)", "12"],
                ["12\"", "400", "M20(4x)", "-", "12"],
                ["14\"", "460", "M20(6x)", "-", "16"],
                ["16\"", "515", "M24(6x)", "-", "16"],
                ["18\"", "565", "M24(6x)", "-", "20"],
                ["20\"", "620", "M24(8x)", "-", "20"]
            ]
        },
        {
            name: "Pressão de Serviço",
            description: "Pressão de serviço a 40º C",
            imageUrls: [DEFAULT_DIAGRAM_URL],
            headerGroups: [
                [
                    { text: "Pressão de Serviço a 40º", colSpan: 2, className: "bg-brand-blue-dark border-b border-white/20 text-center" }
                ]
            ],
            headers: ["DN", "Pressão (Bgr)"],
            rows: [
                ["2\"", "10"],
                ["2.1/2\"", "10"],
                ["3\"", "10"],
                ["4\"", "10"],
                ["5\"", "10"],
                ["6\"", "10"],
                ["8\"", "7"],
                ["10\"", "7"],
                ["12\"", "6"],
                ["14\"", "5"],
                ["16\"", "4"],
                ["18\"", "3"],
                ["20\"", "3"]
            ]
        }
    ]
};