'use client';

// Hook & Library Imports
import useStore from '@/lib/store';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// Constant Imports
import { HEADLINES } from '@/lib/constants';

function StickyCard() {
  const containerRef = useRef(null);
  const divRef = useStore((state) => state.divRef);
  //   console.log(containerRef);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: divRef,
    offset: ['start 0.7', 'end center'],
  });
  // offset: ['start center', 'end end'],
  // ['center center', 'end center'],

  useEffect(() => {
    scrollYProgress.on('change', (latest) => {
      //   console.log(latest);
    });
  });

  return (
    <div ref={containerRef} className='w-full h-[1200px]'>
      <div className='flex w-full flex-col items-start'>
        {HEADLINES &&
          HEADLINES.map((headline, index) => {
            const delayFactor = index * 0.25;
            const start = delayFactor;
            const end = start + 1 / 4;
            console.log('start:', start, 'end:', end);
            const opacity = useTransform(scrollYProgress, [start, end, start, end], [0, 1, 1, 0]);
            const scale = useTransform(scrollYProgress, [start, end], [0.7, 1]);
            return (
              <motion.div
                
                style={{ opacity, scale }}
                className='dark:bg-gradient-45deg sticky top-1/2 mx-auto flex rounded-xl border border-gray-300 pl-[0.3px] pt-[0.3px] dark:border-none dark:from-transparent dark:to-gray-600 md:w-6/12'
                key={index}
              >
                <div className='bg-spice dark:bg-gradient-45deg dark:from-spice dark:to-spiceLighter w-full rounded-xl p-1'>
                  <div className='flex items-center justify-center gap-3 p-2 md:pb-3 md:pt-3'>
                    <span className='rounded-xl border-gray-300 dark:border-gray-800'>
                      {headline.icon}
                    </span>
                    <span className='bg-gradient-to-r from-[#A395F6] to-pink-500 bg-clip-text text-2xl font-extrabold text-transparent md:text-4xl'>
                      {headline.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
      </div>
    </div>
  );
}

export default StickyCard;
