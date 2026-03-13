import React from "react";
import logo from "../assets/logo.png";
import videoBg from "../assets/subscribe.mp4";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-[#0B1D3A] text-white relative">
      {/* Newsletter Section */}
      <div className="gold-shimmer px-10 py-15 mb-10 flex flex-col md:flex-row justify-between items-center gap-6 rounded-2xl shadow-xl">
        <div>
          <h2 className="text-5xl font-semibold ml-12">
            Subscribe Our Newsletter
          </h2>
          <p className="text-gray-200 mt-2 text-lg ml-12">
            Subscribe email and get latest updates
          </p>
        </div>

        <div className="flex items-center bg-white rounded-full overflow-hidden w-full md:w-[900px] ml-12">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-1 px-10 py-8 text-gray-700 outline-none"
          />
          <button className="bg-[#0B1D3A] text-white text-lg font-semibold px-8 py-5 rounded-full mr-7">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Footer Main */}
      <div className="px-10 py-20 grid md:grid-cols-4 gap-10 ml-10">
        {/* Logo + About */}
        <div className="flex flex-col gap-6 mb-10">
          <img
            src={logo}
            alt="Grand Aura Events Logo"
            className="h-30 W-30 mb-4 object-contain"
          />

          <p className="text-white font-semibold leading-7 ml-12">
            Office address GrandAura Events Plot #A40, I-thum Tower Office
            #B720-721, Tower B, sector 62 near electronic City metro station
            noida https://maps.google.com/maps?
            q=28.6263113%2C77.3727139&z=17&hl=en
          </p>
        </div>

        {/* Quick Links */}
        <div className=" ml-12">
          <h3 className="text-3xl font-semibold mb-6">Quick Link</h3>

          <ul className="space-y-3 text-xl text-white font-semibold">
            <li>› Home</li>
            <li>› About Us</li>
            <li>› Services</li>
            <li>› Contact Us</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-3xl font-semibold mb-10">Contact Us</h3>

          <div className="space-y-6 text-xl text-white font-semibold">
            <div className="flex items-start gap-5">
              <Phone />
              <div>
                <p>Phone No:</p>
                <p>+91-8921962830</p>
                <p>+91-9539374410</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail />
              <div>
                <p>Email:</p>
                <p>infograndauraofficial@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin />
              <div>
                <p>Location :</p>
                <p>HMF5+947 Payanummal, Mandarathur, Kerala 673541</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-3xl font-semibold mb-6">Follow Us</h3>

          <div className="flex gap-4">
            <div className="bg-[#CFAF4B] p-3 rounded-xl">
              <Facebook />
            </div>

            <div className="bg-[#CFAF4B] p-3 rounded-xl">
              <Twitter />
            </div>

            <div className="bg-[#CFAF4B] p-3 rounded-xl">
              <Phone />
            </div>

            <div className="bg-[#CFAF4B] p-3 rounded-xl">
              <Instagram />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-lg mt-8 p-6 text-gray-100">
        © 2025 grandauraevents.com. All Rights Reserved.
      </div>
    </div>
  );
}
