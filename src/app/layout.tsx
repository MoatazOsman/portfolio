import type { Metadata, Viewport } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-opensans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Moataz Osman",
  description:
    "Frontend and mobile engineer with 9+ years shipping production web and cross-platform applications — React, Next.js, Angular, TypeScript, and more.",
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
    <html lang="en" className={`${openSans.variable} ${playfair.variable}`}>
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
