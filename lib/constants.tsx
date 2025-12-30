
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
        logoUrl: "https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/Logo/ISO.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvTG9nby9JU08ucG5nIiwiaWF0IjoxNzY0NzAwMzE5LCJleHAiOjE3OTYyMzYzMTl9.id7WHHdFczzHPzUrZcfEcJPOTuOfxIDTyPq16Ct_n6Y",
    },
    {
        id: "crc_petrobras",
        logoUrl: "https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/Logo/CRC.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvTG9nby9DUkMucG5nIiwiaWF0IjoxNzY0NzAwMjk2LCJleHAiOjE3OTYyMzYyOTZ9.KPWK1CFK3U-x1F8oV1D_j7UCdbQ92SN37H5lL_GQhLg",
    },
    {
        id: "ypfb",
        logoUrl: "https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/Logo/YPFB_Logo.svg.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvTG9nby9ZUEZCX0xvZ28uc3ZnLnBuZyIsImlhdCI6MTc2NTgyMjUzMCwiZXhwIjoxNzk3MzU4NTMwfQ.XMqCBVThLKm4SHRejHMKm6vofXhluUB8_i356FWYiqc"
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
  { id: 'agriculture', imgSrc: "https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/sector/1.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvc2VjdG9yLzEud2VicCIsImlhdCI6MTc2NTgyNTY2NCwiZXhwIjoyMDgxMTg1NjY0fQ.YTCILUEMjRuf2N1bp1Eg_9BtSqlKRumK-txKQpbtJ0A" },              
  { id: 'architecture_and_design', imgSrc: "https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/sector/2.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvc2VjdG9yLzIud2VicCIsImlhdCI6MTc2NTgyNTY3NywiZXhwIjoyMDgxMTg1Njc3fQ.QyYdhl4b_8C4jXhvXgRmpr5R1knBsL4mjh7wNpondRw" },  
  { id: 'automotive', imgSrc: "https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/sector/3.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvc2VjdG9yLzMud2VicCIsImlhdCI6MTc2NTgyNTY5MCwiZXhwIjoyMDgxMTg1NjkwfQ.fkHdrj7xrRkc2qlBvMhvj6p7BPAanfYI5XsMEnNrCso" },               
  { id: 'civil_construction', imgSrc: "https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/sector/4.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvc2VjdG9yLzQud2VicCIsImlhdCI6MTc2NTgyNTcwNiwiZXhwIjoyMDgxMTg1NzA2fQ.4cb0fvyJ2bJnYDZDuowOcbk91Wauu5nXfuI5GcseMA4" },       
  { id: 'energy', imgSrc: "https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/sector/5.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvc2VjdG9yLzUud2VicCIsImlhdCI6MTc2NTgyNTcxNiwiZXhwIjoyMDgxMTg1NzE2fQ.bfxZdhGv2fFWa9yuxaBe9JN-P6qI00OTTytHvlPVAWc" },                   
  { id: 'naval_industry', imgSrc: "https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/sector/6.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvc2VjdG9yLzYud2VicCIsImlhdCI6MTc2NTgyNTczNCwiZXhwIjoyMDgxMTg1NzM0fQ.ulAkCjoqtlJLAI9WEQatrXzeLm6e1UuVLcfN3sIZiIk" },           
  { id: 'mining', imgSrc: "https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/sector/7.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvc2VjdG9yLzcud2VicCIsImlhdCI6MTc2NTgyNTc0NCwiZXhwIjoyMDgxMTg1NzQ0fQ.oBUBv_RsBsQlRmI0HM8BZ1nrJrxYpoOZYZxsr1EWoV8" },                  
  { id: 'oil_and_gas', imgSrc: "https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/sector/8.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvc2VjdG9yLzgud2VicCIsImlhdCI6MTc2NTgyNTc1NiwiZXhwIjoyMDgxMTg1NzU2fQ.rnZaEw8xO6olArUjHi25VihoKK889fnlFsdgkR00pXA" },              
  { id: 'pulp_and_paper', imgSrc: "https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/sector/9.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvc2VjdG9yLzkud2VicCIsImlhdCI6MTc2NTgyNTc2MywiZXhwIjoyMDgxMTg1NzYzfQ.Cn3f-mhMwXbTK9jHvQdqY31nq1HNFm6NaZ2v-u-qwfc" },           
  { id: 'petrochemical', imgSrc: "https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/sector/10.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvc2VjdG9yLzEwLndlYnAiLCJpYXQiOjE3NjU4MjU3NzMsImV4cCI6MjA4MTE4NTc3M30.OTQJRAaz7VnegwFTyHdBjKejsIaKjveM0TPRKG9S9RA" },           
  { id: 'sanitation', imgSrc: "https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/sector/11.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvc2VjdG9yLzExLndlYnAiLCJpYXQiOjE3NjU4MjU3ODMsImV4cCI6MjA4MTE4NTc4M30.5ZT-2kUSEhA4FYwC0NWO6BBvfRagYBGDw4ETsoIwzuQ" },               
  { id: 'steel_industry', imgSrc: "https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/sector/12.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvc2VjdG9yLzEyLndlYnAiLCJpYXQiOjE3NjU4MjU3OTQsImV4cCI6MjA4MTE4NTc5NH0.MP-1u0apH8Kbx99zGDmfrw3wmiTmW0puPZt6nbICLu8" }            
];

