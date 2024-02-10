import Direct from '@/components/Direct';
import ProjectCard from '@/components/ProjectCard';
import ReachedBottom from '@/components/ReachedBottom';
import { sharedTitle, sharedDescription } from '@/app/shared-metadata';

function Projects() {
  return (
    <div className='container z-50 mx-auto flex min-h-max max-w-xl flex-col items-start gap-0 pt-10  md:max-w-4xl'>
      <div className='flex w-full flex-col justify-between gap-60'>
        <ProjectCard />
        <Direct
          option1='Journey'
          href1='/journey'
          option2='Contact'
          href2='/contact'
          message1='Visit my journey page'
          message2='Get in touch'
        />
        <ReachedBottom />
      </div>
    </div>
  );
}

export default Projects;

export async function generateMetadata() {
  const url = '/projects';

  return {
    title: 'Projects',
    description: sharedDescription,
    openGraph: {
      title: sharedTitle,
      description: sharedDescription,
      url: url,
    },
    alternates: {
      canonical: url,
    },
    twitter: {
      card: 'summary_large_image',
      site: `@kayaayberkk`,
      creator: `@kayaayberkk`,
      description: sharedDescription,
      title: sharedTitle,
      images: ['https://aybrk.dev/projects/opengraph-image?47857960366f59b2'],
    },
    icons: {
      icon: 'https://aybrk.dev/favicon.ico',
    },
  };
}
