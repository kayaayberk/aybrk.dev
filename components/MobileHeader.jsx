'use client';

import Link from 'next/link';
import useStore from '@/lib/store';
import DrawerMenu from './DrawerMenu';
import { PAGES } from '@/lib/constants';
import { ArrowLeft } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import { usePathname } from 'next/navigation';
import { useScroll, useTransform, motion } from 'framer-motion';

function MobileHeader({ allPosts }) {
  const pathname = usePathname();
  const divRef = useStore((state) => state.divRef);
  const fadeRef = useStore((state) => state.fadeRef);
  const blogRef = useStore((state) => state.blogRef);
  const blogDivRef = useStore((state) => state.blogDivRef);

  const { scrollYProgress } = useScroll({
    container:
      pathname === `/blog/${allPosts.map((post) => post.slug)}`
        ? blogDivRef
        : divRef,
    target:
      pathname === `/blog/${allPosts.map((post) => post.slug)}`
        ? blogRef
        : fadeRef,
    offset: ['start 0.05', '0.7 0'],
  });

  const xxx = pathname === `/blog/${allPosts.map((post) => post.slug)}`;
  console.log(xxx);

  const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [15, 0]);
  // scrollYProgress.on('change', (v) => console.log(v));

  return (
    <header className='fixed top-0 z-50 w-full overflow-hidden border-b border-gray-300 bg-spice p-2 px-4 dark:border-zinc-800 dark:bg-spice lg:hidden'>
      <div className='flex w-full items-center justify-between'>
        <div className='flex items-center gap-2 overflow-hidden whitespace-nowrap'>
          {PAGES.find((page) => page.href === pathname) ? (
            <DrawerMenu />
          ) : (
            <Link
              href='/blog'
              className='m* rounded-md p-2.5 hover:bg-gray-300 dark:hover:bg-gray-500/25'
            >
              <ArrowLeft size={16} />
            </Link>
          )}

          <motion.span className='' style={{ opacity, translateY }}>
            {
              <h1 className='text-md flex items-center gap-1 font-semibold'>
                {pathname === `/blog/${allPosts.map((post) => post.slug)}` ? (
                  allPosts.find((post) => pathname.includes(post.slug))?.title
                ) : (
                  <>
                    {PAGES.find((page) => page.href === pathname)?.label}
                    {PAGES.find((page) => page.href === pathname)?.icon}
                  </>
                )}
              </h1>
            }
          </motion.span>
          <div className='absolute right-12 z-30 h-full w-4/5 bg-gradient-to-l from-spice from-20% to-transparent to-100%'></div>
        </div>
        <DarkModeToggle />
      </div>
    </header>
  );
}

export default MobileHeader;
