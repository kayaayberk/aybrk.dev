import Image from 'next/image';
import MeHomeImage from '@/public/meImages/IMG_6045.JPG';

function LandingImage() {
  return (
    <div
      className='h-80 w-full overflow-hidden rounded-t-2xl
          transition-all duration-150 ease-in 
          md:h-auto md:rounded-2xl md:hover:scale-101'
    >
      <Image
        src={MeHomeImage}
        alt='Ayberk Kaya'
        priority={true}
        quality={100}
        objectFit='cover'
        className='w-[550px] -translate-y-20 md:w-full md:translate-y-0'
      />
    </div>
  );
}

export default LandingImage;
