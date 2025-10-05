"use client";

import { motion } from "framer-motion";
import LightRay from '../components/rbits/LightRay';

export default function AboutPage() {
  return (<>
    <div className="bg-black w-full h-screen flex items-center justify-center">
        
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center mt-10"
      >
        
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
          We Don’t Just Build Website,
          <span className="text-purple-400"> We Craft Experiences. </span>
        </h1>
        {/* <p className="text-lg md:text-xl text-gray-300">
         Started from a small idea, we grew into a team of passionate builders, designers, and dreamers.
         <span className="text-purple-400"> Our goal is simple, </span>To create technology that feels alive, personal, and human.
        </p> */}
      </motion.div>
    </div>
      </>
  );
}