export const HERO_SLIDES = [
    {
        id: "entressafra",
        imageUrl: 'https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/home-hero/1.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvaG9tZS1oZXJvLzEud2VicCIsImlhdCI6MTc2NTgyMzc2NiwiZXhwIjoyMDgxMTgzNzY2fQ.bzu2qsUCVxSDXGRLs4i6KbCRSvso92O4JsK98H8jJrc'
    },
    {
        id: "trapezoidal",
        imageUrl: 'https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/home-hero/2.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvaG9tZS1oZXJvLzIud2VicCIsImlhdCI6MTc2NTgyMzc5NiwiZXhwIjoyMDgxMTgzNzk2fQ.fxK_12a4zmL70RSa-fIUiLCwCiSIrLvPURKHh4s8ST0'
    },
    {
        id: "excellence",
        imageUrl: 'https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/home-hero/3.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvaG9tZS1oZXJvLzMud2VicCIsImlhdCI6MTc2NTgyMzgxMiwiZXhwIjoyMDgxMTgzODEyfQ.CXwUtxFLYHRzxg9r9cX9pWtqPMrQDFHOW2dTs-In5NY'
    },
    {
        id: "flanges",
        imageUrl: 'https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/home-hero/4.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvaG9tZS1oZXJvLzQud2VicCIsImlhdCI6MTc2NTgyMzgyNywiZXhwIjoyMDgxMTgzODI3fQ.bntR1t8l6xdU56NmsWuSrbyU7GaNsLSdGW8IklhPBY0'
    },
    {
        id: "flooring",
        imageUrl: 'https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/home-hero/5.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvaG9tZS1oZXJvLzUud2VicCIsImlhdCI6MTc2NTgyMzg2MSwiZXhwIjoyMDgxMTgzODYxfQ.JEcb_zSYmlQJozHn8IFOYqGr0KFoJQdWhgy8LFpsUa8'
    },
];

