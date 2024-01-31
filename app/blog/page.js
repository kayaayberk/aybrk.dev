import ProjectsHeader from '@/components/ProjectsHeader';

function page() {
  return (
    <div className='container mx-auto flex h-full max-w-xl flex-col items-start gap-10 pb-24 pt-28 md:max-w-4xl md:pt-24'>
      <ProjectsHeader />
    </div>
  );
}

export default page;
