'use client';

function Card({ children, desc, className, carousel, isHovered, ...props }) {
  return (
    <div
      className={
        (className,
        `flex w-full animate-slide flex-col gap-4 border border-muted-foreground/10 ${desc ? 'delay-0' : 'delay-250'} rounded-lg p-4 text-start opacity-0 shadow-xl filter backdrop-blur-3xl transition-transform ease-in dark:border-muted-foreground/10`)
      }
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
