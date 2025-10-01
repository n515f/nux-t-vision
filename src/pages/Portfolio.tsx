import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'نظام POS لسلسلة مطاعم',
      category: 'مطاعم',
      description: 'نظام نقاط بيع متكامل لسلسلة مطاعم تضم 15 فرع في جميع أنحاء المملكة',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop',
      tags: ['POS', 'مطاعم', 'متعدد الفروع'],
      results: ['زيادة الكفاءة 40%', 'تقليل الأخطاء 60%', 'تحسين الخدمة'],
    },
    {
      title: 'نظام إدارة مخزون للسوبرماركت',
      category: 'بقالات',
      description: 'حل متكامل لإدارة المخزون والمبيعات لسوبرماركت كبير',
      image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=500&h=300&fit=crop',
      tags: ['مخزون', 'POS', 'سوبرماركت'],
      results: ['توفير الوقت 50%', 'تقليل الفاقد 35%', 'زيادة الأرباح'],
    },
    {
      title: 'تطبيق توزيع للمندوبين',
      category: 'توزيع',
      description: 'تطبيق موبايل وويب لإدارة التوزيع والمندوبين مع تتبع GPS',
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=500&h=300&fit=crop',
      tags: ['توزيع', 'موبايل', 'GPS'],
      results: ['تحسين التوزيع 45%', 'توفير التكاليف', 'دقة التتبع'],
    },
    {
      title: 'نظام CRM للاستشارات',
      category: 'استشارات',
      description: 'نظام إدارة علاقات العملاء والمشاريع لشركة استشارات',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      tags: ['CRM', 'إدارة مشاريع', 'استشارات'],
      results: ['زيادة العملاء 30%', 'تحسين المتابعة', 'إنتاجية أعلى'],
    },
    {
      title: 'موقع تجارة إلكترونية',
      category: 'تجارة إلكترونية',
      description: 'متجر إلكتروني متكامل مع نظام دفع آمن وشحن ذكي',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      tags: ['ويب', 'تجارة', 'دفع إلكتروني'],
      results: ['مبيعات أونلاين 70%', 'عملاء جدد', 'نمو مستمر'],
    },
    {
      title: 'نظام حجز للخدمات',
      category: 'خدمات',
      description: 'منصة حجز وإدارة مواعيد لمراكز خدمات متعددة',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=300&fit=crop',
      tags: ['حجوزات', 'خدمات', 'إدارة'],
      results: ['تنظيم المواعيد', 'تقليل الانتظار', 'رضا العملاء'],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('nav.portfolio')}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            تعرف على بعض المشاريع الناجحة التي قمنا بتطويرها لعملائنا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-lift hover-glow transition-all duration-300 animate-scale-in group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge className="absolute top-4 right-4 rtl:right-auto rtl:left-4">
                  {project.category}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-sm mb-2">النتائج:</h4>
                  <ul className="space-y-1">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary ltr:mr-2 rtl:ml-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                >
                  <ExternalLink className="h-4 w-4 ltr:mr-2 rtl:ml-2" />
                  عرض التفاصيل
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card className="bg-gradient-primary text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">هل لديك مشروع؟</h2>
              <p className="text-lg mb-8 opacity-90">
                دعنا نساعدك في تحويل فكرتك إلى واقع
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              >
                ابدأ مشروعك الآن
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
