
// ==========================================================================
// ARQUIVO DE TRADUÇÃO: INGLÊS (EN)
// ==========================================================================

import { pt } from './pt';

export const en = {
    // ... existing translations ...
    layout: {
        schedule: "Mon - Fri: 08:00 - 18:00",
        menu: "Main Menu",
        searchPlaceholder: "Search products, tables...",
        departments: "Departments",
        viewAll: "View All",
        viewSpecs: "View specifications",
        catalogCall: "Complete Technical Catalog",
        catalogDesc: "Access all measurement tables, standards, and specifications in a single PDF document.",
        downloadNow: "Download Now",
        updated: "Updated 2025",
        close: "Close",
        list: "List",
        navigation: "Navigation"
    },
    header: {
      navLinks: {
        home: 'HOME',
        about: 'ABOUT US',
        products: 'PRODUCTS',
        catalog: 'CATALOG',
        calculator: 'CALCULATOR',
        tables: 'TABLES',
        certifications: 'CERTIFICATIONS',
        contact: 'CONTACT',
      },
      whatsapp: 'WHATSAPP',
      mobileGroups: {
          tubular: "Piping & Lines",
          tubularDesc: "Tubes, Conduits and Grooved",
          connections: "Fittings & Valves",
          connectionsDesc: "Flanges, Fittings and Valves",
          structural: "Structural & Civil Steel",
          structuralDesc: "Profiles, Plates, Gratings and Tiles",
          industrial: "Industrial Solutions",
          industrialDesc: "Cutting, Tanks and Boilermaking"
      },
      mobileLinks: {
          downloadCatalog: "Download Full Catalog",
          calculatorTitle: "Steel Calculator",
          calculatorDesc: "Tool",
          tablesTitle: "Technical Tables",
          tablesDesc: "Standards & Measurements",
          contact: "Contact Us",
          whatsappSupport: "WhatsApp Support"
      }
    },
    footer: {
        slogan: "Trust is what connects us!",
        pagesTitle: "Pages",
        followUsTitle: "Follow Us",
        privacyPolicy: "Privacy Policy",
        terms: "Terms of Use"
    },
    privacy: {
        title: "Privacy Policy",
        lastUpdated: "Last updated: March 2025",
        intro: "Aços Vital values the security and privacy of its users. This Privacy Policy describes how we collect, use, and protect your information, in compliance with the General Data Protection Law (LGPD - Law No. 13,709/2018).",
        sections: {
            collection: {
                title: "1. Data Collection",
                text: "We collect personal information that you voluntarily provide to us when using our contact forms, requesting quotes, or using our calculators. This may include name, email, phone number, and company name."
            },
            usage: {
                title: "2. Use of Information",
                text: "We use your data to: respond to your requests, send quotes, improve our products and services, and, if authorized, send relevant marketing communications."
            },
            cookies: {
                title: "3. Cookies and Technologies",
                text: "We use cookies to improve browsing experience, analyze site traffic, and personalize content. You can manage your cookie preferences through your browser settings."
            },
            security: {
                title: "4. Security",
                text: "We adopt appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction."
            },
            rights: {
                title: "5. Your Rights (LGPD)",
                text: "You have the right to confirm the existence of data processing, access your data, correct incomplete or outdated data, and request the deletion of personal data processed with your consent."
            },
            contact: {
                title: "6. Contact",
                text: "To exercise your rights or ask questions about this policy, contact us via email: lgpd@acosvital.com.br"
            }
        },
        cookieBanner: {
            text: "We use cookies to improve your experience and analyze site traffic. By continuing to browse, you agree to our",
            link: "Privacy Policy",
            accept: "Accept Cookies",
            decline: "Decline"
        }
    },
    // ... (REST OF THE FILE IS IDENTICAL TO PREVIOUS VERSION)
    // ...
    calculatorPage: {
        title: "Vital Steel Suite",
        subtitle: "Engineering Workstation v5.0",
        tabs: {
            calculator: "Steel Calculator",
            nesting: "Cutting Optimizer",
            sheetMetal: "Unfolding",
            bending: "Bending Calc",
            welding: "Welding Estimator",
            converter: "Unit Converter"
        },
        common: {
            selection: "Selection",
            console: "Engineering Console",
            telemetry: "Telemetry",
            presets: "Measurement Presets",
            presetsHelp: "Select a field above and click a preset to apply.",
            surfaceArea: "Surface Area",
            density: "Density",
            totalWeight: "Total Weight",
            unitWeight: "Unit Weight",
            totalArea: "Total Area",
            addToList: "Add to List",
            materialList: "Material List",
            print: "Print",
            share: "Share",
            clear: "Clear",
            emptyList: "No items added.",
            projectTotal: "Project Total",
            requestQuote: "Request Quote",
            waiting: "Waiting for Calculation",
            selectItem: "Select an item to calculate"
        },
        toolDescriptions: {
            calculator: "Calculate theoretical weight of plates, tubes, bars, and complex profiles. Essential for material planning, budgeting, and logistics.",
            nesting: "Optimize linear cutting of bars and profiles. Reduce material waste (scrap) by calculating the best usage of stock bars.",
            sheetMetal: "Calculate the unfolding (blank) of plates for cone manufacturing. Essential tool for boilermaking.",
            bending: "Calculate the exact cut size (blank) considering bend deduction, K-factor, and tolerances for bent plates.",
            welding: "Estimate the amount of welding consumable required for different joint types. Ideal for welding cost planning.",
            converter: "Quickly convert common industrial engineering measurement units (mm, in, kg, lb, psi, bar) to ease your daily work."
        },
        sheetMetal: {
            title: "Cone Unfolding",
            subtitle: "Development calculation for boilermaking",
            dimensions: "Cone Dimensions",
            results: "Unfolding Result",
            memory: "Calculation Memory",
            theory: "Calculation based on Euclidean geometry for development of solids of revolution (Concentric Cones).",
            inputs: {
                D: "Larger Ø (D)",
                d: "Smaller Ø (d)",
                H: "Height (H)",
                T: "Thickness (T)"
            },
            outputs: {
                radiusLarge: "Large Radius (Compass)",
                radiusSmall: "Small Radius",
                angle: "Sector Angle",
                slantHeight: "Slant Height",
                chordLarge: "Large Chord (Layout)"
            },
            formulas: {
                title: "Unfolding Math",
                slantHeight: "Slant Height (g)",
                slantDesc: "Calculated via Pythagoras using height and radius difference.",
                patternRadius: "Pattern Radius (R_pad)",
                angle: "Sector Angle (θ)",
                angleDesc: "The proportion of the base circumference relative to the development circle.",
                formulaG: "g = √[H² + (R - r)²]",
                formulaTheta: "θ = 360° × (R / g)"
            }
        },
        bending: {
            title: "Bending Calculator",
            subtitle: "Bend deduction and K-Factor",
            params: "Bending Parameters",
            blankSize: "Blank Size (Cut)",
            theory: "Theory",
            inputs: {
                thickness: "Thickness (T)",
                radius: "Int. Radius (R)",
                angle: "Angle (°)",
                kFactor: "K-Factor",
                leg1: "Leg 1",
                leg2: "Leg 2"
            },
            outputs: {
                deduction: "Deduction (BD)",
                allowance: "Allowance (BA)"
            }
        },
        formulas: {
            title: "Understand the Calculation",
            general: "Weight is calculated by multiplying material volume by its specific density.",
            plate: "Weight = Width × Length × Thickness × Density",
            barRound: "Weight = π × (Radius)² × Length × Density",
            barSquare: "Weight = Side² × Length × Density",
            tube: "Weight = π × (R_out² - R_in²) × Length × Density",
            grating: "Weight = (Bar Weight + 15% Crossbars) × Area",
            variables: {
                density: "Density (ρ)",
                volume: "Volume (V)",
                area: "Cross-sectional Area (A)"
            }
        },
        calendering: {
            title: "Manufacturing (Unfolding)",
            devLength: "Plate Length (Development)",
            sheetWidth: "Plate Width",
            explanation: "Plate development is calculated based on the material's neutral axis (Mean Diameter).",
            formula: "L = (OD - T) × π",
            neutralAxis: "Neutral Axis",
            logistics: "Logistics Data"
        },
        selectProduct: "Select Operation",
        selectMaterial: "Material",
        categories: {
            raw: "Raw Material",
            piping: "Boilermaking & Piping",
            structural: "Industrial & Structural"
        },
        inputs: {
            thickness: "Thickness",
            width: "Width",
            length: "Length",
            outerDiameter: "Outer Diameter",
            innerDiameter: "Inner Diameter",
            wallThickness: "Wall",
            height: "Height",
            diameter: "Diameter",
            quantity: "Quantity",
            angle: "Angle (°)",
            pitch: "Mesh Pitch",
            strandWidth: "Strand",
            meshSWD: "Mesh SWD",
            radius: "Center Radius",
            side: "Side",
            barHeight: "Bar Height",
            barThickness: "Bar Thickness",
            mesh: "Mesh",
            gap: "Gap"
        },
        products: {
            plate: "Plate",
            tubeRound: "Industrial Tube",
            barRound: "Round Bar",
            barSquare: "Square Bar",
            flangeSquare: "Ring (Plate Cut)",
            grating: "Floor Grating",
            tubeCalendered: "Calendered Tube",
            expandedMetal: "Expanded Metal",
            fittingElbow: "Elbow/Miter",
            fittingReducer: "Reducer",
            fittingTee: "Tee"
        },
        materials: {
            carbon: "Carbon Steel (7.85)",
            inox304: "Stainless 304 (7.93)",
            inox316: "Stainless 316 (7.98)",
            aluminum: "Aluminum (2.70)"
        },
        painting: {
            title: "Painting and Coating",
            coverage: "Coverage (m²/L)",
            coats: "Coats",
            density: "Paint Density (kg/L)",
            volume: "Paint Vol.",
            weight: "Paint Weight"
        },
        result: {
            weightPerPiece: "Unit Weight",
            totalWeight: "Total Weight",
            developedLength: "Development (L)",
            unit: "kg",
            surfaceArea: "Paint Area",
            grossWeight: "Gross Weight (Plate)",
            netWeight: "Net Weight (Ring)",
            scrap: "Scrap Rate",
            arcOuter: "Outer Arc",
            arcCenter: "Center Arc",
            arcInner: "Inner Arc",
            projectData: "PROJECT DATA",
            material: "MATERIAL",
            density: "DENSITY",
            date: "DATE"
        },
        calculate: "CALCULATE",
        clear: "CLEAR FIELDS",
        project: {
            title: "Bill of Materials (BOM)",
            empty: "No items added to project.",
            add: "Add to Project",
            total: "Project Total Weight",
            export: "Print List",
            quoteButton: "Quote on WhatsApp",
            pdfButton: "Generate PDF / Print",
            clear: "Clear Project",
            item: "Item",
            qty: "Qty",
            weight: "Weight",
            actions: "Actions"
        },
        nesting: {
            title: "Linear Cutting Optimizer",
            barLength: "Standard Bar Length",
            bladeWidth: "Cutting Width / Kerf",
            linearWeight: "Linear Weight (kg/m) - Optional",
            cutList: "Cut List",
            length: "Piece Length",
            qty: "Qty",
            add: "Add",
            addPieces: "Add Pieces",
            calculateBtn: "Calculate Optimization",
            params: "Stock Parameters",
            waiting: "Waiting for Calculation",
            waitingDesc: "Add the pieces you want to cut to the list and define your stock bar size.",
            helpTitle: "How to use the Optimizer",
            helpText: "This tool uses a 'Best Fit Decreasing' algorithm to organize pieces into available stock bars. Enter the total length of the stock bar you have and the cutting blade thickness (loss). If you wish to calculate total scrap and material weight, fill in the 'Linear Weight' field.",
            errorLength: "Error: Piece length (+ cut) cannot be greater than stock bar.",
            results: {
                totalBars: "Total Bars",
                totalWaste: "Total Waste",
                barUsage: "Usage",
                weightUsed: "Material Weight",
                weightScrap: "Scrap Weight",
                scraps: "Scraps",
                efficiency: "Efficiency",
                cutPlan: "Cut Plan",
                hoverDetails: "Hover to see details"
            },
            table: {
                bar: "Bar",
                cuts: "Cuts in this bar (mm)",
                waste: "Leftover (Scrap)"
            },
            explanation: {
                title: "Understand Optimization Calculation",
                concept: "The calculation uses a heuristic algorithm (Best Fit Decreasing) to solve the one-dimensional 'Cutting Stock Problem'. The goal is to minimize the number of bars used and material waste.",
                glossary: {
                    stock: { title: "Bar Size", desc: "Total length of virgin bar available in stock (e.g., 6000mm or 12000mm)." },
                    blade: { title: "Cutting Width", desc: "Material lost at each cut due to blade or saw thickness (kerf). Usually between 3mm and 5mm." },
                    waste: { title: "Leftover (Scrap)", desc: "Final piece of the bar not sufficient to produce new pieces. Calculated as: Total Bar - (Sum of Pieces + Cutting Losses)." },
                    weight: { title: "Linear Weight", desc: "Mass of the bar per meter (kg/m). Allows calculating total purchased material weight and wasted scrap weight." }
                }
            }
        },
        welding: {
            title: "Welding Calculator",
            helpTitle: "Estimation Parameters",
            helpText: "This tool estimates the required consumable amount based on cross-sectional area and selected material density. Deposition efficiency is not considered, providing the net weight of deposited metal.",
            jointType: "Joint Type",
            types: {
                fillet: "Fillet",
                buttV: "V-Butt (Single V)",
                buttX: "X-Butt (Double V)"
            },
            inputs: {
                legSize: "Fillet Leg (z)",
                thickness: "Plate Thickness (t)",
                length: "Weld Length",
                gap: "Root Opening (g)",
                angle: "Bevel Angle (α)",
                reinforcement: "Reinforcement / Over-metal"
            },
            results: {
                weight: "Estimated Weight",
                volume: "Weld Volume"
            },
            explanation: {
                title: "Welding Technical Guide",
                concept: "Weld metal weight is calculated by determining the volume of the bead cross-sectional area multiplied by its length and steel density (approx. 7.85 g/cm³).",
                glossary: {
                    z: { title: "Leg (z)", desc: "Length of the triangle side in a fillet weld. Determines joint strength." },
                    g: { title: "Root Opening (g)", desc: "Minimum distance between pieces to be welded. Allows full weld penetration." },
                    alpha: { title: "Bevel Angle (α)", desc: "Opening angle between prepared plates. Usually 60° for V-joints." },
                    r: { title: "Reinforcement", desc: "Over-metal or convexity of the weld bead above the plate surface, expressed as a percentage (usually 10-20%)." }
                }
            }
        },
        converter: {
            title: "Universal Converter",
            categories: {
                length: "Length",
                weight: "Mass / Weight",
                area: "Area",
                pressure: "Pressure",
                dn: "Nominal Diameter" // ADDED
            },
            units: {
                mm: "Millimeters (mm)",
                cm: "Centimeters (cm)",
                m: "Meters (m)",
                in: "Inches (in)",
                ft: "Feet (ft)",
                kg: "Kilograms (kg)",
                lb: "Pounds (lb)",
                ton: "Tons (t)",
                m2: "Square Meters (m²)",
                cm2: "Square Centimeters (cm²)",
                ft2: "Square Feet (ft²)",
                in2: "Square Inches (in²)",
                bar: "Bar",
                psi: "PSI (lbf/in²)",
                mpa: "MegaPascal (MPa)",
                kgfcm2: "kgf/cm²"
            },
            labels: {
                from: "From",
                to: "To",
                value: "Value",
                result: "Result"
            },
            footer: "Nominal Conversion (Pipe Table) - Ex: 1/2\" = 15mm | 14\" = 350mm"
        }
    },
    hero: {
      slides: {
        entressafra: {
            title: 'Off-season: Stop your plant, not your production!',
            subtitle: 'The off-season is short. Each day stopped costs millions.',
            buttonText: 'Our Solutions'
        },
        trapezoidal: {
            title: 'Trapezoidal Tiles',
            subtitle: 'Maximum protection, modern design. The strength your project needs.',
            buttonText: 'Trapezoidal Line'
        },
        excellence: {
            title: 'Steel Excellence: Trust is what connects us!',
            subtitle: 'Plates, Pipes, Flanges, Fittings, and General Steel. We bring innovative solutions for complex challenges!',
            buttonText: 'Explore Products'
        },
        flanges: {
            title: 'Steel Excellence: Trust is what connects us!',
            subtitle: 'Plates, Pipes, Flanges, Fittings, and General Steel. We bring innovative solutions for complex challenges!',
            buttonText: 'View Flanges'
        },
        flooring: {
            title: 'Floor Gratings and Plates',
            subtitle: 'Safety and versatility for your industry. Robust and durable solutions.',
            buttonText: 'Meet Our Floorings'
        }
      },
      scrollText: 'Scroll Down'
    },
    about: {
        title: 'Trust is what connects us!',
        p1: 'Aços Vital stands out as a manufacturer of Flanges, Mitered Fittings, Calendered Pipes, Expanded Metal, and Floor Gratings with the highest quality to meet the demands of the industrial and construction sectors.',
        p2: 'We are recognized for the excellence and precision of our products, as well as our unwavering commitment to quality and continuous process improvement, offering custom solutions that meet the specific needs of each client, ensuring high performance.',
        p3: 'Our strategic process is optimized and executed with excellence, covering everything from personalized customer service to product delivery. We have trained and qualified professionals to serve diverse segments. Such decisive factors put us ahead of the competition, as we offer durability, performance, and reliability with a differentiated delivery time.',
        p4: 'We are the reliable partner that unites a high-performance technical team, extremely high-quality products, and incomparable finishing. Aços Vital is the best decision for your business.',
        callToAction: {
             buttonText: "TALK TO A CONSULTANT"
        }
    },
    features: {
        list: {
            fast_delivery: { title: "Fast and Flexible Delivery", description: "Agile production and optimized logistics to meet your deadlines nationwide." },
            certified_quality: { title: "Certified Quality", description: "Our products follow the highest standards, with ISO 9001, CRC Petrobras, and YPFB." },
            global_reach: { title: "Global Reach", description: "We serve clients in Brazil and abroad with excellence, taking our solutions across borders." },
            satisfied_clients: { title: "+2,000 Satisfied Clients", description: "The trust of thousands of clients annually, proving our dedication and quality." }
        }
    },
    pillars: {
        subtitle: "WHO WE ARE AND WHAT WE SEEK?",
        title: "Our Pillars",
        list: {
            mission: { title: "MISSION", description: "The company delivers high-quality steel products, strengthening partnerships, promoting sustainable growth." },
            vision: { title: "VISION", description: "To be a national reference in steel products, standing out for quality, innovation, and sustainability." },
            values: { title: "VALUES", description: "Quality, innovation, sustainability, partnership, and safety." }
        }
    },
    units: {
        subtitle: "ABOUT US",
        title: "Where we operate",
    },
    history: {
        title: "A story of overcoming!",
        youtubeUrl: "https://www.youtube.com/embed/Vt8dUUSsSZA?si=HsCaIShmSAQVrNhS",
        stats: {
            clients: { value: "+2K", label: "Clients Annually" },
            factory_area: { value: "36K m²", label: "Total Factory Area" },
            employees: { value: "+200", label: "Employees" },
            factories: { value: "4", label: "Own Factories" }
        }
    },
    aboutPage: {
        hero: {
            title: 'About Us',
        }
    },
    featuredProducts: {
        title: 'Featured Products',
        items: {
            flanges: 'Flange',
            tubes: 'Steel Tubes',
            boilermaking: 'INDUSTRIAL BOILERMAKING',
            plates: 'Steel Plates',
            fittings: 'Steel Fittings',
            valves: 'VALVES',
            profiles: 'LAMINATED AND FOLDED PROFILES',
            gratings: 'FLOOR GRATINGS',
            tiles: 'TRAPEZOIDAL TILE',
            civil: 'CIVIL CONSTRUCTION',
            cutting: 'OXY-CUTTING',
            conduits: 'CONDUITS',
            grooved: 'GROOVED LINE',
            tanks: 'FUEL AND LPG TANK',
        },
        viewDetails: 'View Details',
        onRequest: 'On Request'
    },
    productsPage: {
      title: 'Product Catalog',
      description: 'Discover our complete product catalog, developed to meet the demands of the industrial and construction segments with excellence and guaranteed quality. Ready to strengthen your projects with safety, resistance, and precision. We follow the strictest manufacturing standards, from raw material acquisition, receiving, storage, cutting, processing, and inspection.',
      buttonText: 'View Product',
      categories: {
        flanges: 'FLANGES',
        tubes: 'TUBES',
        fittings: 'FITTINGS',
        valves: 'VALVES',
        profiles: 'LAMINATED AND FOLDED PROFILES',
        plates: 'PLATES',
        gratings: 'FLOOR GRATINGS',
        tiles: 'TRAPEZOIDAL TILE',
        civil: 'CIVIL CONSTRUCTION',
        boilermaking: 'INDUSTRIAL BOILERMAKING',
        cutting: 'OXY-CUTTING',
        conduits: 'CONDUITS',
        grooved: 'GROOVED LINE',
        tanks: 'FUEL AND LPG TANK',
      },
      catalogPdfUrl: "https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/pdf/Catalogo%201%20-%20Flanges,%20Conexoes,%20Valvulas%20e%20Tubos%20-%20Acos%20Vital%20Ed.4.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9wZGYvQ2F0YWxvZ28gMSAtIEZsYW5nZXMsIENvbmV4b2VzLCBWYWx2dWxhcyBlIFR1Ym9zIC0gQWNvcyBWaXRhbCBFZC40LnBkZiIsImlhdCI6MTc2NDg3MTE5OCwiZXhwIjoxNzk2NDA3MTk4fQ.k4RWJgWBKsu5Rq6jP0RJv2wzJ-M8tGCMvmtV2YRU8E0"
    },
    catalogPage: {
      links: {
        products: {
            title: "Discover our product line",
            buttonText: "View Products",
        },
        tables: {
            title: "Access measurement tables",
            buttonText: "Access Tables",
        }
      }
    },
    tablesPage: {
        title: "Technical Tables and Specifications",
        subtitle: "Consult measurements, weights, and technical standards of our main products.",
        sidebarFooter: "Aços Vital Digital Catalog",
        search: {
            label: "Search Tables",
            placeholder: "Name, dimension, standard...",
            results: "results",
            helper: "Searching in titles and table content...",
            noResultsTitle: "No tables found",
            noResultsText: "Try another search term.",
            clear: "Clear search",
            filterPlaceholder: "Filter data in this table (e.g. 21.3)",
            filterActive: "Active Filter",
            filterNoResultsTitle: "No results found",
            filterNoResultsText: "We found no data matching \"{{term}}\" in this table.",
            filterClear: "Clear Filter",
            showingRecords: "Showing {{count}} of {{total}} records",
            selectPromptTitle: "Select a Table",
            selectPromptText: "Navigate through the sidebar menu to find technical specifications, dimensions, and standards."
        },
        gallery: {
            title: "Technical Gallery",
            subtitle: "Drawings and visual legends",
            item: "item",
            items: "items",
            figure: "Figure",
            technicalView: "Technical View",
            zoom: "Zoom",
            helpText: "Use the alphabetical labels (A, B, C...) presentes in the diagrams above as a reference to identify the corresponding columns in the specification table. Click on the image to view in high resolution.",
            altDiagram: "Technical diagram {{index}} for {{tableName}}",
            closeHint: "Press <kbd>ESC</kbd> to close",
            enlargedView: "Enlarged view"
        }
    },
    tables: pt.tables,
    infoColumns: {
        title: "Our Commitment to Excellence",
        tabs: {
            sectors: {
                title: "Diverse Sectors",
                description: "The commitment and dedication of Aços Vital, innovation, and customer satisfaction place us in the spotlight in the market, as we offer products that combine durability, performance, and reliability across all operating sectors."
            },
            certifications: {
                title: "Certifications",
                description: "We meet the strictest national and international standards to ensure maximum quality and safety in every project."
            },
            recognition: {
                title: "Recognition",
                description: "We have built a solid reputation of trust, working in partnership with the main steel mills in the country: Arcelor Mittal, Gerdau, Usiminas, and CSN."
            }
        }
    },
    callToAction: {
        title: "What makes us special?",
        subtitle: "Our reach and superior experience in the market.",
        description: "We have customer service representatives, internal salespeople, and commercial representatives duly trained and prepared to serve you with efficiency and agility.",
        buttonText: "TALK TO A CONSULTANT"
    },
    sectors: {
        title: "Sectors We Serve",
        description: "Aços Vital is present in the largest works and industries in Brazil, supplying quality steel for various segments.",
        list: {
            agriculture: "Agriculture",
            architecture_and_design: "Architecture and Design",
            automotive: "Automotive",
            civil_construction: "Civil Construction",
            energy: "Energy",
            naval_industry: "Naval Industry",
            mining: "Mining",
            oil_and_gas: "Oil & Gas",
            pulp_and_paper: "Pulp & Paper",
            petrochemical: "Petrochemical",
            sanitation: "Sanitation",
            steel_industry: "Steel Industry"
        }
    },
    certificationsPage: {
        hero: {
            title: "Certified Quality",
            subtitle: "Commitment to excellence and technical compliance in all processes.",
            imageUrl: "https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-hostgator-brasil-v1-0-0%2F850%2F1911850%2FCU3jUjet%2F5c1f0aff29d040d5999d668eb4419bfa&methods=resize%2C2000%2C5000"
        },
        mainContent: {
            title: "Certifications and Accreditations of Aços Vital",
            p1: "Aços Vital stands out for the quality of its products and services, relying on the expertise of its technical team.",
            p2: "The entire manufacturing process relies on cutting-edge technology, meeting standards and the strictest qualification standards. In addition to <b>ISO 9001</b> and <b>CRC Petrobras</b>, which attest to the excellence of the products manufactured by Aços Vital.",
            p3: "All our products are produced in the main steel mills in the country: <b>Arcelor Mittal</b>, <b>Gerdau</b>, <b>Usiminas</b>, and <b>CSN</b>.",
        },
        grid: {
            title: "Our Certifications",
            subtitle: "Certificates of technical capacity and management system.",
            items: {
                iso9001: {
                    name: "ISO 9001:2015",
                    issuer: "Bureau Veritas",
                    description: "Quality Management System Certification, ensuring standardization and efficiency in processes.",
                },
                crc_petrobras: {
                    name: "CRC Petrobras",
                    issuer: "Petrobras",
                    description: "Certificate of Registration and Classification, enabling supply to the country's largest state-owned company.",
                },
                ypfb: {
                    name: "YPFB",
                    issuer: "YPFB",
                    description: "Registration of Suppliers for Yacimientos Petrolíferos Fiscales Bolivianos, allowing operations in the Bolivian market.",
                },
                dun_bradstreet: {
                    name: "Dun & Bradstreet",
                    issuer: "D&B",
                    description: "Universal business identifier, attesting to commercial solidity and reliability.",
                }
            },
            linkText: "View"
        },
        policy: {
            title: "Quality Objectives",
            description: "Our objectives aim at customer satisfaction and sustainable growth.",
            points: [
                "Increase customer satisfaction",
                "Ensure product quality",
                "Train our employees",
                "Maintain a safe work environment"
            ],
            imageUrl: "https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-hostgator-brasil-v1-0-0%2F850%2F1911850%2FCU3jUjet%2Fafc82e27a4894ee8ba16231adb5e8f09&methods=resize%2C2000%2C5000"
        }
    },
    contactPage: {
        hero: {
            title: "Contact Us",
            subtitle: "We are at your disposal to answer your questions, criticisms, or suggestions.",
        },
        options: {
            title: "Contact Information",
            cards: {
                phone: {
                    title: "Phones",
                    description: "Commercial and administrative service.",
                },
                address: {
                    title: "Address",
                    text: "Rod. Pedro Eroles, nº 1855 – KM49\nJardim Aracy, Mogi das Cruzes - SP\nCEP 08770-490",
                    buttonText: "View on Google Maps"
                }
            }
        },
        form: {
            title: "Send a Message",
            subtitle: "Fill out the form below to request a quote or ask questions.",
            name: "Full Name",
            company: "Company",
            email: "Corporate E-mail",
            phone: "Phone / WhatsApp",
            interest: "Subject",
            interests: ["Material Quote", "Technical Questions", "Finance", "HR", "Other"],
            message: "Message",
            sendButton: "Send Message",
            successTitle: "Message Sent!",
            successMsg: "Thank you for contacting us. Our technical team has received your request and will return shortly.",
            sendAnother: "Send another message",
            errorMsg: "Could not send your message automatically. Please try via WhatsApp or email.",
            whatsappButton: "Send on WhatsApp",
            whatsappHint: "* If you prefer, use the WhatsApp button for immediate service."
        },
        map: {
            title: "Our Location"
        }
    },
    notFoundPage: {
        title: "Page Not Found",
        message: "The content you searched for does not exist or has been moved.",
        homeButton: "Back to Home"
    }
};
