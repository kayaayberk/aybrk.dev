import Link from 'next/link';
import { Home } from 'lucide-react';
import { Button } from './ui/button';

export function NotFound() {
  return (
      <div className='flex size-full items-center justify-center gap-6'>
        <h1 className='text-2xl font-medium'>404</h1>
        <div className='h-20 border-[0.01rem] border-r-muted-foreground/70'></div>
        <div className='flex flex-col  items-center justify-start gap-3'>
          <p className='flex items-center justify-center text-sm font-medium'>
            This page could not be found.
          </p>
          <span className='flex flex-col items-center gap-3 text-sm font-medium'>
            <Link href={'/'} prefetch={true}>
              <Button
                variant='outline'
                className='gap-1 border-[0.01rem] border-muted-foreground/50 bg-transparent hover:bg-muted-foreground/20'
              >
                <Home size={16} /> Home
              </Button>
            </Link>
          </span>
        </div>
      </div>
  );
}
