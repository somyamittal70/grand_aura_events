import React from "react";
import { Gift } from "lucide-react";
import { motion } from "framer-motion";

import a1 from "../../assets/a1.jpg";
import aboutus1 from "../../assets/better.jpg";
import aboutus2 from "../../assets/together.jpg";

export default function AboutUs() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative w-full h-[600px] flex items-center justify-center mb-5"
        style={{
          backgroundImage: `url(${a1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-white text-8xl font-semibold"
        >
          About Us
        </motion.h1>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-[#0B1D3A] pt-10 pb-50 px-10 mb-5">
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-between w-full left-[90px]"
          >
            <img
              src={aboutus1}
              alt=""
              className="w-[380px] h-[600px] object-cover rounded-[250px]"
            />

            <img
              src={aboutus2}
              alt=""
              className="w-[380px] h-[600px] object-cover rounded-[250px] absolute left-[420px] top-[190px]"
            />

            {/* ICON */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute left-[270px] top-[280px] bg-[#CFAF4B] w-[250px] h-[250px] rounded-full flex items-center justify-center text-white shadow-xl"
            >
              <Gift size={80} />
            </motion.div>
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mt-25"
          >
            <p className="text-[#CFAF4B] font-semibold text-2xl">About Us</p>

            <h2 className="text-5xl font-semibold text-white leading-tight mb-6">
              Professional Planning, Grand Execution
            </h2>

            <p className="text-xl text-white leading-8 mb-6">
              At GrandAura Events, we believe that every celebration deserves a
              touch of grandeur. From intimate gatherings to large-scale
              corporate functions, our passion lies in crafting seamless,
              memorable, and extraordinary experiences.
            </p>

            <p className="text-xl text-white leading-8 mb-8">
              Our dedicated team brings together expertise in event design,
              logistics, and hospitality to deliver flawless execution and
              exceptional service.
            </p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#CFAF4B] text-white text-lg px-9 py-5 rounded-full font-semibold hover:bg-[#a18633]"
            >
              More Info
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="bg-[#0B1D3A] py-50 px-20 mb-5">
        <div className="max-w-8xl mx-auto">

          <div className="border-t border-[#CFAF4B] mb-16"></div>

          <div className="grid md:grid-cols-3 gap-12 text-white">

            {[ 
              {
                title: "Mission",
                text: "To deliver unforgettable events that combine creativity, innovation, and precision exceeding client expectations."
              },
              {
                title: "Vision",
                text: "To be recognized as a leading name in event management, transforming ordinary moments into extraordinary experiences."
              },
              {
                title: "Teamwork",
                text: "At GrandAura Events, teamwork is our strength. Collaboration fuels creativity and excellence."
              }
            ].map((item, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`${
                  i !== 2 ? "border-r border-[#CFAF4B]" : ""
                } pr-10`}
              >
                <h2 className="text-6xl font-semibold mb-6">
                  {item.title}
                </h2>

                <p className="text-2xl leading-10">
                  {item.text}
                </p>
              </motion.div>

            ))}

          </div>
        </div>
      </section>
    </>
  );
}