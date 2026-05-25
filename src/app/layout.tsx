import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { AppProviders } from "@/components/providers/app-providers";

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
  metadataBase: new URL("https://thorfolio.dev"),
  title: "Thoriq | Fullstack Developer",
  description:
    "Portfolio of Thoriq, a fullstack developer focused on maintainable web applications and practical enterprise systems.",
  openGraph: {
    title: "Thoriq | Fullstack Developer",
    description:
      "Fullstack developer portfolio focused on scalable systems, maintainable interfaces, and practical enterprise experience.",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thoriq | Fullstack Developer",
    description:
      "Fullstack developer portfolio with modern UI, practical engineering experience, and a grounded product mindset.",
    images: ["/twitter-image"],
  },
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Thoriq",
    "Fullstack Developer",
    "Next.js Portfolio",
    "TypeScript Portfolio",
    "Frontend Engineer",
    "Enterprise Systems Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
