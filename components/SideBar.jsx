'use client';

import BgShape from './BgShape';

function SideBar({ children }) {
  return (
    <div className='sticky left-0 hidden overflow-scroll border-r border-r-muted-foreground/10 lg:flex lg:w-[270px] lg:flex-col xl:w-72'>
      {/* <BgShape /> */}
      {children}
    </div>
  );
}

export default SideBar;
