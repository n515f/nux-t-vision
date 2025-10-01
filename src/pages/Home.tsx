import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Store, Utensils, ShoppingBag, Coffee, Package, Stethoscope, Wrench, TrendingUp, Users, BarChart3, Shield, DollarSign, Building2, Warehouse, Clock, MessageSquare, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useLanguage();

  const activities = [
    { icon: Utensils, title: t('activities.restaurants'), description: t('activities.restaurants.desc'), link: '/activities' },
    { icon: Store, title: t('activities.retail'), description: t('activities.retail.desc'), link: '/activities' },
    { icon: Coffee, title: t('activities.bakery'), description: t('activities.bakery.desc'), link: '/activities' },
    { icon: Stethoscope, title: t('activities.pharmacy'), description: t('activities.pharmacy.desc'), link: '/activities' },
    { icon: Wrench, title: t('activities.services'), description: t('activities.services.desc'), link: '/activities' },
  ];

  const solutions = [
    { icon: Store, title: t('solutions.pos'), description: t('solutions.pos.desc') },
    { icon: Package, title: t('solutions.inventory'), description: t('solutions.inventory.desc') },
    { icon: DollarSign, title: t('solutions.sales'), description: t('solutions.sales.desc') },
    { icon: BarChart3, title: t('solutions.accounting'), description: t('solutions.accounting.desc') },
    { icon: Building2, title: t('solutions.branches'), description: t('solutions.branches.desc') },
    { icon: Warehouse, title: t('solutions.stocktaking'), description: t('solutions.stocktaking.desc') },
  ];

  const features = [
    { icon: Shield, title: t('features.easy'), description: t('features.easy.desc') },
    { icon: Clock, title: t('features.support'), description: t('features.support.desc') },
    { icon: TrendingUp, title: t('features.cloud'), description: t('features.cloud.desc') },
    { icon: Award, title: t('features.updates'), description: t('features.updates.desc') },
    { icon: BarChart3, title: t('features.reports'), description: t('features.reports.desc') },
    { icon: Users, title: t('features.training'), description: t('features.training.desc') },
  ];

  const afterSales = [
    { title: t('aftersales.reports'), icon: BarChart3 },
    { title: t('aftersales.updates'), icon: TrendingUp },
    { title: t('aftersales.training'), icon: Users },
    { title: t('aftersales.support'), icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-background opacity-90" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-white/90 drop-shadow font-semibold">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg md:text-xl mb-8 text-white/80 max-w-3xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button size="lg" className="text-lg px-8 py-6 hover-lift shadow-glow">
                  {t('hero.cta.primary')}
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-primary">
                  {t('hero.cta.secondary')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Activities Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              {t('activities.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('activities.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <Card key={index} className="group hover-lift hover:shadow-glow transition-all duration-300 border-2 animate-scale-in overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="mb-4 p-4 rounded-xl bg-gradient-to-br from-primary to-primary-light w-16 h-16 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{activity.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {activity.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={activity.link}>
                      <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                        {t('common.viewmore')} →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              {t('solutions.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('solutions.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card key={index} className="hover-lift hover:shadow-glow transition-all duration-300 group border-2" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="mb-4 p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary-light/10 w-16 h-16 flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-light transition-all">
                      <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{solution.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/solutions">
              <Button size="lg" className="px-8 py-6 text-lg hover-lift shadow-glow">
                {t('common.explore')} {t('solutions.title')} →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              {t('features.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover-lift hover:shadow-glow transition-all duration-300 border-2 group" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-to-br from-accent/20 to-accent-light/20 w-20 h-20 flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-accent-light transition-all">
                      <Icon className="h-10 w-10 text-accent group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-xl mb-3">{feature.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* After Sales Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              {t('aftersales.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {afterSales.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="text-center hover-lift transition-all duration-300 border-2 bg-gradient-to-br from-card to-muted/20 group" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-to-br from-primary/10 to-primary-light/10 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-dark to-primary opacity-90" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              {t('cta.title')}
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-10 py-7 hover-lift shadow-glow text-primary font-bold">
                {t('cta.button')} →
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
