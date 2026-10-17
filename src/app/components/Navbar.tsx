"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "contact",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className="mx-4 md:mx-8 mt-4 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl">

          <div className="flex items-center justify-between px-6 py-4">

            {/* Logo */}
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="DSCE Motorsports Logo"
                width={120}
                height={60}
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-10 text-sm uppercase tracking-wider">

              {navItems.map((item, index) => {
                const sectionId = item.href.replace("#", "");

                return (
                  <motion.li
                    key={index}
                    whileHover={{ y: -2 }}
                    className="relative"
                  >
                    <Link
                      href={item.href}
                      className={`
                        transition duration-300
                        ${
                          activeSection === sectionId
                            ? "text-red-500"
                            : "text-white/80 hover:text-red-500"
                        }
                      `}
                    >
                      {item.label}
                    </Link>

                    <span
                      className={`
                        absolute
                        left-0
                        -bottom-2
                        h-0.5
                        bg-red-500
                        transition-all
                        duration-300
                        ${
                          activeSection === sectionId
                            ? "w-full"
                            : "w-0"
                        }
                      `}
                    />
                  </motion.li>
                );
              })}

            </ul>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden text-white"
            >
              {mobileMenu ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenu && (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            fixed
            top-24
            left-4
            right-4
            z-40
            rounded-3xl
            border
            border-white/10
            bg-black/90
            backdrop-blur-2xl
            p-8
          "
        >
          <ul className="flex flex-col gap-6 text-center uppercase tracking-widest text-lg">

            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className="text-white/80 hover:text-red-500 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}

          </ul>
        </motion.div>
      )}
    </>
  );
}