import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Divider from "../home/Divider";
<<<<<<< HEAD
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
=======
import api from "../../api/axios";
import Swal from "sweetalert2";

import contactBg from "../../assets/contact.jpeg";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    event: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // ✅ SweetAlert Toast Config
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setErrors({});

    try {
      const response = await api.post("/contact", formData);

      if (response.data.status) {
        // ✅ Main Success Popup
        await Swal.fire({
          icon: "success",
          title: "Message Sent Successfully 🎉",
          html: `
            <p style="font-size:15px; color:#555; line-height:1.7;">
              Thank you for reaching out to <b>Grand Aura Events</b> ✨<br/>
              Our team will connect with you very soon.
            </p>
          `,
          confirmButtonText: "Awesome!",
          confirmButtonColor: "#CFAF4B",
          background: "#fff",
          customClass: {
            popup: "rounded-2xl shadow-2xl",
            title: "text-xl font-bold text-[#1f2c3a]",
          },
        });

        // ✅ Side Success Toast
        Toast.fire({
          icon: "success",
          title: "Your enquiry has been submitted successfully",
        });

        // ✅ Reset Form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          event: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);

      if (error.response?.status === 422) {
        setErrors(error.response.data.errors || {});

        Toast.fire({
          icon: "warning",
          title: "Please fill all required fields correctly",
        });
      } else {
        Toast.fire({
          icon: "error",
          title:
            error.response?.data?.message ||
            "Something went wrong. Please try again.",
        });
      }
    } finally {
      setLoading(false);
>>>>>>> fe4c9d8 (Updated project)
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
<<<<<<< HEAD
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
=======
              We are here to help you plan unforgettable celebrations with elegance and perfection.
            </p>

            {/* Phone */}
            <div className="flex items-start gap-3 sm:gap-4 py-4 sm:py-6 border-b">
              <div className="gold-shimmer w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center text-white shadow">
                <Phone size={18} className="sm:w-[22px]" />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-1">
                  Phone Number
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
>>>>>>> fe4c9d8 (Updated project)
                  +91-8921962830 <br />
                  +91-9539374410
                </p>
              </div>
            </div>

            {/* Email */}
<<<<<<< HEAD
            <div className="flex items-start gap-4 py-6 border-b">
              <div className="gold-shimmer w-12 h-12 rounded-xl flex items-center justify-center text-white">
                <Mail size={20} />
              </div>

              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600 text-sm">
=======
            <div className="flex items-start gap-3 sm:gap-4 py-4 sm:py-6 border-b">
              <div className="gold-shimmer w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center text-white">
                <Mail size={18} className="sm:w-[22px]" />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-1">
                  Email
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm break-all">
>>>>>>> fe4c9d8 (Updated project)
                  infograndauraofficial@gmail.com
                </p>
              </div>
            </div>

            {/* Address */}
<<<<<<< HEAD
            <div className="flex items-start gap-4 pt-6">
              <div className="gold-shimmer w-12 h-12 rounded-xl flex items-center justify-center text-white">
                <MapPin size={20} />
              </div>

              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600 text-sm">
                  Payanumal, Mandarathur <br />
=======
            <div className="flex items-start gap-3 sm:gap-4 pt-4 sm:pt-6">
              <div className="gold-shimmer w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center text-white">
                <MapPin size={18} className="sm:w-[22px]" />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-1">
                  Address
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  HMF5+947 Payanumal <br />
                  Mandarathur <br />
>>>>>>> fe4c9d8 (Updated project)
                  Kerala 673541
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
<<<<<<< HEAD
          <motion.div
=======
          <motion.form
            onSubmit={handleSubmit}
>>>>>>> fe4c9d8 (Updated project)
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#1f2c3a] mb-4">
              Leave a Message
            </h2>

            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
<<<<<<< HEAD
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
=======
              Tell us about your event and we’ll get back to you shortly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-100 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm outline-none focus:ring-2 focus:ring-[#CFAF4B] w-full"
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name[0]}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-100 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm outline-none focus:ring-2 focus:ring-[#CFAF4B] w-full"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email[0]}</p>
                )}
              </div>
            </div>

            <div className="mt-3 sm:mt-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="bg-gray-100 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm outline-none focus:ring-2 focus:ring-[#CFAF4B] w-full"
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone[0]}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="bg-gray-100 text-gray-500 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm outline-none focus:ring-2 focus:ring-[#CFAF4B] w-full"
                  required
                >
                  <option value="">Select Service</option>
                  <option value="Wedding">Event Management</option>
                  <option value="Corporate Event">Event Production</option>
                  <option value="Birthday Party">Rewards & Recognition</option>
                  <option value="Private Event">Technology Integration</option>
                  <option value="Entertainment">Entertainment Option</option>
                </select>
                {errors.service && (
                  <p className="text-red-500 text-xs mt-1">{errors.service[0]}</p>
                )}
              </div>

              <div>
                <select
                  name="event"
                  value={formData.event}
                  onChange={handleChange}
                  className="bg-gray-100 text-gray-500 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm outline-none focus:ring-2 focus:ring-[#CFAF4B] w-full"
                  required
                >
                  <option value="">Select Event</option>
                  <option value="DJ Night">Conferences</option>
                  <option value="Live Music">Exhibitions</option>
                  <option value="Stage Show">Gala Dinner</option>
                  <option value="Reception">Sales Kick Offs</option>
                  <option value="DJ Night">Experiential</option>
                  <option value="Awards">Award Ceremonies</option>
                  <option value="Live Music">Incentive Travel</option>
                  <option value="Stage Show">Product Launch</option>
                  <option value="Reception">Accommodation & Transport</option>
                </select>
                {errors.event && (
                  <p className="text-red-500 text-xs mt-1">{errors.event[0]}</p>
                )}
              </div>
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Type Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="bg-gray-100 rounded-xl px-4 sm:px-5 py-3 mt-3 sm:mt-4 w-full text-sm outline-none focus:ring-2 focus:ring-[#CFAF4B]"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message[0]}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`mt-4 sm:mt-6 gold-shimmer-btn text-white px-5 sm:px-7 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition ${
                loading ? "opacity-70 cursor-not-allowed" : "hover:scale-105 active:scale-95"
              }`}
            >
              {loading ? "Submitting..." : "Submit Message →"}
            </button>
          </motion.form>
>>>>>>> fe4c9d8 (Updated project)
        </div>
      </section>

      <Divider />

      {/* MAP */}
      <section className="bg-[#0B1D3A] py-10 sm:py-16 px-4 sm:px-6">
<<<<<<< HEAD
        <motion.div className="max-w-7xl mx-auto rounded-xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps?q=Payanummal,Kerala&z=15&output=embed"
            className="w-full h-[300px]"
            loading="lazy"
            style={{ border: 0 }}
=======
        <motion.div className="max-w-7xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps?q=Payanummal,Kerala&z=15&output=embed"
            className="w-full h-[250px] sm:h-[320px] md:h-[420px]"
            loading="lazy"
            style={{ border: 0 }}
            title="Google Map"
>>>>>>> fe4c9d8 (Updated project)
          />
        </motion.div>
      </section>

      <Divider />
    </>
  );
}