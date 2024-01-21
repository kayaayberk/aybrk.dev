import SideBarContent from '@/components/SideBarContent';
import './globals.css';
import Providers from './providers';
import { GeistSans } from 'geist/font/sans';
import SideBar from '@/components/SideBar';
import ChildrenRenderer from '@/components/ChildrenRenderer';
import DrawerMenu from '@/components/DrawerMenu';
import MobileHeader from '@/components/MobileHeader';

export const metadata = {
  title: 'aybrk.dev',
  description: 'Built by Ayberk Kaya',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={GeistSans.className}>
      <body className='overflow-hidden lg:flex bg-spice'>
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
