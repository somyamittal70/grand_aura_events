import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Phone, Mail, Menu, X } from "lucide-react";
import logo from "../assets/logo-grand-aura-2.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },

    {
      name: "Events",
      dropdown: [
        { name: "Conferences", path: "/events/conferences" },
        { name: "Exhibitions", path: "/events/exhibitions" },
        { name: "Gala Dinners", path: "/events/gala-dinners" },
        { name: "Sales Kick Offs", path: "/events/sales-kick-offs" },
        { name: "Experiential", path: "/events/experiential" },
        { name: "Award Ceremonies", path: "/events/awardceremonies" },
        { name: "Incentive Travel", path: "/events/incentivetravel" },
        { name: "Product Launch", path: "/events/productlaunch" },
        {
          name: "Accommodation & Transport",
          path: "/events/accommodation-transport",
        },
      ],
    },

    { name: "Clients", path: "/clients" },
    { name: "Contact", path: "/contact" },
    { name: "What We Offer", path: "/offer" },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="absolute top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md text-white py-7">
        <div className="max-w-[1700px] mx-auto flex justify-end items-center gap-12 px-12 text-xl font-medium">
          {/* Phone */}
          <div className="flex items-center gap-3 relative group cursor-pointer">
            <Phone size={22} />

            <span className="relative">
              +91-95393 74410
              {/* underline */}
              <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-[#CFAF4B] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </span>

            <span className="mx-4">|</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 relative group cursor-pointer">
            <Mail size={22} />

            <span className="relative">
              infograndauraofficial@gmail.com
              {/* underline */}
              <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-[#CFAF4B] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header
        className={`fixed w-full left-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0B1D3A] shadow-xl top-0"
            : "bg-transparent top-[60px]"
        }`}
      >
        <div className="w-full flex items-center justify-between px-6 py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="logo" className="h-32 object-contain" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-14 text-white text-2xl font-bold">
            {navLinks.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <>
                    {/* Menu Title */}
                    <div className="flex items-center gap-2 cursor-pointer hover:text-[#CFAF4B] transition">
                      {item.name}

                      <ChevronDown
                        size={20}
                        className="transition-transform duration-300 group-hover:rotate-180"
                      />
                    </div>

                    {/* Dropdown */}
                    <div
                      className="absolute left-0 top-[60px] w-[300px] bg-[#0B1D3A] rounded-2xl shadow-2xl border border-[#CFAF4B]/30
        opacity-0 invisible scale-95
        group-hover:opacity-100 group-hover:visible group-hover:scale-100
        transition-all duration-300 origin-top"
                    >
                      {item.dropdown.map((subItem, i) => (
                        <Link
                          key={i}
                          to={subItem.path}
                          className="block px-6 py-4 text-xl hover:bg-[#CFAF4B] hover:text-[#0B1D3A] transition rounded-xl"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="relative cursor-pointer hover:text-[#CFAF4B] transition"
                  >
                    {item.name}

                    <span
                      className="absolute left-1/2 bottom-[-10px] h-[2px] w-0 bg-[#CFAF4B]
        transition-all duration-300 hover:w-full hover:left-0"
                    ></span>
                  </Link>
                )}
              </div>
            ))}
          </nav>
          {/* Mobile Menu Button */}
          <div
            className="md:hidden text-white cursor-pointer"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={36} /> : <Menu size={36} />}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-[#0B1D3A] text-white px-10 pb-8 transition-all duration-500 ${
            mobileMenu ? "max-h-[700px]" : "max-h-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col gap-7 pt-6 text-xl font-semibold">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setMobileMenu(false)}
                className="border-b border-white/20 pb-3"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
