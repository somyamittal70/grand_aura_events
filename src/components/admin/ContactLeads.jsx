import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { Trash2, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactLeads() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("leads")) || [];
    setLeads(data);
  }, []);

  const deleteLead = (id) => {
    const updated = leads.filter((l) => l.id !== id);
    setLeads(updated);
    localStorage.setItem("leads", JSON.stringify(updated));
  };

  const filteredLeads = leads.filter((l) =>
    l.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-8 py-6 relative">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.06),transparent_70%)]"></div>

      <h1 className="text-2xl sm:text-3xl font-semibold mb-6 relative z-10">
        Contact Leads
      </h1>

      {/* Search */}
      <div className="mb-6 relative z-10">
        <Search className="absolute left-3 top-3 text-yellow-500" size={16} />
        <input
          type="text"
          placeholder="Search leads..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 p-2.5 rounded-lg bg-black/40 border border-yellow-500/20 outline-none"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto relative z-10">
        <table className="w-full min-w-[600px] border border-yellow-500/20 rounded-xl">
          <thead className="bg-[#111] text-yellow-400">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
               <th className="p-3">Service</th>
              <th className="p-3">Event</th>
              <th className="p-3">Message</th>
              <th className="p-3">Date</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredLeads.map((lead) => (
              <motion.tr
                key={lead.id}
                whileHover={{ backgroundColor: "#1a1a1a" }}
                className="border-t border-yellow-500/10 text-center"
              >
                <td className="p-3">{lead.name}</td>
                <td className="p-3">{lead.email}</td>
                <td className="p-3">{lead.message}</td>
                <td className="p-3 text-xs">{lead.date}</td>

                <td className="p-3">
                  <button
                    onClick={() => deleteLead(lead.id)}
                    className="text-red-400"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
=======
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import api from "../../api/axios";
import Swal from "sweetalert2";

import {
  FaHouse,
  FaImages,
  FaCalendarDays,
  FaEnvelopeOpenText,
  FaArrowRightFromBracket,
  FaUserShield,
  FaTrash,
  FaMagnifyingGlass,
  FaBolt,
  FaClipboard,
  FaEye,
  FaXmark,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaRegMessage,
} from "react-icons/fa6";

export default function ContactLeads() {
  const navigate = useNavigate();
  const location = useLocation();

  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [deleteLoadingId, setDeleteLoadingId] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const adminUser = JSON.parse(localStorage.getItem("admin_user"));

  // ✅ SweetAlert Toast
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const menuItems = [
    {
      label: "Dashboard",
      icon: <FaHouse className="text-[15px]" />,
      path: "/admin/dashboard",
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

  // ================= FETCH =================
  const fetchLeads = async () => {
    try {
      setLoading(true);
      setErrorMsg("");

      const response = await api.get("/contacts");

      if (response.data.status) {
        setLeads(response.data.data || []);
      }
    } catch (error) {
      console.error("Fetch contacts error:", error);
      setErrorMsg("Failed to load contact leads.");

      Toast.fire({
        icon: "error",
        title: "Failed to load contact leads",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // ================= DELETE =================
  const deleteLead = async (id) => {
    const result = await Swal.fire({
      title: "Delete this lead?",
      html: `
        <p style="font-size:15px; color:#555; line-height:1.7;">
          This enquiry will be <b>permanently removed</b> from your records.
        </p>
      `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#CFAF4B",
      confirmButtonText: "Yes, Delete",
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
      setDeleteLoadingId(id);

      const response = await api.delete(`/contacts/${id}`);

      if (response.data.status) {
        setLeads((prev) => prev.filter((lead) => lead.id !== id));

        Toast.fire({
          icon: "success",
          title: "Lead deleted successfully",
        });
      }
    } catch (error) {
      console.error(error);

      Toast.fire({
        icon: "error",
        title: "Delete failed ❌",
      });
    } finally {
      setDeleteLoadingId(null);
    }
  };

  // ================= COPY PHONE =================
  const copyPhone = async (phone, id) => {
    try {
      await navigator.clipboard.writeText(phone);
      setCopiedId(id);

      Toast.fire({
        icon: "success",
        title: "Phone number copied",
      });

      setTimeout(() => {
        setCopiedId(null);
      }, 1500);
    } catch (error) {
      console.error("Copy failed:", error);

      Toast.fire({
        icon: "error",
        title: "Copy failed",
      });
    }
  };

  // ================= FILTER =================
  const filteredLeads = leads.filter((lead) =>
    `${lead.name} ${lead.email} ${lead.phone} ${lead.service} ${lead.event} ${lead.message}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // ================= LOGOUT =================
  const logout = async () => {
    const result = await Swal.fire({
      title: "Logout from admin panel?",
      html: `
        <p style="font-size:15px; color:#555; line-height:1.7;">
          You’ll be securely signed out of your admin session.
        </p>
      `,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#CFAF4B",
      confirmButtonText: "Yes, Logout",
      cancelButtonText: "Stay Here",
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
            <h3 className="text-lg font-semibold mb-2">Lead Management</h3>
            <p className="text-sm text-white/65 leading-6">
              Review inquiries, open full messages, and follow up with potential clients faster.
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

      {/* MAIN */}
      <main className="flex-1 relative z-10">
        {/* TOPBAR */}
        <div className="sticky top-0 z-20 border-b border-white/10 bg-[#070b14]/80 backdrop-blur-xl px-5 sm:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-yellow-400/70 mb-1">
                Admin Section
              </p>
              <h1 className="text-2xl sm:text-3xl font-semibold">
                Contact Leads
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

        {/* BODY */}
        <div className="px-5 sm:px-8 py-8">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[28px] border border-yellow-500/15 bg-gradient-to-r from-[#111827]/90 via-[#0f172a]/80 to-[#1e1b0d]/80 p-6 sm:p-8 mb-8 overflow-hidden relative"
          >
            <div className="absolute right-0 top-0 w-52 h-52 bg-yellow-500/10 blur-3xl rounded-full"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div>
                <p className="text-yellow-400/80 text-sm mb-2 flex items-center gap-2">
                  <FaEnvelopeOpenText />
                  Client Inquiry Control
                </p>
                <h2 className="text-2xl sm:text-4xl font-semibold leading-tight max-w-2xl">
                  Manage and review your{" "}
                  <span className="bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent">
                    incoming contact leads
                  </span>
                  .
                </h2>
                <p className="text-white/60 mt-4 max-w-2xl leading-7">
                  View client details, copy phone numbers, open full messages and respond quickly.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 min-w-[180px]">
                <p className="text-white/55 text-sm mb-1">Total Leads</p>
                <p className="text-3xl font-bold text-yellow-300">
                  {filteredLeads.length}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 mb-8"
          >
            <div className="relative">
              <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400" />
              <input
                type="text"
                placeholder="Search by name, email, phone, service, event or message..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#0f1420]/70 border border-white/10 outline-none focus:border-yellow-400 text-white placeholder:text-white/35"
              />
            </div>
          </motion.div>

          {/* Error */}
          {errorMsg && (
            <div className="mb-6 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-red-300">
              {errorMsg}
            </div>
          )}

          {/* Table / Cards */}
          {loading ? (
            <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center text-yellow-300">
              Loading leads...
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center text-white/60">
              No leads found.
            </div>
          ) : (
            <>
              {/* Desktop Table */}
              <div className="hidden xl:block overflow-x-auto rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl">
                <table className="w-full text-sm">
                  <thead className="bg-white/5 text-yellow-400">
                    <tr className="text-left">
                      <th className="p-4">Name</th>
                      <th className="p-4">Email</th>
                      <th className="p-4">Phone</th>
                      <th className="p-4">Service</th>
                      <th className="p-4">Event</th>
                      <th className="p-4">Message</th>
                      <th className="p-4">Date</th>
                      <th className="p-4 text-center">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredLeads.map((lead, index) => (
                      <motion.tr
                        key={lead.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.03 }}
                        whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                        className="border-t border-white/10"
                      >
                        <td className="p-4 font-medium">{lead.name}</td>

                        <td className="p-4">
                          <a
                            href={`mailto:${lead.email}`}
                            className="text-yellow-300 hover:underline"
                          >
                            {lead.email}
                          </a>
                        </td>

                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <span>{lead.phone}</span>
                            <button
                              onClick={() => copyPhone(lead.phone, lead.id)}
                              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-yellow-500/15 text-yellow-300 flex items-center justify-center transition"
                              title="Copy phone"
                            >
                              <FaClipboard size={12} />
                            </button>
                            {copiedId === lead.id && (
                              <span className="text-[11px] text-green-400">Copied</span>
                            )}
                          </div>
                        </td>

                        <td className="p-4">{lead.service}</td>
                        <td className="p-4">{lead.event}</td>

                        <td className="p-4">
                          <button
                            onClick={() => setSelectedMessage(lead)}
                            className="inline-flex items-center gap-2 rounded-xl bg-yellow-500/10 hover:bg-yellow-500/15 text-yellow-300 px-3 py-2 transition"
                          >
                            <FaEye size={13} />
                            View
                          </button>
                        </td>

                        <td className="p-4 text-xs text-white/60">
                          {lead.created_at
                            ? new Date(lead.created_at).toLocaleString()
                            : "—"}
                        </td>

                        <td className="p-4 text-center">
                          <button
                            onClick={() => deleteLead(lead.id)}
                            disabled={deleteLoadingId === lead.id}
                            className="w-10 h-10 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-300 flex items-center justify-center mx-auto transition"
                            title="Delete lead"
                          >
                            {deleteLoadingId === lead.id ? "..." : <FaTrash size={13} />}
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile / Tablet Cards */}
              <div className="xl:hidden grid grid-cols-1 md:grid-cols-2 gap-5">
                {filteredLeads.map((lead, index) => (
                  <motion.div
                    key={lead.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className="rounded-[26px] border border-white/10 bg-[#0f1420]/80 shadow-xl p-5"
                  >
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <div>
                        <h3 className="text-lg font-semibold">{lead.name}</h3>
                        <p className="text-xs text-white/45 mt-1">
                          {lead.created_at
                            ? new Date(lead.created_at).toLocaleString()
                            : "—"}
                        </p>
                      </div>

                      <button
                        onClick={() => deleteLead(lead.id)}
                        disabled={deleteLoadingId === lead.id}
                        className="w-10 h-10 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-300 flex items-center justify-center transition"
                      >
                        {deleteLoadingId === lead.id ? "..." : <FaTrash size={13} />}
                      </button>
                    </div>

                    <div className="space-y-4 text-sm">
                      <div className="flex items-start gap-3">
                        <FaEnvelope className="text-yellow-300 mt-1" />
                        <a
                          href={`mailto:${lead.email}`}
                          className="text-yellow-300 hover:underline break-all"
                        >
                          {lead.email}
                        </a>
                      </div>

                      <div className="flex items-start gap-3">
                        <FaPhone className="text-yellow-300 mt-1" />
                        <div className="flex items-center gap-2 flex-wrap">
                          <span>{lead.phone}</span>
                          <button
                            onClick={() => copyPhone(lead.phone, lead.id)}
                            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-yellow-500/15 text-yellow-300 flex items-center justify-center transition"
                          >
                            <FaClipboard size={12} />
                          </button>
                          {copiedId === lead.id && (
                            <span className="text-[11px] text-green-400">Copied</span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <FaUser className="text-yellow-300 mt-1" />
                        <div>
                          <p className="text-white/45 text-xs">Service</p>
                          <p>{lead.service}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <FaCalendarDays className="text-yellow-300 mt-1" />
                        <div>
                          <p className="text-white/45 text-xs">Event</p>
                          <p>{lead.event}</p>
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() => setSelectedMessage(lead)}
                          className="inline-flex items-center gap-2 rounded-xl bg-yellow-500/10 hover:bg-yellow-500/15 text-yellow-300 px-4 py-2.5 transition"
                        >
                          <FaRegMessage size={13} />
                          Open Message
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      {/* MESSAGE MODAL */}
      <AnimatePresence>
        {selectedMessage && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMessage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl rounded-[30px] border border-white/10 bg-[#0c1220]/95 backdrop-blur-xl shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-yellow-400/70 mb-1">
                    Lead Message
                  </p>
                  <h3 className="text-2xl font-semibold">{selectedMessage.name}</h3>
                </div>

                <button
                  onClick={() => setSelectedMessage(null)}
                  className="w-11 h-11 rounded-2xl bg-white/5 hover:bg-red-500/15 text-white/70 hover:text-red-300 flex items-center justify-center transition"
                >
                  <FaXmark size={18} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/45 mb-2">Email</p>
                    <a
                      href={`mailto:${selectedMessage.email}`}
                      className="text-yellow-300 hover:underline break-all"
                    >
                      {selectedMessage.email}
                    </a>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/45 mb-2">Phone</p>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span>{selectedMessage.phone}</span>
                      <button
                        onClick={() =>
                          copyPhone(selectedMessage.phone, selectedMessage.id)
                        }
                        className="w-8 h-8 rounded-lg bg-white/5 hover:bg-yellow-500/15 text-yellow-300 flex items-center justify-center transition"
                      >
                        <FaClipboard size={12} />
                      </button>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/45 mb-2">Service</p>
                    <p>{selectedMessage.service}</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/45 mb-2">Event</p>
                    <p>{selectedMessage.event}</p>
                  </div>
                </div>

                <div className="rounded-3xl border border-yellow-500/15 bg-gradient-to-r from-[#111827]/90 via-[#0f172a]/80 to-[#1e1b0d]/70 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-yellow-400/70 mb-3">
                    Full Message
                  </p>
                  <p className="text-white/85 leading-8 whitespace-pre-wrap">
                    {selectedMessage.message || "No message provided."}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
>>>>>>> fe4c9d8 (Updated project)
    </div>
  );
}