import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Divider from "../home/Divider";
import { Sparkles, Crown, Briefcase, PartyPopper } from "lucide-react";

export default function WhatWeOffer() {
  const services = [
    {
      title: "Luxury Weddings",
      desc: "We craft elegant and unforgettable wedding experiences with decor.",
      icon: <Crown size={28} />,
    },
    {
      title: "Corporate Events",
      desc: "Professional and impactful corporate events designed to elevate your brands.",
      icon: <Briefcase size={28} />,
    },
    {
      title: "Private Celebrations",
      desc: "From birthdays to anniversaries, we create personalized celebrations filled with joy.",
      icon: <PartyPopper size={28} />,
    },
    {
      title: "Event Design & Styling",
      desc: "Creative themes, luxury decor, and aesthetic styling that bring your vision to life beautifully.",
      icon: <Sparkles size={28} />,
    },
  ];

  return (
    <div className="bg-[#0B1D3A] text-white">
  {/* 🔥 HERO SECTION */}
  <section className="py-20 sm:py-24 md:py-32 text-center px-4 sm:px-6 relative overflow-hidden">
    
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(207,175,75,0.15),transparent_70%)]"></div>

    <motion.h1
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-10 sm:mt-12 md:mt-15 mb-6"
    >
      What We <span className="gold-shimmer-text">Offer</span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="text-gray-400 max-w-3xl sm:max-w-5xl md:max-w-7xl mx-auto text-sm sm:text-base md:text-lg mb-8 leading-relaxed"
    >
      Our name is known for our work and we offer services like Corporate
      Event Organization, Accommodation Management, BTL Activities,
      Fabrication, Venue Selection and Contracting, Airport and
      Transportation Coordination, Food & Beverages, Audio & Video, Theme
      Designing and Conceptualization, Conference Material Arrangement and
      much more. Being the most zealous Conference Organiser In India, we
      are able to deliver what our clients are paying for. We offer our
      services at the most reasonable price that doesn’t make a hole in your
      wallet and help you create an event that speaks for your brand and
      give lifelong memories to your guests.We are known for our reliable
      and professional event services across India. As a passionate
      conference organizer, we handle everything from corporate events and
      accommodation to BTL activities, fabrication, venue booking,
      transport, food, audio-visual setup, theme design, and more. Our goal
      is to make your event smooth, memorable, and a true reflection of your
      brand—without breaking the bank.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Link
        to="/contact"
        className="relative inline-block overflow-hidden border border-[#CFAF4B] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold group"
      >
        <span className="relative z-10 group-hover:text-[#0B1D3A] transition">
          Book Your Event
        </span>

        <span className="absolute inset-0 gold-shimmer-btn opacity-0 group-hover:opacity-100 transition"></span>
      </Link>
    </motion.div>
  </section>

  <Divider />

  {/* 💎 SERVICES GRID */}
  <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-10">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
      
      {services.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className="group relative p-6 sm:p-8 rounded-[20px] sm:rounded-[25px] border border-[#CFAF4B33] bg-[#0f2a52] hover:bg-[#132f5c] transition duration-500 overflow-hidden flex flex-col justify-between"
        >
          
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle,_rgba(207,175,75,0.2),transparent_70%)]"></div>

          <div>
            <div className="mb-4 sm:mb-6 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full gold-shimmer text-white shadow-lg">
              {item.icon}
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
              {item.title}
            </h3>

            <p className="text-gray-300 leading-6 sm:leading-7 text-xs sm:text-sm">
              {item.desc}
            </p>
          </div>

          <Link
            to="/contact"
            className="mt-4 sm:mt-6 inline-block text-center border border-[#CFAF4B] text-white px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold relative overflow-hidden group/btn"
          >
            <span className="relative z-10 group-hover/btn:text-[#0B1D3A] transition">
              Book Your Event
            </span>

            <span className="absolute inset-0 gold-shimmer-btn opacity-0 group-hover/btn:opacity-100 transition"></span>
          </Link>

          <div className="mt-4 sm:mt-6 h-[2px] w-0 bg-[#CFAF4B] group-hover:w-full transition-all duration-500"></div>
        </motion.div>
      ))}
    </div>
  </section>

  <Divider />

  {/* 🔥 WHY CHOOSE US */}
  <section className="bg-[#09172E] py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 relative overflow-hidden">
    
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(207,175,75,0.1),transparent_70%)]"></div>

    <div className="max-w-7xl mx-auto relative z-10">
      
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12 sm:mb-16 md:mb-20"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
          Why Choose <span className="text-[#CFAF4B]">GrandAura</span>
        </h2>

        <p className="text-gray-400 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          We go beyond planning events — we craft experiences that reflect
          elegance, precision, and unforgettable moments.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
        
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="group relative p-6 sm:p-8 md:p-10 rounded-[20px] sm:rounded-[25px] border border-[#CFAF4B33] bg-[#0f2a52] hover:bg-[#132f5c] transition duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="h-[2px] w-10 bg-[#CFAF4B] mb-4 sm:mb-6 group-hover:w-20 transition-all duration-500"></div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4">
                {["Luxury Experience", "Perfect Execution", "Creative Vision"][i]}
              </h3>

              <p className="text-gray-300 text-sm sm:text-base leading-6 sm:leading-7">
                {
                  [
                    "We bring premium designs, exclusive concepts, and a touch of elegance to every event.",
                    "From planning to execution, every detail is handled with precision and professionalism.",
                    "Our team transforms your ideas into visually stunning and memorable experiences.",
                  ][i]
                }
              </p>
            </div>

            <Link
              to="/contact"
              className="mt-6 sm:mt-8 inline-block text-center border border-[#CFAF4B] text-white px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold relative overflow-hidden group/btn"
            >
              <span className="absolute inset-0 gold-shimmer-btn opacity-0 group-hover/btn:opacity-100 transition"></span>

              <span className="relative z-10 group-hover/btn:text-[#0B1D3A] transition">
                Get Started
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  <Divider />

  {/* 🚀 CTA SECTION */}
  <section className="py-20 sm:py-24 md:py-28 text-center px-4 sm:px-6 relative">
    
    <motion.h2
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6"
    >
      Let’s Create Something{" "}
      <span className="text-[#CFAF4B]">Extraordinary</span>
    </motion.h2>

    <p className="text-gray-400 mb-8 sm:mb-10 max-w-md sm:max-w-xl mx-auto text-sm sm:text-base">
      Ready to turn your vision into reality? Let us plan and execute your
      dream event with perfection.
    </p>

    <a
      href="/contact"
      className="relative overflow-hidden bg-[#0B1D3A] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold group inline-block border border-[#CFAF4B]"
    >
      <span className="relative z-10">Contact Us</span>
      <span className="absolute inset-0 gold-shimmer-btn opacity-0 group-hover:opacity-100 transition"></span>
    </a>
  </section>

  <Divider />
</div>
  );
}
