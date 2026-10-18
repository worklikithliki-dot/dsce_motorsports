"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const season2024 = [
  "/images/gallery/2024/1.jpg",
  "/images/gallery/2024/2.jpg",
  "/images/gallery/2024/3.jpg",
  "/images/gallery/2024/4.jpg",
  "/images/gallery/2024/5.jpg",
  "/images/gallery/2024/6.jpg",
  "/images/gallery/2024/7.jpg",
];

const season2025 = [
  "/images/gallery/2025/1.jpg",
  "/images/gallery/2025/2.jpg",
  "/images/gallery/2025/3.jpg",
  "/images/gallery/2025/4.jpg",
  "/images/gallery/2025/5.jpg",
  "/images/gallery/2025/6.jpg",
  "/images/gallery/2025/7.jpg",
  "/images/gallery/2025/8.jpg",
  "/images/gallery/2025/9.jpg",
  "/images/gallery/2025/10.jpg",
  "/images/gallery/2025/11.jpg",
];

const season2026 = [
  "/images/gallery/2026/1.jpg",
  "/images/gallery/2026/2.jpg",
  "/images/gallery/2026/3.jpg",
  "/images/gallery/2026/4.jpeg",
  "/images/gallery/2026/5.jpeg",
  "/images/gallery/2026/6.jpg",
  "/images/gallery/2026/7.jpg",
  "/images/gallery/2026/8.jpeg",
];

type GallerySliderProps = {
  title: string;
  images: string[];
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
};

function GallerySlider({
  title,
  images,
  current,
  setCurrent,
}: GallerySliderProps) {
  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="mx-auto max-w-7xl px-6 pb-32">
      {/* Season Heading */}
      <div className="mb-14 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-red-500">
          Gallery
        </p>

        <h2 className="mt-3 font-heading text-5xl md:text-6xl">
          Season <span className="text-red-500">{title}</span>
        </h2>
      </div>

      {/* Slideshow */}
      <div className="relative h-[350px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl sm:h-[450px] lg:h-[650px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{
              opacity: 0,
              filter: "blur(18px)",
              scale: 1.05,
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              scale: 1,
            }}
            exit={{
              opacity: 0,
              filter: "blur(18px)",
              scale: 0.98,
            }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0"
          >
            <Image
              src={images[current]}
              alt={`DSCE Motorsports Season ${title} - Photo ${current + 1}`}
              fill
              priority={current === 0}
              sizes="(max-width: 768px) 100vw, 1280px"
              className="object-cover"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Previous Button */}
        <button
          type="button"
          onClick={prev}
          aria-label={`Previous Season ${title} photo`}
          className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-xl transition hover:bg-red-600 sm:left-6 sm:h-14 sm:w-14"
        >
          <ChevronLeft size={26} />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={next}
          aria-label={`Next Season ${title} photo`}
          className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-xl transition hover:bg-red-600 sm:right-6 sm:h-14 sm:w-14"
        >
          <ChevronRight size={26} />
        </button>

        {/* Season Label */}
        <div className="absolute bottom-6 left-6 z-20">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">
            DSCE Motorsports
          </p>

          <p className="mt-1 text-2xl font-semibold sm:text-3xl">
            Season <span className="text-red-500">{title}</span>
          </p>
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-6 right-4 z-20 rounded-full border border-white/10 bg-black/60 px-4 py-2 backdrop-blur-xl sm:right-6 sm:px-5">
          <span className="font-medium tabular-nums">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}

export default function GalleryPage() {
  const [current2024, setCurrent2024] = useState(0);
  const [current2025, setCurrent2025] = useState(0);
  const [current2026, setCurrent2026] = useState(0);

  // Automatically rotate each season's slideshow every 6 seconds.
  useEffect(() => {
    const slider2024 = setInterval(() => {
      setCurrent2024((prev) => (prev + 1) % season2024.length);
    }, 6000);

    const slider2025 = setInterval(() => {
      setCurrent2025((prev) => (prev + 1) % season2025.length);
    }, 6000);

    const slider2026 = setInterval(() => {
      setCurrent2026((prev) => (prev + 1) % season2026.length);
    }, 6000);

    return () => {
      clearInterval(slider2024);
      clearInterval(slider2025);
      clearInterval(slider2026);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/sponsors-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-75"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-red-950/15 to-black/60" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.85)_100%)]" />
      </div>

      {/* Red Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Page Hero */}
        <section className="px-6 pb-24 pt-40 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-6xl md:text-8xl"
          >
            <span className="text-white">DSCE </span>
            <span className="text-red-500">GALLERY</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg text-gray-400 sm:text-xl"
          >
            Moments of Innovation, Racing and Team Spirit.
          </motion.p>
        </section>

        {/* Season 2024 */}
        <GallerySlider
          title="2024"
          images={season2024}
          current={current2024}
          setCurrent={setCurrent2024}
        />

        {/* Season 2025 */}
        <GallerySlider
          title="2025"
          images={season2025}
          current={current2025}
          setCurrent={setCurrent2025}
        />

        {/* Season 2026 */}
        <GallerySlider
          title="2026"
          images={season2026}
          current={current2026}
          setCurrent={setCurrent2026}
        />
      </div>
    </main>
  );
}