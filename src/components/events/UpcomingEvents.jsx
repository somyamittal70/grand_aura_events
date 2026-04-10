import React, { useState } from "react";
import EventPage from "./EventPage";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "../../assets/bookmyshow.png";
import img2 from "../../assets/paytm.png";
import img3 from "../../assets/district.png";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { i } from "framer-motion/client";

const UpcomingEvents = () => {
  // 1. Array with platform specific data
  const events = [
    {
      id: 1,
      title: "The Duo ft. Kaustubh Aggarwal & Vidit Sharma",
      date: "Oct 15, 2026",
      time: "10:00 AM",
      location: "Grand Ballroom, NYC",
      category: "Conferences",
      platform: "BookMyShow",
      link: "https://in.bookmyshow.com/events/the-duo-ft-kaustubh-aggarwal-vidit-sharma/ET00470984",
      platformLogo: img1,
      image:
        "https://assets-in.bmscdn.com/nmcms/desktop/media-desktop-the-duo-ft-kaustubh-aggarwal-vidit-sharma-2025-11-14-t-11-0-55.jpg",
    },
    {
      id: 2,
      title: "Sahayak Startup & Investor Summit 2026",
      date: "Nov 02, 2026",
      time: "07:30 PM",
      location: "Skyline Lounge",
      category: "Exhibitions",

      platform: "Paytm Insider",
      link: "https://www.district.in/events/sahayak-startup-investor-summit-2026-may2-2026-buy-tickets",
      platformLogo: img2,
      image:
        "https://media.insider.in/image/upload/c_crop,g_custom/v1774270321/eobucngvczdbuzxqngul.png",
    },
    {
      id: 3,
      title: "Anime India | Delhi",
      date: "Dec 12, 2026",
      time: "02:00 PM",
      location: "Convention Center",
      category: "Gala Dinners",
      platform: "District",
      link: "https://www.district.in/events/",
      platformLogo: img3,
      image:
        "https://media.insider.in/image/upload/c_crop,g_custom/v1772271126/rdinrtejfl2bacyznpot.png",
    },
    {
      id: 4,
      title: "Kisi Ko Batana Mat Ft. Anubhav Singh Bassi ",
      date: "Oct 15, 2026",
      time: "10:00 AM",
      location: "Grand Ballroom, NYC",
      category: "Sales Kick Offs",
      platform: "BookMyShow",
      link: "https://in.bookmyshow.com/sports/kolkata-knight-riders-tata-ipl-2026/ET00491493?data=groupPage",
      platformLogo: img1,
      image:
        "https://assets-in.bmscdn.com/nmcms/desktop/media-desktop-kisi-ko-batana-mat-ft-anubhav-singh-bassi--2025-12-1-t-8-9-11.jpg",
    },
    {
      id: 5,
      title: "Impressions: An Art fair",
      date: "Nov 02, 2026",
      time: "07:30 PM",
      location: "Skyline Lounge",
      category: "Experiential",
      platform: "Paytm Insider",
      link: "https://www.district.in/events/impressions-an-art-fair-apr17-2026-buy-tickets",
      platformLogo: img2,
      image:
        "https://media.insider.in/image/upload/c_crop,g_custom/v1774462765/frh0hwaruxjijdpudbhz.jpg",
    },
    {
      id: 6,
      title: "Bar Spirits Forward Takes Over Grammies Museum | Roseate, Delhi",
      date: "Dec 12, 2026",
      time: "02:00 PM",
      location: "Convention Center",
      category: "Award Ceremonies",
      platform: "District",
      link: "https://in.bookmyshow.com/sports/mumbai-indians-tata-ipl-2026/ET00491492?data=groupPage",
      platformLogo: img3,
      image:
        "https://media.insider.in/image/upload/c_crop,g_custom/v1773830129/l178qvorzag4amwjrpp2.png",
    },
    {
      id: 7,
      title: "Padmashri Kailash Kher & Kailasa at Taj Palace Hotel, Delhi",
      date: "Oct 15, 2026",
      time: "10:00 AM",
      location: "Grand Ballroom, NYC",
      category: "Incentive Travel",
      platform: "BookMyShow",
      link: "https://in.bookmyshow.com/explore/events-ghaziabad?cat=CT",
      platformLogo: img1,
      image:
        "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-padmashri-kailash-kher-kailasa-at-taj-palace-0-2026-2-27-t-7-56-37.jpg",
    },
    {
      id: 8,
      title: "One Day Acting Workshop ",
      date: "Nov 02, 2026",
      time: "07:30 PM",
      location: "Skyline Lounge",
      category: "Product Launch",
      platform: "Paytm Insider",
      link: "https://www.district.in/events/one-day-acting-workshop-mar9-2026-buy-tickets",
      platformLogo: img2,
      image:
        "https://media.insider.in/image/upload/c_crop,g_custom/v1772872777/kwyefpb5fzkip7qajbnb.png",
    },
    {
      id: 9,
      title: "A Seven Course Paired Dinner with Chef Javier Rodriguez | Roseate, Delhi",
      date: "Dec 12, 2026",
      time: "02:00 PM",
      location: "Convention Center",
      category: "Accommodation & Transport",
      platform: "District",
      link: "https://www.district.in/events/",
      platformLogo: img3,
      image:
        "https://media.insider.in/image/upload/c_crop,g_custom/v1774443973/tcptlqwo0bspvlp2zapb.jpg",
    },
  ];

  // Unique platforms for filtering
  const platforms = ["All", "BookMyShow", "Paytm Insider", "District"];
  const [selectedPlatform, setSelectedPlatform] = useState("All");

  // Filtering Logic
  const filteredEvents =
    selectedPlatform === "All"
      ? events
      : events.filter((event) => event.platform === selectedPlatform);

  // Function to return dynamic glow colors based on platform
  const getGlowColor = (platform) => {
    switch (platform) {
      case "BookMyShow":
        return "from-red-600 to-pink-500";
      case "Paytm Insider":
        return "from-blue-600 to-cyan-400";
      case "District":
        return "from-purple-600 to-pink-500";
      default:
        return "from-cyan-500 to-blue-500";
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto mt-10">
        {/* Header Section */}
        <div className="text-center mt-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-cyan-400 text-sm font-semibold tracking-widest uppercase"
          >
            Don't Miss Out
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500"
          >
            Upcoming Events
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 mb-10 text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Discover the best events happening around you from your favorite
            platforms.
          </motion.p>
        </div>

        {/* 2. Platform Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {platforms.map((platform, index) => (
            <motion.button
              key={platform}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setSelectedPlatform(platform)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 border backdrop-blur-md flex items-center gap-2 ${
                selectedPlatform === platform
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 border-transparent text-white shadow-lg shadow-cyan-500/30"
                  : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {platform}
            </motion.button>
          ))}
        </div>

        {/* Events Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 shadow-2xl flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Category Chip */}
                  <span className="absolute top-4 left-4 z-20 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10">
                    {event.category}
                  </span>

                  {/* 3. Platform Logo Overlay */}
                  <div
                    className="
    absolute top-4 right-4 z-20
    group
  "
                  >
                    {/* Glass Badge */}
                    <div
                      className="
      relative flex items-center justify-center
      transition-all duration-300
      group-hover:scale-105
      group-hover:bg-white/20
    "
                    >
                      {/* Glow Effect */}
                      <div className="absolute"></div>

                      {/* Logo */}
                      <img
                        src={event.platformLogo}
                        alt={event.platform}
                        className="
        relative
        h-10 w-[150px]
        object-cover
      "
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {event.title}
                  </h3>

                  <div className="mt-4 space-y-2 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-cyan-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-cyan-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-cyan-400" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* ✅ WORKING BUTTON */}
                  <div className="mt-auto pt-6">
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative z-10 w-full flex items-center justify-center gap-2 bg-gradient-to-r ${getGlowColor(
                        event.platform,
                      )} text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 shadow-lg`}
                    >
                      Book via {event.platform}
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition"
                      />
                    </a>
                  </div>
                </div>

                {/* Glowing effect on hover based on platform */}
                <div
                  className={`absolute -inset-px bg-gradient-to-r ${getGlowColor(event.platform)} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
