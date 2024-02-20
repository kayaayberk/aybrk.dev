import { sharedTitle, sharedDescription } from '@/app/shared-metadata';

export default async function Blog() {
  return (
    <>
      <div className='container mx-auto flex h-full max-w-xl flex-col items-start gap-10 pb-24 pt-10 md:max-w-4xl'>
        asdas
      </div>
    </>
  );
}

export async function generateMetadata() {
  const url = '/blog';

  return {
    title: 'Blog',
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
      images: ['https://aybrk.dev/blog/opengraph-image?47857960366f59b2'],
    },
    icons: {
      icon: '/icon.png',
    },
  };
}
