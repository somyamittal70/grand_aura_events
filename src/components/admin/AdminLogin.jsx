import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";
<<<<<<< HEAD
=======
import api from "../../api/axios";
import Swal from "sweetalert2";
>>>>>>> fe4c9d8 (Updated project)

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
<<<<<<< HEAD

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "12345") {
      localStorage.setItem("admin", JSON.stringify({ email }));
      navigate("/admin/dashboard");
    } else {
      alert("Invalid Credentials");
=======
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // ✅ Toast Config
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

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post("/login", {
        email,
        password,
      });

      if (response.data.status) {
        localStorage.setItem("admin_token", response.data.token);
        localStorage.setItem("admin_user", JSON.stringify(response.data.user));

        // ✅ Success Toast
        Toast.fire({
          icon: "success",
          title: "Login Successful ✅",
        });

        // ✅ Dashboard Redirect
        setTimeout(() => {
          navigate("/admin/dashboard");
        }, 800);
      }
    } catch (error) {
      console.error("Login Error:", error);

      if (error.response?.data?.message) {
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      } else if (error.response?.data?.errors?.email?.[0]) {
        Toast.fire({
          icon: "error",
          title: error.response.data.errors.email[0],
        });
      } else {
        Toast.fire({
          icon: "error",
          title: "Invalid Credentials or Server Error",
        });
      }
    } finally {
      setLoading(false);
>>>>>>> fe4c9d8 (Updated project)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center navy-shimmer px-4 sm:px-6 relative overflow-hidden">
<<<<<<< HEAD

=======
>>>>>>> fe4c9d8 (Updated project)
      {/* ✨ Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.08),transparent_70%)]"></div>

      {/* 💎 Card */}
      <motion.form
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleLogin}
        className="relative gold-shimmer backdrop-blur-xl border border-yellow-500/20 shadow-[0_0_40px_rgba(255,215,0,0.15)]
<<<<<<< HEAD
        
=======
>>>>>>> fe4c9d8 (Updated project)
        w-full max-w-md sm:max-w-lg 
        p-6 sm:p-8 md:p-10 
        rounded-2xl"
      >
<<<<<<< HEAD
        {/* 🔥 Title */}
=======
>>>>>>> fe4c9d8 (Updated project)
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 sm:mb-8 text-black tracking-wide">
          Admin Access
        </h2>

        {/* 📧 Email */}
        <div className="mb-4 sm:mb-5 relative">
          <Mail className="absolute left-3 top-3 text-yellow-500" size={18} />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full pl-10 pr-3 py-2.5 sm:py-3 rounded-lg bg-black/40 border border-yellow-500/20 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-500 transition"
<<<<<<< HEAD
            onChange={(e) => setEmail(e.target.value)}
=======
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
>>>>>>> fe4c9d8 (Updated project)
          />
        </div>

        {/* 🔐 Password */}
        <div className="mb-5 sm:mb-6 relative">
          <Lock className="absolute left-3 top-3 text-yellow-500" size={18} />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full pl-10 pr-10 py-2.5 sm:py-3 rounded-lg bg-black/40 border border-yellow-500/20 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-500 transition"
<<<<<<< HEAD
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* 👁 Toggle */}
=======
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

>>>>>>> fe4c9d8 (Updated project)
          <div
            className="absolute right-3 top-3 cursor-pointer text-yellow-400"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </div>
        </div>

        {/* 🚀 Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
<<<<<<< HEAD
          className="w-full py-2.5 sm:py-3 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold tracking-wide shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
        >
          Login
        </motion.button>

        {/* 🔻 Footer */}
=======
          type="submit"
          disabled={loading}
          className="w-full py-2.5 sm:py-3 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold tracking-wide shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 disabled:opacity-70"
        >
          {loading ? "Logging in..." : "Login"}
        </motion.button>

>>>>>>> fe4c9d8 (Updated project)
        <p className="text-center text-gray-600 text-xs sm:text-sm mt-4 sm:mt-5">
          Secure Admin Panel • Grand Aura Events
        </p>
      </motion.form>
    </div>
  );
}