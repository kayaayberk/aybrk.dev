import Image from 'next/image';
import MeHomeImage from '@/public/meImages/IMG_6045.JPG';

function LandingImage() {
  return (
    <div
      className='col-span-1 h-[260px] w-full overflow-hidden rounded-t-2xl shadow-xl transition-all
          duration-150 ease-in md:hover:scale-101 md:h-[395px] md:rounded-2xl'
    >
      <Image
        src={MeHomeImage}
        alt='Ayberk Kaya'
        priority={true}
        className='-translate-y-20 md:-translate-y-10'
        quality={100}
        objectFit='cover'
      />
    </div>
  );
}

export default LandingImage;
