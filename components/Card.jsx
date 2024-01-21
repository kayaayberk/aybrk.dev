'use client';

function Card({ children, classId }) {
  const className = [
    'flex flex-col gap-4 border p-4 text-start shadow-xl transition-all duration-150 ease-in dark:shadow-lg dark:shadow-white/10 md:rounded-2xl md:hover:scale-101',
    classId === 'tech-stack' ? 'rounded-xl' : 'rounded-b-xl',
  ].join(' ');



  return <div className={`${classId} ${className}`}>{children}</div>;
}

export default Card;
