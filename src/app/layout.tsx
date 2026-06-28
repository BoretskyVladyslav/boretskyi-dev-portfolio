import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://boretskyi.dev"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Vladyslav Boretskyi | Frontend Engineer",
    template: "%s | Vladyslav Boretskyi",
  },
  description:
    "Frontend Engineer specializing in React, Next.js, and high-performance web applications with 100/100 Core Web Vitals scores.",
  keywords: [
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Performance",
    "Core Web Vitals",
    "Vladyslav Boretskyi",
  ],
  authors: [{ name: "Vladyslav Boretskyi" }],
  creator: "Vladyslav Boretskyi",
  openGraph: {
    type: "profile",
    firstName: "Vladyslav",
    lastName: "Boretskyi",
    title: "Vladyslav Boretskyi | Frontend Engineer",
    description:
      "Frontend Engineer specializing in React, Next.js, and high-performance web applications with 100/100 Core Web Vitals scores.",
    siteName: "Vladyslav Boretskyi — Portfolio",
    locale: "en_US",
    url: "https://boretskyi.dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-screen bg-black text-foreground antialiased">
        <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
          {children}
        </div>
      </body>
    </html>
  );
}
