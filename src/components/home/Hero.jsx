import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Gift } from "lucide-react";
import { motion } from "framer-motion";
import heroVideo from "../../assets/hero-video.mp4";

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
    <div className="relative h-[90vh] sm:h-screen w-full overflow-hidden">
  
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
  );
}
