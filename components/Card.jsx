'use client';

function Card({ children, classId, hoverActive }) {
  const className = [
    'w-full flex flex-col gap-4 p-4 text-start transition-all shadow-xl duration-150 ease-in md:rounded-xl bg-spice dark:bg-gradient-45deg dark:from-spice dark:to-spiceLighter',
    classId === 'tech-stack' ? 'rounded-xl' : 'rounded-b-xl',
    hoverActive ? 'hover:scale-101' : '',
  ].join(' ');

  const className1 = [
    'self-start  md:rounded-xl pt-[0.5px] pl-[0.5px] bg-gradient-45deg border dark:border-none dark:from-transparent dark:to-gray-600',
    !classId ? 'rounded-b-xl md:rounded-xl' : 'rounded-xl',
  ].join(' ');

  return (
    <div className={className1}>
      <div className={`${classId} ${className}`}>{children}</div>
    </div>
  );
}

export default Card;
