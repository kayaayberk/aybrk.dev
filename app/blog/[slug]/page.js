import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { isDevelopment } from '@/lib/utils';
import PageHeader from '@/components/PageHeader';
import { RichText } from '@/components/RichText';
import { getAllPostSlugs, getPost } from '@/lib/contentful';

export async function generateStaticParams() {
  const allPosts = await getAllPostSlugs();
  return allPosts.map((post) => ({ params: { slug: post.slug } }));
}

async function fetchData(slug) {
  const { isEnabled } = draftMode();
  const data = await getPost(slug, isDevelopment ? true : isEnabled);
  if (!data) notFound();
  return { data };
}
async function fetchPost() {
  const allPosts = await getAllPostSlugs();
  return { allPosts };
}

export default async function BlogSlug({ params }) {
  const { slug } = params;
  const { allPosts } = await fetchPost();
  const {
    data: { title, body, createdAt },
  } = await fetchData(slug);

  return (
    <>
      <PageHeader allPosts={allPosts} title={title} createdAt={createdAt} />
      <div className='container mx-auto flex min-h-max max-w-xl flex-col items-start pb-24 md:max-w-2xl'>
        <RichText body={body} />
      </div>
    </>
  );
}
