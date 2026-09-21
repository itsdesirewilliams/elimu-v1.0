import type { Metadata, Viewport } from "next";
import { Anek_Devanagari, Inter } from "next/font/google";
import "./globals.css";

const headingFont = Anek_Devanagari({
  subsets: ["latin"],
  variable: "--font-anek",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#0a7e3d",
};

export const metadata: Metadata = {
  title: "ElimuBoost",
  description:
    "Interactive, curriculum-based learning for Senior 4 — built to get you CSE-ready.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="bg-neutral-50 font-body text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
