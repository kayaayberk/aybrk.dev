import Link from 'next/link';
import Image from 'next/image';
import { BUILT_WITH } from '@/lib/constants';

function BuiltWith({ handleDrawerClose }) {
  return (
    <div className='flex flex-col gap-2 text-xs'>
      <span className='px-2 font-normal leading-relaxed text-card dark:text-card'>
        Built with:
      </span>
      <div className='flex justify-between gap-3 p-2'>
        {BUILT_WITH.map((tech) => {
          return (
            <Link
              key={tech.name}
              href={tech.url}
              target='_blank'
              onClick={handleDrawerClose}
              className='flex items-center gap-1'
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={15}
                height={15}
                loading='lazy'
                className={
                  tech.invert === undefined ? 'none' : 'dark:invert dark:filter'
                }
              />
              {/* <span className='dark:text-white'>{tech.name}</span> */}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default BuiltWith;
