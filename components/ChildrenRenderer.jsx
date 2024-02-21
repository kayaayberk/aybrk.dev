'use client';

import useStore from '@/lib/store';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

function ChildrenRenderer({ children }) {
  const divRef = useRef(null);
  const setDivRef = useStore((state) => state.setDivRef);
  const pathname = usePathname();
  useEffect(() => {
    setDivRef(divRef);
  }, [divRef]);

  return (
    <div
      // key={pathname}
      className='h-screen w-full flex-1 overflow-y-scroll lg:flex lg:flex-col'
      ref={divRef}
    >
      {children}
    </div>
  );
}

export default ChildrenRenderer;
