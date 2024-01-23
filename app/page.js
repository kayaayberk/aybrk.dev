// Component Imports
import Step from '@/components/Step';
import Card from '@/components/Card';
import TechStack from '@/components/TechStack';
import TextReveal from '@/components/TextReveal';
import ShowScroll from '@/components/ShowScroll';
import Description from '@/components/Description';
import LandingImage from '@/components/LandingImage';
import StickyAboutMe from '@/components/StickyAboutMe';
// Constant Imports
import { PARAGRAPH, STICKY_ABOUT_ME } from '@/lib/constants';

export default function Home() {
  return (
    <div className='container mx-auto flex h-full max-w-xl flex-col items-start gap-10 pt-32 md:max-w-4xl md:pt-24'>
      <div className='flex flex-col items-center rounded-2xl md:grid md:grid-cols-2 md:items-start md:gap-10 md:shadow-none'>
        
        <LandingImage />

        <div className='grid grid-rows-2 gap-10'>
          <Card>
            <Description />
          </Card>
          <TechStack />
        </div>

      </div>
      <ShowScroll />

      <div className='flex flex-col gap-12'>
        <TextReveal
          revealPosition={'start 0.5'}
          revealSpeed={'end start'}
          textId={PARAGRAPH}
        />
        <Step />
      </div>

      <div className='h-screen w-full'>
        <StickyAboutMe />
        <div className='h-screen w-full'></div>
        <div className='h-screen w-full'></div>
      </div>

    </div>
  );
}
