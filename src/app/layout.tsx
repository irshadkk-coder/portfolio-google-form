import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import ThemeProvider from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Alex Morgan — Full Stack Developer',
  description:
    'Personal portfolio of Alex Morgan, a Full Stack Developer specializing in React, Next.js, and Node.js. View projects, experience, and get in touch.',
  keywords: [
    'Full Stack Developer',
    'React Developer',
    'Next.js Portfolio',
    'Web Developer',
    'Frontend Developer',
    'Alex Morgan',
  ],
  authors: [{ name: 'Alex Morgan' }],
  openGraph: {
    title: 'Alex Morgan — Full Stack Developer',
    description:
      'Personal portfolio of Alex Morgan, a Full Stack Developer specializing in React, Next.js, and Node.js.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                borderRadius: '12px',
                padding: '12px 16px',
                fontSize: '14px',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
