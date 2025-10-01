import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';
type Direction = 'rtl' | 'ltr';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.activities': 'اختر نشاطك',
    'nav.solutions': 'الحلول',
    'nav.portfolio': 'أعمالنا',
    'nav.about': 'من نحن',
    'nav.contact': 'تواصل معنا',
    'nav.changelog': 'ما الجديد',
    'nav.blog': 'المدونة',
    
    // Hero Section
    'hero.title': 'شريكك في التحول الرقمي',
    'hero.subtitle': 'حلول برمجية متكاملة لنشاطك التجاري',
    'hero.description': 'نقدم حلول POS احترافية وبرمجيات مخصصة للمطاعم، البقالات، التوزيع والمزيد. نساعدك على تحويل عملك رقمياً بكفاءة وسهولة.',
    'hero.cta.primary': 'ابدأ الآن',
    'hero.cta.secondary': 'تعرف علينا',
    
    // Activities Section
    'activities.title': 'اختر نشاطك التجاري',
    'activities.subtitle': 'حلول مصممة خصيصاً لكل نشاط',
    'activities.distribution': 'التوزيع والمندوبين',
    'activities.retail': 'التجزئة والجملة',
    'activities.restaurants': 'المطاعم والكافيهات',
    'activities.grocery': 'البقالات والسوبرماركت',
    'activities.bakery': 'المخابز والحلويات',
    'activities.services': 'الخدمات السريعة',
    'activities.consulting': 'الاستشارات',
    'activities.gifts': 'الورود والهدايا',
    
    // Solutions Section
    'solutions.title': 'حلولنا المتكاملة',
    'solutions.subtitle': 'تكنولوجيا حديثة لعملك',
    'solutions.pos': 'نقاط البيع (POS)',
    'solutions.pos.desc': 'نظام POS متكامل وسهل الاستخدام',
    'solutions.inventory': 'إدارة المخزون',
    'solutions.inventory.desc': 'تتبع وإدارة مخزونك بكفاءة',
    'solutions.crm': 'إدارة العملاء (CRM)',
    'solutions.crm.desc': 'بناء علاقات قوية مع عملائك',
    'solutions.analytics': 'التقارير والتحليلات',
    'solutions.analytics.desc': 'اتخذ قرارات مبنية على البيانات',
    
    // Features
    'features.title': 'لماذا NuX.T؟',
    'features.subtitle': 'ميزات تميزنا عن الآخرين',
    'features.easy': 'سهل الاستخدام',
    'features.easy.desc': 'واجهات بسيطة وسلسة لا تحتاج تدريب معقد',
    'features.support': 'دعم فني متميز',
    'features.support.desc': 'فريق دعم جاهز لمساعدتك على مدار الساعة',
    'features.cloud': 'سحابي ومحلي',
    'features.cloud.desc': 'عمل أونلاين وأوفلاين بدون انقطاع',
    'features.custom': 'قابل للتخصيص',
    'features.custom.desc': 'نظام مرن يتكيف مع احتياجاتك الخاصة',
    
    // CTA
    'cta.title': 'جاهز للبدء؟',
    'cta.subtitle': 'انضم إلى مئات العملاء الذين يثقون بنا',
    'cta.button': 'تواصل معنا الآن',
    
    // Footer
    'footer.company': 'الشركة',
    'footer.solutions': 'الحلول',
    'footer.support': 'الدعم',
    'footer.legal': 'قانوني',
    'footer.about': 'من نحن',
    'footer.careers': 'الوظائف',
    'footer.contact': 'تواصل معنا',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'الشروط والأحكام',
    'footer.faq': 'الأسئلة الشائعة',
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.follow': 'تابعنا',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.activities': 'Activities',
    'nav.solutions': 'Solutions',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.changelog': 'Changelog',
    'nav.blog': 'Blog',
    
    // Hero Section
    'hero.title': 'Your Digital Transformation Partner',
    'hero.subtitle': 'Comprehensive Software Solutions for Your Business',
    'hero.description': 'We provide professional POS solutions and custom software for restaurants, grocery stores, distribution, and more. We help you digitally transform your business efficiently and easily.',
    'hero.cta.primary': 'Get Started',
    'hero.cta.secondary': 'Learn More',
    
    // Activities Section
    'activities.title': 'Choose Your Business',
    'activities.subtitle': 'Solutions tailored for every business',
    'activities.distribution': 'Distribution & Sales',
    'activities.retail': 'Retail & Wholesale',
    'activities.restaurants': 'Restaurants & Cafes',
    'activities.grocery': 'Grocery & Supermarkets',
    'activities.bakery': 'Bakeries & Sweets',
    'activities.services': 'Quick Services',
    'activities.consulting': 'Consulting',
    'activities.gifts': 'Flowers & Gifts',
    
    // Solutions Section
    'solutions.title': 'Our Comprehensive Solutions',
    'solutions.subtitle': 'Modern technology for your business',
    'solutions.pos': 'Point of Sale (POS)',
    'solutions.pos.desc': 'Integrated and easy-to-use POS system',
    'solutions.inventory': 'Inventory Management',
    'solutions.inventory.desc': 'Track and manage your inventory efficiently',
    'solutions.crm': 'Customer Management (CRM)',
    'solutions.crm.desc': 'Build strong relationships with your customers',
    'solutions.analytics': 'Reports & Analytics',
    'solutions.analytics.desc': 'Make data-driven decisions',
    
    // Features
    'features.title': 'Why NuX.T?',
    'features.subtitle': 'Features that set us apart',
    'features.easy': 'Easy to Use',
    'features.easy.desc': 'Simple and smooth interfaces that require no complex training',
    'features.support': 'Excellent Support',
    'features.support.desc': 'Support team ready to help you around the clock',
    'features.cloud': 'Cloud & Local',
    'features.cloud.desc': 'Work online and offline without interruption',
    'features.custom': 'Customizable',
    'features.custom.desc': 'Flexible system that adapts to your specific needs',
    
    // CTA
    'cta.title': 'Ready to Start?',
    'cta.subtitle': 'Join hundreds of customers who trust us',
    'cta.button': 'Contact Us Now',
    
    // Footer
    'footer.company': 'Company',
    'footer.solutions': 'Solutions',
    'footer.support': 'Support',
    'footer.legal': 'Legal',
    'footer.about': 'About Us',
    'footer.careers': 'Careers',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.faq': 'FAQ',
    'footer.rights': 'All rights reserved',
    'footer.follow': 'Follow Us',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('ar');
  const [direction, setDirection] = useState<Direction>('rtl');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    setDirection(dir);
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'ar' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    } else {
      setLanguage('ar');
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
