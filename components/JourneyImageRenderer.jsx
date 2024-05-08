'use client';

import Image from 'next/image';
import { JourneyImageSkeleton } from './ImageSkeleton';
import { Suspense } from 'react';

function JourneyImageRenderer({ post }) {
  return (
    <div className='size-full overflow-hidden rounded-xl shadow-lg shadow-black/30'>
      <Suspense fallback={<JourneyImageSkeleton />}>
        <Image
          src={post.featuredImage ? post.featuredImage.url : ''}
          alt={post.subtitle + 'image'}
          width={700}
          height={400}
          quality={100}
          priority
          objectFit='cover'
          className='inset-0 w-full animate-reveal rounded-xl transition-all duration-500 ease-in-out hover:scale-105'
        />
      </Suspense>
    </div>
  );
}

export default JourneyImageRenderer;
