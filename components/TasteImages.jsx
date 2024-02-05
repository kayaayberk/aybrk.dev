'use client';

import { Button } from './ui/button';
import { MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import TasteImageCard from '@/components/TasteImageCard';
import LoadingSpinner from '@/components/LoadingSpinner';

function TasteImages({ result }) {
  const { items, totalImageCount } = result;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [displayCount, setDisplayCount] = useState(20);
  const [totalImgCount, setTotalImgCount] = useState();

  useEffect(() => {
    setIsLoading(true);

    setData(items);
    setTotalImgCount(totalImageCount);
    setIsLoading(false);
  }, []);

  return (
    <div className='flex flex-col gap-10'>
      <div className='columns-1 gap-5 md:columns-2 lg:columns-3'>
        {data.slice(0, displayCount).map((image, index) => {
          return (
            <div
              className='relative mb-5 rounded-xl shadow-lg shadow-black/50'
              key={index}
            >
              <TasteImageCard url={image.image.url} />
              <div className='absolute bottom-0 left-0 p-3'>
                <span className='flex items-center gap-1 rounded-full bg-gray-200/20 px-2 py-1 text-xs text-white filter backdrop-blur-3xl'>
                  <MapPin size={16} />
                  {image.location}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <Button
        onClick={() => {
          setIsLoading(true);
          setDisplayCount((prev) => prev + 13);
          setIsLoading(false);
        }}
        variant='outline'
        className={[
          'mx-auto w-full border-gray-300 bg-transparent font-normal hover:bg-gray-200 dark:border-white dark:text-white dark:hover:bg-gray-500/25 md:w-1/2',
          totalImgCount <= displayCount ? 'hidden' : '',
        ].join(' ')}
      >
        {isLoading ? <LoadingSpinner /> : 'Show more'}
      </Button>
    </div>
  );
}

export default TasteImages;
