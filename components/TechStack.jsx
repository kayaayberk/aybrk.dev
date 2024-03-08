'use client';

import Card from './Card';
import Image from 'next/image';
import { STACK, DESIGN_STACK } from '@/lib/constants';

function TechStack() {
  return (
    <Card>
      <div className='flex gap-6 flex-row'>
        <div className='flex w-full flex-col gap-4'>
          <div>
            <span className='text-lg font-medium'>
              Programming Stack
            </span>
          </div>

          <div className='flex w-full flex-col justify-center gap-1.5'>
            {STACK.map((tech) => {
              return (
                <div
                  className='flex w-full items-center gap-2 rounded-xl p-1'
                  key={tech.label}
                >
                  <Image
                    src={tech.icon}
                    alt={tech.label}
                    priority
                    quality={1}
                    className={[
                      'rounded-sm size-4',
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
            <span className='text-lg font-medium'>
              Design Stack
            </span>
          </div>
          <div className='flex w-full flex-col flex-wrap justify-center gap-1.5'>
            {DESIGN_STACK.map((stack) => {
              return (
                <div
                  className='flex w-full items-center gap-2 rounded-xl p-1'
                  key={stack.label}
                >
                  <Image
                    src={stack.icon}
                    alt={stack.label}
                    priority
                    quality={1}
                    className={[
                      'rounded-sm size-4',
                      stack.label === 'Next.js'
                        ? 'dark:invert dark:filter'
                        : '',
                    ].join(' ')}
                  />
                  <span className='text-xs text-stone-500 dark:text-stone-400/70'>
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
