"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

// Minimal, modern, responsive navbar with hamburger and backdrop blur.
// TailwindCSS + Framer Motion. Komponen ini siap ditempel di folder components.

export type NavLink = {
    label: string;
    href: string;
};

export default function Navbar({
    // brand = "Monarch",
    links = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Work", href: "/portfolio" },
        { label: "Contact", href: "/contact" },
    ],
}: {
    brand?: string;
    links?: NavLink[];
}) {
    const [open, setOpen] = useState(false);

    // Animation variants untuk menu mobile.
    const panel = {
        hidden: { opacity: 0, y: -12 },
        visible: { opacity: 1, y: 0, transition: { stiffness: 400, damping: 30 } },
        exit: { opacity: 0, y: -8, transition: { duration: 0.18 } },
    };

    return (
        <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8">
            {/* Container utama navbar: transparan + backdrop blur */}
            <nav className="mx-auto max-w-6xl bg-white/6 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-3 flex items-center justify-between gap-4">
                {/* Brand */}
                <div className="flex items-center gap-3">
                    {/* Gambar/logo di dalam bulatan gradient */}
                    <span className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 via-indigo-500 to-cyan-400 flex items-center justify-center shadow-md overflow-hidden">
                        <Image
                            src="/favicon.png" // ganti dengan path gambar kamu
                            alt="Brand Logo"
                            width={24} // ukuran gambar (wajib diisi)
                            height={24}
                            className="object-contain"
                        />
                    </span>
                </div>


                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-6">
                    {links.map((l) => (
                        <li key={l.href}>
                            <Link
                                href={l.href}
                                className="relative text-sm text-white/90 hover:text-purple-400 transition-colors 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:w-full after:h-[1px] after:bg-purple-700/90 after:scale-x-0
               after:origin-left after:transition-transform after:duration-300 
               hover:after:scale-x-100"
                            >
                                {l.label}
                            </Link>
                        </li>

                    ))}
                </ul>

                {/* Action + Hamburger */}
                <div className="flex items-center gap-3">
                    {/* CTA contoh, optional */}
                    <a
                        href="/portfolio"
                        className="hidden md:inline-block text-white text-sm px-3 py-1.5 rounded-lg backdrop-blur-sm border border-white/6 transition"
                    >
                        Our Work
                    </a>

                    {/* Hamburger button untuk mobile */}
                    <button
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        onClick={() => setOpen((s) => !s)}
                        className="md:hidden p-2 rounded-lg transition"
                    >
                        {/* Icon berubah: menu -> close */}
                        {open ? <HiX className="w-6 h-6 text-white" /> : <HiMenu className="w-6 h-6 text-white" />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu overlay: menggunakan AnimatePresence untuk animasi keluar-masuk */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="mobile-panel"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 md:hidden"
                        onClick={() => setOpen(false)}
                    >
                        {/* Backdrop blur + dark overlay */}
                        <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" />

                        {/* Panel yang berisi link */}
                        <motion.div
                            className="absolute left-4 right-4 top-20 rounded-2xl bg-white/6 border border-white/6 p-6 mx-4"
                            variants={panel}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()} // supaya klik di panel nggak menutup overlay
                        >
                            <ul className="flex flex-col gap-4">
                                {links.map((l) => (
                                    <li key={l.href}>
                                        <a
                                            href={l.href}
                                            className="block text-white/95 text-lg font-medium py-2 px-2 rounded-lg hover:bg-white/4 transition"
                                            onClick={() => setOpen(false)}
                                        >
                                            {l.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6">
                                <a
                                    href="/portfolio"
                                    className="block text-center text-sm px-4 py-2 rounded-lg bg-white/10 border border-white/6"
                                    onClick={() => setOpen(false)}
                                >
                                    Our Work
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}