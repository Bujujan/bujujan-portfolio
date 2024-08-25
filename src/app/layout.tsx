import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import grainImage from '@/assets/images/grain.jpg';


const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });
const calistoga = Calistoga({ subsets: ['latin'], variable: '--font-serif', weight: ['400']});

export const metadata: Metadata = {
  title: "Bujujan Abdellah",
  description: "My Protfolio Website",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">{children}</body>
    </html>
  );
}
