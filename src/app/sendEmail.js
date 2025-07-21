// app/sendEmail.js
"use server";

import { Resend } from 'resend';
import { EmailTemplate } from '../components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const senderEmail = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');

  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'harismuhyidinshofar45@gmail.com', // <-- GANTI DENGAN EMAIL ANDA
      subject: `New Message from Portfolio: ${subject}`,
      react: <EmailTemplate senderEmail={senderEmail} subject={subject} message={message} />
    });
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};