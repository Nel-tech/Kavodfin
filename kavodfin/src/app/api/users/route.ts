// app/api/users/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export async function POST(req: Request) {
  try {
    const { name, email, mobile_number } = await req.json();

    // 1️⃣ Insert user
    const { data: userData, error: userError } = await supabase
      .from('users')
      .insert({ name, email, mobile_number })
      .select()
      .single();

    if (userError) {
      console.error('User insert error:', userError);
      return NextResponse.json(
        { error: { message: userError.message } },
        { status: 500 }
      );
    }

    const userId = userData.id;

    // 2️⃣ Insert onboarding record
    const { error: onboardingError } = await supabase
      .from('onboarding')
      .insert({ 
        user_id: userId, 
        status: 'registered',
        created_at: new Date().toISOString(),
      });

    if (onboardingError) {
      console.error('Onboarding record error:', onboardingError);
      return NextResponse.json(
        { error: { message: onboardingError.message } },
        { status: 500 }
      );
    }

    console.log('✅ User created:', userId);

    return NextResponse.json({ user: userData }, { status: 200 });
  } catch (err) {
    console.error('Unexpected server error:', err);
    return NextResponse.json(
      { error: { message: err instanceof Error ? err.message : 'Unknown error' } },
      { status: 500 }
    );
  }
}