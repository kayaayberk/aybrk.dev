'use client';

import Link from 'next/link';
import { Button } from './ui/button';

function Direct({ option1, option2, href1, href2, message1, message2 }) {
  return (
    <div className='flex justify-between gap-2 md:px-32 w-full'>
      <div className='flex w-full flex-col items-center gap-2'>
        <h1 className='mx-auto text-sm md:text-base'>
          {message1}
        </h1>
        <Link href={href1} className='mx-auto mt-2'>
          <Button
            variant='outline'
            className='border-gray-300 bg-transparent font-normal hover:bg-gray-200 dark:border-white dark:text-white dark:hover:bg-gray-500/25'
          >
            {option1}
          </Button>
        </Link>
      </div>
      <div className='w-[1px] bg-gray-500 dark:bg-white' />

      <div className='flex w-full flex-col items-center gap-2'>
        <h1 className='mx-auto text-sm md:text-base'>{message2}</h1>
        <Link href={href2} className='mx-auto mt-2 '>
          <Button
            variant='outline'
            className='border-gray-300 bg-transparent font-normal hover:bg-gray-200 dark:border-white dark:text-white dark:hover:bg-gray-500/25'
          >
            {option2}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Direct;
