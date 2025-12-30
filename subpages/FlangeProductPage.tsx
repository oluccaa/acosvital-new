
import React from 'react';
import ProductDetailLayout, { ProductModel, TechnicalSection } from '../components/templates/ProductDetailLayout';
import { ASSETS } from '../lib/media';
import { FileText, Settings, Ruler, Layers } from 'lucide-react';

const FlangeProductPage: React.FC = () => {
    const slides = [
        ASSETS.PRODUCTS.FLANGES,
        ...ASSETS.PRODUCT_PAGES.FLANGES.SLIDES
    ];

    const aboutText = (
        <>
            <p>
                A Aços Vital é uma das maiores fabricantes de Flanges no Brasil, de modelos Forjados, Laminadas à Usinadas em materiais de aço carbono, aço inoxidável e ligas especiais de 1/2” a 90”. Também, fabricamos Flanges com cortes especiais e variações de espessuras. Todo o processo de fabricação conta com tecnologia de ponta, atendendo as normas ANSI | ASME, AWWA, DIN/EN, JIS, NBR/ISO e aos mais rigorosos padrões de qualificação.
            </p>
            <p>
                Tais fatores comprovam que as Flanges Aços Vital são confiáveis e inigualáveis, a solução precisa para suas necessidades de tubulação, proporcionando conexões seguras e eficientes, essenciais para o processamento e transporte de grandes volumes de matéria-prima.
            </p>
            <p>
                A robustez e a precisão de nossas Flanges garantem resistência à corrosão e durabilidade, aspectos fundamentais para a operação contínua e segura nesse setor.
            </p>
        </>
    );

    const models: ProductModel[] = [
        { 
            name: "SLIP-ON (SO)", 
            desc: "O flange Slip-On (SO) ou Sobreposto não permite ligação direta com a conexão tubular. É um tipo de flange que desliza sobre a tubulação antes de ser soldado do lado interno e externo. Ideal para aplicações de baixa pressão.", 
            specs: ["Aço Carbono, Inox, Ligas", "Classe: 150# a 1500#", "Bitolas: 1/2\" à 24\""],
            image: ASSETS.PRODUCT_PAGES.FLANGES.MODELS.SLIP_ON 
        },
        { 
            name: "WELD – NECK", 
            desc: "O flange Weld-Neck (WN) recebe solda circunferencial em seu pescoço, facilitando exame de raio X. Resistentes às tensões e reduzem turbulências. Para qualquer pressão/temperatura.", 
            specs: ["Aço Carbono, Inox, Ligas", "Classe: 150# a 1500#", "Bitolas: 1/2\" à 24\""],
            image: ASSETS.PRODUCT_PAGES.FLANGES.MODELS.WELD_NECK 
        },
        { 
            name: "BLIND (CEGO)", 
            desc: "O flange Blind ou Cego é usado para interromper a passagem de fluídos. Facilita inspeção da linha. Recomendado para qualquer situação de pressão e temperatura.", 
            specs: ["Aço Carbono, Inox, Ligas", "Classe: 150# a 1500#", "Bitolas: 1/2\" à 24\""],
            image: ASSETS.PRODUCT_PAGES.FLANGES.MODELS.BLIND 
        },
        { 
            name: "LAP – JOINT (LJ)", 
            desc: "Apropriado para conexões STUB ENDS. Indicados para sistemas de baixa pressão, não são fixados apenas por solda, e sim através de outro flange por parafusos.", 
            specs: ["Aço Carbono, Inox, Ligas", "Classe: 150# a 1500#", "Bitolas: 1/2\" à 24\""],
            image: ASSETS.PRODUCT_PAGES.FLANGES.MODELS.LAP_JOINT 
        },
        { 
            name: "THREADED (ROSCADO)", 
            desc: "Empregado na junção de duas partes da tubulação, facilita montagem/desmontagem e manutenção. Roscas BSP ou NPT.", 
            specs: ["Aço Carbono, Inox, Ligas", "Classe: 150# a 1500#", "Bitolas: 1/2\" à 10\""],
            image: ASSETS.PRODUCT_PAGES.FLANGES.MODELS.THREADED 
        },
        { 
            name: "SOCKET – WELD", 
            desc: "Parecido com o Slip-On, mas com um diâmetro menor interno para apoio do tubo. O diâmetro interno do tubo e o de passagem são iguais, eliminando restrição ao fluxo.", 
            specs: ["Aço Carbono, Inox, Ligas", "Classe: 150# a 1500#", "Bitolas: 1/2\" à 12\""],
            image: ASSETS.PRODUCT_PAGES.FLANGES.MODELS.SOCKET_WELD 
        },
        { 
            name: "SOBREPOSTO PLANO (LISO)", 
            desc: "Sobreposto sobre o tubo, recebe solda interna e externa. Fácil aplicação, recomendado para pressão moderada. Vantagem econômica.", 
            specs: ["Aço Carbono, Inox, Ligas", "Classe: 150# a 1500#", "Bitolas: 1/2\" à 24\""],
            image: ASSETS.PRODUCT_PAGES.FLANGES.MODELS.SOBREPOSTO 
        },
        { 
            name: "SOLTO LISO", 
            desc: "Mesma finalidade da Lap Joint. Opção mais econômica para deixar a linha de montagem mais leve. Comum em tubulações PEAD e usinas.", 
            specs: ["Aço Carbono, Inox, Ligas", "Classe: 150# a 1500#", "Bitolas: 1/2\" à 24\""],
            image: ASSETS.PRODUCT_PAGES.FLANGES.MODELS.SOLTO 
        },
        { 
            name: "FLANGE PARA TUBO PEAD", 
            desc: "Para tubulação de PEAD (Polietileno de Alta Densidade). Acopla extremidades a outras conexões normativas.", 
            specs: ["Aço Carbono, Inox, Ligas", "Classe: 150# a 300#", "Bitolas: 1/2\" à 64\""],
            image: ASSETS.PRODUCT_PAGES.FLANGES.MODELS.PEAD 
        },
        { 
            name: "LIGAS ESPECIAIS", 
            desc: "Fabricação sob medida conforme projeto. Maior eficiência e adaptação para sistemas industriais, hidráulicos ou estruturais.", 
            specs: ["Aço Carbono, Inox, Ligas", "Bitolas: 1/2” a 90”"],
            image: ASSETS.PRODUCT_PAGES.FLANGES.MODELS.LIGAS 
        },
        { 
            name: "FIXADORES", 
            desc: "Elementos essenciais para unir partes de tubulações e equipamentos com segurança. Grande resistência à pressão.", 
            specs: ["Aço Carbono e Aço Inox"],
            image: ASSETS.PRODUCT_PAGES.FLANGES.MODELS.FIXADORES 
        },
        { 
            name: "JUNTAS DE FLANGES", 
            desc: "Elementos de vedação utilizados entre dois flanges para evitar vazamentos. Garantem estanqueidade sob altas pressões.", 
            specs: [],
            image: ASSETS.PRODUCT_PAGES.FLANGES.MODELS.JUNTAS 
        }
    ];

    const technicalData: TechnicalSection[] = [
        {
            title: "Tipos de Materiais",
            icon: <Layers size={24} />,
            items: ["Aço Carbono (Forjado e Laminado)", "Aço Inoxidável (Forjado e Laminado)", "Ligas Especiais", "Teflon, Anel RTJ e Papelão"]
        },
        {
            title: "Normas de Fabricação",
            icon: <FileText size={24} />,
            items: ["ANSI | ASME B16.5", "DIN | EN1092-1", "AWWA C-207", "JIS B2220", "Projeto do Cliente"]
        },
        {
            title: "Tipos de Faceamento",
            icon: <Settings size={24} />,
            items: ["RF - Raised Face", "FP - Flat Face", "FF - Flat Face Ranhurada", "RTJ", "Macho e Fêmea"]
        },
        {
            title: "Acabamento da Face",
            icon: <Ruler size={24} />,
            items: ["Ressalto Liso", "Ranhura Concêntrica", "Ranhura Espiral", "MSS-SP6"]
        }
    ];

    return (
        <ProductDetailLayout
            title="FLANGES"
            slides={slides}
            aboutText={aboutText}
            modelsTitle="Tipos Disponíveis"
            models={models}
            techTitle="ESPECIFICAÇÕES TÉCNICAS"
            techSubtitle="Detalhes normativos, materiais e padrões construtivos que garantem a qualidade Aços Vital."
            techData={technicalData}
        />
    );
};

export default FlangeProductPage;
