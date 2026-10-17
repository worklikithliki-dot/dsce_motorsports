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

function GallerySlider({
  title,
  images,
  current,
  setCurrent,
}: {
  title: string;
  images: string[];
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}) {
  const next = () =>
    setCurrent((prev) => (prev + 1) % images.length);

  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  return (
    <section className="max-w-7xl mx-auto px-6 pb-32">

      <div className="text-center mb-14">
        <p className="uppercase tracking-[0.35em] text-red-500 text-sm">
          Gallery
        </p>

        <h2 className="mt-3 font-heading text-5xl md:text-6xl">
          Season <span className="text-red-500">{title}</span>
        </h2>
      </div>

      <div className="relative h-[650px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">

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
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0"
          >
            <Image
              src={images[current]}
              alt={`${title} ${current + 1}`}
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Previous */}
        <button
          onClick={prev}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 hover:bg-red-600 transition"
        >
          <ChevronLeft className="mx-auto" />
        </button>

        {/* Next */}
        <button
          onClick={next}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 hover:bg-red-600 transition"
        >
          <ChevronRight className="mx-auto" />
        </button>

        {/* Counter */}
        <div className="absolute bottom-6 right-6 z-20 px-5 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/10">

          <span className="font-medium">
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

  useEffect(() => {
    const slider2024 = setInterval(() => {
      setCurrent2024((prev) => (prev + 1) % season2024.length);
    }, 6000);

    const slider2025 = setInterval(() => {
      setCurrent2025((prev) => (prev + 1) % season2025.length);
    }, 6000);

    return () => {
      clearInterval(slider2024);
      clearInterval(slider2025);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="absolute inset-0">

        <Image
          src="/images/sponsors-bg.jpg"
          alt="Gallery Background"
          fill
          priority
          className="object-cover object-center brightness-75"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-red-950/15 to-black/60" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.85)_100%)]" />

      </div>

      {/* Red Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 w-[900px] h-[900px] bg-red-600/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10">

        {/* Hero */}
        <section className="pt-40 pb-24 text-center">

          <h1 className="text-6xl md:text-8xl font-heading">
            <span className="text-white">DSCE </span>
            <span className="text-red-500">GALLERY</span>
          </h1>

          <p className="mt-6 text-xl text-gray-400">
            Moments of Innovation, Racing and Team Spirit.
          </p>

        </section>

        <GallerySlider
          title="2024"
          images={season2024}
          current={current2024}
          setCurrent={setCurrent2024}
        />
                <GallerySlider
          title="2025"
          images={season2025}
          current={current2025}
          setCurrent={setCurrent2025}
        />

        {/* Season 2026 */}
        <section className="max-w-7xl mx-auto px-6 pb-40">

          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.35em] text-red-500 text-sm">
              Gallery
            </p>

            <h2 className="mt-3 font-heading text-5xl md:text-6xl">
              Season <span className="text-red-500">2026</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="
              h-[450px]
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              flex
              items-center
              justify-center
              relative
              overflow-hidden
            "
          >
            {/* Glow */}
            <div className="absolute w-[500px] h-[500px] bg-red-600/10 blur-3xl rounded-full" />

            <div className="relative text-center">
              <h3 className="font-heading text-6xl md:text-8xl">
                Coming
                <span className="text-red-500"> Soon</span>
              </h3>

              <p className="mt-6 text-gray-400 text-xl">
                Stay tuned for our Formula Bharat 2026 journey.
              </p>
            </div>
          </motion.div>

        </section>

      </div>
    </main>
  );
}