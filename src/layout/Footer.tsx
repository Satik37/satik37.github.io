import { useState, useEffect, useCallback, type MouseEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUp, Calculator } from 'lucide-react';
import { socialLinks, footerLinks } from '@/constants';

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isCalculatorPage = location.pathname === '/salary-calculator';

  const handleScroll = useCallback(() => {
    setShowBackToTop(window.scrollY > 400);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleFooterLinkClick = (e: MouseEvent, href: string) => {
    e.preventDefault();
    const sectionId = href.slice(1);

    if (isCalculatorPage) {
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <footer className='py-12 border-t border-border relative'>
      <div className='container mx-auto px-6'>
        <div className='grid gap-8 items-center md:grid-cols-[1fr_auto_1fr]'>

          {/* Logo & Copyright */}
          <div className='text-center md:text-left'>
            <Link
              to='/'
              className='text-xl font-bold tracking-tight transition-colors duration-300 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 rounded-md'
            >
              Satik37<span className='text-primary'>.</span>
            </Link>
            <p className='text-sm text-muted-foreground mt-2'>
              © {currentYear} Saturnas Costantini Miliauskas. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav
            className='flex flex-wrap justify-center gap-6'
            aria-label='Footer navigation'
          >
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleFooterLinkClick(e, link.href)}
                className='text-sm text-muted-foreground hover:text-foreground transition-colors duration-300'
              >
                {link.label}
              </a>
            ))}
            <Link
              to='/salary-calculator'
              className='text-sm text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center gap-1.5'
            >
              <Calculator className='w-3.5 h-3.5' aria-hidden='true' />
              Calcolatore RAL
            </Link>
          </nav>

          {/* Social Links */}
          <div className='flex items-center justify-center md:justify-end gap-4'>
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`${social.label} (opens in a new tab)`}
                  title={social.label}
                  className='group inline-flex items-center justify-center rounded-full
                    glass p-2.5 text-muted-foreground border border-white/10
                    transition-all duration-500 ease-out
                    hover:-translate-y-0.5 hover:text-primary hover:bg-primary/10
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background'
                >
                  <Icon
                    className='w-6 h-6'
                    aria-hidden='true'
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        type='button'
        onClick={scrollToTop}
        aria-label='Back to top'
        title='Back to top'
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full glass text-primary
          border border-primary/30 shadow-lg shadow-primary/20
          transition-all duration-300 ease-out
          hover:bg-primary/10 hover:border-primary/60 hover:-translate-y-1
          focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background
          ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <ArrowUp className='w-5 h-5' aria-hidden='true' />
      </button>
    </footer>
  );
};