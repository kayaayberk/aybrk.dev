// Component Imports
import Providers from './providers';
import SideBar from '@/components/SideBar';
import MobileHeader from '@/components/MobileHeader';
import SideBarContent from '@/components/SideBarContent';
import ChildrenRenderer from '@/components/ChildrenRenderer';
// Style Imports
import './globals.css';
import { GeistSans } from 'geist/font/sans';

export const metadata = {
  title: 'aybrk.dev',
  description: 'Built by Ayberk Kaya',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={GeistSans.className}>
      <body className='bg-spice overflow-hidden lg:flex'>
        <Providers>
          <main className='min-h-screen flex-1 lg:flex'>
            <SideBar className='relative hidden lg:flex'>
              <SideBarContent />
            </SideBar>
            <MobileHeader />
            <ChildrenRenderer>{children}</ChildrenRenderer>
          </main>
        </Providers>
      </body>
    </html>
  );
}
