import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ClientPage from "./ClientPage";
import Divider from "../home/Divider";
import img from "../../assets/comedy.png";
import img1 from "../../assets/cultural.png";
import img2 from "../../assets/cultural.png";
import img3 from "../../assets/cultural.png";

export default function CaseStudies() {
  return (
    <div className="bg-[#0B1D3A] text-white">
      {/* 🔥 HERO */}
      <section className="relative h-[260px] sm:h-[320px] md:h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <img src={img} alt="" className="absolute w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-4 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          >
            Case <span className="gold-shimmer-text">Studies</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 max-w-sm sm:max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base"
          >
            Explore how GrandAura has transformed events into extraordinary
            experiences...
          </motion.p>
        </div>
      </section>

      <Divider />

      {/* 💎 INTRO */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(207,175,75,0.12),transparent_70%)]"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.p className="text-[#CFAF4B] tracking-[2px] sm:tracking-[3px] uppercase text-xs sm:text-sm mb-3 sm:mb-4">
            Our Portfolio
          </motion.p>

          <motion.h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-snug mb-4 sm:mb-6">
            Success Stories That <br />
            <span className="gold-shimmer-text">Define Excellence</span>
          </motion.h2>

          <motion.div className="h-[2px] mx-auto bg-[#CFAF4B] mb-4 sm:mb-6 w-[60px] sm:w-[80px]" />

          <motion.p className="text-gray-400 text-sm sm:text-base md:text-lg leading-6 sm:leading-8">
            Each project we undertake reflects our commitment...
          </motion.p>
        </div>
      </section>

      <Divider />

      {/* 🔥 CASE STUDY CARDS */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(207,175,75,0.12),transparent_70%)]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white mb-4">
              Our <span className="gold-shimmer-text">Case Studies</span>
            </h2>
            <p className="text-gray-400 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base">
              A glimpse into the exceptional events...
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {[img1, img2, img3].map((src, i) => (
              <motion.div
                key={i}
                className="group relative rounded-[20px] md:rounded-[30px] overflow-hidden shadow-xl"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-[220px] sm:h-[280px] md:h-[350px] object-cover"
                />

                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition duration-500"></div>

                <div className="absolute bottom-0 p-4 sm:p-6 md:p-8 text-white">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">
                    {
                      [
                        "Corporate Conference",
                        "Luxury Wedding",
                        "Product Launch",
                      ][i]
                    }
                  </h3>

                  <p className="text-gray-300 text-xs sm:text-sm leading-5 sm:leading-6 mb-3 sm:mb-4">
                    {
                      [
                        "Delivered a seamless multi-day conference...",
                        "Designed a premium wedding experience...",
                        "Executed a high-impact product launch...",
                      ][i]
                    }
                  </p>

                  <div className="h-[2px] w-0 bg-[#CFAF4B] group-hover:w-16 transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* 💎 PROCESS */}
      <section className="py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-10 bg-[#09172E] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(207,175,75,0.12),transparent_70%)]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white mb-4">
              Our <span className="gold-shimmer-text">Approach</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 text-center">
            {[1, 2, 3, 4].map((_, i) => (
              <motion.div
                key={i}
                className="p-6 sm:p-8 rounded-2xl md:rounded-3xl bg-[#0f2a52] border border-[#CFAF4B33]"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-4 sm:mb-6 rounded-full gold-shimmer flex items-center justify-center text-black font-bold text-sm sm:text-base md:text-lg">
                  {i + 1}
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
                  {
                    [
                      "Understanding Vision",
                      "Creative Planning",
                      "Execution Strategy",
                      "Flawless Delivery",
                    ][i]
                  }
                </h3>

                <p className="text-gray-300 text-xs sm:text-sm">
                  Step description...
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* 🚀 CTA */}
      <section className="py-16 sm:py-20 md:py-28 text-center px-4">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-6 sm:mb-10">
          Let’s Create Your Next Success Story
        </h2>

        <Link
          to="/contact"
          className="inline-block border border-[#CFAF4B] px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold relative overflow-hidden group"
        >
          <span className="relative z-10 group-hover:text-[#0B1D3A] transition">
            Start Your Project
          </span>
          <span className="absolute inset-0 gold-shimmer-btn opacity-0 group-hover:opacity-100 transition"></span>
        </Link>
      </section>

      <Divider />
    </div>
  );
}
