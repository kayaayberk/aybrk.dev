import { ArrowDown } from 'lucide-react';

function ShowScroll() {
  return (
    <div className='mx-auto flex flex-col animate-bounce  items-center gap-2 mb-20'>
      <ArrowDown size={32} strokeWidth={2} className='mt-10  dark:text-[#A395F6]' />
      <span className='text-md font-medium dark:text-[#A395F6]'>Scroll</span>
    </div>
  );
}

export default ShowScroll;
