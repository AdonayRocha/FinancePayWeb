import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/navbar/NavBar';
import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'FinancePay',
  description: 'Sua plataforma financeira',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <StyledComponentsRegistry>
          <div className="layout">
            <NavBar />
            <main>{children}</main>
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
