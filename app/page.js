// Component Imports
import Step from '@/components/Step';
import Card from '@/components/Card';
import Direct from '@/components/Direct';
import TechStack from '@/components/TechStack';
import TextReveal from '@/components/TextReveal';
import ShowScroll from '@/components/ShowScroll';
import Description from '@/components/Description';
import LandingImage from '@/components/LandingImage';
import StickyAboutMe from '@/components/StickyAboutMe';
import ReachedBottom from '@/components/ReachedBottom';
import { PARAGRAPH, READY_TO_CONTRIBUTE } from '@/lib/constants';
import { sharedTitle, sharedDescription } from '@/app/shared-metadata';
import PageHeader from '@/components/PageHeader';
import ProjectCarousel from '@/components/ProjectCarousel';

export default function Home() {
  return (
    <>
      <PageHeader />
      <div className='container z-50 mx-auto flex min-h-max flex-col items-start gap-20 pt-28 md:max-w-4xl'>
        <div className='flex flex-col items-center gap-5 rounded-2xl md:grid md:grid-cols-2 md:shadow-none'>
          <div className='w-full gap-5 md:col-span-2 md:grid md:grid-cols-1'>
            <Description />
          </div>
          <div className='w-full flex flex-col gap-5 md:col-span-2 md:grid md:grid-cols-2'>
            <ProjectCarousel carousel />
            <TechStack />
          </div>
        </div>

        <div className='mt-10 flex flex-col'>
          <ShowScroll />
          <TextReveal
            revealPosition={'start 0.5'}
            revealSpeed={'end start'}
            textId={PARAGRAPH}
          />
          <Step />
        </div>
        <StickyAboutMe />
        <div className='flex min-h-[800px] w-full flex-col justify-between pt-20 md:min-h-[1000px]'>
          <TextReveal
            revealPosition={'start 0.5'}
            revealSpeed={'end start'}
            textId={READY_TO_CONTRIBUTE}
          />
          <Direct
            option1='Projects'
            href1='/projects'
            option2='Contact'
            href2='/contact'
            message1='Check out my projects'
            message2='Get in touch'
          />
          <ReachedBottom />
        </div>
      </div>
    </>
  );
}

export async function generateMetadata() {
  const url = '/';

  return {
    title: sharedTitle,
    description: sharedDescription,
    openGraph: {
      title: sharedTitle,
      description: sharedDescription,
      url: url,
    },
    alternates: {
      canonical: url,
    },
    twitter: {
      card: 'summary_large_image',
      site: `@kayaayberkk`,
      creator: `@kayaayberkk`,
      description: sharedDescription,
      title: sharedTitle,
      images: ['https://aybrk.dev/opengraph-image?47857960366f59b2'],
    },
    icons: {
      icon: '/icon.png',
    },
  };
}