export const PRODUCT_CATEGORIES = [
  { 
    id: 'flanges', 
    imageUrl: 'https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/pagina-produtos/miniatura/1Flange.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvcGFnaW5hLXByb2R1dG9zL21pbmlhdHVyYS8xRmxhbmdlLndlYnAiLCJpYXQiOjE3NjU4MjI5NjUsImV4cCI6MjA4MTE4Mjk2NX0.2XtJ9HW08hmbE6HUXym0oh01144t9mLCn1dvUENLADs',
    href: '#/products/flanges' 
  },
  { 
    id: 'tubes', 
    imageUrl: 'https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/pagina-produtos/miniatura/2Tubos.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvcGFnaW5hLXByb2R1dG9zL21pbmlhdHVyYS8yVHVib3Mud2VicCIsImlhdCI6MTc2NTgyMzAwOCwiZXhwIjoyMDgxMTgzMDA4fQ.shdxuS_a9DNReqCr1iN7G6qRY6o8yNpC2O4EopoYHFQ', 
    href: '#/products/tubos' 
  },
  { 
    id: 'fittings', 
    imageUrl: 'https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/pagina-produtos/miniatura/3Conexoes.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvcGFnaW5hLXByb2R1dG9zL21pbmlhdHVyYS8zQ29uZXhvZXMud2VicCIsImlhdCI6MTc2NTgyMzAzNCwiZXhwIjoyMDgxMTgzMDM0fQ.51CCXfXekm-ZktRNa-rvF5j6W6nya1IgG1LaG5wncfs', 
    href: '#/products/conexoes' 
  },
  { 
    id: 'valves', 
    imageUrl: 'https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/pagina-produtos/miniatura/4Valvula.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvcGFnaW5hLXByb2R1dG9zL21pbmlhdHVyYS80VmFsdnVsYS53ZWJwIiwiaWF0IjoxNzY1ODIzMDUxLCJleHAiOjIwODExODMwNTF9.Y58h3aJWwDFfxQgmRQC9r9MasdOvgL8Yd8uUTbgsTzM', 
    href: '#/products/valvulas' 
  },
  { 
    id: 'profiles', 
    imageUrl: 'https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/pagina-produtos/miniatura/5Perfis.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvcGFnaW5hLXByb2R1dG9zL21pbmlhdHVyYS81UGVyZmlzLndlYnAiLCJpYXQiOjE3NjU4MjMwODQsImV4cCI6MjA4MTE4MzA4NH0.Oa43oZFIBC21v5mvOugqmgKpGRjNqka-xKOJ4UIfYKE', 
    href: '#/products/perfis' 
  },
  { 
    id: 'plates', 
    imageUrl: 'https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/pagina-produtos/miniatura/6Chapas.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvcGFnaW5hLXByb2R1dG9zL21pbmlhdHVyYS82Q2hhcGFzLndlYnAiLCJpYXQiOjE3NjU4MjMxMzMsImV4cCI6MjA4MTE4MzExM30.CjrKny8i_rM1H9VmlIzUqVOg7AWxWnmcUS7YhQHdQbI', 
    href: '#/products/chapas' 
  },
  { 
    id: 'gratings', 
    imageUrl: 'https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/pagina-produtos/miniatura/7Grades.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvcGFnaW5hLXByb2R1dG9zL21pbmlhdHVyYS83R3JhZGVzLndlYnAiLCJpYXQiOjE3NjU4MjMxMzUsImV4cCI6MjA4MTE4MzEzNX0.21XOqLxUBq1W43nHqIVbakdxF9qHGyyZ2ruHdRS7rI0', 
    href: '#/products/grades' 
  },
  { 
    id: 'tiles', 
    imageUrl: 'https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/pagina-produtos/miniatura/8Telhas.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvcGFnaW5hLXByb2R1dG9zL21pbmlhdHVyYS84VGVsaGFzLndlYnAiLCJpYXQiOjE3NjU4MjMxNjAsImV4cCI6MjA4MTE4MzE2MH0.8qRto_qxlFTvQgyYhh1YowOBR9eteLmgpOTtikLn98M', 
    href: '#/products/telhas' 
  },
  { 
    id: 'civil', 
    imageUrl: 'https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/pagina-produtos/miniatura/9ConstrucaoCivil.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvcGFnaW5hLXByb2R1dG9zL21pbmlhdHVyYS85Q29uc3RydWNhb0NpdmlsLndlYnAiLCJpYXQiOjE3NjU4MjY0NjAsImV4cCI6MjA4MTE4NjQ2MH0.ytMA2RBAmNK98CCzkzzyVg1qH_mSj6cVFpA3cXAP7TY', 
    href: '#/products/civil' 
  },
  { 
    id: 'boilermaking', 
    imageUrl: 'https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/pagina-produtos/miniatura/10Calderaria.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvcGFnaW5hLXByb2R1dG9zL21pbmlhdHVyYS8xMENhbGRlcmFyaWEud2VicCIsImlhdCI6MTc2NTgyMzIwNywiZXhwIjoyMDgxMTgzMjA3fQ.4aAL9Z2SJ3MfpnoL2tWe-D8Rt_eWxZDmeRDkWxC3mNc', 
    href: '#/products/caldeiraria' 
  },
  { 
    id: 'cutting', 
    imageUrl: 'https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/pagina-produtos/miniatura/11Oxicorte.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvcGFnaW5hLXByb2R1dG9zL21pbmlhdHVyYS8xMU94aWNvcnRlLndlYnAiLCJpYXQiOjE3NjU4MjMyMjgsImV4cCI6MjA4MTE4MzIyOH0.pZiexwnW5LLduR7sOa8xWertbVJl7QOMZ9QTtiDJ2cc', 
    href: '#/products/oxicorte' 
  },
  { 
    id: 'conduits', 
    imageUrl: 'https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/pagina-produtos/miniatura/12Eletrodutos.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvcGFnaW5hLXByb2R1dG9zL21pbmlhdHVyYS8xMkVsZXRyb2R1dG9zLndlYnAiLCJpYXQiOjE3NjU4MjMyNDgsImV4cCI6MjA4MTE4MzI0OH0.rJmn0GPPw16-_K3MaYj37bTV5uBkLqXpsuACVrARg74', 
    href: '#/products/eletrodutos' 
  },
  { 
    id: 'tanks', 
    imageUrl: 'https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/pagina-produtos/miniatura/13Tanques.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvcGFnaW5hLXByb2R1dG9zL21pbmlhdHVyYS8xM1RhbnF1ZXMud2VicCIsImlhdCI6MTc2NTgyMzI2NiwiZXhwIjoyMDgxMTgzMjY2fQ.TBb_zUnhuS53m8w9hiwkAMu2Ac2fRXO8Qbwb_QPkHeE', 
    href: '#/products/tanques' 
  },
  { 
    id: 'grooved', 
    imageUrl: 'https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/pagina-produtos/miniatura/14Bombeiro.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvcGFnaW5hLXByb2R1dG9zL21pbmlhdHVyYS8xNEJvbWJlaXJvLndlYnAiLCJpYXQiOjE3NjU4MjMyODMsImV4cCI6MjA4MTE4MzI4M30.EEludxSvRjxBdoZeTV1gcngoQV2PUDFZFkp_OxG2aZ4', 
    href: '#/products/grooved' 
  },
];

