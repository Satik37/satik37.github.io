import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { ComponentType, SVGProps } from 'react';

export interface SocialLink {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  href: string;
  label: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface FooterLink {
  href: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    icon: FaGithub,
    href: 'https://github.com/Satik37',
    label: 'GitHub',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/saturnas-costantini-miliauskas-satik',
    label: 'LinkedIn',
  },
  {
    icon: FaInstagram,
    href: 'https://www.instagram.com/satik_37/',
    label: 'Instagram',
  },
];

export const navLinks: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#interests', label: 'Beyond Code' },
];

export const footerLinks: FooterLink[] = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export const siteConfig = {
  name: 'Satik37',
  author: 'Saturnas Costantini Miliauskas',
  email: 'satmil@tiscali.it',
  url: 'https://satik37.github.io',
  description: 'Portfolio of Saturnas Costantini Miliauskas, a full-stack developer based in Italy, focused on React, Vite, Tailwind CSS, UI/UX, Flutter, and modern projects.',
} as const;