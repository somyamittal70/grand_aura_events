import React from "react";
import { Gift } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Divider from "../../components/home/Divider";

import a1 from "../../assets/a1.jpg";
import aboutus1 from "../../assets/better.jpg";
import aboutus2 from "../../assets/together.jpg";
import img1 from "../../assets/band.png";
import img2 from "../../assets/comedy.png";
import img3 from "../../assets/livedj.png";

export default function AboutUs() {
  return (
    <>
      {/* BANNER */}
      <section className="relative w-full h-[250px] sm:h-[320px] md:h-[400px] overflow-hidden">
        <img src={a1} alt="banner" className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl text-white font-semibold">
            About Us
          </h1>
        </div>
      </section>

      <Divider />

      {/* ABOUT SECTION */}
      <section className="bg-[#0B1D3A] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-20">
          {/* LEFT IMAGES */}
          <div className="relative flex justify-center md:justify-start scale-[0.8] sm:scale-90 md:scale-100 origin-center">
            <img
              src={aboutus1}
              alt=""
              className="w-[200px] sm:w-[240px] md:w-[300px] 
          h-[320px] sm:h-[380px] md:h-[470px] 
          object-cover rounded-[120px] sm:rounded-[160px] md:rounded-[200px]"
            />

            <img
              src={aboutus2}
              alt=""
              className="w-[200px] sm:w-[240px] md:w-[300px] 
          h-[320px] sm:h-[380px] md:h-[470px] 
          object-cover rounded-[120px] sm:rounded-[160px] md:rounded-[200px] 
          absolute left-[55%] top-[25%]"
            />

            <div
              className="absolute left-[45%] top-[50%] -translate-x-1/2 -translate-y-1/2 
        gold-shimmer w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[170px] md:h-[170px] 
        rounded-full flex items-center justify-center text-white shadow-xl"
            >
              <Gift
                size={24}
                className="sm:w-[30px] sm:h-[30px] md:w-[35px] md:h-[35px]"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-xl md:max-w-3xl text-center md:text-left mx-auto md:mx-0">
            <p className="gold-shimmer-text font-semibold text-sm sm:text-base md:text-lg mb-2">
              About Us
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-snug mb-6">
              Professional Planning, Grand Execution
            </h2>

            <p className="text-sm sm:text-base text-white leading-6 sm:leading-7 mb-6">
              At GrandAura Events, we believe that every celebration deserves a
              touch of grandeur...
            </p>

            <p className="text-sm sm:text-base text-white leading-6 sm:leading-7 mb-2">
              Our dedicated team brings together expertise in event design...
            </p>

            <Link
              to="/contact"
              className="mt-6 sm:mt-8 inline-block text-center border border-[#CFAF4B] text-white px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold relative overflow-hidden group/btn"
            >
              <span className="relative z-10 group-hover/btn:text-[#0B1D3A] transition">
                Contact Us
              </span>

              <span className="absolute inset-0 gold-shimmer-btn opacity-0 group-hover/btn:opacity-100 transition"></span>
            </Link>
          </div>
        </div>
      </section>

      <Divider />

      {/* MISSION / VISION */}
      <section className="bg-[#0B1D3A] py-20 sm:py-28 md:py-40 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white mb-4">
              Our <span className="gold-shimmer-text"> Core Values </span>
            </h2>

            <p className="text-gray-400 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base">
              The principles that define our approach...
            </p>
          </div>

          <div className="gold-shimmer-line mb-10 sm:mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 text-white">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className={`relative ${i !== 2 ? "gold-border md:pr-10" : ""}`}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6">
                  {["Mission", "Vision", "Teamwork"][i]}
                </h2>

                <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-8">
                  {
                    [
                      "To deliver unforgettable events...",
                      "To be recognized as a leading name...",
                      "At GrandAura Events, teamwork is our strength...",
                    ][i]
                  }
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* WHY CHOOSE US */}
      <section className="bg-[#09172E] py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(207,175,75,0.1),transparent_70%)]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white mb-6">
              Why Choose <span className="text-[#CFAF4B]">GrandAura</span>
            </h2>

            <p className="text-gray-400 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
              We go beyond planning events...
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="group relative p-6 sm:p-8 md:p-10 rounded-[20px] md:rounded-[25px] border border-[#CFAF4B33] bg-[#0f2a52]"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
                  {
                    [
                      "Luxury Experience",
                      "Perfect Execution",
                      "Creative Vision",
                    ][i]
                  }
                </h3>

                <p className="text-gray-300 text-sm sm:text-base">
                  {
                    [
                      "We bring premium designs...",
                      "From planning to execution...",
                      "Our team transforms your ideas...",
                    ][i]
                  }
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* SIGNATURE EVENTS */}
      <section className="bg-[#0B1D3A] py-20 sm:py-28 md:py-40 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white mb-4">
              Our <span className="text-[#CFAF4B]">Signature Events</span>
            </h2>

            <p className="text-gray-400 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base">
              A glimpse into the extraordinary events...
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {[img1, img2, img3].map((src, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[20px] md:rounded-[30px]"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-[250px] sm:h-[320px] md:h-[400px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />
    </>
  );
}
