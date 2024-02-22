'use client';

import useStore from '@/lib/store';
import { PAGES } from '@/lib/constants';
import { usePathname } from 'next/navigation';
import { getDateTimeFormat } from '@/lib/utils';
import { cloneElement, useEffect, useRef } from 'react';

function PageHeader({ allPosts, title, createdAt, readTime }) {
  const fadeRef = useRef(null);
  const blogRef = useRef(null);
  const pathname = usePathname();
  const setFadeRef = useStore((state) => state.setFadeRef);
  const setBlogRef = useStore((state) => state.setBlogRef);
  console.log(readTime);

  const currentPage = PAGES?.find((page) => page.href === pathname);
  const clonedElement = currentPage
    ? cloneElement(currentPage.icon, { size: 24 })
    : null;

  useEffect(() => {
    setFadeRef(fadeRef);
  });
  useEffect(() => {
    setBlogRef(blogRef);
  });

  const isTruthy =
    allPosts && !!allPosts.find((post) => pathname.includes(post.slug));
  if (isTruthy) {
    return (
      <div className='mx-auto flex w-full max-w-xl flex-col gap-3 p-7 pt-28 md:max-w-3xl'>
        <h1 ref={blogRef} className='text-3xl font-medium'>
          {title}
        </h1>
        <span className='flex gap-1'>
          <span className='text-sm font-normal tracking-normal text-stone-500 dark:text-stone-300/60'>
            {getDateTimeFormat(createdAt)} •
          </span>
          <span className='text-sm font-normal tracking-normal text-stone-500 dark:text-stone-300/60'>
            {allPosts.find((post) => pathname.includes(post.slug)).readTime}min
          </span>
        </span>
      </div>
    );
  }

  return (
    <div
      className={[
        'mx-auto w-full max-w-4xl',
        pathname === '/' && 'absolute -z-50 opacity-0',
      ].join(' ')}
    >
      {currentPage && (
        <div className='mx-auto flex w-full flex-col gap-3 p-8 pt-28 md:max-w-4xl'>
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
