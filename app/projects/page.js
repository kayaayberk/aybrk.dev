import ProjectCard from '@/components/ProjectCard';
import ReachedBottom from '@/components/ReachedBottom';

function page() {
  return (
    <div className='container mx-auto flex h-full max-w-xl flex-col items-start gap-10 pt-40 md:max-w-4xl md:pt-24'>
      <ProjectCard />
      <ReachedBottom />
    </div>
  );
}

export default page;
