import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../../api/axios";
import Swal from "sweetalert2";

import {
  FaHouse,
  FaImages,
  FaCalendarDays,
  FaEnvelopeOpenText,
  FaArrowRightFromBracket,
  FaUserShield,
  FaCloudArrowUp,
  FaTrash,
  FaPhotoFilm,
  FaBolt,
} from "react-icons/fa6";

export default function GalleryAdmin() {
  const navigate = useNavigate();
  const location = useLocation();

  const adminUser = JSON.parse(localStorage.getItem("admin_user"));

  const [files, setFiles] = useState([]);
  const [preview, setPreview] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
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

  const logout = async () => {
    try {
      await api.post("/logout");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      localStorage.removeItem("admin_token");
      localStorage.removeItem("admin_user");
      navigate("/admin/login");
    }
  };

  // ================= FETCH =================
  const fetchGallery = async () => {
    try {
      const res = await api.get("/gallery");
      setGallery(res.data.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  // ================= HANDLE FILE SELECT =================
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    setFiles(selectedFiles);

    const previewUrls = selectedFiles.map((file) => ({
      url: URL.createObjectURL(file),
      type: file.type.startsWith("video") ? "video" : "image",
      name: file.name,
    }));

    setPreview(previewUrls);
  };

  // ================= UPLOAD =================
  const handleUpload = async () => {
    if (files.length === 0) {
      return Toast.fire({ icon: "warning", title: "Select files first!" });
    }

    try {
      setLoading(true);

      for (let file of files) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append(
          "type",
          file.type.startsWith("video") ? "video" : "image"
        );

        await api.post("/gallery", formData);
      }

      Toast.fire({ icon: "success", title: "Uploaded Successfully 🎉" });

      setFiles([]);
      setPreview([]);
      fetchGallery();
    } catch (err) {
      Toast.fire({ icon: "error", title: "Upload failed ❌" });
    } finally {
      setLoading(false);
    }
  };

  const toggleSelect = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedItems.length === gallery.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(gallery.map((item) => item.id));
    }
  };

  const handleBulkDelete = async () => {
    if (selectedItems.length === 0) {
      return Toast.fire({ icon: "warning", title: "No items selected" });
    }

    const result = await Swal.fire({
      title: `Delete ${selectedItems.length} items?`,
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Delete All",
    });

    if (!result.isConfirmed) return;

    try {
      for (let id of selectedItems) {
        await api.delete(`/gallery/${id}`);
      }

      setGallery((prev) =>
        prev.filter((item) => !selectedItems.includes(item.id))
      );

      setSelectedItems([]);

      Toast.fire({
        icon: "success",
        title: "Selected items deleted",
      });
    } catch (err) {
      Toast.fire({ icon: "error", title: "Bulk delete failed" });
    }
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Delete this item?",
      text: "This file will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#CFAF4B",
      confirmButtonText: "Yes, Delete",
    });

    if (!result.isConfirmed) return;

    try {
      await api.delete(`/gallery/${id}`);
      setGallery((prev) => prev.filter((g) => g.id !== id));

      Toast.fire({ icon: "success", title: "Deleted successfully" });
    } catch (err) {
      Toast.fire({ icon: "error", title: "Delete failed ❌" });
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
            <h3 className="text-lg font-semibold mb-2">Gallery Showcase</h3>
            <p className="text-sm text-white/65 leading-6">
              Upload premium event visuals and keep your brand presentation
              polished.
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
                Gallery Management
              </h1>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-600 text-black flex items-center justify-center font-bold">
                {adminUser?.name?.charAt(0)?.toUpperCase() || "A"}
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium">
                  {adminUser?.name || "Admin"}
                </p>
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
                  <FaPhotoFilm />
                  Media Control
                </p>
                <h2 className="text-2xl sm:text-4xl font-semibold leading-tight max-w-2xl">
                  Upload and manage your{" "}
                  <span className="bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent">
                    premium event gallery
                  </span>
                  .
                </h2>
                <p className="text-white/60 mt-4 max-w-2xl leading-7">
                  Add multiple event photos and videos to keep your portfolio
                  elegant and updated.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 min-w-[180px]">
                <p className="text-white/55 text-sm mb-1">Total Uploads</p>
                <p className="text-3xl font-bold text-yellow-300">
                  {gallery.length}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Upload Section */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 mb-8"
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                  Bulk Upload Gallery
                </h3>
                <p className="text-white/60 text-sm">
                  Select multiple images or videos and upload them in one go.
                </p>
              </div>

              <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-300">
                {files.length} file{files.length !== 1 ? "s" : ""} selected
              </div>
            </div>

            <div className="border-2 border-dashed border-yellow-500/20 rounded-[24px] p-6 bg-[#0f1420]/60">
              <input
                type="file"
                multiple
                accept="image/*,video/*"
                onChange={handleFileChange}
                className="mb-5 block w-full text-sm text-white/70 file:mr-4 file:py-2.5 file:px-5 file:rounded-xl file:border-0 file:bg-yellow-500/15 file:text-yellow-300 hover:file:bg-yellow-500/20"
              />

              {/* Preview */}
              {preview.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
                  {preview.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-2xl overflow-hidden border border-white/10 bg-black/20"
                    >
                      {item.type === "video" ? (
                        <video
                          src={item.url}
                          className="w-full h-36 object-cover"
                          muted
                        />
                      ) : (
                        <img
                          src={item.url}
                          alt={item.name}
                          className="w-full h-36 object-cover"
                        />
                      )}
                      <div className="p-3">
                        <p className="text-xs text-white/70 truncate">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <button
                onClick={handleUpload}
                disabled={loading}
                className={`inline-flex items-center gap-3 rounded-2xl px-6 py-3 font-semibold transition ${
                  loading
                    ? "bg-yellow-500/40 text-black cursor-not-allowed"
                    : "bg-gradient-to-r from-yellow-400 to-amber-500 text-black hover:scale-[1.02] shadow-lg shadow-yellow-500/20"
                }`}
              >
                <FaCloudArrowUp />
                {loading ? "Uploading..." : "Upload Selected Files"}
              </button>
            </div>
          </motion.div>

          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={handleSelectAll}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20"
            >
              {selectedItems.length === gallery.length
                ? "Unselect All"
                : "Select All"}
            </button>

            <button
              onClick={handleBulkDelete}
              className="px-4 py-2 rounded-xl bg-red-500/80 hover:bg-red-500 text-white"
            >
              Delete Selected ({selectedItems.length})
            </button>
          </div>

          {/* Gallery Grid */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xl sm:text-2xl font-semibold">
                Uploaded Gallery
              </h3>
              <p className="text-sm text-white/45 hidden sm:block">
                Manage your current portfolio visuals
              </p>
            </div>

            {gallery.length === 0 ? (
              <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center text-white/60">
                No gallery items uploaded yet.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                {gallery.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04 }}
                    whileHover={{ y: -4 }}
                    className="relative group rounded-[26px] overflow-hidden border border-white/10 bg-[#0f1420]/80 shadow-xl"
                  >
                    {/* ✅ Checkbox */}
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => toggleSelect(item.id)}
                      className="absolute top-3 left-3 w-5 h-5 z-10 accent-yellow-500"
                    />
                    {item.type === "video" ? (
                      <video
                        src={item.file_url}
                        className="w-full h-60 object-cover"
                        muted
                      />
                    ) : (
                      <img
                        src={item.file_url}
                        alt={item.title || "Gallery"}
                        className="w-full h-60 object-cover"
                      />
                    )}

                    <div className="p-4">
                      <p className="text-sm text-white/80 truncate">
                        {item.title ||
                          item.type?.toUpperCase() ||
                          "Gallery Item"}
                      </p>
                      <p className="text-xs text-white/40 mt-1">
                        {item.created_at
                          ? new Date(item.created_at).toLocaleDateString()
                          : "Recently uploaded"}
                      </p>
                    </div>

                    {/* Delete */}
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="absolute top-3 right-3 w-10 h-10 rounded-full bg-red-500/90 hover:bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                    >
                      <FaTrash size={14} />
                    </button>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
