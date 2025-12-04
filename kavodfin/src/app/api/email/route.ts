// app/api/email/route.ts
import { NextResponse } from 'next/server';
import { getWelcomeEmailHTML } from '@/components/emails/WelcomeEmail';
import { getReminderEmailHTML } from '@/components/emails/reminder-email';
import { sendEmail } from '../../service/lib/emailer';

export async function POST(request: Request) {
  try {
    const { type, name, email, userId } = await request.json();

    let subject: string;
    let htmlContent: string;

    if (type === 'welcome') {
      subject = 'Welcome to KavodFin - Your Forex Journey Starts Now';
      htmlContent = getWelcomeEmailHTML(name);
    } else if (type === 'reminder') {
      const joinUrl = `${process.env.NEXT_PUBLIC_APP_URL}/join?user=${userId}`;
      subject = "Don't Miss Out - Join KavodFin Today";
      htmlContent = getReminderEmailHTML(name, joinUrl);
    } else {
      return NextResponse.json({ error: 'Invalid email type' }, { status: 400 });
    }

    await sendEmail(email, subject, htmlContent);

    return NextResponse.json({ success: true });

  } catch (error: unknown) {
    console.error('Email send error:', error);
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: message || 'Failed to send email' }, { status: 500 });
  }
}
