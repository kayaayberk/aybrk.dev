'use client';

import { useEffect, useRef, useState } from 'react';
import { highlight } from 'sugar-high';
import { Button } from './ui/button';
import { LazyMotion, m, domAnimation } from 'framer-motion';
import { Clipboard } from 'lucide-react';
import { Check } from 'lucide-react';

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
      <div className='flex w-full flex-wrap items-center justify-between gap-2 rounded-t-lg border border-neutral-700 bg-black/90 py-1.5 pl-4 pr-2 dark:border-stone-400/20 dark:bg-transparent'>
        <div className='flex items-center gap-4'>
          {/* <span className='inline-flex items-center gap-1.5'>
            <span className='size-4 rounded-full bg-gray-400/40 dark:bg-white/20' />
            <span className='size-4 rounded-full bg-gray-400/40 dark:bg-white/20' />
            <span className='size-4 rounded-full bg-gray-400/40 dark:bg-white/20' />
          </span> */}
          {title && (
            <p className='m-0 text-xs font-light tracking-wide md:text-sm text-white'>
              {title}
            </p>
          )}
        </div>
        <Button
          variant='ghost'
          size='icon'
          className='hover:bg-transparent'
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
              {copied ? <Check size={14} color='white' /> : <Clipboard size={14} color='white' />}
            </m.span>
          </LazyMotion>
        </Button>
      </div>
      <div className='mb-10 w-full overflow-x-auto rounded-lg rounded-t-none border border-t-0 border-gray-700/20 bg-black/90 dark:bg-transparent p-2 text-xs shadow-xl dark:border-stone-400/20'>
        <pre className='ml-2'>
          <code ref={codeRef} className='sh__line' />
        </pre>
      </div>
    </>
  );
}

export default CodeBlock;
