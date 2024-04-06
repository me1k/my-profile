import type { Metadata } from 'next';
import './globals.css';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'meik bolender - web developer',
  description: 'web developer',
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
