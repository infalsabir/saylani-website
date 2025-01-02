import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="bg-lime-400 text-white py-2">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <motion.div 
          className="flex items-center" 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-full p-2">
            <img
              src="/3927feb1d3c77fdd84173c346f7eee23.png"
              alt="Logo"
              className="h-8 w-auto"
            />
          </div>
        </motion.div>

        {/* Navigation Links and Buttons */}
        <div className="flex items-center space-x-6">
          <motion.div 
            className="hidden md:flex space-x-6"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Link
              to="/courses"
              className="text-white hover:text-blue-700 font-medium transition duration-300 ease-in-out transform hover:scale-105"
            >
              Courses
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-blue-700 font-medium transition duration-300 ease-in-out transform hover:scale-105"
            >
              Contact
            </Link>
            <Link
              to="/popup"
              className="text-white hover:text-blue-700 font-medium transition duration-300 ease-in-out transform hover:scale-105"
            >
              Blogs
            </Link>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1, duration: 1 }}
          >
            <Link
              to="/register"
              className="bg-white text-lime-400 font-medium px-4 py-1 rounded-full hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="bg-white text-lime-400 font-medium px-4 py-1 rounded-full hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Login
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
