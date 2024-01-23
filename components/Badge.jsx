'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import BadgeImage from '@/public/meImages/me.jpg';
import DarkModeToggle from './DarkModeToggle';

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
    <div className='flex lg:bg-spice items-center justify-between rounded-xl border border-gray-300 p-2  hover:bg-gray-200 dark:border-zinc-800 dark:hover:bg-gray-500/20'>
      <Link href='/' prefetch className='inline-flex items-center gap-2 rounded-lg'>
        <Image
          src={BadgeImage}
          alt='Ayberk Kaya'
          width={40}
          height={40}
          loading='lazy'
          className='rounded-full border shadow-xl'
        />
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
