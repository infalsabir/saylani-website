import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const StudentDashboard = () => {
  return (
      <div className="flex">
            {/* Sidebar */}
            <aside className="w-1/6 bg-lime-400 text-white h-screen p-4">
              <div className="flex flex-col space-y-6">
                <div className="flex items-center">
                  <img
                    src="\Screenshot 2024-05-25 165735.png"
                    alt="Logo"
                    className="h-13 mr-2 bg-transparent"
                  />
                  <h1 className="text-xl font-bold text-center">Infal</h1>
                </div>
                <nav className="flex flex-col space-y-4">
                <Link
                        to="/create-course"
                        className="hover:text-blue-700 bg-white text-lime-600 text-center block py-2 rounded-lg"
                      >
                       Create Courses
                      </Link>
                      <Link
                        to="/all-courses"
                        className="hover:text-blue-700 bg-white text-lime-600 text-center block py-2 rounded-lg"
                      >
                        Students
                      </Link>
                      <Link
                        to="/settings"
                        className="hover:text-blue-700 bg-white text-lime-600 text-center block py-2 rounded-lg"
                      >
                        Settings
                      </Link>
                      <Link
                        to="/logout"
                        className="hover:text-blue-700 bg-white text-lime-600 text-center block py-2 rounded-lg"
                      >
                        Logout
                      </Link>
                </nav>
              </div>
            </aside>

        
      
      
     
      <div className="bg-[#CDEB93] w-5/6 p-16 ml-1/6 flex justify-between ">
        <div className="w-3/5">
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Search"
              className="p-2 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Detail"
              className="p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="w-2/5">
          <motion.img
            src="/7d5ed733cd6855822458effa62a4aca3.png"
            alt="Student"
            className="w-full h-full object-cover rounded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;


