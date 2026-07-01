import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const hackFont = localFont({
  src: '../../public/fonts/Hack-NF.woff2',
  display: 'swap',
  variable: '--font-hack',
});

const hackArtFont = localFont({
  src: '../../public/fonts/Hack-NF.woff2',
  display: 'block',
  variable: '--font-hack-art',
});

// 禁用页面缩放，避免移动端用户误操作
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

import { terminalConfig, isAliyun } from "@/terminal.config";

export const metadata: Metadata = {
  title: isAliyun ? "终端网页" : "x-terminal",
  description: isAliyun ? "终端网页UI" : "Terminal Web UI",
  keywords: [
    'terminal',
    'ui',
    'web',
    'react',
    'nextjs'
  ],
  authors: [{ name: terminalConfig.name }],
  creator: terminalConfig.name,
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${hackFont.variable} ${hackArtFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
