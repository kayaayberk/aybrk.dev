'use client';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import Image from 'next/image';
import Link from 'next/link';

function options(links) {
  const findAsset = (id) => links.assets.block.find((ast) => ast.sys.id === id);
  return {
    renderMark: {
      [MARKS.BOLD]: (text) => <span className='font-semibold'>{text}</span>,
      [MARKS.ITALIC]: (text) => <span className='font-semibold'>{text}</span>,
      [MARKS.CODE]: (text) => <span className='font-semibold'>{text}</span>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className='leading-relaxed'>{children}</p>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <span className='text-md font-semibold'>{children}</span>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <span className='text-xl font-semibold'>{children}</span>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const assets = findAsset(node.data.target.sys.id);

        return (
          <div className='mb-6 overflow-hidden rounded-xl'>
            <Image
              src={assets.url}
              width={assets.width || 400}
              height={assets.height || 400}
              alt={assets.title}
              loading='lazy'
              className='animate-reveal'
            />
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
