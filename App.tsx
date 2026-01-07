import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { useRouter } from './hooks/useRouter';
import LoadingSpinner from './components/common/LoadingSpinner';
import CookieBanner from './components/common/CookieBanner';

// --- 1. DEFINIÇÃO DAS PÁGINAS (VARIAVEIS) ---

// Core Pages
const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ProductsPage = React.lazy(() => import('./pages/ProductsPage'));
const CatalogPage = React.lazy(() => import('./pages/CatalogPage'));
const CertificationsPage = React.lazy(() => import('./pages/CertificationsPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));
const TablesPage = React.lazy(() => import('./pages/TablesPage'));
const CalculatorPage = React.lazy(() => import('./pages/CalculatorPage'));
const PrivacyPolicyPage = React.lazy(() => import('./pages/PrivacyPolicyPage'));

// Subpages (Produtos) - Agora em variáveis individuais
const FlangeProductPage = React.lazy(() => import('./subpages/FlangeProductPage'));
const TubosProductPage = React.lazy(() => import('./subpages/TubosProductPage'));
const ConexoesProductPage = React.lazy(() => import('./subpages/ConexoesProductPage'));
const ValvulasProductPage = React.lazy(() => import('./subpages/ValvulasProductPage'));
const PerfisLaminadosProductPage = React.lazy(() => import('./subpages/PerfisLaminadosProductPage'));
const ChapasProductPage = React.lazy(() => import('./subpages/ChapasProductPage'));
const GradesPisoProductPage = React.lazy(() => import('./subpages/GradesPisoProductPage'));
const TelhasTrapezoidaisProductPage = React.lazy(() => import('./subpages/TelhasTrapezoidaisProductPage'));
const CivilProductPage = React.lazy(() => import('./subpages/CivilProductPage'));
const CaldeirariaProductPage = React.lazy(() => import('./subpages/CaldeirariaProductPage'));
const OxicorteProductPage = React.lazy(() => import('./subpages/OxicorteProductPage'));
const EletrodutosProductPage = React.lazy(() => import('./subpages/EletrodutosProductPage'));
const GroovedProductPage = React.lazy(() => import('./subpages/GroovedProductPage'));
const TanqueCombustivelProductPage = React.lazy(() => import('./subpages/TanqueCombustivelProductPage'));

// --- 2. CONFIGURAÇÃO DA PÁGINA INICIAL ---
// Mude a variável abaixo para escolher qual página abre no Root (#/)
// Exemplo: Troque 'CalculatorPage' por 'FlangeProductPage' para testar flanges na home.

const PaginaPrincipal = CalculatorPage; 

// --- 3. MAPEAMENTO DE ROTAS ---

const routes: { [key: string]: React.ComponentType } = {
    // A rota raiz agora obedece a variável configurada acima
    '#/': TablesPage,

    // Rotas Fixas
    '#/home': HomePage,
    '#/about': AboutPage,
    '#/products': ProductsPage,
    '#/catalog': CatalogPage,
    '#/tables': TablesPage,
    '#/calculator': CalculatorPage,
    '#/certifications': CertificationsPage,
    '#/contact': ContactPage,
    '#/privacy': PrivacyPolicyPage,
    
    // Rotas de Produtos (Subpáginas)
    '#/products/flanges': FlangeProductPage, 
    '#/products/tubos': TubosProductPage,
    '#/products/conexoes': ConexoesProductPage, 
    '#/products/valvulas': ValvulasProductPage, 
    '#/products/perfis': PerfisLaminadosProductPage, // ###
    '#/products/chapas': ChapasProductPage, 
    '#/products/grades': GradesPisoProductPage,
    '#/products/telhas': TelhasTrapezoidaisProductPage,
    '#/products/civil': CivilProductPage, 
    '#/products/caldeiraria': CaldeirariaProductPage, 
    '#/products/oxicorte': OxicorteProductPage, 
    '#/products/eletrodutos': EletrodutosProductPage, 
    '#/products/grooved': GroovedProductPage, 
    '#/products/tanques': TanqueCombustivelProductPage,
};

const App: React.FC = () => {
    const route = useRouter();
    const Page = routes[route] || NotFoundPage;
    
    return (
        // The outer div has bg-brand-blue-dark.
        // The main container intentionally DOES NOT have a background color (removed bg-white).
        // This ensures that if there's a pixel gap between header and content, it shows blue (blending with header)
        // instead of a white line. Page components handle their own backgrounds.
        <div className="bg-brand-blue-dark font-sans text-gray-800 flex flex-col min-h-screen w-full overflow-x-hidden relative">
            <Header />
            {/* Padding Adjustment:
                Mobile: TopBar (~32px) + Header (~82px) = ~114px
                Desktop: TopBar (~32px) + Header (~92px) = ~124px
                
                Note: We match exact pixel heights to ensure content starts exactly where header ends.
            */}
            <main className="flex-grow pt-[114px] lg:pt-[124px] w-full flex flex-col">
                <React.Suspense fallback={<LoadingSpinner />}>
                    <Page />
                </React.Suspense>
            </main>
            <Footer />
            <CookieBanner />
        </div>
    );
};

export default App;