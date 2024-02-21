import './globals.css';
import Providers from './providers';
import BgShape from '@/components/BgShape';
import SideBar from '@/components/SideBar';
import { GeistSans } from 'geist/font/sans';
// import PageHeader from '@/components/PageHeader';
import { Toaster } from '@/components/ui/toaster';
import { getAllPostSlugs } from '@/lib/contentful';
import { Analytics } from '@vercel/analytics/react';
import MobileHeader from '@/components/MobileHeader';
import SideBarContent from '@/components/SideBarContent';
import ChildrenRenderer from '@/components/ChildrenRenderer';
import { sharedTitle, sharedDescription } from '@/app/shared-metadata';
import PostList from '@/components/PostList';

export const metadata = {
  metadataBase: new URL('https://aybrk.dev'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  title: {
    template: `%s — ${sharedTitle}`,
    default: sharedTitle,
  },
  description: sharedDescription,
  openGraph: {
    title: {
      template: `%s — ${sharedTitle}`,
      default: sharedTitle,
    },
    description: sharedDescription,
    alt: sharedTitle,
    type: 'website',
    url: '/',
    siteName: sharedTitle,
    locale: 'en_IE',
  },
  alternates: {
    canonical: '/',
  },
  twitter: {
    card: 'summary_large_image',
    site: `@kayaayberkk`,
    creator: `@kayaayberkk`,
    description: sharedDescription,
    title: sharedTitle,
    images: ['https://aybrk.dev/opengraph-image?47857960366f59b2'],
  },
  icons: {
    icon: '/icon.png',
  },
};

async function fetchData() {
  const allPosts = await getAllPostSlugs();
  return { allPosts };
}

export default async function RootLayout({ children }) {
  const { allPosts } = await fetchData();

  return (
    <html lang='en' className={GeistSans.className} suppressHydrationWarning>
      <body
        className='w-full overflow-hidden bg-spice lg:flex'
        suppressHydrationWarning
      >
        <Providers>
          <main className='flex-1 lg:flex'>
            <SideBar className='relative lg:flex'>
              <SideBarContent allPosts={allPosts} />
            </SideBar>
            <PostList allPosts={allPosts} />
            <MobileHeader allPosts={allPosts} />
            <ChildrenRenderer>
              {/* <PageHeader /> */}
              <BgShape />
              {children}
              <Analytics />
            </ChildrenRenderer>
            <Toaster />
          </main>
        </Providers>
      </body>
    </html>
  );
}
