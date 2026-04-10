import React from "react";
import { motion } from "framer-motion";
import about1 from "../../assets/a1.jpeg";
import { Link } from "react-router-dom";

export default function About() {
  return (
<<<<<<< HEAD
    <section className="bg-[#0B1D3A] py-16 sm:py-20 md:py-30 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 mb-20">
        {/* LEFT SIDE IMAGES */}
        <div className="relative flex justify-center md:justify-start scale-[0.8] sm:scale-90 md:scale-100 origin-center">
          {/* Left Image */}
          <img
            src={about1}
            alt=""
            className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] 
    h-[300px] sm:h-[360px] md:h-[420px] lg:h-[470px] 
    object-cover rounded-[120px] sm:rounded-[160px] md:rounded-[200px]"
          />

          {/* Right Image */}
          <img
            src={about2}
            alt=""
            className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] 
    h-[300px] sm:h-[360px] md:h-[420px] lg:h-[470px] 
    object-cover rounded-[120px] sm:rounded-[160px] md:rounded-[200px] 
    absolute left-[55%] top-[25%]"
          />

          {/* Center Icon */}
          <div
            className="absolute left-[45%] top-[50%] -translate-x-1/2 -translate-y-1/2 
    gold-shimmer 
    w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] md:w-[140px] md:h-[140px] lg:w-[170px] lg:h-[170px] 
    rounded-full flex items-center justify-center text-white shadow-xl"
          >
            <Gift
              size={20}
              className="sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] lg:w-[35px] lg:h-[35px]"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="max-w-xl md:max-w-3xl mt-10 text-center md:text-left mx-auto md:mx-0">
          <p className="gold-shimmer-text font-semibold text-sm sm:text-base md:text-lg mb-2">
            About Us
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-snug md:leading-tight mb-6">
            Professional Planning, Grand Execution
          </h2>

          <p className="text-sm sm:text-base text-white leading-6 sm:leading-7 mb-6">
            At GrandAura Events, we believe that every celebration deserves a
            touch of grandeur. From intimate gatherings to large-scale corporate
            functions, our passion lies in crafting seamless, memorable, and
            extraordinary experiences.
          </p>

          <p className="text-sm sm:text-base text-white leading-6 sm:leading-7 mb-8">
            Our dedicated team brings together expertise in event design,
            logistics, and hospitality to deliver flawless execution and
            exceptional service.
          </p>

          <Link to="/about">
            <button className="gold-shimmer text-white px-5 sm:px-6 md:px-7 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition transform hover:scale-105 hover:bg-[#a18633] duration-300">
=======
    <section className="bg-[#0B1D3A] py-20 md:py-28 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-14 md:gap-20">
        {/* ================= LEFT EDITORIAL IMAGE DESIGN ================= */}
        <div className="flex justify-center md:justify-start">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* GOLD SHIMMER FRAME */}
            <div className="gold-shimmer p-[3px] rounded-[30px]">
              {/* IMAGE CONTAINER */}
              <div className="relative overflow-hidden rounded-[28px] bg-[#0B1D3A]">
                <motion.img
                  src={about1}
                  alt="event"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="
            w-[300px] sm:w-[360px] md:w-[420px]
            h-[420px] sm:h-[480px] md:h-[520px]
            object-cover
            hover:shadow-[0_30px_80px_rgba(212,175,55,0.35)]
          "
                />

                {/* Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl md:max-w-2xl text-center md:text-left mx-auto md:mx-0"
        >
          <p className="gold-shimmer-text font-semibold text-sm sm:text-base md:text-lg mb-3 tracking-wide">
            About Us
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
            Professional Planning,
            <span className="block gold-shimmer-text">Grand Execution</span>
          </h2>

          <p className="text-sm sm:text-base text-white/80 leading-7 mb-6">
            At GrandAura Events, we believe every celebration deserves elegance
            and perfection. From intimate gatherings to large-scale corporate
            functions, we craft seamless and unforgettable experiences with
            creativity and precision.
          </p>

          <p className="text-sm sm:text-base text-white/80 leading-7 mb-10">
            Our expert team blends event design, logistics, and hospitality to
            deliver flawless execution and exceptional service that leaves a
            lasting impression.
          </p>

          <Link to="/about">
            <button className="gold-shimmer text-white px-7 py-3 rounded-full font-semibold transition duration-300 hover:scale-105 shadow-lg">
>>>>>>> fe4c9d8 (Updated project)
              More Info
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
