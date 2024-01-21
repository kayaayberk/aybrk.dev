import { ArrowDown } from 'lucide-react';

function ShowScroll() {
  return (
    <div className='mx-auto flex flex-col items-center gap-2 mb-32'>
      <ArrowDown size={32} className='mt-10 animate-bounce' />
      <span className='text-md'>Scroll</span>
    </div>
  );
}

export default ShowScroll;
