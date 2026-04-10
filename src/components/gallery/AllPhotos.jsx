<<<<<<< HEAD
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
=======
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Image, Video } from "lucide-react";
import api from "../../api/axios";

export default function AllPhotos() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(null);

  const fetchGallery = async () => {
    try {
      setLoading(true);

      const response = await api.get("/gallery");

      if (response.data.status) {
        setGalleryItems(response.data.data || []);
      }
    } catch (error) {
      console.error("Gallery fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const nextItem = () => {
    setCurrentIndex((prev) =>
      prev === galleryItems.length - 1 ? 0 : prev + 1
    );
  };

  const prevItem = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-[#0B1D3A] px-4 sm:px-10 py-32 sm:py-40">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl gold-shimmer-text text-center text-white mb-10 font-semibold">
        All Portfolio Photos
      </h1>

      {/* Loading */}
      {loading ? (
        <div className="text-center text-white py-16">Loading gallery...</div>
      ) : galleryItems.length === 0 ? (
        <div className="text-center text-white/70 py-16">
          No gallery items found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-xl relative group cursor-pointer"
              onClick={() => setCurrentIndex(index)}
            >
              {/* Media */}
              {item.type === "video" ? (
                <video
                  src={item.file_url}
                  className="w-full h-60 object-cover rounded-xl hover:brightness-110 transition duration-300"
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={item.file_url}
                  alt={item.title || "Gallery"}
                  className="w-full h-60 object-cover rounded-xl hover:brightness-110 transition duration-300"
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  {item.type === "video" ? (
                    <Video className="w-5 h-5 text-gray-700" />
                  ) : (
                    <Image className="w-5 h-5 text-gray-700" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Fullscreen Preview */}
      {currentIndex !== null && galleryItems[currentIndex] && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 px-4">
          {/* Close */}
          <button
            className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white text-xl sm:text-2xl"
            onClick={() => setCurrentIndex(null)}
          >
            ✕
          </button>

          {/* Previous */}
          <button
            className="absolute left-2 sm:left-6 text-white"
            onClick={prevItem}
          >
            <ChevronLeft size={28} className="sm:w-[40px] sm:h-[40px]" />
          </button>

          {/* Preview Content */}
          {galleryItems[currentIndex].type === "video" ? (
            <video
              src={galleryItems[currentIndex].file_url}
              controls
              autoPlay
              className="max-w-[95%] sm:max-w-[90%] max-h-[70%] sm:max-h-[85%] rounded-xl"
            />
          ) : (
            <img
              src={galleryItems[currentIndex].file_url}
              alt={galleryItems[currentIndex].title || "Gallery"}
              className="max-w-[95%] sm:max-w-[90%] max-h-[70%] sm:max-h-[85%] rounded-xl"
            />
          )}

          {/* Next */}
          <button
            className="absolute right-2 sm:right-6 text-white"
            onClick={nextItem}
          >
            <ChevronRight size={28} className="sm:w-[40px] sm:h-[40px]" />
          </button>
        </div>
      )}
>>>>>>> fe4c9d8 (Updated project)
    </div>
  );
}