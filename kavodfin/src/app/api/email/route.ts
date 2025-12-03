import { NextResponse } from 'next/server';
export async function POST(request: Request) {
  try {
    const { type, name, email, userId } = await request.json();

    let htmlContent: string;
    let subject: string;

    if (type === 'welcome') {
      subject = 'Welcome to KavodFin - Your Forex Journey Starts Now';
      htmlContent = getWelcomeEmailHTML(name);
    } else if (type === 'reminder') {
      const joinUrl = `${process.env.NEXT_PUBLIC_APP_URL}/join?user=${userId}`;
      subject = "Don't Miss Out - Join KavodFin Today";
      htmlContent = getReminderEmailHTML(name, joinUrl);
    } else {
      return NextResponse.json({ error: 'Invalid email type' }, { status: 400 });
    }

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: 'KavodFin',
          email: 'noreply@kavodfin.com',
        },
        to: [
          {
            email: email,
            name: name,
          },
        ],
        subject: subject,
        htmlContent: htmlContent,
        replyTo: {
          email: 'support@kavodfin.com',
          name: 'KavodFin Support',
        },
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Brevo API error:', error);
      return NextResponse.json({ error: error.message }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json({ 
      success: true, 
      messageId: data.messageId 
    });

  } catch (error: any) {
    console.error('Email send error:', error);
    return NextResponse.json({ 
      error: error.message || 'Failed to send email' 
    }, { status: 500 });
  }
}

function getWelcomeEmailHTML(name: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Montserrat', Arial, sans-serif; background-color: #f6f9fc; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
          .header { background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .header h1 { color: white; margin: 0; font-size: 28px; }
          .content { background: white; padding: 40px 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
          .content p { color: #333; font-size: 16px; line-height: 26px; margin-bottom: 20px; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Welcome ${name}! 🎉</h1>
          </div>
          <div class="content">
            <p>Thank you for joining KavodFin. You're one step closer to making $3,000 - $5,000/month from Forex trading.</p>
            <p>Watch the video we sent you to learn how to get started with our copy trading system.</p>
            <p>Have questions? Reply to this email and we'll get back to you ASAP.</p>
            <p style="margin-top: 30px; color: #059669; font-weight: bold;">
              To your success,<br>
              The KavodFin Team
            </p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} KavodFin. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

function getReminderEmailHTML(name: string, joinUrl: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Montserrat', Arial, sans-serif; background-color: #f6f9fc; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
          .header { background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .header h1 { color: white; margin: 0; font-size: 28px; }
          .content { background: white; padding: 40px 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
          .content p { color: #333; font-size: 16px; line-height: 26px; margin-bottom: 20px; }
          .button { display: inline-block; background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 18px; margin: 20px 0; }
          .highlight { background-color: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; margin: 20px 0; border-radius: 4px; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Hey ${name}, Don't Miss Out! ⏰</h1>
          </div>
          <div class="content">
            <p>We noticed you haven't joined our community yet.</p>
            <p>Spots are filling up fast, and we don't want you to miss this opportunity to start earning $3,000 - $5,000/month through Forex trading.</p>
            
            <div style="text-align: center;">
              <a href="${joinUrl}" class="button">
                Join Now - Limited Spots 🚀
              </a>
            </div>

            <div class="highlight">
              <p style="margin: 0; font-weight: bold; color: #059669;">
                💰 Remember: If our system doesn't work for you, we'll pay you $100.
              </p>
              <p style="margin: 10px 0 0 0; color: #666;">
                You have nothing to lose!
              </p>
            </div>

            <p style="margin-top: 30px; color: #059669; font-weight: bold;">
              To your success,<br>
              The KavodFin Team
            </p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} KavodFin. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}