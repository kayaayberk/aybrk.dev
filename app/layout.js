import './globals.css';
import Providers from './providers';
import SideBar from '@/components/SideBar';
import { GeistSans } from 'geist/font/sans';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/react';
import MobileHeader from '@/components/MobileHeader';
import SideBarContent from '@/components/SideBarContent';
import ChildrenRenderer from '@/components/ChildrenRenderer';

export const metadata = {
  title: 'aybrk.dev',
  description: 'Built by Ayberk Kaya',
};

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
