'use client';
import { Drawer } from 'vaul';
import { Button } from './ui/button';
import { OptionIcon } from 'lucide-react';
import SideBarContent from './SideBarContent';

function DrawerMenu() {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button variant='ghost' size='icon'>
          <OptionIcon size={16} />
        </Button>
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className='fixed inset-0 bg-black/80' />
        <Drawer.Content className='bg-spice fixed bottom-0 left-0 right-0 mt-24 flex h-[80%] flex-col rounded-t-xl border outline-none'>
          <div className='dark:bg-spice flex-1 overflow-y-auto rounded-t-xl bg-white p-4'>
            <div className='mx-auto mb-8 h-1.5 w-12 shrink-0 rounded-full border-none bg-white' />
            <SideBarContent />
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export default DrawerMenu;
