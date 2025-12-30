
import React, { useState } from 'react';
import { useI18n } from '../../../context/I18nContext';
import { Phone, MapPin, Mail, User, Building, MessageSquare, Send, ArrowRight, Loader2, CheckCircle } from 'lucide-react';
import WhatsappIcon from '../../common/icons/WhatsappIcon';
import { CONTACT_CARDS } from '../../../lib/constants';
import { ASSETS } from '../../../lib/media';

// --- CONFIGURAÇÃO DO FORMULÁRIO ---
const FORM_ENDPOINT = "https://hook.us2.make.com/jhhywnbi7k6xemq8sqnwndh646jp4938";
const API_KEY = "123456789qwertyuiop";

// Número para envio via WhatsApp (apenas números, com código do país)
const WHATSAPP_NUMBER = "551147972352";

const ContactInfoItem: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start space-x-4 mb-8 last:mb-0 group">
        <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-lg border border-white/5">
            {icon}
        </div>
        <div>
            <h4 className="text-base font-bold text-brand-orange uppercase tracking-wider mb-1">{title}</h4>
            <div className="text-gray-300 text-base leading-relaxed font-light group-hover:text-white transition-colors">
                {children}
            </div>
        </div>
    </div>
);

const Contact: React.FC = () => {
    const { t } = useI18n();

    // Data extraction
    const phoneCardData = CONTACT_CARDS.find(c => c.id === 'phone');
    const addressCardData = CONTACT_CARDS.find(c => c.id === 'address');

    const hero = {
        title: t('contactPage.hero.title'),
        subtitle: t('contactPage.hero.subtitle'),
        videoUrl: ASSETS.HERO.COMMON_VIDEO,
        imageUrl: ASSETS.HERO.COMMON_BG
    };

    const inputClasses = "w-full bg-gray-50 border border-gray-200 text-gray-900 text-base rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent block p-4 transition-all duration-300 hover:bg-white placeholder-gray-400";
    const labelClasses = "block mb-2 text-sm font-bold text-gray-800 uppercase tracking-wide";

    const interests = t('contactPage.form.interests', { returnObjects: true }) as string[];

    // --- FORM LOGIC ---
    const [formState, setFormState] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleWhatsAppSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        
        // Validação básica
        if (!formState.name || !formState.message) {
            alert("Por favor, preencha pelo menos Nome e Mensagem para enviar via WhatsApp.");
            return;
        }

        const text = `*Novo Contato via Site*\n\n*Nome:* ${formState.name}\n*Empresa:* ${formState.company}\n*Email:* ${formState.email}\n*Telefone:* ${formState.phone}\n*Assunto:* ${formState.interest}\n\n*Mensagem:* ${formState.message}`;
        const encodedText = encodeURIComponent(text);
        
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`, '_blank');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        if (FORM_ENDPOINT) {
            // MODO REAL: Envia para a API configurada
            try {
                const response = await fetch(FORM_ENDPOINT, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'x-make-apikey': API_KEY
                    },
                    body: JSON.stringify(formState)
                });

                if (response.ok) {
                    setStatus('success');
                } else {
                    console.error("Erro no envio:", response.statusText);
                    setStatus('error');
                }
            } catch (error) {
                console.error("Erro de conexão:", error);
                setStatus('error');
            }
        } else {
            // MODO SIMULAÇÃO (Para demonstração)
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('--- DADOS ENVIADOS (MODO DEMO) ---');
            console.log(formState);
            setStatus('success');
        }
    };

    const resetForm = () => {
        setFormState({
            name: '',
            company: '',
            email: '',
            phone: '',
            interest: '',
            message: ''
        });
        setStatus('idle');
    };

    return (
        <div className="min-h-screen bg-brand-off-white flex flex-col">
            
            {/* 1. HERO BACKGROUND SECTION */}
            <div className="relative h-[50vh] min-h-[400px] w-full bg-brand-blue-dark overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    poster={hero.imageUrl}
                >
                    <source src={hero.videoUrl} type="video/mp4" />
                </video>
                
                <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-dark via-brand-blue-dark/60 to-transparent"></div>
                
                <div className="relative z-10 container mx-auto px-6 sm:px-12 lg:px-24 h-full flex flex-col justify-center pt-12 pb-32">
                    <span className="text-brand-orange font-bold tracking-widest uppercase mb-4 animate-slide-in">{t('header.mobileLinks.contact')}</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-3xl leading-tight animate-slide-in" style={{ animationDelay: '0.1s' }}>
                        {hero.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl animate-slide-in" style={{ animationDelay: '0.2s' }}>
                        {hero.subtitle}
                    </p>
                </div>
            </div>

            {/* 2. FLOATING CARD CONTAINER */}
            <div className="container mx-auto px-6 sm:px-12 lg:px-24 -mt-32 relative z-20 mb-24">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[700px]">
                    
                    {/* LEFT PANEL: Contact Info (Dark Blue) */}
                    <div className="lg:w-2/5 bg-brand-blue-dark p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-between">
                        {/* Decorative Circles */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-blue-light/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-brand-orange/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">{t('contactPage.options.title')}</h3>
                            <p className="text-gray-400 mb-10 text-base">{t('contactPage.options.cards.phone.description')}</p>

                            <div className="space-y-4">
                                {/* Location */}
                                <ContactInfoItem icon={<MapPin size={22} />} title={t('contactPage.options.cards.address.title')}>
                                    <p className="whitespace-pre-line">{t('contactPage.options.cards.address.text')}</p>
                                    <a 
                                        href={addressCardData?.buttonLink} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="inline-flex items-center mt-2 text-brand-orange hover:text-white transition-colors text-xs font-bold uppercase"
                                    >
                                        {t('contactPage.options.cards.address.buttonText')} <ArrowRight size={12} className="ml-1" />
                                    </a>
                                </ContactInfoItem>

                                {/* Phone & WhatsApp */}
                                <ContactInfoItem icon={<Phone size={22} />} title={t('contactPage.options.cards.phone.title')}>
                                    <p className="mb-2">{t('layout.schedule')}</p>
                                    <div className="flex flex-col space-y-2">
                                        <a href={`tel:${phoneCardData?.phone?.replace(/\D/g, '')}`} className="hover:text-brand-orange transition-colors font-medium text-lg">
                                            {phoneCardData?.phone}
                                        </a>
                                        <a href="#" className="flex items-center hover:text-green-400 transition-colors font-medium text-lg">
                                            <WhatsappIcon size={20} className="mr-2" />
                                            {phoneCardData?.whatsapp}
                                        </a>
                                    </div>
                                </ContactInfoItem>

                                {/* Email */}
                                <ContactInfoItem icon={<Mail size={22} />} title="E-mail">
                                    <a href="mailto:acosvital@acosvital.com.br" className="hover:text-brand-orange transition-colors block text-base">
                                        acosvital@acosvital.com.br
                                    </a>
                                    <a href="mailto:vendas@acosvital.com.br" className="hover:text-brand-orange transition-colors block text-base">
                                        vendas@acosvital.com.br
                                    </a>
                                </ContactInfoItem>
                            </div>
                        </div>
                        
                        {/* Bottom Branding */}
                        <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                            <p className="text-xs text-gray-500">© Aços Vital Indústria e Comércio.</p>
                        </div>
                    </div>

                    {/* RIGHT PANEL: Form (White) */}
                    <div className="lg:w-3/5 p-8 md:p-12 lg:p-16 bg-white relative">
                        {status === 'success' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6 shadow-lg shadow-green-100">
                                    <CheckCircle size={48} strokeWidth={2.5} />
                                </div>
                                <h3 className="text-3xl font-bold text-brand-blue-dark mb-4">{t('contactPage.form.successTitle')}</h3>
                                <p className="text-gray-600 max-w-md mb-8 text-lg">
                                    {t('contactPage.form.successMsg')}
                                </p>
                                <button 
                                    onClick={resetForm}
                                    className="bg-brand-blue-dark text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-blue-light transition-all duration-300 shadow-md uppercase tracking-wider text-sm flex items-center"
                                >
                                    {t('contactPage.form.sendAnother')} <ArrowRight size={16} className="ml-2" />
                                </button>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-3xl font-bold text-brand-blue-dark mb-2">{t('contactPage.form.title')}</h3>
                                <p className="text-gray-600 mb-8 text-lg">{t('contactPage.form.subtitle')}</p>

                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className={labelClasses}>{t('contactPage.form.name')}</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                                    <User size={20} />
                                                </div>
                                                <input 
                                                    type="text" 
                                                    name="name"
                                                    value={formState.name}
                                                    onChange={handleInputChange}
                                                    className={`${inputClasses} pl-12`} 
                                                    placeholder={t('contactPage.form.name')} 
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className={labelClasses}>{t('contactPage.form.company')}</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                                    <Building size={20} />
                                                </div>
                                                <input 
                                                    type="text" 
                                                    name="company"
                                                    value={formState.company}
                                                    onChange={handleInputChange}
                                                    className={`${inputClasses} pl-12`} 
                                                    placeholder={t('contactPage.form.company')} 
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className={labelClasses}>{t('contactPage.form.email')}</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                                    <Mail size={20} />
                                                </div>
                                                <input 
                                                    type="email" 
                                                    name="email"
                                                    value={formState.email}
                                                    onChange={handleInputChange}
                                                    className={`${inputClasses} pl-12`} 
                                                    placeholder="nome@empresa.com.br" 
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className={labelClasses}>{t('contactPage.form.phone')}</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                                    <Phone size={20} />
                                                </div>
                                                <input 
                                                    type="tel" 
                                                    name="phone"
                                                    value={formState.phone}
                                                    onChange={handleInputChange}
                                                    className={`${inputClasses} pl-12`} 
                                                    placeholder="(00) 00000-0000" 
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className={labelClasses}>{t('contactPage.form.interest')}</label>
                                        <select 
                                            name="interest"
                                            value={formState.interest}
                                            onChange={handleInputChange}
                                            className={inputClasses}
                                            required
                                        >
                                            <option value="" disabled>Selecione um assunto...</option>
                                            {interests && interests.map((interest, index) => (
                                                <option key={index} value={interest}>{interest}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className={labelClasses}>{t('contactPage.form.message')}</label>
                                        <div className="relative">
                                            <div className="absolute top-4 left-4 pointer-events-none text-gray-400">
                                                <MessageSquare size={20} />
                                            </div>
                                            <textarea 
                                                name="message"
                                                value={formState.message}
                                                onChange={handleInputChange}
                                                className={`${inputClasses} pl-12 min-h-[150px]`} 
                                                placeholder={t('contactPage.form.message')} 
                                                required
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        <button 
                                            type="submit" 
                                            className="flex-1 bg-brand-orange text-white font-bold py-4 px-8 rounded-lg hover:bg-brand-orange-dark transition-all duration-300 shadow-lg hover:shadow-brand-orange/30 active:scale-[0.98] uppercase tracking-wider text-sm flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
                                            disabled={status === 'loading'}
                                        >
                                            {status === 'loading' ? (
                                                <Loader2 size={20} className="animate-spin mr-2" />
                                            ) : (
                                                <>
                                                    {t('contactPage.form.sendButton')} <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                        
                                        <button 
                                            type="button" 
                                            onClick={handleWhatsAppSubmit}
                                            className="flex-1 bg-[#25D366] text-white font-bold py-4 px-8 rounded-lg hover:bg-[#128C7E] transition-all duration-300 shadow-lg hover:shadow-green-500/30 active:scale-[0.98] uppercase tracking-wider text-sm flex items-center justify-center group"
                                        >
                                            {t('contactPage.form.whatsappButton')} <WhatsappIcon size={20} className="ml-2" />
                                        </button>
                                    </div>
                                    
                                    <p className="text-xs text-gray-500 text-center mt-4">
                                        {t('contactPage.form.whatsappHint')}
                                    </p>

                                    {status === 'error' && (
                                        <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm text-center">
                                            {t('contactPage.form.errorMsg')}
                                        </div>
                                    )}
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* 3. GOOGLE MAPS FULL WIDTH */}
            <div className="w-full h-[400px] bg-gray-200 relative">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0772023594833!2d-46.24838632369651!3d-23.53173166042371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdd7e108605c31%3A0xc34661009139046c!2sRod.%20Pedro%20Eroles%2C%201855%20-%20Jardim%20Aracy%2C%20Mogi%20das%20Cruzes%20-%20SP%2C%2008770-490!5e0!3m2!1spt-BR!2sbr!4v1709149955364!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'grayscale(0%)' }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização Aços Vital"
                    className="absolute inset-0"
                ></iframe>
            </div>

        </div>
    );
};

export default Contact;
