import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const socialLinks = [
    {
        icon: FaGithub,
        href: 'https://github.com/Satik37',
        label: 'GitHub',
    },
    {
        icon: FaLinkedin,
        href: 'https://www.linkedin.com/in/saturnas-costantini-miliauskas-satik',
        label: 'LinkedIn',
    },
    {
        icon: FaInstagram,
        href: 'https://www.instagram.com/satik_37/',
        label: 'Instagram',
    },
];

const footerLinks = [
  { href: '#about', label: 'About'},
  { href: '#projects', label: 'Projects'},
  { href: '#experience', label: 'Experience'},
  { href: '#contact', label: 'Contact'},
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='py-12 border-t border-border'>
      <div className='container mx-auto px-6'>
        <div className='grid gap-8 items-center md:grid-cols-[1fr_auto_1fr]'>

          {/* Logo & Copyright */}
          <div className='text-center md:text-left'>
            <a href='#' className='text-xl font-bold tracking-tight'>
              Satik37<span className='text-primary'>.</span>
            </a>
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
                        className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                    >
                        {link.label}
                    </a>
                ))}
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
                                transition-all duration-300 ease-out
                                hover:-translate-y-0.5 hover:text-primary hover:bg-primary/10
                                focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background'
                        >
                            <Icon
                                className='w-6 h-6'
                                aria-hidden='true'
                            />
                        </a>
                    )
                })}
            </div>
        </div>
      </div>
    </footer>
  );
};