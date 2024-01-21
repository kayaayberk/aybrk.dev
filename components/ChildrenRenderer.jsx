'use client';

import { useEffect, useRef } from 'react';
import useStore from '@/lib/store';

function ChildrenRenderer({ children }) {
  //   const [scrollPosition, setScrollPosition] = useState(0);
  const divRef = useRef(null);
  const setDivRef = useStore((state) => state.setDivRef);

  useEffect(() => {
    setDivRef(divRef);
  });

  return (
    <div className='h-screen w-full overflow-scroll lg:flex' ref={divRef}>
      {children}
    </div>
  );
}

export default ChildrenRenderer;
