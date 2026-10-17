"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [mounted, setMounted] = useState(false);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    setMounted(true);

    const moveGlow = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveGlow);

    return () => {
      window.removeEventListener("mousemove", moveGlow);
    };
  }, []);

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <>
      {/* Soft Glow */}
      <motion.div
        animate={{
          x: position.x - 60,
          y: position.y - 60,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 18,
        }}
        className="
          fixed
          top-0
          left-0
          w-30
          h-30
          rounded-full
          bg-red-500/20
          blur-3xl
          pointer-events-none
          z-9999
        "
      />

      {/* Tiny Core */}
      <motion.div
        animate={{
          x: position.x - 2,
          y: position.y - 2,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
        className="
          fixed
          top-0
          left-0
          w-1
          h-1
          rounded-full
          bg-red-400/70
          pointer-events-none
          z-9999
        "
      />
    </>
  );
}