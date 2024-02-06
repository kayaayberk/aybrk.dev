import PageHeader from '@/components/PageHeader';
import { sharedTitle, sharedDescription } from '@/app/shared-metadata';

function Blog() {
  return (
    <div className='container mx-auto flex h-full max-w-xl flex-col items-start gap-10 pb-24 pt-28 md:max-w-4xl md:pt-24'>
      <PageHeader />
    </div>
  );
}

export default Blog;

export async function generateMetadata() {
  const url = '/blog';

  return {
    title: 'Blog',
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
