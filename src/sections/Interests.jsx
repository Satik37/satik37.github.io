import { Orbit } from 'lucide-react';

const interests = [
    {
        hobby: 'Gaming & hardware',
        description: 'I enjoy PC and mobile gaming from both a player and hardware perspective. Building and tuning my own machines has deepened my interest in how complex systems fit together.',
        meta: [
            'PC building',
            'PC hardware',
            'PC performance',
            'PC overclocking',
            'PC & mobile gaming'
        ],
        image: '/interests/interest-gaming.jpg',
        stats: [
            'Self-built PC',
            'PC and mobile player'
            ],
        links: [{
            label: '',
            href: ''
        }],
        featured: [true]
    },
    {
        hobby: 'World of Tanks',
        description: 'World of Tanks is one of those games I keep coming back to because it rewards positioning, timing, patience and reading the situation well. I like games where decision-making matters more than noise and this one does that very well.',
        meta: [
            'Strategy, positioning, timing',
            'stats and long-term improvement'
        ],
        image: '/interests/interest-wot.png',
        stats: [],
        links: [{
            label: '',
            href: ''
        }],
        featured: [false]
    },
    {
        hobby: 'Scale modeling and painting',
        description: 'I spend time painting tanks, 3D-printed miniatures, and Warhammer models. It is a hobby that taught me patience, attention to detail, and the quiet satisfaction of improving something slowly, layer by layer.',
        meta: [
            'Warhammer',
            'scale model tanks',
            'custom 3D printed miniatures'
        ],
        image: '/interests/interest-modeling.png',
        stats: [
            'Custom 3D printed miniatures paint',
            'Scale model tanks',
            'Instagram portfolio'
        ],
        links: [{
            label: 'Instagram',
            href: ''
        }],
        featured: [true]
    },
    {
        hobby: 'Linguistics',
        description: 'I am interested in languages not only as tools, but as systems with history, rhythm, and hidden logic. Etymology especially fascinates me, because it feels like tracing how ideas travel and change over time.',
        meta: [
            'Languages',
            'etymology',
            'curiosity',
            'structure behind words'
        ],
        image: '/interests/interest-linguistics.png',
        stats: [],
        links: [{
            label: '',
            href: ''
        }],
        featured: [false]
    },
    {
        hobby: 'Workout',
        description: 'Training is another space where I like steady progress. I appreciate routines, small improvements and the discipline of showing up even when motivation is low, which is probably one of the reasons fitness apps interest me as future projects too. Mens sana in corpore sano.',
        meta: [
            'Consistency',
            'discipline',
            'routines and future fitness app ideas'
        ],
        image: '/interests/interest-workout.png',
        stats: [],
        links: [{
            label: '',
            href: ''
        }],
        featured: [false]
    },
]

export const Interests = () => {
    return (
        <section
            id='interests'
            className='py-32 relative overflow-hidden'
        >
            <div
                className='absolute top-1/2 left-1/2
                w-200 h-200 bg-primary/5
                rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2'
            />
            <div
                className='container mx-auto px-6 relative z-10'
            >
                {/* Section header */}
                <div
                    className='text-center max-w-3xl mx-auto mb-16'
                >
                    <span
                        className='text-secondary-foreground text-sm font-medium
                        tracking-wider uppercase animate-fade-in'
                    >
                        Beyond the code
                    </span>
                    <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6
                    animate-fade-in animation-delay-100 text-secondary-foreground'>
                        What shapes{' '}
                        <span
                            className='font-serif italic font-normal text-white' 
                        >
                        me
                        </span>
                        .
                    </h2>
                </div>

                {/* Interests carousel */}
                <div className='max-w-5xl mx-auto'>
                    <div className='relative overflow-hidden rounded-4xl glow-border animate-fade-in animation-delay-200 min-h-135'>
                        {/* Background image */}
                        <img
                            src={interests[0].image}
                            alt={interests[0].hobby}
                            className='absolute inset-0 w-full h-full object-cover opacity-60'    
                        />

                        {/* Overlays */}
                        <div className='absolute inset-0 bg-linear-to-t from-background via-background/35 to-background/10' />
                        <div className='absolute inset-0 bg-linear-to-r from-background/38 via-transparent to-background/18' />
                        <div className='absolute inset-0 bg-linear-to-t from-card/60 via-transparent to-transparent' />
                        <div className='absolute inset-0 bg-background/12' />

                        {/* Badge */}
                        <div
                            className='absolute top-6 right-6 w-11 h-11 rounded-full
                            glass flex items-center justify-center z-20'
                        >
                            <Orbit className='w-5 h-5 text-primary' />
                        </div>

                        {/* Content */}
                        <div className='relative z-10 flex min-h-135 flex-col justify-between p-6 md:p-8 lg:p-10'>
                            {/* Top left */}
                            <div className='max-w-2xl space-y-4'>
                                <h3 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight'>
                                    {interests[0].hobby}
                                </h3>

                                <div className='flex flex-wrap gap-2 max-w-2xl'>
                                    {interests[0].meta.map((item, index) => (
                                    <span
                                        key={index}
                                        className='px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-700'
                                    >
                                        {item}
                                    </span>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom description */}
                            <div className='max-w-5xl'>
                                <div className='glass-soft rounded-3xl px-6 py-5 md:px-67md:py-6 shadow-[0_8px_30px_rgba(0,0,0,0.18)]'>
                                    <p className='text-sm md:text-base leading-relaxed text-white/90'>
                                        {interests[0].description}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}