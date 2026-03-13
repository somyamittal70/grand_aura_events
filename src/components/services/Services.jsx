import React from "react";
import { motion } from "framer-motion";
import serviceVideo from "../../assets/services-video.mp4"; // video path
import s5 from "../../assets/s5.jpg";
import s6 from "../../assets/s6.jpg";
import s7 from "../../assets/s7.jpg";
import s1 from "../../assets/s1.jpg";
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.jpg";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.jpg";
import service5 from "../../assets/service5.png";
import service6 from "../../assets/service6.png";
import img1 from "../../assets/wedding1.png";
import img2 from "../../assets/wedding2.jpg";
import img3 from "../../assets/wedding3.png";
import img4 from "../../assets/wedding4.png";
import img5 from "../../assets/wedding5.png";
import img6 from "../../assets/wedding6.png";
import img7 from "../../assets/wedding7.jpg";
import img8 from "../../assets/wedding8.png";
import img9 from "../../assets/wedding9.jpg";
import img10 from "../../assets/wedding10.png";
import img11 from "../../assets/wedding11.jpeg";
import img12 from "../../assets/wedding12.png";
import img13 from "../../assets/wedding13.png";
import img14 from "../../assets/wedding14.png";

export default function ServicesHero() {
  return (
    <>
      <section className="relative w-full h-[650px] flex items-center justify-center overflow-hidden mb-5">
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

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Animated Content */}
        <div className="relative text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-8xl font-semibold mb-4"
          >
            Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-2xl tracking-wide"
          >
            Get a New Experience with Grand Aura
          </motion.p>
        </div>
      </section>

      <section className="bg-[#0B1D3A] py-25 px-10 mb-5">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl font-bold text-white mb-12"
        >
          Wedding Planning & Management | Corporate Events | Social Events &
          Private Parties | Event Design & Decor
        </motion.h2>

        {/* Grid */}
        <div className="max-w-8xl mx-auto grid md:grid-cols-4 gap-6">
          {[s5, s6, s7, s1].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-2xl group cursor-pointer"
            >
              {/* Image */}
              <img
                src={img}
                alt=""
                className="w-full h-[400px] object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Premium Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative w-8xl h-[1400px] grid grid-cols-3 grid-rows-2 overflow-hidden mb-5">
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
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 80 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-b from-black/10 to-black/60 backdrop-blur-lg text-white rounded-3xl px-10 py-20 text-center w-[650px] h-[700px] shadow-2xl"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-7xl font-bold mb-10"
            >
              All Services
            </motion.h2>

            <ul className="space-y-10 text-xl font-semibold tracking-wide">
              {[
                "Wedding Planning & Management",
                "Corporate Events",
                "Social Events & Private Parties",
                "Destination Events",
                "Event Design & Decor",
                "Entertainment & Artist Management",
                "Catering & Hospitality",
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

      <section className="bg-[#0B1D3A] py-24 px-20 mb-5">
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE IMAGES */}
          <div className="relative flex justify-center items-center">
            {/* Background Image */}
            <motion.img
              src={img1}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-[630px] h-[690px] object-cover rounded-[60px] border-[10px] border-[#CFAF4B] shadow-xl"
            />

            {/* Rotated Image */}
            <motion.img
              src={img2}
              initial={{ opacity: 0, rotate: 25, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: 15, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="absolute w-[490px] h-[400px] object-cover rounded-[50px] border-[20px] border-[#CFAF4B] shadow-2xl rotate-[15deg] top-[160px] left-[400px]"
            />
          </div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-7xl font-bold text-white mb-3">
              Wedding Planning & Management
            </h2>

            <p className="text-white font-semibold mb-4 text-3xl">
              Creating magical wedding experiences that reflect your unique love
              story
            </p>

            <p className="text-xl text-white leading-7 mb-6">
              From venue selection to decor, entertainment, hospitality, and
              logistics, we handle every aspect of your wedding with precision
              and passion. Whether it's an intimate ceremony or a grand
              destination wedding, we ensure perfection in every moment.
            </p>

            {/* Highlights */}
            <h3 className="text-4xl font-semibold text-white mb-3">
              Highlights
            </h3>

            <hr className="mb-5 text-[#CFAF4B]" />

            <ul className="space-y-3 text-xl text-white list-disc pl-5">
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

      <section className="bg-[#0B1D3A] py-24 px-20 mb-5">
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-7xl font-bold text-white mb-3">
              Corporate Events
            </h2>

            <p className="text-white font-semibold mb-4 text-3xl">
              Professional event solutions that inspire, connect, and deliver
              impact
            </p>

            <p className="text-white leading-7 mb-6 text-xl">
              We organize conferences, product launches, annual meetings, and
              corporate parties with an emphasis on brand image and flawless
              execution. Our focus is to create experiences that leave lasting
              impressions on your employees and clients.
            </p>

            <h3 className="text-4xl font-semibold text-white mb-3">
              Highlights
            </h3>

            <hr className="mb-5 text-[#CFAF4B]" />

            <ul className="space-y-3 text-xl text-white list-disc pl-5">
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
            {/* Background Image */}
            <motion.img
              src={img3}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-[630px] h-[690px] object-cover rounded-[60px] border-[10px] border-[#CFAF4B] shadow-xl"
            />
            {/* Rotated Image */}{" "}
            <motion.img
              src={img4}
              initial={{ opacity: 0, rotate: -25, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: -15, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="absolute w-[490px] h-[400px] object-cover rounded-[50px] border-[20px] border-[#CFAF4B] shadow-2xl rotate-[-15deg] top-[160px] left-[100px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#0B1D3A] py-24 px-20 mb-5">
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-16 items-center left-[100px]">
          {/* LEFT SIDE IMAGES */}
          <div className="relative flex justify-center items-center">
            {/* Background Image */}
            <motion.img
              src={img5}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-[630px] h-[690px] object-cover rounded-[60px] border-[10px] border-[#CFAF4B] shadow-xl"
            />

            {/* Rotated Image */}
            <motion.img
              src={img6}
              initial={{ opacity: 0, rotate: 25, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: 15, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="absolute w-[490px] h-[400px] object-cover rounded-[50px] border-[20px] border-[#CFAF4B] shadow-2xl rotate-[15deg] top-[160px] left-[400px]"
            />
          </div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-7xl font-bold text-white mb-3">
              Social Events & Private Parties
            </h2>

            <p className="text-white font-semibold mb-4 text-3xl">
              Adding flair and finesse to your personal celebrations
            </p>

            <p className="text-xl text-white leading-7 mb-6">
              From birthdays and anniversaries to engagement parties and baby showers, we curate themes, decor, and experiences that match your taste and style ensuring your special day is full of joy and elegance
            </p>

            {/* Highlights */}
            <h3 className="text-4xl font-semibold text-white mb-3">
              Highlights
            </h3>

            <hr className="mb-5 text-[#CFAF4B]" />

            <ul className="space-y-3 text-xl text-white list-disc pl-5">
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

      <section className="bg-[#0B1D3A] py-24 px-20 mb-5">
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-7xl font-bold text-white mb-3">
              Destination Events
            </h2>

            <p className="text-white font-semibold mb-4 text-3xl">
             Luxury experiences at dream destinations
            </p>

            <p className="text-white leading-7 mb-6 text-xl">
              We specialize in planning and executing events at scenic destinations from tropical beach weddings to royal palace affairs. Our team manages travel, stay, and event logistics to ensure a smooth and memorable experience
            </p>

            <h3 className="text-4xl font-semibold text-white mb-3">
              Highlights
            </h3>

            <hr className="mb-5 text-[#CFAF4B]" />

            <ul className="space-y-3 text-xl text-white list-disc pl-5">
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
            {/* Background Image */}
            <motion.img
              src={img7}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-[630px] h-[690px] object-cover rounded-[60px] border-[10px] border-[#CFAF4B] shadow-xl"
            />
            {/* Rotated Image */}{" "}
            <motion.img
              src={img8}
              initial={{ opacity: 0, rotate: -25, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: -15, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="absolute w-[490px] h-[400px] object-cover rounded-[50px] border-[20px] border-[#CFAF4B] shadow-2xl rotate-[-15deg] top-[160px] left-[100px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#0B1D3A] py-24 px-20 mb-5">
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-16 items-center left-[100px]">
          {/* LEFT SIDE IMAGES */}
          <div className="relative flex justify-center items-center">
            {/* Background Image */}
            <motion.img
              src={img9}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-[630px] h-[690px] object-cover rounded-[60px] border-[10px] border-[#CFAF4B] shadow-xl"
            />

            {/* Rotated Image */}
            <motion.img
              src={img10}
              initial={{ opacity: 0, rotate: 25, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: 15, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="absolute w-[490px] h-[400px] object-cover rounded-[50px] border-[20px] border-[#CFAF4B] shadow-2xl rotate-[15deg] top-[160px] left-[400px]"
            />
          </div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-7xl font-bold text-white mb-3">
              Event Design & Decor
            </h2>

            <p className="text-white font-semibold mb-4 text-3xl">
              Transforming spaces into stunning experiences
            </p>

            <p className="text-xl text-white leading-7 mb-6">
              Our creative design team crafts immersive decor concepts that align with your theme and personality from floral arrangements to lighting, stage design, and more
            </p>

            {/* Highlights */}
            <h3 className="text-4xl font-semibold text-white mb-3">
              Highlights
            </h3>

            <hr className="mb-5 text-[#CFAF4B]" />

            <ul className="space-y-3 text-xl text-white list-disc pl-5">
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

      <section className="bg-[#0B1D3A] py-24 px-20 mb-5">
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-7xl font-bold text-white mb-3">
              Entertainment & Artist Management
            </h2>

            <p className="text-white font-semibold mb-4 text-3xl">
             Entertainment that captivates every audience
            </p>

            <p className="text-white leading-7 mb-6 text-xl">
              We bring in top artists, DJs, anchors, and performers to make your event vibrant and memorable. From cultural shows to celebrity appearances we make it grand
            </p>

            <h3 className="text-4xl font-semibold text-white mb-3">
              Highlights
            </h3>

            <hr className="mb-5 text-[#CFAF4B]" />

            <ul className="space-y-3 text-xl text-white list-disc pl-5">
              {[
                "Celebrity & artist bookings",
                "DJs, live bands & performers",
                "Anchors, emcees & dancers",
                "Cultural shows & theme entertainment",
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
            {/* Background Image */}
            <motion.img
              src={img11}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-[630px] h-[690px] object-cover rounded-[60px] border-[10px] border-[#CFAF4B] shadow-xl"
            />
            {/* Rotated Image */}{" "}
            <motion.img
              src={img12}
              initial={{ opacity: 0, rotate: -25, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: -15, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="absolute w-[490px] h-[400px] object-cover rounded-[50px] border-[20px] border-[#CFAF4B] shadow-2xl rotate-[-15deg] top-[160px] left-[100px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#0B1D3A] py-24 px-20 mb-5">
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE IMAGES */}
          <div className="relative flex justify-center items-center">
            {/* Background Image */}
            <motion.img
              src={img13}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-[630px] h-[690px] object-cover rounded-[60px] border-[10px] border-[#CFAF4B] shadow-xl"
            />

            {/* Rotated Image */}
            <motion.img
              src={img14}
              initial={{ opacity: 0, rotate: 25, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: 15, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="absolute w-[490px] h-[400px] object-cover rounded-[50px] border-[20px] border-[#CFAF4B] shadow-2xl rotate-[15deg] top-[160px] left-[400px]"
            />
          </div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-7xl font-bold text-white mb-3">
              Catering & Hospitality
            </h2>

            <p className="text-white font-semibold mb-4 text-3xl">
              Delighting your guests with world-class culinary experiences.
            </p>

            <p className="text-xl text-white leading-7 mb-6">
              From regional delicacies to international cuisines, our catering partners offer exquisite menus tailored to your event theme and preferences. We also manage hospitality and guest comfort with utmost care.
            </p>

            {/* Highlights */}
            <h3 className="text-4xl font-semibold text-white mb-3">
              Highlights
            </h3>

            <hr className="mb-5 text-[#CFAF4B]" />

            <ul className="space-y-3 text-xl text-white list-disc pl-5">
              {[
                "Multi-cuisine catering",
                "Menu design & tasting sessions",
                "Hospitality desk & guest management",
                "Professional service staff",
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
    </>
  );
}
