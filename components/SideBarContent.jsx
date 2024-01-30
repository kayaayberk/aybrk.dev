'use client';

import { useRouter } from 'next/navigation';
import { PAGES, LINKS, BUILT_WITH, INFO } from '@/lib/constants';
import Badge from './Badge';
import { NavigationLink } from './NavigationLink';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, MapPin } from 'lucide-react';

function SideBarContent({ handleDrawerClose }) {
  const router = useRouter();

  return (
    <div className='flex h-screen w-full flex-col bg-spice p-2 text-sm dark:bg-spice'>
      <div className='flex flex-1 flex-col justify-start gap-3'>
        <Badge />
        <div className='flex flex-col gap-1 rounded-lg border border-gray-300 p-2 dark:border-zinc-800'>
          {PAGES.map((page) => {
            return (
              <NavigationLink
                key={page.href}
                href={page.href}
                label={page.label}
                icon={page.icon}
                handleDrawerClose={handleDrawerClose}
              />
            );
          })}
        </div>
        <div className='flex flex-col rounded-lg border border-gray-300 p-2 text-sm dark:border-zinc-800'>
          <span className='px-2 text-xs font-normal leading-relaxed text-card dark:text-card'>
            Online
          </span>
          <div className='flex flex-col gap-1'>
            {Object.values(LINKS).map((link) => {
              return (
                <NavigationLink
                  key={link.url}
                  href={link.url}
                  label={link.title}
                  icon={link.icon}
                  title={link.title}
                  handleDrawerClose={handleDrawerClose}
                />
              );
            })}
          </div>
        </div>
        <div className='flex flex-col gap-2 rounded-lg border border-gray-300 p-2 text-xs dark:border-zinc-800'>
          <span className='px-2 text-xs font-normal leading-relaxed text-card dark:text-card'>
            Info
          </span>
          {INFO.map((link) => {
            return (
              <span
                key={link.label}
                className='flex items-center gap-2 p-2 text-sm font-normal dark:text-white'
              >
                {link.icon}
                <span className='tracking-wide'>{link.label}</span>
              </span>
            );
          })}
        </div>

        <div className='flex h-full flex-col gap-2 rounded-lg border border-gray-300 p-2 text-xs dark:border-zinc-800'>
          <span className='px-2 font-normal leading-relaxed text-card dark:text-card'>
            Built with:
          </span>
          <div className='flex flex-col gap-3 p-2'>
            {BUILT_WITH.map((tech) => {
              return (
                <Link
                  key={tech.name}
                  href={tech.url}
                  target='_blank'
                  onClick={handleDrawerClose}
                  className='flex items-center gap-1'
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={15}
                    height={15}
                    loading='lazy'
                    className={
                      tech.invert === undefined
                        ? 'none'
                        : 'dark:invert dark:filter'
                    }
                  />
                  <span className='dark:text-white'>{tech.name}</span>
                </Link>
              );
            })}
          </div>
          <span className='inline-flex items-center gap-1 px-2 font-normal leading-relaxed text-card dark:text-card'>
            by
            <span className='font-medium text-black dark:text-zinc-300'>
              Ayberk Kaya
            </span>
            with love
            <span>
              <Heart width={12} />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SideBarContent;
