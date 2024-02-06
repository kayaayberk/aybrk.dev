'use client';

function TechBadge({ children}) {
  return (
    <div className="rounded-md px-2 border border-muted-foreground/30 dark:border-muted-foreground/20">
        {children}

    </div>
  )
}

export default TechBadge