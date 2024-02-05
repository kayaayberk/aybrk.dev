'use client';

import Card from './Card';
import Image from 'next/image';
import { STACK, DESIGN_STACK } from '@/lib/constants';

function TechStack() {
  const classId = 'tech-stack';

  return (
    <Card classId={classId} hoverActive>
      <span className='mx-auto text-lg font-semibold'>My current stack</span>
      <div className='flex flex-col gap-4 md:flex-row'>
        <div className='flex w-full flex-col gap-4'>
          <div>
            <span className='flex items-center justify-center text-lg font-medium'>
              Programming
            </span>
          </div>

          <div className='flex size-full flex-wrap justify-center gap-3'>
            {STACK.map((tech) => {
              return (
                <div
                  className='flex size-20 flex-col items-center justify-between gap-2 rounded-xl p-2'
                  key={tech.label}
                >
                  <Image
                    src={tech.icon}
                    alt={tech.label}
                    height={tech.label === 'TailwindCSS' ? 24 : 32}
                    priority={true}
                    quality={1}
                    className={[
                      'rounded-lg',
                      tech.label === 'Next.js' ? 'dark:invert dark:filter' : '',
                    ].join(' ')}
                  />
                  <span className='text-xs text-muted-foreground'>
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
          <div className='flex size-full flex-wrap justify-center gap-3'>
            {DESIGN_STACK.map((stack) => {
              return (
                <div
                  className='flex size-20 flex-col items-center justify-between gap-2 rounded-xl p-2'
                  key={stack.label}
                >
                  <Image
                    src={stack.icon}
                    alt={stack.label}
                    height={32}
                    priority={true}
                    quality={1}
                    className={[
                      'rounded-lg',
                      stack.label === 'Next.js'
                        ? 'dark:invert dark:filter'
                        : '',
                    ].join(' ')}
                  />
                  <span className='text-center text-xs text-muted-foreground'>
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
