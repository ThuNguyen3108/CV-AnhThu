import type { Metadata } from 'next';
import { DM_Sans, Space_Mono } from 'next/font/google';
import './globals.css';
import ThemeWrapper from '@/components/ThemeWrapper';
import AnimatedBackground from '@/components/AnimatedBackground';
import Nav from '@/components/Nav';

const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nguyễn Thị Anh Thư - QA Engineer Portfolio',
  description:
    'QA Engineer / Testing Professional. Nearly 3 years in manual & automation testing, API testing, BDD. ISTQB Foundation certified.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${spaceMono.variable} font-sans min-h-screen relative`}>
        <ThemeWrapper>
          <AnimatedBackground />
          <Nav />
          <div className="relative z-10">{children}</div>
        </ThemeWrapper>
      </body>
    </html>
  );
}
