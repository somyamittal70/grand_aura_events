import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, User, PenLine } from "lucide-react";

import contactBg from "../../assets/c1.jpg"; // apni image ka path

export default function ContactUs() {
  return (
    <>
      <section
        className="relative w-full h-[600px] mb-5 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Animated Text */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-white text-8xl font-semibold tracking-wide"
        >
          Contact Us
        </motion.h1>
      </section>

      <section className="bg-[#0B1D3A] py-24 px-6 mb-5">
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[30px] px-13 py-20 shadow-lg"
          >
            <h2 className="text-6xl font-bold text-[#1f2c3a] mb-6">
              Get in touch with us
            </h2>

            <p className="text-black/60 text-lg mb-10">
              We are here to help reach out anytime for questions, bookings, or
              collaborations.
            </p>

            {/* Phone */}
            <div className="flex items-start gap-6 py-8 border-b">
              <div className="bg-[#CFAF4B] w-30 h-30 rounded-2xl flex items-center justify-center text-white">
                <Phone size={42} />
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">Phone Number</h3>
                <p className="text-gray-600 text-lg">
                  +91-8921962830 <br />
                  +91-9539374410
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-6 py-8 border-b">
              <div className="bg-[#CFAF4B] w-30 h-30 rounded-2xl flex items-center justify-center text-white">
                <Mail size={42} />
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600 text-lg">
                  infograndauraofficial@gmail.com
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-6 pt-8">
              <div className="bg-[#CFAF4B] w-30 h-30 rounded-2xl flex items-center justify-center text-white">
                <MapPin size={42} />
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">Address</h3>
                <p className="text-gray-600 text-lg">
                  HMF5+947 Payanumal, <br />
                  Mandarathur, <br />
                  Kerala 673541
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[30px] px-13 py-20 shadow-lg"
          >
            <h2 className="text-6xl font-semibold text-[#1f2c3a] mb-6">
              Leave a Message
            </h2>

            <p className="text-black/60 mb-10">We are Ready To Help You</p>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-gray-100 rounded-full px-8 py-6 outline-none focus:ring-2 focus:ring-[#CFAF4B]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="bg-gray-100 rounded-full px-8 py-8 outline-none focus:ring-2 focus:ring-[#CFAF4B]"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="bg-gray-100 rounded-full px-8 py-6 mt-6 w-full outline-none focus:ring-2 focus:ring-[#CFAF4B]"
            />

            <textarea
              placeholder="Type Your Message"
              rows="5"
              className="bg-gray-100 rounded-2xl px-6 py-4 mt-6 w-full outline-none focus:ring-2 focus:ring-[#0f5a5d]"
            ></textarea>

            <button className="mt-8 bg-[#CFAF4B] text-white px-10 py-7 rounded-full text-lg hover:scale-105 transition">
              Submit Message →
            </button>
          </motion.div>
        </div>
      </section>

        <section
       className="bg-[#0B1D3A] py-20 px-8 mb-5">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        className="max-w-8xl mx-auto bg-white rounded-3xl shadow-2xl p-10"
      >
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="overflow-hidden rounded-2xl"
        >

          <iframe
            src="https://www.google.com/maps?q=Payanummal%20Kerala&output=embed"
            width="100%"
            height="550"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="w-full h-[550px]"
          ></iframe>

        </motion.div>

      </motion.div>

    </section>
    </>
  );
}
