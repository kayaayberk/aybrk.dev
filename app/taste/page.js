import Direct from '@/components/Direct';
import PageHeader from '@/components/PageHeader';
import TasteImages from '@/components/TasteImages';
import ReachedBottom from '@/components/ReachedBottom';
import { getTasteFeedContent } from '@/lib/contentful';
import { sharedTitle, sharedDescription } from '@/app/shared-metadata';

async function fetchData() {
  const data = await getTasteFeedContent();
  return data;
}

async function Taste() {
  const result = await fetchData();

  return (
    <>
      <PageHeader />
      <div className='container z-50 mx-auto flex min-h-max flex-col items-start gap-20 pt-10 md:max-w-4xl'>
        <div className='size-full'>
          <TasteImages result={result} />
        </div>
        <div className='flex min-h-[500px] w-full flex-col justify-between pt-20'>
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

export default Taste;

export async function generateMetadata() {
  const url = '/taste';

  return {
    title: 'Taste',
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
      images: ['https://aybrk.dev/taste/opengraph-image?47857960366f59b2'],
    },
    icons: {
      icon: '/favicon.png',
    },
  };
}
