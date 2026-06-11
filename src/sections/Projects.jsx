import { CircleFadingArrowUp } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
    {
        title: 'Noctis Aenigmata',
        description: 'Noctis Aenigmata is a small Flutter mobile game inspired by dark situational puzzles and short horror stories.',
        image: '/projects/project1.jpg',
        tags: ['Flutter', 'Android Studio', 'Dart'],
        link: 'https://github.com/Satik37/noctis_aenigmata',
        github: 'https://github.com/Satik37/noctis_aenigmata'
    },
    {
        title: 'My Portfolio',
        description: 'My personal developer portfolio. A place to present my projects and technical work.',
        image: '/projects/project2.png',
        tags: ['React', 'Tailwind CSS', 'Vite', 'GitHub Actions'],
        link: 'https://satik37.github.io',
        github: 'https://github.com/Satik37/satik37.github.io'
    }
]


export const Projects = () => {
    return <section id='projects' className='py-32 relative overflow-hidden'>
        {/* Background glows*/}
        <div
            className='absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl'
        >
        </div>
        <div
            className='absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl'
        >
        </div>
        <div
            className='container mx-auto px-6 relative z-10'
        >      
            {/* Section header */}
            <div className='text-center mx-auto max-w-3xl mb-16'>
                <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>
                    Featured Work
                </span>
                <h2 className='text-4xl md:text-5xl font-serif font-normal  mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
                    Projects that turned and shaped scattered ideas into
                    <br/>
                    <span className='font-bold text-white'> concrete and clean systems.</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200 max-w-xl">
                    A small selection of personal builds.
                    <br/>
                    Projects born from curiosity, where loose ideas turned into organized and readable code I actually enjoy working on.
                </p>
            </div>

            {/* Projects grid */}
            <div className='grid md:grid-cols-2 gap-8'>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1'
                        style={{ animationDelay: `${(index + 1) * 100}ms` }}    
                    >
                        {/* Project image */}
                        <div className='relative overflow-hidden aspect-video'>
                            <img
                                src={project.image}
                                alt={project.title}
                                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                            />
                            <div
                                className='absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60'
                            />
                            {/* Overlay links */}
                            <div
                                className='absolute inset-0 flex items-center justify-center gap-4 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                <a
                                    href={project.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'
                                    aria-label={`Open ${project.title} live project`}
                                    title='Live'
                                >
                                    <CircleFadingArrowUp className='w-6 h-6'/>
                                </a>
                                <a
                                    href={project.github}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'
                                    aria-label={`Open ${project.title} GitHub project repository`}
                                    title='GitHub'
                                >
                                    <FaGithub className='w-6 h-6'/>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}