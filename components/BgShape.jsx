'use client';

function BgShape() {
  return (
    <>
      <div className='absolute inset-0 -z-50 hidden h-[200px] w-[350px] rotate-45 -skew-y-12 rounded-full bg-gradient-to-tr from-purple-700 to-cyan-500 opacity-30 blur-[80px] md:blur-[300px] filter dark:flex md:h-[800px] md:w-[1000px]'></div>
    </>
  );
}

export default BgShape;
