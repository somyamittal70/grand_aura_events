<<<<<<< HEAD
import React, { useState } from "react";
import { Image, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.avif";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.jpeg";
import p5 from "../../assets/p5.jpg";
import p6 from "../../assets/p6.png";

export default function Portfolio() {
  const navigate = useNavigate();
  const images = [p1, p2, p3, p4, p5, p6];
=======
import React, { useEffect, useState } from "react";
import { Image, Video, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../../api/axios";

export default function Portfolio() {
  const navigate = useNavigate();

  const [galleryItems, setGalleryItems] = useState([]);
>>>>>>> fe4c9d8 (Updated project)
  const [currentIndex, setCurrentIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchGallery = async () => {
    try {
      setLoading(true);

      const response = await api.get("/gallery");

      if (response.data.status) {
        // only latest 6 items for home preview
        setGalleryItems((response.data.data || []).slice(0, 6));
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

  const nextImage = () => {
<<<<<<< HEAD
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
=======
    setCurrentIndex((prev) =>
      prev === galleryItems.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1
    );
>>>>>>> fe4c9d8 (Updated project)
  };

  return (
    <section className="bg-[#0B1D3A] py-16 sm:py-20 px-4 sm:px-6">
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Grand Aura Portfolio
        </h2>

        <p className="text-white mt-2 sm:mt-3 text-sm sm:text-base md:text-lg">
          The Aura of Grand Celebrations.
        </p>
      </div>

<<<<<<< HEAD
      {/* Grid */}
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <Card img={p1} onClick={() => setCurrentIndex(0)} />
          <Card
            img={p2}
            span="md:col-span-2"
            onClick={() => setCurrentIndex(1)}
          />
          <Card img={p3} onClick={() => setCurrentIndex(2)} />
=======
      {/* Loading */}
      {loading ? (
        <div className="text-center text-white py-10">Loading gallery...</div>
      ) : galleryItems.length === 0 ? (
        <div className="text-center text-white/70 py-10">
          No gallery items available.
>>>>>>> fe4c9d8 (Updated project)
        </div>
      ) : (
        <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {galleryItems[0] && (
              <Card item={galleryItems[0]} onClick={() => setCurrentIndex(0)} />
            )}

<<<<<<< HEAD
        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <Card
            img={p4}
            span="md:col-span-2"
            onClick={() => setCurrentIndex(3)}
          />
          <Card img={p5} onClick={() => setCurrentIndex(4)} />
          <Card img={p6} onClick={() => setCurrentIndex(5)} />
        </div>

        <div className="flex justify-center mb-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/our-gallery")}
            className="px-8 py-3 rounded-full gold-shimmer text-black font-semibold shadow-lg hover:shadow-yellow-500/30 transition"
          >
            View Our Gallery
          </motion.button>
        </div>
      </div>

      {/* Fullscreen Gallery */}
      {currentIndex !== null && (
=======
            {galleryItems[1] && (
              <Card
                item={galleryItems[1]}
                span="md:col-span-2"
                onClick={() => setCurrentIndex(1)}
              />
            )}

            {galleryItems[2] && (
              <Card item={galleryItems[2]} onClick={() => setCurrentIndex(2)} />
            )}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {galleryItems[3] && (
              <Card
                item={galleryItems[3]}
                span="md:col-span-2"
                onClick={() => setCurrentIndex(3)}
              />
            )}

            {galleryItems[4] && (
              <Card item={galleryItems[4]} onClick={() => setCurrentIndex(4)} />
            )}

            {galleryItems[5] && (
              <Card item={galleryItems[5]} onClick={() => setCurrentIndex(5)} />
            )}
          </div>

          <div className="flex justify-center mb-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/our-gallery")}
              className="px-8 py-3 rounded-full gold-shimmer text-black font-semibold shadow-lg hover:shadow-yellow-500/30 transition"
            >
              View Our Gallery
            </motion.button>
          </div>
        </div>
      )}

      {/* Fullscreen Preview */}
      {currentIndex !== null && galleryItems[currentIndex] && (
>>>>>>> fe4c9d8 (Updated project)
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-4">
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
            onClick={prevImage}
          >
            <ChevronLeft size={28} className="sm:w-[40px] sm:h-[40px]" />
          </button>

<<<<<<< HEAD
          {/* Image */}
          <img
            src={images[currentIndex]}
            alt=""
            className="max-w-[95%] sm:max-w-[90%] max-h-[70%] sm:max-h-[85%] rounded-xl"
          />
=======
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
>>>>>>> fe4c9d8 (Updated project)

          {/* Next */}
          <button
            className="absolute right-2 sm:right-6 text-white"
            onClick={nextImage}
          >
            <ChevronRight size={28} className="sm:w-[40px] sm:h-[40px]" />
          </button>
        </div>
      )}
    </section>
  );
}

function Card({ item, span, onClick }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl sm:rounded-2xl group 
<<<<<<< HEAD
      h-[200px] sm:h-[260px] md:h-[320px] cursor-pointer ${span}`}
      onClick={onClick}
    >
      {/* Image */}
      <img
        src={img}
        alt=""
        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />
=======
      h-[200px] sm:h-[260px] md:h-[320px] cursor-pointer ${span || ""}`}
      onClick={onClick}
    >
      {/* Media */}
      {item.type === "video" ? (
        <video
          src={item.file_url}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          muted
          playsInline
        />
      ) : (
        <img
          src={item.file_url}
          alt={item.title || "Gallery"}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
      )}
>>>>>>> fe4c9d8 (Updated project)

      {/* Overlay */}
      <div className="absolute inset-0 gold-shimmer-bg translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

      {/* Icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
<<<<<<< HEAD
          <Image className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
=======
          {item.type === "video" ? (
            <Video className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
          ) : (
            <Image className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
          )}
>>>>>>> fe4c9d8 (Updated project)
        </div>
      </div>
    </div>
  );
}