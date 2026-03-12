import type {Metadata} from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css'; // Global styles
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';

export const metadata: Metadata = {
  title: 'Roaming Maldives | Premium eSIM Connectivity',
  description: 'Stay connected in the Maldives with premium eSIM data plans. Instant activation, reliable coverage.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppCTA />
        <Analytics />
      </body>
    </html>
  );
}
