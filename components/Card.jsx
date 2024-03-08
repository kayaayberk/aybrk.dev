'use client';

function Card({ children, desc, className, carousel, isHovered, ...props }) {
  return (
    <div
      className={`${(className, carousel ? `hidden lg:block dark:shadow-black/40 dark:hover:dark:shadow-[0_0_20px_rgba(154,_120,_255)]` : 'dark:shadow-black/40')} flex w-full animate-slide flex-col gap-4 border border-muted-foreground/10 bg-gray-300/10 ${desc ? 'delay-0' : 'delay-250'} rounded-lg p-4 text-start opacity-0 shadow-xl filter backdrop-blur-3xl transition-transform ease-in dark:border-muted-foreground/10 dark:bg-gray-400/5`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
