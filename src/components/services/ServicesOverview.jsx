import React from "react";
import { motion } from "framer-motion";
import Divider from "../home/Divider";

import serviceVideo from "../../assets/services-video.mp4"; // video path
<<<<<<< HEAD
import s5 from "../../assets/s5.jpg";
import s6 from "../../assets/s6.jpg";
import s7 from "../../assets/s7.jpg";
import s1 from "../../assets/s1.jpg";
=======
import s5 from "../../assets/wed1.jpeg";
import s6 from "../../assets/wed2.jpeg";
import s7 from "../../assets/wed3.jpeg";
import s1 from "../../assets/wed4.jpeg";
>>>>>>> fe4c9d8 (Updated project)
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.jpg";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.jpg";
import service5 from "../../assets/service5.png";
import service6 from "../../assets/service6.png";
<<<<<<< HEAD
import img1 from "../../assets/wedding1.png";
import img3 from "../../assets/wedding3.png";
import img5 from "../../assets/wedding5.png";
import img7 from "../../assets/wedding7.jpg";
import img9 from "../../assets/wedding9.jpg";
=======
import img1 from "../../assets/wed1.jpeg";
import img3 from "../../assets/wed2.jpeg";
import img5 from "../../assets/wed3.jpeg";
import img7 from "../../assets/wed4.jpeg";
import img9 from "../../assets/wed5.jpeg";
import img11 from "../../assets/wed6.jpeg";
>>>>>>> fe4c9d8 (Updated project)

