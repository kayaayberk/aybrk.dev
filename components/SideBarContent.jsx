'use client';

import { useRouter } from 'next/navigation';
import { PAGES, LINKS, BUILT_WITH, INFO } from '@/lib/constants';
import Badge from './Badge';
import { NavigationLink } from './NavigationLink';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, MapPin } from 'lucide-react';

function SideBarContent() {
  const router = useRouter();

  return (
    <div className='flex h-screen w-full flex-col p-2 text-sm'>
      <div className='flex flex-1 flex-col gap-3'>
        <Badge />
        <div className='flex flex-col gap-1 rounded-xl border p-2'>
          {PAGES.map((page) => {
            return (
              <NavigationLink
                key={page.href}
                href={page.href}
                label={page.label}
                icon={page.icon}
              />
            );
          })}
        </div>
        {/* <hr className="border-gray-200" /> */}
        <div className='flex flex-col rounded-xl border p-2 text-sm'>
          <span className='px-2 text-xs font-normal leading-relaxed text-card dark:text-card'>
            Socials
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
                />
              );
            })}
          </div>
        </div>
        <div className='flex flex-col gap-2 rounded-xl border p-2 text-xs'>
          <span className='px-2 text-xs font-normal leading-relaxed text-card dark:text-card'>
            Info
          </span>
          {INFO.map((link) => {
            return (
              <span
                key={link.label}
                className='flex items-center gap-2 p-2 text-sm font-normal dark:text-card'
              >
                {link.icon}
                <span className='tracking-wide'>{link.label}</span>
              </span>
            );
          })}
        </div>

        <div className='flex flex-col gap-2 rounded-xl border p-2 text-xs'>
          <span className='px-2 font-normal leading-relaxed text-card dark:text-card'>
            Built with:
          </span>
          <div className='flex flex-col gap-3 p-2'>
            {BUILT_WITH.map((tech) => {
              return (
                <Link
                  key={tech.name}
                  href={tech.url}
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
                  <span className='dark:text-card'>{tech.name}</span>
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
