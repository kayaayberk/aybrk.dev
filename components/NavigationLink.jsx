'use client';

import Link from 'next/link';
import { memo } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useKeyPress } from '@/hooks/useKeyPress';
import { cn } from '@/lib/utils';

export const NavigationLink = memo(
  ({ href, label, icon, title, handleDrawerClose, scrollToTop, number }) => {
    const pathname = usePathname();
    const router = useRouter();

    useKeyPress(onKeyPress, ['1', '2', '3', '4', '5', '6']);

    function onKeyPress(event) {
      event.preventDefault();

      if (event.key === '1') {
        router.push('/');
      } else if (event.key === '2') {
        router.push('/projects');
      } else if (event.key === '3') {
        router.push('/journey');
      } else if (event.key === '4') {
        router.push('/taste');
      } else if (event.key === '5') {
        router.push('/blog');
      } else if (event.key === '6') {
        router.push('/contact');
      }
    }

    // Get the current pathname to style the active tab.
    let isActive = false;
    if (pathname?.length > 1) {
      const splitPathname = pathname.split('/');
      const currentPathname = splitPathname[1] ?? '';
      isActive = currentPathname === href.split('/')[1];
    } else {
      isActive = pathname === href;
    }

    return (
      <Link
        href={href}
        key={href}
        prefetch={true}
        target={title ? '_blank' : ''}
        rel={title ? 'noopener noreferrer' : ''}
        onClick={scrollToTop || handleDrawerClose}
        scroll
        className={cn(
          'group flex items-center justify-between overflow-hidden rounded-md px-2 py-1.5 pr-1',
          isActive
            ? 'bg-gray-400/40 dark:bg-white/20'
            : 'hover:bg-gray-200 dark:text-white/80 dark:hover:bg-gray-500/20',
        )}
      >
        <span className='flex items-center gap-3 font-normal'>
          {icon}
          <span className='font-normal tracking-normal'>{label}</span>
        </span>
        <span className='overflow-hidden'>
          {!title ? (
            <span
              className={[
                'hidden size-5 items-center justify-center rounded-sm px-1 text-xs md:flex',
                isActive
                  ? 'text-black dark:text-white'
                  : 'text-gray-400 dark:text-white/50',
              ].join(' ')}
            >
              {number}
            </span>
          ) : (
            <>
              <ArrowUpRight
                size={16}
                className='-translate-x-3 translate-y-3 text-gray-400 opacity-0 transition-all duration-300 group-hover:-translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white/50'
              />
              <ArrowUpRight
                size={16}
                className='absolute -translate-y-4 text-gray-400 transition-all duration-300 group-hover:-translate-y-7 group-hover:translate-x-3 group-hover:opacity-0 dark:text-white/50 '
              />
            </>
          )}
        </span>
      </Link>
    );
  },
);

NavigationLink.displayName = 'NavigationLink';
