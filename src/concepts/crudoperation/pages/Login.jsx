import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target
    setFormData({...formData,[name]: value})
  }

  const handleForm = (e) => {
    e.preventDefault()
    console.log(formData)

    setFormData({
      email:"",
      password:""
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">

      <div className="bg-slate-800/70 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-[370px] border border-slate-600">

        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Login
        </h2>

        <form onSubmit={handleForm} className="flex flex-col gap-6">

          {/* Email */}
          <div className="relative">
            <MdEmail className="absolute left-3 top-3 text-indigo-400 text-xl" />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInput}
              placeholder="Enter your email"
              className="w-full pl-10 pr-3 py-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-indigo-400 text-lg" />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInput}
              placeholder="Enter password"
              className="w-full pl-10 pr-10 py-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 cursor-pointer text-gray-300 hover:text-white"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Login Button */}
          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:scale-105 hover:shadow-lg transition duration-300">
            Login
          </button>

        </form>

        <p className="text-center text-gray-300 text-sm mt-6">
          Don't have an account?{" "}
          <span className="font-semibold cursor-pointer text-indigo-400 hover:underline">
            <Link to="/register">Register</Link>
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;