import { CodeXml } from 'lucide-react';

const highlights = [
    {
        icon: CodeXml,
        title: 'Clean, intentional code',
        description: 'I like to understand code deeply, then refactor it into smaller, clearer pieces before adding new features, so the project stays maintainable over time.'
    },
    {
        icon: CodeXml,
        title: 'Frontend with structure, UI and UX in mind',
        description: 'I build interfaces that look modern but stay simple to use, focusing on clear layouts, predictable interactions, and readable component architecture (React + Tailwind).'
    },
    {
        icon: CodeXml,
        title: 'Mobile apps that feel native',
        description: 'On mobile (Flutter), I care about smooth navigation, meaningful animations, and layouts that still work on small screens and unstable connections.'
    },
    {
        icon: CodeXml,
        title: 'Performance as part of the design',
        description: 'I treat performance as a design problem: measuring where time is spent, cutting unnecessary work, and keeping things fast without turning the code into an unreadable mess.'
    },
    {
        icon: CodeXml,
        title: 'Always learning, always refactoring',
        description: 'I use each project as a chance to learn a bit more about patterns, tooling, or testing, and then apply that knowledge to leave the codebase cleaner than I found it.'
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
                            I work mainly on frontend and mobile projects, with a strong interest in interfaces that feel clear, deliberate, and reliable. I enjoy taking things apart, understanding how and why they work, and then rebuilding them in a way that is cleaner, lighter, and easier to grow over time.
                        </p>
                        <p>
                            I am still early in my path, but I take that seriously in a good way. I do not want to rush into sounding like more than I am. I want to keep learning, keep improving, and become the kind of developer people can trust to think clearly, work carefully, and keep growing
                        </p>
                        <p>
                            Outside of coding, I spend time painting miniatures and working on scale models, and I think that hobby says a lot about how I approach software too. It taught me patience, respect for detail, and the idea that good work is often a sum of small, careful decisions rather than one big flashy move. That is also how I learn: step by step, project by project, always trying to sharpen both my technical skills and my judgment.
                        </p>
                    </div>
                </div>

                <div>
                    {/* Right Column */}
                </div>
            </div>
        </section>
    );
}