import React from 'react';

function ContactPage() {
  return (
    
    <section className="py-12 bg-gray-100">
        
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-lg overflow-hidden">
          
          <div className="w-full md:w-1/2">
            <img
              src="d5ea22921f9b933311336b357c20f2a9.png"
              alt="Contact Us"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-bold text-green-600 mb-6">Contact Us</h2>
            <form className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Your Email"
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Your Message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
