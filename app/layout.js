import SideBarContent from '@/components/SideBarContent';
import './globals.css';
import Providers from './providers';
import { GeistSans } from 'geist/font/sans';
import SideBar from '@/components/SideBar';

export const metadata = {
  title: 'aybrk.dev',
  description: 'Built by Ayberk Kaya',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="overflow-hidden">
        <Providers>
          <div className="lg:flex">
            <SideBar className="relative top-0 hidden lg:flex">
              <SideBarContent />
            </SideBar>
            <div className="flex flex-1 overflow-y-auto h-screen mx-auto">
              {children}
              {/* This is where the page content will be rendered */}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
