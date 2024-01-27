'use client';
import { Drawer } from 'vaul';
import { Button } from './ui/button';
import { OptionIcon } from 'lucide-react';
import SideBarContent from './SideBarContent';
import { useState } from 'react';

function DrawerMenu() {
  const [open, setOpen] = useState(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer.Root open={open} onOpenChange={setOpen}>
      <Drawer.Trigger asChild>
        <Button variant='ghost' size='icon'>
          <OptionIcon size={16} />
        </Button>
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className='fixed inset-0 bg-black/40' />
        <Drawer.Content className='fixed bottom-0 left-0 right-0 mt-24 flex h-[80%] flex-col rounded-t-xl border bg-spice outline-none dark:border-zinc-800'>
          <div className='flex-1 overflow-y-auto rounded-t-xl bg-white p-4 dark:bg-spice'>
            <div className='mx-auto mb-8 h-1.5 w-12 shrink-0 rounded-full border-none bg-black dark:bg-white' />
            <Drawer.Close asChild />
            <SideBarContent handleDrawerClose={handleDrawerClose} setOpen={setOpen} />
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export default DrawerMenu;
