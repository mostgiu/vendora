import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";
import { LanguageProvider } from "@/components/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Vendora | Modern Everyday Fashion",
    template: "%s | Vendora",
  },
  description:
    "Shop modern everyday fashion at Vendora. Discover comfortable clothing, sneakers, and versatile essentials for your style.",
  keywords: [
    "Vendora",
    "online fashion store",
    "everyday clothing",
    "sneakers",
    "hoodies",
    "t-shirts",
  ],
  openGraph: {
    type: "website",
    siteName: "Vendora",
    title: "Vendora | Modern Everyday Fashion",
    description:
      "Discover comfortable clothing, sneakers, and modern everyday essentials at Vendora.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vendora | Modern Everyday Fashion",
    description:
      "Discover comfortable clothing, sneakers, and modern everyday essentials at Vendora.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          <AppShell>{children}</AppShell>
        </LanguageProvider>
      </body>
    </html>
  );
}
