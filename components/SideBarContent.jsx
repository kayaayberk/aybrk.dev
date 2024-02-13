'use client';

import Info from './Info';
import Badge from './Badge';
import Pages from './Pages';
import Online from './Online';
import BuiltWith from './BuiltWith';

function SideBarContent({ handleDrawerClose }) {
  return (
    <div className='flex h-screen w-full flex-col gap-4 px-1 py-3  text-sm '>
      <div className='flex flex-1 flex-col justify-start gap-4 px-2'>
        <Badge />
        <Pages handleDrawerClose={handleDrawerClose} />
        <Online handleDrawerClose={handleDrawerClose} />
        <Info />
        <BuiltWith handleDrawerClose={handleDrawerClose} />

        {/* Add heart counter */}
      </div>
    </div>
  );
}

export default SideBarContent;
