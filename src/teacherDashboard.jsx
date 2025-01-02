import React from "react";
import { Link } from "react-router-dom";
const TeacherDashboard = () => {
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

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold text-lime-400">My Courses</h2>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-lg px-4 py-2"
            />
            <button className="bg-lime-400 text-white p-2 rounded-full">
              +
            </button>
          </div>
        </div>
        {/* Course Grid */}
        <div className="grid grid-cols-3 gap-4">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-lg p-4 bg-white"
            >
              <img
                src="51c362d43652868e762aa92a592262ce.jpeg" 
                alt="Web Development"
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold">Web Development</h3>
              <p className="text-gray-600">
                Data Analysis, Data Management, Data Mining, Data Model, Data
                Visualization, Extract, Transform, Load, Microsoft Excel, Power
                BI, SQL
              </p>
            </div>
          ))}
        </div>
        
      </main>
    </div>
  );
};

export default TeacherDashboard;
