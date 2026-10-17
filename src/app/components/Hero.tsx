"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ".hero-title",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
      }
    );

    gsap.fromTo(
      ".hero-subtitle",
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.5,
        duration: 1.2,
      }
    );

    gsap.fromTo(
      ".hero-smalltext",
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.8,
        duration: 1,
      }
    );
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/videos/f1.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main Red Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[700px]
          h-[700px]
          bg-red-600/30
          blur-[220px]
          rounded-full
        "
      />

      {/* Secondary Glow */}
      <div
        className="
          absolute
          left-[30%]
          top-[50%]
          w-[300px]
          h-[300px]
          bg-red-500/20
          blur-[140px]
          rounded-full
        "
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Main Heading */}
        <h1
          className="
            hero-title
            font-heading
            text-5xl
            md:text-[5.5rem]
            font-black
            leading-none
            tracking-tight
          "
        >
          <span
            className="
              text-white
              drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]
            "
          >
            DSCE
          </span>

          <br />

          <span
            className="
              text-red-500
              drop-shadow-[0_0_30px_rgba(255,0,0,0.45)]
            "
          >
            MOTORSPORTS
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="
            hero-subtitle
            font-body
            mt-8
            text-xl
            md:text-3xl
            font-semibold
            text-white/90
          "
        >
          Official Formula Student Team
        </p>

        {/* Small Text */}
        <p
          className="
            hero-smalltext
            font-body
            mt-3
            text-base
            md:text-xl
            text-gray-300
          "
        >
          Dayananda Sagar College of Engineering
        </p>

        {/* Scroll Text */}
        <motion.p
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="
            font-body
            mt-24
            tracking-[0.4em]
            text-sm
            text-gray-400
            uppercase
          "
        >
          Scroll
        </motion.p>
      </div>
    </section>
  );
}