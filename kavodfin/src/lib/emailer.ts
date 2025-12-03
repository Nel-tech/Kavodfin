// utils/emailer.ts
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_SERVER || 'smtp-relay.brevo.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false, // TLS starts automatically
    auth: { 
      user: process.env.BREVO_SMTP_USER,
      pass: process.env.BREVO_SMTP_PASS, 
    },
    tls: {
      rejectUnauthorized: false, 
    },
  });
};

export const sendEmail = async (to: string, subject: string, html: string) => {
  try {
    const transporter = createTransporter();
    
    await transporter.sendMail({
      from: '"KavodFin" <noreply@kavodfin.com>',
      to,
      subject,
      html,
    });
    
    console.log(`Email sent successfully to ${to}`);
    return true;
  } catch (error) {
    console.error(`Failed to send email to ${to}:`, error);
    throw new Error('Email could not be sent. Please try again.');
  }
};
