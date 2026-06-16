import { Button } from '@/components/Button';
import { MessageSquareCode, ChevronDown, Download } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';

const skills = [
    'JavaScript',
    'TypeScript',
    'Vue.js',
    'React',
    'Tailwind CSS',
    'SCSS',
    'CSS3',
    'Vite', 
    'HTML5',
    'Node.js',
    'Moleculer',
    'API REST',
    'Postman',
    'Mongodb',
    'CouchDB',
    'IBM Cloudant',
    'Git',
    'GitHub',
    'GitHub Actions',
    'GitLab',
];

export const Hero = () => {
    return (
        <section id='home' className='relative min-h-screen flex items-center overflow-hidden'>
            {/* Background*/}
            <div className='absolute inset-0'>
                <img src='/satik_hero.png' alt='Satik37 Hero' className='w-full h-full object-cover opacity-40'/>
                <div className='absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background'/>
            </div>

            {/* Particles */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                {[...Array(37)].map((_, i) => (
                    <div
                        className='absolute w-1.5 h-1.5 rounded-full opacity-60'
                        style={{
                            backgroundColor: `#20b2a6`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${
                                15 + Math.random() * 20
                                }s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
                <div className='grid lg:grid-cols-2 gap-12 items-center'>
                    {/* Left Column - Text */}
                    <div className='space-y-8'>
                        <div className='animate-fade-in'>
                            <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
                                <span className='w-2 h-2 bg-primary rounded-full animate-pulse'/>
                                Software Developer | Frontend & Mobile Developer
                            </span>
                        </div>
                        {/* Headline */}
                        <div className='space-y-4'>
                            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100'>
                                Turning digital chaos
                                <br/>
                                into<span className='text-primary glow-text'> clean systems</span>.
                            </h1>
                           <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200'>
                            Hello! I'm Saturnas Costantini Miliauskas,
                            <br/>
                            I turn unstructured ideas into systems with clear boundaries, solid performance and honest UX
                                <span className='text-secondary-foreground'>.</span>
                            <br/>
                            My code is structured, intentional and designed to survive the chaos of real products
                                <span className='text-secondary-foreground'>.</span>
                            </p> 
                        </div>
                        {/* CTAs */}
                        <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-300'>
                            <a
                                href='#contact'
                                className='inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary'
                            >
                                Contact Me
                                <MessageSquareCode className='w-5 h-5' aria-hidden='true' />
                            </a>
                            <AnimatedBorderButton>
                                <Download className='w-5 h-5'/>
                                Download CV
                            </AnimatedBorderButton>
                        </div>

                        {/* Social links */}
                        <div className='flex items-center gap-4 animate-fade-in animation-delay-400'>
                            <span className='text-sm text-muted-foreground'>
                                Find me here: 
                            </span>
                            {[
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
                            ].map((social) => {
                                const Icon = social.icon;
                                
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        aria-label={`Visit ${social.label} profile`}
                                        title={social.label}
                                        // className='p-2 rounded-full glass hover:bg-primary/10   hover:text-primary transition-all duration-300'
                                        className='group inline-flex items-center justify-center rounded-full glass p-3 text-muted-foreground border border-white/10
                                            transition-all duration-300 ease-out 
                                            hover:-translate-y-1 hover:scale-105 hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(32,178,166,0.18)]
                                            active:scale-95 active:bg-primary/20 active:border-primary/40 active:text-primary
                                            focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background'
                                    >
                                        {/* <Icon className='w-6 h-6'/> */}
                                        <Icon
                                            className='w-5 h-5 transition-transform duration-300 group-hover:rotate-6 group-active:scale-90'
                                            aria-hidden='true'
                                        />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                    {/* Right Column - Pic */}
                    <div className='relative animate-fade-in animation-delay-300'>
                        {/* Hero Image */}
                        <div className='relative max-w-sm lg:max-w-md mx-auto'>
                            <div
                                className='absolute inset-0
                                    rounded-3xl bg-linear-to-br
                                    from-primary/30
                                    via-transparent
                                    to-primary/10
                                    blur-2xl
                                    animate-pulse'
                            />
                            <div className='relative glass rounded-3xl p-2 glow-border'>
                                <img
                                    src='/profile_2.png'
                                    alt='Saturnas C.M.'
                                    className='w-full aspect-ratio: 4/5 object-cover opacity-90 rounded-2xl'
                                />

                                {/* Floating Badge */}
                                <div className='absolute -bottom-4 right-4 glass rounded-xl px-4 py-3 animate-float'>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-3 h-3 bg-primary rounded-full animate-pulse'/>
                                        <span className='text-sm font-medium'>
                                            Signal over noise
                                        </span>
                                    </div>
                                </div>
                                {/* Stats Badge */}
                                <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                                    <div className='text-xs uppercase tracking-wide text-muted-foreground'>&lt;currently building&gt;</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className='mt-20 animate-fade-in animation-delay-600'>
                  <p className='text-sm text-muted-foreground mb-6 text-center'>
                    Technologies I work with
                  </p>                                        
                  <div className='relative overflow-hidden'>
                    <div className='marquee-track flex w-max min-w-max whitespace-nowrap'>
                      {[...skills, ...skills].map((skill, index) => (
                        <div key={index} className='flex-none px-8 py-4'>
                          <span className='text-xl font-semibold text-muted-foreground/50 transition-colors hover:text-primary/70'>
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
            </div>

            <div className='absolute bottom-8 left-1/2 -translate-x-1/2
                animate-fade-in animation-delay-800'>
                <a
                    href='#about'
                    className='flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors'
                    title='Scroll down'
                    aria-label='Scroll down'
                >
                    <span className='text-xs uppercase tracking-wider'>
                        Scroll
                    </span>
                    <ChevronDown className='w-6 h-6 animate-bounce'/>
                </a>
            </div>
        </section>
    );
};