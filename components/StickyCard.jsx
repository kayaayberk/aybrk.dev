'use client';
/* eslint-disable react-hooks/rules-of-hooks */

import {
  motion,
  transform,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';
import useStore from '@/lib/store';
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

  // useEffect(() => {
  //   scrollYProgress.on('change', (latest) => {
  //     // console.log(latest);
  //   });
  // });

  // const newRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
  // console.log(newRange);

  return (
    <div ref={containerRef} className='h-[1200px] w-full'>
      <div className='flex size-full flex-col items-start'>
        {HEADLINES &&
          HEADLINES.map((headline, index) => {
            const delayFactor = index * 0.25;
            const start = delayFactor;
            const end = start + 1 / 4;
            // console.log('start:', start, 'end:', end);
            const opacity = useTransform(
              scrollYProgress,
              [start, end, end, end],
              [0, 1, 1, 1],
            );
            const scale = useTransform(
              scrollYProgress,
              [start, end, start, end],
              [0.7, 1, 0.7, 1],
            );
            const translateY = useTransform(
              scrollYProgress,
              [start, end],
              [0, -70],
            );
            const springY = useSpring(translateY, {
              stiffness: 100,
              damping: 20,
            });
            const springOpacity = useSpring(opacity, {
              stiffness: 100,
              damping: 50,
            });

            return (
              <motion.div
                style={{ opacity, scale, translateY, springY, springOpacity }}
                className='sticky top-1/2 mx-auto flex rounded-xl border border-gray-300 shadow-lg shadow-black/30 dark:border-none dark:bg-gradient-45deg dark:from-transparent dark:to-[#A395F6]/30 dark:pl-[0.3px] dark:pt-[0.3px] md:w-8/12'
                key={index}
              >
                <div className='w-full rounded-xl bg-spice p-3 dark:bg-gradient-45deg dark:from-spice dark:to-spiceLighter'>
                  <div className='flex items-center justify-center gap-3 p-2 md:py-3'>
                    <span className='dark:drop-shadow-glow'>
                      {headline.icon}
                    </span>
                    <span className='bg-gradient-to-r from-[#A395F6] to-orange-400 bg-clip-text text-xl font-extrabold text-transparent md:text-4xl'>
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
