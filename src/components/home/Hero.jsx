<<<<<<< HEAD
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Gift } from "lucide-react";
import { motion } from "framer-motion";
import heroVideo from "../../assets/hero-video.mp4";
=======
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
>>>>>>> fe4c9d8 (Updated project)

export default function Hero() {
  const navigate = useNavigate();

  const [slides, setSlides] = useState([
    {
      title: "GrandAura Events Where Elegance Meets Excellence",
      subtitle: "Crafting timeless experiences that leave a lasting impression",
      button_text: "Explore Events",
      button_link: "/events/upcoming",
      media_url: "",
      media_type: "image",
    },
  ]);

  const [index, setIndex] = useState(0);
  const [loadingBanner, setLoadingBanner] = useState(true);

  const fetchBanner = async () => {
    try {
      setLoadingBanner(true);

      const response = await api.get("/banner");

      if (response.data.status && response.data.data) {
        const banner = response.data.data;

        setSlides([
          {
            title:
              banner.title ||
              "GrandAura Events Where Elegance Meets Excellence",
            subtitle:
              banner.subtitle ||
              "Crafting timeless experiences that leave a lasting impression",
            button_text: banner.button_text || "Explore More",
            button_link: banner.button_link || "/contact",
            media_url: banner.media_url || banner.image_url || "",
            media_type: banner.media_type || "image",
          },
        ]);
      }
    } catch (error) {
      console.error("Banner fetch error:", error);
    } finally {
      setLoadingBanner(false);
    }
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const handleBannerClick = (link) => {
    if (!link) return;

    if (link.startsWith("http")) {
      window.open(link, "_blank");
    } else {
      navigate(link);
    }
  };

  return (
    <div className="relative h-[90vh] sm:h-screen w-full overflow-hidden">
<<<<<<< HEAD
  
  {/* Background Video */}
  <video
    src={heroVideo}
    autoPlay
    loop
    muted
    playsInline
    className="absolute w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-20 px-4 sm:px-6">
    
    <motion.h1
      key={slides[index].title}
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl leading-snug sm:leading-tight"
    >
      {slides[index].title}
    </motion.h1>

    <motion.p
      key={slides[index].subtitle}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="mt-3 sm:mt-4 text-sm sm:text-base md:text-xl lg:text-2xl text-gray-200 max-w-xs sm:max-w-xl md:max-w-2xl"
    >
      {slides[index].subtitle}
    </motion.p>
  </div>

  {/* Slider Buttons */}
  <div className="absolute right-3 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-2 sm:gap-3 md:gap-4 z-20">
    
    <button
      onClick={prevSlide}
      className="border-2 sm:border-3 md:border-4 border-white rounded-full p-2 sm:p-3 md:p-4 text-white 
      hover:bg-white/20 transition duration-300 active:scale-90"
    >
      <ChevronLeft size={8} className="sm:w-[18px] sm:h-[18px]" strokeWidth={3} />
    </button>

    <button
      onClick={nextSlide}
      className="border-2 sm:border-3 md:border-4 border-white rounded-full p-2 sm:p-3 md:p-4 text-white 
      hover:bg-white/20 transition duration-300 active:scale-90"
    >
      <ChevronRight size={8} className="sm:w-[18px] sm:h-[18px]" strokeWidth={3} />
    </button>
  </div>
</div>
=======
      {/* ================= BACKGROUND ================= */}
      {slides[index]?.media_url ? (
        slides[index]?.media_type === "video" ? (
          <video
            key={slides[index]?.media_url}
            src={slides[index]?.media_url}
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
          />
        ) : (
          <motion.img
            key={slides[index]?.media_url}
            src={slides[index]?.media_url}
            alt={slides[index]?.title || "Hero Banner"}
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute w-full h-full object-cover"
          />
        )
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D3A] via-[#111827] to-[#1e1b0d]"></div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Golden Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.08),transparent_70%)]"></div>

      {/* ================= CONTENT ================= */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-20 px-4 sm:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index]?.title}
            initial={{ opacity: 0, y: 70, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.98 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <motion.h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl leading-snug sm:leading-tight">
              {loadingBanner ? "Loading..." : slides[index]?.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="mt-3 sm:mt-4 text-sm sm:text-base md:text-xl lg:text-2xl text-gray-200 max-w-xs sm:max-w-xl md:max-w-2xl"
            >
              {slides[index]?.subtitle}
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              onClick={() => handleBannerClick(slides[index]?.button_link)}
              className="mt-6 sm:mt-8 gold-shimmer-btn text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold tracking-wide shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
            >
              {slides[index]?.button_text || "Explore More"}
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      {slides.length > 1 && (
        <>
          <div className="absolute right-3 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-2 sm:gap-3 md:gap-4 z-20">
            <button
              onClick={prevSlide}
              className="border-2 border-white rounded-full p-2 sm:p-3 md:p-4 text-white hover:bg-white/20 transition duration-300 active:scale-90"
            >
              <ChevronLeft
                size={8}
                className="sm:w-[18px] sm:h-[18px]"
                strokeWidth={3}
              />
            </button>

            <button
              onClick={nextSlide}
              className="border-2 border-white rounded-full p-2 sm:p-3 md:p-4 text-white hover:bg-white/20 transition duration-300 active:scale-90"
            >
              <ChevronRight
                size={8}
                className="sm:w-[18px] sm:h-[18px]"
                strokeWidth={3}
              />
            </button>
          </div>

          <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === i
                    ? "w-8 bg-yellow-400"
                    : "w-2.5 bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
>>>>>>> fe4c9d8 (Updated project)
  );
}