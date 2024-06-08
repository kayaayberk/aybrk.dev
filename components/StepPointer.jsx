import { PlusCircle } from 'lucide-react';

function StepPointer({ index, posts }) {
  return (
    <div className='relative'>
      <div className='absolute -top-0.5 z-10'>
        <PlusCircle
          strokeWidth={1}
          className='dark:group-hover:fill-stone-700 group-hover:fill-stone-400 transition-colors duration-300 size-7 fill-black text-white dark:fill-white dark:text-black'
        />
      </div>
      <div
        className={[
          'absolute inset-x-3.5 h-full border-l-[1px] border-stone-300 dark:border-stone-400/30',
          index === posts.length - 1 && 'hidden',
        ].join(' ')}
      ></div>
    </div>
  );
}

export default StepPointer;
