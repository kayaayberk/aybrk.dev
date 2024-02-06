'use client';

function Description() {
  return (
    <div className="flex flex-col gap-1 md:gap-4">
      <h1 className='text-4xl md:text-[42px] font-medium'>
        Hi! <span className='text-4xl md:text-[42px]'>👋</span> I&apos;m{' '}
        <span className='bg-gradient-to-r from-[#A395F6] to-blue-300 bg-clip-text text-4xl md:text-[42px] font-extrabold text-transparent'>
          Ayberk
        </span>
      </h1>
      <h2 className='text-xl md:text-2xl font-normal'>
        I&apos;m a{' '}
        <span className='font-semibold bg-gradient-to-r from-[#A395F6] to-blue-300 bg-clip-text text-transparent'>
          Software Developer
        </span>{' '}
        & <span className='font-semibold bg-gradient-to-r from-[#A395F6] to-blue-300 bg-clip-text text-transparent'>Designer.</span>
      </h2>
      <p className='text-sm md:text-base font-light text-muted-foreground tracking-wide'>
        I have been learning programming{' '}
        <span className='font-semibold'>full-time</span> for the
        last 6 months. I&apos;m currently working on a few projects, and seeking
        opportunities. After graduating from a design school in Warsaw with
        solid experience in <span className='font-semibold'>teamwork</span>, thorough projects and hands-on collaborations, I&apos;m ready to
        contribute to the programming era!
      </p>
    </div>
  );
}

export default Description;
