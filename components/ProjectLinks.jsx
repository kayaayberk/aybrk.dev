import Link from 'next/link';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { usePathname } from 'next/navigation';

function ProjectLinks({ project }) {
  const pathname = usePathname();
  return (
    <div className='flex gap-2'>
      {project.live && (
        <Link href={project.live} target='_blank'>
          <Button
            size={pathname === '/' ? 'sm' : ''}
            className='flex gap-2 border-muted-foreground/30 dark:border-muted-foreground/20'
          >
            <ExternalLink width={18} />
            See Live
          </Button>
        </Link>
      )}
      <Link href={project.sourcecode} target='_blank'>
        <Button
          size={pathname === '/' ? 'sm' : ''}
          className='flex gap-2 border-muted-foreground/30 dark:border-muted-foreground/20'
        >
          <Github width={18} />
          Source Code
        </Button>
      </Link>
    </div>
  );
}

export default ProjectLinks;