export default function ServicesOverview() {
  return (
    <>
      <section className="relative w-full h-[250px] sm:h-[320px] md:h-[400px] flex items-center justify-center overflow-x-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src={serviceVideo} type="video/mp4" />
        </video>

        <Divider />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative text-center text-white px-4 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-2 leading-tight"
          >
            Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-sm sm:text-base md:text-xl tracking-wide"
          >
            Get a New Experience with Grand Aura
          </motion.p>
        </div>
      </section>

      <Divider />

      <section className="bg-[#0B1D3A] py-16 sm:py-20 md:py-25 px-4 sm:px-6 md:px-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-sm sm:text-base md:text-2xl font-bold text-white mb-8 sm:mb-12 leading-relaxed"
        >
          Wedding Planning & Management | Corporate Events | Social Events &
          Private Parties | Event Design & Decor
        </motion.h2>

        {/* Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[s5, s6, s7, s1].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-xl sm:rounded-2xl group cursor-pointer"
            >
              {/* Image */}
              <img
                src={img}
                alt=""
                className="w-full h-[220px] sm:h-[280px] md:h-[350px] object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </motion.div>
          ))}
        </div>
      </section>

      <Divider />

      <section className="relative w-full h-[400px] sm:h-[550px] md:h-[850px] grid grid-cols-2 sm:grid-cols-3 grid-rows-3 sm:grid-rows-2 overflow-hidden">
        {/* Background Images */}
        {[service1, service5, service3, service2, service6, service4].map(
          (img, i) => (
            <motion.img
              key={i}
              src={img}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: "easeOut" }}
            />
          ),
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Center Card */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 80 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-b from-black/10 to-black/60 backdrop-blur-lg text-white 
      rounded-2xl sm:rounded-3xl 
      px-6 sm:px-8 md:px-10 
      py-8 sm:py-10 md:py-15 
      text-center 
      w-full max-w-[320px] sm:max-w-[400px] md:w-[450px] 
      h-auto md:h-[550px] shadow-2xl"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-2xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-10"
            >
              All Services
            </motion.h2>

            <ul className="space-y-3 sm:space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg tracking-wide">
              {[
                "Event Management",
                "Event Production",
                "Rewards & Recognition",
                "Technology Integration",
                "Entertainment Options",
              ].map((service, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <Divider />

      <section className="bg-[#0B1D3A] py-16 sm:py-20 md:py-20 px-4 sm:px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* LEFT SIDE IMAGES */}
          <div className="relative flex justify-center items-center">
            <div className="gold-shimmer-border p-[4px] sm:p-[6px] rounded-[30px] sm:rounded-[50px] md:rounded-[66px]">
              <motion.img
                src={img1}
                initial={{ opacity: 0, rotate: -8, scale: 0.9 }}
                whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 3, ease: "easeOut" }}
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                  boxShadow: "0px 0px 60px rgba(207,175,75,0.6)",
                }}
                className="w-[260px] sm:w-[320px] md:w-[430px] 
          h-[320px] sm:h-[380px] md:h-[490px] 
          object-cover rounded-[25px] sm:rounded-[40px] md:rounded-[60px]"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
              Wedding Planning & Management
            </h2>

            <p className="text-white font-semibold mb-4 text-sm sm:text-base md:text-lg">
              Creating magical wedding experiences that reflect your unique love
              story
            </p>

            <p className="text-xs sm:text-sm text-white leading-6 sm:leading-7 mb-6">
              From venue selection to decor, entertainment, hospitality, and
              logistics, we handle every aspect of your wedding with precision
              and passion. Whether it's an intimate ceremony or a grand
              destination wedding, we ensure perfection in every moment.
            </p>

            {/* Highlights */}
            <h3 className="text-lg sm:text-xl md:text-3xl font-semibold text-white mb-3">
              Highlights
            </h3>

            <hr className="mb-5 text-[#CFAF4B]" />

            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg text-white list-disc pl-5">
              {[
                "Theme-based decor & styling",
                "Destination & luxury wedding arrangements",
                "Guest management & hospitality",
                "Vendor coordination & logistics",
                "Photography, entertainment & catering",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <Divider />

      <section className="bg-[#0B1D3A] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-20">
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
              Corporate Events
            </h2>

            <p className="text-white font-semibold mb-4 text-sm sm:text-base md:text-lg">
              Professional event solutions that inspire, connect, and deliver
              impact
            </p>

            <p className="text-white leading-6 sm:leading-7 mb-6 text-xs sm:text-sm">
              We organize conferences, product launches, annual meetings, and
              corporate parties with an emphasis on brand image and flawless
              execution. Our focus is to create experiences that leave lasting
              impressions on your employees and clients.
            </p>

            <h3 className="text-lg sm:text-xl md:text-3xl font-semibold text-white mb-3">
              Highlights
            </h3>

            <hr className="mb-5 text-[#CFAF4B]" />

            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg text-white list-disc pl-5">
              {[
                "Conferences & seminars",
                "Product launches & brand activations",
                "Award functions & gala dinners",
                "Team-building events",
                "Audio-visual & technical setup",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT SIDE IMAGES */}
          <div className="relative flex justify-center items-center">
            <div className="gold-shimmer-border p-[4px] sm:p-[6px] rounded-[30px] sm:rounded-[50px] md:rounded-[66px]">
              <motion.img
                src={img3}
                initial={{ opacity: 0, rotate: -8, scale: 0.9 }}
                whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 3, ease: "easeOut" }}
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                  boxShadow: "0px 0px 60px rgba(207,175,75,0.6)",
                }}
                className="w-[260px] sm:w-[320px] md:w-[430px] 
          h-[320px] sm:h-[380px] md:h-[490px] 
          object-cover rounded-[25px] sm:rounded-[40px] md:rounded-[60px]"
              />
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <section className="bg-[#0B1D3A] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-20">
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* LEFT SIDE IMAGES */}
          <div className="relative flex justify-center items-center">
            <div className="gold-shimmer-border p-[4px] sm:p-[6px] rounded-[30px] sm:rounded-[50px] md:rounded-[66px]">
              <motion.img
                src={img5}
                initial={{ opacity: 0, rotate: -8, scale: 0.9 }}
                whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 3, ease: "easeOut" }}
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                  boxShadow: "0px 0px 60px rgba(207,175,75,0.6)",
                }}
                className="w-[260px] sm:w-[320px] md:w-[430px] 
          h-[320px] sm:h-[380px] md:h-[490px] 
          object-cover rounded-[25px] sm:rounded-[40px] md:rounded-[60px]"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
              Social Events & Private Parties
            </h2>

            <p className="text-white font-semibold mb-4 text-sm sm:text-base md:text-lg">
              Adding flair and finesse to your personal celebrations
            </p>

            <p className="text-xs sm:text-sm text-white leading-6 sm:leading-7 mb-6">
              From birthdays and anniversaries to engagement parties and baby
              showers, we curate themes, decor, and experiences that match your
              taste and style ensuring your special day is full of joy and
              elegance
            </p>

            {/* Highlights */}
            <h3 className="text-lg sm:text-xl md:text-3xl font-semibold text-white mb-3">
              Highlights
            </h3>

            <hr className="mb-5 text-[#CFAF4B]" />

            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg text-white list-disc pl-5">
              {[
                "Customized themes & decor",
                "Live entertainment & DJs",
                "Catering & menu planning",
                "Venue decor & coordination",
                "Photography & return gifts",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <Divider />

      <section className="bg-[#0B1D3A] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-20">
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
              Destination Events
            </h2>

            <p className="text-white font-semibold mb-4 text-sm sm:text-base md:text-lg">
              Luxury experiences at dream destinations
            </p>

            <p className="text-white leading-6 sm:leading-7 mb-6 text-xs sm:text-sm">
              We specialize in planning and executing events at scenic
              destinations from tropical beach weddings to royal palace affairs.
              Our team manages travel, stay, and event logistics to ensure a
              smooth and memorable experience
            </p>

            <h3 className="text-lg sm:text-xl md:text-3xl font-semibold text-white mb-3">
              Highlights
            </h3>

            <hr className="mb-5 text-[#CFAF4B]" />

            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg text-white list-disc pl-5">
              {[
                "Location scouting & travel planning",
                "Vendor sourcing at destination",
                "Legal & logistics support",
                "On-site event coordination",
                "Personalized guest experiences",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT SIDE IMAGES */}
          <div className="relative flex justify-center items-center">
            <div className="gold-shimmer-border p-[4px] sm:p-[6px] rounded-[30px] sm:rounded-[50px] md:rounded-[66px]">
              <motion.img
                src={img7}
                initial={{ opacity: 0, rotate: -8, scale: 0.9 }}
                whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 3, ease: "easeOut" }}
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                  boxShadow: "0px 0px 60px rgba(207,175,75,0.6)",
                }}
                className="w-[260px] sm:w-[320px] md:w-[430px] 
          h-[320px] sm:h-[380px] md:h-[490px] 
          object-cover rounded-[25px] sm:rounded-[40px] md:rounded-[60px]"
              />
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <section className="bg-[#0B1D3A] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-5">
          {/* LEFT SIDE IMAGES */}
          <div className="relative flex justify-center items-center">
            <div className="gold-shimmer-border p-[4px] sm:p-[6px] rounded-[30px] sm:rounded-[50px] md:rounded-[66px]">
              <motion.img
                src={img9}
                initial={{ opacity: 0, rotate: -8, scale: 0.9 }}
                whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 3, ease: "easeOut" }}
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                  boxShadow: "0px 0px 60px rgba(207,175,75,0.6)",
                }}
                className="w-[260px] sm:w-[320px] md:w-[430px] 
          h-[320px] sm:h-[380px] md:h-[490px] 
          object-cover rounded-[25px] sm:rounded-[40px] md:rounded-[60px]"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
              Event Design & Decor
            </h2>

            <p className="text-white font-semibold mb-4 text-sm sm:text-base md:text-lg">
              Transforming spaces into stunning experiences
            </p>

            <p className="text-xs sm:text-sm text-white leading-6 sm:leading-7 mb-6">
              Our creative design team crafts immersive decor concepts that
              align with your theme and personality from floral arrangements to
              lighting, stage design, and more
            </p>

            {/* Highlights */}
            <h3 className="text-lg sm:text-xl md:text-3xl font-semibold text-white mb-3">
              Highlights
            </h3>

            <hr className="mb-5 text-[#CFAF4B]" />

            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg text-white list-disc pl-5">
              {[
                "Theme development & concept design",
                "Stage, lighting & floral decor",
                "3D mock-ups & visualizations",
                "Custom backdrops & installations",
                "Eco-friendly decor options",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <Divider />
<<<<<<< HEAD
=======

      <section className="bg-[#0B1D3A] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-20">
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
              Tours & Travels Planning
            </h2>

            <p className="text-white font-semibold mb-4 text-sm sm:text-base md:text-lg">
              Seamless travel experiences designed for comfort, exploration, and
              memorable journeys
            </p>

            <p className="text-white leading-6 sm:leading-7 mb-6 text-xs sm:text-sm">
              We plan and manage complete travel experiences including
              destination selection, accommodation, transportation, and guided
              activities. Whether it’s corporate travel, group tours, or
              incentive trips, our goal is to make every journey smooth,
              enjoyable, and perfectly organized from start to finish.
            </p>

            <h3 className="text-lg sm:text-xl md:text-3xl font-semibold text-white mb-3">
              Highlights
            </h3>

            <hr className="mb-5 text-[#CFAF4B]" />

            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg text-white list-disc pl-5">
              {[
                "Customized travel itineraries",
                "Hotel & accommodation planning",
                "Airport transfers & transport management",
                "Group tours & corporate travel solutions",
                "On-ground coordination & travel assistance",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT SIDE IMAGES */}
          <div className="relative flex justify-center items-center">
            <div className="gold-shimmer-border p-[4px] sm:p-[6px] rounded-[30px] sm:rounded-[50px] md:rounded-[66px]">
              <motion.img
                src={img11}
                initial={{ opacity: 0, rotate: -8, scale: 0.9 }}
                whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 3, ease: "easeOut" }}
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                  boxShadow: "0px 0px 60px rgba(207,175,75,0.6)",
                }}
                className="w-[260px] sm:w-[320px] md:w-[430px] 
          h-[320px] sm:h-[380px] md:h-[490px] 
          object-cover rounded-[25px] sm:rounded-[40px] md:rounded-[60px]"
              />
            </div>
          </div>
        </div>
      </section>

      <Divider />
>>>>>>> fe4c9d8 (Updated project)
    </>
  );
}
