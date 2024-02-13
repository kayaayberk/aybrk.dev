import Link from 'next/link';
import { INFO } from '@/lib/constants';
import { ArrowUpRight } from 'lucide-react';

function Info() {
  return (
    <div className='flex flex-col gap-2 text-xs'>
      <span className='px-2 text-xs font-normal leading-relaxed text-card dark:text-card'>
        Info
      </span>
      <div className='flex flex-col gap-1'>
        {INFO.map((link) => {
          return !link.mailTo ? (
            <span key={link.label} className='flex items-center gap-3 p-2 text-sm font-medium tracking-normal dark:text-white/80'>
              {link.icon}
              <span className='tracking-normal font-normal'>{link.label}</span>
            </span>
          ) : (
            <Link
              key={link.label}
              className='flex items-center justify-between rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-500/20'
              href='mailto:kayaayberk98@gmail.com'
            >
              <span className='hover flex items-center gap-3 text-sm font-normal'>
                {link.icon}
                <span className='tracking-normal font-normal dark:text-white/80'>
                  {link.label}
                </span>
              </span>
              <span className='dark:text-white/80'>
                {<ArrowUpRight size={16} className='p-0' />}
              </span>
            </Link>
          );
        })}
      </div>

      {/* <span className='inline-flex items-center p-2 text-sm leading-relaxed'>
            <span className='mr-2'>
              <Heart size={16} />
            </span>
            by <span className='ml-1 font-semibold'>Ayberk Kaya</span>, with
            love
          </span> */}
    </div>
  );
}

export default Info;
