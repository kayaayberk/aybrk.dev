'use client';
import Link from 'next/link';
import { Button } from './ui/button';

function ReachedBottom() {
  return (
    <div className='flex w-full flex-col justify-center'>
      <p className='mx-auto text-sm font-extralight text-card dark:text-card'>
        You&apos;ve reached to bottom!
      </p>
      <hr className='mt-4 border-gray-300 dark:border-zinc-800' />
      <Link href='' className='mx-auto mt-2 '>
        <Button
          href='#top'
          scroll={true}
          variant='ghost'
          className='border-gray-300 bg-transparent font-extralight text-card hover:bg-gray-200 dark:border-zinc-800 dark:text-card dark:hover:bg-gray-500/25'
        >
          Go to top
        </Button>
      </Link>
    </div>
  );
}

export default ReachedBottom;
