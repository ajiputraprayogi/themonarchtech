import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import LightRays from "./components/rbits/LightRay";

const ralewaySans = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const monoFont = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "The Monarch Tech",
  description: "Modern Site tech",
  icons: {
    icon: "/favicon.png",
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
        className={`${ralewaySans.variable} ${monoFont.variable} antialiased bg-black w-full min-h-screen overflow-hidden relative`}
      >
        {/* 🔹 LightRays jadi background penuh */}
        <div className="absolute inset-0 z-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="w-full h-full"
          />
        </div>

        {/* 🔹 Konten utama */}
        <Navbar />
        <main className="w-full h-full flex flex-col items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
