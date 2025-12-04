// lib/queue.ts
import { Queue } from 'bullmq';
import IORedis from 'ioredis';

const connection = new IORedis({
  host: process.env.REDIS_HOST || 'localhost',
  port: Number(process.env.REDIS_PORT) || 6379,
  password: process.env.REDIS_PASSWORD,
  maxRetriesPerRequest: null, 
});


// Create reminder email queue
export const reminderQueue = new Queue('reminder-emails', { connection });

// Job data interface
export interface ReminderJobData {
  userId: string;
  name: string;
  email: string;
  scheduledFor: number; // timestamp
}