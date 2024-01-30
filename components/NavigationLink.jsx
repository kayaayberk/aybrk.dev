'use client';

import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { memo } from 'react';
import { usePathname } from 'next/navigation';

export const NavigationLink = memo(({ href, label, icon, title, handleDrawerClose }) => {
  const pathname = usePathname();

  // Getting the current pathname to style the active tab.
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
      target={title ? '_blank' : ''}
      rel={title ? 'noopener noreferrer' : ''}
      onClick={handleDrawerClose}
      className={[
        'flex items-center justify-between rounded-lg p-2',
        isActive
          ? 'bg-black text-white dark:bg-white dark:text-black'
          : 'hover:bg-gray-200 dark:text-white dark:hover:bg-gray-500/25',
      ].join(' ')}
    >
      <span className='flex items-center gap-2 font-normal'>
        {icon}
        <span className='tracking-wide'>{label}</span>
      </span>
      <span>
        {!title ? (
          !isActive ? (
            '/'
          ) : (
            '//'
          )
        ) : (
          <ExternalLink width={!isActive ? 16 : 18} />
        )}
      </span>
    </Link>
  );
});

NavigationLink.displayName = 'NavigationLink';
