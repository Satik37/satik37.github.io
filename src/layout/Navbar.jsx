import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
    {href: '#about', label: 'About'},
    {href: '#projects', label: 'Projects'},
    {href: '#experience', label: 'Experience'},
    {href: '#interests', label: 'Beyond Code'},
]

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-800 ${
                    isScrolled
                        ? 'glass-navbar py-3'
                        : 'bg-transparent py-5'
                }`}
        >
            <nav
                className='container mx-auto px-6 flex items-center justify-between'
                aria-label='Main navigation'
            >
                <a
                    href='#'
                    onClick={() => setIsMobileMenuOpen(false)}
                    className='text-xl font-bold tracking-tight hover:text-primary transition-colors'
                >
                    Satik37<span className='text-primary'>.</span>
                </a>
                
                {/* Desktop Nav */}
                <div className='hidden md:flex items-center gap-1'>
                    <div className='glass rounded-full px-2 py-1 flex items-center gap-1'>
                        {navLinks.map((link) => (
                            <a
                                href={link.href}
                                key={link.href}
                                className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-all duration-300'
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <div className='hidden md:block'>
                    <a
                        href='#contact'
                        className='inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary'
                    >
                        Contact Me
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type='button'
                    className='md:hidden relative inline-flex h-10 w-10
                        items-center justify-center rounded-full
                        text-foreground transition-colors hover:bg-white/5
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                        cursor-pointer'
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls='mobile-menu'
                    aria-label={isMobileMenuOpen
                        ? 'Close navigation menu'
                        : 'Open navigation menu'
                    }
                >
                    <Menu
                        size={24}
                        className={`absolute transition-all duration-300 ease-out ${
                            isMobileMenuOpen
                                ? 'rotate-90 scale-75 opacity-0'
                                : 'rotate-0 scale-100 opacity-100'
                        }`}
                        aria-hidden='true'
                    />
                    <X
                        size={24}
                        className={`absolute transition-all duration-300 ease-out ${
                            isMobileMenuOpen
                                ? 'rotate-0 scale-100 opacity-100'
                                : '-rotate-90 scale-75 opacity-0'
                        }`}
                        aria-hidden='true'
                    />
                </button>
            </nav>

            {/* Mobile Nav Menu */}
            <div
                id='mobile-menu'
                className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
                    isMobileMenuOpen
                    ? 'max-h-96 opacity-100 translate-y-0 glass-strong'
                    : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
                }`}
            >
                <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>
                    {navLinks.map((link) => (
                        <a
                            href={link.href}
                            key={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className='text-lg text-muted-foreground hover:text-foreground py-2 transition-colors'
                        >
                            {link.label}
                        </a>
                    ))}

                    <a
                        href='#contact'
                        onClick={() => setIsMobileMenuOpen(false)}
                        className='inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary'
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </header>
    );
}