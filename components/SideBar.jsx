'use client';

function SideBar({ children }) {
  return (
    <div className="hidden sticky left-0 lg:w-64 xl:w-[340px] lg:flex lg:flex-col border-r border-r-muted-foreground/25 dark:bg-spice">
      {children}
    </div>
  );
}

export default SideBar;
