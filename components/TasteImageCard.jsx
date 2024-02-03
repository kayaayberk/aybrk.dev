'use client';

import Image from 'next/image';

function TasteImageCard({ url, clicked }) {
  return (
    <div
      className={[
        'relative size-full overflow-hidden rounded-xl transition-all duration-500',
        clicked === url
          ? 'absolute inset-0 z-50 scale-150 transition-all duration-500 ease-in-out '
          : '',
      ].join(' ')}
    >
      <Image
        src={url}
        width={500}
        height={500}
        priority={true}
        alt='Taste Image'
        blurDataURL={url}
        placeholder='blur'
        className='size-full transition-all duration-500 ease-in-out hover:scale-110'
      />
    </div>
  );
}

export default TasteImageCard;
