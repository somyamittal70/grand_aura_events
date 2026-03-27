import React from "react";
import { useEffect, useState } from "react";
import img from "../../assets/eventmanagement.webp";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Divider from "../home/Divider";
import { ArrowLeft, ArrowRight } from "lucide-react";
import s1 from "../../assets/band.png";
import s2 from "../../assets/livedj.png";
import s3 from "../../assets/soloartist.png";
import s4 from "../../assets/instrumental.png";
import s5 from "../../assets/cultural.png";
import s6 from "../../assets/comedy.png";
import s7 from "../../assets/celebrity.jpeg";
import s8 from "../../assets/magician.png";

export default function EntertainOpt() {
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
      {/* ================= HERO IMAGE SECTION ================= */}
      <section className="relative h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center px-4 overflow-hidden">
        {/* Background Image */}
        <img
          src={img}
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
      mt-10 sm:mt-16 md:mt-24 
      border gold-shimmer 
      rounded-xl sm:rounded-2xl 
      backdrop-blur-md bg-black/30 
      shadow-[0_0_40px_rgba(207,175,75,0.2)]
      text-center"
        >
          Entertainment Options
        </motion.h1>
      </section>

      <Divider />

      {/* ================= PREMIUM CONTENT SECTION ================= */}
      <section className="bg-[#0B1D3A] py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(207,175,75,0.12),transparent_70%)]"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl border border-[#CFAF4B33] 
      rounded-2xl sm:rounded-3xl md:rounded-[40px] 
      p-6 sm:p-8 md:p-12 lg:p-16 
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
              , we offer a diverse range of entertainment options designed to
              make your event truly unforgettable. From energetic live bands and
              high-voltage DJ performances that keep the crowd engaged, to
              talented solo artists and elegant instrumentalists who create a
              sophisticated ambiance, we ensure every moment is special. Our
              cultural performances add a touch of tradition and vibrancy, while
              comedy shows bring laughter and joy to your celebration. For a
              sense of wonder and excitement, our skilled magicians captivate
              audiences of all ages, and for a truly grand experience, we also
              arrange exclusive celebrity appearances that leave a lasting
              impression on your guests.
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
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
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-10 text-left"
            >
              {[
                "Dynamic Live Entertainment",
                "Captivating Performances",
                "Unforgettable Experiences",
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

      {/* ================= ENTERTAINMENT SLIDER SECTION ================= */}
      <section className="bg-[#0B1D3A] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 pb-8 sm:pb-10">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white">
            Entertainment{" "}
            <span className="gold-shimmer-text font-medium">Highlights</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mt-2 sm:mt-3 px-2 sm:px-0">
            Bringing energy, excitement & unforgettable moments
          </p>
        </div>

        {/* Slider */}
        <div className="max-w-7xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {[
              {
                image: s1,
                title: "Live Bands",
                desc: "Feel the rhythm with electrifying live performances",
              },
              {
                image: s2,
                title: "DJ Performances",
                desc: "High-energy beats that keep the party alive",
              },
              {
                image: s3,
                title: "Solo Artists",
                desc: "Captivating individual performances",
              },
              {
                image: s4,
                title: "Instrumentalists",
                desc: "Elegant music for a sophisticated ambiance",
              },
              {
                image: s5,
                title: "Cultural Shows",
                desc: "Celebrate traditions with vibrant performances",
              },
              {
                image: s6,
                title: "Comedy Shows",
                desc: "Laughter and fun for every audience",
              },
              {
                image: s7,
                title: "Celebrity Appearances",
                desc: "Make your event truly unforgettable",
              },
              {
                image: s8,
                title: "Magicians",
                desc: "Elegant and mesmerizing magic performances designed to add mystery and excitement to your event.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-2 sm:px-3 md:px-4"
              >
                <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-xl group">
                  {/* Image */}
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-[250px] sm:h-[320px] md:h-[400px] lg:h-[450px] object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  {/* Info Card */}
                  <div
                    className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 
              w-[85%] sm:w-[75%] rounded-lg sm:rounded-xl 
              p-4 sm:p-5 md:p-6 text-center bg-white overflow-hidden"
                  >
                    {/* Shimmer */}
                    <div className="absolute inset-0 gold-shimmer opacity-0 group-hover:opacity-100 transition z-0"></div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 group-hover:text-[#0B1D3A]">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1 sm:mt-2 group-hover:text-[#0B1D3A]">
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
        <div className="flex justify-center sm:justify-end gap-3 sm:gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="gold-shimmer-btn text-white px-5 sm:px-6 md:px-7 py-2 sm:py-3 rounded-full"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            onClick={nextSlide}
            className="gold-shimmer-btn text-white px-5 sm:px-6 md:px-7 py-2 sm:py-3 rounded-full"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <Divider />

      {/* ================= STATS SECTION ================= */}
      <section className="bg-[#0B1D3A] py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#0B1D3A]"></div>

        <div className="relative z-10">
          <StatsContent />
        </div>
      </section>

      <Divider />

      {/* ================= TESTIMONIALS SECTION ================= */}
      <section className="bg-[#0B1D3A] py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
        {/* Background */}
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
          p-6 sm:p-7 md:p-8 
          text-left 
          shadow-[0_0_40px_rgba(0,0,0,0.5)] 
          hover:shadow-[0_0_50px_rgba(207,175,75,0.25)] 
          transition duration-300"
              >
                {/* Quote Icon */}
                <div className="text-[#CFAF4B] text-2xl sm:text-3xl mb-3 sm:mb-4">
                  “
                </div>

                {/* Text */}
                <p className="text-gray-300 text-sm sm:text-base leading-6 sm:leading-7 mb-4 sm:mb-6">
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
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8 }}
            className="h-[2px] gold-shimmer mx-auto mt-10 sm:mt-12 md:mt-16"
          />
        </div>
      </section>

      <Divider />

      {/* CTA SECTION */}
      <section className="bg-[#071426] py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 text-center relative overflow-hidden">
        {/* Background */}
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
            className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 px-2 sm:px-0"
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
      py-3 sm:py-4 
      rounded-full border border-[#CFAF4B] 
      text-white text-sm sm:text-base font-semibold 
      group shadow-[0_0_20px_rgba(207,175,75,0.3)]"
          >
            {/* Shimmer */}
            <span className="absolute inset-0 gold-shimmer opacity-0 group-hover:opacity-100 transition duration-500"></span>

            {/* Text */}
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
            p-5 sm:p-6 md:p-8 lg:p-10 
            hover:scale-105 transition duration-300 
            shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          >
            {/* Number */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gold-shimmer-text mb-2 sm:mb-3">
              <Counter target={item.number} isVisible={isInView} />+
            </h3>

            {/* Label */}
            <p className="text-gray-300 text-xs sm:text-sm md:text-base">
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
