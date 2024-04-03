import type { Metadata } from 'next';
import './globals.css';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'me1kb',
  description: 'Generated with love',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>{children}</div>
      </body>
    </html>
  );
}
