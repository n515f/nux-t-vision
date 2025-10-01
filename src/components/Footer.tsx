import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const companyLinks = [
    { label: t('footer.about'), path: '/about' },
    { label: t('footer.careers'), path: '/careers' },
    { label: t('nav.portfolio'), path: '/portfolio' },
    { label: t('nav.changelog'), path: '/changelog' },
  ];

  const solutionsLinks = [
    { label: t('activities.distribution'), path: '/activities/distribution' },
    { label: t('activities.restaurants'), path: '/activities/restaurants' },
    { label: t('activities.grocery'), path: '/activities/grocery' },
    { label: t('activities.bakery'), path: '/activities/bakery' },
  ];

  const supportLinks = [
    { label: t('footer.contact'), path: '/contact' },
    { label: t('footer.faq'), path: '/faq' },
    { label: t('nav.blog'), path: '/blog' },
  ];

  const legalLinks = [
    { label: t('footer.privacy'), path: '/privacy' },
    { label: t('footer.terms'), path: '/terms' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow-sm">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-xl font-bold gradient-text">NuX.T</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              {t('hero.subtitle')}
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@nuxt.com</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+966 50 123 4567</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Riyadh, Saudi Arabia</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.solutions')}</h3>
            <ul className="space-y-2">
              {solutionsLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.support')}</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold mb-4">{t('footer.follow')}</h3>
            <div className="flex space-x-3 rtl:space-x-reverse">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-200 hover-glow"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} NuX.T. {t('footer.rights')}.
            </p>
            <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-muted-foreground">
              <span>Made with ❤️ in Saudi Arabia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
