import { Injectable, signal, computed } from '@angular/core';

export type Language = 'en' | 'es';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private activeLangSignal = signal<Language>('en');

  // Expose current language as read-only signal
  activeLang = this.activeLangSignal.asReadonly();

  // Dictionary of translations
  private translations: Record<Language, Record<string, string>> = {
    en: {
      // Navigation
      home: 'Home',
      services: 'Services',
      testimonials: 'Testimonials',
      contact: 'Contact',
      
      // Hero
      heroTagline: 'Trusted Financial Partner',
      heroTitle1: 'Expert Business &',
      heroTitle2: 'Financial Solutions',
      heroSubtitle: 'Streamlining your bookkeeping, strategic tax planning, and finding optimal health insurance. XLG Solutions empowers your sustainable growth.',
      freeConsultationBtn: 'Get a Free Consultation',
      exploreServicesBtn: 'Explore Services',
      activeClients: 'Active Clients',
      satisfactionRate: 'Satisfaction Rate',
      yearsExperience: 'Years Experience',
      
      // About
      aboutTagline: 'Core Values',
      aboutTitle: 'Your Trusted Financial Partner',
      aboutSubtitle: 'At XLG Solutions, we are dedicated to providing top-tier bookkeeping, tax, and insurance advisory to empower small businesses and individuals.',
      integrityTitle: 'Integrity',
      integrityDesc: 'We operate with the highest level of integrity, ensuring absolute transparency and trust in all client partnerships.',
      expertiseTitle: 'Expertise',
      expertiseDesc: 'Our team consists of certified professionals committed to delivering accurate, compliant, and optimized financial solutions.',
      commitmentTitle: 'Commitment',
      commitmentDesc: 'Your sustainable growth is our core priority. We provide personalized support to help navigate business operations smoothly.',
      
      // Testimonials
      testimonialsTagline: 'Reviews',
      testimonialsTitle: 'What Our Clients Say',
      testimonialsSubtitle: 'Real feedback from small business owners and individuals who trust XLG Solutions with their finances and coverage.',
      review1Text: '"XLG Solutions transformed our financial processes with their responsive bookkeeping. Their team is professional, knowledgeable, and incredibly supportive."',
      review1Author: 'Jane Doe',
      review1Role: 'CEO, Tech Startup',
      review2Text: '"The clear tax planning advice we received was invaluable. It saved us a significant amount and gave us peace of mind."',
      review2Author: 'John Smith',
      review2Role: 'Small Business Owner',
      review3Text: '"They helped with health insurance and made navigating plans a breeze. Highly recommended for their expertise and friendly service."',
      review3Author: 'Maria Garcia',
      review3Role: 'Independent Freelancer',
      reviewPromptTitle: 'Help Other Businesses Find Us',
      reviewPromptText: 'Love our services? When reviewing us on Google, sharing details about how we provided <strong>clear tax planning</strong>, <strong>responsive bookkeeping</strong>, or <strong>helped with health insurance</strong> helps other businesses select the right partner!',
      
      // Contact Form
      contactTagline: 'Connect',
      contactTitle: "Let's Build Together",
      contactSubtitle: 'Ready to optimize your financial processes or select a health plan? Contact us for a free, zero-obligation advisory session.',
      fullNameLabel: 'Full Name',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone Number',
      optionalLabel: '(Optional)',
      inquiryLabel: 'Your Inquiry',
      inquiryPlaceholder: 'Briefly describe what services you need assistance with...',
      nameRequiredError: 'Full name is required.',
      emailRequiredError: 'Please enter a valid email address.',
      messageRequiredError: 'Inquiry message cannot be empty.',
      sendingBtn: 'Sending Inquiry...',
      sendMessageBtn: 'Send Message',
      formSuccessTitle: 'Thank you!',
      formSuccessDesc: 'Your inquiry was received. An advisor will follow up within 24 hours.',
      formErrorTitle: 'Error!',
      formErrorDesc: 'There was a problem sending your message. Please try again later.',
      
      // Footer
      rightsReserved: 'All rights reserved.',
      
      // Service Detail Page
      backToHome: 'Back to Home',
      serviceOverview: 'Service Overview',
      keyFocusAreasTitle: 'Key Focus Areas',
      requestConsultationTitle: 'Request Consultation',
      requestConsultationDesc: 'Have questions about our services? Reach out to our specialist advisors for a free, customized review.',
      callSupportLabel: 'Call Support',
      scheduleSessionBtn: 'Schedule Free Session',
      serviceNotFoundTitle: 'Service Not Found',
      serviceNotFoundDesc: 'The service identifier requested could not be resolved in our database.',
      returnToHomeBtn: 'Return to Home',
      
      // FAQ
      faqTagline: 'FAQ',
      faqTitle: 'Frequently Asked Questions',
      faqSubtitle: 'Find answers to common questions about our bookkeeping, tax, and insurance services.',
      faqQ1: 'What bookkeeping services do you provide?',
      faqA1: 'We handle transaction classification, bank reconciliations, accounts payable and receivable, and generate monthly financial reports (such as balance sheets and profit & loss statements) to keep your business records clean and compliant.',
      faqQ2: 'How can strategic tax planning benefit my business?',
      faqA2: 'Rather than just filing returns at the end of the year, strategic year-round tax planning helps identify potential deductions, tax credits, and financial structures that can legally minimize your state and federal tax liabilities.',
      faqQ3: 'What is the difference between ACA marketplace plans and supplemental benefits?',
      faqA3: 'ACA Marketplace plans (Obamacare) provide your primary health insurance coverage (doctor visits, prescriptions, hospital stays). Supplemental benefits (such as accident or critical illness coverage) provide direct cash payouts to shield your income and cover out-of-pocket gaps left by your primary health plan.',
      faqQ4: 'Can you help me form a new business entity?',
      faqA4: 'Yes, we provide support for forming LLCs and Corporations, setting up your corporate structure, managing state licensing, and integrating payroll systems to ensure complete regulatory compliance.'
    },
    es: {
      // Navigation
      home: 'Inicio',
      services: 'Servicios',
      testimonials: 'Testimonios',
      contact: 'Contacto',
      
      // Hero
      heroTagline: 'Socio Financiero de Confianza',
      heroTitle1: 'Soluciones Financieras y',
      heroTitle2: 'Empresariales Expertas',
      heroSubtitle: 'Optimizando su contabilidad, planificación fiscal estratégica y encontrando el seguro de salud ideal. XLG Solutions impulsa su crecimiento sostenible.',
      freeConsultationBtn: 'Consulta Gratuita',
      exploreServicesBtn: 'Explorar Servicios',
      activeClients: 'Clientes Activos',
      satisfactionRate: 'Tasa de Satisfacción',
      yearsExperience: 'Años de Experiencia',
      
      // About
      aboutTagline: 'Valores Fundamentales',
      aboutTitle: 'Su Socio Financiero de Confianza',
      aboutSubtitle: 'En XLG Solutions, nos dedicamos a ofrecer asesoramiento de primer nivel en contabilidad, impuestos y seguros para empoderar a pequeñas empresas y personas.',
      integrityTitle: 'Integridad',
      integrityDesc: 'Operamos con el más alto nivel de integridad, garantizando total transparencia y confianza en todas las relaciones con nuestros clientes.',
      expertiseTitle: 'Experiencia',
      expertiseDesc: 'Nuestro equipo está formado por profesionales certificados comprometidos en ofrecer soluciones financieras precisas, conformes y optimizadas.',
      commitmentTitle: 'Compromiso',
      commitmentDesc: 'Su crecimiento sostenible es nuestra prioridad principal. Brindamos soporte personalizado para ayudarle a administrar sus operaciones sin problemas.',
      
      // Testimonials
      testimonialsTagline: 'Reseñas',
      testimonialsTitle: 'Lo Que Dicen Nuestros Clientes',
      testimonialsSubtitle: 'Opiniones reales de propietarios de pequeñas empresas y personas que confían sus finanzas y coberturas a XLG Solutions.',
      review1Text: '"XLG Solutions transformó nuestros procesos financieros con su contabilidad receptiva (bookkeeping). Su equipo es profesional, experto y nos brinda un gran apoyo."',
      review1Author: 'Jane Doe',
      review1Role: 'Directora Ejecutiva, Startup Tecnológica',
      review2Text: '"El asesoramiento sobre planeación fiscal clara que recibimos fue invaluable. Nos ahorró una cantidad significativa y nos dio tranquilidad."',
      review2Author: 'John Smith',
      review2Role: 'Propietario de Pequeña Empresa',
      review3Text: '"Nos ayudaron con el seguro de salud e hicieron que elegir un plan fuera muy sencillo. Altamente recomendados por su experiencia y servicio amable."',
      review3Author: 'Maria Garcia',
      review3Role: 'Freelancer Independiente',
      reviewPromptTitle: 'Ayude a Otras Empresas a Encontrarnos',
      reviewPromptText: '¿Le gustan nuestros servicios? Al dejarnos una reseña en Google, compartir detalles sobre cómo le brindamos una <strong>planeación fiscal clara</strong>, <strong>contabilidad receptiva (bookkeeping)</strong> o <strong>ayuda con el seguro de salud</strong> ayuda a otras empresas a elegir al socio ideal.',
      
      // Contact Form
      contactTagline: 'Contacto',
      contactTitle: 'Construyamos Juntos',
      contactSubtitle: '¿Listo para optimizar sus procesos financieros o seleccionar un plan de salud? Contáctenos para una sesión de asesoramiento gratuita y sin compromiso.',
      fullNameLabel: 'Nombre Completo',
      emailLabel: 'Correo Electrónico',
      phoneLabel: 'Número de Teléfono',
      optionalLabel: '(Opcional)',
      inquiryLabel: 'Su Consulta',
      inquiryPlaceholder: 'Describa brevemente en qué servicios necesita ayuda...',
      nameRequiredError: 'El nombre completo es requerido.',
      emailRequiredError: 'Por favor introduzca un correo electrónico válido.',
      messageRequiredError: 'El mensaje de la consulta no puede estar vacío.',
      sendingBtn: 'Enviando Consulta...',
      sendMessageBtn: 'Enviar Mensaje',
      formSuccessTitle: '¡Muchas Gracias!',
      formSuccessDesc: 'Su consulta fue recibida. Un asesor le responderá dentro de las próximas 24 horas.',
      formErrorTitle: '¡Error!',
      formErrorDesc: 'Hubo un problema al enviar su mensaje. Por favor intente de nuevo más tarde.',
      
      // Footer
      rightsReserved: 'Todos los derechos reservados.',
      
      // Service Detail Page
      backToHome: 'Volver al Inicio',
      serviceOverview: 'Descripción del Servicio',
      keyFocusAreasTitle: 'Áreas Clave de Enfoque',
      requestConsultationTitle: 'Solicitar Consulta',
      requestConsultationDesc: '¿Tiene preguntas sobre nuestros servicios? Póngase en contacto con nuestros asesores especializados para una revisión gratuita y personalizada.',
      callSupportLabel: 'Llamar a Soporte',
      scheduleSessionBtn: 'Programar Sesión Gratuita',
      serviceNotFoundTitle: 'Servicio no Encontrado',
      serviceNotFoundDesc: 'El identificador de servicio solicitado no se pudo encontrar en nuestra base de datos.',
      returnToHomeBtn: 'Regresar al Inicio',
      
      // FAQ
      faqTagline: 'Preguntas Frecuentes',
      faqTitle: 'Preguntas Frecuentes',
      faqSubtitle: 'Encuentre respuestas a las dudas más comunes sobre nuestros servicios de contabilidad, impuestos y seguros.',
      faqQ1: '¿Qué servicios de contabilidad (bookkeeping) ofrecen?',
      faqA1: 'Nos encargamos de la clasificación de transacciones, conciliación bancaria, cuentas por cobrar y pagar, y la preparación de informes financieros mensuales (balance general y pérdidas y ganancias) para mantener las finanzas de su negocio ordenadas.',
      faqQ2: '¿Cómo puede beneficiar la planeación fiscal estratégica a mi empresa?',
      faqA2: 'En lugar de solo declarar a fin de año, la planeación fiscal anual identifica deducciones, créditos fiscales y estructuras que minimizan legalmente sus obligaciones tributarias estatales y federales.',
      faqQ3: '¿Cuál es la diferencia entre los planes del mercado ACA y los beneficios suplementarios?',
      faqA3: 'Los planes de ACA (Obamacare) ofrecen su cobertura de salud primaria (médicos, recetas, hospitalización). Los beneficios suplementarios (como seguros de accidentes o enfermedades graves) brindan pagos directos en efectivo para cubrir brechas y proteger sus ingresos.',
      faqQ4: '¿Pueden ayudarme a constituir una nueva entidad comercial?',
      faqA4: 'Sí, le asesoramos en la creación de empresas LLC y Corporaciones, configuración de su estructura corporativa, obtención de licencias comerciales e integración de nómina en conformidad con las leyes.'
    }
  };

  constructor() {
    this.detectAndSetLanguage();
  }

  // Set the language and save to local storage
  setLanguage(lang: Language): void {
    this.activeLangSignal.set(lang);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('xlg_pref_lang', lang);
    }
  }

  // Toggle between en and es
  toggleLanguage(): void {
    const nextLang: Language = this.activeLangSignal() === 'en' ? 'es' : 'en';
    this.setLanguage(nextLang);
  }

  // Get a translation key
  translate(key: string): string {
    const lang = this.activeLangSignal();
    return this.translations[lang]?.[key] || key;
  }

  // Detect browser language or saved language choice
  private detectAndSetLanguage(): void {
    // 1. Check local storage preference
    if (typeof localStorage !== 'undefined') {
      const savedLang = localStorage.getItem('xlg_pref_lang') as Language;
      if (savedLang === 'en' || savedLang === 'es') {
        this.activeLangSignal.set(savedLang);
        return;
      }
    }

    // 2. Check browser device language preference
    if (typeof navigator !== 'undefined' && navigator.language) {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('es')) {
        this.activeLangSignal.set('es');
        return;
      }
    }

    // 3. Fallback to default (English)
    this.activeLangSignal.set('en');
  }
}
