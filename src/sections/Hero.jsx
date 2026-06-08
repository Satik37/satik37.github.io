import { Button } from '@/components/Button';
import { MessageSquareCode } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';

export const Hero = () => {
    return (
        <section className='relative min-h-screen flex items-center overflow-hidden'>
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
                            I turn unstructured ideas into systems with clear boundaries, solid performance, and honest UX.
                            <br/>
                            My code is structured, intentional, and designed to survive the chaos of real products.
                            </p> 
                        </div>
                        {/* CTAs */}
                        <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-300'>
                            <Button size='lg'>
                                Contact Me <MessageSquareCode className='w-5 h-5'/>
                            </Button>
                            <AnimatedBorderButton />
                        </div>

                        {/* Social links */}
                        <div className='flex items-center gap-4 animate-fade-in animation-delay-400'>
                            <span className='text-sm text-muted-foreground'>
                                Follow me: 
                            </span>
                            {[
                                { icon: FaGithub, href: 'https://github.com/Satik37' },
                                { icon: FaLinkedin, href: 'http://www.linkedin.com/in/saturnas-costantini-miliauskas-satik' },
                                { icon: FaInstagram, href: 'https://www.instagram.com/satik_37/' },
                            ].map((social, idx) => {
                                const Icon = social.icon;
                                
                                return (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        arial-label={social.href}
                                        className='p-2 rounded-full glass hover:bg-primary/10   hover:text-primary transition-all duration-300'
                                    >
                                        <Icon className='w-6 h-6'/>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                    {/* Right Column - Pic */}
                </div>
            </div>
        </section>
    );
};