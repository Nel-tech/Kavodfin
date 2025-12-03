// lib/emailer.ts
import nodemailer from 'nodemailer';

// Remove dotenv - Next.js handles .env automatically
// dotenv.config(); // ❌ DELETE THIS LINE

const createTransporter = () => {
  // Validate environment variables exist
  if (!process.env.BREVO_SMTP_USER || !process.env.BREVO_SMTP_PASS) {
    throw new Error('Missing BREVO_SMTP_USER or BREVO_SMTP_PASS environment variables');
  }

  console.log('Environment check:', {
    user: process.env.BREVO_SMTP_USER,
    hasPassword: !!process.env.BREVO_SMTP_PASS,
    host: process.env.SMTP_SERVER,
    port: process.env.SMTP_PORT,
  });

  return nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    auth: { 
      user: process.env.BREVO_SMTP_USER,
      pass: process.env.BREVO_SMTP_PASS, 
    },
  });
};

export const sendEmail = async (to: string, subject: string, html: string) => {
  try {
    const transporter = createTransporter();
    
    const info = await transporter.sendMail({
      from: '"KavodFin" <noreply@kavodfin.com>',
      to,
      subject,
      html,
    });
    
    console.log('✅ Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('❌ Email error:', error);
    throw error;
  }
};