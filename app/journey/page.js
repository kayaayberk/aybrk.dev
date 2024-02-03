import Direct from '@/components/Direct';
import PageHeader from '@/components/PageHeader';
import JourneyCard from '@/components/JourneyCard';
import ReachedBottom from '@/components/ReachedBottom';
import { getJourneyContent } from '@/lib/contentful';

async function fetchData() {
  const data = await getJourneyContent();
  return data;
}

async function Journey() {
  const result = await fetchData();
  console.log('data:', result);
  return (
    <div className='container z-50 mx-auto flex min-h-max flex-col items-start gap-10 pt-28 md:max-w-4xl md:pt-28'>
      <PageHeader />
      <div className='flex size-full flex-col'>
        <JourneyCard result={result} />
      </div>
      <div className='flex w-full flex-col gap-60'>
        <Direct
          option1='Projects'
          option2='Contact'
          href1='/projects'
          href2='/contact'
          message1='Check out my projects'
          message2='Get in touch'
        />
        <ReachedBottom />
      </div>
    </div>
  );
}

export default Journey;
