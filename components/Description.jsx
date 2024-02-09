'use client';

function Description() {
  return (
    <div className='flex h-full flex-col justify-center gap-1'>
      <h1 className='flex items-center justify-center gap-2 text-4xl font-medium text-muted-foreground'>
        Hi <span className='text-[25px]'>👋🏻</span> I&apos;m{' '}
        <span className='bg-gradient-purp bg-clip-text text-4xl font-extrabold text-transparent'>
          Ayberk
        </span>
      </h1>
      <span className='mx-auto bg-gradient-purp bg-clip-text text-2xl font-semibold leading-tight text-transparent'>
        Software Developer
      </span>
      <span className='mx-auto leading-none  text-muted-foreground'>&</span>
      <span className='mx-auto bg-gradient-purp bg-clip-text text-2xl font-semibold leading-tight text-transparent'>
        Designer.
      </span>
      <p className='text-balance text-center text-sm font-extralight -tracking-normal text-muted-foreground md:text-base'>
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
