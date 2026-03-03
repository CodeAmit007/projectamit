import React, { useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";

const Login = () => {


  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const [passwordIcon,setPasswordIcon] = useState(false)
  const navigate = useNavigate()

  const handleInput = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

const handleForm = (e) => {
  e.preventDefault()
  localStorage.setItem("jwt_token",JSON.stringify("hfvivnsdkhdofho"))
  navigate("/dashboard")

}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>

        <form onSubmit={handleForm} className="space-y-5">
          <div>
            <label className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInput}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className='relative'>
            <label className="block text-gray-600 mb-2">Password</label>
            <input
              type={passwordIcon? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInput}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className='p-1 absolute top-10 right-5 cursor-pointer flex items-center justify-center' onClick={()=>setPasswordIcon(!passwordIcon)}>
                {
                    passwordIcon ?<IoEyeOffOutline/> : <IoEyeOutline/> 
                }
 
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>


        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 hover:underline font-medium"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login