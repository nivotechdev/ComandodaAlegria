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
        <link rel="icon" href="https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/sign/Comando%20da%20Alegria/favicon%20comando%20svg.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOWY1OGE2Ni03MDFhLTRhNDQtOWJhZC0zOGRkNmVkYTNhODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDb21hbmRvIGRhIEFsZWdyaWEvZmF2aWNvbiBjb21hbmRvIHN2Zy5zdmciLCJpYXQiOjE3NzI0OTgyMzIsImV4cCI6MjI3NzU0NzQyMzJ9.2utahiYW2Nuk0mI6zOs32vjq3MoGN12pi6PmMiI49hU" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/sign/Comando%20da%20Alegria/favicon%20comando%20svg.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOWY1OGE2Ni03MDFhLTRhNDQtOWJhZC0zOGRkNmVkYTNhODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDb21hbmRvIGRhIEFsZWdyaWEvZmF2aWNvbiBjb21hbmRvIHN2Zy5zdmciLCJpYXQiOjE3NzI0OTgyMzIsImV4cCI6MjI3NzU0NzQyMzJ9.2utahiYW2Nuk0mI6zOs32vjq3MoGN12pi6PmMiI49hU" />
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
