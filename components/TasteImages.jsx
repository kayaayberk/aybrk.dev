'use client';

import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { MapPin } from 'lucide-react';
import Masonry from 'react-layout-masonry';
import { useState } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';
import TasteImageCard from '@/components/TasteImageCard';

function TasteImages({ result }) {
  const { items, totalImageCount } = result;
  const [displayCount, setDisplayCount] = useState(20);
  const { width } = useWindowSize();

  return (
    <div className='flex flex-col gap-5'>
      <Masonry
        columns={width <= 768 ? 1 : width <= 1024 ? 2 : width <= 1280 ? 3 : 3}
        gap={20}
      >
        {items.slice(0, displayCount).map((image, index) => (
          <div
            className='relative animate-slide rounded-xl opacity-0 shadow-lg shadow-black/50 delay-300'
            key={index}
          >
            <TasteImageCard
              url={image.image.url}
              index={index}
              width={image.image.width}
              height={image.image.height}
            />

            <div className='absolute bottom-0 left-0 p-3'>
              <span className='flex items-center gap-1 rounded-full bg-gray-200/20 px-2 py-1 text-xs text-white filter xl:backdrop-blur-3xl'>
                <MapPin size={16} />
                {image.location}
              </span>
            </div>
          </div>
        ))}
      </Masonry>
      <Button
        onClick={() => setDisplayCount((prev) => prev + 13)}
        variant='outline'
        className={cn(
          'mx-auto w-full border-gray-300 bg-transparent font-normal hover:bg-gray-200 dark:border-white dark:text-white dark:hover:bg-gray-500/25 md:w-1/2',
          totalImageCount <= displayCount ? 'hidden' : '',
        )}
      >
        Show more
      </Button>
    </div>
  );
}

export default TasteImages;
