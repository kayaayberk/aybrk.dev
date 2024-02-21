import PageHeader from '@/components/PageHeader';
import { getAllPostSlugs } from '@/lib/contentful';
import PageBlogPostList from '@/components/PageBlogPostList';
import { sharedTitle, sharedDescription } from '@/app/shared-metadata';

async function fetchData() {
  const allPosts = await getAllPostSlugs();
  return { allPosts };
}

export default async function Blog() {
  const { allPosts } = await fetchData();
  return (
    <>
      <PageHeader />
      <div className='container mx-auto flex h-full min-h-max flex-col items-start gap-2 pb-24 md:max-w-4xl'>
        <PageBlogPostList allPosts={allPosts} isBlogPage />
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
