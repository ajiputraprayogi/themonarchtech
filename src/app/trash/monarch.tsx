// app/page.tsx
"use client";

import { motion } from "framer-motion";
import FuzzyText from "../components/rbits/Fuzzy";
import ElectricBorder from "../components/rbits/ElectricBorder";

export default function Home() {
  return (
    <>
      <main className="w-screen h-screen relative flex items-center justify-center overflow-hidden bg-gray-50">

        {/* Background gambar samar-samar */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/bg.png')", // ganti dengan path gambar
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1, // samar-samar
            filter: "blur(4px)", // blur halus biar nggak ganggu teks
            zIndex: 0,
          }}
        />

        <ElectricBorder
          color="#867b83ff"
          speed={0.5}
          chaos={0.5}
          thickness={2}
          style={{ borderRadius: 16, zIndex: 10 }}
          className={"flex items-center justify-center"}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-black m-5 font-[var(--font-outfit)] text-6xl md:text-8xl lg:text-9xl font-extrabold text-center z-10 relative"
          >
            <FuzzyText
              baseIntensity={0.3}
              hoverIntensity={0.7}
              enableHover={true}
            >
              TheMonarchtech
            </FuzzyText>
          </motion.h1>
        </ElectricBorder>
      </main>
    </>
  );
}
