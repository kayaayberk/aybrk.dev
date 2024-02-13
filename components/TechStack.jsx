'use client';

import Card from './Card';
import Image from 'next/image';
import { STACK, DESIGN_STACK } from '@/lib/constants';

function TechStack() {

  return (
    <Card>
      <span className='mx-auto text-lg font-semibold'>My current stack</span>
      <div className='flex flex-col gap-4 md:flex-row'>
        <div className='flex w-full flex-col gap-4'>
          <div>
            <span className='flex items-center justify-center text-lg font-medium'>
              Programming
            </span>
          </div>

          <div className='flex flex-wrap justify-center gap-4 md:gap-6'>
            {STACK.map((tech) => {
              return (
                <div
                  className='flex w-16 flex-col items-center gap-2 rounded-xl p-2'
                  key={tech.label}
                >
                  <Image
                    src={tech.icon}
                    alt={tech.label}
                    priority
                    quality={1}
                    className={[
                      'size-7 rounded-lg md:size-8',
                      tech.label === 'Next.js' ? 'dark:invert dark:filter' : '',
                    ].join(' ')}
                  />
                  <span className='text-xs text-stone-500 dark:text-stone-400/70'>
                    {tech.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className='flex w-full flex-col gap-4'>
          <div>
            <span className='flex items-center justify-center text-lg font-medium'>
              Design
            </span>
          </div>
          <div className='flex flex-wrap justify-center gap-4 md:gap-6'>
            {DESIGN_STACK.map((stack) => {
              return (
                <div
                  className='flex w-16 flex-col items-center gap-2 rounded-xl p-2'
                  key={stack.label}
                >
                  <Image
                    src={stack.icon}
                    alt={stack.label}
                    priority
                    quality={1}
                    className={[
                      'size-7 rounded-lg md:size-8',
                      stack.label === 'Next.js'
                        ? 'dark:invert dark:filter'
                        : '',
                    ].join(' ')}
                  />
                  <span className='text-center text-xs text-stone-500 dark:text-stone-400/70'>
                    {stack.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default TechStack;
