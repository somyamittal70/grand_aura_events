import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ClientPage from "./ClientPage";
import Divider from "../home/Divider";
import img from "../../assets/comedy.png";
import img1 from "../../assets/band.png";
import img2 from "../../assets/band.png";
import img3 from "../../assets/band.png";
import img4 from "../../assets/band.png";
import img5 from "../../assets/band.png";
import img6 from "../../assets/band.png";
import aboutImg from "../../assets/a1.jpg";

export default function HealthCare() {
  return (
    <div className="bg-[#0B1D3A] text-white">
      {/* 🔥 HERO SECTION */}
      <section className="relative h-[260px] sm:h-[320px] md:h-[90vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src={img}
          alt="Healthcare"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-4 sm:px-6">
          <motion.h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Healthcare <span className="gold-shimmer-text">Events</span>
          </motion.h1>

          <motion.p className="text-gray-300 max-w-sm sm:max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Delivering professional healthcare events with precision...
          </motion.p>
        </div>
      </section>

      <Divider />

      {/* 💎 ABOUT SECTION */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(207,175,75,0.12),transparent_70%)]"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center relative z-10">
          {/* LEFT IMAGE */}
          <motion.div className="relative group">
            <img
              src={aboutImg}
              alt="Healthcare Events"
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px]"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div className="text-center md:text-left">
            <p className="gold-shimmer-text text-sm sm:text-base font-semibold mb-3">
              About Healthcare Events
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-4 sm:mb-6 leading-snug">
              Delivering Precision-Driven <br /> Medical Event Experiences
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-6 sm:leading-8 mb-6">
              At GrandAura, we specialize in organizing healthcare
              conferences...
            </p>

            <p className="text-gray-300 text-sm sm:text-base leading-6 sm:leading-8 mb-8">
              From planning to execution, we focus on precision...
            </p>
          </motion.div>
        </div>
      </section>

      <Divider />

      {/* 🔥 KEY FEATURES */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 bg-[#09172E]">
        <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-4">
            Key <span className="gold-shimmer-text">Highlights</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Celebrating achievements with elegance...
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {[img1, img2, img3, img4, img5, img6].map((src, i) => (
            <motion.div
              key={i}
              className="group relative rounded-[20px] md:rounded-[25px] overflow-hidden"
            >
              <img
                src={src}
                className="w-full h-[200px] sm:h-[260px] md:h-[300px] object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <Divider />

      {/* 💎 SERVICES */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(207,175,75,0.12),transparent_70%)]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-4">
              What We <span className="gold-shimmer-text">Provide</span>
            </h2>
            <p className="text-gray-400 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base">
              Comprehensive healthcare event solutions...
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <motion.div
                key={i}
                className="p-6 sm:p-8 rounded-[20px] md:rounded-[25px] bg-[#0f2a52] border border-[#CFAF4B33]"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 gold-shimmer rounded-full flex items-center justify-center text-black font-bold">
                  {i + 1}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
                  {
                    [
                      "Venue & Setup",
                      "Equipment Coordination",
                      "AV Solutions",
                      "Guest Management",
                      "Live Streaming",
                      "End-to-End Execution",
                    ][i]
                  }
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Service description...
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
          Let’s Organize a Professional Healthcare Event
        </h2>

        <Link
          to="/contact"
          className="inline-block border border-[#CFAF4B] px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold relative overflow-hidden group"
        >
          <span className="relative z-10 group-hover:text-[#0B1D3A] transition">
            Get Started
          </span>
          <span className="absolute inset-0 gold-shimmer-btn opacity-0 group-hover:opacity-100 transition"></span>
        </Link>
      </section>

      <Divider />
    </div>
  );
}
