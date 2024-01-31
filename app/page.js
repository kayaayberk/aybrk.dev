// Component Imports
import Step from '@/components/Step';
import Card from '@/components/Card';
import Direct from '@/components/Direct';
import BgShape from '@/components/BgShape';
import TechStack from '@/components/TechStack';
import TextReveal from '@/components/TextReveal';
import ShowScroll from '@/components/ShowScroll';
import Description from '@/components/Description';
import LandingImage from '@/components/LandingImage';
import StickyAboutMe from '@/components/StickyAboutMe';
import ReachedBottom from '@/components/ReachedBottom';
import { PARAGRAPH, READY_TO_CONTRIBUTE } from '@/lib/constants';

export default function Home() {
  return (
    <>
      <BgShape />
      <div className='container z-50 mx-auto flex min-h-max flex-col items-start gap-20 pt-28 md:max-w-4xl md:pt-28'>
        <div className='flex flex-col items-center gap-10 rounded-2xl md:grid md:grid-cols-2 md:shadow-none'>
          <div className='w-full gap-10 md:col-span-2 md:grid md:grid-cols-2'>
            <LandingImage />
            <Card hoverActive>
              <Description />
            </Card>
          </div>
          <div className='col-span-2'>
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
