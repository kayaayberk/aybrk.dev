import { getPostTitle } from '@/lib/contentful';
import PageHeader from '@/components/PageHeader';
import { sharedTitle, sharedDescription } from '@/app/shared-metadata';

async function fetchData() {
  const data = await getPostTitle();
  return data;
}

async function Blog() {
  const result = await fetchData();
  const { title, slug } = result[0];
  console.log(title, slug);

  return (
    <>
      <PageHeader />
      <div className='container mx-auto flex h-full max-w-xl flex-col items-start gap-10 pb-24 pt-10 md:max-w-4xl'>
        <p className='text-sm'>{title}</p>
      </div>
    </>
  );
}

export default Blog;

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
