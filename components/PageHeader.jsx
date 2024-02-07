'use client';

import useStore from '@/lib/store';
import { PAGES } from '@/lib/constants';
import { usePathname } from 'next/navigation';
import { cloneElement, useEffect, useRef } from 'react';

function PageHeader() {
  const pathname = usePathname();

  const fadeRef = useRef(null);
  const setFadeRef = useStore((state) => state.setFadeRef);

  const formattedPathname =
    pathname.replace('/', '').charAt(0).toUpperCase() +
    pathname.replace('/', '').slice(1);
  const currentPage = PAGES.find((page) => page.label === formattedPathname);
  const clonedElement = currentPage
    ? cloneElement(currentPage.icon, { size: 24 })
    : null;

  useEffect(() => {
    setFadeRef(fadeRef);
  });

  if (pathname === '/') return <></>;

  return (
    <div className='w-full'>
      {currentPage && (
        <div className='mx-auto flex w-full max-w-xl flex-col gap-6 p-8 pt-28 md:max-w-4xl'>
          <div className='flex items-center gap-2'>
            <h1 ref={fadeRef} className='text-3xl font-semibold'>{currentPage.label}</h1>
            {clonedElement}
          </div>
          <p className='text-base font-normal tracking-normal'>
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
          <hr className='w-full border-muted-foreground/30' />
        </div>
      )}
    </div>
  );
}

export default PageHeader;
