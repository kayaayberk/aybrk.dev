import Image from 'next/image';
import MeHomeImage from '@/public/meImages/IMG_6045.JPG';

function LandingImage() {
  return (
    <div
      className='col-span-1 h-[260px] w-full overflow-hidden rounded-t-2xl transition-all
          ease-in md:h-[395px] md:rounded-2xl md:shadow-xl md:hover:scale-101 animate-slide'
    >
      <Image
        src={MeHomeImage}
        alt='Ayberk Kaya'
        priority
        quality={100}
        objectFit='cover'
        className='-translate-y-20 md:-translate-y-10 animate-reveal'
      />
    </div>
  );
}

export default LandingImage;
