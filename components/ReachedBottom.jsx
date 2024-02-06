'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import useStore from '@/lib/store';

function ReachedBottom() {
  const divRef = useStore((state) => state.divRef);
  return (
    <div className='z-50 flex w-full flex-col justify-center md:pb-7 pb-24'>
      <p className='mx-auto text-sm font-extralight text-muted-foreground'>
        You&apos;ve reached to bottom!
      </p>
      <hr className='mt-4 border-muted-foreground/50' />

      <Button
        onClick={(e) => {
          e.preventDefault();
          divRef.current.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
        variant='ghost'
        className='mx-auto mt-2 border-gray-300 bg-transparent font-extralight text-muted-foreground hover:bg-gray-200 dark:border-zinc-800 dark:hover:bg-gray-500/25'
      >
        Go to top
      </Button>
    </div>
  );
}

export default ReachedBottom;
