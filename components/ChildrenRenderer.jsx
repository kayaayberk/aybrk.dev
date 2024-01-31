'use client';

import '@/styles/bgImage.css';
import useStore from '@/lib/store';
import { useEffect, useRef } from 'react';

function ChildrenRenderer({ children }) {
  //   const [scrollPosition, setScrollPosition] = useState(0);
  const divRef = useRef(null);
  const setDivRef = useStore((state) => state.setDivRef);

  useEffect(() => {
    setDivRef(divRef);
  });

  return (
    <div className='background h-screen w-full overflow-y-scroll lg:flex lg:flex-col' ref={divRef}>
      {children}
    </div>
  );
}

export default ChildrenRenderer;
