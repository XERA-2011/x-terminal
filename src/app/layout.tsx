import type { Metadata, Viewport } from "next";
import "./globals.css";

// 禁用页面缩放，避免移动端用户误操作
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

import { terminalConfig, isAliyun } from "@/terminal.config";

export const metadata: Metadata = {
  title: isAliyun ? "木彡的终端" : "x-terminal",
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
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
      </body>
    </html>
  );
}
