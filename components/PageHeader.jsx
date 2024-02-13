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
    <div
      className={[
        'mx-auto w-full max-w-4xl',
        pathname === '/' && 'absolute -z-50 opacity-0',
      ].join(' ')}
    >
      {currentPage && (
        <div className='mx-auto flex w-full max-w-xl flex-col gap-3 p-8 pt-28 md:max-w-4xl'>
          <div className='flex animate-slide items-center gap-2'>
            <h1 ref={fadeRef} className='text-2xl font-semibold'>
              {currentPage.label}
            </h1>
            {clonedElement}
          </div>
          <p className='animate-slide text-sm font-light tracking-tight text-stone-500 opacity-0 delay-100 dark:text-stone-300/60 md:text-sm'>
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
          <hr className='w-full animate-slide border-gray-700/30 opacity-0 delay-200 dark:border-stone-400/50' />
        </div>
      )}
    </div>
  );
}

export default PageHeader;
