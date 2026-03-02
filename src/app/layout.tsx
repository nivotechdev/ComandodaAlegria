import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Preloader from '@/components/preloader';


export const metadata: Metadata = {
  title: 'Comando da Alegria',
  description: 'Personagens vivos e recreação completa para transformar sua festa em um evento inesquecível.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Lexend:wght@400;500;600&family=Pacifico&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Preloader />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
