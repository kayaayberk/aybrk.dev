import { Scroll } from '@/components/Scroll';
import Image from 'next/image';
import MeHomeImage from '@/public/meImages/IMG_6045.JPG';
import TechStack from '@/components/TechStack';

export default function Home() {
  return (
    <Scroll className='flex flex-col'>
      <div className='container flex h-full max-w-xl flex-col items-start gap-10 pt-32 md:max-w-4xl'>
        <div
          className='flex flex-col items-center rounded-3xl
         md:grid md:grid-cols-2 md:items-start md:gap-10 md:shadow-none'
        >
          <div
            className='h-80 w-full overflow-hidden rounded-t-3xl
          dark:shadow-lg dark:shadow-white/10 md:h-auto md:rounded-3xl md:shadow-xl'
          >
            <Image
              src={MeHomeImage}
              alt='Ayberk Kaya'
              loading='lazy'
              objectFit='cover'
              className='w-[550px] -translate-y-20 md:w-full md:translate-y-0'
            />
          </div>
          <div className='grid grid-rows-2 gap-10'>
            <div
              className='flex flex-col gap-4 rounded-b-3xl p-4 text-start shadow-xl 
            dark:shadow-lg dark:shadow-white/10 md:rounded-3xl md:shadow-xl'
            >
              <h1 className='text-4xl font-medium dark:text-card'>
                Hi! 👋 <br /> I&apos;m <span className='text-black dark:text-white font-bold'>Ayberk</span>
              </h1>
              <h2 className='text-2xl font-normal text-card dark:text-card'>
                I&apos;m a{' '}
                <span className='font-semibold text-black dark:text-white'>
                  Software Developer
                </span>{' '}
                &{' '}
                <span className='font-semibold text-black dark:text-white'>
                  Designer.
                </span>
              </h2>
              <p className='font-light text-card dark:text-card'>
                been teaching myself how to code for the last 6 months.
                currently working on a few projects, and looking for a job. been
                teaching myself how to code for the last 6 months. currently
                working on a few projects, and looking for a job.
              </p>
            </div>
            <TechStack />
          </div>
        </div>
      </div>
    </Scroll>
  );
}
