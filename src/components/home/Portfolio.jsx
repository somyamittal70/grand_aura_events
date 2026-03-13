import React, { useState } from "react";
import { Image, ChevronLeft, ChevronRight } from "lucide-react";

import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.avif";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.jpeg";
import p5 from "../../assets/p5.jpg";
import p6 from "../../assets/p6.png";

export default function Portfolio() {
  const images = [p1, p2, p3, p4, p5, p6];

  const [currentIndex, setCurrentIndex] = useState(null);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 2 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 2 : prev - 1));
  };

  return (
    <section className="bg-[#0B1D3A] py-20 px-16 mb-5">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-6xl font-bold text-white">
          Grand Aura Portfolio
        </h2>

        <p className="text-white mt-3 text-2xl">
          The Aura of Grand Celebrations.
        </p>
      </div>

      <div className="max-w-8xl mx-auto space-y-8">
        {/* Row 1 */}
        <div className="grid grid-cols-4 gap-8">
          <Card img={p1} onClick={() => setCurrentIndex(0)} />
          <Card img={p2} span="col-span-2" onClick={() => setCurrentIndex(1)} />
          <Card img={p3} onClick={() => setCurrentIndex(2)} />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-4 gap-8">
          <Card img={p4} span="col-span-2" onClick={() => setCurrentIndex(3)} />
          <Card img={p5} onClick={() => setCurrentIndex(4)} />
          <Card img={p6} onClick={() => setCurrentIndex(5)} />
        </div>
      </div>

      {/* Fullscreen Gallery */}
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setCurrentIndex(null)}
          >
            ✕
          </button>

          {/* Previous */}
          <button className="absolute left-10 text-white" onClick={prevImage}>
            <ChevronLeft size={60} />
          </button>

          {/* Image */}
          <img
            src={images[currentIndex]}
            alt=""
            className="max-w-[90%] max-h-[90%] rounded-xl"
          />

          {/* Next */}
          <button className="absolute right-10 text-white" onClick={nextImage}>
            <ChevronRight size={60} />
          </button>
        </div>
      )}
    </section>
  );
}

function Card({ img, span, onClick }) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl group h-[500px] cursor-pointer ${span}`}
      onClick={onClick}
    >
      {/* Image */}
      <img
        src={img}
        alt=""
        className="w-full h-full object-cover transition duration-700  group-hover:scale-105"
      />

      {/* Overlay (bottom → top) */}
      <div
        className="absolute inset-0 
bg-gradient-to-t from-[#CFAF4B]/90 to-transparent
translate-y-full group-hover:translate-y-0
transition-transform duration-500 ease-in-out"
      ></div>

      {/* Icon (top → center) */}
      <div
        className="absolute inset-0 flex items-center justify-center
      -translate-y-20 opacity-0
      group-hover:translate-y-0 group-hover:opacity-100
      transition-all duration-500 ease-out"
      >
        <div className="w-30 h-30 bg-white rounded-full flex items-center justify-center shadow-lg">
          <Image className="w-12 h-12 text-gray-700" />
        </div>
      </div>
    </div>
  );
}
