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
    <section className="bg-[#0B1D3A] py-16 sm:py-20 px-4 sm:px-6">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 sm:mb-14"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
          Professional Highlights
        </h2>

        <p className="text-white mt-2 sm:mt-3 text-sm sm:text-base md:text-lg">
          Planned to Perfection, Styled with Passion.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
        {highlights.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Number Circle */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
          gold-shimmer text-white flex items-center justify-center 
          rounded-full text-sm sm:text-base md:text-lg font-bold mx-auto shadow-lg"
            >
              {item.num}
            </motion.div>

            {/* Line */}
            <div className="w-[2px] h-4 sm:h-5 md:h-6 gold-shimmer-bg mx-auto"></div>

            {/* Card */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0px 15px 30px rgba(0,0,0,0.2)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-xl p-4 sm:p-5 shadow-lg"
            >
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
