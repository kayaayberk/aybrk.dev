import ChildrenRenderer from '@/components/ChildrenRenderer';
import { getAllPostSlugs, getTotalCount } from '@/lib/contentful';

async function fetchData() {
  const allPosts = await getAllPostSlugs();
  return { allPosts };
}

export default async function BlogLayout({ children }) {
  const { allPosts } = await fetchData();

  return (
    <div className='flex flex-1'>
      <ChildrenRenderer allPosts={allPosts}>{children}</ChildrenRenderer>
    </div>
  );
}
