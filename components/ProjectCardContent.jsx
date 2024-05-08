import Image from 'next/image';
import TechBadge from './TechBadge';
import ProjectText from './ProjectText';
import ProjectLinks from './ProjectLinks';
import { usePathname } from 'next/navigation';

function ProjectCardContent({ project, carousel, isHovered }) {
  const pathname = usePathname();
  return (
    <div
      className={`flex flex-col justify-between ${carousel ? 'flex-col gap-2' : 'gap-5 md:flex-row'}`}
    >
      <div
        className={`f-full flex flex-col gap-3 ${carousel ? 'w-full' : 'md:w-1/2'}`}
      >
        <div className='overflow-hidden rounded-lg shadow-lg shadow-black/20 md:w-full'>
          <Image
            src={project.image}
            alt='project image'
            priority
            className='animate-reveal dark:brightness-75'
          />
        </div>
        <div className={`${carousel ? 'hidden' : 'flex flex-wrap gap-1.5'}`}>
          {project.builtWith.map((tech, index) => {
            return (
              <TechBadge key={index}>
                <span className='text-xs font-extralight text-stone-500 dark:text-stone-400'>
                  {tech}
                </span>
              </TechBadge>
            );
          })}
        </div>
      </div>

      <div
        className={`f-full flex flex-col gap-4 ${carousel ? 'w-full' : 'md:w-1/2'}`}
      >
        <ProjectText project={project} isHovered={isHovered} />
        {pathname === '/projects' && (
          <>
            <ProjectLinks project={project} />
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectCardContent;
