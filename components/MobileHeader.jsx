'use client';

import useStore from '@/lib/store';
import DrawerMenu from './DrawerMenu';
import DarkModeToggle from './DarkModeToggle';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

function MobileHeader() {
  const pathname = usePathname();
  const headerRef = useRef(null);
  const fadeRef = useStore((state) => state.fadeRef);
  const divRef = useStore((state) => state.divRef);

  const { scrollYProgress } = useScroll({
    target: fadeRef,
    container: divRef,
  });

  const opacity = useTransform(scrollYProgress, [0, 0.044], [1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.11], [0, 50]);
  const scale = useTransform(scrollYProgress, [0, 0.11], [1, 0.6]);

  return (
    <header className='fixed top-0 z-50 w-full overflow-hidden border-b border-gray-300 bg-spice p-2 px-4 dark:border-zinc-800 dark:bg-spice lg:hidden'>
      <div className='flex w-full items-center justify-between'>
        <div className='flex items-center gap-2'>
          <DrawerMenu />
          <span>
            {pathname === '/' ? (
              <h1 ref={headerRef} className='text-md font-semibold'>
                Home
              </h1>
            ) : (
              <motion.h1
                style={{ opacity, translateY, scale }}
                ref={headerRef}
                className='text-md font-semibold'
              >
                {pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)}
              </motion.h1>
            )}
          </span>
        </div>
        <DarkModeToggle />
      </div>
    </header>
  );
}

export default MobileHeader;
