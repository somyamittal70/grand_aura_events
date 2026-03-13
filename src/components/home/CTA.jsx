import React from "react";
import cta from "../../assets/cta.jpg";

export default function CTA() {
  return (
    <section className="relative h-[450px] flex items-center justify-center text-center text-white mb-5">

      {/* Background Image */}
      <img
        src={cta}
        alt="event"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#CFAF4B]/10 via-[#CFAF4B]/60 to-[#CFAF4B]/10 via-[#CFAF4B]/50"></div>

      {/* Content */}
      <div className="relative z-10">

        <p className="text-2xl mb-3 font-semibold">
          Book Your Event
        </p>

        <h2 className="text-7xl md:text-8xl font-bold mb-8">
          Your Perfect Day Awaits
        </h2>

        <button className="bg-[#0B1D3A] text-white px-10 py-4 rounded-full text-2xl font-semibold hover:bg-[#a18633] transition">
          Contact Now
        </button>

      </div>

    </section>
  );
}