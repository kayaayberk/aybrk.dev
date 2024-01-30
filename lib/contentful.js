export const fetchGraphQl = async (query, preview) => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    },
  );

  if (!res.ok) throw new Error('Failed to fetch API', res.status);
  return res.json();
};

export const getJourneyContent = async (preview) => {
  const posts = await fetchGraphQl(
    `query getAllPosts($preview: Boolean) {
      pageBlogPostCollection(preview: $preview){
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