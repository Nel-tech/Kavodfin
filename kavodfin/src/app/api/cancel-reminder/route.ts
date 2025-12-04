// app/api/queue/cancel-reminder/route.ts
import { NextResponse } from 'next/server';
import { reminderQueue } from '../../service/lib/queue/queue';

export async function POST(request: Request) {
  try {
    const { userId } = await request.json();

    if (!userId) {
      return NextResponse.json(
        { error: 'userId is required' },
        { status: 400 }
      );
    }

    // Remove the scheduled job using the jobId
    const jobId = `reminder-${userId}`;
    const job = await reminderQueue.getJob(jobId);
    
    if (job) {
      await job.remove();
      console.log(`✅ Cancelled reminder for user ${userId}`);
      
      return NextResponse.json({ 
        success: true,
        message: 'Reminder cancelled successfully',
        jobId 
      });
    } else {
      console.log(`⚠️ No reminder job found for user ${userId}`);
      
      return NextResponse.json({ 
        success: true,
        message: 'No reminder job found (may have already been processed)',
        jobId 
      });
    }

  } catch (error) {
    console.error('Failed to cancel reminder:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to cancel reminder',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}