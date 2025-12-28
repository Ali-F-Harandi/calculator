import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ماشین حساب | Calculator - Ali Fـ. Harandi",
  description: "یک ماشین حساب حرفه‌ای دو زبانه با پشتیبانی از فارسی و انگلیسی | A professional bilingual calculator supporting Persian and English languages",
  keywords: ["calculator", "ماشین حساب", "bilingual", "دو زبانه", "Persian", "Farsi", "English", "math", "ریاضی", "React", "Next.js"],
  authors: [{ name: "علی فـ. هرندی", url: "https://github.com/Ali-F-Harandi/" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "ماشین حساب | Calculator",
    description: "یک ماشین حساب حرفه‌ای دو زبانه | A professional bilingual calculator",
    url: "https://ali-f-harandi.github.io/calculator/",
    siteName: "Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ماشین حساب | Calculator",
    description: "یک ماشین حساب حرفه‌ای دو زبانه | A professional bilingual calculator",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
