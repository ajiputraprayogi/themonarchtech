"use client"
import Orb from "./components/layout/Orb";

export default function Home() {
  return (
    <>
      <main className="bg-black w-full h-screen flex items-center justify-center mb-[100vh]">
        <div className="relative w-full max-w-[600px] h-[600px]">
          <Orb
            hoverIntensity={2}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
          <h1 className="absolute inset-0 flex items-center justify-center text-gray-400 text-2xl md:text-4xl font-semibold text-center pointer-events-none">
            The Monarch Tech
          </h1>
        </div>
      </main>
    </>
  );
}
