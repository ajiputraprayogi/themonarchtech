"use client";

import LightRay from '../components/rbits/LightRay';
import { motion } from 'framer-motion';

export default function PortfolioPage() {
  return (
    <main className='bg-black w-full h-screen flex items-center justify-center overflow-hidden relative'>
      {/* LightRay Background */}
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <LightRay
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* Teks besar di tengah */}
      <motion.h1
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl md:text-8xl font-extrabold text-purple-400 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Incoming
      </motion.h1>
    </main>
  );
}