export const FEATURED_PRODUCTS_LIST = [
    { id: 'tubes', imageUrl: ASSETS.HOME_FEATURED.TUBOS, href: '#/products/tubos' }, 
    { id: 'plates', imageUrl: ASSETS.HOME_FEATURED.CHAPAS, href: '#/products/chapas' }, 
    { id: 'fittings', imageUrl: ASSETS.HOME_FEATURED.CONEXOES, href: '#/products/conexoes' },
    { id: 'flanges', imageUrl: ASSETS.HOME_FEATURED.FLANGE, href: '#/products/flanges' },
    { id: 'valves', imageUrl: ASSETS.HOME_FEATURED.VALVULAS, href: '#/products/valvulas' },
    { id: 'boilermaking', imageUrl: ASSETS.HOME_FEATURED.CALDEIRARIA, href: '#/products/caldeiraria' },
    { id: 'gratings', imageUrl: ASSETS.HOME_FEATURED.GRADE, href: '#/products/grades' },
    { id: 'meshes', imageUrl: ASSETS.HOME_FEATURED.MALHA, href: '#/products/chapas' },
    { id: 'tanks', imageUrl: ASSETS.HOME_FEATURED.TANQUES, href: '#/products/tanques' },
    { id: 'grooved', imageUrl: ASSETS.HOME_FEATURED.GROOVED, href: '#/products/grooved' },
];

  // Capas das Categorias (Página /products)
