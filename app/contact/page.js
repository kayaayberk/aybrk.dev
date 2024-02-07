import Direct from '@/components/Direct';
import { Lightbulb } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import { sharedTitle, sharedDescription } from '@/app/shared-metadata';

function Contact() {
  return (
    <div className='container mx-auto flex h-full max-w-xl flex-col items-start gap-10 pb-24 pt-10 md:max-w-4xl'>
      <ContactForm />
      <div className='mx-auto'>
        <p className='flex items-center text-xs font-light md:text-sm'>
          <span className='mr-1 flex items-center font-bold'>
            <Lightbulb size={20} />
            Note:
          </span>
          Your message will directly be sent as an email to me.
        </p>
      </div>
      <div className='flex min-h-[400px] w-full flex-col justify-center'>
        <Direct
          option1='Projects'
          href1='/projects'
          option2='Journey'
          href2='/journey'
          message1='Check out my projects'
          message2='Visit my journey page'
        />
      </div>
    </div>
  );
}

export default Contact;

export async function generateMetadata() {
  const url = '/contact';

  return {
    title: 'Contact',
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
