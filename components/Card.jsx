'use client';

function Card({ children, classId, hoverActive }) {
  const className = [
    'w-full flex flex-col gap-4 p-4 text-start transition-all border border-muted-foreground/20 dark:border-muted-foreground/20 shadow-xl dark:shadow-black/40 duration-150 ease-in md:rounded-xl dark:backdrop-blur-sm dark:bg-gray-900/10',
    classId === 'tech-stack' ? 'rounded-xl' : 'rounded-b-xl',
    hoverActive ? 'md:hover:scale-101' : '',
  ].join(' ');

  return <div className={`${classId} ${className}`}>{children}</div>;
}

export default Card;

// const className = [
//   'w-full flex flex-col gap-4 p-4 text-start transition-all shadow-xl duration-150 ease-in md:rounded-xl bg-spice dark:bg-gradient-45deg dark:from-spice dark:to-spiceLighter',
//   classId === 'tech-stack' ? 'rounded-xl' : 'rounded-b-xl',
//   hoverActive ? 'md:hover:scale-101' : '',
// ].join(' ');
