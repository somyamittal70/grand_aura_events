import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import api from "../../api/axios";
import Swal from "sweetalert2";

import {
  FaHouse,
  FaImages,
  FaEnvelopeOpenText,
  FaArrowRightFromBracket,
  FaUserShield,
  FaBolt,
  FaPanorama,
  FaTrash,
  FaPen,
  FaPlus,
  FaXmark,
  FaCheck,
  FaEye,
} from "react-icons/fa6";

export default function BannerManagement() {
  const navigate = useNavigate();
  const location = useLocation();

  const adminUser = JSON.parse(localStorage.getItem("admin_user"));

  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [preview, setPreview] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [showPreviewModal, setShowPreviewModal] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    button_text: "",
    button_link: "",
    media: null,
    media_type: "image",
    is_active: true,
  });

  // ✅ SweetAlert Toast
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

  // ================= FETCH BANNERS =================
  const fetchBanners = async () => {
    try {
      setFetchLoading(true);
      const response = await api.get("/admin/banners");

      if (response.data.status) {
        setBanners(response.data.data || []);
      }
    } catch (error) {
  console.error("Banner submit error:", error);
  console.log("Backend Error Response:", error.response?.data);

  let errorMessage = "Banner save failed";

  if (error.response?.data?.message) {
    errorMessage = error.response.data.message;
  } else if (error.response?.data?.errors) {
    const firstError = Object.values(error.response.data.errors)[0];
    if (Array.isArray(firstError)) {
      errorMessage = firstError[0];
    }
  }

  Toast.fire({
    icon: "error",
    title: errorMessage,
  });
} finally {
      setFetchLoading(false);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  // ================= HANDLE INPUT =================
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ================= HANDLE IMAGE =================
  const handleMediaChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const type = file.type.startsWith("video") ? "video" : "image";

      setFormData((prev) => ({
        ...prev,
        media: file,
        media_type: type,
      }));

      setPreview(URL.createObjectURL(file));
    }
  };

  // ================= RESET FORM =================
  const resetForm = () => {
    setFormData({
      title: "",
      subtitle: "",
      button_text: "",
      button_link: "",
      media: null,
      media_type: "image",
      is_active: true,
    });

    setPreview(null);
    setEditingId(null);
  };

  // ================= SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = new FormData();
      payload.append("title", formData.title);
      payload.append("subtitle", formData.subtitle);
      payload.append("button_text", formData.button_text);
      payload.append("button_link", formData.button_link);
      payload.append("is_active", formData.is_active ? 1 : 0);

      if (formData.media) {
        payload.append("media", formData.media);
      }

      let response;

      if (editingId) {
        response = await api.post(`/admin/banners/${editingId}`, payload);
      } else {
        response = await api.post("/admin/banners", payload);
      }

      if (response.data.status) {
        Toast.fire({
          icon: "success",
          title: editingId
            ? "Banner updated successfully"
            : "Banner uploaded successfully",
        });

        resetForm();
        fetchBanners();
      }
    } catch (error) {
      console.error("Banner submit error:", error);
      Toast.fire({
        icon: "error",
        title: "Banner save failed",
      });
    } finally {
      setLoading(false);
    }
  };

  // ================= EDIT =================
  const handleEdit = (banner) => {
    setEditingId(banner.id);

    setFormData({
      title: banner.title || "",
      subtitle: banner.subtitle || "",
      button_text: banner.button_text || "",
      button_link: banner.button_link || "",
      media: null,
      media_type: banner.media_type || "image",
      is_active: banner.is_active ? true : false,
    });

    setPreview(banner.media_url || banner.image_url || null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Delete this banner?",
      text: "This banner will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#CFAF4B",
      confirmButtonText: "Yes, Delete",
    });

    if (!result.isConfirmed) return;

    try {
      await api.delete(`/admin/banners/${id}`);

      Toast.fire({
        icon: "success",
        title: "Banner deleted successfully",
      });

      fetchBanners();
    } catch (error) {
      console.error("Delete banner error:", error);
      Toast.fire({
        icon: "error",
        title: "Delete failed",
      });
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
            <h3 className="text-lg font-semibold mb-2">Hero Banner Control</h3>
            <p className="text-sm text-white/65 leading-6">
              Upload and manage your homepage banner content dynamically.
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
                Banner Management
              </p>
              <h1 className="text-2xl sm:text-3xl font-semibold">
                Home Banner Control
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
                  <FaPanorama />
                  Homepage Hero Section
                </p>
                <h2 className="text-2xl sm:text-4xl font-semibold leading-tight max-w-2xl">
                  Create and manage your{" "}
                  <span className="bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent">
                    luxury homepage banner
                  </span>
                  .
                </h2>
                <p className="text-white/60 mt-4 max-w-2xl leading-7">
                  Upload premium banner visuals and control homepage messaging
                  directly from the admin panel.
                </p>
              </div>

              <button
                onClick={resetForm}
                className="rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-6 py-3 font-semibold shadow-lg shadow-yellow-500/20 hover:scale-[1.02] transition flex items-center gap-2"
              >
                <FaPlus />
                New Banner
              </button>
            </div>
          </motion.div>

          {/* FORM + LIST */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* FORM */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="xl:col-span-1 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-6">
                {editingId ? "Edit Banner" : "Upload Banner"}
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-white/70 mb-2 block">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Banner Title"
                    className="w-full rounded-2xl bg-[#0f1420]/70 border border-white/10 px-4 py-3 outline-none focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label className="text-sm text-white/70 mb-2 block">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    name="subtitle"
                    value={formData.subtitle}
                    onChange={handleChange}
                    placeholder="Banner Subtitle"
                    className="w-full rounded-2xl bg-[#0f1420]/70 border border-white/10 px-4 py-3 outline-none focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label className="text-sm text-white/70 mb-2 block">
                    Button Text
                  </label>
                  <input
                    type="text"
                    name="button_text"
                    value={formData.button_text}
                    onChange={handleChange}
                    placeholder="e.g. Explore Events"
                    className="w-full rounded-2xl bg-[#0f1420]/70 border border-white/10 px-4 py-3 outline-none focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label className="text-sm text-white/70 mb-2 block">
                    Button Link
                  </label>
                  <input
                    type="text"
                    name="button_link"
                    value={formData.button_link}
                    onChange={handleChange}
                    placeholder="/events or https://..."
                    className="w-full rounded-2xl bg-[#0f1420]/70 border border-white/10 px-4 py-3 outline-none focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label className="text-sm text-white/70 mb-2 block">
                    Banner Image
                  </label>
                  <input
                    type="file"
                    accept="image/*,video/*"
                    onChange={handleMediaChange}
                    className="w-full rounded-2xl bg-[#0f1420]/70 border border-white/10 px-4 py-3 outline-none file:mr-4 file:rounded-full file:border-0 file:bg-yellow-400 file:px-4 file:py-2 file:text-black file:font-semibold"
                  />
                </div>

                {preview && (
                  <div className="rounded-2xl overflow-hidden border border-white/10">
                    {formData.media_type === "video" ? (
                      <video
                        src={preview}
                        controls
                        className="w-full h-52 object-cover"
                      />
                    ) : (
                      <img
                        src={preview}
                        alt="Preview"
                        className="w-full h-52 object-cover"
                      />
                    )}
                  </div>
                )}

                <label className="flex items-center gap-3 text-sm text-white/80 cursor-pointer">
                  <input
                    type="checkbox"
                    name="is_active"
                    checked={formData.is_active}
                    onChange={handleChange}
                    className="accent-yellow-400 w-4 h-4"
                  />
                  Set as Active Banner
                </label>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-5 py-3 font-semibold shadow-lg shadow-yellow-500/20 hover:scale-[1.02] transition"
                  >
                    {loading
                      ? "Saving..."
                      : editingId
                      ? "Update Banner"
                      : "Upload Banner"}
                  </button>

                  {editingId && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 hover:bg-white/10 transition"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </motion.form>

            {/* BANNERS LIST */}
            <div className="xl:col-span-2">
              {fetchLoading ? (
                <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center text-yellow-300">
                  Loading banners...
                </div>
              ) : banners.length === 0 ? (
                <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center text-white/60">
                  No banners found.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {banners.map((banner, index) => (
                    <motion.div
                      key={banner.id}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="rounded-[26px] border border-white/10 bg-[#0f1420]/80 overflow-hidden shadow-xl"
                    >
                      <div className="relative">
                        {banner.media_type === "video" ? (
                          <video
                            src={banner.media_url || banner.image_url}
                            className="w-full h-56 object-cover"
                            muted
                            autoPlay
                            loop
                            playsInline
                          />
                        ) : (
                          <img
                            src={banner.media_url || banner.image_url}
                            alt={banner.title || "Banner"}
                            className="w-full h-56 object-cover"
                          />
                        )}

                        {banner.is_active ? (
                          <div className="absolute top-3 left-3 bg-green-500/90 text-white text-xs px-3 py-1 rounded-full flex items-center gap-2">
                            <FaCheck size={10} />
                            Active
                          </div>
                        ) : (
                          <div className="absolute top-3 left-3 bg-gray-700/90 text-white text-xs px-3 py-1 rounded-full">
                            Inactive
                          </div>
                        )}

                        <div className="absolute top-3 right-3 flex gap-2">
                          <button
                            onClick={() => setShowPreviewModal(banner)}
                            className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition"
                          >
                            <FaEye size={13} />
                          </button>

                          <button
                            onClick={() => handleEdit(banner)}
                            className="w-10 h-10 rounded-full bg-yellow-500/90 hover:bg-yellow-500 text-black flex items-center justify-center transition"
                          >
                            <FaPen size={13} />
                          </button>

                          <button
                            onClick={() => handleDelete(banner.id)}
                            className="w-10 h-10 rounded-full bg-red-500/90 hover:bg-red-500 text-white flex items-center justify-center transition"
                          >
                            <FaTrash size={13} />
                          </button>
                        </div>
                      </div>

                      <div className="p-5">
                        <h3 className="text-lg font-semibold line-clamp-1">
                          {banner.title || "Untitled Banner"}
                        </h3>

                        <p className="text-sm text-white/60 mt-2 line-clamp-2 leading-6">
                          {banner.subtitle || "No subtitle added."}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {banner.button_text && (
                            <span className="text-xs px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-300 border border-yellow-500/20">
                              {banner.button_text}
                            </span>
                          )}

                          {banner.button_link && (
                            <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/70 border border-white/10">
                              {banner.button_link}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* PREVIEW MODAL */}
      <AnimatePresence>
        {showPreviewModal && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPreviewModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl rounded-[30px] border border-white/10 bg-[#0c1220]/95 backdrop-blur-xl shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-yellow-400/70 mb-1">
                    Banner Preview
                  </p>
                  <h3 className="text-2xl font-semibold">
                    {showPreviewModal.title || "Banner"}
                  </h3>
                </div>

                <button
                  onClick={() => setShowPreviewModal(null)}
                  className="w-11 h-11 rounded-2xl bg-white/5 hover:bg-red-500/15 text-white/70 hover:text-red-300 flex items-center justify-center transition"
                >
                  <FaXmark size={18} />
                </button>
              </div>

              <div className="relative h-[500px]">
                {showPreviewModal.media_type === "video" ? (
                  <video
                    src={
                      showPreviewModal.media_url || showPreviewModal.image_url
                    }
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={
                      showPreviewModal.media_url || showPreviewModal.image_url
                    }
                    alt="Banner Preview"
                    className="w-full h-full object-cover"
                  />
                )}

                <div className="absolute inset-0 bg-black/50"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                  <h2 className="text-3xl md:text-5xl font-bold max-w-3xl">
                    {showPreviewModal.title}
                  </h2>
                  <p className="mt-4 text-lg text-gray-200 max-w-2xl">
                    {showPreviewModal.subtitle}
                  </p>

                  {showPreviewModal.button_text && (
                    <button className="mt-6 gold-shimmer-btn text-white px-6 py-3 rounded-full font-semibold">
                      {showPreviewModal.button_text}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
