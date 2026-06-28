import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vladyslav Boretskyi | Frontend Engineer",
  description: "Frontend Engineer specializing in React, Next.js, and high-performance web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`} style={{ colorScheme: 'dark' }}>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-white/20">
        <main className="mx-auto max-w-3xl px-6 py-12 md:py-24">
          {children}
        </main>
      </body>
    </html>
  );
}
