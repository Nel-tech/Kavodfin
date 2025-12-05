// lib/workers/index.ts
import { reminderWorker } from './reminderWorker';

export function startWorkers() {
  return reminderWorker;
}

// Auto-start in development
if (process.env.NODE_ENV === 'development') {
  startWorkers();
}