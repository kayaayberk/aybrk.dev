import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { isDevelopment } from '@/lib/utils';
import PageHeader from '@/components/PageHeader';
import { RichText } from '@/components/RichText';
import AudioPlayer from '@/components/AudioPlayer';
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
    data: { title, body, createdAt, readTime, audio },
  } = await fetchData(slug);

  return (
    <>
      <div className='absolute top-0 h-20 w-full dark:bg-gradient-to-b from-background to-transparent' />

      <div>
        <PageHeader
          allPosts={allPosts}
          title={title}
          createdAt={createdAt}
          readTime={readTime}
        />
        <div className='container mx-auto flex min-h-max max-w-xl flex-col items-start pb-24 md:max-w-3xl'>
          {audio && <AudioPlayer audioUrl={audio.url} />}
          <RichText body={body} />
        </div>
      </div>
      <div className='absolute bottom-0 h-10 w-full dark:bg-gradient-to-t from-background to-transparent' />
    </>
  );
}
