'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import useStore from '@/lib/store';

function ReachedBottom() {
  const divRef = useStore((state) => state.divRef);
  return (
    <div className='z-50 flex w-full flex-col justify-center pb-24 md:pb-7'>
      <p className='mx-auto text-xs font-extralight text-stone-500 dark:text-stone-400/70'>
        You&apos;ve reached the bottom!
      </p>
      <hr className='mt-4 border-stone-300 dark:border-stone-400/30' />

      <Button
        size='sm'
        onClick={(e) => {
          e.preventDefault();
          divRef.current.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
        variant='ghost'
        className='mx-auto mt-2 border-gray-300 bg-transparent text-xs font-extralight text-stone-500 hover:bg-gray-200 dark:border-zinc-800 dark:text-stone-400/70 dark:hover:bg-gray-500/20'
      >
        Go to top
      </Button>
    </div>
  );
}

export default ReachedBottom;
