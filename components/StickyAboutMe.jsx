'use client';

// Hook & Library Imports
import useStore from '@/lib/store';
import { useEffect, useRef } from 'react';
// Component Imports
import StickyCard from './StickyCard';
import TextReveal from './TextReveal';
// Constant Imports
import { STICKY_ABOUT_ME } from '@/lib/constants';

function StickyAboutMe() {
  return (
    <div className='flex w-full flex-col items-center gap-20'>
      <TextReveal
        revealPosition={'start 0.65'}
        revealSpeed={'end center'}
        textId={STICKY_ABOUT_ME}
        sticky={true}
        className='text-5xl font-semibold'
      />
      <StickyCard />
    </div>
  );
}

export default StickyAboutMe;
