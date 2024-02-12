'use client';

function Card({ children, classId }) {
  const className = [
    'w-full flex flex-col gap-4 p-4 text-start transition-all bg-gray-300/10 dark:bg-gray-400/5 filter backdrop-blur-3xl border border-muted-foreground/10 dark:border-muted-foreground/10 shadow-xl dark:shadow-black/40 ease-in md:rounded-lg animate-slide opacity-0',
    classId === 'tech-stack' ? 'rounded-xl' : 'rounded-b-gl',
    classId === 'homeCard' ? 'delay-0' : 'delay-200'
  ].join(' ');

  return <div className={`${classId} ${className}`}>{children}</div>;
}

export default Card;

// const className = [
//   'w-full flex flex-col gap-4 p-4 text-start transition-all shadow-xl duration-150 ease-in md:rounded-xl bg-spice dark:bg-gradient-45deg dark:from-spice dark:to-spiceLighter',
//   classId === 'tech-stack' ? 'rounded-xl' : 'rounded-b-xl',
//   hoverActive ? 'md:hover:scale-101' : '',
// ].join(' ');
