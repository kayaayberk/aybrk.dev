'use client';

import { usePathname } from 'next/navigation';

function BgShape() {
  const pathname = usePathname();
  return (
    <>
      <div className='absolute right-0 top-0 -z-50 hidden h-[50px] w-[750px] rotate-45 -skew-y-12 rounded-full bg-gradient-to-tr from-purple-700 to-cyan-500 opacity-10 blur-[80px] filter dark:flex md:h-[800px] md:w-[1000px] md:blur-[300px]'></div>
    </>
  );
}

export default BgShape;
