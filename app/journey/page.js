import Direct from '@/components/Direct';
import JourneyCard from '@/components/JourneyCard';
import { getJourneyContent } from '@/lib/contentful';
import ReachedBottom from '@/components/ReachedBottom';
import { sharedTitle, sharedDescription } from '@/app/shared-metadata';

async function fetchData() {
  const data = await getJourneyContent();
  return data;
}

async function Journey() {
  const result = await fetchData();
  return (
    <div className='container z-50 mx-auto flex min-h-max flex-col items-start gap-10 pt-10 md:max-w-4xl'>
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

export async function generateMetadata() {
  const url = '/journey';

  return {
    title: 'Journey',
    sharedDescription,
    openGraph: {
      sharedTitle,
      sharedDescription,
      url: url,
    },
    alternates: {
      canonical: url,
    },
  };
}
