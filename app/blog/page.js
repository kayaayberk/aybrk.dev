import Link from 'next/link';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { sharedTitle, sharedDescription } from '@/app/shared-metadata';

function Blog() {
  return (
    <div className='container mx-auto flex h-full max-w-xl flex-col items-start gap-10 pb-24 pt-10 md:max-w-4xl'>
      <div className='flex size-full items-center justify-center gap-6'>
        <h1 className='text-2xl font-medium'>:)</h1>
        <div className='h-20 border-[0.01rem] border-r-muted-foreground/70'></div>
        <div className='flex flex-col  items-center justify-start gap-3'>
          <p className='flex items-center justify-center text-sm font-medium'>
            Nothing to see here yet.
          </p>
          <span className='flex flex-col items-center gap-3 text-sm font-medium'>
            <Link href={'/'} prefetch={true}>
              <Button
                variant='outline'
                className='gap-1 border-[0.01rem] border-muted-foreground/50 bg-transparent hover:bg-muted-foreground/20'
              >
                <Home size={16} /> Home
              </Button>
            </Link>
          </span>
        </div>
      </div>
    </div>
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
      icon: 'https://aybrk.dev/favicon.ico',
    },
  };
}
