// lib/workers/index.ts
import { reminderWorker } from './reminderWorker';

export function startWorkers() {
  console.log('🚀 Starting BullMQ workers...');
  // Worker is already started when imported
  return reminderWorker;
}

// Auto-start in development
if (process.env.NODE_ENV === 'development') {
  startWorkers();
}