export const PRODUCTS = {
    FLANGES: 'https://storage.googleapis.com/production-hostgator-brasil-v1-0-0/850/1911850/CU3jUjet/1b023f67b1e9414ea1952f0d9c144952',
    TUBOS: 'https://storage.googleapis.com/production-hostgator-brasil-v1-0-0/850/1911850/CU3jUjet/32796067427343a480188b691405b848',
    CONEXOES: 'https://storage.googleapis.com/production-hostgator-brasil-v1-0-0/850/1911850/CU3jUjet/7e7999cb835d4784b2bd846eefecb470',
    VALVULAS: 'https://storage.googleapis.com/production-hostgator-brasil-v1-0-0/850/1911850/CU3jUjet/c4f0497d82214a4786e10bcafc60b959',
    PERFIS: 'https://storage.googleapis.com/production-hostgator-brasil-v1-0-0/850/1911850/CU3jUjet/7edf60429a5040439366c6260eabfa22',
    CHAPAS: 'https://storage.googleapis.com/production-hostgator-brasil-v1-0-0/850/1911850/CU3jUjet/10911e88a8274e139a056b7213509621',
    GRADES: 'https://storage.googleapis.com/production-hostgator-brasil-v1-0-0/850/1911850/CU3jUjet/5ad0a7db91584886897306c89abf2f02',
    TELHAS: 'https://storage.googleapis.com/production-hostgator-brasil-v1-0-0/850/1911850/CU3jUjet/2d36531852cf4dc1827faf43618c3f71',
    CIVIL: 'https://yrhedrhkfgvaeoavcazg.supabase.co/storage/v1/object/sign/public-assets/acosvital/images/pagina-produtos/miniatura/9ConstrucaoCivil.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MWI0YjViZi00ZjI3LTQyZGUtYTQ5OC03MjdlNjMwMjUzYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMtYXNzZXRzL2Fjb3N2aXRhbC9pbWFnZXMvcGFnaW5hLXByb2R1dG9zL21pbmlhdHVyYS85Q29uc3RydWNhb0NpdmlsLndlYnAiLCJpYXQiOjE3NjU4MjExODMsImV4cCI6MTc5NzM1NzE4M30.cMYGmWVSG5J__3yW257fLXF5NhBEs70FHKWVhwbW3J8',
    CALDEIRARIA: 'https://storage.googleapis.com/production-hostgator-brasil-v1-0-0/850/1911850/CU3jUjet/b7b4ffc611394192a487160304f3a3bf',
    OXICORTE: 'https://storage.googleapis.com/production-hostgator-brasil-v1-0-0/850/1911850/CU3jUjet/ecfadc80e9fb4c6897170f5111d87a07',
    ELETRODUTOS: 'https://storage.googleapis.com/production-hostgator-brasil-v1-0-0/850/1911850/CU3jUjet/f44ea44d52874758b7362373d5e7382a',
    GROOVED: 'https://storage.googleapis.com/production-hostgator-brasil-v1-0-0/850/1911850/CU3jUjet/5c01f198fc4b45cdbcbc8c6492c06509',
    TANQUES: 'https://storage.googleapis.com/production-hostgator-brasil-v1-0-0/850/1911850/CU3jUjet/e47b0b14644e4244a3ce7c0eb6440b70'
};

  // Páginas Internas de Produtos (Sliders e Modelos)
