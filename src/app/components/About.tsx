"use client";

import { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  animate,
  useInView,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CountUp({
  from = 0,
  to,
  suffix = "",
}: {
  from?: number;
  to: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(from, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate(value) {
        if (ref.current) {
          ref.current.textContent = `${Math.floor(value)}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [from, to, suffix, isInView]);

  return (
    <span ref={ref}>
      {from}
      {suffix}
    </span>
  );
}

export default function About() {
  const achievements = [
    "1st Place in Business Presentation - SAE 2024",
    "2nd Place in Business Presentation - SAE 2025",
    "Secured Overall 14th Position out of 100 Teams in the competition",
    "Successfully Completed the Endurance Event at Buddh International Circuit",
  ];

  const [currentAchievement, setCurrentAchievement] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentAchievement(
        (prev) => (prev + 1) % achievements.length
      );
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentAchievement]);

  const nextAchievement = () => {
    setCurrentAchievement(
      (prev) => (prev + 1) % achievements.length
    );
  };

  const prevAchievement = () => {
    setCurrentAchievement((prev) =>
      prev === 0 ? achievements.length - 1 : prev - 1
    );
  };

  const stats = [
    {
      value: 50,
      suffix: "+",
      label: "Team Members",
    },
    {
      value: 1000,
      suffix: "+",
      label: "Hours of Engineering",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-40 px-6 bg-black overflow-hidden"
    >
      {/* Circuit Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/images/buddh-track.svg"
          alt="Buddh Circuit"
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[1100px]
            opacity-[0.035]
          "
        />
      </div>

      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-125 h-125 bg-red-600/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-red-500 uppercase tracking-[0.4em] mb-4 text-[10px] md:text-xs">
            To engineer and deliver high performance, consistently surpassing
            expectations in design, execution, and competition.
          </p>

          <h2 className="font-heading text-5xl md:text-7xl">
            About
            <span className="text-red-500"> Us</span>
          </h2>

          {/* Achievement Slider */}
          <div className="mt-14 flex items-center justify-center gap-6">

            {/* Previous */}
            <button
              onClick={prevAchievement}
              className="w-14 h-14 rounded-full border border-white/10 bg-white/5 hover:bg-red-600 hover:border-red-600 transition-all duration-300 flex items-center justify-center"
            >
              <ChevronLeft size={26} />
            </button>

            {/* Achievement */}
            <div className="w-full max-w-5xl h-36 flex items-center justify-center overflow-hidden">

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentAchievement}
                  initial={{
                    opacity: 0,
                    y: 30,
                    filter: "blur(12px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -30,
                    filter: "blur(12px)",
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="w-full"
                >
                  <p className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-200 leading-relaxed">
                    {achievements[currentAchievement]}
                  </p>
                </motion.div>
              </AnimatePresence>

            </div>

            {/* Next */}
            <button
              onClick={nextAchievement}
              className="w-14 h-14 rounded-full border border-white/10 bg-white/5 hover:bg-red-600 hover:border-red-600 transition-all duration-300 flex items-center justify-center"
            >
              <ChevronRight size={26} />
            </button>

          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-8 mt-24 max-w-4xl mx-auto">

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                rounded-3xl
                p-8
                hover:border-red-500/40
                transition-all
                duration-500
              "
            >
              <h3 className="text-5xl md:text-6xl font-black text-red-500">
                <CountUp
                  to={stat.value}
                  suffix={stat.suffix}
                />
              </h3>

              <p className="mt-4 text-gray-400 text-xl">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}