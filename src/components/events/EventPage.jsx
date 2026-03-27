import React from "react";
import { motion } from "framer-motion";
import Divider from "../home/Divider";

export default function EventPage({ title, img, description }) {
  const parts = description.split("###");

  return (
    <div className="bg-[#0B1D3A] text-white">
      {/* Hero Section */}
      <div
        className="h-[450px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className=" px-10 py-6 mt-10 rounded-xl">
          <h1 className="text-5xl font-bold">{title}</h1>
        </div>
      </div>

      <Divider />

      {/* Content */}
      <div className="max-w-8xl mx-auto py-20 px-6 space-y-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold gold-shimmer-text mt-10"
        >
          GRAND AURA EVENTS
        </motion.h2>

        {/* First paragraphs */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl leading-9 text-gray-200 whitespace-pre-line"
        >
          {parts[0]}
        </motion.p>
      </div>
      <Divider />
    </div>
  );
}
