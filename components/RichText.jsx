'use client';

import Link from 'next/link';
import Image from 'next/image';
import CodeBlock from './CodeBlock';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function options(links) {
  const findAsset = (id) => links.assets.block.find((ast) => ast.sys.id === id);
  const findInlineEntry = (id) =>
    links?.entries?.block?.find((item) => item.sys.id === id);

  return {
    renderMark: {
      [MARKS.BOLD]: (text) => <span className='font-semibold'>{text}</span>,
      [MARKS.ITALIC]: (text) => <span className='font-semibold'>{text}</span>,
      [MARKS.CODE]: (text) => {
        return (
          <pre>
            <code>{text}</code>
          </pre>
        );
      },
    },
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        const entry = findInlineEntry(node.data.target.sys.id);
        console.log(entry);

        if (entry.__typename === 'CodeBlock') {
          return <CodeBlock entry={entry} />;
        }
      },
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className='mb-6 font-light leading-relaxed dark:text-gray-400 tracking-wide'>
          {children}
        </p>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <span className='text-md mb-5 font-medium'>{children}</span>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <span className='mb-3 text-xl font-medium'>{children}</span>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const assets = findAsset(node.data.target.sys.id);
        return (
          <div className='flex flex-col items-center gap-3 mb-10 mt-5'>
            <div className='overflow-hidden rounded-xl shadow-lg'>
              <Image
                src={assets.url}
                width={assets.width || 400}
                height={assets.height || 400}
                alt={assets.title}
                loading='lazy'
                className='animate-reveal'
              />
            </div>
            <span className='text-xs tracking-wide font-extralight text-muted-foreground'>{assets.title}</span>
          </div>
        );
      },
      [INLINES.HYPERLINK]: (node, children) => (
        <Link
          target='_blank'
          className='font-medium hover:underline'
          href={node.data.uri}
        >
          {children}
        </Link>
      ),
      [BLOCKS.UL_LIST]: (_, children) => (
        <ul className='mb-4 flex list-disc flex-col gap-0.5 pl-6'>
          {children}
        </ul>
      ),
      [BLOCKS.OL_LIST]: (_, children) => (
        <ol className='mb-4 flex list-decimal flex-col gap-2 pl-6'>
          {children}
        </ol>
      ),
      [BLOCKS.LIST_ITEM]: (_, children) => <li>{children}</li>,
      [BLOCKS.QUOTE]: (_, children) => (
        <blockquote className='mb-4 rounded-r-lg border-l-2 border-gray-200 px-4 font-normal italic'>
          {children}
        </blockquote>
      ),
    },
  };
}

export const RichText = ({ body }) => {
  if (!body) return null;
  return documentToReactComponents(body.json, options(body.links));
};
