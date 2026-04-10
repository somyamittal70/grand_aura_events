import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import s1 from "../../assets/s1.jpeg";
import s2 from "../../assets/s2.jpeg";
import s3 from "../../assets/s3.jpeg";
import s4 from "../../assets/s4.jpeg";
import s5 from "../../assets/s5.jpeg";

export default function Service() {
  const services = [
  {
    image: s1,
    title: "Event Management",
    desc: "Seamless planning and execution for unforgettable events.",
    path: "/services/eventmanagement",
  },
  {
    image: s2,
    title: "Event Production",
    desc: "Creative setups with professional technical execution.",
    path: "/services/eventproduction",
  },
  {
    image: s3,
    title: "Rewards & Recognition",
    desc: "Celebrating achievements with impactful experiences.",
    path: "/services/rewards",
  },
  {
    image: s4,
    title: "Technology Integration",
    desc: "Smart technology solutions for modern events.",
    path: "/services/techintegration",
  },
  {
    image: s5,
    title: "Entertainment Option",
    desc: "Engaging performances and curated entertainment.",
    path: "/services/entertainmentopt",
  },
];

  // 🔥 duplicate for infinite effect
  const loopServices = [...services, ...services];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const visibleCards = 3; // md screen layout

  /* =========================
        AUTO SLIDE
  ========================= */
  useEffect(() => {
    if (isHovered) return; // pause on hover

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  /* =========================
        RESET FOR LOOP
  ========================= */
  useEffect(() => {
    if (currentIndex >= services.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex, services.length]);

  /* =========================
        BUTTONS
  ========================= */
  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );
  };

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

<<<<<<< HEAD
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
=======
      {/* Slider */}
      <div
        className="max-w-7xl mx-auto overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${
              (currentIndex * 100) / visibleCards
            }%)`,
          }}
        >
          {loopServices.map((service, i) => (
            <Link
  to={service.path}
  key={i}
  className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-2 sm:px-3 md:px-4"
>
>>>>>>> fe4c9d8 (Updated project)
              <div className="relative rounded-xl overflow-hidden shadow-xl group">
                {/* Image */}
                <img
                  src={service.image}
                  alt=""
                  className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

<<<<<<< HEAD
                {/* Bottom Info Card */}
                <div
                  className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 
              w-[85%] sm:w-[75%] rounded-xl p-4 sm:p-6 text-center bg-white 
              overflow-hidden group"
                >
                  {/* Shimmer */}
                  <div className="absolute inset-0 gold-shimmer opacity-0 group-hover:opacity-100 transition z-0"></div>

                  {/* Content */}
=======
                {/* Card */}
                <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-[85%] sm:w-[75%] rounded-xl p-2 sm:p-3 text-center bg-white overflow-hidden">
                  <div className="absolute inset-0 gold-shimmer opacity-0 group-hover:opacity-100 transition z-0"></div>

>>>>>>> fe4c9d8 (Updated project)
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
            </Link>
          ))}
        </div>
      </div>

<<<<<<< HEAD
      {/* Navigation Buttons */}
=======
      {/* Buttons */}
>>>>>>> fe4c9d8 (Updated project)
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