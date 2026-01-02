
import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { useRouter } from './hooks/useRouter';
import LoadingSpinner from './components/common/LoadingSpinner';
import CookieBanner from './components/common/CookieBanner';

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

const routes: { [key: string]: React.ComponentType } = {
    '#/': HomePage,
    '#/home': HomePage,
    '#/about': AboutPage,
    '#/products': ProductsPage,
    '#/catalog': CatalogPage,
    '#/tables': TablesPage,
    '#/calculator': CalculatorPage,
    '#/certifications': CertificationsPage,
    '#/contact': ContactPage,
    '#/privacy': PrivacyPolicyPage,
    
    // Product Routes
    '#/products/flanges': React.lazy(() => import('./subpages/FlangeProductPage')), 
    '#/products/tubos': React.lazy(() => import('./subpages/TubosProductPage')), 
    '#/products/conexoes': React.lazy(() => import('./subpages/ConexoesProductPage')), 
    '#/products/valvulas': React.lazy(() => import('./subpages/ValvulasProductPage')), 
    '#/products/perfis': React.lazy(() => import('./subpages/PerfisLaminadosProductPage')), 
    '#/products/chapas': React.lazy(() => import('./subpages/ChapasProductPage')), 
    '#/products/grades': React.lazy(() => import('./subpages/GradesPisoProductPage')),
    '#/products/telhas': React.lazy(() => import('./subpages/TelhasTrapezoidaisProductPage')),
    '#/products/civil': React.lazy(() => import('./subpages/CivilProductPage')), 
    '#/products/caldeiraria': React.lazy(() => import('./subpages/CaldeirariaProductPage')), 
    '#/products/oxicorte': React.lazy(() => import('./subpages/OxicorteProductPage')), 
    '#/products/eletrodutos': React.lazy(() => import('./subpages/EletrodutosProductPage')), 
    '#/products/grooved': React.lazy(() => import('./subpages/GroovedProductPage')), 
    '#/products/tanques': React.lazy(() => import('./subpages/TanqueCombustivelProductPage')),
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
            {/* 
                Padding Adjustment:
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
