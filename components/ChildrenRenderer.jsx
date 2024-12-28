'use client';

import useStore from '@/lib/store';
import { useEffect, useRef } from 'react';

function ChildrenRenderer({ children }) {
  const divRef = useRef(null);
  const setDivRef = useStore((state) => state.setDivRef);

  useEffect(() => {
    setDivRef(divRef);
  });

  return (
    <div
      className='h-screen w-full flex-1 overflow-y-scroll lg:flex lg:flex-col no-scrollbar'
      ref={divRef}
    >
      {children}
    </div>
  );
}

export default ChildrenRenderer;
