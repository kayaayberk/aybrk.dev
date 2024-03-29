import Image from 'next/image';

function TasteImageCard({ url }) {
  return (
    <div className='relative size-full overflow-hidden rounded-xl transition-all duration-500'>
      <Image
        src={url}
        width={500}
        height={500}
        priority
        alt='Taste Image'
        className='size-full transition-all duration-500 ease-in-out hover:scale-110 animate-reveal'
      />
    </div>
  );
}

export default TasteImageCard;
