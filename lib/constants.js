import {
  Home,
  Cuboid,
  Sparkles,
  Mail,
  PencilLine,
  Camera,
  Github,
  Linkedin,
  Instagram,
  StickyNote,
  MapPin,
  Phone,
} from 'lucide-react';

import nextjs from '@/public/tech-icons/nextjs.svg';
import shadcn from '@/public/tech-icons/shadcn.svg';
import tailwind from '@/public/tech-icons/tailwind.svg';
import contentful from '@/public/tech-icons/contentful.svg';
import raindrop from '@/public/tech-icons/raindrop.svg';
import supabase from '@/public/tech-icons/supabase.svg';
import vercel from '@/public/tech-icons/vercel.svg';
import framer from '@/public/tech-icons/framer.svg';

import typescript from '@/public/stack/typescript.svg';
import javascript from '@/public/stack/javascript.svg';
import html from '@/public/stack/html.svg';
import css from '@/public/stack/css.svg';
import react from '@/public/stack/react.svg';
import nodejs from '@/public/stack/nodejs.svg';
import tailwindcss from '@/public/stack/tailwindcss.svg';
import redux from '@/public/stack/redux.svg';
import firebase from '@/public/stack/firebase.svg';

export const PAGES = [
  {
    href: '/',
    label: 'Home',
    icon: <Home size={16} />,
  },
  {
    href: '/projects',
    label: 'Projects',
    icon: <Cuboid size={16} />,
  },
  {
    href: '/taste',
    label: 'Taste',
    icon: <Camera size={16} />,
  },
  {
    href: '/about',
    label: 'My Journey',
    icon: <Sparkles size={16} />,
  },
  {
    href: '/blog',
    label: 'Blog',
    icon: <PencilLine size={16} />,
  },
  {
    href: '/contact',
    label: 'Contact',
    icon: <Phone size={16} />,
  },
];

export const LINKS = {
  github: {
    title: 'Github',
    url: 'https://github.com/kayaayberk',
    icon: <Github size={16} />,
  },
  linkedIn: {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kayaayberk/',
    icon: <Linkedin size={16} />,
  },
  instagram: {
    title: 'Instagram',
    url: 'https://www.instagram.com/kayaayberkk/',
    icon: <Instagram size={16} />,
  },
  cv: {
    title: 'CV',
    url: '',
    icon: <StickyNote size={16} />,
  },
};

export const BUILT_WITH = [
  {
    name: 'Next.js',
    url: 'https://nextjs.org/',
    icon: nextjs,
    invert: false,
  },
  {
    name: 'shadcn/ui',
    url: 'https://ui.shadcn.com/',
    icon: shadcn,
    invert: false,
  },
  {
    name: 'TailwindCSS',
    url: 'https://tailwindcss.com/',
    icon: tailwind,
  },
  {
    name: 'Contentful',
    url: 'https://www.contentful.com/',
    icon: contentful,
  },
  {
    name: 'Raindrop',
    url: 'https://raindrop.io/',
    icon: raindrop,
  },
  {
    name: 'Supabse',
    url: 'https://supabase.com/',
    icon: supabase,
  },
  {
    name: 'Vercel',
    url: 'https://vercel.com/',
    icon: vercel,
    invert: false,
  },
  {
    name: 'Framer Motion',
    url: 'https://www.framer.com/motion/',
    icon: framer,
  },
];

export const INFO = [
  {
    label: 'Warsaw, Poland',
    icon: <MapPin size={16} />,
  },
  {
    label: 'kayaayberk98@gmail.com',
    icon: <Mail size={16} />,
  },
  {
    label: '+48 (534) 204 130',
    icon: <Phone size={16} />,
  },
];

export const STACK = [
  {
    label: 'Javascript',
    icon: javascript,
  },
  {
    label: 'Typescript',
    icon: typescript,
  },
  {
    label: 'HTML',
    icon: html,
  },
  {
    label: 'CSS',
    icon: css,
  },
  {
    label: 'React',
    icon: react,
  },
  {
    label: 'Redux',
    icon: redux,
  },
  {
    label: 'Next.js',
    icon: nextjs,
  },
  {
    label: 'TailwindCSS',
    icon: tailwindcss,
  },
  // {
  //   label: 'Typescript',
  //   icon: '',
  // },
  {
    label: 'Firebase',
    icon: firebase,
  },
  {
    label: 'Nodejs',
    icon: nodejs,
  },
];

export const PARAGRAPH = 'Meeting design with code is an absolute joy. Meeting design with code is an absolute joy. Meeting design with code is an absolute joy. Meeting design with code is an absolute joy.';




export const SCROLL_AREA_ID = 'scroll-area';

