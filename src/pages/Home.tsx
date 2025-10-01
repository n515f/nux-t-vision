import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Users, TrendingUp, Store, Truck, Coffee, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  const activities = [
    { icon: Truck, title: t('activities.distribution'), color: 'text-blue-500' },
    { icon: Store, title: t('activities.retail'), color: 'text-purple-500' },
    { icon: Coffee, title: t('activities.restaurants'), color: 'text-orange-500' },
    { icon: ShoppingCart, title: t('activities.grocery'), color: 'text-green-500' },
  ];

  const solutions = [
    {
      icon: Zap,
      title: t('solutions.pos'),
      description: t('solutions.pos.desc'),
    },
    {
      icon: TrendingUp,
      title: t('solutions.inventory'),
      description: t('solutions.inventory.desc'),
    },
    {
      icon: Users,
      title: t('solutions.crm'),
      description: t('solutions.crm.desc'),
    },
    {
      icon: Shield,
      title: t('solutions.analytics'),
      description: t('solutions.analytics.desc'),
    },
  ];

  const features = [
    {
      title: t('features.easy'),
      description: t('features.easy.desc'),
    },
    {
      title: t('features.support'),
      description: t('features.support.desc'),
    },
    {
      title: t('features.cloud'),
      description: t('features.cloud.desc'),
    },
    {
      title: t('features.custom'),
      description: t('features.custom.desc'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50 -z-10" />
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">{t('hero.title')}</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-4">
              {t('hero.subtitle')}
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 glow-sm px-8"
              >
                <Link to="/contact">
                  {t('hero.cta.primary')}
                  <ArrowRight className="h-5 w-5 ltr:ml-2 rtl:mr-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8">
                <Link to="/about">{t('hero.cta.secondary')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('activities.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('activities.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <Link key={index} to="/activities">
                <Card className="hover-lift hover-glow cursor-pointer transition-all duration-300 animate-scale-in">
                  <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                    <div className={`p-4 rounded-2xl bg-gradient-primary/10 mb-4 ${activity.color}`}>
                      <activity.icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold text-lg">{activity.title}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('solutions.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('solutions.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="hover-lift hover-glow transition-all duration-300 animate-scale-in"
              >
                <CardContent className="p-6">
                  <div className="p-3 rounded-xl bg-gradient-primary w-fit mb-4 shadow-glow-sm">
                    <solution.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('features.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('features.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 rtl:space-x-reverse p-6 rounded-2xl bg-card hover:bg-muted/30 transition-all duration-300 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-glow-sm">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-primary text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
            </div>
            <CardContent className="p-12 text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cta.title')}</h2>
              <p className="text-lg mb-8 opacity-90">{t('cta.subtitle')}</p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 px-8"
              >
                <Link to="/contact">
                  {t('cta.button')}
                  <ArrowRight className="h-5 w-5 ltr:ml-2 rtl:mr-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
