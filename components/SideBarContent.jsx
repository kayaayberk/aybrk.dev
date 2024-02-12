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
        {/* <div
          onClick={handleClick}
          className='flex w-full animate-wiggle cursor-pointer items-center justify-between rounded-lg border border-muted-foreground/30 px-4 py-2'
          // className={`${
          //   effect && 'animate-wiggle'
          // }flex w-full animate-wiggle cursor-pointer items-center justify-between rounded-lg border border-muted-foreground/30 px-4 py-2 hover:drop-shadow-glow`}
          // onAnimationEnd={() => setEffect(false)}
        >
          <span className='flex items-center justify-between w-full'>
            Enjoying your time here?
            <span>
              <Heart strokeWidth={1} size={24} />
            </span>
          </span>
        </div> */}
      </div>
    </div>
  );
}

export default SideBarContent;
