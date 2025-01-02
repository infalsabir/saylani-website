import React from "react";
import ContactPage from './contact.jsx';
import Courses from './courses.jsx';
import Footer from './footer.jsx';

const HeroSection = () => {
  return (
    <section className="bg-hero-gradient py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
      
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold text-blue-900 leading-tight mb-4">
            Learn without <span className="text-green-700">limits</span>
          </h1>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Start, switch, or advance your career with more than{" "}
            <span className="text-blue-700 font-semibold">7,000 courses</span>, Professional Certificates, 
            and degrees from world-class universities and companies.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>

        {/* Right Side: Images */}
        <div className="md:w-1/2 flex items-center justify-center">
          <img
            src="75c6937a96bff2795e0074d18a6e7e62.png" 
            alt="Hero Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
      <Courses/>
      <ContactPage/>
      <Footer/>
    </section>
    
  );
};

export default HeroSection;
