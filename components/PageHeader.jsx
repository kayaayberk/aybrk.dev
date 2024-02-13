'use client';

import useStore from '@/lib/store';
import { PAGES } from '@/lib/constants';
import { usePathname } from 'next/navigation';
import { cloneElement, useEffect, useRef } from 'react';

function PageHeader() {
  const pathname = usePathname();
  const fadeRef = useRef(null);
  const setFadeRef = useStore((state) => state.setFadeRef);

  const currentPage = PAGES?.find((page) => page.href === pathname);
  const clonedElement = currentPage
    ? cloneElement(currentPage.icon, { size: 24 })
    : null;

  useEffect(() => {
    setFadeRef(fadeRef);
  });

  return (
    <div className={['w-full mx-auto max-w-4xl', pathname === '/' && 'opacity-0 absolute -z-50'].join(' ')}>
      {currentPage && (
        <div className='mx-auto flex w-full max-w-xl flex-col gap-3 p-8 pt-28 md:max-w-4xl'>
          <div className='flex items-center gap-2 animate-slide'>
            <h1 ref={fadeRef} className='text-2xl font-semibold'>
              {currentPage.label}
            </h1>
            {clonedElement}
          </div>
          <p className='tracking-tight text-stone-600 dark:text-stone-400/80 md:text-sm text-sm font-light animate-slide delay-100 opacity-0'>
            {currentPage.description &&
              currentPage.description.map((part, index) =>
                typeof part === 'string' ? (
                  part
                ) : (
                  <span className='font-semibold' key={index}>
                    {part.text}
                  </span>
                ),
              )}
          </p>{' '}
          <hr className='w-full border-gray-700/30 dark:border-stone-400/50 animate-slide delay-200 opacity-0' />
        </div>
      )}
    </div>
  );
}

export default PageHeader;
