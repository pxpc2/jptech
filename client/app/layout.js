import Header from '@/components/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { ToastContainer } from 'react-toastify';

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Analytics />
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
