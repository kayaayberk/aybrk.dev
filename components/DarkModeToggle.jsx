import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

function DarkModeToggle() {
  const [mounted, setMounted] = useState(false);
  const {  setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className='bg-spice dark:bg-spice shadow-none md:flex'
      >
        <Button variant='ghost' size='icon' className='hover:bg-gray-300 dark:hover:bg-gray-500/25'>
          <Sun className='size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Moon className='absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='dark:bg-spice dark:border-zinc-800'>
        <DropdownMenuItem onClick={() => setTheme('light')} className='hover:bg-gray-200 dark:hover:bg-gray-500/25'>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')} className='hover:bg-gray-200 dark:hover:bg-gray-500/25'>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')} className='hover:bg-gray-200 dark:hover:bg-gray-500/25'>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DarkModeToggle;
