import type { Metadata } from 'next';
import './globals.css';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'meik bolender - web developer',
  description: 'web developer',
  themeColor:
    'linear-gradient(90deg,rgba(0, 0, 0, 1) 0%,rgba(29, 29, 29, 1) 100%);',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
