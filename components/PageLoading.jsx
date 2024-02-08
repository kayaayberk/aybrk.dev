'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

export function PageLoading() {
  const { theme } = useTheme();
  const icon = {
    hidden: {
      pathLength: 0,
      //   fill: 'rgba(255, 255, 255, 0)',
    },
    visible: {
      pathLength: 1,
      //   fill: 'rgba(255, 255, 255, 1)',
      transition: { duration: 0.5 },
    },
  };

  const opacity = {
    hidden: {
      opacity: 0,
      fill: 'rgba(13, 13, 13, 0)',
    },
    visible: {
      opacity: 1,
      fill: 'rgba(13, 13, 13, 1)',
      transition: { duration: 1, ease: 'easeInOut', delay: 1 },
    },
  };

  return (
    <div className='absolute top-96 flex w-full items-center justify-center md:top-1/2'>
      <motion.svg
        xmlns='http://www.w3.org/2000/svg'
        width={96}
        height={96}
        fill='none'
      >
        <motion.path
          d='M0 25C0 11.193 11.193 0 25 0h46c13.807 0 25 11.193 25 25v46c0 13.807-11.193 25-25 25H25C11.193 96 0 84.807 0 71V25Z'
          variants={opacity}
          initial='hidden'
          animate='visible'
        />
        <motion.path
          d='M48 17 23 78h12l13-31 13 31h12L48 17Z'
          variants={icon}
          initial='hidden'
          animate='visible'
          stroke={theme === 'dark' || theme === 'system' ? '#fff' : '#000000'}
          strokeWidth={2}
        />
      </motion.svg>
    </div>
  );
}
