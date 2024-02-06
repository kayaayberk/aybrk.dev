'use client';

import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormControl,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check, Frown, Loader2, Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z
    .string()
    .min(5, { message: 'Message must be 5 or more characters long' }),
});

function ContactForm() {
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const {
    register,
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values) {
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log(response);
        toast({
          title: 'Message successfully sent!',
          description: values.name
            ? `Dear ${values.name} Thank you for reaching out! I'll get back to you as soon as possible.`
            : `Thank you for reaching out! I'll get back to you as soon as possible.`,
          status: 'success',
          className: 'bg-green-500 text-white',
          action: <Check size={32} strokeWidth={3} />,
        });
      } else {
        toast({
          title: 'Failed to send message',
          description: 'Something went wrong. Please try again later',
          status: 'error',
          className: 'bg-red-500 text-white',
          action: <Frown size={32} strokeWidth={3} />,
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: 'Failed to send message',
        description: 'Something went wrong. Please try again later',
        status: 'error',
        className: 'bg-red-500 text-white',
        action: <Frown size={32} strokeWidth={3} />,
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-4'>
        <div className='flex w-full flex-col gap-4 md:flex-row'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input
                    {...register('email')}
                    placeholder='johndoe@email.com'
                    className='w-full border-muted-foreground/50 text-muted-foreground'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='w-full border-muted-foreground/50'>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...register('name')}
                    placeholder='John Doe'
                    className='w-full border-muted-foreground/50 text-muted-foreground'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message *</FormLabel>
              <FormControl>
                <Textarea
                  {...register('message')}
                  placeholder='Your message'
                  {...field}
                  className='min-h-40 border-muted-foreground/50 text-muted-foreground'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full' disabled={isSubmitting}>
          {isSubmitting ? (
            <span className='flex items-center gap-1'>
              Sending message... <Loader2 size={16} className='animate-spin' />
            </span>
          ) : (
            <span className='flex items-center gap-1'>
              Send message <Send size={16} />
            </span>
          )}
        </Button>
      </form>
    </Form>
  );
}

export default ContactForm;
