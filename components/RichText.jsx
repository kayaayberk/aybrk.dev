'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';
import CodeBlock from './CodeBlock';
import { BlogImageSkeleton } from './ImageSkeleton';
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
          <code className='rounded-md bg-gray-200 px-2 py-0.5 text-sm dark:bg-zinc-800'>
            {text}
          </code>
        );
      },
    },
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        const entry = findInlineEntry(node.data.target.sys.id);

        if (entry.__typename === 'CodeBlock') {
          return <CodeBlock entry={entry} />;
        }
      },
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className='mb-6 font-light leading-relaxed tracking-wide dark:text-gray-400'>
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
          <div className='mx-auto mb-10 mt-5 flex flex-col items-center gap-3'>
            <div className='overflow-hidden rounded-xl shadow-lg'>
              {assets.url && (
                <Suspense fallback={<BlogImageSkeleton />}>
                  <Image
                    src={assets.url}
                    width={assets.width || 400}
                    height={assets.height || 400}
                    alt={assets.title}
                    loading='lazy'
                    className='animate-reveal'
                  />
                </Suspense>
              )}
            </div>
            <span className='text-xs font-extralight tracking-wide text-muted-foreground'>
              {assets.title}
            </span>
          </div>
        );
      },
      [INLINES.HYPERLINK]: (node, children) => (
        <Link
          target='_blank'
          className='text-black hover:underline dark:text-white'
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
      [BLOCKS.LIST_ITEM]: (node, children) => {
        const UnTaggedChildren = documentToReactComponents(node, {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => children,
            [BLOCKS.LIST_ITEM]: (node, children) => children,
          },
        });

        return (
          <li className='font-light leading-relaxed tracking-wide dark:text-gray-400'>
            {UnTaggedChildren}
          </li>
        );
      },
      [BLOCKS.QUOTE]: (node, children) => {
        const UnTaggedChildren = documentToReactComponents(node, {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => children,
            [BLOCKS.QUOTE]: (node, children) => children,
          },
        });
        return (
          <blockquote className='mb-4 border-l-4 border-zinc-200 px-4 font-light leading-relaxed tracking-wide dark:border-zinc-800 dark:text-gray-400'>
            {UnTaggedChildren}
          </blockquote>
        );
      },
    },
  };
}

export const RichText = ({ body }) => {
  if (!body) return null;
  return documentToReactComponents(body.json, options(body.links));
};
