"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Team", href: "/team" },
    { name: "Gallery", href: "/gallery" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-red-950/20 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.08),transparent_65%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 py-20">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">

          {/* LEFT COLUMN */}
          <div>
            <Image
              src="/images/logo.png"
              alt="DSCE Motorsports"
              width={180}
              height={80}
              className="object-contain"
            />

            <p className="mt-6 text-gray-400 leading-8 max-w-sm">
              Official Formula Student Team of Dayananda Sagar College of
              Engineering. Designing, building and racing innovation.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/dscemotorsports/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-white"
                >
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/dsce-motorsports/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-white"
                >
                  <path d="M4.98 3.5C4.98 4.604 4.104 5.5 3 5.5S1.02 4.604 1.02 3.5 1.896 1.5 3 1.5s1.98.896 1.98 2zM1.5 8h3V22h-3V8zm7 0h2.877v1.909h.041C11.82 8.91 13.207 8 15.09 8 19.02 8 20 10.582 20 13.943V22h-3v-7.091c0-1.691-.03-3.868-2.357-3.868-2.36 0-2.722 1.843-2.722 3.748V22h-3V8z" />
                </svg>
              </a>
            </div>

            {/* Back To Top */}
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="mt-8 flex items-center gap-2 border border-white/20 px-5 py-3 text-sm text-white hover:border-red-500 hover:text-red-500 transition-all duration-300"
            >
              <ArrowUp size={16} />
              BACK TO TOP
            </button>
          </div>

          {/* CENTER COLUMN */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              Navigation
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-red-500 transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT COLUMN */}
<div>
  <h3 className="text-2xl font-bold text-white mb-8">
    Contact
  </h3>

  <div className="space-y-6">

    {/* Email */}
    <a
      href="mailto:dscemotorsports@gmail.com"
      className="group flex items-center gap-3"
    >
      <Mail
        size={18}
        className="text-red-500 transition group-hover:scale-110"
      />
      <span className="text-gray-400 group-hover:text-red-500 transition">
        dscemotorsports@gmail.com
      </span>
    </a>

    {/* Phone */}
    <a
      href="tel:+918618852728"
      className="group flex items-center gap-3"
    >
      <Phone
        size={18}
        className="text-red-500 transition group-hover:scale-110"
      />
      <span className="text-gray-400 group-hover:text-red-500 transition">
        +91 8618852728
      </span>
    </a>

    {/* Location */}
    <a
      href="https://maps.google.com/?q=Dayananda+Sagar+College+of+Engineering+Bengaluru"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-3"
    >
      <MapPin
        size={18}
        className="text-red-500 mt-1 transition group-hover:scale-110"
      />
      <span className="text-gray-400 group-hover:text-red-500 transition">
        Dayananda Sagar College of Engineering,
        <br />
        Bengaluru, Karnataka
      </span>
    </a>
 </div>
</div>

</div>

{/* Bottom Copyright */}
<div className="border-t border-white/10 mt-16 pt-6 text-center">
  <p className="text-gray-500 text-sm">
    © {new Date().getFullYear()} DSCE Motorsports. All Rights Reserved.
  </p>
</div>

</div>

</footer>
);
}