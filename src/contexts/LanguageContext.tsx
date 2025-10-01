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
    
    // Hero Section
    'hero.title': 'نيوكست للحلول الرقمية والتقنية',
    'hero.subtitle': 'فريق يقدم حلول تقنية ورقمية وتسويقية متكاملة لنمو أعمالك',
    'hero.description': 'في NuX.T ندمج بين الإبداع والخبرة التقنية لنقدم لك أنظمة إدارة متطورة، حلول تسويق رقمي، وخدمات إبداعية تساعدك على التميز في السوق.',
    'hero.cta.primary': 'تحدث معنا',
    'hero.cta.secondary': 'المزيد عنّا',
    
    // Activities Section
    'activities.title': 'نخدم مختلف القطاعات والأنشطة التجارية',
    'activities.subtitle': 'نقدم حلولنا لمجموعة واسعة من الأنشطة - إذا لم تجد نشاطك هنا، تواصل معنا وسنقدم لك الحل المناسب',
    'activities.restaurants': 'المطاعم والكافيهات',
    'activities.restaurants.desc': 'إدارة الطلبات، الصالة، والدليفري. تشمل أيضاً محلات العصائر والآيس كريم والبوفيهات والتسالي وعربات الطعام',
    'activities.retail': 'تجارة التجزئة والجملة',
    'activities.retail.desc': 'إدارة المبيعات والمخزون بكفاءة. تشمل تجارة الملابس والعطور ومستلزمات المنزل والقرطاسية وزينة السيارات ومواد البناء',
    'activities.bakery': 'المخابز والحلويات',
    'activities.bakery.desc': 'تتبع الإنتاج والوصفات. تشمل أيضاً محلات الشوكولاتة والكيك والفطائر والأسر المنتجة',
    'activities.pharmacy': 'الصيدليات والمستلزمات الطبية',
    'activities.pharmacy.desc': 'إدارة المخزون الدوائي، تواريخ الانتهاء، والمبيعات الطبية',
    'activities.services': 'الأنشطة الخدمية والصيانة',
    'activities.services.desc': 'إدارة المواعيد، الطلبات، والفواتير للخدمات المختلفة',
    
    // Solutions Section
    'solutions.title': 'مجموعة حلول تناسب نشاطك في نظام واحد',
    'solutions.subtitle': 'عمليات بيع أسهل من أيّ وقت مضى - استغلّ قوّة أنظمة نقاط البيع السحابية لزيادة المبيعات',
    'solutions.pos': 'نقاط البيع (POS)',
    'solutions.pos.desc': 'واجهة كاشير سريعة الاستجابة تعمل على الويب والأجهزة اللوحية مع تكامل قارئ باركود وإيصالات حرارية',
    'solutions.inventory': 'إدارة المخزون',
    'solutions.inventory.desc': 'وحدة تنبّؤ وتحليل مخزون مع تنبيهات حدّ أدنى وطرق FIFO/LIFO لتقليل النفاد',
    'solutions.sales': 'إدارة المبيعات',
    'solutions.sales.desc': 'لوحة تحكّم تفاعلية لإدارة دورة المبيعات من عرض السعر حتى التحصيل مع الفواتير وعروض الأسعار',
    'solutions.accounting': 'المحاسبة المالية',
    'solutions.accounting.desc': 'نظام قيود مزدوجة مع دفتر أستاذ وميزان مراجعة وتقارير مالية فورية',
    'solutions.branches': 'إدارة الفروع',
    'solutions.branches.desc': 'نظام مركزي لمزامنة بيانات الفروع مع مستويات صلاحيات وتوزيع مخزون وتتبع الأداء لحظيًا',
    'solutions.stocktaking': 'نظام الجرد',
    'solutions.stocktaking.desc': 'حل ذكي لمطابقة الجرد الفعلي مع السجلات الإلكترونية وأوامر التحويل لتقليل الفاقد',
    'solutions.ecommerce': 'المتاجر الإلكترونية',
    'solutions.ecommerce.desc': 'تصميم وتطوير متاجر إلكترونية احترافية مع ربط بوابات الدفع وإدارة المنتجات',
    'solutions.websites': 'المواقع والتطبيقات',
    'solutions.websites.desc': 'تصميم وتطوير مواقع ويب وتطبيقات موبايل احترافية بأحدث التقنيات',
    
    // Projects Section
    'projects.title': 'نماذج من أعمالنا',
    'projects.subtitle': 'مشاريع ناجحة نفخر بها',
    'projects.almutamed.title': 'المعتمد فارما - متجر أدوية',
    'projects.almutamed.desc': 'متجر صيدلي موثوق وسهل بواجهة عصرية ومتجاوبة. منتجات دوائية معتمدة وموثوقة المصدر مع تصميم حديث يسهّل عملية البحث والشراء',
    'projects.hospital.title': 'المستشفى الاستشاري الحديث',
    'projects.hospital.desc': 'واجهة عصرية تدعم الحجز واستعراض الأقسام والأطباء والمقالات - تجربة مرنة وسريعة على جميع الأجهزة',
    'projects.pharmacy.title': 'PharmacySys ERP - نظام إدارة الصيدليات',
    'projects.pharmacy.desc': 'نظام سلس لإدارة الصيدليات يشمل المبيعات، المشتريات، المخزون، الجرد، والتقارير مع ميزة الربط بين المتجر الإلكتروني والنظام المحاسبي',
    'projects.alhadi.title': 'شركة الهادي للمقاولات العامة',
    'projects.alhadi.desc': 'شركة رائدة في مجال المقاولات والإنشاءات، تقدم خدمات متكاملة تشمل البناء والتشييد والتصميم والإشراف الهندسي',
    
    // Features
    'features.title': 'لماذا NuX.T؟',
    'features.subtitle': 'ميزات تميزنا عن الآخرين',
    'features.easy': 'سهل الاستخدام',
    'features.easy.desc': 'واجهات بسيطة وسلسة لا تحتاج تدريب معقد',
    'features.support': 'دعم فني 24/7',
    'features.support.desc': 'فريق دعم جاهز لمساعدتك على مدار الساعة',
    'features.cloud': 'سحابي وآمن',
    'features.cloud.desc': 'أنظمة نقاط بيع سحابية تعمل أونلاين وأوفلاين بدون انقطاع',
    'features.updates': 'تحديثات مستمرة',
    'features.updates.desc': 'تحديثات دائمة ومستمرّة لضمان أفضل أداء',
    'features.reports': 'تقارير تفصيلية',
    'features.reports.desc': 'تقارير وبيانات تفصيلية لاتخاذ قرارات مبنية على البيانات',
    'features.training': 'تدريب شامل',
    'features.training.desc': 'تدريب الموظفين على استخدام الأنظمة بكفاءة',
    
    // After Sales Services
    'aftersales.title': 'خدمات ما بعد البيع',
    'aftersales.reports': 'تقارير وبيانات تفصيلية',
    'aftersales.updates': 'تحديثـات دائمة ومستمرّة',
    'aftersales.training': 'تدريب الموظفين',
    'aftersales.support': 'دعم فني 24/7',
    
    // CTA
    'cta.title': 'جاهز للبدء؟',
    'cta.subtitle': 'تسهيل إدارة مشروعك أينما تبيع وبناء علاقات قوية مع العملاء',
    'cta.button': 'اطلب الخدمة الآن',
    
    // About Section
    'about.vision.title': 'رؤيتنا',
    'about.vision.desc': 'أن نكون الشريك الأول للشركات في رحلة التحول الرقمي في المنطقة',
    'about.mission.title': 'مهمتنا',
    'about.mission.desc': 'تقديم حلول تقنية متكاملة تساعد الشركات على النمو والتطور',
    'about.values.title': 'قيمنا',
    'about.values.quality': 'الجودة',
    'about.values.innovation': 'الابتكار',
    'about.values.commitment': 'الالتزام',
    
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
    'footer.desc': 'نيوكست للحلول الرقمية والتقنية - شريكك في التحول الرقمي',
    
    // Common
    'common.learnmore': 'تعرّف على المزيد',
    'common.viewmore': 'عرض المزيد',
    'common.visit': 'زيارة',
    'common.explore': 'استكشف',
    'common.browse': 'تصفّح',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.activities': 'Activities',
    'nav.solutions': 'Solutions',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'NuX.T for Digital & Tech Solutions',
    'hero.subtitle': 'A team providing comprehensive technical, digital, and marketing solutions for your business growth',
    'hero.description': 'At NuX.T, we combine creativity and technical expertise to provide advanced management systems, digital marketing solutions, and creative services that help you stand out in the market.',
    'hero.cta.primary': 'Talk to Us',
    'hero.cta.secondary': 'Learn More',
    
    // Activities Section
    'activities.title': 'Serving Various Sectors and Business Activities',
    'activities.subtitle': 'We offer solutions for a wide range of activities - if you don\'t find your business here, contact us and we\'ll provide the right solution',
    'activities.restaurants': 'Restaurants & Cafes',
    'activities.restaurants.desc': 'Order, hall, and delivery management. Also includes juice shops, ice cream parlors, buffets, snacks, and food carts',
    'activities.retail': 'Retail & Wholesale',
    'activities.retail.desc': 'Efficient sales and inventory management. Includes clothing, perfumes, home supplies, stationery, car accessories, and building materials',
    'activities.bakery': 'Bakeries & Sweets',
    'activities.bakery.desc': 'Production and recipe tracking. Also includes chocolate shops, cakes, pastries, and home production',
    'activities.pharmacy': 'Pharmacies & Medical Supplies',
    'activities.pharmacy.desc': 'Pharmaceutical inventory management, expiry dates, and medical sales',
    'activities.services': 'Service Activities & Maintenance',
    'activities.services.desc': 'Appointment, order, and invoice management for various services',
    
    // Solutions Section
    'solutions.title': 'A Suite of Solutions for Your Business in One System',
    'solutions.subtitle': 'Sales operations easier than ever - leverage the power of cloud POS systems to increase sales',
    'solutions.pos': 'Point of Sale (POS)',
    'solutions.pos.desc': 'Fast-responsive cashier interface that works on web and tablets with barcode reader integration and thermal receipts',
    'solutions.inventory': 'Inventory Management',
    'solutions.inventory.desc': 'Predictive inventory analysis with minimum threshold alerts and FIFO/LIFO methods to reduce stockouts',
    'solutions.sales': 'Sales Management',
    'solutions.sales.desc': 'Interactive dashboard to manage the sales cycle from quotation to collection with invoices and price quotes',
    'solutions.accounting': 'Financial Accounting',
    'solutions.accounting.desc': 'Double-entry system with general ledger, trial balance, and instant financial reports',
    'solutions.branches': 'Branch Management',
    'solutions.branches.desc': 'Centralized system for synchronizing branch data with permission levels, inventory distribution, and real-time performance tracking',
    'solutions.stocktaking': 'Inventory System',
    'solutions.stocktaking.desc': 'Smart solution for matching physical inventory with electronic records and transfer orders to reduce waste',
    'solutions.ecommerce': 'E-commerce Stores',
    'solutions.ecommerce.desc': 'Professional e-commerce store design and development with payment gateway integration and product management',
    'solutions.websites': 'Websites & Applications',
    'solutions.websites.desc': 'Professional website and mobile app design and development with the latest technologies',
    
    // Projects Section
    'projects.title': 'Examples of Our Work',
    'projects.subtitle': 'Successful projects we\'re proud of',
    'projects.almutamed.title': 'Almutamed Pharma - Pharmacy Store',
    'projects.almutamed.desc': 'Reliable and easy pharmacy store with a modern and responsive interface. Certified and trusted pharmaceutical products with a modern design that makes searching and purchasing easy',
    'projects.hospital.title': 'Modern Consulting Hospital',
    'projects.hospital.desc': 'Modern interface supporting booking and browsing departments, doctors, and articles - flexible and fast experience on all devices',
    'projects.pharmacy.title': 'PharmacySys ERP - Pharmacy Management System',
    'projects.pharmacy.desc': 'Smooth pharmacy management system including sales, purchases, inventory, stocktaking, and reports with integration between online store and accounting system',
    'projects.alhadi.title': 'Al-Hadi General Contracting Company',
    'projects.alhadi.desc': 'Leading company in contracting and construction, providing comprehensive services including building, construction, design, and engineering supervision',
    
    // Features
    'features.title': 'Why NuX.T?',
    'features.subtitle': 'Features that set us apart',
    'features.easy': 'Easy to Use',
    'features.easy.desc': 'Simple and smooth interfaces that require no complex training',
    'features.support': '24/7 Support',
    'features.support.desc': 'Support team ready to help you around the clock',
    'features.cloud': 'Cloud & Secure',
    'features.cloud.desc': 'Cloud POS systems that work online and offline without interruption',
    'features.updates': 'Continuous Updates',
    'features.updates.desc': 'Constant and continuous updates to ensure the best performance',
    'features.reports': 'Detailed Reports',
    'features.reports.desc': 'Detailed reports and data for making data-driven decisions',
    'features.training': 'Comprehensive Training',
    'features.training.desc': 'Employee training on efficient system use',
    
    // After Sales Services
    'aftersales.title': 'After-Sales Services',
    'aftersales.reports': 'Detailed Reports and Data',
    'aftersales.updates': 'Constant and Continuous Updates',
    'aftersales.training': 'Employee Training',
    'aftersales.support': '24/7 Technical Support',
    
    // CTA
    'cta.title': 'Ready to Start?',
    'cta.subtitle': 'Simplify managing your business wherever you sell and build strong relationships with customers',
    'cta.button': 'Request Service Now',
    
    // About Section
    'about.vision.title': 'Our Vision',
    'about.vision.desc': 'To be the first partner for companies in their digital transformation journey in the region',
    'about.mission.title': 'Our Mission',
    'about.mission.desc': 'Providing comprehensive technical solutions that help companies grow and develop',
    'about.values.title': 'Our Values',
    'about.values.quality': 'Quality',
    'about.values.innovation': 'Innovation',
    'about.values.commitment': 'Commitment',
    
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
    'footer.desc': 'NuX.T for Digital & Tech Solutions - Your Digital Transformation Partner',
    
    // Common
    'common.learnmore': 'Learn More',
    'common.viewmore': 'View More',
    'common.visit': 'Visit',
    'common.explore': 'Explore',
    'common.browse': 'Browse',
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
