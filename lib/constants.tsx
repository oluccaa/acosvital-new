
import React from 'react';
import { Award, Globe, Truck, Users, Building2, ShieldCheck, Medal, Target, Lightbulb, Handshake, AreaChart, Briefcase, Factory, Phone, MapPin } from 'lucide-react';
import { ASSETS } from './media';

export const SOCIAL_LINKS = [
    { key: "facebook", href: "#" },
    { key: "instagram", href: "#" },
    { key: "linkedin", href: "#" },
    { key: "youtube", href: "#" },
];

export const NAV_LINKS = [
  { key: 'home', href: '#/' },
  { key: 'about', href: '#/about' },
  { key: 'products', href: '#/products' },
  { key: 'catalog', href: '#/catalog' },
  { key: 'calculator', href: '#/calculator' },
  { key: 'certifications', href: '#/certifications' },
  { key: 'contact', href: '#/contact' },
];

export const FEATURES_LIST = [
    { id: 'fast_delivery', icon: <Truck size={24} className="text-white" /> },
    { id: 'certified_quality', icon: <Award size={24} className="text-white" /> },
    { id: 'global_reach', icon: <Globe size={24} className="text-white" /> },
    { id: 'satisfied_clients', icon: <Users size={24} className="text-white" /> }
];

export const PILLARS_LIST = [
    { id: 'mission', icon: <Target size={32} className="text-white" /> },
    { id: 'vision', icon: <Lightbulb size={32} className="text-white" /> },
    { id: 'values', icon: <Handshake size={32} className="text-white" /> }
];

export const STATS_LIST = [
    { id: 'clients', icon: <Users size={40} strokeWidth={1.5} /> },
    { id: 'factory_area', icon: <AreaChart size={40} strokeWidth={1.5} /> },
    { id: 'employees', icon: <Briefcase size={40} strokeWidth={1.5} /> },
    { id: 'factories', icon: <Factory size={40} strokeWidth={1.5} /> }
];

export const INFO_COLUMNS_TABS = [
    {
        id: "sectors",
        icon: <Building2 size={24} className="text-white" />,
    },
    {
        id: "certifications",
        icon: <ShieldCheck size={24} className="text-white" />,
        items: ["ISO 9001:2015", "CRC Petrobrás", "YPFB", "AWS", "ASME"]
    },
    {
        id: "recognition",
        icon: <Medal size={24} className="text-white" />,
    }
];

export const CERTIFICATIONS_LIST = [
    {
        id: "iso9001",
        logoUrl: ASSETS.CERTIFICATIONS_LOGOS.ISO9001,
    },
    {
        id: "crc_petrobras",
        logoUrl: ASSETS.CERTIFICATIONS_LOGOS.CRC,
    },
    {
        id: "ypfb",
        logoUrl: ASSETS.CERTIFICATIONS_LOGOS.YPFB
    }
];

export const CONTACT_CARDS = [
    {
        id: "phone",
        icon: <Phone size={22} />,
        phone: "(11) 4797-2352",
        whatsapp: "(11) 4797-2352"
    },
    {
        id: "address",
        icon: <MapPin size={22} />,
        buttonLink: "https://maps.app.goo.gl/gEau6YhhhjT1KMvb7"
    }
];

export const SECTORS_LIST = [
  { id: 'agriculture', imgSrc: ASSETS.SECTORS.AGRICULTURE },              
  { id: 'architecture_and_design', imgSrc: ASSETS.SECTORS.ARCHITECTURE },  
  { id: 'automotive', imgSrc: ASSETS.SECTORS.AUTOMOTIVE },               
  { id: 'civil_construction', imgSrc: ASSETS.SECTORS.CIVIL_CONST },       
  { id: 'energy', imgSrc: ASSETS.SECTORS.ENERGY },                   
  { id: 'naval_industry', imgSrc: ASSETS.SECTORS.NAVAL },           
  { id: 'mining', imgSrc: ASSETS.SECTORS.MINING },                  
  { id: 'oil_and_gas', imgSrc: ASSETS.SECTORS.OIL_GAS },              
  { id: 'pulp_and_paper', imgSrc: ASSETS.SECTORS.PULP_PAPER },           
  { id: 'petrochemical', imgSrc: ASSETS.SECTORS.PETROCHEMICAL },           
  { id: 'sanitation', imgSrc: ASSETS.SECTORS.SANITATION },               
  { id: 'steel_industry', imgSrc: ASSETS.SECTORS.STEEL }            
];

