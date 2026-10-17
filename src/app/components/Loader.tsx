"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("dsce-loader");

    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("dsce-loader", "true");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-9999 bg-black flex items-center justify-center overflow-hidden"
        >
          <div className="absolute w-500px h-500px bg-red-600/20 blur-3xl rounded-full"></div>

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
                rotate: -10,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
            >
              <Image
                src="/images/logo.png"
                alt="DSCE Motorsports Logo"
                width={220}
                height={220}
                className="object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 220 }}
              transition={{ duration: 1.5 }}
              className="h-2px bg-red-500 rounded-full mt-8"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-5 text-gray-400 tracking-[0.4em] uppercase text-sm"
            >
              DSCE MOTORSPORTS
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}