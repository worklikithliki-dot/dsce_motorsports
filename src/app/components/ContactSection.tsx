"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const { error } = await supabase
        .from("contacts")
        .insert([
          {
            name,
            email,
            message,
          },
        ]);

      if (error) throw error;

      alert("Message sent successfully!");

      setName("");
      setEmail("");
      setMessage("");

    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-black overflow-hidden"
    >
      {/* Buddh Circuit Background */}
<div className="absolute inset-0 pointer-events-none">
  <img
    src="/images/buddh-track.svg"
    alt="Circuit Outline"
    className="
absolute
right-[-200px]
top-1/2
-translate-y-1/2
w-[1200px]
opacity-[0.03]
rotate-[12deg]
"
  />
</div>
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 w-700px h-700px bg-red-600/10 blur-3xl rounded-full -translate-x-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-red-500 uppercase tracking-[0.3em] mb-4 text-sm">
            Contact Us
          </p>

          <h2 className="font-heading text-5xl md:text-7xl">
            Let's Build
            <span className="text-red-500"> Together</span>
          </h2>

          <p className="mt-8 text-gray-400 max-w-3xl mx-auto text-lg">
            Connect with DSCE Motorsports for sponsorships,
            collaborations, technical partnerships, and recruitment
            opportunities.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10"
          >
            <h3 className="text-3xl font-bold mb-10">
              Get In Touch
            </h3>

            <div className="space-y-8">

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                  <Mail className="text-red-500" />
                </div>

                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-widest">
                    Email
                  </p>

                  <a
  href="mailto:dscemotorsports@gmail.com?subject=Inquiry%20from%20DSCE%20Motorsports%20Website"
  className="mt-2 inline-block text-lg text-white hover:text-red-500 transition-colors duration-300"
>
  dscemotorsports@gmail.com
</a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                  <Phone className="text-red-500" />
                </div>

                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-widest">
                    Phone
                  </p>

                  <a
  href="tel:+919876543210"
  className="mt-2 inline-block text-lg text-white hover:text-red-500 transition-colors duration-300"
>
  +91 9876543210
</a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                  <MapPin className="text-red-500" />
                </div>

                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-widest">
                    Location
                  </p>

                  <a
  href="https://www.google.com/maps/search/?api=1&query=Dayananda+Sagar+College+of+Engineering+Bengaluru+Karnataka"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-2 inline-block text-lg text-white hover:text-red-500 transition-colors duration-300"
>
  Dayananda Sagar College of Engineering,
  <br />
  Bengaluru, Karnataka
</a>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="flex gap-5 mt-10">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/dscemotorsports/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-2xl border border-white/10 bg-black/40 flex items-center justify-center hover:bg-red-500 hover:border-red-500 hover:scale-110 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
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
                className="w-16 h-16 rounded-2xl border border-white/10 bg-black/40 flex items-center justify-center hover:bg-red-500 hover:border-red-500 hover:scale-110 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-white"
                >
                  <path d="M4.98 3.5C4.98 4.604 4.104 5.5 3 5.5S1.02 4.604 1.02 3.5 1.896 1.5 3 1.5s1.98.896 1.98 2zM1.5 8h3V22h-3V8zm7 0h2.877v1.909h.041C11.82 8.91 13.207 8 15.09 8 19.02 8 20 10.582 20 13.943V22h-3v-7.091c0-1.691-.03-3.868-2.357-3.868-2.36 0-2.722 1.843-2.722 3.748V22h-3V8z" />
                </svg>
              </a>

            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10"
          >
            <form 
            onSubmit={handleSubmit}
            className="space-y-6">

              <div>
                <label className="text-sm text-gray-400 uppercase tracking-widest">
                  Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full mt-3 bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 uppercase tracking-widest">
                  Email
                </label>

                <input
                   type="email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="w-full mt-3 bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 uppercase tracking-widest">
                  Message
                </label>

                <textarea
                 rows={5}
                 value={message}
                 onChange={(e) => setMessage(e.target.value)}
                 placeholder="Write your message..."
                 className="w-full mt-3 bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition resize-none"
                />
              </div>

              <button
  type="submit"
  disabled={loading}
  className="
    group
    relative
    overflow-hidden
    px-8
    py-4
    rounded-2xl
    bg-red-600
    hover:bg-red-700
    transition
    shadow-lg
    shadow-red-500/30
    font-semibold
    disabled:opacity-50
    disabled:cursor-not-allowed
  "
>
  <span className="relative z-10">
    {loading ? "Sending..." : "Send Message"}
  </span>

  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
</button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}