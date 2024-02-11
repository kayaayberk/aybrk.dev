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
      <span className='text-sm font-light text-muted-foreground/80'>
        {description}{' '}
        <Link
          target='_blank'
          className='text-blue-500 underline-offset-4 hover:text-blue-600 hover:underline'
          href={link ? link : ''}
        >
          {linkText ? linkText : ''}
        </Link>
      </span>
    </div>
  );
}

export default JourneyDescRenderer;
