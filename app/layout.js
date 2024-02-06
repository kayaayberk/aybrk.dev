import './globals.css';
import Providers from './providers';
import SideBar from '@/components/SideBar';
import { GeistSans } from 'geist/font/sans';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/react';
import MobileHeader from '@/components/MobileHeader';
import SideBarContent from '@/components/SideBarContent';
import ChildrenRenderer from '@/components/ChildrenRenderer';
import { sharedTitle, sharedDescription } from '@/app/shared-metadata';

// export const metadata = {
//   title: {
//     default: 'Ayberk Kaya',
//     template: '%s - Ayberk Kaya',
//   },
//   description:
//     'Software Developer, Designer, Tech Enthusiast, based in Warsaw, Poland',
// };

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={GeistSans.className} suppressHydrationWarning>
      <body
        className='w-full overflow-hidden bg-spice lg:flex'
        suppressHydrationWarning
      >
        <Providers>
          <main className='flex-1 lg:flex'>
            <SideBar className='relative lg:flex'>
              <SideBarContent />
            </SideBar>
            <MobileHeader />
            <ChildrenRenderer>
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

export const metadata = {
  metadataBase: new URL('https://aybrk.dev'),
  robots: {
    index: true,
    follow: true,
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
};
