'use client';

import Image from 'next/image';
import TechBadge from './TechBadge';
import ProjectText from './ProjectText';
import ProjectLinks from './ProjectLinks';

function ProjectCardContent({ project }) {
  return (
    <div className='flex flex-col justify-between gap-5 md:flex-row'>
      <div className='f-full flex flex-col gap-4 md:w-1/2'>
        <div className='overflow-hidden rounded-lg md:w-full shadow-lg shadow-black/20'>
          <Image
            src={project.image}
            alt='project image'
            priority
            className='animate-reveal dark:brightness-75'
          />
        </div>
        <div className='flex flex-wrap gap-3'>
          {project.builtWith.map((tech, index) => {
            return (
              <TechBadge key={index}>
                <span className='text-xs font-extralight text-stone-500 dark:text-stone-400'>{tech}</span>
              </TechBadge>
            );
          })}
        </div>
      </div>

      <div className='f-full flex flex-col gap-4 md:w-1/2'>
        <ProjectText project={project} />
        <ProjectLinks project={project} />
      </div>
    </div>
  );
}

export default ProjectCardContent;
