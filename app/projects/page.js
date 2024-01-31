import Direct from '@/components/Direct';
import BgShape from '@/components/BgShape';
import ProjectCard from '@/components/ProjectCard';
import ReachedBottom from '@/components/ReachedBottom';
import ProjectsHeader from '@/components/ProjectsHeader';

function page() {
  return (
    <>
      <BgShape />
      <div className='container z-50 mx-auto flex min-h-max max-w-xl flex-col items-start gap-0  pt-28 md:max-w-4xl md:pt-24'>
        <ProjectsHeader />
        <div className='flex w-full flex-col justify-between gap-60 pt-20'>
          <ProjectCard />
          <Direct
            option1='Journey'
            href1='/Journey'
            option2='Contact'
            href2='/contact'
            message1='Visit my journey'
            message2='Get in touch'
          />
          <ReachedBottom />
        </div>
      </div>
    </>
  );
}

export default page;
