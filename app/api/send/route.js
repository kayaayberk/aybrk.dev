import { Resend } from 'resend';
import EmailTemplate from '@/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const res = await request.json();
    console.log(res);
    const { name, email, message } = res;

    const data = await resend.emails.send({
      from: 'contact@aybrk.dev',
      to: 'kayaayberk98@gmail.com',
      subject: `New message thorugh aybrk.dev. Sent by: ${name}`,
      name: name,
      message: message,
      react: EmailTemplate({
        name: name,
        message: message,
        email: email,
      }),
    });

    return Response.json({ res });
  } catch (error) {
    return Response.json({ error });
  }
}
