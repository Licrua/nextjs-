import '@/app/ui/global.css';
// import { inter } from 'next/font/google';
import { inter } from '@/app/ui/fonts';
// import { Inter } from 'next/font/google';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