export const PRODUCT_PAGES = {
    FLANGES: {
      SLIDES: [
        "https://images.unsplash.com/photo-1621259725832-6e2cb8384266?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
      ],
      MODELS: {
        SLIP_ON: "https://storage.googleapis.com/production-hostgator-brasil-v1-0-0/850/1911850/CU3jUjet/3c0cc59d8669408d928083660ebf5889",
        WELD_NECK: "https://storage.googleapis.com/production-hostgator-brasil-v1-0-0/850/1911850/CU3jUjet/ac5e884519bf409998a98177e0e8e1f3",
        BLIND: "https://storage.googleapis.com/production-hostgator-brasil-v1-0-0/850/1911850/CU3jUjet/dbdedaba26064b89a043e232dd129761",
        LAP_JOINT: "https://storage.googleapis.com/production-hostgator-brasil-v1-0-0/850/1911850/CU3jUjet/f6a2b034a0cf4263b55f9ab5bbc06ddd",
        THREADED: "https://storage.googleapis.com/production-hostgator-brasil-v1-0-0/850/1911850/CU3jUjet/75f5e2ac223440449daf9795f2756a2f",
        SOCKET_WELD: "https://storage.googleapis.com/production-hostgator-brasil-v1-0-0/850/1911850/CU3jUjet/c89534b26b764a438a25a9c450f09264",
        SOBREPOSTO: "https://images.unsplash.com/photo-1621259725832-6e2cb8384266?auto=format&fit=crop&q=80&w=800",
        SOLTO: "https://images.unsplash.com/photo-1533230983389-9a7444747971?auto=format&fit=crop&q=80&w=800",
        PEAD: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
        LIGAS: "https://images.unsplash.com/photo-1579532536935-619928decd08?auto=format&fit=crop&q=80&w=800",
        FIXADORES: "https://images.unsplash.com/photo-1585805900222-68b6eb063b48?auto=format&fit=crop&q=80&w=800",
        JUNTAS: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800"
      }
    },
    TUBOS: {
      SLIDES: [
        "https://images.unsplash.com/photo-1533230983389-9a7444747971?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1590080860368-8097b872b7a9?q=80&w=2069&auto=format&fit=crop"
      ],
      MODELS: {
        INOX: "https://images.unsplash.com/photo-1621259725832-6e2cb8384266?auto=format&fit=crop&q=80&w=800",
        CARBONO: "https://images.unsplash.com/photo-1533230983389-9a7444747971?auto=format&fit=crop&q=80&w=800",
        INDUSTRIAIS: "https://images.unsplash.com/photo-1579532536935-619928decd08?auto=format&fit=crop&q=80&w=800",
        MECANICOS: "https://images.unsplash.com/photo-1585805900222-68b6eb063b48?auto=format&fit=crop&q=80&w=800"
      }
    },
    CONEXOES: {
        SLIDES: [
            "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=1974&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1535069722370-9ee78eb2659d?q=80&w=300&auto=format&fit=crop"
        ],
        MODELS: {
            ALTA_PRESSAO: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=800&auto=format&fit=crop",
            GOMADAS: "https://images.unsplash.com/photo-1535069722370-9ee78eb2659d?q=80&w=800&auto=format&fit=crop",
            TUBULARES: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800&auto=format&fit=crop"
        }
    },
    VALVULAS: {
        SLIDES: [
            "https://images.unsplash.com/photo-1565514020126-7876f964fc5c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800"
        ],
        MODELS: {
            BORBOLETA: "https://images.unsplash.com/photo-1533230983389-9a7444747971?auto=format&fit=crop&q=80&w=800",
            ESFERA: "https://images.unsplash.com/photo-1585805900222-68b6eb063b48?auto=format&fit=crop&q=80&w=800",
            GAVETA: "https://images.unsplash.com/photo-1565514020126-7876f964fc5c?auto=format&fit=crop&q=80&w=800",
            GLOBO: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800",
            GUILHOTINA: "https://images.unsplash.com/photo-1621259725832-6e2cb8384266?auto=format&fit=crop&q=80&w=800",
            RETENCAO: "https://images.unsplash.com/photo-1590644365607-1c5a38fc6fb1?auto=format&fit=crop&q=80&w=800"
        }
    },
    PERFIS: {
        SLIDES: [
            "https://images.unsplash.com/photo-1533230983389-9a7444747971?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1621259725832-6e2cb8384266?q=80&w=2070&auto=format&fit=crop"
        ],
        MODELS: {
            W: "https://images.unsplash.com/photo-1535069722370-9ee78eb2659d?q=80&w=800&auto=format&fit=crop",
            I_HQ: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
            U: "https://images.unsplash.com/photo-1585805900222-68b6eb063b48?q=80&w=800&auto=format&fit=crop",
            U_SIMPLES: "https://images.unsplash.com/photo-1598229871614-4da94a61309f?q=80&w=800&auto=format&fit=crop",
            U_ENRIJECIDO: "https://images.unsplash.com/photo-1621259725832-6e2cb8384266?q=80&w=800&auto=format&fit=crop",
            CANTONEIRA: "https://images.unsplash.com/photo-1590644365607-1c5a38fc6fb1?q=80&w=800&auto=format&fit=crop",
            BARRA_CHATA: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
            BARRA_REDONDA: "https://images.unsplash.com/photo-1535069722370-9ee78eb2659d?q=80&w=800&auto=format&fit=crop"
        }
    },
    CHAPAS: {
        SLIDES: [
            "https://images.unsplash.com/photo-1598556636729-19545468536f?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1621259725832-6e2cb8384266?q=80&w=2070&auto=format&fit=crop"
        ],
        MODELS: {
            FINA: "https://images.unsplash.com/photo-1598556636729-19545468536f?q=80&w=800&auto=format&fit=crop",
            GROSSA: "https://images.unsplash.com/photo-1621259725832-6e2cb8384266?q=80&w=800&auto=format&fit=crop",
            ZINCADA: "https://images.unsplash.com/photo-1579532536935-619928decd08?q=80&w=800&auto=format&fit=crop",
            XADREZ: "https://images.unsplash.com/photo-1533230983389-9a7444747971?q=80&w=800&auto=format&fit=crop",
            PERFURADA: "https://images.unsplash.com/photo-1590644365607-1c5a38fc6fb1?auto=format&fit=crop&q=80&w=800",
            EXPANDIDA: "https://images.unsplash.com/photo-1565610261709-6799042b3749?auto=format&fit=crop&q=80&w=800"
        }
    },
    GRADES: {
        SLIDES: [
            "https://images.unsplash.com/photo-1565610261709-6799042b3749?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1535970222071-769a6db244b7?q=80&w=2070&auto=format&fit=crop"
        ],
        MODELS: {
            INDUSTRIAL: "https://images.unsplash.com/photo-1565610261709-6799042b3749?q=80&w=800&auto=format&fit=crop",
            MALHAS: "https://images.unsplash.com/photo-1535970222071-769a6db244b7?q=80&w=800&auto=format&fit=crop"
        }
    },
    TELHAS: {
        SLIDES: [
            "https://images.unsplash.com/photo-1621259725832-6e2cb8384266?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1590080860368-8097b872b7a9?q=80&w=2069&auto=format&fit=crop"
        ],
        MODELS: {
            GALVALUME: "https://images.unsplash.com/photo-1621259725832-6e2cb8384266?q=80&w=800&auto=format&fit=crop",
            PINTADA: "https://images.unsplash.com/photo-1590080860368-8097b872b7a9?q=80&w=800&auto=format&fit=crop",
            TERMOSTATICA: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=800&auto=format&fit=crop"
        }
    },
    CIVIL: {
        SLIDES: [
            "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1590644365607-1c5a38fc6fb1?q=80&w=2070&auto=format&fit=crop"
        ],
        MODELS: {
            ARAME: "https://images.unsplash.com/photo-1590644365607-1c5a38fc6fb1?q=80&w=800&auto=format&fit=crop",
            BARRA_TRANSF: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
            VERGALHOES: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=800&auto=format&fit=crop",
            TELA: "https://images.unsplash.com/photo-1621259725832-6e2cb8384266?q=80&w=800&auto=format&fit=crop",
            TRELICA: "https://images.unsplash.com/photo-1585805900222-68b6eb063b48?q=80&w=800&auto=format&fit=crop"
        }
    },
    CALDEIRARIA: {
        SLIDES: [
            "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1621259725832-6e2cb8384266?q=80&w=2070&auto=format&fit=crop"
        ],
        MODELS: {
            TUBOS_CALANDRADOS: "https://images.unsplash.com/photo-1621259725832-6e2cb8384266?q=80&w=800&auto=format&fit=crop",
            PECAS_PERSONALIZADAS: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=800&auto=format&fit=crop",
            EQUIPAMENTOS: "https://images.unsplash.com/photo-1535069722370-9ee78eb2659d?q=80&w=800&auto=format&fit=crop"
        }
    },
    OXICORTE: {
        SLIDES: [
            "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1621259725832-6e2cb8384266?q=80&w=2070&auto=format&fit=crop"
        ],
        MODELS: {
            MACARICO: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
            TARTARUGA: "https://images.unsplash.com/photo-1621259725832-6e2cb8384266?q=80&w=800&auto=format&fit=crop",
            PLASMA: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=800&auto=format&fit=crop",
            FOTOCELULA: "https://images.unsplash.com/photo-1535069722370-9ee78eb2659d?q=80&w=800&auto=format&fit=crop"
        }
    },
    ELETRODUTOS: {
        SLIDES: [
            "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1621259725832-6e2cb8384266?q=80&w=2070&auto=format&fit=crop"
        ],
        MODELS: {
            LEVE: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800&auto=format&fit=crop",
            MEDIO: "https://images.unsplash.com/photo-1621259725832-6e2cb8384266?q=80&w=800&auto=format&fit=crop",
            PESADO: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
            CONEXOES_ELETRO: "https://images.unsplash.com/photo-1535069722370-9ee78eb2659d?q=80&w=800&auto=format&fit=crop",
            FOGO_MEDIO: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800&auto=format&fit=crop",
            FOGO_PESADO: "https://images.unsplash.com/photo-1621259725832-6e2cb8384266?q=80&w=800&auto=format&fit=crop",
            FOGO_CONEXOES: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
            RIR_NPT: "https://images.unsplash.com/photo-1535069722370-9ee78eb2659d?q=80&w=800&auto=format&fit=crop",
            RIR_BSP: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800&auto=format&fit=crop",
            INOX_10: "https://images.unsplash.com/photo-1621259725832-6e2cb8384266?q=80&w=800&auto=format&fit=crop",
            INOX_40: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
            CONEXOES_GERAL: "https://images.unsplash.com/photo-1535069722370-9ee78eb2659d?q=80&w=800&auto=format&fit=crop"
        }
    },
    GROOVED: {
        SLIDES: [
            "https://images.unsplash.com/photo-1621259725832-6e2cb8384266?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1590080860368-8097b872b7a9?q=80&w=2069&auto=format&fit=crop"
        ],
        MODELS: {
            FLEXIVEL: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
            REDUCAO_FLEX: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=800&auto=format&fit=crop",
            RIGIDO: "https://images.unsplash.com/photo-1535069722370-9ee78eb2659d?q=80&w=800&auto=format&fit=crop",
            COTOVELO_45: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800&auto=format&fit=crop",
            COTOVELO_90: "https://images.unsplash.com/photo-1621259725832-6e2cb8384266?q=80&w=800&auto=format&fit=crop",
            CRUZETA_MEC: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
            CRUZETA_RAN: "https://images.unsplash.com/photo-1533230983389-9a7444747971?q=80&w=800&auto=format&fit=crop",
            TAMPAO: "https://images.unsplash.com/photo-1585805900222-68b6eb063b48?q=80&w=800&auto=format&fit=crop",
            LUVA_RED: "https://images.unsplash.com/photo-1590644365607-1c5a38fc6fb1?q=80&w=800&auto=format&fit=crop",
            ADAPTADOR: "https://images.unsplash.com/photo-1579532536935-619928decd08?q=80&w=800&auto=format&fit=crop",
            TEE_UBOLT: "https://images.unsplash.com/photo-1598229871614-4da94a61309f?q=80&w=800&auto=format&fit=crop",
            TEE_MEC_ROSCA: "https://images.unsplash.com/photo-1535069722370-9ee78eb2659d?q=80&w=800&auto=format&fit=crop",
            TEE_MEC_RAN: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
            TEE_RAN: "https://images.unsplash.com/photo-1621259725832-6e2cb8384266?q=80&w=800&auto=format&fit=crop",
            TEE_RED_RAN: "https://images.unsplash.com/photo-1585805900222-68b6eb063b48?q=80&w=800&auto=format&fit=crop",
            TEE_RED_ROSCA: "https://images.unsplash.com/photo-1533230983389-9a7444747971?q=80&w=800&auto=format&fit=crop",
            FLANGE_BIP: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800&auto=format&fit=crop"
        }
    },
    TANQUES: {
        SLIDES: [
            "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1598556636729-19545468536f?q=80&w=2070&auto=format&fit=crop"
        ],
        MODELS: {
            AEREO: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=800&auto=format&fit=crop",
            JAQUETADO: "https://images.unsplash.com/photo-1598556636729-19545468536f?q=80&w=800&auto=format&fit=crop",
            GLP: "https://images.unsplash.com/photo-1621259725832-6e2cb8384266?q=80&w=800&auto=format&fit=crop",
            MODULOS: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop"
        }
    }
  }
};
