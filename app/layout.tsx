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
  title: "木川 - AI 编程专家 | 个人主页",
  description: "木川，10年+技术开发经验，专注于大型互联网算法、AI+编程。前大厂Golang技术专家，AI破局俱乐部合伙人。",
  keywords: ["木川", "AI编程", "Golang", "算法专家", "技术博客"],
  authors: [{ name: "木川" }],
  openGraph: {
    title: "木川 - AI 编程专家",
    description: "10年+技术开发经验，专注于大型互联网算法、AI+编程",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
