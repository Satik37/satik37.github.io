const interests = [
    {
        hobby: 'Gaming & hardware',
        description: 'I enjoy PC and mobile games, but I have always liked the hardware side too. Building my own PCs made that interest more concrete and probably explains why I like understanding how systems fit together, not just using them.',
        meta: 'PC building, PC hardware, PC performance, PC overclocking, PC & mobile gaming',
        image: '/interests/interest-gaming.png',
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
        meta: 'Strategy, positioning, timing, stats and long-term improvement',
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
        meta: 'Warhammer, scale model tanks, custom 3D printed miniatures',
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
        meta: 'Languages, etymology, curiosity, structure behind words',
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
        meta: 'Consistency, discipline, routines and future fitness app ideas',
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
            </div>
        </section>
    )
}