"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function SocialsPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // Animasi muncul sekali, durasi 0.8s
  }, []);

  const socials = [
    { platform: "Instagram", url: "https://instagram.com/themonarchtech", icon: <FaInstagram /> },
    // { platform: "Facebook", url: "https://facebook.com", icon: <FaFacebook /> },
    // { platform: "Twitter", url: "https://twitter.com", icon: <FaTwitter /> },
    // { platform: "LinkedIn", url: "https://linkedin.com", icon: <FaLinkedin /> },
  ];

  const SocialCard = ({ platform, url, icon }) => (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      data-aos="fade-up"
      className="group flex items-center gap-4 p-4 bg-black/30 rounded-xl shadow-md transition-transform"
    >
      <div className="text-2xl text-purple-400">{icon}</div>
      <span className="text-white font-semibold text-lg">{platform}</span>
    </a>
  );

  return (
    <main className="bg-black min-h-screen flex items-center justify-center p-6">
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl"> */}
        {socials.map((s) => (
          <SocialCard key={s.platform} {...s} />
        ))}
      {/* </div> */}
    </main>
  );
}
