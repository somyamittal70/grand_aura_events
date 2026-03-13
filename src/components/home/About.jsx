import React from "react";
import { Gift } from "lucide-react";
import about1 from "../../assets/better.jpg";
import about2 from "../../assets/together.jpg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="bg-[#0B1D3A] pt-10 pb-50 px-8 mb-5">
      <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE IMAGES */}
        <div className="relative flex items-center justify-between w-full left-[90px]">
          {/* Left Image */}
          <img
            src={about1}
            alt=""
            className="w-[380px] h-[600px] object-cover rounded-[250px]"
          />

          {/* Right Image */}
          <img
            src={about2}
            alt=""
            className="w-[380px] h-[600px] object-cover rounded-[250px] absolute left-[420px] top-[190px]"
          />

          {/* Center Icon */}
          <div className="absolute left-[270px] top-[280px] bg-[#CFAF4B] w-[250px] h-[250px] rounded-full flex items-center justify-center text-white shadow-xl">
            <Gift size={80} />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="justify-content  max-w-3xl mt-25">
          <p className="text-[#CFAF4B] font-semibold text-2xl">About Us</p>

          <h2 className="text-5xl font-semibold text-white leading-tight mb-6">
            Professional Planning, Grand Execution
          </h2>

          <p className="text-xl text-white leading-8 mb-6">
            At GrandAura Events, we believe that every celebration deserves a
            touch of grandeur. From intimate gatherings to large-scale corporate
            functions, our passion lies in crafting seamless, memorable, and
            extraordinary experiences.With a blend of creativity, precision, and
            elegance, we transform your ideas into breathtaking realities
            ensuring that every moment reflects your story and style.
          </p>

          <p className="text-xl text-white leading-8 mb-8">
            Our dedicated team brings together expertise in event design,
            logistics, and hospitality to deliver flawless execution and
            exceptional service.Whether it's a wedding, corporate event, or
            social celebration, GrandAura stands for excellence in every detail.
          </p>

          {/* Button */}
          <Link to="/about">
            <button className="bg-[#CFAF4B] text-white text-lg px-9 py-5 rounded-full font-semibold hover:bg-[#a18633] transition">
              More Info
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
