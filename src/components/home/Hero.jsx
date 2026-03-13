import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Gift } from "lucide-react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const slides = [
    {
      title: "GrandAura Events Where Elegance Meets Excellence",
      subtitle: "Crafting timeless experiences that leave a lasting impression",
    },
    {
      title: "Luxury Wedding & Corporate Event Management",
      subtitle: "We design unforgettable celebrations for every occasion",
    },
    {
      title: "Turning Your Dream Events Into Reality",
      subtitle: "Professional planning with creativity and perfection",
    },
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((index - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((index + 1) % slides.length);
  };

  return (
    <div className="relative h-screen w-full mb-5">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/src/assets/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-20 px-6">
        <motion.h1
          key={slides[index].title}
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-8xl font-bold max-w-5xl leading-tight"
        >
          {slides[index].title}
        </motion.h1>

        <motion.p
          key={slides[index].subtitle}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 text-2xl text-gray-200"
        >
          {slides[index].subtitle}
        </motion.p>
      </div>

      {/* Slider Buttons */}
      {/* Slider Buttons */}
      <div className="absolute right-10 top-1/2 flex flex-col gap-4 z-20">
        <button
          onClick={prevSlide}
          className="border-4 border-white rounded-full p-4 text-white hover:bg-white/20 transition"
        >
          <ChevronLeft size={32} strokeWidth={3} />
        </button>

        <button
          onClick={nextSlide}
          className="border-4 border-white rounded-full p-4 text-white hover:bg-white/20 transition"
        >
          <ChevronRight size={32} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}
