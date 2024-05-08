import Image from 'next/image';
import { Suspense } from 'react';
import { TasteImageSkeleton } from './ImageSkeleton';

function TasteImageCard({ url }) {
  return (
    <div className='relative size-full overflow-hidden rounded-xl transition-all duration-500'>
      <Suspense fallback={<TasteImageSkeleton />}>
        <Image
          src={url}
          width={500}
          height={500}
          priority
          alt='Taste Image'
          className='size-full animate-reveal transition-all duration-500 ease-in-out hover:scale-110'
        />
      </Suspense>
    </div>
  );
}

export default TasteImageCard;
