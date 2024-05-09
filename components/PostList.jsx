'use client';

import Link from 'next/link';
import { PencilLine } from 'lucide-react';
import { usePathname } from 'next/navigation';
import PageBlogPostList from './PageBlogPostList';

function PostList({ allPosts, totalCount }) {
  const pathname = usePathname();

  return (
    <div
      className={[
        'sticky left-0 hidden h-full gap-1 overflow-scroll border-r border-r-muted-foreground/10 p-2.5 lg:flex lg:w-[270px] lg:flex-col xl:w-96',
        !!allPosts.find((post) => pathname.includes(post.slug))
          ? ''
          : 'lg:hidden',
      ].join(' ')}
    >
      <div className='mb-2 flex items-center justify-between gap-1 border-b-[1px] border-muted-foreground/10 p-2 text-sm font-semibold'>
        <Link
          href={'/blog'}
          prefetch={true}
          className='flex items-center gap-1'
        >
          Posts{' '}
          <span>
            <PencilLine size={16} />
          </span>
        </Link>
        <span>{totalCount}</span>
      </div>
      <PageBlogPostList allPosts={allPosts} />
    </div>
  );
}

export default PostList;
