import Image from 'next/image';

function TasteImageCard({ url, width, height }) {
  return (
    <div className='relative overflow-hidden rounded-xl transition-all duration-500'>
      <Image
        src={url}
        width={width}
        height={height}
        priority
        loading='eager'
        quality={25}
        alt='Taste feed image'
        className='animate-reveal object-cover transition-all duration-500 ease-in-out hover:scale-110'
      />
    </div>
  );
}

export default TasteImageCard;
