import React from "react";
import { useEffect, useState } from "react";
import img from "../../assets/eventmanagement.webp";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Divider from "../home/Divider";
import { ArrowLeft, ArrowRight } from "lucide-react";
<<<<<<< HEAD
=======
import img1 from "../../assets/manage.jpeg";
>>>>>>> fe4c9d8 (Updated project)
import s1 from "../../assets/band.png";
import s2 from "../../assets/livedj.png";
import s3 from "../../assets/soloartist.png";
import s4 from "../../assets/instrumental.png";
import s5 from "../../assets/cultural.png";
import s6 from "../../assets/comedy.png";
import s7 from "../../assets/celebrity.jpeg";
import s8 from "../../assets/magician.png";

export default function EventManagement() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < 7 - 3) {
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
      setCurrentIndex((prev) => (prev < 7 - 3 ? prev + 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section className="relative h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <img
<<<<<<< HEAD
          src={img}
=======
          src={img1}
>>>>>>> fe4c9d8 (Updated project)
          alt="event"
          className="absolute w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-[#0B1D3A]" />

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative 
    text-2xl sm:text-3xl md:text-5xl lg:text-6xl 
    text-white font-bold 
    px-4 sm:px-6 md:px-10 
    py-2 sm:py-3 md:py-4 
    mt-10 sm:mt-16 md:mt-30 
    border gold-shimmer 
    rounded-xl sm:rounded-2xl 
    backdrop-blur-md bg-black/30 
    shadow-[0_0_40px_rgba(207,175,75,0.2)] 
    text-center"
        >
          Event Management
        </motion.h1>
      </section>

      <Divider />

      <section className="bg-[#0B1D3A] py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(207,175,75,0.12),transparent_70%)]"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl border border-[#CFAF4B33] 
      rounded-[20px] sm:rounded-[30px] md:rounded-[40px] 
      p-6 sm:p-10 md:p-16 
      shadow-[0_0_60px_rgba(0,0,0,0.6)]"
          >
            {/* Small Label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="gold-shimmer-text uppercase tracking-[2px] sm:tracking-[3px] text-xs sm:text-sm mb-3 sm:mb-4"
            >
              Our Expertise
            </motion.p>

            {/* Main Text */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl 
        leading-7 sm:leading-8 md:leading-9 
        text-gray-200 font-light"
            >
              At{" "}
              <span className="gold-shimmer-text font-medium">
                GrandAura Events
              </span>
              , we believe every event is a unique story waiting to be told.
              Whether it’s an elegant wedding, a high-profile corporate event,
              or a fun-filled birthday celebration, we handle everything from
              concept to completion with creativity and care.
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-[2px] gold-shimmer mt-6 sm:mt-8"
            />

            {/* Feature Points */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.2 },
                },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10 text-left"
            >
              {[
                "End-to-End Event Management",
                "Seamless Coordination",
                "Exceptional Event Experiences",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="flex items-center gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base"
                >
                  <div className="w-2 h-2 gold-shimmer rounded-full"></div>
                  <p>{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Divider />

      <section className="bg-[#0B1D3A] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 pb-10">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            Event{" "}
            <span className="gold-shimmer-text font-medium">Management</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mt-3 px-2">
            Seamlessly managing every detail to deliver flawless event
            experiences
          </p>
        </div>

        {/* Slider */}
        <div className="max-w-7xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
          >
            {[
              {
                image: s1,
                title: "Event Planning",
                desc: "Strategic planning to ensure every event runs smoothly from start to finish.",
              },
              {
                image: s2,
                title: "Venue Management",
                desc: "Selecting and managing venues that perfectly suit your event requirements.",
              },
              {
                image: s3,
                title: "Vendor Coordination",
                desc: "Managing vendors efficiently to ensure seamless execution of all services.",
              },
              {
                image: s4,
                title: "Logistics Management",
                desc: "Handling transportation, scheduling, and operations with precision.",
              },
              {
                image: s5,
                title: "Guest Management",
                desc: "Ensuring a smooth and memorable experience for every guest attending.",
              },
              {
                image: s6,
                title: "On-site Coordination",
                desc: "Dedicated team managing everything in real-time during the event.",
              },
              {
                image: s7,
                title: "Budget Management",
                desc: "Optimizing resources to deliver premium events within your budget.",
              },
              {
                image: s8,
                title: "End-to-End Execution",
                desc: "Complete event management from concept to successful completion.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-2 sm:px-3 md:px-4"
              >
                <div className="relative rounded-xl overflow-hidden shadow-xl group">
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[260px] sm:h-[320px] md:h-[450px] object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  {/* Info Card */}
                  <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 left-1/2 -translate-x-1/2 w-[90%] sm:w-[80%] md:w-[75%] rounded-xl p-3 sm:p-4 md:p-6 text-center bg-white overflow-hidden">
                    {/* Shimmer */}
                    <div className="absolute inset-0 gold-shimmer opacity-0 group-hover:opacity-100 transition z-0"></div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-gray-800 group-hover:text-[#0B1D3A]">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm md:text-md text-gray-600 mt-1 sm:mt-2 group-hover:text-[#0B1D3A]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center md:justify-end gap-3 sm:gap-4 mt-5 sm:mt-6">
          <button
            onClick={prevSlide}
            className="gold-shimmer-btn text-white px-4 sm:px-6 md:px-7 py-2 sm:py-3 rounded-full"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            onClick={nextSlide}
            className="gold-shimmer-btn text-white px-4 sm:px-6 md:px-7 py-2 sm:py-3 rounded-full"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <Divider />

      <section className="bg-[#0B1D3A] py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#0B1D3A]"></div>

        <StatsContent />
      </section>

      <Divider />

      <section className="bg-[#0B1D3A] py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[#0B1D3A]"></div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-10 sm:mb-12 md:mb-16"
          >
            What Our <span className="gold-shimmer-text">Clients Say</span>
          </motion.h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {[
              {
                name: "Riya Sharma",
                text: "GrandAura turned our wedding into a dream. Every detail was perfect and beautifully executed.",
              },
              {
                name: "Amit Verma",
                text: "Professional, creative, and highly reliable. Our corporate event was a huge success!",
              },
              {
                name: "Sneha Kapoor",
                text: "Absolutely wonderfull experience! The team made our celebration unforgettable.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-xl border border-[#CFAF4B33] 
          rounded-2xl sm:rounded-3xl 
          p-5 sm:p-6 md:p-8 
          text-left shadow-[0_0_40px_rgba(0,0,0,0.5)] 
          hover:shadow-[0_0_50px_rgba(207,175,75,0.25)] transition duration-300"
              >
                {/* Quote Icon */}
                <div className="text-[#CFAF4B] text-2xl sm:text-3xl mb-3 sm:mb-4">
                  “
                </div>

                {/* Text */}
                <p className="text-gray-300 leading-6 sm:leading-7 text-sm sm:text-base mb-5 sm:mb-6">
                  {item.text}
                </p>

                {/* Name */}
                <h4 className="text-[#CFAF4B] font-semibold text-sm sm:text-base">
                  {item.name}
                </h4>
              </motion.div>
            ))}
          </div>

          {/* Bottom Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "150px" }}
            transition={{ duration: 0.8 }}
            className="h-[2px] gold-shimmer mx-auto mt-10 sm:mt-12 md:mt-16"
          />
        </div>
      </section>

      <Divider />

      <section className="bg-[#071426] py-16 sm:py-24 md:py-32 px-4 sm:px-6 text-center relative overflow-hidden">
        {/* Glow Background */}
        <div className="absolute inset-0 bg-[#0B1D3A]"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-snug"
          >
            Let’s Create Your{" "}
            <span className="gold-shimmer-text">Dream Event</span>
          </motion.h2>

          {/* Text */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0"
          >
            From concept to execution, we turn your ideas into unforgettable
            experiences.
          </motion.p>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate("/contact")}
            className="relative overflow-hidden 
      px-6 sm:px-8 md:px-10 
      py-3 sm:py-3.5 md:py-4 
      text-sm sm:text-base 
      rounded-full border border-[#CFAF4B] text-white font-semibold 
      group shadow-[0_0_20px_rgba(207,175,75,0.3)]"
          >
            {/* SHIMMER */}
            <span className="absolute inset-0 gold-shimmer opacity-0 group-hover:opacity-100 transition duration-500"></span>

            {/* TEXT */}
            <span className="relative z-10 group-hover:text-black transition">
              Book Your Event
            </span>
          </motion.button>
        </div>
      </section>

      <Divider />
    </>
  );
}

function Counter({ target, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, isVisible]);

  return <span>{count}</span>;
}

function StatsContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="max-w-6xl mx-auto relative z-10 text-center px-4 sm:px-6"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-10 sm:mb-12 md:mb-16"
      >
        Our <span className="gold-shimmer-text">Achievements</span>
      </motion.h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-10">
        {[
          { number: 250, label: "Events Completed" },
          { number: 120, label: "Happy Clients" },
          { number: 15, label: "Awards Won" },
          { number: 8, label: "Years Experience" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: i * 0.2 }}
            className="bg-white/5 backdrop-blur-lg border border-[#CFAF4B33] 
            rounded-2xl sm:rounded-3xl 
            p-5 sm:p-6 md:p-10 
            hover:scale-105 transition duration-300 
            shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          >
            {/* Number */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gold-shimmer-text mb-2 sm:mb-3">
              <Counter target={item.number} isVisible={isInView} />+
            </h3>

            {/* Label */}
            <p className="text-xs sm:text-sm md:text-base text-gray-300">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Line */}
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: "120px" } : {}}
        transition={{ duration: 0.8 }}
        className="h-[2px] gold-shimmer mx-auto mt-10 sm:mt-12 md:mt-16"
      />
    </div>
  );
}
