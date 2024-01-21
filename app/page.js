import TechStack from '@/components/TechStack';
import TextReveal from '@/components/TextReveal';
import Card from '@/components/Card';
import LandingImage from '@/components/LandingImage';
import ShowScroll from '@/components/ShowScroll';


export default function Home() {

  return (
    <div className='w-full'>
      <div className='container mx-auto flex h-screen max-w-xl flex-col items-start gap-10 pt-20 md:pt-32 md:max-w-4xl'>

        <div
          className='flex flex-col items-center rounded-2xl
         md:grid md:grid-cols-2 md:items-start md:gap-10 md:shadow-none'
        >
          <LandingImage />

          <div className='grid grid-rows-2 gap-10'>
            <Card>
              <h1 className='text-5xl font-bold'>
                Hi! 👋 <br /> I&apos;m Ayberk
              </h1>
              <h2 className='text-2xl font-normal dark:text-card'>
                I&apos;m a{' '}
                <span className='font-semibold dark:text-white'>
                  Software Developer
                </span>{' '}
                &{' '}
                <span className='font-semibold dark:text-white'>Designer.</span>
              </h2>
              <p className='font-light text-card dark:text-card'>
                I have been regaining my coding skills{' '}
                <span className='font-semibold dark:text-white'>fulltime</span>{' '}
                for the last 6 months. Currently working on a few projects, and
                looking for a job after graduating from a design school where
                the type of study is based on hands-on team-work.
              </p>
            </Card>
            <TechStack />
          </div>
        </div>
        <ShowScroll />

        <TextReveal />
      </div>
      <div className='h-screen'></div>
    </div>
  );
}
