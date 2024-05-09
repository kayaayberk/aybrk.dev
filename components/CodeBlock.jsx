'use client';

import { useEffect, useRef, useState } from 'react';
import { highlight } from 'sugar-high';
import { Button } from './ui/button';
import { LazyMotion, m, domAnimation } from 'framer-motion';

function CodeBlock({ entry }) {
  const code = entry?.code?.json?.content?.map((item) => {
    return item.content[0].value;
  });
  const { title } = entry;

  const codeString = code.join('\n');
  const codeRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const codeHTML = highlight(codeString);

  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(code);
    setTimeout(() => setCopied(false), 3000);
  };

  useEffect(() => {
    const codeElem = codeRef.current;
    codeElem.innerHTML = codeHTML;
  }, [codeHTML]);

  return (
    <>
      <div className='flex w-full flex-wrap items-center justify-between gap-2 rounded-t-lg border border-gray-700/20 bg-gray-50 py-1.5 pl-4 pr-2 dark:border-stone-400/20 dark:bg-stone-700/5'>
        <div className='flex items-center gap-4'>
          {/* <span className='inline-flex items-center gap-1.5'>
            <span className='size-4 rounded-full bg-gray-400/40 dark:bg-white/20' />
            <span className='size-4 rounded-full bg-gray-400/40 dark:bg-white/20' />
            <span className='size-4 rounded-full bg-gray-400/40 dark:bg-white/20' />
          </span> */}
          {title && (
            <p className='m-0 text-xs font-light tracking-wide md:text-sm'>{title}</p>
          )}
        </div>
        <Button
          variant='outline'
          size='xs'
          className='rounded-md border-gray-700/20 bg-transparent p-1 px-2 shadow-lg hover:bg-gray-200 dark:border-stone-400/20 dark:hover:bg-gray-500/20'
          disabled={copied}
          onClick={onCopy}
        >
          <LazyMotion features={domAnimation}>
            <m.span
              key={copied ? 'copied' : 'copy'}
              initial={{ opacity: 0, y: 2 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -2 }}
              className='inline-flex w-14 items-center justify-center gap-0.5'
              transition={{ duration: 0.3 }}
            >
              {copied ? (
                <>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='14'
                    height='14'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='shrink-0'
                  >
                    <polyline points='20 6 9 17 4 12' />
                  </svg>
                  Copied
                </>
              ) : (
                <>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='14'
                    height='14'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='mr-0.5'
                  >
                    <rect width='14' height='14' x='8' y='8' rx='2' ry='2' />
                    <path d='M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2' />
                  </svg>
                  Copy
                </>
              )}
            </m.span>
          </LazyMotion>
        </Button>
      </div>
      <div className='mb-10 w-full overflow-x-auto rounded-lg rounded-t-none border border-t-0 border-gray-700/20 p-2 text-xs shadow-xl dark:border-stone-400/20'>
        <pre className='ml-2'>
          <code ref={codeRef} className='sh__line' />
        </pre>
      </div>
    </>
  );
}

export default CodeBlock;
