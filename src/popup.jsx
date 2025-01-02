
import React from 'react'
import { Link } from "react-router-dom";

function Popup() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="bg-green-100 rounded-lg shadow-md px-6 py-4 w-full  flex justify-between items-center h-full">
            {/* Left Side Content */}
            <div>
              <h3 className="text text-green-700 font-semibold">
                Ready to Join?
              </h3>
              <p className="text-3xl-gray-700 font-bold">
                Register now and start your journey with us!
              </p>
            </div>
            <Link
            to="/register"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full transition duration-300"
            >
              Register Now
            </Link>
            {/* Right Side Button */}
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Popup
