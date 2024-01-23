'use client';

// Hook & Library Imports
import {
  motion,
  useScroll,
  useTransform,
  // useMotionValueEvent,
} from 'framer-motion';
import { useEffect, useRef } from 'react';
import useStore from '@/lib/store';

function TextReveal({ textId, revealSpeed, revealPosition, sticky }) {
  const divRef = useStore((state) => state.divRef);
  const pRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: pRef,
    container: divRef,
    offset: [revealPosition, revealSpeed],
  });

  // useEffect(() => {
  //   scrollYProgress.on('change', (latest) => {
  //     console.log(latest);
  //   });
  // });

  return (
    <p
      className={[
        'flex w-full flex-wrap justify-center',
        sticky ? 'sticky top-1/3' : '',
      ].join(' ')}
      ref={pRef}
    >
      {textId &&
        textId.split(' ').map((word, index) => {
          const start = index / textId.length;
          const end = start + 1 / textId.length;
          return (
            <Word key={index} range={[start, end]} progress={scrollYProgress}>
              {word + ' '}
            </Word>
          );
        })}
    </p>
  );
}

function Word({ children, range, progress }) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className='relative text-4xl font-extrabold md:text-6xl'>
      <span className='absolute mr-2 text-4xl font-bold opacity-5 md:text-6xl'>
        {children}
      </span>
      <motion.span
        style={{ opacity }}
        className='mr-2 text-4xl font-bold transition-all duration-200 md:text-6xl '
      >
        {children}
      </motion.span>
    </span>
  );
}

export default TextReveal;
