import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import s1 from "../../assets/s1.jpg";
import s2 from "../../assets/s2.jpg";
import s3 from "../../assets/s3.jpeg";
import s4 from "../../assets/s4.jpg";
import s5 from "../../assets/s5.jpg";
import s6 from "../../assets/s6.jpg";
import s7 from "../../assets/s7.jpg";

export default function Service() {
  const services = [
    {
      image: s1,
      title: "Destination Events",
      desc: "Luxury experiences at dream destinations.",
    },
    {
      image: s2,
      title: "Event Design & Decor",
      desc: "Transforming spaces into stunning experiences",
    },
    {
      image: s3,
      title: "Entertainment & Artist Management",
      desc: "Entertainment that captivates every audience",
    },
    {
      image: s4,
      title: "Destination Events",
      desc: "Luxury experiences at dream destinations.",
    },
    {
      image: s5,
      title: "Event Design & Decor",
      desc: "Transforming spaces into stunning experiences",
    },
    {
      image: s6,
      title: "Entertainment & Artist Management",
      desc: "Entertainment that captivates every audience",
    },
    {
      image: s7,
      title: "Entertainment & Artist Management",
      desc: "Entertainment that captivates every audience",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < services.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev < services.length - 3 ? prev + 1 : 0));
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0B1D3A] py-16 sm:py-20 px-4 sm:px-6 md:px-10 pb-10">
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
          Services
        </h2>
        <p className="text-sm sm:text-lg md:text-xl text-white mt-3">
          Get a New Experience with Grand Aura
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {services.map((service, i) => (
            <div
              key={i}
              className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-2 sm:px-3 md:px-4"
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl group">
                {/* Image */}
                <img
                  src={service.image}
                  alt=""
                  className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Bottom Info Card */}
                <div
                  className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 
              w-[85%] sm:w-[75%] rounded-xl p-4 sm:p-6 text-center bg-white 
              overflow-hidden group"
                >
                  {/* Shimmer */}
                  <div className="absolute inset-0 gold-shimmer opacity-0 group-hover:opacity-100 transition z-0"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-gray-800 group-hover:text-[#0B1D3A]">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm md:text-md group-hover:text-[#0B1D3A]">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center md:justify-end gap-3 sm:gap-4 mt-6">
        <button
          onClick={prevSlide}
          className="gold-shimmer-btn text-white px-4 sm:px-6 md:px-7 py-2 sm:py-3 rounded-full active:scale-90 transition"
        >
          <ArrowLeft size={18} />
        </button>

        <button
          onClick={nextSlide}
          className="gold-shimmer-btn text-white px-4 sm:px-6 md:px-7 py-2 sm:py-3 rounded-full active:scale-90 transition"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
