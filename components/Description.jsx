'use client';

import Link from 'next/link';

function Description() {
  return (
    <div className='flex h-full flex-col gap-4 rounded-2xl border-none border-muted-foreground/20 p-4 md:gap-6'>
      <div className='flex flex-col gap-2'>
        <h1 className='flex animate-slide items-center justify-start gap-2 text-3xl font-semibold tracking-tight opacity-0 drop-shadow-xl'>
          Hi, I&apos;m <span className='text-3xl font-semibold '>Ayberk</span>
          <span className='text-[25px]'>👋🏻</span>
        </h1>
        <span className='animate-slide bg-gradient-purp bg-clip-text text-xl font-semibold leading-tight text-transparent opacity-0 delay-50'>
          Software Developer / Designer
        </span>
      </div>
      <p className='text-balance animate-slide text-sm font-light tracking-normal text-stone-500/80 opacity-0 delay-100 dark:text-stone-300/60 md:text-sm'>
        I have been learning programming{' '}
        <span className='font-semibold'>full-time</span> for the last 6 months.
        I&apos;m currently working on a few projects, and seeking opportunities.
      </p>

      <p className='text-balance animate-slide text-sm font-light tracking-normal text-stone-500/80 opacity-0 delay-150 dark:text-stone-300/60 md:text-sm'>
        After graduating from a design school in Warsaw with solid experience in{' '}
        <span className='font-semibold'>teamwork</span>, thorough projects and
        hands-on collaborations, I&apos;m ready to contribute to the programming
        era! Find out more about me{' '}
        <Link
          href='/journey'
          className='inline-flex text-black hover:underline dark:text-white'
        >
          here ↗
        </Link>
      </p>
      <p className='delay-150 md:flex hidden animate-slide text-sm font-light tracking-normal text-stone-500/80 dark:text-stone-300/60 opacity-0 md:text-sm'>
        Use keyboard shortcuts 1 → 6 to navigate between the pages.
      </p>
    </div>
  );
}

export default Description;
