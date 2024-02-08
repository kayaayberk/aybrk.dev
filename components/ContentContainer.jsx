'use client';

import StepPointer from '@/components/StepPointer';
import JourneyDescRenderer from '@/components/JourneyDescRenderer';
import JourneyImageRenderer from '@/components/JourneyImageRenderer';

function ContentContainer({ posts }) {
  return (
    <div className='flex w-full flex-col'>
      {posts.map((post, index) => (
        <div className='flex flex-col' key={index}>
          <div>
            <div className='flex gap-14'>
              {/* Path */}
              <StepPointer index={index} posts={posts} />

              <div className='mb-10 flex w-full flex-col gap-4 md:w-5/6'>
                {/* Description !TODO: Render External Links */}
                <JourneyDescRenderer post={post} />

                {post.featuredImage !== null && (
                  <JourneyImageRenderer post={post} />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContentContainer;
