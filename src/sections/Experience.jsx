const experiences = [
    {
        period: '2024 - 2025',
        role: 'Full-Stack Software Developer',
        company: 'Sellogic - H.Pierre',
        description: 'Worked across Backend, Frontend, web and Flutter (Microsoft Kiosk/Mobile devices) on systems used in real day-to-day operations, while re-shaping older and heavier flows into something more structured and easier to build on.',
        technologies: ['JavaScript (ES6+)','Vue.js','Flutter','Node.js','Moleculer','TypeScript','SCSS','API REST','Postman','Apidog','MongoDB','CouchDB','IBM Cloudant','Git','GitHub','GitLab','VS Code','Android Studio (ADB)','Jira','Trello','Slack','Miro'],
        current: false,
    },
    {
        period: '2020 - 2024',
        role: 'Full-Stack Software Developer',
        company: '100devs',
        description: 'Learned by writing code, breaking, fixing and repeating, turning study into real projects and gradually building a more solid way of thinking through code.',
        technologies: ['HTML5','CSS3','JavaScript (ES6+)','React','Node.js','Express.js','MongoDB','API rest','Agile/Scrum','Git','GitHub','VS Code','Discord'],
        current: false,
    },
    {
        period: '2020 - Present',
        role: 'GBTN Member',
        company: 'Keywords Studios',
        description: 'Contributed to game testing workflows and edge cases, which sharpened my eye for every bug and glitch, and raised my respect for software that needs to behave well under real conditions.',
        technologies: ['Python','Charles Proxy','RTSS','OBS Studio','VS Code','Android Studio (ADB)','Selenium','Appium','Splunk','TestRail','Discord','GBTN'],
        current: true,
    },
    {
        period: '2016 - 2020',
        role: 'Bachelors Degree in Nursing Science',
        company: 'Università degli studi di Perugia',
        description: 'Before software, I studied nursing, a path that left me with patience, discipline, calm under high pressure and a way of thinking that still shapes how I approach problems today.',
        technologies: [],
        current: false,
    },
]

export const Experience = () => {
    return (
        <section id='experience' className='py-32 relative overflow-hidden'>
            <div
                className='absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2'
            />

            <div className='container mx-auto px-6 relative z-10'>
                {/* Section header */}
                <div className='max-w-3xl mb-16'>
                    <span
                        className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'
                    >
                        Path so far
                    </span>
                    <h2
                        className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-white'    
                    >
                        Experience<span className='font-serif text-secondary-foreground'> &</span> Background
                            <span className='text-secondary-foreground'>.</span>
                    </h2>

                    <p className='text-muted-foreground animate-fade-in animation-delay-200'>
                        This is the path that brought me here: a shift from nursing into software, shaped by curiosity, patience and the quiet work of learning how to build things properly, with the goal of turning that effort into something solid and lasting over time
                            <span className='text-secondary-foreground'>.</span>
                    </p>
                </div>

                {/* Timeline */}
                <div className='relative'>
                    <div className='timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]'/>

                    {/* Experience items */}
                    <div className='space-y-12'>
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className='relative grid md:grid-cols-2 gap-8 animate-fade-in'
                                style={{ animationDelay: `${(index + 1) * 100}ms` }}
                            >

                                {/* Timeline dot */}
                                <div>
                                </div>

                                {/* Content */}
                                <div
                                    className={`pl-8 md:pl-0 ${
                                        index % 2 === 0
                                        ? 'md:pr-16 md:text-right'
                                        : 'md:col-start-2 md:pl-16'
                                    }`}
                                >
                                    <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                                        <span>
                                            {exp.period}
                                        </span>
                                        <h3>
                                            {exp.role}
                                        </h3>
                                        <p>
                                            {exp.company}
                                        </p>
                                        <p>
                                            {exp.description}
                                        </p>
                                        <div>
                                            {/* {exp.techonologies.map((tech, techIndex) => (
                                               <span>
                                                   {tech}
                                               </span> 
                                            ))} */}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </section>
    )
}