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
    <div className='h-screen flex-1 w-full overflow-y-scroll lg:flex lg:flex-col' ref={divRef}>
      {children}
    </div>
  );
}

export default ChildrenRenderer;
