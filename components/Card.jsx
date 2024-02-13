'use client';

function Card({ children }) {
  const className = [
    'w-full flex flex-col gap-4 p-4 text-start transition-all bg-gray-300/10 dark:bg-gray-400/5 filter backdrop-blur-3xl border border-muted-foreground/10 dark:border-muted-foreground/10 shadow-xl dark:shadow-black/40 ease-in md:rounded-lg animate-slide opacity-0',
  ].join(' ');

  return <div className={className}>{children}</div>;
}

export default Card;