export const HERO_SLIDES = [
    {
        id: "entressafra",
        imageUrl: ASSETS.HERO_SLIDES_IMGS.ENTRESSAFRA
    },
    {
        id: "trapezoidal",
        imageUrl: ASSETS.HERO_SLIDES_IMGS.TRAPEZOIDAL
    },
    {
        id: "excellence",
        imageUrl: ASSETS.HERO_SLIDES_IMGS.EXCELLENCE
    },
    {
        id: "flanges",
        imageUrl: ASSETS.HERO_SLIDES_IMGS.FLANGES
    },
    {
        id: "flooring",
        imageUrl: ASSETS.HERO_SLIDES_IMGS.FLOORING
    },
];

export const PRODUCT_CATEGORIES = [
  { 
    id: 'flanges', 
    imageUrl: ASSETS.PRODUCT_THUMBNAILS.FLANGES,
    href: '#/products/flanges' 
  },
  { 
    id: 'tubes', 
    imageUrl: ASSETS.PRODUCT_THUMBNAILS.TUBES, 
    href: '#/products/tubos' 
  },
  { 
    id: 'fittings', 
    imageUrl: ASSETS.PRODUCT_THUMBNAILS.FITTINGS, 
    href: '#/products/conexoes' 
  },
  { 
    id: 'valves', 
    imageUrl: ASSETS.PRODUCT_THUMBNAILS.VALVES, 
    href: '#/products/valvulas' 
  },
  { 
    id: 'profiles', 
    imageUrl: ASSETS.PRODUCT_THUMBNAILS.PROFILES, 
    href: '#/products/perfis' 
  },
  { 
    id: 'plates', 
    imageUrl: ASSETS.PRODUCT_THUMBNAILS.PLATES, 
    href: '#/products/chapas' 
  },
  { 
    id: 'gratings', 
    imageUrl: ASSETS.PRODUCT_THUMBNAILS.GRATINGS, 
    href: '#/products/grades' 
  },
  { 
    id: 'tiles', 
    imageUrl: ASSETS.PRODUCT_THUMBNAILS.TILES, 
    href: '#/products/telhas' 
  },
  { 
    id: 'civil', 
    imageUrl: ASSETS.PRODUCT_THUMBNAILS.CIVIL, 
    href: '#/products/civil' 
  },
  { 
    id: 'boilermaking', 
    imageUrl: ASSETS.PRODUCT_THUMBNAILS.BOILERMAKING, 
    href: '#/products/caldeiraria' 
  },
  { 
    id: 'cutting', 
    imageUrl: ASSETS.PRODUCT_THUMBNAILS.CUTTING, 
    href: '#/products/oxicorte' 
  },
  { 
    id: 'conduits', 
    imageUrl: ASSETS.PRODUCT_THUMBNAILS.CONDUITS, 
    href: '#/products/eletrodutos' 
  },
  { 
    id: 'tanks', 
    imageUrl: ASSETS.PRODUCT_THUMBNAILS.TANKS, 
    href: '#/products/tanques' 
  },
  { 
    id: 'grooved', 
    imageUrl: ASSETS.PRODUCT_THUMBNAILS.GROOVED, 
    href: '#/products/grooved' 
  },
];

export const FEATURED_PRODUCTS_LIST = [
    { id: 'flanges', imageUrl: ASSETS.HOME_FEATURED.FLANGE, href: '#/products/flanges' },
    { id: 'tubes', imageUrl: ASSETS.HOME_FEATURED.TUBOS, href: '#/products/tubos' },
    { id: 'boilermaking', imageUrl: ASSETS.HOME_FEATURED.CALDEIRARIA, href: '#/products/caldeiraria' },
    { id: 'plates', imageUrl: ASSETS.HOME_FEATURED.CHAPAS, href: '#/products/chapas' },
    { id: 'fittings', imageUrl: ASSETS.HOME_FEATURED.CONEXOES, href: '#/products/conexoes' },
    { id: 'valves', imageUrl: ASSETS.HOME_FEATURED.VALVULAS, href: '#/products/valvulas' },
    { id: 'profiles', imageUrl: ASSETS.HOME_FEATURED.PERFIS, href: '#/products/perfis' },
    { id: 'gratings', imageUrl: ASSETS.HOME_FEATURED.GRADE, href: '#/products/grades' },
    { id: 'tiles', imageUrl: ASSETS.HOME_FEATURED.TELHAS, href: '#/products/telhas' },
    { id: 'civil', imageUrl: ASSETS.HOME_FEATURED.CIVIL, href: '#/products/civil' },
    { id: 'cutting', imageUrl: ASSETS.HOME_FEATURED.OXICORTE, href: '#/products/oxicorte' },
    { id: 'conduits', imageUrl: ASSETS.HOME_FEATURED.ELETRODUTOS, href: '#/products/eletrodutos' },
    { id: 'grooved', imageUrl: ASSETS.HOME_FEATURED.GROOVED, href: '#/products/grooved' },
    { id: 'tanks', imageUrl: ASSETS.HOME_FEATURED.TANQUES, href: '#/products/tanques' },
];
