import Header from '@/components/Header';
import './globals.css';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { ToastContainer } from 'react-toastify';

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
        <link rel="stylesheet" href="https://use.typekit.net/ufo2hph.css" />
      </head>
      <body>
        <Header />
        {children}
        <Analytics />
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
