"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const members = [
  { name: "Bhargav", role: "Captain" },
  { name: "Gowtham O.R", role: "Team Manager" },
  { name: "Likith", role: "Non-Tech" },
  { name: "Parikshith", role: "Vehicle Dynamics" },
  { name: "Pranav", role: "Drive Train" },
  { name: "Kaushik", role: "Electrical" },
  { name: "Micah", role: "Design" },
];

const divisions = [
  {
    title: "Technical Division",
    items: ["Electrical", "Drivetrain", "Vehicle Dynamics"],
  },
  {
    title: "Design Division",
    items: ["Engineering Design", "Simulation - CFD, FEA"],
  },
  {
    title: "Non-Technical Division",
    items: [
      "Marketing",
      "Sponsorships",
      "Cost Report",
      "Business Presentation",
      "Social Media",
      "Management",
    ],
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative py-40 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-red-600/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-20 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-red-500 uppercase tracking-[0.35em] mb-4 font-medium">
            Our Team
          </p>

          <h2 className="font-heading text-5xl md:text-7xl text-white">
            Meet The
            <span className="text-red-500"> Engineers</span>
          </h2>

          <p className="mt-8 text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            A passionate team of innovators, designers and engineers
            building high-performance Formula Student race cars.
          </p>
        </motion.div>

        {/* ===================== TEAM LEADS ===================== */}

        <div className="mt-24">

          {/* Top Row */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {members.slice(0, 4).map((member, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="
                  group
                  relative
                  w-[250px]
                  mx-auto
                  rounded-[24px]
                  overflow-hidden
                  border
                  border-white/10
                  bg-[#111111]
                  hover:border-red-500/40
                  transition-all
                  duration-500
                "
              >

                {/* Top Accent */}

                <div className="absolute top-0 left-0 w-full h-[3px] bg-red-600" />

                {/* Background Glow */}

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.18),transparent_60%)]" />

                {/* Badge Area */}

                <div className="relative h-[145px] flex items-center justify-center">

                  <Image
                    src="/images/team/badge.png"
                    alt="Team Badge"
                    width={150}
                    height={150}
                    className="
                      object-contain
                      transition-all
                      duration-500
                      group-hover:scale-110
                      drop-shadow-[0_0_20px_rgba(220,38,38,0.35)]
                    "
                  />

                </div>

                {/* Bottom */}

                <div className="bg-[#1a1a1a] px-6 py-5">

                  <p className="text-[11px] uppercase tracking-[0.35em] text-red-500 font-semibold">
                    {member.role}
                  </p>

                  <h3 className="mt-2 text-3xl font-black uppercase text-white leading-none">
                    {member.name}
                  </h3>

                  <div className="mt-5 h-[3px] w-16 bg-red-600 rounded-full group-hover:w-full transition-all duration-500" />

                </div>

                <div className="absolute inset-0 rounded-[24px] border border-red-500/30 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

              </motion.div>

            ))}

          </div>

          {/* Bottom Row */}

          <div className="flex flex-wrap justify-center gap-8 mt-8">

            {members.slice(4).map((member, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="
                  group
                  relative
                  w-[250px]
                  rounded-[24px]
                  overflow-hidden
                  border
                  border-white/10
                  bg-[#111111]
                  hover:border-red-500/40
                  transition-all
                  duration-500
                "
              >

                <div className="absolute top-0 left-0 w-full h-[3px] bg-red-600" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.18),transparent_60%)]" />

                <div className="relative h-[145px] flex items-center justify-center">

                  <Image
                    src="/images/team/badge.png"
                    alt="Team Badge"
                    width={150}
                    height={150}
                    className="
object-contain
drop-shadow-[0_0_20px_rgba(220,38,38,0.35)]
group-hover:scale-110
group-hover:rotate-2
transition-all
duration-500
"
                  />

                </div>

                <div className="bg-[#1a1a1a] px-6 py-5">

                  <p className="text-[11px] uppercase tracking-[0.35em] text-red-500 font-semibold">
                    {member.role}
                  </p>

                  <h3 className="mt-2 text-3xl font-black uppercase text-white leading-none">
                    {member.name}
                  </h3>

                  <div className="mt-5 h-[3px] w-16 bg-red-600 rounded-full group-hover:w-full transition-all duration-500" />

                </div>

                <div className="absolute inset-0 rounded-[24px] border border-red-500/30 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

              </motion.div>

            ))}

          </div>

        </div>
                {/* ================= TEAM STRUCTURE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-36"
        >
          <div className="text-center mb-20">
            <p className="text-red-500 uppercase tracking-[0.35em] mb-4">
              Organization
            </p>

            <h2 className="font-heading text-5xl md:text-6xl text-white">
              Team
              <span className="text-red-500"> Structure</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {divisions.map((division, index) => (

              <motion.div
                key={division.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.8,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
                  bg-white/5
                  border
                  border-white/10
                  backdrop-blur-xl
                  rounded-3xl
                  p-10
                  hover:border-red-500/40
                  transition-all
                  duration-500
                "
              >
                <h3 className="text-3xl font-bold text-red-500 mb-8">
                  {division.title}
                </h3>

                <ul className="space-y-5">

                  {division.items.map((item) => (

                    <li
                      key={item}
                      className="flex items-center gap-3 text-lg text-gray-300"
                    >
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                      {item}
                    </li>

                  ))}

                </ul>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}