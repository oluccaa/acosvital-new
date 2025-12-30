
// ==========================================================================
// ARQUIVO DE TRADUÇÃO: PORTUGUÊS (PT)
// ==========================================================================

export const pt = {
    layout: {
        schedule: "Seg - Sex: 08:00 - 18:00",
        menu: "Menu Principal",
        searchPlaceholder: "Buscar produtos, tabelas...",
        departments: "Departamentos",
        viewAll: "Ver Todos",
        viewSpecs: "Ver especificações",
        catalogCall: "Catálogo Técnico Completo",
        catalogDesc: "Tenha acesso a todas as tabelas de medidas, normas e especificações em um único documento PDF.",
        downloadNow: "Baixar Agora",
        updated: "Atualizado 2025",
        close: "Fechar",
        list: "Lista",
        navigation: "Navegação"
    },
    header: {
      navLinks: {
        home: 'INÍCIO',
        about: 'SOBRE NÓS',
        products: 'PRODUTOS',
        catalog: 'CATÁLOGO',
        calculator: 'CALCULADORA',
        tables: 'TABELAS',
        certifications: 'CERTIFICAÇÕES',
        contact: 'CONTATO',
      },
      whatsapp: 'WHATSAPP',
      mobileGroups: {
          tubular: "Tubulação & Linhas",
          tubularDesc: "Tubos, Eletrodutos e Grooved",
          connections: "Conexões & Válvulas",
          connectionsDesc: "Flanges, Conexões e Válvulas",
          structural: "Aço Estrutural & Civil",
          structuralDesc: "Perfis, Chapas, Grades e Telhas",
          industrial: "Soluções Industriais",
          industrialDesc: "Corte, Tanques e Caldeiraria"
      },
      mobileLinks: {
          downloadCatalog: "Baixar Catálogo Completo",
          calculatorTitle: "Calculadora de Aço",
          calculatorDesc: "Ferramenta",
          tablesTitle: "Tabelas Técnicas",
          tablesDesc: "Normas & Medidas",
          contact: "Fale Conosco",
          whatsappSupport: "Atendimento WhatsApp"
      }
    },
    footer: {
        slogan: "A confiança é o que nos conecta!",
        pagesTitle: "Páginas",
        followUsTitle: "Siga-nos"
    },
    calculatorPage: {
        title: "Vital Steel Suite",
        subtitle: "Workstation de Engenharia v5.0",
        tabs: {
            calculator: "Calculadora",
            nesting: "Otimização",
            welding: "Estimativa",
            converter: "Conversor"
        },
        common: {
            selection: "Seleção",
            console: "Console de Engenharia",
            telemetry: "Telemetria",
            presets: "Presets de Medida",
            presetsHelp: "Selecione um campo acima e clique em um preset para aplicar.",
            surfaceArea: "Área Superficial",
            density: "Densidade",
            totalWeight: "Peso Total",
            unitWeight: "Unitário",
            totalArea: "Área Total",
            addToList: "Adicionar à Lista",
            materialList: "Lista de Materiais",
            print: "Imprimir",
            share: "Compartilhar",
            clear: "Limpar",
            emptyList: "Nenhum item adicionado.",
            projectTotal: "Total do Projeto",
            requestQuote: "Solicitar Cotação",
            waiting: "Aguardando Cálculo",
            selectItem: "Selecione um item para calcular"
        },
        toolDescriptions: {
            calculator: "Calcule o peso teórico de chapas, tubos, barras e perfis complexos. Essencial para planejamento de materiais, orçamentos e logística.",
            nesting: "Otimize o corte linear de barras e perfis. Reduza o desperdício de material (sucata) calculando o melhor aproveitamento das barras de estoque.",
            sheetMetal: "Calcule o desenvolvimento (blank) de chapas para a fabricação de cones. Ferramenta essencial para caldeiraria.",
            bending: "Calcule o tamanho exato de corte (blank) considerando o desconto de dobra, fator K e tolerancias para chapas dobradas.",
            welding: "Estime a quantidade de consumível de solda necessária para diferentes tipos de juntas. Ideal para planejamento de custos de soldagem.",
            converter: "Converta rapidamente unidades de medida comuns na engenharia industrial (mm, pol, kg, lb, psi, bar) para facilitar seu dia a dia."
        },
        sheetMetal: {
            title: "Planificação de Cone",
            subtitle: "Cálculo de desenvolvimento para caldeiraria",
            dimensions: "Dimensões do Cone",
            results: "Resultado da Planificação",
            memory: "Memória de Cálculo",
            theory: "Cálculo baseado em geometria euclidiana para desenvolvimento de sólidos de revolução (Cones Concêntricos).",
            inputs: {
                D: "Ø Maior (D)",
                d: "Ø Menor (d)",
                H: "Altura (H)",
                T: "Espessura (T)"
            },
            outputs: {
                radiusLarge: "Raio Maior (Compasso)",
                radiusSmall: "Raio Menor",
                angle: "Ângulo do Setor",
                slantHeight: "Geratriz (Slant Height)",
                chordLarge: "Corda Maior (Traçagem)"
            },
            formulas: {
                title: "Matemática da Planificação",
                slantHeight: "Geratriz (g)",
                slantDesc: "Calculada via Pitágoras usando a altura e a diferença dos raios.",
                patternRadius: "Raio Maior do Molde (R_pad)",
                angle: "Ângulo do Setor (θ)",
                angleDesc: "A proporção da circunferência da base em relação ao círculo de desenvolvimento.",
                formulaG: "g = √[H² + (R - r)²]",
                formulaTheta: "θ = 360° × (R / g)"
            }
        },
        bending: {
            title: "Calculadora de Dobra",
            subtitle: "Desconto de dobra e Fator K",
            params: "Parâmetros de Dobra",
            blankSize: "Tamanho do Blank (Corte)",
            theory: "Teoria",
            inputs: {
                thickness: "Espessura (T)",
                radius: "Raio Int. (R)",
                angle: "Ângulo (°)",
                kFactor: "Fator K",
                leg1: "Aba 1",
                leg2: "Aba 2"
            },
            outputs: {
                deduction: "Dedução (BD)",
                allowance: "Tolerância (BA)"
            }
        },
        formulas: {
            title: "Entenda o Cálculo",
            general: "O peso é calculado multiplicando o volume do material pela sua densidade específica.",
            plate: "Peso = Largura × Comprimento × Espessura × Densidade",
            barRound: "Peso = π × (Raio)² × Comprimento × Densidade",
            barSquare: "Peso = Lado² × Comprimento × Densidade",
            tube: "Peso = π × (R_ext² - R_int²) × Comprimento × Densidade",
            grating: "Peso = (Peso das Barras + 15% Travessas) × Área",
            variables: {
                density: "Densidade (ρ)",
                volume: "Volume (V)",
                area: "Área Transversal (A)"
            }
        },
        calendering: {
            title: "Fabricação (Planificação)",
            devLength: "Comprimento da Chapa (Desenvolvimento)",
            sheetWidth: "Largura da Chapa",
            explanation: "O desenvolvimento da chapa é calculado com base na linha neutra do material (Diâmetro Médio).",
            formula: "L = (DE - E) × π",
            neutralAxis: "Linha Neutra",
            logistics: "Dados Logísticos"
        },
        selectProduct: "Selecione a Operação",
        selectMaterial: "Material",
        categories: {
            raw: "Matéria Prima",
            piping: "Caldeiraria & Tubulação",
            structural: "Industrial & Estrutural"
        },
        inputs: {
            thickness: "Espessura",
            width: "Largura",
            length: "Comprimento",
            outerDiameter: "Diâmetro Externo",
            innerDiameter: "Diâmetro Interno",
            wallThickness: "Parede",
            height: "Altura",
            diameter: "Diâmetro",
            quantity: "Quantidade",
            angle: "Ângulo (°)",
            pitch: "Passo da Malha",
            strandWidth: "Cordão",
            meshSWD: "Malha SWD",
            radius: "Raio de Centro",
            side: "Lado",
            barHeight: "Alt. Barra",
            barThickness: "Esp. Barra",
            mesh: "Malha",
            gap: "Vão"
        },
        products: {
            plate: "Chapa",
            tubeRound: "Tubo Industrial",
            barRound: "Barra Redonda",
            barSquare: "Barra Quadrada",
            flangeSquare: "Anel (Corte de Chapa)",
            grating: "Grade de Piso",
            tubeCalendered: "Tubo Calandrado",
            expandedMetal: "Chapa Expandida",
            fittingElbow: "Curva",
            fittingReducer: "Redução",
            fittingTee: "Tê"
        },
        materials: {
            carbon: "Aço Carbono (7.85)",
            inox304: "Aço Inox 304 (7.93)",
            inox316: "Aço Inox 316 (7.98)",
            aluminum: "Alumínio (2.70)"
        },
        painting: {
            title: "Pintura e Revestimiento",
            coverage: "Rendimento (m²/L)",
            coats: "Demãos",
            density: "Densidade Tinta (kg/L)",
            volume: "Vol. Tinta",
            weight: "Peso Pintura"
        },
        result: {
            weightPerPiece: "Peso Unitario",
            totalWeight: "Peso Total",
            developedLength: "Desenvolvimento (L)",
            unit: "kg",
            surfaceArea: "Área de Pintura",
            grossWeight: "Peso Bruto (Chapa)",
            netWeight: "Peso Líquido (Anel)",
            scrap: "Taxa de Refugo",
            arcOuter: "Arco Externo",
            arcCenter: "Arco Central",
            arcInner: "Arco Interno",
            projectData: "DADOS DO PROJETO",
            material: "MATERIAL",
            density: "DENSIDADE",
            date: "DATA"
        },
        calculate: "CALCULAR",
        clear: "LIMPAR CAMPOS",
        project: {
            title: "Lista de Materiais (BOM)",
            empty: "Nenhum item adicionado ao projeto.",
            add: "Adicionar ao Projeto",
            total: "Peso Total do Projeto",
            export: "Imprimir Lista",
            quoteButton: "Cotar no WhatsApp",
            pdfButton: "Gerar PDF / Imprimir",
            clear: "Limpar Projeto",
            item: "Item",
            qty: "Qtd",
            weight: "Peso",
            actions: "Ações"
        },
        nesting: {
            title: "Otimizador de Corte Linear",
            barLength: "Tamanho da Barra Padrão",
            bladeWidth: "Largura de Corte / Serra",
            linearWeight: "Peso Linear (kg/m) - Opcional",
            cutList: "Lista de Cortes",
            length: "Comprimento da Peça",
            qty: "Qtd",
            add: "Adicionar",
            addPieces: "Adicionar Peças",
            calculateBtn: "Calcular Otimização",
            params: "Parâmetros de Estoque",
            waiting: "Aguardando Cálculo",
            waitingDesc: "Adicione as peças que deseja cortar na lista ao lado e defina o tamanho da barra do seu estoque.",
            helpTitle: "Como usar o Otimizador",
            helpText: "Esta ferramenta utiliza um algoritmo de 'Melhor Ajuste' (Best Fit Decreasing) para organizar as peças nas barras de estoque disponíveis. Insira o comprimento total da barra que você tem em estoque e a espessura da lâmina de corte (perda). Se desejar calcular o peso total da sucata e do material, preencha o campo 'Peso Linear'.",
            errorLength: "Erro: O comprimento da peça (+ corte) não pode ser maior que a barra de estoque.",
            results: {
                totalBars: "Total de Barras",
                totalWaste: "Sobra Total",
                barUsage: "Aproveitamento",
                weightUsed: "Peso Material",
                weightScrap: "Peso Sucata",
                scraps: "Retalhos",
                efficiency: "Eficiência",
                cutPlan: "Plano de Corte",
                hoverDetails: "Passe o mouse para ver detalhes"
            },
            table: {
                bar: "Barra",
                cuts: "Cortes nesta barra (mm)",
                waste: "Sobra (Retalho)"
            },
            explanation: {
                title: "Entenda o Cálculo de Otimização",
                concept: "O cálculo utiliza um algoritmo heurístico (Best Fit Decreasing) para resolver o 'Problema de Corte de Estoque' unidimensional. O objetivo é minimizar o número de barras utilizadas e o desperdício de material.",
                glossary: {
                    stock: { title: "Tamanho da Barra", desc: "Comprimento total da barra virgem disponível em estoque (ex: 6000mm ou 12000mm)." },
                    blade: { title: "Largura de Corte", desc: "Material perdido a cada corte devido à espessura do disco ou serra (kerf). Geralmente entre 3mm e 5mm." },
                    waste: { title: "Sobra (Sucata)", desc: "Pedaço final da barra que não é suficiente para produzir novas peças. Calculado como: Barra Total - (Soma das Peças + Perdas de Corte)." },
                    weight: { title: "Peso Linear", desc: "Massa da barra por metro (kg/m). Permite calcular o peso total de material comprado e o peso desperdiçado em sucata." }
                }
            }
        },
        welding: {
            title: "Calculadora de Solda",
            helpTitle: "Parâmetros de Estimativa",
            helpText: "Esta ferramenta estima a quantidade de consumível necessária com base na área transversal e na densidade do material selecionado. A eficiência de deposição não é considerada, fornecendo o peso líquido do metal depositado.",
            jointType: "Tipo de Junta",
            types: {
                fillet: "Filete",
                buttV: "Topo em V (V Simples)",
                buttX: "Topo em X (V Duplo)"
            },
            inputs: {
                legSize: "Perna do Filete (z)",
                thickness: "Espessura da Chapa (t)",
                length: "Comprimento da Solda",
                gap: "Abertura de Raiz (g)",
                angle: "Ângulo do Bisel (α)",
                reinforcement: "Reforço / Sobre-metal"
            },
            results: {
                weight: "Peso Estimado",
                volume: "Volume de Solda"
            },
            explanation: {
                title: "Guia Técnico de Soldagem",
                concept: "O peso do metal de solda é calculado determinando o volume da área transversal do cordão multiplicado pelo seu comprimento e pela densidade do aço (aprox. 7,85 g/cm³).",
                glossary: {
                    z: { title: "Perna (z)", desc: "Comprimento do lado do triângulo em uma solda de filete. Determina a resistência da junta." },
                    g: { title: "Abertura de Raiz (g)", desc: "Distância mínima entre as peças a serem soldadas. Permite a penetração total da solda." },
                    alpha: { title: "Ângulo do Bisel (α)", desc: "Ângulo de abertura entre as chapas preparadas. Geralmente 60° para juntas em V." },
                    r: { title: "Reforço", desc: "Sobremetal ou convexidade do cordão de solda acima da superfície da chapa, expresso em porcentagem (geralmente 10-20%)." }
                }
            }
        },
        converter: {
            title: "Conversor Universal",
            categories: {
                length: "Comprimento",
                weight: "Massa / Peso",
                area: "Área",
                pressure: "Pressão",
                dn: "Diâmetro Nominal"
            },
            units: {
                mm: "Milímetros (mm)",
                cm: "Centímetros (cm)",
                m: "Metros (m)",
                in: "Polegadas (in)",
                ft: "Pés (ft)",
                kg: "Quilogramas (kg)",
                lb: "Libras (lb)",
                ton: "Toneladas (t)",
                m2: "Metros Quad. (m²)",
                cm2: "Cent. Quad. (cm²)",
                ft2: "Pés Quad. (ft²)",
                in2: "Pol. Quad. (in²)",
                bar: "Bar",
                psi: "PSI (lbf/in²)",
                mpa: "MegaPascal (MPa)",
                kgfcm2: "kgf/cm²"
            },
            labels: {
                from: "De",
                to: "Para",
                value: "Valor",
                result: "Resultado"
            },
            footer: "Conversão Nominal (Tabela Pipe) - Ex: 1/2\" = 15mm | 14\" = 350mm"
        }
    },
    hero: {
      slides: {
        entressafra: {
            title: 'Entressafra: Pare sua usina, não sua produção!',
            subtitle: 'A entressafra é curta. Cada dia parado custa milhões.',
            buttonText: 'Nossas Soluções'
        },
        trapezoidal: {
            title: 'Telhas Trapezoidais',
            subtitle: 'Proteção máxima, design moderno. A força que sua obra precisa.',
            buttonText: 'Linha Trapezoidal'
        },
        excellence: {
            title: 'Excelência em Aços: A confiança é o que nos conecta!',
            subtitle: 'Chapas, Tubos, Flanges, Conexões e Aços em geral. Trazemos soluções inovadoras para desafios complexos!',
            buttonText: 'Explorar Produtos'
        },
        flanges: {
            title: 'Excelência em Aços: A confiança é o que nos conecta!',
            subtitle: 'Chapas, Tubos, Flanges, Conexões e Aços em geral. Trazemos soluções inovadoras para desafios complexos!',
            buttonText: 'Ver Flanges'
        },
        flooring: {
            title: 'Grades de Piso e Chapas',
            subtitle: 'Segurança e versatilidad para sua indústria. Soluções robustas e duráveis.',
            buttonText: 'Conheça Nossos Pisos'
        }
      },
      scrollText: 'Role para baixo'
    },
    about: {
        title: 'A confiança é o que nos conecta!',
        p1: 'Aços Vital destaca-se como fabricante de Flanges, Curvas de Gomos, Tubos Calandrados, Chapas Expandidas e Grades de Piso com a mais alta qualidade para atender às demandas dos segmentos da indústria e da construção.',
        p2: 'Somos reconhecidos pela excelência e precisão de nossos produtos, além do compromisso inabalável com a qualidade e a melhoria contínua dos processos, oferecendo soluções sob medida que atendam às necessidades específicas de cada cliente, garantindo o seu alto desempenho.',
        p3: 'Nosso processo estratégico é otimizado e executado com excelência, abrangendo desde o atendimento personalizado ao cliente até a entrega dos produtos. Contamos com profissionais capacitados e qualificados para atender aos mais diversos segmentos. Tais fatores decisivos nos colocam à frente da concorrência, pois oferecemos durabilidade, performance e confiabilidade com um prazo de entrega diferenciado.',
        p4: 'Somos o parceiro confiável que une um time técnico de alta performance, produtos de extrema qualidade e acabamento incomparável. Aços Vital é a melhor decisão para o seu negócio.',
        callToAction: {
             buttonText: "FALE COM UM CONSULTOR"
        }
    },
    features: {
        list: {
            fast_delivery: { title: "Entrega Rápida e Flexível", description: "Produção ágil e logística otimizada para cumprir seus prazos em todo o território nacional." },
            certified_quality: { title: "Qualidade Certificada", description: "Nossos produtos seguem os mais altos padrões, com certificações ISO 9001, CRC Petrobrás e YPFB." },
            global_reach: { title: "Alcance Global", description: "Atendemos com excelência clientes no Brasil e no exterior, levando nossas soluções além das fronteiras." },
            satisfied_clients: { title: "+2.000 Clientes Satisfeitos", description: "A confiança de milhares de clientes anualmente, comprovando nossa dedicação e qualidade." }
        }
    },
    pillars: {
        subtitle: "QUEM SOMOS E O QUE BUSCAMOS?",
        title: "Nossos Pilares",
        list: {
            mission: { title: "MISSÃO", description: "A empresa entrega produtos de aço de alta qualidade, fortalecendo parcerias, promovendo crescimento sustentável." },
            vision: { title: "VISÃO", description: "Ser referencia nacional em produtos de aço, destacando-se pela qualidade, inovação e sustentabilidade." },
            values: { title: "VALORES", description: "Qualidade, inovação, sustentabilidade, parceria e segurança." }
        }
    },
    units: {
        subtitle: "SOBRE NÓS",
        title: "Onde atuamos",
    },
    history: {
        title: "Uma história de superação!",
        youtubeUrl: "https://www.youtube.com/embed/Vt8dUUSsSZA?si=HsCaIShmSAQVrNhS",
        stats: {
            clients: { value: "+2K", label: "Clientes Anualmente" },
            factory_area: { value: "36K m²", label: "Área Total Fabril" },
            employees: { value: "+200", label: "Colaboradores" },
            factories: { value: "4", label: "Fábricas Próprias" }
        }
    },
    aboutPage: {
        hero: {
            title: 'Quem Somos',
        }
    },
    featuredProducts: {
        title: 'Produtos em Destaque',
        items: {
            plates: 'Chapas de Aço',
            tubes: 'Tubos de Aço',
            flanges: 'Flanges de Aço',
            valves: 'Válvulas Industriais',
            meshes: 'Telas de Aço',
            profiles: 'Perfis de Aço',
            gratings: 'Grades de Piso',
            fittings: 'Conexões de Aço',
            bars: 'Barras de Aço',
            tanks: 'Tanques Industriais',
            piping: 'Tubulação Industrial',
            boilermaking: 'Caldeiraria Industrial',
            grooved: 'Linha Grooved'
        },
        viewDetails: 'Ver detalhes',
        onRequest: 'Sob consulta'
    },
    productsPage: {
      title: 'Catálogo de Produtos',
      description: 'Conheça nosso catálogo completo de produtos, desenvolvido para atender com excelência as demandas dos segmentos da indústria e da construção, com qualidade garantida. Prontos para fortalecer seus projetos com segurança, resistência e precisão. Seguimos os mais rigorosos padrões de fabricação, desde a aquisição da matéria-prima, recebimento, armazenagem, corte, beneficiamento e inspeção.',
      buttonText: 'Ver Produto',
      categories: {
        flanges: 'FLANGES',
        tubes: 'TUBOS',
        fittings: 'CONEXIONES',
        valves: 'VÁLVULAS',
        profiles: 'PERFILES LAMINADOS E DOBRADOS',
        plates: 'CHAPAS',
        gratings: 'GRADES DE PISO',
        tiles: 'TELHA TRAPEZOIDAL',
        civil: 'CONSTRUÇÃO CIVIL',
        boilermaking: 'CALDEIRARIA INDUSTRIAL',
        cutting: 'OXICORTE',
        conduits: 'ELETRODUTOS',
        grooved: 'LINHA GROOVED',
        tanks: 'TANQUE DE COMBUSTÍVEL E GLP',
      },
      catalogPdfUrl: "https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/pdf/Catalogo%201%20-%20Flanges,%20Conexoes,%20Valvulas%20e%20Tubos%20-%20Acos%20Vital%20Ed.4.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9wZGYvQ2F0YWxvZ28gMSAtIEZsYW5nZXMsIENvbmV4b2VzLCBWYWx2dWxhcyBlIFR1Ym9zIC0gQWNvcyBWaXRhbCBFZC40LnBkZiIsImlhdCI6MTc2NDg3MTE5OCwiZXhwIjoxNzk2NDA3MTk4fQ.k4RWJgWBKsu5Rq6jP0RJv2wzJ-M8tGCMvmtV2YRU8E0"
    },
    catalogPage: {
      links: {
        products: {
            title: "Conheça nossa linha de produtos",
            buttonText: "Ver Produtos",
        },
        tables: {
            title: "Acesse as tabelas de medidas",
            buttonText: "Acessar Tabelas",
        }
      }
    },
    tablesPage: {
        title: "Tabelas Técnicas e Especificações",
        subtitle: "Consulte as medidas, pesos e normas técnicas dos nossos principais produtos.",
        sidebarFooter: "Catálogo Digital Aços Vital",
        search: {
            label: "Buscar Tabelas",
            placeholder: "Nome, dimensão, norma...",
            results: "resultados",
            helper: "Buscando em títulos e conteúdo das tabelas...",
            noResultsTitle: "Nenhuma tabela encontrada",
            noResultsText: "Tente outro termo de busca.",
            clear: "Limpar busca",
            filterPlaceholder: "Filtrar dados nesta tabela (ex: 21,3)",
            filterActive: "Filtro Ativo",
            filterNoResultsTitle: "Nenhum resultado encontrado",
            filterNoResultsText: "Não encontramos dados correspondentes a \"{{term}}\" nesta tabela.",
            filterClear: "Limpar Filtro",
            showingRecords: "Mostrando {{count}} de {{total}} registros",
            selectPromptTitle: "Selecione uma Tabela",
            selectPromptText: "Navegue pelo menu lateral para encontrar as especificações técnicas, dimensões e normas desejadas."
        },
        gallery: {
            title: "Galeria Técnica",
            subtitle: "Desenhos e legendas visuais",
            item: "item",
            items: "itens",
            figure: "Figura",
            technicalView: "Vista Técnica",
            zoom: "Ampliar",
            helpText: "Utilize as legendas alfabéticas (A, B, C...) presentes nos diagramas acima como referência para identificar as colunas correspondientes na tabela de especificações. Clique na imagem para visualizar em alta resolução.",
            altDiagram: "Diagrama técnico {{index}} para {{tableName}}",
            closeHint: "Pressione <kbd>ESC</kbd> para fechar",
            enlargedView: "Visualização ampliada"
        }
    },
    tables: {
        categories: {
            tubes: "Tubos Industriais",
            valves: "Válvulas Industriais",
            flanges: "Flanges",
            fittings: "Conexões",
            bars: "Barras de Aço",
            plates: "Chapas",
            civil: "Estrutural e Construção Civil",
            conduits: "Eletrodutos e Instalações",
            conversion: "Tabelas de Conversão"
        },
        subcategories: {
            tubular: "Tubulares (Solda)",
            forged: "Forjadas (Alta Pressão)",
            coupling: "Acoplamento K"
        },
        items: {
            tubes: {
                carbon: "Tubos de Aço Carbono",
                square: "Tubo Industrial Quadrado",
                rectangular: "Tubo Industrial Retangular",
                round: "Tubo Industrial Redondo",
                stainless: "Tubos de Aço Inox",
                nbr5580: "Tubos com Costura - NBR 5580",
                din5580: "Tubo (antiga norma DIN) - NBR 5580",
                nbr5590: "Tubo SCH 40 e 80 - NBR 5590",
                mechanical: "Tubos Mecânicos Laminados",
                calendered: "Tubos Calandrados Grandes Diâmetros"
            },
            valves: {
                ball: "Válvula da Esfera",
                gate: "Válvula Gaveta",
                globe: "Válvula Globo",
                butterfly: "Válvula Borboleta",
                check: "Válvula Retenção Dupla Portinhola",
                guillotine: "Válvula Guilhotina"
            },
            flanges: {
                pead: "Flange Solto PEAD"
            },
            fittings: {
                elbows: "Curvas",
                elbows3x5x: "Curvas Raio 3X DN e 5X DN",
                teeCrossCap: "Te, Cruzeta e CAP",
                teeCrossRed: "Te e Cruzeta de Redução",
                reducerConc: "Niple da Redução Concêntrica",
                reducerEcc: "Niple de Redução Excêntrica",
                stubEnds: "Pestanas",
                weights: "Pesos (kg)",
                tolerances: "Tolerâncias",
                forgedElbows: "Conexões Tipo Encaixe ASME B16.11",
                coupling: "Luva, Meia Lua e Cap",
                forgedElbowsEn: "Cotovelos, Te e Cruzeta EN",
                couplingThread: "Conexões Tipo Roscado B16.11 - Dimensões em mm",
                weldolet: "Colares (Weldolet / Elbolet)",
                sockolet: "Colares (Sockolet / Thredolet)",
                plugs: "Plugs, Buchas e Niples",
                forgedWeights: "Pesos Aproximados para Conexões de Encaixe e Roscadas",
                helical: "Tubos Helicoidais",
                k10: "Modelo K10 - Flexível",
                relation: "Relação entre Tubos-Acoplamento"
            },
            bars: {
                flat: "Barra Chata",
                squareRolled: "Barra Quadrada Laminada",
                squareDrawn: "Barra Quadrada Trefilada",
                roundRolled: "Barra Redonda Laminada",
                roundDrawn: "Barra Redonda Trefilada",
                hex: "Barra Sextavada Trefilada",
                angle: "Cantoneira Abas Iguais",
                iBeam: "Perfil I - Abas Inclinadas",
                uBeam: "Perfil U - Abas Inclinadas",
                uStiffened: "Perfil U Estrutural - Enrijecido",
                uSimple: "Perfil U Estrutural - Simples",
                tee: "Perfil Laminado Tee",
                wBeamH: "Perfil W Abas Paralelas – Perfil (W) H - HP",
                wBeamI: "Perfil W Abas Paralelas – Perfil (W) I",
                castIron: "Ferro Fundido"
            },
            plates: {
                cold: "Chapa Fina a Frio",
                hot: "Chapa Fina a Quente",
                thick: "Chapas Grossas",
                checker: "Chapa Para Piso (Xadrez)",
                galvanized: "Chapa Zincada (Galvanizada)",
                expanded: "Chapa Expandida",
                perforated: "Chapa Perfurada - Furo Redondo"
            },
            civil: {
                gratings: "Grades de Piso",
                construction: "Aço para Construção",
                rebars: "Vergalhões",
                mesh: "Tela Soldada Nervurada",
                truss: "Treliça",
                wire: "Arames Recozidos",
                transferBar: "Barra de Transferência"
            },
            conduits: {
                preGalv: "Eletrolítico Pré-Zincado",
                hotDip: "Eletrolítico Galvanizado à Fogo",
                explosive: "Atmosfera Explosiva - RIR",
                stainless: "Eletrodutos Inox"
            },
            conversion: {
                polMm: "Tabela de Conversão de Polegadas e Milímetros"
            }
        },
        descriptions: {
            tubes: {
                carbon: "Tabela de Dimensões e Pesos para Tubos de Aço Carbono (Schedule 40, 80, 160, XXS)",
                square: "Tabela de Pesos Teóricos (kg/m) para Tubo Industrial Quadrado. Outras bitolas sob consulta.",
                rectangular: "Tabela de Pesos Teóricos (kg/m) para Tubo Industrial Retangular. Outras bitolas sob consulta.",
                round: "Tabela de Pesos Teóricos (kg/m) para Tubo Industrial Redondo. Outras bitolas sob consulta.",
                stainless: "Tabela de Dimensões e Pesos para Tubos de Aço Inox (Schedule 5S, 10S, 40S, 80S, 160S)",
                nbr5580: "NBR 5580 (Antigo DIN 2440)",
                din5580: "Tubo (antiga norma DIN) - NBR 5580",
                nbr5590: "Tubo SCH 40 e 80 - NBR 5590",
                mechanical: "Medidas de Laminação e Garantidas para Usinagem (ST52)",
                calendered: "Tubos Calandrados de Grandes Diâmetros | Fabricação Aços Vital"
            },
            valves: {
                ball: "Válvula da Esfera Monobloco Passagem Plena PN 40 (PP)",
                gate: "Válvula Gaveta Classe 150",
                globe: "Dimensões da Válvula Globo",
                butterfly: "Válvula Borboleta Tipo Wafer Revestida em PTFE",
                check: "Dimensões para Válvula de Retenção Dupla Portinhola",
                guillotine: "Especificações Técnicas, Dimensões e Flanges para Válvula Guilhotina"
            },
            flanges: {
                class150: "Dimensões para Flanges Classe 150LBS",
                class300: "Dimensões para Flanges Classe 300LBS",
                class400: "Dimensões para Flanges Classe 400LBS",
                class600: "Dimensões para Flanges Classe 600LBS",
                class900: "Dimensões para Flanges Classe 900LBS",
                class1500: "Dimensões para Flanges Classe 1500LBS",
                awwa2: "Dimensões para Flanges AWWA C-207 Tabela 2 Classe B (86psi) e D (175-150psi)",
                awwa3: "Dimensões para Flanges AWWA C-207 Tabela 3 Classe D",
                awwa4: "Dimensões para Flanges AWWA C-207 Tabela 4 Classe E",
                awwa5: "Dimensões para Flanges AWWA C-207 Tabela 5 Classe E",
                awwa6: "Dimensões para Flanges AWWA C-207 Tabela 6 Classe F",
                awwa7: "Espessuras para Flanges AWWA C-207 Classes B, D, E e F",
                din10: "Dimensões para Flanges DIN | EN 1092-1 PN 10",
                din16: "Dimensões para Flanges DIN | EN 1092-1 PN 16",
                din25: "Dimensões para Flanges DIN | EN 1092-1 PN 25",
                din40: "Dimensões para Flanges DIN | EN 1092-1 PN 40",
                din63: "Dimensões para Flanges DIN | EN 1092-1 PN 63",
                din100: "Dimensões para Flanges DIN | EN 1092-1 PN 100",
                pead10: "Tabela para Flange Solto PEAD - PN 10",
                pead16: "Tabela para Flange Solto PEAD - PN 16",
                pead26: "Tabela para Flange Solto PEAD - PN 26",
                peadAwwa2: "Tabela para Flange Solto PEAD - AWWA C207 TAB.2 CL.D",
                peadAwwa6: "Tabela para Flange Solto PEAD - AWWA C207 TAB.6 CL.F",
                peadAsme: "Tabela para Flange Solto PEAD - ASME B16.5 150LBS"
            },
            fittings: {
                elbows: "Curvas ASME B16.9 e MSS SP-43",
                elbows3x5x: "Pesos Aproximados (kg) para Curvas de Raio 3x e 5x o Diâmetro Nominal",
                teeCrossCap: "Te, Cruzeta e CAP ASME B16.9 e MSS SP-43",
                teeCrossRed: "Te e Cruzeta de Redução ASME B16.9",
                reducerConc: "Dimensões e pesos para Niple de Redução Concêntrica ASME B16.9 MSSP-95",
                reducerEcc: "Dimensões e pesos para Niple de Redução Excêntrica ASME B16.9 MSSP-95",
                stubEnds: "Tabela de Dimensões de Pestana (Stub End) conforme ASME B16.9 e MSS SP-43",
                tolerances: "Tolerâncias para Conexões ASME B16.9 e MSS SP-43",
                forgedElbows: "Conexões Tipo Encaixe ASME B16.11",
                coupling: "Conexões Tipo Encaixe ASME B16.11 - Dimensões em mm",
                weldolet: "Dimensões A (mm) para Weldolet - STD, XS e 160",
                sockolet: "Dimensões para Sockolet e Thredolet MSS SP 97",
                plugs: "Plugs - Buchas - Niples ASME B16.11",
                forgedWeights: "Pesos Aproximados para Conexões de Encaixe e Roscadas",
                helical: "Tabela de Pressão Máxima Admissível (mca) para Tubos de Aço AMT COR 300 / USI SAC 300 / COR 400",
                k10: "Dimensões e especificações técnicas para acoplamientos Modelo K10.",
                relation: "Tabela de relação entre tubos e acoplamientos K10.",
                couplingThread: "Conexões Tipo Roscado B16.11 - Dimensões em mm"
            },
            bars: {
                flat: "Tabela de pesos e medidas para Barra Chata. Normas: NBR 7007 graus, MR 250 (ASTM A-36), SAE 1045 e 5160.",
                squareRolled: "Tabela de pesos e medidas para Barra Quadrada Laminada.",
                squareDrawn: "Tabela de pesos e medidas para Barra Quadrada Trefilada.",
                roundRolled: "Tabela de pesos e medidas para Barra Redonda Laminada.",
                roundDrawn: "Tabela de pesos e medidas para Barra Redonda Trefilada.",
                hex: "Tabela de pesos e medidas para Barra Sextavada Trefilada.",
                angle: "Tabela de pesos e medidas para Cantoneira de Abas Iguais.",
                iBeam: "Barras com 6 e 12m. Normas: NBR 7007 MR 250 / ASTM A-36",
                uBeam: "Barras com 6 e 12m - Normas: NBR 7007 MR 250 / ASTM A-36",
                uStiffened: "Tabela de especificações para Perfil U Estrutural Enrijecido. Outras medidas e espessuras poderão ser fornecidas sob consulta.",
                uSimple: "Tabela de especificações para Perfil U Estrutural Simples. Outras medidas e espessuras poderão ser fornecidas sob consulta.",
                tee: "Barras com 6m - Normas: NBR 7007 MR 250 / ASTM A-36",
                wBeamH: "Tabela de medidas e pesos para Perfil W Abas Paralelas.",
                wBeamI: "Tabela de medidas e pesos para Perfil W Abas Paralelas (W) I.",
                castIron: "Ferro fundido redondo V-2/V-3/V-4/V-5"
            },
            plates: {
                cold: "Tabela de especificações para Chapa Fina a Frio.",
                hot: "Tabela de especificações para Chapa Fina a Quente.",
                thick: "Tabela de especificações para Chapas Grossas.",
                checker: "Tabela de especificações para Chapa Xadrez.",
                galvanized: "Tabela de especificações para Chapa Zincada.",
                expanded: "Tabela de medidas e pesos para Chapa Expandida.",
                perforated: "Tabela de especificações para Chapa Perfurada com Furos Redondos - Disposição Alternada."
            },
            civil: {
                grating25: "Tabela de especificações para Grades de Piso Industrial - Malha 25 AV.",
                grating30: "Tabela de especificações para Grades de Piso Industrial - Malha 30 AV.",
                mesh: "Tabela de especificações para Tela Soldada Nervurada (Aço CA-60)",
                truss: "Tabela de especificações para Treliças.",
                wire: "Tabela de especificações para Arames Recozidos",
                transferBar: "Tabela de especificações para Barra de Transferência"
            },
            conduits: {
                preGalv: "Tabela de especificações para Eletrolítico Pré-Zincado - Linha Leve, Média e Pesada",
                hotDip: "Tabela de especificações para Eletrolítico Galvanizado à Fogo - Linha Média e Pesada | NBR 5624",
                explosive: "Eletroduto Galvanizado à fogo (RIR) NBR 5597/06 NPT e NBR 5598/09 BSP",
                stainless: "Eletrodutos de Aço Inox Schedule 10 e 40"
            },
            conversion: {
                polMm: "Tabela de conversão de frações de polegada para milímetros."
            }
        }
    },
    infoColumns: {
        title: "Nosso Compromisso com a Excelência",
        tabs: {
            sectors: {
                title: "Setores Diversos",
                description: "O compromisso e a dedicação da Aços Vital, a inovação e a satisfação do cliente nos colocam em destaque no mercado, pois ofertamos produtos que aliam durabilidade, performance e confiabilidade em todos os setores de atuação."
            },
            certifications: {
                title: "Certificações",
                description: "Cumprimos as normas nacionais e internacionais mais rigorosas para garantir máxima qualidade e segurança em cada projeto."
            },
            recognition: {
                title: "Reconhecimento",
                description: "Construímos uma reputação sólida de confiança, trabalhando em parceria com as principais siderúrgicas do país: Arcelor Mittal, Gerdau, Usiminas e CSN."
            }
        }
    },
    callToAction: {
        title: "O que nos torna especiais?",
        subtitle: "Nosso alcance e experiência superior no mercado.",
        description: "Contamos com atendentes, vendedores internos e representantes comerciais devidamente treinados e preparados para atendê-lo com eficiência e agilidade.",
        buttonText: "FALE COM UM CONSULTOR"
    },
    sectors: {
        title: "Setores que Atendemos",
        description: "Aços Vital está presente nas maiores obras e indústrias do Brasil, fornecendo aço de qualidade para diversos segmentos.",
        list: {
            agriculture: "Agricultura",
            architecture_and_design: "Arquitetura e Design",
            automotive: "Automotivo",
            civil_construction: "Construção Civil",
            energy: "Energia",
            naval_industry: "Indústria Naval",
            mining: "Mineração",
            oil_and_gas: "Óleo e Gás",
            pulp_and_paper: "Papel e Celulose",
            petrochemical: "Petroquímico",
            sanitation: "Saneamento",
            steel_industry: "Siderurgia"
        }
    },
    certificationsPage: {
        hero: {
            title: "Qualidade Certificada",
            subtitle: "Compromisso com a excelência e conformidade técnica em todos os processos.",
            imageUrl: "https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-hostgator-brasil-v1-0-0%2F850%2F1911850%2FCU3jUjet%2F5c1f0aff29d040d5999d668eb4419bfa&methods=resize%2C2000%2C5000"
        },
        mainContent: {
            title: "Certificações e Homologações da Aços Vital",
            p1: "A Aços Vital se destaca pela qualidade de seus produtos e serviços, contando com a expertise de sua equipe técnica.",
            p2: "Todo o processo de fabricação conta com tecnologia de ponta, atendendo às normas e aos mais rigorosos padrões de qualificação. Além das certificaciones <b>ISO 9001</b> e <b>CRC Petrobras</b>, que atestam a excelência dos produtos fabricados pela Aços Vital.",
            p3: "Todos os nossos produtos são produzidos nas principais siderúrgicas do país: <b>Arcelor Mittal</b>, <b>Gerdau</b>, <b>Usiminas</b> e <b>CSN</b>.",
        },
        grid: {
            title: "Nossas Certificações",
            subtitle: "Certificados de capacidade técnica e sistema de gestão.",
            items: {
                iso9001: {
                    name: "ISO 9001:2015",
                    issuer: "Bureau Veritas",
                    description: "Certificação de Sistema de Gestão da Qualidade, garantindo padronização e eficiência nos processos.",
                },
                crc_petrobras: {
                    name: "CRC Petrobras",
                    issuer: "Petrobras",
                    description: "Certificado de Registro e Classificação Cadastral, habilitando o fornecimento para a maior estatal do país.",
                },
                ypfb: {
                    name: "YPFB",
                    issuer: "YPFB",
                    description: "Cadastro de Proveedores de Yacimientos Petrolíferos Fiscales Bolivianos, permitindo atuação no mercado boliviano.",
                },
                dun_bradstreet: {
                    name: "Dun & Bradstreet",
                    issuer: "D&B",
                    description: "Identificador universal de empresas, atestando a solidez e confiabilidade comercial.",
                }
            },
            linkText: "Visualizar"
        },
        policy: {
            title: "Objetivos da Qualidade",
            description: "Nossos objetivos visam a satisfação do cliente e o crescimento sustentável.",
            points: [
                "Aumentar a satisfação dos clientes",
                "Garantir a qualidade dos produtos",
                "Capacitar nossos colaboradores",
                "Manter um ambiente de trabalho seguro"
            ],
            imageUrl: "https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-hostgator-brasil-v1-0-0%2F850%2F1911850%2FCU3jUjet%2Fafc82e27a4894ee8ba16231adb5e8f09&methods=resize%2C2000%2C5000"
        }
    },
    contactPage: {
        hero: {
            title: "Fale Conosco",
            subtitle: "Estamos à sua disposição para atender suas dúvidas, críticas ou sugestões.",
        },
        options: {
            title: "Informações de Contato",
            cards: {
                phone: {
                    title: "Telefones",
                    description: "Atendimento comercial e administrativo.",
                },
                address: {
                    title: "Endereço",
                    text: "Rod. Pedro Eroles, nº 1855 – KM49\nJardim Aracy, Mogi das Cruzes - SP\nCEP 08770-490",
                    buttonText: "Ver no Google Maps"
                }
            }
        },
        form: {
            title: "Envie uma Mensagem",
            subtitle: "Preencha o formulário abaixo para solicitar orçamento ou tirar dúvidas.",
            name: "Nome Completo",
            company: "Empresa",
            email: "E-mail Corporativo",
            phone: "Telefone / WhatsApp",
            interest: "Assunto",
            interests: ["Cotação de Materiais", "Dúvidas Técnicas", "Financeiro", "RH", "Outros"],
            message: "Mensagem",
            sendButton: "Enviar Mensagem",
            successTitle: "Mensagem Enviada!",
            successMsg: "Obrigado por entrar em contato. Nossa equipe técnica recebeu sua solicitação e retornará em breve.",
            sendAnother: "Enviar outra mensagem",
            errorMsg: "Não foi possível enviar sua mensagem automaticamente. Por favor, tente via WhatsApp ou e-mail.",
            whatsappButton: "Enviar no WhatsApp",
            whatsappHint: "* Se preferir, utilize o botão do WhatsApp para um atendimento imediato."
        },
        map: {
            title: "Nossa Localização"
        }
    },
    notFoundPage: {
        title: "Página Não Encontrada",
        message: "O conteúdo que você buscou não existe ou foi movido.",
        homeButton: "Voltar ao Início"
    }
};
