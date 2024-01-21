import Image from 'next/image';
import MeHomeImage from '@/public/meImages/IMG_6045.JPG';

function LandingImage() {
  return (
    <div
      className='md:hover:scale-101 h-80 w-full overflow-hidden
          rounded-t-2xl transition-all duration-150 ease-in dark:shadow-lg 
          dark:shadow-white/10 md:h-auto md:rounded-2xl md:shadow-xl'
    >
      <Image
        src={MeHomeImage}
        alt='Ayberk Kaya'
        loading='lazy'
        objectFit='cover'
        className='w-[550px] -translate-y-20 md:w-full md:translate-y-0'
      />
    </div>
  );
}

export default LandingImage;
