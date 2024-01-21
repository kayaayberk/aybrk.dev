'use client';

import { STACK } from '@/lib/constants';

import Image from 'next/image';
import Card from './Card';

function TechStack() {
  const classId = 'tech-stack';
  

  return (
    <Card classId={classId}>
      <div>
        <span className='flex items-center justify-center text-xl font-semibold'>
          My current tech stack
        </span>
      </div>
      <div className='flex flex-wrap justify-center gap-3'>
        {STACK.map((tech) => {
          return (
            <div
              className='flex h-20 w-20 flex-col items-center justify-between gap-2 rounded-2xl p-2'
              key={tech.label}
            >
              <Image
                src={tech.icon}
                alt={tech.label}
                height={tech.label === 'TailwindCSS' ? 24 : 32}
                className={[
                  'rounded-lg',
                  tech.label === 'Next.js' ? 'dark:invert dark:filter' : '',
                ].join(' ')}
              />
              <span className='text-xs text-card dark:text-card'>
                {tech.label}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default TechStack;
