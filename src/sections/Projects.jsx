const projects = [
    {
        title: 'Noctis Aenigmata',
        description: 'Noctis Aenigmata is a small Flutter mobile game inspired by dark situational puzzles and short horror stories.',
        image: '/projects/project1.png',
        tags: ['Flutter', 'Android Studio', 'Dart'],
        link: '#',
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
        </div>
    </section>
}