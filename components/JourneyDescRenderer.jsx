'use client';

function JourneyDescRenderer({ post }) {
  return (
    <div className='flex flex-col '>
      <span className='text-base font-semibold'>{post.subtitle}</span>
      <span className='text-sm font-light'>
        {post.content.json.content[0].content.length >= 1
          ? post.content.json.content[0].content.map((item) => {
              return item.value;
            })
          : post.content.json.content[0].content[0].value}
      </span>
    </div>
  );
}

export default JourneyDescRenderer;
