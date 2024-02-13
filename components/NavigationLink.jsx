'use client';

import Link from 'next/link';
import { memo } from 'react';
import { ArrowUpRight } from 'lucide-react';
// import { useKeyPress } from '@/hooks/useKeyPress';
import { usePathname, useRouter } from 'next/navigation';

export const NavigationLink = memo(
  ({ href, label, icon, title, handleDrawerClose, scrollToTop, number }) => {
    const pathname = usePathname();
    // const router = useRouter();

    // useKeyPress(onKeyPress, [
    //   'Digit1',
    //   'Digit2',
    //   'Digit3',
    //   'Digit4',
    //   'Digit5',
    //   'Digit6',
    // ]);

    // function onKeyPress(event) {
    //   event.preventDefault();

    //   if (event.code === 'Digit1') {
    //     router.push('/');
    //   } else if (event.code === 'Digit2') {
    //     router.push('/projects');
    //   } else if (event.code === 'Digit3') {
    //     router.push('/journey');
    //   } else if (event.code === 'Digit4') {
    //     router.push('/taste');
    //   } else if (event.code === 'Digit5') {
    //     router.push('/blog');
    //   } else if (event.code === 'Digit6') {
    //     router.push('/contact');
    //   }
    // }

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
        className={[
          'flex items-center justify-between rounded-md px-2 py-2 pr-1 ',
          isActive
            ? 'bg-gray-400/40 dark:bg-white/20'
            : 'hover:bg-gray-200 dark:text-white/80 dark:hover:bg-gray-500/20',
        ].join(' ')}
      >
        <span className='flex items-center gap-3 font-normal'>
          {icon}
          <span className='font-medium tracking-normal'>{label}</span>
        </span>
        <span>
          {!title ? (
            <span
              className={[
                'hidden size-5 items-center justify-center rounded-sm px-1 text-xs md:flex',
                isActive
                  ? 'text-black dark:text-white'
                  : 'bg-black/5 text-gray-400 dark:bg-white/10 dark:text-white/50',
              ].join(' ')}
            >
              {number}
            </span>
          ) : (
            <ArrowUpRight size={16} />
          )}
        </span>
      </Link>
    );
  },
);

NavigationLink.displayName = 'NavigationLink';
