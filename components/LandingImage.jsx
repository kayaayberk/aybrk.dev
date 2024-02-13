import Image from 'next/image';
import MeHomeImage from '@/public/meImages/IMG_6045.JPG';

function LandingImage() {
  return (
    <div
      className='hidden md:block col-span-1 h-[260px] w-full overflow-hidden transition-all
          ease-in md:h-[350px] md:rounded-lg shadow-xl dark:shadow-black/40 md:hover:scale-101 animate-slide'
    >
      <Image
        src={MeHomeImage}
        alt='Ayberk Kaya'
        priority
        quality={100}
        objectFit='cover'
        className='-translate-y-20 md:-translate-y-10 animate-reveal dark:brightness-75'
      />
    </div>
  );
}

export default LandingImage;
