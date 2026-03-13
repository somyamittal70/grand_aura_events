import React from "react";
import { motion } from "framer-motion";

export default function Highlights() {

  const highlights = [
    {
      num: "01",
      title: "End-to-End Event",
      desc: "From concept to execution we handle every detail with precision and creativity.",
    },
    {
      num: "02",
      title: "Bespoke Event Design",
      desc: "Customized themes, decor, and styling tailored to your vision and personality",
    },
    {
      num: "03",
      title: "Experienced Planning Team",
      desc: "A passionate team of professionals dedicated to seamless coordination",
    },
    {
      num: "04",
      title: "Luxury Weddings",
      desc: "Expertly curated experiences that reflect elegance, culture, and emotion",
    },
    {
      num: "05",
      title: "Corporate Events & Brand",
      desc: "Professional management for conferences, product launches, and corporate gatherings.",
    },
    {
      num: "06",
      title: "Vendor & Venue",
      desc: "Strong partnerships with premium vendors, venues, and service providers across regions",
    },
    {
      num: "07",
      title: "Creative Concepts & Styling",
      desc: "Unique ideas, innovative décor, and artistic styling to make your event unforgettable.",
    },
    {
      num: "08",
      title: "On-Time, On-Budget",
      desc: "Professional management ensuring timely completion within your planned budget",
    },
    {
      num: "09",
      title: "Creative Concepts & Styling",
      desc: "Unique ideas, innovative décor, and artistic styling to make your event unforgettable.",
    },
    {
      num: "10",
      title: "On-Time, On-Budget",
      desc: "Professional management ensuring timely completion within your planned budget",
    },
  ];

  return (
    <section className="bg-[#0B1D3A] py-20 px-6 mb-5">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-6xl font-semibold text-white">
          Professional Highlights
        </h2>

        <p className="text-white mt-3 text-xl">
          Planned to Perfection, Styled with Passion.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="max-w-8xl mx-auto flex flex-wrap justify-center gap-12 ml-20 mr-20">

        {highlights.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="text-center relative"
          >

            {/* Number Circle */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-24 h-24 bg-[#CFAF4B] text-white flex items-center justify-center rounded-full text-3xl font-bold mx-auto shadow-lg"
            >
              {item.num}
            </motion.div>

            {/* Line */}
            <div className="w-[3px] h-8 bg-[#CFAF4B] mx-auto"></div>

            {/* Card */}
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.25)"
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-center relative w-[350px] bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="font-semibold text-2xl mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-xl leading-relaxed">
                {item.desc}
              </p>

            </motion.div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}