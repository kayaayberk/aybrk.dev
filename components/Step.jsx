'use client';
// Hook & Library Imports
import { useRef } from 'react';
import useStore from '@/lib/store';
import { motion, useScroll, useTransform } from 'framer-motion';

function Step() {
  const divRef = useStore((state) => state.divRef);
  const stepRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: stepRef,
    container: divRef,
    offset: ['start 0.6', 'start 0.4'],
  });

  const height = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div ref={stepRef} className='flex h-64 w-full justify-center'>
      <motion.span
        style={{ height }}
        className='h-full w-[0.1rem] bg-transparent bg-gradient-to-b dark:from-black dark:to-[#A395F6] from-white to-black'
      ></motion.span>
    </div>
  );
}

export default Step;
