export function getWelcomeEmailHTML(name: string): string {
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
            <p>Got questions? Our DMs are literally one tap away — hit us up anytime.</p>
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