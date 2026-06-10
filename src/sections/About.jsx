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

                    <div>
                        <p>
                            Before becoming a developer I studied nursing, so I'm used to messy situations, incomplete information, and people depending on you to stay calm and make the next right decision.
                        </p>
                        <p>
                            Now I do the same with software: I take unstructured ideas, noisy requirements, and half-broken legacy pieces, and turn them into clean, readable architecture with honest UX.
                        </p>
                        <br/>
                        <p>
                            I like to work on dark, modern interfaces in React and Tailwind. For mobile apps I prefer Flutter. There, I like to focus on small details like how a button moves or how a screen loads on bad network, can decide whether a product feels “cheap” or trustworthy.
                        </p>
                        <br/>
                        <p>    
                            I like to read code slowly, understand what it's really doing, and then make it shorter and clearer instead of throwing another layer on top just to ship faster.
                        </p>
                        <br/>
                        <p>
                            Performance matters to me, but not as an excuse to write cryptic code. I prefer a slightly slower function that everyone can understand and then iterating with real measurements instead of micro-optimizing blindly.
                        </p>
                        <br/>
                        <p>
                            In short, I'm a  developer who cares about how software behaves in real life, under pressure, with real users and with future developers who deserve a codebase that doesn't fight back.
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