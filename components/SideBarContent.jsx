'use client';

import Info from './Info';
import Badge from './Badge';
import Pages from './Pages';
import Online from './Online';
import BuiltWith from './BuiltWith';
import AudioPlayer from './AudioPlayer';
import PageBlogPostList from './PageBlogPostList';

function SideBarContent({ handleDrawerClose, allPosts }) {
  return (
    <div className='flex h-screen w-full flex-col gap-4 px-1 py-3  text-sm '>
      <div className='flex flex-1 flex-col justify-start gap-4 px-2'>
        <Badge />
        <Pages handleDrawerClose={handleDrawerClose} />
        <Online handleDrawerClose={handleDrawerClose} />
        <Info />
        <div>
          <span className='px-2 text-xs font-normal leading-relaxed text-card dark:text-card'>
            Latest Posts
          </span>
          <PageBlogPostList allPosts={allPosts} sideBar />
        </div>
        {/* <AudioPlayer playlist /> */}
        {/* <BuiltWith handleDrawerClose={handleDrawerClose} /> */}

        {/* Add heart counter */}
      </div>
    </div>
  );
}

export default SideBarContent;
