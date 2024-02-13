import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Monitor, Moon, Sun } from 'lucide-react';

function DarkModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='hover:bg-transparent md:flex focus-visible:ring-0'>
        <Button variant='ghost' size='icon' className='hover:scale-110 transition-all duration-500 ease-in-out focus-visible:ring-0'>
          {theme === 'light' && (
            <Sun className='size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          )}
          {theme === 'dark' && (
            <Moon className='absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          )}
          {theme === 'system' && (
            <Monitor className='size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-0' />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='bg-white/70 filter backdrop-blur-3xl dark:border-zinc-800 dark:bg-black/10'>
        <DropdownMenuItem
          onClick={() => setTheme('light')}
          className='hover:bg-gray-200 dark:hover:bg-gray-500/20'
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('dark')}
          className='hover:bg-gray-200 dark:hover:bg-gray-500/20'
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('system')}
          className='hover:bg-gray-200 dark:hover:bg-gray-500/20'
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DarkModeToggle;
