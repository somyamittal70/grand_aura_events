<<<<<<< HEAD
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Calendar,
  LogOut,
  User
} from "lucide-react";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen flex bg-black text-white">

      {/* 🔥 Sidebar */}
      <div className="w-64 bg-[#0f0f0f] border-r border-yellow-500/20 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-10 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Admin Panel
          </h2>

          <ul className="space-y-4">
            <li className="flex items-center gap-3 cursor-pointer hover:text-yellow-400">
              <LayoutDashboard size={18} />
              Dashboard
            </li>

            <li
              onClick={() => navigate("/admin/events")}
              className="flex items-center gap-3 cursor-pointer hover:text-yellow-400"
            >
              <Calendar size={18} />
              Manage Events
            </li>

            <li
              onClick={() => navigate("/admin/leads")}
              className="flex items-center gap-3 cursor-pointer hover:text-yellow-400"
            >
              <Calendar size={18} />
              Contact Leads
            </li>
          </ul>
        </div>
      </div>

      {/* 🖥️ Main Content */}
      <div className="flex-1 flex flex-col">

        {/* 💎 TOPBAR */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-yellow-500/20 bg-[#0f0f0f]">

          {/* Left */}
          <h1 className="text-lg sm:text-xl font-semibold">
            Dashboard
          </h1>

          {/* Right */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-yellow-400">
              <User size={18} />
              <span className="text-sm">Admin</span>
            </div>

            <button
              onClick={logout}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="p-6 sm:p-8 relative overflow-hidden flex-1">

          {/* ✨ Background Glow */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.06),transparent_70%)]"></div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl font-semibold mb-8"
          >
            Welcome Admin 👋
          </motion.h1>

          {/* 📊 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#111]/80 border border-yellow-500/20 p-6 rounded-xl"
            >
              <h3 className="text-yellow-400 mb-2">Total Events</h3>
              <p className="text-2xl sm:text-3xl font-bold">12</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#111]/80 border border-yellow-500/20 p-6 rounded-xl"
            >
              <h3 className="text-yellow-400 mb-2">Bookings</h3>
              <p className="text-2xl sm:text-3xl font-bold">48</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#111]/80 border border-yellow-500/20 p-6 rounded-xl"
            >
              <h3 className="text-yellow-400 mb-2">Users</h3>
              <p className="text-2xl sm:text-3xl font-bold">120</p>
            </motion.div>

          </div>
        </div>
      </div>
=======
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../../api/axios";
import Swal from "sweetalert2";

import {
  FaHouse,
  FaImages,
  FaEnvelopeOpenText,
  FaArrowRightFromBracket,
  FaUserShield,
  FaChartSimple,
  FaUsers,
  FaClipboardList,
  FaBolt,
  FaPanorama,
} from "react-icons/fa6";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const adminUser = JSON.parse(localStorage.getItem("admin_user"));

  const [statsData, setStatsData] = useState({
    leads: 0,
    gallery: 0,
    banners: 0,
    adminReach: 0,
  });

  const [loadingStats, setLoadingStats] = useState(true);

  // ✅ SweetAlert Toast
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
  });

  // ================= LOGOUT =================
  const logout = async () => {
    const result = await Swal.fire({
      title: "Logout from admin panel?",
      html: `
        <p style="font-size:15px; color:#555; line-height:1.7;">
          You’ll be securely signed out of your admin session.
        </p>
      `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#CFAF4B",
      confirmButtonText: "Yes, Logout",
      cancelButtonText: "Cancel",
      reverseButtons: true,
      background: "#fff",
      customClass: {
        popup: "rounded-2xl shadow-2xl",
        title: "text-xl font-bold text-[#1f2c3a]",
      },
    });

    if (!result.isConfirmed) return;

    try {
      await api.post("/logout");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      localStorage.removeItem("admin_token");
      localStorage.removeItem("admin_user");

      Toast.fire({
        icon: "success",
        title: "Logged out successfully",
      });

      setTimeout(() => {
        navigate("/admin/login");
      }, 800);
    }
  };

  // ================= FETCH DASHBOARD STATS =================
  const fetchDashboardStats = async () => {
    try {
      setLoadingStats(true);

      const [contactsRes, galleryRes, bannersRes] = await Promise.all([
        api.get("/contacts"),
        api.get("/gallery"),
        api.get("/admin/banners"),
      ]);

      const contacts = contactsRes?.data?.data || [];
      const gallery = galleryRes?.data?.data || [];
      const banners = bannersRes?.data?.data || [];

      setStatsData({
        leads: contacts.length,
        gallery: gallery.length,
        banners: banners.length,
        adminReach: contacts.length + gallery.length + banners.length,
      });
    } catch (error) {
      console.error("Dashboard stats error:", error);

      Toast.fire({
        icon: "error",
        title: "Failed to load dashboard stats",
      });
    } finally {
      setLoadingStats(false);
    }
  };

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const menuItems = [
    {
      label: "Dashboard",
      icon: <FaHouse className="text-[15px]" />,
      path: "/admin/dashboard",
    },
    {
      label: "Home Banner",
      icon: <FaPanorama className="text-[15px]" />,
      path: "/admin/banners",
    },
    {
      label: "Contact Leads",
      icon: <FaEnvelopeOpenText className="text-[15px]" />,
      path: "/admin/leads",
    },
    {
      label: "Gallery",
      icon: <FaImages className="text-[15px]" />,
      path: "/admin/gallery",
    },
  ];

  // ✅ Dynamic + Clickable Cards
  const stats = [
    {
      title: "Leads Received",
      value: loadingStats ? "..." : statsData.leads,
      icon: <FaClipboardList />,
      note: "Contact inquiries received",
      path: "/admin/leads",
    },
    {
      title: "Gallery Uploads",
      value: loadingStats ? "..." : statsData.gallery,
      icon: <FaImages />,
      note: "Photos & videos uploaded",
      path: "/admin/gallery",
    },
    {
      title: "Home Banners",
      value: loadingStats ? "..." : statsData.banners,
      icon: <FaPanorama />,
      note: "Homepage hero banners",
      path: "/admin/banners",
    },
    {
      title: "Admin Reach",
      value: loadingStats ? "..." : statsData.adminReach,
      icon: <FaUsers />,
      note: "Dashboard interactions",
      path: "/admin/dashboard",
    },
  ];

  const quickActions = [
    {
      title: "Manage Home Banner",
      desc: "Upload and control your homepage hero banner content dynamically.",
      icon: <FaPanorama />,
      action: () => navigate("/admin/banners"),
    },
    {
      title: "Manage Gallery",
      desc: "Upload event photos and videos for your website portfolio.",
      icon: <FaImages />,
      action: () => navigate("/admin/gallery"),
    },
    {
      title: "Check Contact Leads",
      desc: "Review client inquiries and follow up with new prospects.",
      icon: <FaEnvelopeOpenText />,
      action: () => navigate("/admin/leads"),
    },
  ];

  return (
    <div className="min-h-screen bg-[#070b14] text-white flex overflow-hidden">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-amber-400/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-yellow-300/5 blur-3xl rounded-full"></div>
      </div>

      {/* SIDEBAR */}
      <aside className="w-72 hidden md:flex flex-col justify-between border-r border-white/10 bg-white/5 backdrop-blur-xl px-6 py-7 relative z-10">
        <div>
          {/* Brand */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-600 text-black flex items-center justify-center shadow-lg shadow-yellow-500/20">
                <FaUserShield className="text-lg" />
              </div>
              <div>
                <h2 className="text-xl font-semibold tracking-wide">
                  Grand Aura
                </h2>
                <p className="text-xs text-white/60">Admin Control Panel</p>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4 px-2">
              Navigation
            </p>

            <ul className="space-y-2">
              {menuItems.map((item, index) => {
                const isActive = location.pathname === item.path;

                return (
                  <motion.li
                    key={index}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      onClick={() => navigate(item.path)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-lg shadow-yellow-500/20"
                          : "text-white/80 hover:bg-white/8 hover:text-yellow-300"
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span className="font-medium text-sm">{item.label}</span>
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* Premium Banner */}
          <div className="mt-10 rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-amber-500/5 p-5">
            <div className="w-11 h-11 rounded-2xl bg-yellow-500/20 flex items-center justify-center mb-4">
              <FaBolt className="text-yellow-300" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Luxury Event Control</h3>
            <p className="text-sm text-white/65 leading-6">
              Manage banners, leads and gallery from one elegant dashboard.
            </p>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={logout}
          className="flex items-center justify-center gap-3 w-full rounded-2xl border border-red-500/20 bg-red-500/10 hover:bg-red-500/15 text-red-300 px-4 py-3 transition"
        >
          <FaArrowRightFromBracket />
          <span className="font-medium">Logout</span>
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 relative z-10">
        {/* TOPBAR */}
        <div className="sticky top-0 z-20 border-b border-white/10 bg-[#070b14]/80 backdrop-blur-xl px-5 sm:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-yellow-400/70 mb-1">
                Welcome Back
              </p>
              <h1 className="text-2xl sm:text-3xl font-semibold">
                {adminUser?.name || "Admin"} Dashboard
              </h1>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-600 text-black flex items-center justify-center font-bold">
                {adminUser?.name?.charAt(0)?.toUpperCase() || "A"}
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium">{adminUser?.name || "Admin"}</p>
                <p className="text-xs text-white/50">Administrator</p>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE BODY */}
        <div className="px-5 sm:px-8 py-8">
          {/* Hero Banner */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[28px] border border-yellow-500/15 bg-gradient-to-r from-[#111827]/90 via-[#0f172a]/80 to-[#1e1b0d]/80 p-6 sm:p-8 mb-8 overflow-hidden relative"
          >
            <div className="absolute right-0 top-0 w-52 h-52 bg-yellow-500/10 blur-3xl rounded-full"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div>
                <p className="text-yellow-400/80 text-sm mb-2 flex items-center gap-2">
                  <FaChartSimple />
                  Control Center
                </p>
                <h2 className="text-2xl sm:text-4xl font-semibold leading-tight max-w-2xl">
                  Manage your{" "}
                  <span className="bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent">
                    home banner, gallery & leads
                  </span>{" "}
                  with ease.
                </h2>
                <p className="text-white/60 mt-4 max-w-2xl leading-7">
                  Control homepage hero content, monitor gallery uploads, and
                  track client inquiries from one premium dashboard.
                </p>
              </div>

              <button
                onClick={() => navigate("/admin/banners")}
                className="rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-6 py-3 font-semibold shadow-lg shadow-yellow-500/20 hover:scale-[1.02] transition"
              >
                Manage Home Banner
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
            {stats.map((card, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -5, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(card.path)}
                className="text-left rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-xl hover:border-yellow-400/30 transition"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-500/15 text-yellow-300 flex items-center justify-center text-lg">
                    {card.icon}
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                    Insights
                  </span>
                </div>

                <h3 className="text-white/65 text-sm mb-2">{card.title}</h3>
                <p className="text-3xl font-bold">{card.value}</p>
                <p className="text-xs text-white/45 mt-3">{card.note}</p>
              </motion.button>
            ))}
          </div>

          {/* Quick Actions */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xl sm:text-2xl font-semibold">
                Quick Actions
              </h3>
              <p className="text-sm text-white/45 hidden sm:block">
                Manage core sections faster
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {quickActions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="rounded-[26px] border border-white/10 bg-[#0f1420]/80 p-6 shadow-xl"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-amber-500/20 text-yellow-300 flex items-center justify-center text-lg mb-5">
                    {item.icon}
                  </div>

                  <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                  <p className="text-white/60 text-sm leading-7 mb-6">
                    {item.desc}
                  </p>

                  <button
                    onClick={item.action}
                    className="inline-flex items-center gap-2 text-yellow-300 font-medium hover:text-yellow-200 transition"
                  >
                    Open Section →
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
>>>>>>> fe4c9d8 (Updated project)
    </div>
  );
}