import Direct from '@/components/Direct';
import { Lightbulb } from 'lucide-react';
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
      <div className='mt-14 flex w-full flex-col justify-center'>
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
      images: ['https://aybrk.dev/contact/opengraph-image?47857960366f59b2'],
    },
    icons: {
      icon: 'https://aybrk.dev/favicon.ico',
    },
  };
}
