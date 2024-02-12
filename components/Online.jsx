import { LINKS } from '@/lib/constants';
import { NavigationLink } from './NavigationLink';

function Online({ handleDrawerClose }) {
  return (
    <div className='flex flex-col text-sm'>
      <span className='px-2 text-xs font-normal leading-relaxed text-card dark:text-card'>
        Online
      </span>
      <div className='flex flex-col gap-1'>
        {Object.values(LINKS).map((link) => {
          return (
            <NavigationLink
              key={link.url}
              href={link.url}
              label={link.title}
              icon={link.icon}
              title={link.title}
              handleDrawerClose={handleDrawerClose}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Online;
