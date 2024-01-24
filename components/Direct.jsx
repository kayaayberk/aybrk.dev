'use client';

import Link from 'next/link';
import { Button } from './ui/button';

function Direct() {
  return (
    <div className='flex justify-between md:px-32 gap-2'>
      <div className='flex w-full flex-col gap-2 items-center'>
        <h1 className='mx-auto text-sm md:text-base'>See what I&apos;m working on</h1>
        <Link href='/projects' className='mx-auto mt-2'>
          <Button
            href='#top'
            scroll={true}
            variant='outline'
            className='border-gray-500 bg-transparent font-normal text-card hover:bg-gray-200 dark:border-white dark:text-white dark:hover:bg-gray-500/25'
          >
            PROJECTS
          </Button>
        </Link>
      </div>
      <div className='bg-gray-500 dark:bg-white w-[1px]'/>

      <div className='flex w-full flex-col gap-2 items-center'>
        <h1 className='mx-auto text-sm md:text-base'>Say hi!</h1>
        <Link href='/contact' className='mx-auto mt-2 '>
          <Button
            href='#top'
            scroll={true}
            variant='outline'
            className='border-gray-500 bg-transparent font-normal text-card hover:bg-gray-200 dark:border-white dark:text-white dark:hover:bg-gray-500/25'
          >
            CONTACT
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Direct;
