import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, Store, Coffee, ShoppingCart, Cake, Wrench, Briefcase, Gift } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Activities = () => {
  const { t } = useLanguage();

  const activities = [
    {
      icon: Truck,
      title: t('activities.distribution'),
      description: 'نظام متكامل لإدارة التوزيع والمندوبين مع تتبع المخزون والطلبات',
      path: '/activities/distribution',
      color: 'text-blue-500',
    },
    {
      icon: Store,
      title: t('activities.retail'),
      description: 'حلول POS للتجزئة والجملة مع إدارة المخزون والعملاء',
      path: '/activities/retail',
      color: 'text-purple-500',
    },
    {
      icon: Coffee,
      title: t('activities.restaurants'),
      description: 'نظام POS متخصص للمطاعم والكافيهات مع إدارة الطاولات والطلبات',
      path: '/activities/restaurants',
      color: 'text-orange-500',
    },
    {
      icon: ShoppingCart,
      title: t('activities.grocery'),
      description: 'نظام POS للبقالات والسوبرماركت مع الباركود والميزان',
      path: '/activities/grocery',
      color: 'text-green-500',
    },
    {
      icon: Cake,
      title: t('activities.bakery'),
      description: 'نظام POS للمخابز والحلويات مع إدارة الإنتاج والوصفات',
      path: '/activities/bakery',
      color: 'text-pink-500',
    },
    {
      icon: Wrench,
      title: t('activities.services'),
      description: 'نظام لإدارة الخدمات السريعة والصيانة مع تتبع الطلبات',
      path: '/activities/services',
      color: 'text-cyan-500',
    },
    {
      icon: Briefcase,
      title: t('activities.consulting'),
      description: 'حلول CRM وإدارة المشاريع للاستشارات والخدمات المهنية',
      path: '/activities/consulting',
      color: 'text-indigo-500',
    },
    {
      icon: Gift,
      title: t('activities.gifts'),
      description: 'نظام POS لمحلات الورود والهدايا مع إدارة المناسبات',
      path: '/activities/gifts',
      color: 'text-red-500',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('activities.title')}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('activities.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="hover-lift hover-glow transition-all duration-300 animate-scale-in group"
            >
              <CardHeader>
                <div className={`p-4 rounded-2xl bg-gradient-primary/10 w-fit mb-4 ${activity.color} group-hover:scale-110 transition-transform duration-300`}>
                  <activity.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">{activity.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{activity.description}</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                >
                  <Link to={activity.path}>
                    اعرف المزيد
                    <ArrowRight className="h-4 w-4 ltr:ml-2 rtl:mr-2 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
