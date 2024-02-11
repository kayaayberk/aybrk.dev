'use client';

function ProjectText({ project }) {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl font-bold'>{project.title}</h1>
      <p className='text-sm font-extralight tracking-wide text-muted-foreground/80'>
        {project.description}
      </p>
    </div>
  );
}

export default ProjectText;
