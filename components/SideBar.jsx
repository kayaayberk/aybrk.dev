'use client';

import { Scroll } from './Scroll';

function SideBar({ children }) {
  return (
    <div className="hidden lg:w-60 xl:w-72 lg:flex lg:flex-col">
      {children}
    </div>
  );
}

export default SideBar;
