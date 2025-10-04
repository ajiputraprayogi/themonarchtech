"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function PortfolioCard({ title, description, image, link }: PortfolioCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-purple-900 via-purple-800 to-black transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative w-full h-64 md:h-48 lg:h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl p-4 flex flex-col justify-end">
        <h3 className="text-white text-lg font-bold">{title}</h3>
        <p className="text-purple-200 text-sm mt-1">{description}</p>
      </div>
    </motion.a>
  );
}
