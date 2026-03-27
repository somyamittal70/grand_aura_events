import React from "react";
import EventPage from "./EventPage";
import img from "../../assets/GalaDinner.jpeg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Divider from "../home/Divider";
import img1 from "../../assets/livedj.png";
import img2 from "../../assets/livedj.png";
import img3 from "../../assets/livedj.png";
import img4 from "../../assets/livedj.png";
import img5 from "../../assets/livedj.png";
import img6 from "../../assets/livedj.png";

export default function Exhibitions() {
  const description = `
At GrandAura, we design and manage impactful exhibitions that showcase your brand with elegance and precision. From booth design and layout planning to visitor engagement and on-site execution, we ensure a seamless experience that leaves a lasting impression.
`;

  return (
    <div className="bg-[#0B1D3A] text-white">
      {/* 🔥 MAIN EVENT PAGE */}
      <EventPage title="Exhibitions" img={img} description={description} />

      {/* 💎 KEY HIGHLIGHTS */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10">
        {/* Heading */}
        <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4">
            Key <span className="gold-shimmer-text">Highlights</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg px-2">
            Creating engaging exhibition experiences that captivate audiences
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-10">
          {[
            { title: "Custom Booth Design", img: img1 },
            { title: "Brand Display & Setup", img: img2 },
            { title: "Visitor Engagement", img: img3 },
            { title: "Interactive Experiences", img: img4 },
            { title: "On-site Coordination", img: img5 },
            { title: "Lead Generation Support", img: img6 },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-[18px] sm:rounded-[22px] md:rounded-[25px] overflow-hidden shadow-xl"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover transform group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

              {/* Content */}
              <div className="absolute bottom-0 p-4 sm:p-5 md:p-6 text-white w-full">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">
                  {item.title}
                </h3>

                {/* Animated Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60px" }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="h-[2px] bg-[#CFAF4B]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Divider />

      {/* 🔥 SERVICES INCLUDED */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 bg-[#09172E]">
        {/* Heading */}
        <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            What We <span className="gold-shimmer-text">Provide</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-10 text-gray-300 max-w-3xl mx-auto">
          {[
            "Exhibition booth design & fabrication",
            "Venue & space management",
            "Branding & signage",
            "Visitor flow management",
            "Logistics & setup",
            "On-site event support",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 sm:gap-4">
              <span className="gold-shimmer-text text-sm sm:text-base mt-[2px]">
                ✔
              </span>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* 🔥 WHY CHOOSE US */}
      <section className="bg-[#09172E] py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-10 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(207,175,75,0.1),transparent_70%)]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6">
              Why Choose <span className="text-[#CFAF4B]">GrandAura</span>
            </h2>

            <p className="text-gray-400 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
              We go beyond planning events — we craft experiences that reflect
              elegance, precision, and unforgettable moments.
            </p>
          </motion.div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {[
              {
                title: "Luxury Experience",
                desc: "We bring premium designs, exclusive concepts, and a touch of elegance to every event.",
              },
              {
                title: "Perfect Execution",
                desc: "From planning to execution, every detail is handled with precision and professionalism.",
              },
              {
                title: "Creative Vision",
                desc: "Our team transforms your ideas into visually stunning and memorable experiences.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group relative p-6 sm:p-8 md:p-10 rounded-[18px] sm:rounded-[22px] md:rounded-[25px] border border-[#CFAF4B33] bg-[#0f2a52] hover:bg-[#132f5c] transition duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Top Line */}
                  <div className="h-[2px] w-8 sm:w-10 bg-[#CFAF4B] mb-4 sm:mb-6 group-hover:w-16 sm:group-hover:w-20 transition-all duration-500"></div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3 sm:mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm sm:text-base leading-6 sm:leading-7">
                    {item.desc}
                  </p>
                </div>

                {/* BUTTON */}
                <Link
                  to="/contact"
                  className="mt-6 sm:mt-8 inline-block text-center border border-[#CFAF4B] text-white px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold relative overflow-hidden group/btn"
                >
                  <span className="relative z-10 group-hover/btn:text-[#0B1D3A] transition">
                    Get Started
                  </span>

                  <span className="absolute inset-0 gold-shimmer-btn opacity-0 group-hover/btn:opacity-100 transition"></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* 🚀 CTA */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-8 md:mb-10 leading-snug">
          Let’s Showcase Your Brand with Excellence
        </h2>

        {/* Button */}
        <Link
          to="/contact"
          className="inline-block border border-[#CFAF4B] px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base relative overflow-hidden group"
        >
          <span className="relative z-10 group-hover:text-[#0B1D3A] transition">
            Book Your Exhibition
          </span>

          <span className="absolute inset-0 gold-shimmer-btn opacity-0 group-hover:opacity-100 transition"></span>
        </Link>
      </section>

      <Divider />
    </div>
  );
}
