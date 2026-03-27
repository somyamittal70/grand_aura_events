import React from "react";
import { motion } from "framer-motion";
import { galleryImages } from "../data/galleryImages";

export default function AllPhotos() {
  return (
    <div className="min-h-screen bg-[#0B1D3A] sm:px-10 py-50">

      {/* Heading */}
      <h1 className="text-5xl gold-shimmer-text sm:text-4xl text-center text-white mb-10 font-semibold">
        All Portfolio Photos
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

        {galleryImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-xl"
          >
            <img
              src={img}
              alt=""
              className="w-full h-60 object-cover rounded-xl hover:brightness-110 transition duration-300"
            />
          </motion.div>
        ))}

      </div>
    </div>
  );
}