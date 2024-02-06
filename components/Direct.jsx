'use client';

import Link from 'next/link';
import { Button } from './ui/button';

function Direct({ option1, option2, href1, href2, message1, message2 }) {
  return (
    <div className='flex w-full justify-between gap-2 md:px-32'>
      <div className='flex w-full flex-col items-center gap-2'>
        <h1 className='mx-auto text-sm md:text-base text-muted-foreground text-center'>{message1}</h1>
        <Link href={href1} className='mx-auto mt-2'>
          <Button>{option1}</Button>
        </Link>
      </div>
      <div className='w-[1px] bg-muted-foreground/50' />

      <div className='flex w-full flex-col items-center gap-2'>
        <h1 className='mx-auto text-sm md:text-base text-muted-foreground'>{message2}</h1>
        <Link href={href2} className='mx-auto mt-2 '>
          <Button>{option2}</Button>
        </Link>
      </div>
    </div>
  );
}

export default Direct;
