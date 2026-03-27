import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-grand-aura-2.png";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-[#0B1D3A] text-white relative">
      {/* Newsletter Section */}
      <div className="gold-shimmer px-4 sm:px-8 md:px-10 py-6 mb-10 flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl text-center md:text-left">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold md:ml-12">
            Subscribe Our Newsletter
          </h2>
          <p className="text-gray-200 mt-2 text-sm sm:text-md md:text-lg md:ml-12">
            Subscribe email and get latest updates
          </p>
        </div>

        <div className="flex items-center bg-white rounded-full overflow-hidden w-full md:w-[500px] md:ml-12">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-1 px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-sm sm:text-base text-gray-700 outline-none"
          />
          <button
            className="bg-[#0B1D3A] text-white text-xs sm:text-sm font-semibold 
px-4 sm:px-5 py-3 sm:py-4 rounded-full mr-2 whitespace-nowrap
transition-all duration-300 ease-in-out
hover:bg-[#CFAF4B] hover:text-[#0B1D3A] hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Footer Main */}
      <div className="px-4 sm:px-6 md:px-10 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:ml-10">
        {/* Logo + About */}
        <div className="flex flex-col gap-6 mb-6 md:mb-10 text-center md:text-left">
          <img
            src={logo}
            alt="Grand Aura Events Logo"
            className="h-16 sm:h-20 md:h-22 w-auto mx-auto md:mx-0 mb-4 object-contain"
          />

          <p className="text-sm sm:text-md space-y-3 text-white font-bold md:ml-12">
            Office address GrandAura Events Plot #A40, I-thum Tower Office
            #B720-721, Tower B, sector 62 near electronic City metro station
            noida{" "}
            <a
              href="https://maps.google.com/maps?q=28.6263113%2C77.3727139&z=17&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-shimmer-text underline"
            >
              View on Map
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:ml-12 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6">Quick Link</h3>

          <ul className="space-y-3 text-sm sm:text-md text-white font-semibold">
            <li>
              <Link to="/" className="hover:text-[#CFAF4B] transition">
                › Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-[#CFAF4B] transition">
                › About Us
              </Link>
            </li>

            <li>
              <Link to="/services" className="hover:text-[#CFAF4B] transition">
                › Services
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-[#CFAF4B] transition">
                › Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-semibold mb-8 md:mb-10">
            Contact Us
          </h3>

          <div className="space-y-6 text-sm sm:text-md text-white font-bold">
            <div className="flex items-start justify-center md:justify-start gap-4 sm:gap-5">
              <Phone />
              <div>
                <h2>Phone No:</h2>
                <p>+91-8921962830</p>
                <p>+91-9539374410</p>
              </div>
            </div>

            <div className="flex items-start justify-center md:justify-start gap-4 sm:gap-5">
              <Mail />
              <div>
                <h2>Email:</h2>
                <p className="break-all">infograndauraofficial@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start justify-center md:justify-start gap-4 sm:gap-5">
              <MapPin />
              <div>
                <h2>Location :</h2>
                <p>HMF5+947 Payanummal, Mandarathur, Kerala 673541</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6">Follow Us</h3>

          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://www.facebook.com/people/Grand-Aura-Events/61576053068231/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="gold-shimmer p-2 rounded-xl cursor-pointer hover:scale-110 transition">
                <Facebook />
              </div>
            </a>

            <a
              href="https://linkedin.com/company/grand-aura-events"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="gold-shimmer p-2 rounded-xl cursor-pointer hover:scale-110 transition">
                <Linkedin />
              </div>
            </a>

            <a
              href="https://www.youtube.com/@GrandAuraEvents"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="gold-shimmer p-2 rounded-xl cursor-pointer hover:scale-110 transition">
                <Youtube />
              </div>
            </a>

            <a
              href="https://www.instagram.com/grand.auraevents/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="gold-shimmer p-2 rounded-xl cursor-pointer hover:scale-110 transition">
                <Instagram />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm sm:text-md md:text-lg mt-6 sm:mt-8 pb-3 text-gray-100 px-4">
        © 2025 grandauraevents.com. All Rights Reserved.
      </div>
    </div>
  );
}
