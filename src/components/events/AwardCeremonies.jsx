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

export default function AwardCeremonies() {
  const description = `
At GrandAura, we create prestigious award ceremonies that celebrate excellence and honor achievements in style. From grand stage setups to seamless event execution, we ensure every moment reflects elegance, recognition, and unforgettable experiences.
`;

  return (
    <div className="bg-[#0B1D3A] text-white">
      {/* 🔥 MAIN */}
      <EventPage title="Award Ceremonies" img={img} description={description} />

      {/* 💎 KEY HIGHLIGHTS */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10">
        {/* Heading */}
        <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4">
            Key <span className="gold-shimmer-text">Highlights</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Celebrating achievements with elegance, prestige, and perfection
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto">
          {[
            {
              title: "Grand Stage Design",
              img: img1,
            },
            {
              title: "Award Presentation Setup",
              img: img2,
            },
            {
              title: "Celebrity Hosting",
              img: img3,
            },
            {
              title: "Live Entertainment",
              img: img4,
            },
            {
              title: "Premium Hospitality",
              img: img5,
            },
            {
              title: "Flawless Execution",
              img: img6,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="group relative rounded-[20px] sm:rounded-[25px] md:rounded-[30px] overflow-hidden shadow-xl"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px] object-cover transform group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

              {/* Content */}
              <div className="absolute bottom-0 p-4 sm:p-5 md:p-6 text-white w-full">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                  {item.title}
                </h3>

                {/* Gold Line */}
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
        <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
            What We <span className="gold-shimmer-text">Provide</span>
          </h2>
        </div>

        {/* List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8 text-gray-300 max-w-3xl mx-auto">
          {[
            "Award ceremony concept & theme design",
            "Stage & lighting production",
            "Audio-visual setup",
            "Host & entertainment arrangements",
            "Guest & VIP management",
            "End-to-end event execution",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-white/5 backdrop-blur-md border border-[#CFAF4B22] rounded-xl px-4 py-3 sm:px-5 sm:py-4 hover:scale-[1.02] transition duration-300"
            >
              {/* Icon */}
              <span className="gold-shimmer-text text-lg mt-[2px]">✔</span>

              {/* Text */}
              <p className="text-sm sm:text-base md:text-lg leading-6">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* 🔥 WHY CHOOSE US */}
      <section className="bg-[#09172E] py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 relative overflow-hidden">
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

            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-2">
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
                whileHover={{ y: -6 }}
                className="group relative p-6 sm:p-8 md:p-10 rounded-[20px] sm:rounded-[25px] border border-[#CFAF4B33] bg-[#0f2a52] hover:bg-[#132f5c] transition duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Top Line */}
                  <div className="h-[2px] w-8 sm:w-10 bg-[#CFAF4B] mb-4 sm:mb-6 group-hover:w-16 sm:group-hover:w-20 transition-all duration-500"></div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3 sm:mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-300 leading-6 sm:leading-7">
                    {item.desc}
                  </p>
                </div>

                {/* Button */}
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
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-8 md:mb-10 text-white">
          Let’s Celebrate Excellence Together
        </h2>

        {/* Button */}
        <Link
          to="/contact"
          className="inline-block border border-[#CFAF4B] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base relative overflow-hidden group shadow-[0_0_15px_rgba(207,175,75,0.2)]"
        >
          {/* Text */}
          <span className="relative z-10 group-hover:text-[#0B1D3A] transition">
            Plan Your Award Ceremony
          </span>

          {/* Shimmer */}
          <span className="absolute inset-0 gold-shimmer-btn opacity-0 group-hover:opacity-100 transition duration-500"></span>
        </Link>
      </section>

      <Divider />
    </div>
  );
}
