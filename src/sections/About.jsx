import { CodeXml, LayoutGrid, Activity, MonitorUp, Brush } from 'lucide-react';

const highlights = [
    {
        icon: CodeXml,
        title: 'Clarity before complexity',
        description: 'I try to make things easy to follow before making them more powerful, so features grow on top of clear structure instead of accidental chaos.'
    },
    {
        icon: LayoutGrid,
        title: 'Interfaces people can trust',
        description: 'I care about UX that feels honest and predictable: clear layouts, readable states, and interactions that do what users expect without friction.'
    },
    {
        icon: Activity,
        title: 'Calm in messy systems',
        description: 'I am comfortable working through unclear problems step by step, keeping attention on details without losing sight of the bigger picture.'
    },
    {
        icon: MonitorUp,
        title: 'Growing through each project',
        description: 'I treat every project as a chance to sharpen both technical skill and judgment, learning carefully and applying that progress to the next build.'
    },
    {
        icon: Brush,
        title: 'Patience in the details',
        description: 'Miniature painting taught me that good work comes from small deliberate decisions, and I bring that same patience into software.'
    },
];

export const About = () => {
    return (
        <section id='about' className='py-32 relative overflow-hidden'>
            <div className='container mx-auto px-6 relative z-10'>
                <div className='grid lg:grid-cols-2 gap-16 items-center'>
                    {/* Left Column */}
                    <div className='space-y-8'>
                        <div className='animate-fade-in'>
                            <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>
                                About Me 
                            </span>
                        </div>

                        <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>
                        Signal over noise.
                            <br/> 
                            <span className='font-serif font-normal text-white'>
                                I turn unstructured ideas into systems with clear boundaries, honest UX
                            </span>
                            <br/>
                            <span className='font-serif font-normal text-white'>
                                and code that stays readable even when things get complex.
                            </span>
                        </h2>

                        <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
                            <p>
                                Before moving into software development, I studied nursing, and that experience shaped me strongly. It taught me to stay calm in messy situations, to pay attention when details matter, and to think beyond the task in front of me to the person who will live with the outcome. I try to bring that same mindset into development: not just making something work, but making it understandable, maintainable, and genuinely useful.
                            </p>
                            <p>
                                I work mainly on frontend and mobile projects, with a strong interest in interfaces that feel clear, deliberate, and reliable. I enjoy taking things apart, understanding how and why they work, and then rebuilding them in a way that is cleaner, lighter and easier to grow over time.
                            </p>
                            <p>
                                I am still early in my path, but I take that seriously in a good way. I do not want to rush into sounding like more than I am. I want to keep learning, keep improving, and become the kind of developer people can trust to think clearly, work carefully and keep growing.
                            </p>
                            <p>
                                Outside of coding, I spend time painting miniatures and working on scale models, and I think that hobby says a lot about how I approach software too. It taught me patience, respect for detail, and the idea that good work is often a sum of small, careful decisions rather than one big flashy move. That is also how I learn: step by step, project by project, always trying to sharpen both my technical skills and my judgment.
                            </p>
                        </div>

                        <div className='glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300'>
                            <p className='text-lg font-medium italic text-foreground'>
                                What keeps me going is simple: learning deeply, improving constantly and building things with care.
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className='grid sm:grid-cols-2 gap-6'>
                        {highlights.map((item, index) => (
                            <div
                                key={index}
                                className='glass p-6 rounded-2xl animate-fade-in'
                                style={{animationDelay: `${index * 100}ms`}}
                            >
                                <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20'>
                                    <item.icon className='w-6 h-6 text-primary'/>
                                </div>
                                <h3 className='text-lg font-semibold mb-2'>
                                    {item.title}
                                </h3>
                                <p className='text-sm text-muted-foreground'>
                                    {item.description}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}