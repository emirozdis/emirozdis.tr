import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SiteFrame from "@/components/SiteFrame";
import { SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// SEO Enhancement: Added metadataBase, improved title/description, and added Open Graph/Twitter cards.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Emir Özdiş - Fullstack Developer Portfolio",
  description:
    "Emir Özdiş is a fullstack web developer specializing in Next.js, TypeScript, and modern web technologies. Explore my projects, including Mystra, Tema v2, and Pratix AI.",
  keywords: [
    "Emir Özdiş",
    "Fullstack Developer",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
    "Mystra",
    "Tema v2",
    "Pratix AI",
  ],
  creator: "Emir Özdiş",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Emir Özdiş - Fullstack Developer Portfolio",
    description:
      "Explore the portfolio of Emir Özdiş, a fullstack developer creating clean, minimal, and interactive web experiences.",
    // IMPORTANT: Create an og-image.png (1200x630) and place it in your /public folder
    images: ["/og-image.png"],
    url: SITE_URL,
    siteName: "Emir Özdiş Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emir Özdiş - Fullstack Developer Portfolio",
    description:
      "Explore the portfolio of Emir Özdiş, a fullstack developer creating clean, minimal, and interactive web experiences.",
    images: ["/og-image.png"],
    // creator: "@your_twitter_handle", // Optional: Add your Twitter handle
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased text-primary`}
      >
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
