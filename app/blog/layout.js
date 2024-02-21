import { getAllPostSlugs, getTotalCount } from '@/lib/contentful';
import BlogChildrenRenderer from '@/components/BlogChildrenRenderer';

async function fetchData() {
  const allPosts = await getAllPostSlugs();
  return { allPosts };
}

export default async function BlogLayout({ children }) {
  const { allPosts } = await fetchData();

  return (
    <BlogChildrenRenderer allPosts={allPosts}>{children}</BlogChildrenRenderer>
  );
}
