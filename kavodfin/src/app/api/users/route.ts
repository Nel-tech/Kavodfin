// app/api/users/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { parseSupabaseError } from '@/lib/supabaseErrors';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export async function POST(req: Request) {
  try {
    const { name, email, mobile_number, website } = await req.json();

    // Bot detection (honeypot)
    if (website) {
      console.log('Bot detected, silently rejecting');
      return NextResponse.json({ user: { id: 'fake' } }, { status: 200 });
    }

    // Basic validation
    if (!name || !email || !mobile_number) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Insert user
    const { data: userData, error: userError } = await supabase
      .from('users')
      .insert({ name, email, mobile_number })
      .select()
      .single();

    if (userError) {
      const errorMessage = parseSupabaseError(userError);
      console.error('User insert error:', userError);
      return NextResponse.json(
        { error: { message: errorMessage } },
        { status: 500 }
      );
    }

    const userId = userData.id;

    // Insert onboarding record
    const { error: onboardingError } = await supabase
      .from('onboarding')
      .insert({ user_id: userId, status: 'registered' });

    if (onboardingError) {
      const errorMessage = parseSupabaseError(onboardingError);
      console.error('Onboarding record error:', onboardingError);
      return NextResponse.json(
        { error: { message: errorMessage } },
        { status: 500 }
      );
    }

    console.log('✅ User created:', userId);

    return NextResponse.json({ user: userData }, { status: 200 });
  } catch (err) {
    console.error('Unexpected server error:', err);
    return NextResponse.json(
      { error: { message: 'Internal server error' } },
      { status: 500 }
    );
  }
}
