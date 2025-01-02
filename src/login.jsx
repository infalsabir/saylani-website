import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import { toast } from 'react-toastify'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();  // Prevent default form submission
    console.log("Login button clicked");  // Debugging log
  
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:3002/user/login', { email, password }, 
        {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
                }
      );
  
      if (response.status === 200) {
        const { token, user } = response.data;
        const { userType } = user;
        
        // Show success toast
        toast.success(response.data.message);
  
        // Store token in localStorage
        localStorage.setItem('token', token);
  
        // Navigate based on user type
        if (userType === 'teacher') {
          navigate('/teacher-dashboard');
        } else if (userType === 'student') {
          navigate('/student-dashboard');
        } else {
          navigate('/'); // Default to home page
        }
      }
    } catch (err) {
      // Handle errors
      console.error("Login failed:", err);  // Log error for debugging
      toast.error(err.response?.data?.message || 'Login failed');
    }
  };
  

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/31fff6ed29c1493c52c101233ba18587.jpeg')",
      }}
    >
      {/* Overlay with specified gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 48, 179, 0.2) 0%, rgba(153, 202, 60, 0.2) 100%)",
        }}
      ></div>

      {/* Centered form */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="p-8 rounded-lg shadow-lg w-full max-w-md"
          style={{
            background: "linear-gradient(180deg, #99CA3C 0%, #0030B3 100%)",
          }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-white">Login</h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-full border-gray-300 shadow-sm focus:border-lime-400 focus:ring-lime-400"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full rounded-full border-gray-300 shadow-sm focus:border-lime-400 focus:ring-lime-400"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-lime-400 text-white py-2 px-4 rounded-full hover:bg-lime-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;


