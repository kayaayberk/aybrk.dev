'use client';

function SideBar({ children }) {
  return (
    <div className="hidden sticky left-0 lg:w-60 xl:w-80 lg:flex lg:flex-col border-r border-gray-300 dark:border-r-zinc-800 dark:bg-spice">
      {children}
    </div>
  );
}

export default SideBar;
