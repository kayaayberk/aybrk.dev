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
  Users,
  BookOpenCheckIcon,
  CheckCheck,
  MessageCircleHeart,
} from 'lucide-react';

// Built With Icons
import nextjs from '@/public/tech-icons/nextjs.svg';
import shadcn from '@/public/tech-icons/shadcn.svg';
import tailwind from '@/public/tech-icons/tailwind.svg';
import contentful from '@/public/tech-icons/contentful.svg';
// import raindrop from '@/public/tech-icons/raindrop.svg';
import supabase from '@/public/tech-icons/supabase.svg';
import vercel from '@/public/tech-icons/vercel.svg';
import framer from '@/public/tech-icons/framer.svg';
// Tech Stack Icons
import typescript from '@/public/stack/typescript.svg';
import javascript from '@/public/stack/javascript.svg';
import html from '@/public/stack/html.svg';
import css from '@/public/stack/css.svg';
import react from '@/public/stack/react.svg';
import nodejs from '@/public/stack/nodejs.svg';
import tailwindcss from '@/public/stack/tailwindcss.svg';
import redux from '@/public/stack/redux.svg';
import firebase from '@/public/stack/firebase.svg';

// Design Stack Icons
import figma from '@/public/design/figma.svg';
import afterEffects from '@/public/design/after-effects.svg';
import illustrator from '@/public/design/illustrator.svg';
import photoshop from '@/public/design/photoshop.svg';
import premiere from '@/public/design/premiere-pro.svg';
import rhino from '@/public/design/rhino.svg';
import keyshot from '@/public/design/keyshot.svg';

// Project Images
import chatup from '@/public/project/chatUp.gif';
import aybrkDev from '@/public/project/aybrkDev.png';

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
    description: [
      'After spending the first  ~4 months of my journey ',
      { text: 'learning how to learn programming,', bold: true },
      " here are a few projects I've built during the last 2 months.",
    ],
  },
  {
    href: '/journey',
    label: 'Journey',
    icon: <Sparkles size={16} />,
    description: [
      'Here is a brief of my journey. I hope you find it interesting. :)',
    ],
  },
  {
    href: '/blog',
    label: 'Blog',
    icon: <PencilLine size={16} />,
    description: [
      "I'll be sharing what I find interesting as well as some stuff from my journey into coding here.",
    ],
  },
  {
    href: '/taste',
    label: 'Taste',
    icon: <Camera size={16} />,
    description: [
      "I love collecting memories from the moments that I don't want to forget and photography is an amazing tool for me to achieve that.",
    ],
  },
  {
    href: '/contact',
    label: 'Contact',
    icon: <Phone size={16} />,
    description: [
      "Let's connect! Please fill out the form down below or reach out to me through any of my links, I'll be thrilled to get in touch with you!",
    ],
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
    username: 'kayaayberkk',
  },
  cv: {
    title: 'Resume',
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
    name: 'Shadcn/ui',
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
  // {
  //   name: 'Raindrop',
  //   url: 'https://raindrop.io/',
  //   icon: raindrop,
  // },
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
    label: '+48 (534) 204 130',
    icon: <Phone size={16} />,
  },
  {
    label: 'kayaayberk98@gmail.com',
    icon: <Mail size={16} />,
    mailTo: true,
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

export const DESIGN_STACK = [
  {
    label: 'Figma',
    icon: figma,
  },
  {
    label: 'Adobe Photoshop',
    icon: photoshop,
  },
  {
    label: 'Adobe Illustrator',
    icon: illustrator,
  },
  {
    label: 'Premiere Pro',
    icon: premiere,
  },
  {
    label: 'After Effects',
    icon: afterEffects,
  },
  {
    label: 'Rhinoceros 3D',
    icon: rhino,
  },
  {
    label: 'Keyshot',
    icon: keyshot,
  },
];

export const HEADLINES = [
  {
    label: 'A TEAM PLAYER',
    icon: <Users size={42} color='#A395F6' strokeWidth={2} />,
  },
  {
    label: 'EAGER TO LEARN',
    icon: <BookOpenCheckIcon size={42} color='#A395F6' strokeWidth={2} />,
  },
  {
    label: 'DETAIL FOCUSED',
    icon: <Sparkles size={42} color='#A395F6' strokeWidth={2} fill='#A395F6' />,
  },
  {
    label: 'EASY TO COMMUNICATE',
    icon: <MessageCircleHeart size={42} color='#A395F6' strokeWidth={2} />,
  },
];

export const SCROLL_AREA_ID = 'scroll-area';

export const PARAGRAPH =
  'I love what technology offers and meeting design with code is an absolute joy for me!';
export const STICKY_ABOUT_ME = 'I am';
export const READY_TO_CONTRIBUTE = "AND CAN'T WAIT TO CONTRIBUTE!";

export const PROJECTS = [
  {
    title: 'Chat Up',
    image: chatup,
    description:
      "Chat Up is a web app that provides built-in real-time translation that helps people to chat in any supported language. It can translate multiple languages in both single and group chats allowing everyone to easily communicate. It's built for both experimental purposes and to make life easier for small friend groups that have a language barrier. Currently ~15 people using it for fun.",
    builtWith: [
      'Next.js',
      'Typescript',
      'TailwindCSS',
      'Firebase',
      'NextAuth',
      'Stripe',
      'Zustand',
      'Zod',
      'Vercel',
    ],
    sourcecode: 'https://github.com/kayaayberk/real-time-translation-chat-app',
    live: 'https://chat-up-pi.vercel.app/',
  },
  {
    title: 'aybrk.dev',
    image: aybrkDev,
    description:
      'My personal website to showcase my knowledge, skills and share a little bit about myself. :)',
    builtWith: [
      'Next.js',
      'Shadcn/ui',
      'TailwindCSS',
      'Contentful',
      // 'Raindrop',
      'Supabase',
      'Vercel',
      'Framer Motion',
    ],
    sourcecode: 'https://github.com/kayaayberk/aybrk.dev',
  },
];
