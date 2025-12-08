import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://salinaspainting.com'), // Placeholder URL, best practice for OG
  title: {
    template: '%s | Salinas Painting',
    default: 'Painter in Elizabethton TN | Salinas Painting',
  },
  description: "Salinas Painting offers professional residential and commercial painting services in Elizabethton, TN. Call +14232976489 for a free quote.",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Salinas Painting',
    // We'll define specific og:images in page.tsx using metadata
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
