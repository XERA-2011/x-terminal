import type { Metadata, Viewport } from "next";
import "./globals.css";

// 禁用页面缩放，避免移动端用户误操作
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "x-terminal",
  description: "Terminal Web UI",
  keywords: [
    'terminal',
    'ui',
    'web',
    'react',
    'nextjs'
  ],
  authors: [{ name: 'XERA' }],
  creator: 'XERA',
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
