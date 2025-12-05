// lib/workers/reminderWorker.ts
import { Worker } from 'bullmq';
import IORedis from 'ioredis';
import { sendEmail } from '../emailer';
import { getReminderEmailHTML } from '@/components/emails/reminder-email';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! 
);

const connection = new IORedis({
  host: process.env.REDIS_HOST || 'localhost',
  port: Number(process.env.REDIS_PORT) || 6379,
   password: process.env.REDIS_PASSWORD,
  maxRetriesPerRequest: null,

});

export const reminderWorker = new Worker(
  'reminder-emails',
  async (job) => {
    const { name, email, userId } = job.data;

    try {
      // 1️⃣ Check if user already joined
      const { data: onboarding } = await supabase
        .from('onboarding')
        .select('join_clicked_at, reminder_sent')
        .eq('user_id', userId)
        .single();

      if (onboarding?.join_clicked_at) {
        return { skipped: true, reason: 'already_joined' };
      }

      if (onboarding?.reminder_sent) {
        return { skipped: true, reason: 'already_sent' };
      }

      // 2️⃣ Send reminder email
      const joinUrl = `${process.env.NEXT_PUBLIC_WHATSAPP_LINK}`;
      const htmlContent = getReminderEmailHTML(name, joinUrl);
      
      await sendEmail(
        email,
        "Don't Miss Out - Complete Your KavodFin Registration",
        htmlContent
      );

      // 3️⃣ Update onboarding record
      await supabase
        .from('onboarding')
        .update({ 
          reminder_sent: true,
          status: 'reminder_sent',
          updated_at: new Date().toISOString()
        })
        .eq('user_id', userId);
      return { success: true, email };

    } catch (error) {
      console.error(`❌ Failed to send reminder to ${email}:`, error);
      throw error;
    }
  },
  { connection }
);

reminderWorker.on('completed', (job) => {
 return job.id
});

reminderWorker.on('failed', (job, err) => {
  console.error(`❌ Job ${job?.id} failed:`, err);
});