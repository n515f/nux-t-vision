import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Zap, TrendingUp, Users, BarChart3, Globe, Cloud, Lock, Smartphone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Solutions = () => {
  const { t } = useLanguage();

  const solutions = [
    {
      icon: Zap,
      title: t('solutions.pos'),
      description: t('solutions.pos.desc'),
      features: ['واجهة سهلة وسريعة', 'دعم متعدد الفروع', 'طباعة فواتير', 'دعم الدفع الإلكتروني'],
      color: 'text-yellow-500',
    },
    {
      icon: TrendingUp,
      title: t('solutions.inventory'),
      description: t('solutions.inventory.desc'),
      features: ['تتبع المخزون لحظياً', 'تنبيهات نفاد المخزون', 'إدارة الموردين', 'تقارير مفصلة'],
      color: 'text-green-500',
    },
    {
      icon: Users,
      title: t('solutions.crm'),
      description: t('solutions.crm.desc'),
      features: ['قاعدة بيانات العملاء', 'برامج الولاء', 'حملات تسويقية', 'تحليل سلوك العملاء'],
      color: 'text-blue-500',
    },
    {
      icon: BarChart3,
      title: t('solutions.analytics'),
      description: t('solutions.analytics.desc'),
      features: ['لوحات تحكم تفاعلية', 'تقارير مالية', 'تحليل المبيعات', 'توقعات ذكية'],
      color: 'text-purple-500',
    },
    {
      icon: Cloud,
      title: 'حلول سحابية',
      description: 'أنظمة سحابية آمنة وموثوقة مع نسخ احتياطي تلقائي',
      features: ['وصول من أي مكان', 'نسخ احتياطي تلقائي', 'تحديثات مستمرة', 'أمان عالي'],
      color: 'text-cyan-500',
    },
    {
      icon: Smartphone,
      title: 'تطبيقات الموبايل',
      description: 'تطبيقات iOS و Android متكاملة مع أنظمتك',
      features: ['تطبيق للعملاء', 'تطبيق للإدارة', 'طلبات أونلاين', 'إشعارات فورية'],
      color: 'text-orange-500',
    },
    {
      icon: Globe,
      title: 'مواقع إلكترونية',
      description: 'تصميم وتطوير مواقع احترافية متجاوبة',
      features: ['تصميم عصري', 'متجاوب مع الموبايل', 'محسّن للسيو', 'سريع وآمن'],
      color: 'text-pink-500',
    },
    {
      icon: Lock,
      title: 'الأمان والحماية',
      description: 'أعلى معايير الأمان لحماية بياناتك',
      features: ['تشفير البيانات', 'صلاحيات المستخدمين', 'سجل العمليات', 'نسخ احتياطي'],
      color: 'text-red-500',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('solutions.title')}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('solutions.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="hover-lift hover-glow transition-all duration-300 animate-scale-in"
            >
              <CardHeader>
                <div className={`p-4 rounded-2xl bg-gradient-primary/10 w-fit mb-4 ${solution.color}`}>
                  <solution.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary ltr:mr-2 rtl:ml-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-primary text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">هل تحتاج حل مخصص؟</h2>
            <p className="text-lg mb-8 opacity-90">نحن نقدم حلول مخصصة تناسب احتياجاتك الفريدة</p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              <Link to="/contact">تواصل معنا</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Solutions;
