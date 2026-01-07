
import { TFunction } from 'i18next';
import { TableItem } from '../components/features/tables/shared/types';

// Importing grouped items from domains
import * as Acoplamento from '../components/features/tables/domains/acoplamento';
import * as ConexoesTubulares from '../components/features/tables/domains/conexoes-tubulares';
import * as ConexoesForjadas from '../components/features/tables/domains/chapas-grades/conexoes-forjadas';
import * as ValvulasTubos from '../components/features/tables/domains/valvulas-tubos';
import * as ChapasGrades from '../components/features/tables/domains/chapas-grades';
import * as Flanges from '../components/features/tables/domains/flanges';
import * as Barras from '../components/features/tables/domains/barras';

/**
 * Generates the table structure with translated names and descriptions.
 * @param t - The translation function from i18next
 */
export const getTablesData = (t: TFunction): TableItem[] => {
    return [
        // 1. TUBOS INDUSTRIAIS
        {
            name: t('tables.categories.tubes'),
            items: [
                { ...ValvulasTubos.tubosAcoCarbono, name: t('tables.items.tubes.carbon'), description: t('tables.descriptions.tubes.carbon') },
                { ...ValvulasTubos.tuboIndustrialQuadrado, name: t('tables.items.tubes.square'), description: t('tables.descriptions.tubes.square') },
                { ...ValvulasTubos.tuboIndustrialRetangular, name: t('tables.items.tubes.rectangular'), description: t('tables.descriptions.tubes.rectangular') },
                { ...ValvulasTubos.tuboIndustrialRedondo, name: t('tables.items.tubes.round'), description: t('tables.descriptions.tubes.round') },
                { ...ValvulasTubos.tubosAcoInox, name: t('tables.items.tubes.stainless'), description: t('tables.descriptions.tubes.stainless') },
                { ...ValvulasTubos.tubosNbr5580, name: t('tables.items.tubes.nbr5580'), description: t('tables.descriptions.tubes.nbr5580') },
                { ...ValvulasTubos.tubosDinNbr5580, name: t('tables.items.tubes.din5580'), description: t('tables.descriptions.tubes.din5580') },
                { ...ValvulasTubos.tubosNbr5590, name: t('tables.items.tubes.nbr5590'), description: t('tables.descriptions.tubes.nbr5590') },
                { ...ValvulasTubos.tubosMecanicosLaminados, name: t('tables.items.tubes.mechanical'), description: t('tables.descriptions.tubes.mechanical') },
                { ...ValvulasTubos.tubosCalandrados, name: t('tables.items.tubes.calendered'), description: t('tables.descriptions.tubes.calendered') },
            ]
        },
        
        // 2. VÁLVULAS INDUSTRIAIS
        {
            name: t('tables.categories.valves'),
            items: [
                { ...ValvulasTubos.valvulaEsfera, name: t('tables.items.valves.ball'), description: t('tables.descriptions.valves.ball') },
                { ...ValvulasTubos.valvulaGaveta, name: t('tables.items.valves.gate'), description: t('tables.descriptions.valves.gate') },
                { ...ValvulasTubos.valvulaGlobo, name: t('tables.items.valves.globe'), description: t('tables.descriptions.valves.globe') },
                { ...ValvulasTubos.valvulaBorboleta, name: t('tables.items.valves.butterfly'), description: t('tables.descriptions.valves.butterfly') },
                { ...ValvulasTubos.valvulaRetencaoDupla, name: t('tables.items.valves.check'), description: t('tables.descriptions.valves.check') },
                { ...ValvulasTubos.valvulaGuilhotina, name: t('tables.items.valves.guillotine'), description: t('tables.descriptions.valves.guillotine') },
            ]
        },

        // 3. FLANGES
        {
            name: t('tables.categories.flanges'),
            items: [
                {
                    name: "ANSI | ASME B16.5",
                    items: [
                        { ...Flanges.flange150lbs, description: t('tables.descriptions.flanges.class150') },
                        { ...Flanges.flange300lbs, description: t('tables.descriptions.flanges.class300') },
                        { ...Flanges.flange400lbs, description: t('tables.descriptions.flanges.class400') },
                        { ...Flanges.flange600lbs, description: t('tables.descriptions.flanges.class600') },
                        { ...Flanges.flange900lbs, description: t('tables.descriptions.flanges.class900') },
                        { ...Flanges.flange1500lbs, description: t('tables.descriptions.flanges.class1500') },
                    ]
                },
                {
                    name: "AWWA C-207",
                    items: [
                        { ...Flanges.awwaC207Tab2, description: t('tables.descriptions.flanges.awwa2') },
                        { ...Flanges.awwaC207Tab3, description: t('tables.descriptions.flanges.awwa3') },
                        { ...Flanges.awwaC207Tab4, description: t('tables.descriptions.flanges.awwa4') },
                        { ...Flanges.awwaC207Tab5, description: t('tables.descriptions.flanges.awwa5') },
                        { ...Flanges.awwaC207Tab6, description: t('tables.descriptions.flanges.awwa6') },
                        { ...Flanges.awwaC207Tab7, description: t('tables.descriptions.flanges.awwa7') },
                    ]
                },
                {
                    name: "DIN | EN 1092-1",
                    items: [
                        { ...Flanges.dinEn10921Pn10, description: t('tables.descriptions.flanges.din10') },
                        { ...Flanges.dinEn10921Pn16, description: t('tables.descriptions.flanges.din16') },
                        { ...Flanges.dinEn10921Pn25, description: t('tables.descriptions.flanges.din25') },
                        { ...Flanges.dinEn10921Pn40, description: t('tables.descriptions.flanges.din40') },
                        { ...Flanges.dinEn10921Pn63, description: t('tables.descriptions.flanges.din63') },
                        { ...Flanges.dinEn10921Pn100, description: t('tables.descriptions.flanges.din100') },
                    ]
                },
                {
                    name: t('tables.items.flanges.pead'),
                    items: [
                        { ...Flanges.flangeSoltoPeadPn10, description: t('tables.descriptions.flanges.pead10') },
                        { ...Flanges.flangeSoltoPeadPn16, description: t('tables.descriptions.flanges.pead16') },
                        { ...Flanges.flangeSoltoPeadPn26, description: t('tables.descriptions.flanges.pead26') },
                        { ...Flanges.flangeSoltoPeadAwwaC207Tab2, description: t('tables.descriptions.flanges.peadAwwa2') },
                        { ...Flanges.flangeSoltoPeadAwwaC207Tab6, description: t('tables.descriptions.flanges.peadAwwa6') },
                        { ...Flanges.flangeSoltoPeadAsmeB165, description: t('tables.descriptions.flanges.peadAsme') },
                    ]
                }
            ]
        },

        // 4. CONEXÕES
        {
            name: t('tables.categories.fittings'),
            items: [
                {
                    name: t('tables.subcategories.tubular'),
                    items: [
                        { ...ConexoesTubulares.curvas, name: t('tables.items.fittings.elbows'), description: t('tables.descriptions.fittings.elbows') },
                        { ...ConexoesTubulares.curvasRaio3x5x, name: t('tables.items.fittings.elbows3x5x'), description: t('tables.descriptions.fittings.elbows3x5x') },
                        { ...ConexoesTubulares.teCruzetaCap, name: t('tables.items.fittings.teeCrossCap'), description: t('tables.descriptions.fittings.teeCrossCap') },
                        { ...ConexoesTubulares.teCruzetaReducao, name: t('tables.items.fittings.teeCrossRed'), description: t('tables.descriptions.fittings.teeCrossRed') },
                        { ...ConexoesTubulares.nipleReducaoConcentrica, name: t('tables.items.fittings.reducerConc'), description: t('tables.descriptions.fittings.reducerConc') },
                        { ...ConexoesTubulares.nipleReducaoExcentrica, name: t('tables.items.fittings.reducerEcc'), description: t('tables.descriptions.fittings.reducerEcc') },
                        { ...ConexoesTubulares.pestanas, name: t('tables.items.fittings.stubEnds'), description: t('tables.descriptions.fittings.stubEnds') },
                        {
                            name: t('tables.items.fittings.weights'),
                            items: [
                                ConexoesTubulares.curvasKg45,
                                ConexoesTubulares.curvasKg90Folder,
                                ConexoesTubulares.tesKg,
                                ConexoesTubulares.capsKg,
                                ConexoesTubulares.reducaoKg,
                                ConexoesTubulares.pestanaKg,
                            ]
                        },
                        { ...ConexoesTubulares.tolerancias, name: t('tables.items.fittings.tolerances'), description: t('tables.descriptions.fittings.tolerances') },
                    ]
                },
                {
                    name: t('tables.subcategories.forged'),
                    items: [
                        { ...ConexoesForjadas.cotovelosTesCruzetas, name: t('tables.items.fittings.forgedElbows'), description: t('tables.descriptions.fittings.forgedElbows') },
                        { ...ConexoesForjadas.luvaMeiaLuaCap, name: t('tables.items.fittings.coupling'), description: t('tables.descriptions.fittings.coupling') },
                        { ...ConexoesForjadas.colares, name: t('tables.items.fittings.weldolet'), description: t('tables.descriptions.fittings.weldolet') },
                        { ...ConexoesForjadas.colares2, name: t('tables.items.fittings.sockolet'), description: t('tables.descriptions.fittings.sockolet') },
                        { ...ConexoesForjadas.plugsBuchasNiples, name: t('tables.items.fittings.plugs'), description: t('tables.descriptions.fittings.plugs') },
                        { ...ConexoesForjadas.cotovelosTeCruzetaEn, name: t('tables.items.fittings.forgedElbowsEn'), description: t('tables.descriptions.fittings.forgedElbows') },
                        { ...ConexoesForjadas.luvaMeiaLuaCapRosca, name: t('tables.items.fittings.couplingThread'), description: t('tables.descriptions.fittings.couplingThread') },
                        { ...ConexoesForjadas.encaixeRoscadoKg, name: t('tables.items.fittings.forgedWeights'), description: t('tables.descriptions.fittings.forgedWeights') },
                    ]
                },
                {
                    name: t('tables.subcategories.coupling'),
                    items: [
                        { ...Acoplamento.tubosHelicoidais, name: t('tables.items.fittings.helical'), description: t('tables.descriptions.fittings.helical') },
                        { ...Acoplamento.modeloK10, name: t('tables.items.fittings.k10'), description: t('tables.descriptions.fittings.k10') },
                        { ...Acoplamento.relacaoTubosAcoplamento, name: t('tables.items.fittings.relation'), description: t('tables.descriptions.fittings.relation') },
                    ]
                }
            ]
        },

        // 5. BARRAS DE AÇO
        {
            name: t('tables.categories.bars'),
            items: [
                { ...Barras.barraChata, name: t('tables.items.bars.flat'), description: t('tables.descriptions.bars.flat') },
                { ...Barras.barraQuadradaLaminada, name: t('tables.items.bars.squareRolled'), description: t('tables.descriptions.bars.squareRolled') },
                { ...Barras.barraQuadradaTrefilada, name: t('tables.items.bars.squareDrawn'), description: t('tables.descriptions.bars.squareDrawn') },
                { ...Barras.barraRedondaLaminada, name: t('tables.items.bars.roundRolled'), description: t('tables.descriptions.bars.roundRolled') },
                { ...Barras.barraRedondaTrefilada, name: t('tables.items.bars.roundDrawn'), description: t('tables.descriptions.bars.roundDrawn') },
                { ...Barras.barraSextavadaTrefilada, name: t('tables.items.bars.hex'), description: t('tables.descriptions.bars.hex') },
                { ...Barras.cantoneiraAbasIguais, name: t('tables.items.bars.angle'), description: t('tables.descriptions.bars.angle') },
                { ...Barras.perfilIAbasInclinadas, name: t('tables.items.bars.iBeam'), description: t('tables.descriptions.bars.iBeam') },
                { ...Barras.perfilUAbasInclinadas, name: t('tables.items.bars.uBeam'), description: t('tables.descriptions.bars.uBeam') },
                { ...Barras.perfilUEstruturalEnrijecido, name: t('tables.items.bars.uStiffened'), description: t('tables.descriptions.bars.uStiffened') },
                { ...Barras.perfilUEstruturalSimples, name: t('tables.items.bars.uSimple'), description: t('tables.descriptions.bars.uSimple') },
                { ...Barras.perfilLaminadoTee, name: t('tables.items.bars.tee'), description: t('tables.descriptions.bars.tee') },
                { ...Barras.perfilWHHP, name: t('tables.items.bars.wBeamH'), description: t('tables.descriptions.bars.wBeamH') },
                { ...Barras.perfilWI, name: t('tables.items.bars.wBeamI'), description: t('tables.descriptions.bars.wBeamI') },
                { ...Barras.ferroFundido, name: t('tables.items.bars.castIron'), description: t('tables.descriptions.bars.castIron') }
            ]
        },

        // 6. CHAPAS
        {
            name: t('tables.categories.plates'),
            items: [
                { ...ChapasGrades.chapaFinaFrio, name: t('tables.items.plates.cold'), description: t('tables.descriptions.plates.cold') },
                { ...ChapasGrades.chapaFinaQuente, name: t('tables.items.plates.hot'), description: t('tables.descriptions.plates.hot') },
                { ...ChapasGrades.chapaGrossa, name: t('tables.items.plates.thick'), description: t('tables.descriptions.plates.thick') },
                { ...ChapasGrades.chapaXadrez, name: t('tables.items.plates.checker'), description: t('tables.descriptions.plates.checker') },
                { ...ChapasGrades.chapaZincada, name: t('tables.items.plates.galvanized'), description: t('tables.descriptions.plates.galvanized') },
                { ...ChapasGrades.chapaExpandida, name: t('tables.items.plates.expanded'), description: t('tables.descriptions.plates.expanded') },
                { ...ChapasGrades.chapaPerfuradaRedondo, name: t('tables.items.plates.perforated'), description: t('tables.descriptions.plates.perforated') }
            ]
        },

        // 7. ESTRUTURAL E CONSTRUÇÃO CIVIL
        {
            name: t('tables.categories.civil'),
            items: [
                {
                    name: t('tables.items.civil.gratings'),
                    items: [
                        { ...ChapasGrades.gradeMalha25AV, description: t('tables.descriptions.civil.grating25') },
                        { ...ChapasGrades.gradeMalha30AV, description: t('tables.descriptions.civil.grating30') },
                    ]
                },
                {
                    name: t('tables.items.civil.construction'),
                    items: [
                        {
                            name: t('tables.items.civil.rebars'),
                            items: [
                                ChapasGrades.vergalhaoCA25,
                                ChapasGrades.vergalhaoCA50,
                                ChapasGrades.vergalhaoCA60,
                            ]
                        },
                        { ...ChapasGrades.telaSoldadaNervurada, name: t('tables.items.civil.mesh'), description: t('tables.descriptions.civil.mesh') },
                        { ...ChapasGrades.trelica, name: t('tables.items.civil.truss'), description: t('tables.descriptions.civil.truss') },
                        { ...ChapasGrades.aramesRecozidos, name: t('tables.items.civil.wire'), description: t('tables.descriptions.civil.wire') },
                        { ...ChapasGrades.barraTransferencia, name: t('tables.items.civil.transferBar'), description: t('tables.descriptions.civil.transferBar') },
                    ]
                }
            ]
        },

        // 8. ELETRODUTOS
        {
            name: t('tables.categories.conduits'),
            items: [
                { ...ChapasGrades.eletroliticoPreZincado, name: t('tables.items.conduits.preGalv'), description: t('tables.descriptions.conduits.preGalv') },
                { ...ChapasGrades.eletroliticoGalvanizadoFogo, name: t('tables.items.conduits.hotDip'), description: t('tables.descriptions.conduits.hotDip') },
                { ...ChapasGrades.atmosferaExplosivaRir, name: t('tables.items.conduits.explosive'), description: t('tables.descriptions.conduits.explosive') },
                { ...ChapasGrades.eletrodutosInox, name: t('tables.items.conduits.stainless'), description: t('tables.descriptions.conduits.stainless') },
            ]
        },

        // 9. TABELAS DE CONVERSÃO
        {
            name: t('tables.categories.conversion'),
            items: [
                { ...Barras.conversaoPolMm, name: t('tables.items.conversion.polMm'), description: t('tables.descriptions.conversion.polMm') }
            ]
        }
    ];
};
