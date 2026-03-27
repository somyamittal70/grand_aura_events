import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "12345") {
      localStorage.setItem("admin", JSON.stringify({ email }));
      navigate("/admin/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center navy-shimmer px-4 sm:px-6 relative overflow-hidden">

      {/* ✨ Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.08),transparent_70%)]"></div>

      {/* 💎 Card */}
      <motion.form
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleLogin}
        className="relative gold-shimmer backdrop-blur-xl border border-yellow-500/20 shadow-[0_0_40px_rgba(255,215,0,0.15)]
        
        w-full max-w-md sm:max-w-lg 
        p-6 sm:p-8 md:p-10 
        rounded-2xl"
      >
        {/* 🔥 Title */}
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
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* 🔐 Password */}
        <div className="mb-5 sm:mb-6 relative">
          <Lock className="absolute left-3 top-3 text-yellow-500" size={18} />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full pl-10 pr-10 py-2.5 sm:py-3 rounded-lg bg-black/40 border border-yellow-500/20 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-500 transition"
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* 👁 Toggle */}
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
          className="w-full py-2.5 sm:py-3 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold tracking-wide shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
        >
          Login
        </motion.button>

        {/* 🔻 Footer */}
        <p className="text-center text-gray-600 text-xs sm:text-sm mt-4 sm:mt-5">
          Secure Admin Panel • Grand Aura Events
        </p>
      </motion.form>
    </div>
  );
}