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
    </div>
  );
}