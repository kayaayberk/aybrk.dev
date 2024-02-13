'use client';

function Card({ children }) {
  return (
    <div className='flex w-full animate-slide flex-col gap-4 border border-muted-foreground/10 bg-gray-300/10 p-4 text-start opacity-0 shadow-xl filter backdrop-blur-3xl transition-all ease-in dark:border-muted-foreground/10 dark:bg-gray-400/5 dark:shadow-black/40 rounded-lg delay-250'>
      {children}
    </div>
  );
}

export default Card;
