import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    age: "",
    email: "",
    password: "",
    dob: "",
    city: "",
    gender: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.username ||
      !formData.age ||
      !formData.email ||
      !formData.password ||
      !formData.dob ||
      !formData.city ||
      !formData.gender
    ) {
      toast.error("Please fill all fields", { position: "top-center" });
      return;
    }

    try {
      await axios.post("http://localhost:5000/users", formData);

      toast.success("Register Successful", {
        position: "top-center"});

      setFormData({
        username: "",
        age: "",
        email: "",
        password: "",
        dob: "",
        city: "",
        gender: ""
      });

      // setTimeout(() => {
      //   navigate("/login");
      // }, 2000);
      navigate("/login");

    } catch (error) {
      toast.error("Registration Failed");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-cyan-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6">
          Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
          />

          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
          />

          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
          >
            <option value="">Select City</option>
            <option value="Delhi">Delhi</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Mumbai">Mumbai</option>
          </select>

          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
                checked={formData.gender === "Male"}
              /> Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
                checked={formData.gender === "Female"}
              /> Female
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                onChange={handleChange}
                checked={formData.gender === "Other"}
              /> Other
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white rounded-md bg-blue-500 hover:bg-blue-600"
          >
            Register
          </button>

        </form>
      </div>
    </div>
  );
};

export default Register;