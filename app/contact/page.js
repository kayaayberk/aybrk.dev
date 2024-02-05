import Direct from '@/components/Direct';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import { Lightbulb } from 'lucide-react';

function Contact() {
  return (
    <div className='container mx-auto flex h-full max-w-xl flex-col items-start gap-10 pb-24 pt-28 md:max-w-4xl md:pt-24'>
      <div className='mx-auto w-full'>
        <PageHeader />
      </div>
      <ContactForm />
      <div className='mx-auto'>
        <p className='flex text-xs items-center font-light md:text-sm'>
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
