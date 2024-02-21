'use client';

import useStore from '@/lib/store';
import { useEffect, useRef } from 'react';

function ChildrenRenderer({ children }) {
  const blogDivRef = useRef(null);
  const setBlogDivRef = useStore((state) => state.setBlogDivRef);

  useEffect(() => {
    setBlogDivRef(blogDivRef);
  });

  return (
    <div
      className='h-screen w-full flex-1 overflow-y-scroll lg:flex lg:flex-col'
      ref={blogDivRef}
    >
      {children}
    </div>
  );
}

export default ChildrenRenderer;
