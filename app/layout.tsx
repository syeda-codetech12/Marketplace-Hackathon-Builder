
import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";

import { Poppins } from 'next/font/google';
import Header from "./components/Header";
import ClientProviders from "./actions/ClientProviders";
import Providers from "./Providers";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Customize weights
  display: "swap"
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
        <ClientProviders>
        <Header/>
        {children}
        <Footer/>
        </ClientProviders>
        </Providers>
      </body>
    </html>
  );
}
