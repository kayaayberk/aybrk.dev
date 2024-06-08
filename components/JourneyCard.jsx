'use client';

import ContentContainer from './ContentContainer';
import { useEffect, useState } from 'react';

const JourneyCard = ({ result }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Sort the posts by their title
    const sortedResult = result.sort((a, b) => b.title.localeCompare(a.title));
    setData(sortedResult);
  }, []);

  // Starts from the nest: 'items'
  return (
    <>
      {/* IIFE to immediately group everything and execute the logic */}
      {(() => {
        // Group the posts by their title
        const postsByTitle = data.reduce((groups, post) => {
          const title = post.title;
          if (!groups[title]) {
            groups[title] = [];
          }
          groups[title].push(post);
          return groups;
        }, {});

        // Map the groups to a list of elements
        return Object.entries(postsByTitle)
          .reverse()
          .map(([title, posts], index) => (
            <div
              data-state='null'
              className='group flex animate-slide flex-col justify-start gap-5 opacity-0 delay-300 md:flex-row'
              key={index}
            >
              <div className='h-min w-[5rem]'>
                <span className='text-xl font-medium leading-4 transition-all duration-300'>
                  {title}
                </span>
              </div>
              <ContentContainer posts={posts} />
            </div>
          ));
      })()}
    </>
  );
};

export default JourneyCard;
