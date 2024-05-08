import { ArrowUpRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

function ProjectText({ project, isHovered }) {
  const pathname = usePathname();
  return (
    <div className='flex flex-col gap-1'>
      <div className='flex items-center'>
        <h1 className='text-2xl font-bold'>{project.title}</h1>
        <ArrowUpRight
          className={`${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
      <p
        className={`${pathname === '/' ? 'text-xs' : 'text-sm'} text-balance font-light tracking-tight text-stone-500 dark:text-stone-400/70`}
      >
        {project.description}
      </p>
    </div>
  );
}

export default ProjectText;
