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

  return (
    <div className='flex flex-col '>
      <span className=' font-semibold'>{post.subtitle}</span>
      <span className='text-sm font-light text-stone-500 dark:text-stone-300/60'>
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
