'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { getDateTimeFormat } from '@/lib/utils';
import { ArrowRight, EyeIcon } from 'lucide-react';

function PageBlogPostList({ allPosts }) {
  const pathname = usePathname();
  const splitPathname = pathname.split('/');
  const currentPathname = splitPathname[2];

  const [isHovered, setIsHovered] = useState({});

  const handleMouseEnter = (id) => {
    setIsHovered((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const handleMouseLeave = (id) => {
    setIsHovered((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className='flex w-full flex-col gap-1'>
      {allPosts &&
        allPosts.map((post, i) => {
          return (
            <Link
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
              key={i}
              href={`/blog/${post.slug}`}
              prefetch={true}
              style={{ animationDelay: `${300 + i * 100}ms` }}
              className={[
                `flex w-full animate-slide items-center justify-between gap-1 rounded-md p-2 opacity-0 dark:text-white/80 `,
                currentPathname === post.slug
                  ? 'bg-gray-400/40 dark:bg-white/20'
                  : 'hover:bg-gray-200 dark:text-white/80 dark:hover:bg-gray-500/20',
              ].join(' ')}
            >
              <div className='flex flex-col'>
                <span className='text-sm font-normal tracking-normal'>
                  {post.title}
                </span>
                <span className='flex items-start gap-1'>
                  <span className='text-xs font-normal tracking-normal text-stone-500 dark:text-stone-300/60'>
                    {getDateTimeFormat(post.createdAt)} •
                  </span>
                  <span className='text-xs font-normal tracking-normal text-stone-500 dark:text-stone-300/60'>
                    {post.readTime}min
                  </span>
                </span>
              </div>
              {currentPathname !== post.slug && (
                <span className='w-4'>
                  <ArrowRight
                    className={[
                      'text-sm font-normal tracking-normal transition-all duration-300 ease-out',
                      isHovered[i] ? 'opacity-100' : 'opacity-0',
                    ].join(' ')}
                    size={16}
                  />
                </span>
              )}
            </Link>
          );
        })}
    </div>
  );
}

export default PageBlogPostList;
