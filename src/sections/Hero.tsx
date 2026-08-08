import React, { useCallback, useRef, useLayoutEffect, useState, useMemo } from 'react';
import { MessageSquareCode, ChevronDown, Download } from 'lucide-react';
import { socialLinks } from '@/constants';
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';

interface Skill {
  name: string;
}

const skills: Skill[] = [
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'Vue.js' },
  { name: 'React' },
  { name: 'Tailwind CSS' },
  { name: 'SCSS' },
  { name: 'CSS3' },
  { name: 'Vite' },
  { name: 'HTML5' },
  { name: 'Node.js' },
  { name: 'Moleculer' },
  { name: 'API REST' },
  { name: 'Postman' },
  { name: 'Mongodb' },
  { name: 'CouchDB' },
  { name: 'IBM Cloudant' },
  { name: 'Git' },
  { name: 'GitHub' },
  { name: 'GitHub Actions' },
  { name: 'GitLab' },
];

interface Particle {
  id: number;
  left: string;
  top: string;
  duration: string;
  delay: string;
  opacity: number;
  size: number;
}

function generateParticles(): Particle[] {
  return Array.from({ length: 15 }, (_, index) => ({
    id: index,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: `${15 + Math.random() * 20}s`,
    delay: `${Math.random() * 2}s`,
    opacity: 0.35 + Math.random() * 0.35,
    size: 4 + Math.random() * 4,
  }));
}

export const Hero = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const particlesRef = useRef<Particle[] | null>(null);
  const prefersReducedMotion = useRef(false);
  const [showParticles, setShowParticles] = useState(false);

  useLayoutEffect(() => {
    if (!particlesRef.current) {
      prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReducedMotion.current) {
        const generated = generateParticles();
        particlesRef.current = generated;
        setParticles(generated);
        setShowParticles(true);
      }
    }
  }, []);

  const handleScrollToAbout = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const duplicatedSkills = useMemo(() => [...skills, ...skills], []);

  // Stats badge text - using a constant to avoid JSX parsing issues
  const statsBadgeText = '\u003ccurrently building\u003e';

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center overflow-hidden'
    >
      {/* Background */}
      <div className='absolute inset-0'>
        <img
          src='/satik_hero.jpg'
          alt=''
          aria-hidden='true'
          width={1920}
          height={1080}
          decoding='async'
          fetchPriority='high'
          className='w-full h-full object-cover opacity-40'
        />
        <div className='absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background' />
      </div>

      {/* Particles */}
      {showParticles && (
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          {particles.map((particle) => (
            <div
              key={particle.id}
              className='absolute rounded-full'
              style={{
                backgroundColor: '#20b2a6',
                left: particle.left,
                top: particle.top,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                opacity: particle.opacity,
                animation: `slow-drift ${particle.duration} ease-in-out infinite`,
                animationDelay: particle.delay,
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Text */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
                <span className='w-2 h-2 bg-primary rounded-full animate-pulse' />
                Software Developer | Frontend & Mobile Developer
              </span>
            </div>
            {/* Headline */}
            <div className='space-y-4'>
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100'>
                Turning digital chaos
                <br />
                into<span className='text-primary glow-text'> clean systems</span>.
              </h1>
              <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200'>
                Hello! I'm Saturnas Costantini Miliauskas,
                <br />
                I turn unstructured ideas into systems with clear boundaries, solid performance and honest UX
                <span className='text-secondary-foreground'>.</span>
                <br />
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
              <AnimatedBorderButton
                as='a'
                href='/CV_ENG_Saturnas Costantini Miliauskas.pdf'
                download='CV_ENG_Saturnas-Costantini-Miliauskas.pdf'
              >
                <Download className='w-5 h-5' aria-hidden='true' />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social links */}
            <nav
              aria-label='Social links'
              className='animate-fade-in animation-delay-400'
            >
              <div className='flex items-center gap-4'>
                <span className='text-sm text-muted-foreground'>
                  Find me here:
                </span>
                <ul
                  className='flex items-center gap-4'
                  role='list'
                >
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <li key={social.href}>
                        <a
                          href={social.href}
                          target='_blank'
                          rel='noopener noreferrer'
                          aria-label={`Visit ${social.label} profile (opens in a new tab)`}
                          title={social.label}
                          className='group inline-flex items-center justify-center rounded-full glass p-3 text-muted-foreground border border-white/10
                            transition-all duration-300 ease-out
                            hover:-translate-y-1 hover:scale-105 hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(32,178,166,0.18)]
                            active:scale-95 active:bg-primary/20 active:border-primary/40 active:text-primary
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background'
                        >
                          <Icon
                            className='w-5 h-5 transition-transform duration-300 group-hover:rotate-6 group-active:scale-90'
                            aria-hidden='true'
                          />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>
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
                  alt='Portrait of Saturnas Costantini Miliauskas'
                  width={768}
                  height={960}
                  fetchPriority='high'
                  decoding='async'
                  className='w-full object-cover opacity-90 rounded-2xl'
                />

                {/* Floating Badge */}
                <div className='absolute -bottom-4 right-4 glass rounded-xl px-4 py-3 animate-float'>
                  <div className='flex items-center gap-3'>
                    <div className='w-3 h-3 bg-primary rounded-full animate-pulse' />
                    <span className='text-sm font-medium'>
                      Signal over noise
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                  <div className='text-xs uppercase tracking-wide text-muted-foreground'>{statsBadgeText}</div>
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
              {duplicatedSkills.map((skill, index) => (
                <div key={index} className='flex-none px-8 py-4'>
                  <span className='text-xl font-semibold text-muted-foreground/50 transition-colors hover:text-primary/70'>
                    {skill.name}
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
          onClick={handleScrollToAbout}
          className='flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors'
          title='Scroll down'
          aria-label='Scroll down'
        >
          <span className='text-xs uppercase tracking-wider'>
            Scroll
          </span>
          <ChevronDown className='w-6 h-6 animate-bounce' />
        </a>
      </div>
    </section>
  );
};