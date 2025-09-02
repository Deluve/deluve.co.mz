"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
const translations = {
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.portfolio': 'Portfólio',
    'nav.getquote': 'Obter Orçamento',
    'nav.contact': 'Contato',
    
    // Header
    'header.contact': 'Contate-nos',
    'header.portfolio': 'Ver Portfólio',
    'header.waitlist': 'Lista de Espera',
    
    // Hero
    'hero.title': 'Criamos experiências digitais que importam',
    'hero.subtitle': 'A Deluve é um estúdio criativo que transforma ideias em soluções digitais inovadoras e experiências memoráveis.',
    'hero.viewProjects': 'Ver Projetos',
    'hero.getQuote': 'Obter Orçamento',
    
    // About
    'about.badge': 'Sobre a Deluve',
    'about.title': 'Transformando Ideias em Excelência Digital',
    'about.description': 'Criamos soluções digitais de ponta que transformam negócios e geram resultados reais através de tecnologia e design inovadores.',
    'about.subtitle': 'Soluções Digitais Que Impulsionam o Crescimento',
    'about.subdescription': 'Do conceito ao lançamento, entregamos experiências digitais impressionantes que engajam usuários e geram resultados mensuráveis para o negócio.',
    'about.projects': 'Projetos Entregues',
    'about.experience': 'Anos de Experiência',
    'about.whyChooseUs': 'Por Que Nos Escolher',
    'about.whyChooseUsDesc': 'Não acredite apenas na nossa palavra. Aqui está o que nos torna o parceiro perfeito para sua jornada de transformação digital.',
    'about.learnMore': 'Saiba Mais Sobre Nós',
    
    // Why Choose Us
    'why.fast': 'Rápido & Eficiente',
    'why.fastDesc': 'Receba seu projeto entregue no prazo com nossos processos otimizados e stack tecnológico de ponta.',
    'why.results': 'Resultados Comprovados',
    'why.resultsDesc': 'Junte-se a mais de 50 clientes satisfeitos que viram crescimento mensurável e sucesso com nossas soluções.',
    'why.support': 'Suporte Dedicado',
    'why.supportDesc': 'Estamos com você em cada etapa, fornecendo suporte contínuo e manutenção para seu sucesso.',
    'why.quality': 'Qualidade Garantida',
    'why.qualityDesc': 'Cada projeto atende nossos altos padrões com testes rigorosos e processos de garantia de qualidade.',
    
    // Services
    'services.badge': 'Nossos Serviços',
    'services.title': 'Soluções Digitais Abrangentes',
    'services.description': 'Do desenvolvimento de software personalizado a soluções com IA, fornecemos serviços digitais completos que transformam seu negócio e impulsionam crescimento sustentável no cenário digital.',
    'services.whyChoose': 'Por Que Escolher a Deluve?',
    'services.whyChooseDesc': 'Combinamos expertise técnica com pensamento estratégico para entregar soluções que não apenas atendem suas necessidades, mas superam suas expectativas.',
    'services.innovation': 'Inovação Primeiro',
    'services.innovationDesc': 'Tecnologia de ponta e soluções criativas',
    'services.results': 'Focados em Resultados',
    'services.resultsDesc': 'Foco em resultados de negócio mensuráveis',
    'services.client': 'Centrado no Cliente',
    'services.clientDesc': 'Abordagem de parceria com cada cliente',
    'services.quality': 'Qualidade Garantida',
    'services.qualityDesc': 'Testes rigorosos e padrões de qualidade',
    'services.ready': 'Pronto para Transformar Seu Negócio?',
    'services.readyDesc': 'Vamos discutir seu projeto e explorar como nossas soluções digitais abrangentes podem ajudá-lo a alcançar seus objetivos de negócio.',
    'services.startProject': 'Iniciar Projeto',
    'services.viewWork': 'Ver Nosso Trabalho',
    
    // Portfolio
    'portfolio.badge': 'Nosso Portfólio',
    'portfolio.title': 'Nossos Últimos Projetos',
    'portfolio.description': 'Descubra nosso trabalho mais recente e veja como ajudamos empresas a transformar sua presença digital com soluções inovadoras e tecnologia de ponta.',
    'portfolio.exploreAll': 'Explorar Todos os Projetos',
    
    // Footer
    'footer.navigation': 'Navegação',
    'footer.services': 'Serviços',
    'footer.webDevelopment': 'Desenvolvimento Web',
    'footer.mobileApps': 'Aplicações Mobile',
    'footer.uiuxDesign': 'Design UI/UX',
    'footer.digitalMarketing': 'Marketing Digital',
    'footer.consulting': 'Consultoria Tecnológica',
    'footer.connect': 'Conecte-se',
    'footer.followUs': 'Siga-nos nas redes sociais:',
    'footer.businessHours': 'Horário de atendimento:',
    'footer.mondayFriday': 'Segunda - Sexta: 8h - 18h',
    'footer.saturday': 'Sábado: 9h - 14h',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Uso',
    'footer.cookies': 'Política de Cookies',
    'footer.sitemap': 'Mapa do Site',
    'footer.madeWith': 'Desenvolvido com ❤️ em Moçambique',
    
    // Get Quote Page
    'getquote.title': 'Obter Orçamento Personalizado',
    'getquote.subtitle': 'Vamos transformar sua ideia em realidade',
    'getquote.description': 'Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas com uma proposta personalizada para seu projeto.',
    'getquote.form.title': 'Informações do Projeto',
    'getquote.form.name': 'Nome Completo',
    'getquote.form.email': 'Email',
    'getquote.form.phone': 'Telefone',
    'getquote.form.company': 'Empresa',
    'getquote.form.projectType': 'Tipo de Projeto',
    'getquote.form.projectType.web': 'Website',
    'getquote.form.projectType.mobile': 'Aplicação Mobile',
    'getquote.form.projectType.ecommerce': 'E-commerce',
    'getquote.form.projectType.other': 'Outro',
    'getquote.form.budget': 'Orçamento Estimado',
    'getquote.form.budget.low': 'Até $5,000',
    'getquote.form.budget.medium': '$5,000 - $15,000',
    'getquote.form.budget.high': '$15,000 - $50,000',
    'getquote.form.budget.enterprise': 'Acima de $50,000',
    'getquote.form.timeline': 'Prazo Desejado',
    'getquote.form.timeline.urgent': 'Urgente (1-2 meses)',
    'getquote.form.timeline.standard': 'Padrão (3-6 meses)',
    'getquote.form.timeline.flexible': 'Flexível (6+ meses)',
    'getquote.form.description': 'Descrição do Projeto',
    'getquote.form.description.placeholder': 'Descreva seu projeto, objetivos, funcionalidades desejadas e qualquer requisito específico...',
    'getquote.form.submit': 'Enviar Solicitação',
    'getquote.form.submitting': 'Enviando...',
    'getquote.success.title': 'Solicitação Enviada!',
    'getquote.success.message': 'Obrigado por entrar em contato conosco. Nossa equipe analisará sua solicitação e entrará em contato em até 24 horas.',
    'getquote.success.back': 'Voltar ao Início',
    
    // Language
    'language.pt': 'Português',
    'language.en': 'English',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.getquote': 'Get Quote',
    'nav.contact': 'Contact',
    
    // Header
    'header.contact': 'Contact Us',
    'header.portfolio': 'View Portfolio',
    'header.waitlist': 'Join Waitlist',
    
    // Hero
    'hero.title': 'We create digital experiences that matter',
    'hero.subtitle': 'Deluve is a creative startup studio that transforms ideas into innovative digital solutions and memorable experiences.',
    'hero.viewProjects': 'View Projects',
    'hero.getQuote': 'Get Quote',
    
    // About
    'about.badge': 'About Deluve',
    'about.title': 'Transforming Ideas Into Digital Excellence',
    'about.description': 'We create cutting-edge digital solutions that transform businesses and drive real results through innovative technology and design.',
    'about.subtitle': 'Digital Solutions That Drive Growth',
    'about.subdescription': 'From concept to launch, we deliver stunning digital experiences that engage users and drive measurable business results.',
    'about.projects': 'Projects Delivered',
    'about.experience': 'Years Experience',
    'about.whyChooseUs': 'Why Choose Us',
    'about.whyChooseUsDesc': 'Don\'t just take our word for it. Here\'s what makes us the perfect partner for your digital transformation journey.',
    'about.learnMore': 'Learn More About Us',
    
    // Why Choose Us
    'why.fast': 'Fast & Efficient',
    'why.fastDesc': 'Get your project delivered on time with our streamlined processes and cutting-edge technology stack.',
    'why.results': 'Proven Results',
    'why.resultsDesc': 'Join 50+ satisfied clients who have seen measurable growth and success with our solutions.',
    'why.support': 'Dedicated Support',
    'why.supportDesc': 'We\'re with you every step of the way, providing ongoing support and maintenance for your success.',
    'why.quality': 'Quality Guaranteed',
    'why.qualityDesc': 'Every project meets our high standards with rigorous testing and quality assurance processes.',
    
    // Services
    'services.badge': 'Our Services',
    'services.title': 'Comprehensive Digital Solutions',
    'services.description': 'From custom software development to AI-powered solutions, we provide end-to-end digital services that transform your business and drive sustainable growth in the digital landscape.',
    'services.whyChoose': 'Why Choose Deluve?',
    'services.whyChooseDesc': 'We combine technical expertise with strategic thinking to deliver solutions that not only meet your needs but exceed your expectations.',
    'services.innovation': 'Innovation First',
    'services.innovationDesc': 'Cutting-edge technology and creative solutions',
    'services.results': 'Results Driven',
    'services.resultsDesc': 'Focus on measurable business outcomes',
    'services.client': 'Client Centric',
    'services.clientDesc': 'Partnership approach with every client',
    'services.quality': 'Quality Assured',
    'services.qualityDesc': 'Rigorous testing and quality standards',
    'services.ready': 'Ready to Transform Your Business?',
    'services.readyDesc': 'Let\'s discuss your project and explore how our comprehensive digital solutions can help you achieve your business goals.',
    'services.startProject': 'Start Your Project',
    'services.viewWork': 'View Our Work',
    
    // Portfolio
    'portfolio.badge': 'Our Portfolio',
    'portfolio.title': 'Our Latest Projects',
    'portfolio.description': 'Discover our latest work and see how we\'ve helped businesses transform their digital presence with innovative solutions and cutting-edge technology.',
    'portfolio.exploreAll': 'Explore All Projects',
    
    // Footer
    'footer.navigation': 'Navigation',
    'footer.services': 'Services',
    'footer.webDevelopment': 'Web Development',
    'footer.mobileApps': 'Mobile Applications',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.digitalMarketing': 'Digital Marketing',
    'footer.consulting': 'Technology Consulting',
    'footer.connect': 'Connect',
    'footer.followUs': 'Follow us on social media:',
    'footer.businessHours': 'Business hours:',
    'footer.mondayFriday': 'Monday - Friday: 8AM - 6PM',
    'footer.saturday': 'Saturday: 9AM - 2PM',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
    'footer.sitemap': 'Sitemap',
    'footer.madeWith': 'Made with ❤️ in Mozambique',
    
    // Get Quote Page
    'getquote.title': 'Get Custom Quote',
    'getquote.subtitle': 'Let\'s transform your idea into reality',
    'getquote.description': 'Fill out the form below and our team will get back to you within 24 hours with a personalized proposal for your project.',
    'getquote.form.title': 'Project Information',
    'getquote.form.name': 'Full Name',
    'getquote.form.email': 'Email',
    'getquote.form.phone': 'Phone',
    'getquote.form.company': 'Company',
    'getquote.form.projectType': 'Project Type',
    'getquote.form.projectType.web': 'Website',
    'getquote.form.projectType.mobile': 'Mobile App',
    'getquote.form.projectType.ecommerce': 'E-commerce',
    'getquote.form.projectType.other': 'Other',
    'getquote.form.budget': 'Estimated Budget',
    'getquote.form.budget.low': 'Up to $5,000',
    'getquote.form.budget.medium': '$5,000 - $15,000',
    'getquote.form.budget.high': '$15,000 - $50,000',
    'getquote.form.budget.enterprise': 'Above $50,000',
    'getquote.form.timeline': 'Desired Timeline',
    'getquote.form.timeline.urgent': 'Urgent (1-2 months)',
    'getquote.form.timeline.standard': 'Standard (3-6 months)',
    'getquote.form.timeline.flexible': 'Flexible (6+ months)',
    'getquote.form.description': 'Project Description',
    'getquote.form.description.placeholder': 'Describe your project, objectives, desired features, and any specific requirements...',
    'getquote.form.submit': 'Send Request',
    'getquote.form.submitting': 'Sending...',
    'getquote.success.title': 'Request Sent!',
    'getquote.success.message': 'Thank you for reaching out to us. Our team will review your request and get back to you within 24 hours.',
    'getquote.success.back': 'Back to Home',
    
    // Language
    'language.pt': 'Português',
    'language.en': 'English',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Load language from localStorage on mount
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 