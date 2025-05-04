import type { Metadata } from 'next';
import './globals.css';
import { BIZ_UDPMincho } from 'next/font/google';

export const metadata: Metadata = {
  title: '蟲幻之地',
  description: 'bettle website',
  generator: 'v0.dev',
};
// 加載 BIZ UDPMincho 字體
const bizUdpMincho = BIZ_UDPMincho({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='trancy-zh-Hant'>
      <body>{children}</body>
    </html>
  );
}
