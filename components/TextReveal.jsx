'use client';
import { useRef } from 'react';
import {
  useScroll,
  motion,
  useTransform,
  // useMotionValueEvent,
} from 'framer-motion';
import { PARAGRAPH } from '@/lib/constants';
import useStore from '@/lib/store';

function TextReveal() {
  const words = PARAGRAPH.split(' ');
  const divRef = useStore((state) => state.divRef);
  const pRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: pRef,
    container: divRef,
    offset: ['start 0.7', 'start 0.2'],
  });

  return (
    <p 
    className='flex flex-wrap' 
    ref={pRef}
    >
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;
        return (
          <Word 
          key={index} 
          range={[start, end]} 
          progress={scrollYProgress}
          >
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
    <span className='relative text-3xl font-extrabold md:text-6xl'>
      <span className='absolute mr-2 text-3xl font-bold opacity-5 md:text-6xl'>
        {children}
      </span>
      <motion.span
        style={{ opacity }}
        className='mr-2 text-3xl font-bold md:text-6xl'
      >
        {children}
      </motion.span>
    </span>
  );
}

export default TextReveal;
