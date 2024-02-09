<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://github.com/kayaayberk/aybrk.dev/assets/136496255/c1140cf2-428d-4e08-a93e-279e55687978" alt="Logo" >
  </a>
  <h1 align="center">aybrk.dev</h1>

  <p align="center">
I am so proud and thrilled to finally be able to build a website that reflects my taste and personality after 6 months of consistent and hard work in learning programming. I'm still in an ongoing endless learning process, I'm trying to keep myself up-to-date as I'm also trying to adapt best practices to my code but for now, I hope you have a great time visiting my website that I built with the current knowledge that I have. :)

I'll be updating my website and sharing posts that are related to my journey into programming throughout the days and years.
<br />
<br />
<br />
~
<a href="https://aybrk.dev/">View LIVE</a>
~

  </p>
  <br />
  <br />
</div>

## 📒 walk-through

- `/` ~ Home page.
- `/projects` ~ The page where I share the projects I build over time.
- `/journey` ~ A brief info of my journey. (Pre-rendered using <a href='https://www.contentful.com/'>Contentful</a> GraphQL API)
- `/taste` ~ My photography feed (Pre-rendered using. <a href='https://www.contentful.com/'>Contentful</a> GraphQL API)
- `/blog/[slug]` ~ Pages where the posts I write are shared. (Static pre-rendered using <a href='https://www.contentful.com/'>Contentful</a> GraphQL API)
- `/contact` ~ The page where you can send me an email. (Uses <a href='https://resend.com/home'>Resend Email API</a> and <a href='https://react.email/'>React Email</a> for delivery and templating)
- `/api` ~ API routes.

#### .env.local

```js
// Contentful Space ID that contains all the content types and posts
CONTENTFUL_SPACE_ID=
// Delivery API - access token
CONTENTFUL_ACCESS_TOKEN=
// Preview API - access token
CONTENTFUL_PREVIEW_ACCESS_TOKEN=
// Resend API - access token
RESEND_API_KEY=

// Supabase to be included if storage needed
```

## 🧱 Tech Stack & Features

#### Frameworks & Libraries & Languages

- [React](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Zod](https://github.com/colinhacks/zod)

#### Platforms

- [Vercel](https://www.contentful.com/)
- [Contentful](https://vercel.com/)
- [Supabase](https://supabase.com/)
- [Resend](https://resend.com/home)

#### UI

- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Lucide](https://lucide.dev/)
