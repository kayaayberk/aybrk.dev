'use client';

import useStore from '@/lib/store';
import DrawerMenu from './DrawerMenu';
import { PAGES } from '@/lib/constants';
import DarkModeToggle from './DarkModeToggle';
import { usePathname } from 'next/navigation';
import { useScroll, useTransform, motion } from 'framer-motion';

function MobileHeader() {
  const pathname = usePathname();
  const fadeRef = useStore((state) => state.fadeRef);
  const divRef = useStore((state) => state.divRef);

  const { scrollYProgress } = useScroll({
    container: divRef,
    target: fadeRef,
    offset: ['start 0.05', '0.7 0'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <header className='fixed top-0 z-50 w-full overflow-hidden border-b border-gray-300 bg-spice p-2 px-4 dark:border-zinc-800 dark:bg-spice lg:hidden'>
      <div className='flex w-full items-center justify-between'>
        <div className='flex items-center gap-2'>
          <DrawerMenu />
          <motion.span style={{ opacity, translateY, scale }}>
            <h1 className='text-md font-semibold flex items-center gap-1'>
              {PAGES.find((page) => page.href === pathname)?.label}
              {PAGES.find((page) => page.href === pathname)?.icon}
            </h1>
          </motion.span>
        </div>
        <DarkModeToggle />
      </div>
    </header>
  );
}

export default MobileHeader;
