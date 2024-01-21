'use client';

import DarkModeToggle from './DarkModeToggle';
import DrawerMenu from './DrawerMenu';
import { usePathname } from 'next/navigation';

function MobileHeader() {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <header className='bg-spice dark:bg-spice fixed top-0 z-50 w-full border-b border-gray-300 p-2 dark:border-gray-800 lg:hidden pl-4 pr-4'>
      <div className='flex w-full items-center justify-between'>
        <div className='flex items-center gap-2'>
          <DrawerMenu />
          <span>
            {pathname === '/' ? (
              <h1 className='text-md font-semibold'>Home</h1>
            ) : (
              pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)
            )}
          </span>
        </div>
        <DarkModeToggle />
      </div>
    </header>
  );
}

export default MobileHeader;
