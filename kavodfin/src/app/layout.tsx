import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "KavodFin – Smart Forex Signals & Insights",
  description:
    "KavodFin empowers traders with real-time forex signals, analytics, and tools to win smarter. Join our growing community today.",
  keywords: [
    "KavodFin",
    "forex signals",
    "smart trading",
    "forex analytics",
    "forex tools",
    "trading strategies",
    "forex Nigeria",
    "KavodFin platform",
  ],
  metadataBase: new URL("https://kavodfin.com.ng"),
  openGraph: {
    title: "KavodFin – Smart Forex Signals & Insights",
    description:
      "Join KavodFin to access real-time forex signals, AI-powered analytics, and a trader-first community.",
    url: "https://kavodfin.com.ng",
    siteName: "KavodFin",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KavodFin – Smart Forex Signals & Insights",
    description:
      "Join KavodFin to access real-time forex signals, analytics, and a trader-first community.",
    images: ["/og-image.png"],
    creator: "@kavodfin",
  },
  icons: {
    icon: "/favicon.ico",
  },

  
  other: {
    "facebook-domain-verification":
      process.env.NEXT_PUBLIC_FB_DOMAIN_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Meta Pixel */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />

      <body
        className={`${inter.variable} ${montserrat.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
