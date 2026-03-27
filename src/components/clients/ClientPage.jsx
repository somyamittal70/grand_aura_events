import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ClientPage({ title, img, description, highlights, services, ctaText }) {
  return (
    <div className="bg-[#0B1D3A] text-white">

      {/* 🔥 HERO */}
      <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <img src={img} alt="" className="absolute w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            {title} <span className="gold-shimmer-text">Events</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </div>
      </section>

      {/* 💎 HIGHLIGHTS */}
      <section className="py-24 px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.07, y: -8 }}
              className="group p-8 rounded-2xl bg-[#0f2a52] border border-[#CFAF4B33] text-center"
            >
              <div className="h-[2px] w-0 bg-[#CFAF4B] mx-auto mb-6 group-hover:w-16 transition-all"></div>
              <h3 className="group-hover:text-[#CFAF4B]">{item}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔥 SERVICES */}
      <section className="py-24 px-10 bg-[#09172E]">
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          {services.map((item, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-[#CFAF4B]">✔</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="py-24 text-center">
        <Link
          to="/contact"
          className="border border-[#CFAF4B] px-8 py-3 rounded-full relative overflow-hidden group"
        >
          <span className="relative z-10 group-hover:text-[#0B1D3A]">
            {ctaText}
          </span>
          <span className="absolute inset-0 gold-shimmer-btn opacity-0 group-hover:opacity-100 transition"></span>
        </Link>
      </section>

    </div>
  );
}