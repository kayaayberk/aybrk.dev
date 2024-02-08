'use client';

function Description() {
  return (
    <div className='flex h-full flex-col justify-center gap-1'>
      <h1 className='flex items-center justify-center gap-2 text-muted-foreground text-4xl font-medium'>
         <span className='text-[25px]'>👋🏻</span> Hi, I&apos;m{' '}
        <span className='bg-gradient-purp bg-clip-text text-4xl font-extrabold text-transparent'>
          Ayberk
        </span>
      </h1>
      <span className='mx-auto bg-gradient-purp bg-clip-text text-2xl font-semibold leading-tight text-transparent'>
          Software Developer
        </span>
        <span className="mx-auto text-muted-foreground  leading-none">&</span>
      <span className='mx-auto bg-gradient-purp bg-clip-text text-2xl font-semibold text-transparent leading-tight'>
        Designer.
      </span>
      <p className='text-center text-balance text-sm -tracking-normal font-extralight text-muted-foreground md:text-base'>
        I have been learning programming{' '}
        <span className='font-semibold'>full-time</span> for the last 6 months.
        I&apos;m currently working on a few projects, and seeking opportunities.
        After graduating from a design school in Warsaw with solid experience in{' '}
        <span className='font-semibold'>teamwork</span>, thorough projects and
        hands-on collaborations, I&apos;m ready to contribute to the programming
        era!
      </p>
    </div>
  );
}

export default Description;
