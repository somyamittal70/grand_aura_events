import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Phone, Mail, Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
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

  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      dropdown: [
        { name: "Services Overview", path: "/services/servicesoverview" },
        { name: "Event Management", path: "/services/eventmanagement" },
        { name: "Event Production", path: "/services/eventproduction" },
        { name: "Reward & Recognition", path: "/services/rewards" },
        { name: "Technology Integeration", path: "/services/techintegration" },
        { name: "Entertainment Options", path: "/services/entertainopt" },
      ],
    },

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
    
    { name: "Our Gallery", path: "/our-gallery" },

    {
      name: "Clients",
      dropdown: [
        { name: "Health Care", path: "/clients/healthcare" },
        { name: "Case Studies", path: "/clients/casestudies" },
      ],
    },

<<<<<<< HEAD
    {
      name: "Clients",
      dropdown: [
        { name: "Health Care", path: "/clients/healthcare" },
        { name: "Case Studies", path: "/clients/casestudies" },
      ],
    },

=======
>>>>>>> fe4c9d8 (Updated project)
    { name: "Contact", path: "/contact" },
    { name: "What We Offer", path: "/offer" },
  ];

  return (
    <>
      {/* Top Contact Bar */}
<div className="absolute top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md text-white py-3 sm:py-4">
  <div className="max-w-[1500px] mx-auto flex flex-wrap sm:flex-nowrap justify-center sm:justify-end items-center gap-4 sm:gap-12 px-4 sm:px-12 text-xs sm:text-sm md:text-md font-medium text-center sm:text-left">
    
    {/* Phone */}
    <div className="flex items-center gap-2 sm:gap-3 relative group cursor-pointer">
      <Phone size={18} className="sm:w-[22px] sm:h-[22px]" />

      <span className="relative">
        +91-95393 74410
        <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 gold-shimmer transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
      </span>

      <span className="mx-2 sm:mx-4">|</span>
    </div>

    {/* Email */}
    <div className="flex items-center gap-2 sm:gap-3 relative group cursor-pointer break-all">
      <Mail size={18} className="sm:w-[22px] sm:h-[22px]" />

      <span className="relative">
        infograndauraofficial@gmail.com
        <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 gold-shimmer transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
      </span>
    </div>
  </div>
</div>

{/* Navbar */}
<header
  className={`fixed w-full left-0 z-50 transition-all duration-500 ${
    scrolled
      ? "bg-[#0B1D3A] shadow-xl top-0"
      : "bg-transparent top-[50px] sm:top-[60px]"
  }`}
>
  <div className="w-full flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 sm:py-6">
    
    {/* Logo */}
    <Link to="/" className="flex items-center">
      <img
        src={logo}
        alt="logo"
        className="h-12 sm:h-16 md:h-20 object-contain"
      />
    </Link>

    {/* Desktop Menu */}
    <nav className="hidden md:flex items-center gap-5 lg:gap-8 text-white text-sm lg:text-lg font-bold">
      {navLinks.map((item, index) => {
        const isActive =
          location.pathname === item.path ||
          item.dropdown?.some((sub) => sub.path === location.pathname);

        return (
          <div key={index} className="relative group">
            {item.dropdown ? (
              <>
                <div
                  className={`flex items-center gap-1 lg:gap-2 cursor-pointer transition ${
                    isActive ? "text-[#CFAF4B]" : "text-white"
                  } group-hover:text-[#CFAF4B]`}
                >
                  {item.name}

                  <span
                    className={`absolute left-0 -bottom-1 h-[1px] transition-all duration-300 ${
                      isActive
                        ? "w-full left-0 gold-shimmer"
                        : "w-0 gold-shimmer group-hover:w-full group-hover:left-0"
                    }`}
                  ></span>

                  <ChevronDown
                    size={18}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                </div>

                {/* Dropdown */}
                <div
                  className="absolute left-0 top-[35px] w-[220px] lg:w-[250px] bg-[#0B1D3A] rounded-2xl shadow-2xl border border-[#CFAF4B]/30
                  opacity-0 invisible scale-95
                  group-hover:opacity-100 group-hover:visible group-hover:scale-100 gold-shimmer
                  transition-all duration-300 origin-top"
                >
                  {item.dropdown.map((subItem, i) => {
                    const isSubActive =
                      location.pathname === subItem.path;

                    return (
                      <Link
                        key={i}
                        to={subItem.path}
                        className={`relative block px-4 py-2 text-sm lg:text-md transition group/item rounded-xl ${
                          isSubActive
                            ? "text-[#CFAF4B] bg-[#132C52]"
                            : "hover:bg-[#0B1D3A] hover:text-[#CFAF4B]"
                        }`}
                      >
                        {subItem.name}

                        <span className="absolute left-4 right-4 bottom-0 h-[1px] bg-[#132C52] group-hover/item:gold-shimmer"></span>
                      </Link>
                    );
                  })}
                </div>
              </>
            ) : (
              <Link
                to={item.path}
                className={`relative cursor-pointer transition ${
                  isActive ? "text-[#CFAF4B]" : "text-white"
                } hover:text-[#CFAF4B]`}
              >
                {item.name}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${
                    isActive
                      ? "w-full left-0 gold-shimmer"
                      : "w-0 gold-shimmer group-hover:w-full group-hover:left-0"
                  }`}
                ></span>
              </Link>
            )}
          </div>
        );
      })}
    </nav>

    {/* Mobile Menu Button */}
    <div
      className="md:hidden text-white cursor-pointer"
      onClick={() => setMobileMenu(!mobileMenu)}
    >
      {mobileMenu ? <X size={22} /> : <Menu size={22} />}
    </div>
  </div>

  {/* Mobile Menu */}
  <div
    className={`md:hidden bg-[#0B1D3A] text-white px-6 sm:px-10 pb-6 sm:pb-8 transition-all duration-500 ${
      mobileMenu ? "max-h-[700px]" : "max-h-0 overflow-hidden"
    }`}
  >
    <div className="flex flex-col gap-5 sm:gap-7 pt-5 sm:pt-6 text-sm sm:text-md font-semibold">
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
