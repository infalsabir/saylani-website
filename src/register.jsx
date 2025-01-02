import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const body = {
      name: username,
      email: email,
      password: password,
      userType: userType,
    };
    console.log("Request body:", body);
    try {
      const response = await axios.post("http://localhost:3002/user/register", body, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 201) {
        const { token, data } = response.data;
        const { userType } = data;
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.token);
        if (userType === "teacher") {
          navigate('/teacher-dashboard');
        } else if (userType === "student") {
          navigate('/student-dashboard');
        } else {
          navigate('/'); 
        }
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    await handleLogin(); 
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/31fff6ed29c1493c52c101233ba18587.jpeg')",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 48, 179, 0.2) 0%, rgba(153, 202, 60, 0.2) 100%)",
        }}
      ></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="p-8 rounded-lg shadow-lg w-full max-w-md"
          style={{
            background: "linear-gradient(180deg, #99CA3C 0%, #0030B3 100%)",
          }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-white">
            Register
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-white">
                Username
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-400 focus:ring-lime-400 p-1"
                placeholder=" Enter your username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-400 focus:ring-lime-400 p-1"
                placeholder=" Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Password
              </label>
              <input
                type="password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-400 focus:ring-lime-400 p-1"
                placeholder=" Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                User Type
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-400 focus:ring-lime-400"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                required
              >
                <option value="">Select User Type</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-lime-700 text-white py-2 px-4 rounded-md hover:bg-lime-800"
            >
              Register
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;






