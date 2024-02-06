'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

function ProjectLinks({ project }) {
  return (
    <div className='flex gap-2 md:flex-col'>
      <Link href={project.sourcecode} target='_blank'>
        <Button
          variant='outline'
          className='flex gap-2 border-muted-foreground/30 bg-transparent hover:bg-gray-100 dark:border-muted-foreground/20 dark:hover:bg-gray-500/25'
        >
          <Github width={18} />
          Source Code
        </Button>
      </Link>
      {project.live && (
        <Link href={project.live} target='_blank'>
          <Button
            variant='outline'
            className='flex gap-2 border-muted-foreground/30 bg-transparent hover:bg-gray-100 dark:border-muted-foreground/20 dark:hover:bg-gray-500/25'
          >
            <ExternalLink width={18} />
            See Live
          </Button>
        </Link>
      )}
    </div>
  );
}

export default ProjectLinks;
