import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

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
    images: [
      {
        url: "/og-image.png", // Add this image in your public folder
        width: 1200,
        height: 630,
        alt: "KavodFin – Forex made smarter",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KavodFin – Smart Forex Signals & Insights",
    description:
      "Join KavodFin to access real-time forex signals, analytics, and a trader-first community.",
    images: ["/og-image.png"],
    creator: "@kavodfin", // Optional: add your Twitter handle
  },
  icons: {
    icon: "/favicon.ico", // Place this in your /public directory
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>

        {children}
        <Analytics/>

      </body>
    </html>
  );
}
