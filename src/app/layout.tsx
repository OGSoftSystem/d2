import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase:
    process.env.NODE_ENV === "production"
      ? new URL(siteConfig.baseUrl)
      : new URL("http://localhost:3000"),
  title: {
    template: ` %s | ${siteConfig.title}`,
    default: siteConfig.shortDescription,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: { name: siteConfig.author.name, url: siteConfig.author.url },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <Toaster />
    </html>
  );
}
