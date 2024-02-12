import { PAGES } from '@/lib/constants';
import { NavigationLink } from './NavigationLink';

function Pages({ handleDrawerClose }) {
  return (
    <div className='flex flex-col gap-1'>
      {PAGES.map((page) => {
        return (
          <NavigationLink
            key={page.href}
            href={page.href}
            label={page.label}
            icon={page.icon}
            handleDrawerClose={handleDrawerClose}
            number={page.number}
          />
        );
      })}
    </div>
  );
}

export default Pages;
