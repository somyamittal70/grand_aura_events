import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Divider from "../home/Divider";
import contactBg from "../../assets/c1.jpg";

export default function ContactUs() {
  const [service, setService] = useState("");
  const [event, setEvent] = useState("");
  // 🔥 STATE
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // 🔥 SUBMIT FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone,
      service,
      event,
      message,
    };
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      await res.json();

      alert("Message Sent Successfully ✅");

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.log(error);
      alert("Error sending message ❌");
    }
  };

  return (
    <>
      {/* HERO */}
      <section
        className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-2xl sm:text-3xl md:text-5xl font-semibold tracking-wide"
        >
          Contact Us
        </motion.h1>
      </section>

      <Divider />

      {/* CONTACT SECTION */}
      <section className="bg-[#0B1D3A] py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1f2c3a] mb-4">
              Get in touch with us
            </h2>

            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
              We are here to help...
            </p>

            {/* Phone */}
            <div className="flex items-start gap-4 py-6 border-b">
              <div className="gold-shimmer w-12 h-12 rounded-xl flex items-center justify-center text-white shadow">
                <Phone size={20} />
              </div>

              <div>
                <h3 className="font-semibold">Phone Number</h3>
                <p className="text-gray-600 text-sm">
                  +91-8921962830 <br />
                  +91-9539374410
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 py-6 border-b">
              <div className="gold-shimmer w-12 h-12 rounded-xl flex items-center justify-center text-white">
                <Mail size={20} />
              </div>

              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600 text-sm">
                  infograndauraofficial@gmail.com
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 pt-6">
              <div className="gold-shimmer w-12 h-12 rounded-xl flex items-center justify-center text-white">
                <MapPin size={20} />
              </div>

              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600 text-sm">
                  Payanumal, Mandarathur <br />
                  Kerala 673541
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#1f2c3a] mb-4">
              Leave a Message
            </h2>

            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
              We are ready to help you.
            </p>

            {/* 🔥 FORM */}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-100 rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-[#CFAF4B]"
                  required
                />

                <input
                  type="text"
                  placeholder="Phone No."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-gray-100 rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-[#CFAF4B]"
                  required
                />
              </div>

              <div className="mt-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-100 rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-[#CFAF4B]"
                  required
                />
              </div>

              {/* 🔥 SERVICE + EVENT DROPDOWN */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {/* SERVICE */}
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="bg-gray-100 text-gray-600 rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-[#CFAF4B]"
                  required
                >
                  <option value="">Select Service</option>
                  <option value="Wedding Planning">Wedding Planning</option>
                  <option value="Birthday Events">Birthday Events</option>
                  <option value="Corporate Events">Corporate Events</option>
                  <option value="Decoration">Decoration</option>
                  <option value="Photography">Photography</option>
                </select>

                {/* EVENT */}
                <select
                  value={event}
                  onChange={(e) => setEvent(e.target.value)}
                  className="bg-gray-100 text-gray-600 rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-[#CFAF4B]"
                  required
                >
                  <option value="">Select Event</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Engagement">Engagement</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* MESSAGE */}
              <textarea
                placeholder="Type Your Message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-gray-100 rounded-xl px-4 py-3 mt-4 w-full outline-none focus:ring-2 focus:ring-[#CFAF4B]"
                required
              ></textarea>

              <button
                type="submit"
                className="mt-6 gold-shimmer-btn text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
              >
                Submit Message →
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Divider />

      {/* MAP */}
      <section className="bg-[#0B1D3A] py-10 sm:py-16 px-4 sm:px-6">
        <motion.div className="max-w-7xl mx-auto rounded-xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps?q=Payanummal,Kerala&z=15&output=embed"
            className="w-full h-[300px]"
            loading="lazy"
            style={{ border: 0 }}
          />
        </motion.div>
      </section>

      <Divider />
    </>
  );
}
