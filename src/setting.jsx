import React from "react";
import { Link } from "react-router-dom";
const Settings = () => {
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
                  Courses
                </Link>
                <Link
                  to="/all-students"
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
        <h2 className="text-2xl font-bold mb-6">Settings</h2>
        <div className="bg-lime-100 p-8 rounded-lg shadow-lg ">
          <form className="space-y-4 w-full h-full">
            <input
              type="text"
              placeholder="Name"
              className=" px-4 py-2 border rounded-lg place-items-center"
            />
            <br/>
            <input
              type="email"
              placeholder="Email"
              className=" px-4 py-2 border rounded-lg"
            />
             <br/>
            <input
              type="password"
              placeholder="Password"
              className=" px-4 py-2 border rounded-lg"
            />
            <div className="flex space-x-4">
              <button className="bg-gray-400 text-white px-4 py-2 rounded-lg">
                Cancel
              </button>
              <button className="bg-lime-400 text-white px-4 py-2 rounded-lg">
                Save
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Settings;
