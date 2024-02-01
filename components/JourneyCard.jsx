'use client';

import ContentContainer from './ContentContainer';
import React, { useEffect, useState } from 'react';
import { getJourneyContent } from '@/lib/contentful';

const JourneyCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getJourneyContent(false);
        // Sort the posts by their title
        const sortedResult = result.sort((a, b) =>
          b.title.localeCompare(a.title),
        );
        setData(sortedResult);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    fetchData();
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
              className='flex flex-col justify-start gap-10 md:flex-row'
              key={index}
            >
              <div className='h-min w-[5rem]'>
                <span className='text-xl font-semibold'>{title}</span>
              </div>
              <ContentContainer posts={posts} />
            </div>
          ));
      })()}
    </>
  );
};

export default JourneyCard;
