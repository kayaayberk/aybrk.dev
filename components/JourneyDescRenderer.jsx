import Link from 'next/link';

function JourneyDescRenderer({ post }) {
  const { content } = post;

  const {
    json: {
      content: [
        {
          content: [
            { value: description } = {},
            {
              data: { uri: link } = {},
              content: [{ value: linkText } = {}] = [],
            } = {},
          ] = [],
        } = {},
      ] = [],
    } = {},
  } = content ?? {};

  // console.log(post);
  return (
    <div className='flex flex-col '>
      <span className=' font-semibold'>{post.subtitle}</span>
      <span className='text-sm font-light text-stone-600 dark:text-stone-400/80'>
        {description}{' '}
        <Link
          target='_blank'
          className='text-black underline-offset-4 hover:underline dark:text-white'
          href={link ? link : ''}
        >
          {linkText ? linkText : ''}
        </Link>
      </span>
    </div>
  );
}

export default JourneyDescRenderer;
