// app/api/queue/schedule-reminder/route.ts
import { NextResponse } from 'next/server';
import { reminderQueue } from '../../service/lib/queue/queue';

export async function POST(request: Request) {
  try {
    const { userId, name, email, delayMs } = await request.json();

    if (!userId || !name || !email || !delayMs) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Schedule reminder email with unique jobId
    const job = await reminderQueue.add(
      'send-reminder',
      { userId, name, email },
      {
        delay: delayMs,
        jobId: `reminder-${userId}`, 
        removeOnComplete: true, 
      }
    );

    return NextResponse.json({ 
      success: true,
      jobId: job.id,
      scheduledFor: new Date(Date.now() + delayMs).toISOString()
    });

  } catch (error) {
    console.error('Failed to schedule reminder:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to schedule reminder',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
