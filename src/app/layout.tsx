import type { Metadata } from "next";
import "./globals.css";
import "../styles/variables.scss"
import { Playfair_Display, Open_Sans, Poppins } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: '400',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '400',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
});


export const metadata: Metadata = {  //SEO
  title: "BarberCase",
  description: "Landing page para serviços e agendamentos de barbearia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${playfair.className} ${openSans.className} ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
