import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Award, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: 'رؤيتنا',
      description: 'أن نكون الشريك الأول للشركات في رحلة التحول الرقمي بالمملكة والمنطقة',
      color: 'text-blue-500',
    },
    {
      icon: Eye,
      title: 'رسالتنا',
      description: 'تقديم حلول برمجية مبتكرة تساعد الشركات على النمو والنجاح',
      color: 'text-purple-500',
    },
    {
      icon: Award,
      title: 'قيمنا',
      description: 'الابتكار، الجودة، الشفافية، والالتزام برضا العملاء',
      color: 'text-green-500',
    },
    {
      icon: Users,
      title: 'فريقنا',
      description: 'فريق من الخبراء المتخصصين في التكنولوجيا وتطوير البرمجيات',
      color: 'text-orange-500',
    },
  ];

  const stats = [
    { number: '500+', label: 'عميل راضٍ' },
    { number: '50+', label: 'مشروع منجز' },
    { number: '10+', label: 'سنوات خبرة' },
    { number: '24/7', label: 'دعم فني' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">من نحن</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            NuX.T هي شركة رائدة في مجال الحلول البرمجية والتحول الرقمي. نساعد الشركات على تطوير
            أعمالها من خلال توفير أنظمة POS متطورة وبرمجيات مخصصة تلبي احتياجاتهم الفريدة.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="hover-lift hover-glow transition-all duration-300 animate-scale-in text-center"
            >
              <CardContent className="p-8">
                <div className={`p-4 rounded-2xl bg-gradient-primary/10 w-fit mx-auto mb-4 ${value.color}`}>
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-xl mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <Card className="bg-gradient-primary text-white mb-16">
          <CardContent className="p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Story Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">قصتنا</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              بدأت NuX.T من رؤية بسيطة: جعل التكنولوجيا في متناول جميع الشركات، بغض النظر عن
              حجمها أو مجال عملها. فهمنا التحديات التي تواجه الشركات الصغيرة والمتوسطة في رحلة
              التحول الرقمي، وقررنا أن نكون الشريك الذي يدعمهم في هذه الرحلة.
            </p>
            <p>
              على مر السنين، قمنا بتطوير حلول برمجية متطورة تجمع بين السهولة في الاستخدام والقوة
              في الأداء. عملنا مع مئات الشركات في مختلف القطاعات، من المطاعم والبقالات إلى شركات
              التوزيع والخدمات، وساعدناهم على تحسين كفاءتهم وزيادة أرباحهم.
            </p>
            <p>
              اليوم، نفخر بكوننا واحدة من الشركات الرائدة في مجال حلول POS والبرمجيات المخصصة في
              المملكة. ولكننا لا نتوقف عند هذا الحد - نواصل الابتكار والتطوير لنقدم لعملائنا أفضل
              التقنيات والحلول التي تساعدهم على النجاح والنمو.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
