'use client'; // força execução só no cliente

import { useEffect, useState } from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Abel } from 'next/font/google';
import "@/i18n/i18n";

const abel = Abel({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-abel',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Injeta o script do Google Translate dinamicamente só no cliente
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.head.appendChild(script);

    // Injeta a função global googleTranslateElementInit
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement({
        pageLanguage: 'pt',
        layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: true,
        multilanguagePage: true,
      }, 'google_translate_element');
    };

    return () => {
      document.head.removeChild(script);
      delete (window as any).googleTranslateElementInit;
    };
  }, []);

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${abel.variable} bg-background text-foreground font-abel min-h-screen`}>
        {children}

        {/* Renderiza só no cliente para evitar erro */}
        {mounted && <div id="google_translate_element" style={{ display: 'none' }} />}
      </body>
    </html>
  );
}
