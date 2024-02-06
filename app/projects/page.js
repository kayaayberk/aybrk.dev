import Direct from '@/components/Direct';
import BgShape from '@/components/BgShape';
import PageHeader from '@/components/PageHeader';
import ProjectCard from '@/components/ProjectCard';
import ReachedBottom from '@/components/ReachedBottom';
import { sharedTitle, sharedDescription } from '@/app/shared-metadata';

function Projects() {
  return (
    <>
      <BgShape />
      <div className='container z-50 mx-auto flex min-h-max max-w-xl flex-col items-start gap-0  pt-28 md:max-w-4xl md:pt-24'>
        <PageHeader />
        <div className='flex w-full flex-col justify-between gap-60 pt-20'>
          <ProjectCard />
          <Direct
            option1='Journey'
            href1='/Journey'
            option2='Contact'
            href2='/contact'
            message1='Visit my journey page'
            message2='Get in touch'
          />
          <ReachedBottom />
        </div>
      </div>
    </>
  );
}

export default Projects;

export async function generateMetadata() {
  const url = '/projects';

  return {
    sharedTitle,
    sharedDescription,
    openGraph: {
      sharedTitle,
      sharedDescription,
      url: url,
    },
    alternates: {
      canonical: url,
    },
  };
}
