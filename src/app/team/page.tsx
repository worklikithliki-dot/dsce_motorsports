"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TeamSection from "../components/TeamSection";

export default function TeamPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/team-bg.jpg"
        alt="Team Background"
        fill
        priority
        className="object-cover opacity-40"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/80" />

 {/* Red Streak */}
<motion.div
  initial={{ scaleX: 1 }}
  animate={{ scaleX: 0 }}
  transition={{
    duration: 1.6,
    delay: 0.1,
    ease: "easeInOut",
  }}
  className="
    absolute
    inset-0
    bg-red-600
    opacity-20
    origin-left
    z-19
  "
/>

{/* Black Wipe */}
<motion.div
  initial={{ scaleX: 1 }}
  animate={{ scaleX: 0 }}
  transition={{
    duration: 1.4,
    ease: "easeInOut",
  }}
  className="
    absolute
    inset-0
    bg-black
    origin-left
    z-20
  "
/>

      {/* Red Glow */}
      <div className="absolute inset-0 z-2">
        <div className="absolute left-1/2 top-1/2 w-800px h-800px bg-red-600/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <TeamSection />
      </div>

    </main>
  );
}