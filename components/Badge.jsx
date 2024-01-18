'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BadgeImage from '@/public/meImages/me.jpg';
import DarkModeToggle from './DarkModeToggle';

function Badge() {
  return (
    <div className='flex items-center justify-between rounded-xl border p-2 hover:bg-gray-200 dark:hover:bg-gray-500/20'>
      <Link href='/' className='inline-flex items-center gap-2 rounded-lg'>
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
          <span className='font-extralight text-xs tracking-wide dark:text-card'>
            Software Developer
          </span>
        </div>
      </Link>
      <DarkModeToggle />
    </div>
  );
}

export default Badge;
