'use client';
// Hook & Library Imports
import { useEffect, useRef } from 'react';
import useStore from '@/lib/store';
// Style Imports
import '@/styles/bgImage.css';

function ChildrenRenderer({ children }) {
  //   const [scrollPosition, setScrollPosition] = useState(0);
  const divRef = useRef(null);
  const setDivRef = useStore((state) => state.setDivRef);

  useEffect(() => {
    setDivRef(divRef);
  });

  return (
    <div className='background h-screen w-full overflow-scroll lg:flex lg:flex-col' ref={divRef}>
      {children}
    </div>
  );
}

export default ChildrenRenderer;
