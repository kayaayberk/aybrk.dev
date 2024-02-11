'use client';

import Image from 'next/image';

function JourneyImageRenderer({ post }) {
  return (
    <div className='size-full overflow-hidden rounded-xl shadow-lg shadow-black/30'>
      <Image
        src={post.featuredImage ? post.featuredImage.url : ''}
        alt={post.subtitle + 'image'}
        width={700}
        height={400}
        quality={100}
        priority
        objectFit='cover'
        className='inset-0 w-full rounded-xl transition-all duration-500 ease-in-out hover:scale-105 animate-reveal'
      />
    </div>
  );
}

export default JourneyImageRenderer;
