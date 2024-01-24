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
// Constant Imports
import { PARAGRAPH, READY_TO_CONTRIBUTE } from '@/lib/constants';

export default function Home() {
  return (
    <div className='container mx-auto flex h-full max-w-xl flex-col items-start gap-10 pt-28 md:max-w-4xl md:pt-24'>
      <div className='flex flex-col items-center rounded-2xl md:grid md:grid-cols-2 gap-10 md:shadow-none'>
        <div className='w-full md:grid md:grid-cols-2 gap-10 md:col-span-2'>
        <LandingImage />

        <Card hoverActive>
          <Description />
        </Card>
        </div>
        <div className='col-span-2'>
          <TechStack />
        </div>
      </div>

      <ShowScroll />
      <div className='flex flex-col'>
        <TextReveal
          revealPosition={'start 0.5'}
          revealSpeed={'end start'}
          textId={PARAGRAPH}
        />
        <Step />
      </div>
      <StickyAboutMe />
      <div className='flex min-h-[700px] w-full flex-col justify-between pb-24 pt-20 md:min-h-[1000px] md:pb-7'>
        <TextReveal
          revealPosition={'start 0.5'}
          revealSpeed={'end start'}
          textId={READY_TO_CONTRIBUTE}
        />
        <Direct />
        <ReachedBottom />
      </div>
    </div>
  );
}
