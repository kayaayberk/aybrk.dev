'use client';

import Link from 'next/link';
import Image from 'next/image';
import DarkModeToggle from './DarkModeToggle';
import BadgeImage from '@/public/meImages/IMG_6045.JPG';
import React, { useEffect, useState } from 'react';

function Badge() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Update window width on mount and on window resize
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  return (
    <div className='flex items-center justify-between rounded-lg border border-gray-300 p-2 hover:bg-gray-200  dark:border-zinc-800 dark:hover:bg-gray-500/20 lg:bg-spice'>
      <Link href='/' className='inline-flex items-center gap-2 rounded-lg'>
        <div className='size-10 overflow-hidden rounded-full border'>
          <Image
            src={BadgeImage}
            alt='Ayberk Kaya'
            width={70}
            height={70}
            loading='lazy'
            objectFit='cover'
          />
        </div>
        <div className='flex flex-1 flex-col'>
          <span className='font-semibold tracking-tight'>Ayberk Kaya</span>
          <span className='text-xs font-extralight tracking-wide dark:text-card'>
            Software Developer
          </span>
        </div>
      </Link>
      {windowWidth > 1024 && <DarkModeToggle />}
    </div>
  );
}

export default Badge;
