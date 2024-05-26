import Link from 'next/link';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { usePathname } from 'next/navigation';

function ProjectLinks({ project }) {
  const pathname = usePathname();
  return (
    <div className='flex gap-2'>
      {project.live && (
        <Button
          asChild
          size='sm'
          variant='outline'
          className='flex border-[0.8px] bg-transparent border-muted-foreground/10 hover:bg-gray-200 dark:hover:bg-gray-500/20 gap-2'
        >
          <Link href={project.live} target='_blank'>
            <ExternalLink width={18} />
            See Live
          </Link>
        </Button>
      )}
      <Button
        asChild
        size='sm'
        variant='outline'
        className='flex border-[0.8px] bg-transparent border-muted-foreground/10 hover:bg-gray-200 dark:hover:bg-gray-500/20 gap-2'
      >
        <Link href={project.sourcecode} target='_blank'>
          <Github width={18} />
          Source Code
        </Link>
      </Button>
    </div>
  );
}

export default ProjectLinks;
