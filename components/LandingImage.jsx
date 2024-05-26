import Image from 'next/image';
import MeHomeImage from '@/public/meImages/IMG_6045.JPG';

function LandingImage() {
  return (
    <div className='col-span-1 hidden h-[260px] w-1/2 animate-slide overflow-hidden transition-all ease-in md:block md:h-[350px] md:rounded-lg'>
      <Image
        src={MeHomeImage}
        alt='Ayberk Kaya'
        priority
        quality={100}
        objectFit='cover'
        className='-translate-y-20 animate-reveal md:-translate-y-10'
      />
    </div>
  );
}

export default LandingImage;
