import Header from '@/components/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

/**
 * Desenvolvido pela PUBLISTR Marketing Digital.
 */
export const metadata = {
  title: 'JPTECH',
  description: 'Vendas de equipamentos de informática para o Brasil inteiro.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
