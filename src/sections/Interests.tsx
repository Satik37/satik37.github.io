import { useCallback, useEffect, useState } from 'react';
import { Orbit, ChevronLeft, ChevronRight } from 'lucide-react';

interface MetaItem {
  text: string;
}

interface Interest {
  hobby: string;
  description: string;
  meta: MetaItem[];
  image: string;
  stats: string[];
  links: { label: string; href: string }[];
  featured: boolean[];
}

const interests: Interest[] = [
  {
    hobby: 'Gaming & hardware',
    description: 'I enjoy PC and mobile gaming from both a player and hardware perspective. Building and tuning my own machines has deepened my interest in how complex systems fit together.',
    meta: [
      { text: 'PC building' },
      { text: 'PC hardware' },
      { text: 'PC performance' },
      { text: 'PC overclocking' },
      { text: 'PC & mobile gaming' },
    ],
    image: '/interests/interest-gaming.jpg',
    stats: ['Self-built PC', 'PC and mobile player'],
    links: [{ label: '', href: '' }],
    featured: [true],
  },
  {
    hobby: 'World of Tanks',
    description: 'World of Tanks is one of those games I keep coming back to because it rewards positioning, timing, patience and reading the situation well. I like games where decision-making matters more than noise and this one does that very well.',
    meta: [
      { text: 'Strategy, positioning, timing' },
      { text: 'stats and long-term improvement' },
    ],
    image: '/interests/interests-placeholder.png',
    stats: [],
    links: [{ label: '', href: '' }],
    featured: [false],
  },
  {
    hobby: 'Scale modeling and painting',
    description: 'I spend time painting tanks, 3D-printed miniatures, and Warhammer models. It is a hobby that taught me patience, attention to detail, and the quiet satisfaction of improving something slowly, layer by layer.',
    meta: [
      { text: 'Warhammer' },
      { text: 'scale model tanks' },
      { text: 'custom 3D printed miniatures' },
    ],
    image: '/interests/interests-placeholder.png',
    stats: ['Custom 3D printed miniatures paint', 'Scale model tanks', 'Instagram portfolio'],
    links: [{ label: 'Instagram', href: '' }],
    featured: [true],
  },
  {
    hobby: 'Linguistics',
    description: 'I am interested in languages not only as tools, but as systems with history, rhythm, and hidden logic. Etymology especially fascinates me, because it feels like tracing how ideas travel and change over time.',
    meta: [
      { text: 'Languages' },
      { text: 'etymology' },
      { text: 'curiosity' },
      { text: 'structure behind words' },
    ],
    image: '/interests/interests-placeholder.png',
    stats: [],
    links: [{ label: '', href: '' }],
    featured: [false],
  },
  {
    hobby: 'Workout',
    description: 'Training is another space where I like steady progress. I appreciate routines, small improvements and the discipline of showing up even when motivation is low, which is probably one of the reasons fitness apps interest me as future projects too. Mens sana in corpore sano.',
    meta: [
      { text: 'Consistency' },
      { text: 'discipline' },
      { text: 'routines and future fitness app ideas' },
    ],
    image: '/interests/interests-placeholder.png',
    stats: [],
    links: [{ label: '', href: '' }],
    featured: [false],
  },
];

export const Interests = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % interests.length);
  }, []);

  const previous = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + interests.length) % interests.length);
  }, []);

  // Keyboard navigation for the carousel (ignores typing in inputs/textareas)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isTyping =
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable;

      if (isTyping) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        previous();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [next, previous]);

  return (
    <section id='interests' className='py-32 relative overflow-hidden'>
      <div className='absolute top-1/2 left-1/2 w-200 h-200 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2' />
      <div className='container mx-auto px-6 relative z-10'>
        {/* Section header */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>
            Beyond the code
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
            What shapes{' '}
            <span className='font-serif italic font-normal text-white'>
              me
            </span>
            .
          </h2>
        </div>

        {/* Interests carousel */}
        <div className='max-w-5xl mx-auto'>
          <div className='relative overflow-hidden rounded-4xl glow-border animate-fade-in animation-delay-200 min-h-135'>
            {/* Background image with crossfade */}
            <img
              key={`bg-${activeIndex}`}
              src={interests[activeIndex].image}
              alt={interests[activeIndex].hobby}
              loading='lazy'
              decoding='async'
              className='absolute inset-0 w-full h-full object-cover opacity-60 carousel-fade'
            />

            {/* Overlays */}
            <div className='absolute inset-0 bg-linear-to-t from-background via-background/35 to-background/10' />
            <div className='absolute inset-0 bg-linear-to-r from-background/38 via-transparent to-background/18' />
            <div className='absolute inset-0 bg-linear-to-t from-card/60 via-transparent to-transparent' />
            <div className='absolute inset-0 bg-background/12' />

            {/* Badge */}
            <div className='absolute top-6 right-6 w-11 h-11 rounded-full glass flex items-center justify-center z-20'>
              <Orbit className='w-5 h-5 text-primary' />
            </div>

            {/* Content with slide-up transition */}
            <div
              key={`content-${activeIndex}`}
              className='relative z-10 flex min-h-135 flex-col justify-between p-6 md:p-8 lg:p-10 carousel-slide'
            >
              {/* Top left */}
              <div className='max-w-2xl space-y-4'>
                <h3 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight'>
                  {interests[activeIndex].hobby}
                </h3>

                <div className='flex flex-wrap gap-2 max-w-2xl'>
                  {interests[activeIndex].meta.map((item, index) => (
                    <span
                      key={index}
                      className='px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-700'
                    >
                      {item.text}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom description */}
              <div className='max-w-5xl'>
                <div className='glass-soft rounded-3xl px-6 py-5 md:px-6 md:py-6 shadow-[0_8px_30px_rgba(0,0,0,0.18)]'>
                  <p className='text-sm md:text-base leading-relaxed text-white/90'>
                    {interests[activeIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interests navigation */}
        <div className='flex items-center justify-center gap-4 mt-8'>
          <button
            className='p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-700'
            onClick={previous}
            aria-label='Previous interest'
          >
            <ChevronLeft />
          </button>

          <div className='flex gap-2' role='tablist' aria-label='Interest indicators'>
            {interests.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 bg-primary'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                role='tab'
                aria-selected={index === activeIndex}
                aria-label={`Go to ${interests[index].hobby}`}
              />
            ))}
          </div>

          <button
            className='p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-700'
            onClick={next}
            aria-label='Next interest'
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};