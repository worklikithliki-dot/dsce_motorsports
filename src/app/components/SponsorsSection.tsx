"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const sponsors = [
  "/images/sponsors/sponsor1.png",
  "/images/sponsors/sponsor2.png",
  "/images/sponsors/sponsor3.png",
  "/images/sponsors/sponsor4.png",
  "/images/sponsors/sponsor5.png",
  "/images/sponsors/sponsor6.png",
  "/images/sponsors/sponsor7.png",
  "/images/sponsors/sponsor8.png",
  "/images/sponsors/sponsor9.png",
  "/images/sponsors/sponsor10.png",
  "/images/sponsors/sponsor11.png",
  "/images/sponsors/sponsor12.png",
  "/images/sponsors/sponsor13.png",
  "/images/sponsors/sponsor14.png",
];

export default function SponsorsSection() {
  return (
    <section
      id="sponsors"
      className="relative py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/sponsors-bg.jpg"
          alt="Sponsors Background"
          fill
          priority
          className="object-cover object-center brightness-75"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Red Tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-red-950/15 to-black/60" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.85)_100%)]" />
      </div>

      {/* Red Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 w-[900px] h-[900px] bg-red-600/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-red-500 uppercase tracking-[0.4em] text-xs md:text-sm mb-4">
            Sponsors
          </p>

          <h2 className="font-heading text-5xl md:text-7xl">
            Powered By
            <span className="text-red-500"> Innovation</span>
          </h2>
        </motion.div>
        
      
        {/* Sponsorship Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-gray-300 text-lg leading-relaxed">
              We are expecting a generous contribution to help us achieve our
              goals for the <span className="text-red-500 font-semibold">2026 Formula Student Competition</span>.
              Every contribution, regardless of size, directly supports the
              design, manufacturing, testing, and competition of our race car.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-14">

            {/* Gold Tier */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative overflow-hidden rounded-3xl border border-yellow-500/30 bg-white/5 backdrop-blur-xl p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-red-500/5"></div>

              <div className="relative z-10">
                <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm mb-3">
                  Flagship Tier
                </p>

                <h3 className="font-heading text-4xl text-white">
                  GOLD
                </h3>

                <div className="w-16 h-1 bg-yellow-400 rounded-full my-6"></div>

                <p className="text-gray-300 leading-8">
                  Gold Sponsors receive <span className="text-white font-semibold">
                  exclusive brand visibility</span> through
                  <span className="text-red-500"> prime logo placement on the sleeve of the team jersey</span>,
                  ensuring maximum exposure across competitions,
                  promotional events, media coverage, and digital platforms.
                </p>
              </div>
            </motion.div>

            {/* Silver Tier */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative overflow-hidden rounded-3xl border border-gray-400/30 bg-white/5 backdrop-blur-xl p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300/10 via-transparent to-red-500/5"></div>

              <div className="relative z-10">
                <p className="uppercase tracking-[0.35em] text-gray-300 text-sm mb-3">
                  Sponsorship Tier
                </p>

                <h3 className="font-heading text-4xl text-white">
                  SILVER
                </h3>

                <div className="w-16 h-1 bg-gray-300 rounded-full my-6"></div>

                <p className="text-gray-300 leading-8">
                  Silver Sponsors receive
                  <span className="text-white font-semibold">
                    {" "}prominent logo placement on the race car
                  </span>{" "}
                  together with placement on the
                  <span className="text-red-500">
                    {" "}back of the official team jersey
                  </span>,
                  providing excellent brand visibility throughout the season and
                  at Formula Student events.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mt-10"
          >
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 backdrop-blur-xl p-6 text-center">
              <p className="text-gray-300 italic">
                <span className="text-red-500 font-semibold">Note:</span>{" "}
                We are flexible with our sponsorship tiers, and any contribution
                is greatly appreciated. Even a small contribution from your end
                makes a significant difference in helping our team design,
                manufacture, and compete at the highest level.
              </p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Sponsors Intro */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="text-center mt-24"
>
  <p className="text-red-500 uppercase tracking-[0.4em] text-xs md:text-sm mb-4">
    Our Partners
  </p>

  <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
    Our sponsors and partners empower <span className="text-white font-semibold">DSCE Motorsports</span> to
    innovate, engineer, and compete at the highest level in
    <span className="text-red-500"> Formula Student.</span>
  </p>
</motion.div>

        {/* Sponsors */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-24">
          {sponsors.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 flex items-center justify-center hover:border-red-500/40 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-b from-red-500/10 to-transparent transition duration-500" />

              <div className="relative w-full h-20">
                <Image
                  src={logo}
                  alt="Sponsor Logo"
                  fill
                  className="object-contain transition duration-500 group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}