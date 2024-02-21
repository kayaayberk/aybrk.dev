import { isDevelopment } from '@/lib/utils';

export const fetchGraphQl = async (query, preview) => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    },
  );

  if (!res.ok) throw new Error('Failed to fetch API', res.status);
  return res.json();
};

export const getJourneyContent = async (preview = isDevelopment) => {
  const posts = await fetchGraphQl(
    `query {
      pageBlogPostCollection(preview: ${preview}){
        total
        items {
          title
          subtitle
          content{
            json
          }
          featuredImage{
            url
          }
          }
        }
      }
    `,
    preview,
  );
  return posts?.data?.pageBlogPostCollection?.items ?? [];
};

export const getTasteFeedContent = async (preview = isDevelopment) => {
  const content = await fetchGraphQl(
    `query {
      tasteFeedCollection(preview: ${preview}){
        total
        items {
          image {
            url
          }
          location
        }
      }
    }
    
    `,
    preview,
  );
  return {
    items: content?.data?.tasteFeedCollection?.items ?? [],
    totalImageCount: content?.data?.tasteFeedCollection.total,
  };
};

export const getAllPostSlugs = async (preview = isDevelopment) => {
  const entries = await fetchGraphQl(
    `query {
    blogPageCollection(preview: ${preview}){
      items{
        slug
        title
        createdAt
        readTime
      }
    }
  }`,
    preview,
  );
  return entries?.data?.blogPageCollection?.items ?? [];
};

export const getPost = async (slug, preview = isDevelopment) => {
  const post = await fetchGraphQl(
    `query {
      blogPageCollection(where: { slug: "${slug}" }, preview: ${preview}, limit: 1) {
        total
    items {
      title
      slug
      createdAt
      body {
        json
        links {
          assets {
            block {
              sys {
                id
              }
              url
              title
              width
              height
              description
            }
          }
          entries {
            block {
              sys {
                id
              }
            }
          }
        }
      }
    }
  }
}
    
    `,
    preview,
  );
  return post?.data?.blogPageCollection?.items?.[0];
};

export const getTotalCount = async (preview = isDevelopment) => {
  const post = await fetchGraphQl(
    `query {
      blogPageCollection(preview: ${preview}) {
        total
        }
      }    
    `,
    preview,
  );
  return post?.data?.blogPageCollection?.total;
};
