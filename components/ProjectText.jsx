'use client';

function ProjectText({ project }) {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl font-bold'>{project.title}</h1>
      <p className='text-sm font-light tracking-tight text-stone-500 dark:text-stone-400/70 text-balance'>
        {project.description}
      </p>
    </div>
  );
}

export default ProjectText;
