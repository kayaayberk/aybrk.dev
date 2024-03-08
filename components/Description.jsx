'use client';

import Link from 'next/link';
import Card from './Card';

function Description() {
  return (
    <Card desc>
      <div className='flex h-full flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <h1 className='flex items-center justify-start gap-2 text-3xl font-semibold tracking-tight  drop-shadow-xl'>
            Hi, I&apos;m{' '}
            <span className='bg-gradient-purp bg-clip-text text-3xl font-semibold text-transparent'>
              Ayberk
            </span>
            <span className='text-[25px]'>👋🏻</span>
          </h1>
          <span className='text-md md:text-xl font-medium leading-tight'>
            I&apos;m a Software Developer & Designer
          </span>
        </div>
        <p className='text-sm font-light tracking-normal text-stone-500/80 dark:text-stone-300/60 md:text-sm'>
          I&apos;m a passionate learner of the latest web technologies and I
          have an endless energy for learning. I&apos;m trying to improve my
          skills every day by learning new technologies and working on new
          projects.
        </p>

        <p className='text-sm font-light tracking-normal text-stone-500/80 dark:text-stone-300/60 md:text-sm'>
          After graduating from a design school in Warsaw with solid experience
          in teamwork, thorough projects and collaborations, I&apos;m ready to
          contribute to the programming era! Find out more about me{' '}
          <Link
            href='/journey'
            className='inline-flex text-black hover:underline dark:text-white'
          >
            here ↗
          </Link>
        </p>
        <p className='hidden bg-gradient-purp bg-clip-text text-sm font-semibold tracking-normal text-transparent dark:text-stone-300/60 md:flex md:text-sm'>
          Use keyboard shortcuts 1 → 6 to navigate between the pages.
        </p>
      </div>
    </Card>
  );
}

export default Description;
