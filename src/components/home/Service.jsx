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
    <section className="bg-[#0B1D3A] py-20 px-10 pb-10 mb-5">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-6xl font-bold text-white">Services</h2>
        <p className="text-xl text-white mt-3">
          Get a New Experience with Grand Aura
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-8xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
        >
          {services.map((service, i) => (
            <div key={i} className="w-1/3 flex-shrink-0 px-4">
              <div className="relative rounded-xl overflow-hidden shadow-xl group">
                {/* Image */}
                <img
                  src={service.image}
                  alt=""
                  className="w-[800px] h-[580px] object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Bottom Info Card */}
                <div
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 
          bg-white w-[75%] rounded-xl p-6 text-center 
          transition duration-300 group-hover:bg-[#CFAF4B]"
                >
                  <h3 className="text-3xl font-semibold text-gray-800 group-hover:text-white">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mt-2 text-lg group-hover:text-gray-200">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end gap-4 mt-3">
        <button
          onClick={prevSlide}
          className="bg-[#a18633] text-white px-7 py-3 rounded-full"
        >
          <ArrowLeft size={30} />
        </button>

        <button
          onClick={nextSlide}
          className="bg-[#a18633] text-white px-7 py-3 rounded-full"
        >
          <ArrowRight size={30} />
        </button>
      </div>
    </section>
  );
}
