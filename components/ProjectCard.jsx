'use client';

import Card from './Card';
import { PROJECTS } from '@/lib/constants';
import ProjectCardContent from './ProjectCardContent';

function ProjectCard() {
  const classId = 'tech-stack';
  return (
    <div className='flex flex-col gap-32'>
      {PROJECTS.map((project) => {
        return (
          <Card key={project.title} classId={classId}>
            <ProjectCardContent project={project} />
          </Card>
        );
      })}
    </div>
  );
}

export default ProjectCard;
