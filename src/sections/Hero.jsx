export const Hero = () => {
    return (
        <section className='relative min-h-screen flex items-center overflow-hidden'>
            {/* Background*/}
            <div className='absolute inset-0'>
                <img src='/satik_hero.png' alt='Satik37 Hero' className='w-full h-full object-cover opacity-40'/>
                <div className='absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background'/>
            </div>

            {/* Particles */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                {[...Array(37)].map((_, i) => (
                    <div
                        className='absolute w-1.5 h-1.5 rounded-full opacity-60'
                        style={{
                            backgroundColor: `#20b2a6`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${
                                15 + Math.random() * 20
                                }s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`,
                        }}
                    />
                ))}
            </div>
        </section>
    );
};