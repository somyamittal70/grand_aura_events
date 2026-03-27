import React from "react";
import { Link } from "react-router-dom";
import cta from "../../assets/cta.jpg";

export default function CTA() {
  return (
    <section className="relative h-[260px] sm:h-[320px] md:h-[360px] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image */}
      <img
        src={cta}
        alt="event"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 gold-shimmer-bg"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 max-w-xl sm:max-w-2xl mx-auto">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-2 font-semibold">
          Book Your Event
        </p>

        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-snug">
          Your Perfect Day Awaits
        </h2>

        <Link to="/contact">
          <button
            className="relative overflow-hidden bg-[#0B1D3A] text-white 
      px-5 sm:px-6 md:px-7 py-2 sm:py-3 
      rounded-full text-sm sm:text-base font-semibold 
      transition-all duration-300 
      hover:text-[#0B1D3A] hover:scale-105 active:scale-95 
      group"
          >
            <span className="relative z-10">Contact Now</span>

            <span className="absolute inset-0 gold-shimmer-btn opacity-0 group-hover:opacity-100 transition"></span>
          </button>
        </Link>
      </div>
    </section>
  );
}
