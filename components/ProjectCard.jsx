'use client';

import Card from './Card';
import Link from 'next/link';
import Image from 'next/image';
import TechBadge from './TechBadge';
import { Button } from './ui/button';
import { PROJECTS } from '@/lib/constants';
import { ExternalLink, Github } from 'lucide-react';

function ProjectCard() {
  const classId = 'tech-stack';
  return (
    <div className='flex flex-col gap-32'>
      {PROJECTS.map((project) => {
        return (
          <Card key={project.title} classId={classId}>
            <div className='flex flex-col justify-between gap-5 md:flex-row'>
              <div className='f-full flex flex-col gap-4 md:w-1/2'>
                <div className='rounded-xl border border-gray-300 p-3 dark:border-zinc-700'>
                  <Image
                    src={project.image}
                    alt='project image'
                    priority={true}
                    className='rounded-xl shadow-lg shadow-black/60'
                  />
                </div>
                <div className='flex flex-wrap gap-3'>
                  {project.builtWith.map((tech, index) => {
                    return (
                      <TechBadge key={index}>
                        <span className='text-xs font-extralight'>{tech}</span>
                      </TechBadge>
                    );
                  })}
                </div>
              </div>

              <div className='f-full flex flex-col gap-4 md:w-1/2'>
                <div className='flex flex-col gap-4'>
                  <h1 className='text-2xl font-bold'>{project.title}</h1>
                  <p className='text-sm font-extralight tracking-wide'>
                    {project.description}
                  </p>
                </div>
                <div className='flex gap-2 md:flex-col'>
                  <Link 
                  href={project.sourcecode}
                  target='_blank'
                  >
                    <Button
                      variant='outline'
                      className='flex gap-2 border-gray-300 bg-transparent hover:bg-gray-100 dark:border-zinc-800 dark:hover:bg-gray-500/25'
                    >
                      <Github width={18} />
                      Source Code
                    </Button>
                  </Link>
                  {project.live && (
                    <Link 
                    href={project.live}
                    target='_blank'
                    >
                      <Button
                        variant='outline'
                        className='flex gap-2 border-gray-300 bg-transparent hover:bg-gray-100 dark:border-zinc-800 dark:hover:bg-gray-500/25'
                      >
                        <ExternalLink width={18} />
                        See Live
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default ProjectCard;
