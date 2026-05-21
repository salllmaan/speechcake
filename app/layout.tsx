import type { Metadata } from "next";
import { Inter, Limelight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const limelight = Limelight({
  variable: "--font-limelight",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "AbleSpace — AI-Powered IEP Tracking for Special Ed Professionals",
  description:
    "Track IEP goals, services, and accommodations in one place — with AI-powered speed and accuracy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${limelight.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-[#111111] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
