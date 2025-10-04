import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Roboto_Mono } from "next/font/google"; // monospace pengganti
import "./globals.css";
import Navbar from "./components/layout/Navbar";

// Font utama → Raleway
const ralewaySans = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "700"], // bisa tambah "300", "500", dll sesuai kebutuhan
});

// Font monospace
const monoFont = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "The Monarch Tech",
  description: "Modern Site tech",
  icons: {
    icon: "/favicon.png", // favicon default
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ralewaySans.variable} ${monoFont.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
