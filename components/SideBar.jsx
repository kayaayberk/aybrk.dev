'use client';

import BgShape from './BgShape';

function SideBar({ children }) {
  return (
    <div className='sticky left-0 hidden overflow-scroll border-r border-r-muted-foreground/10 bg-gray-300/10 dark:bg-gray-500/10 filter backdrop-blur-3xl lg:flex lg:w-[270px] lg:flex-col xl:w-72'>
      {/* <BgShape /> */}
      {children}
    </div>
  );
}

export default SideBar;
