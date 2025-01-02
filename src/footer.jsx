import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-lime-400 text-white py-6">
      <div className="container mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="bg-white rounded-full p-3">
            <img
              src="\3927feb1d3c77fdd84173c346f7eee23.png"
              alt="Logo"
              className="h-10 w-auto"
            />
          </div>
        </div>

        {/* Copyright Text */}
        <div className="text-white text-sm mb-4">
          &copy; 2024 <span className="font-bold">onlineSaylani.com</span> All rights reserved.
        </div>

        {/* Divider */}
        <div className="border-t border-white w-3/4 mx-auto mb-4"></div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
          >
            <FontAwesomeIcon icon={faFacebook} className="text-xl" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-xl" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
          >
            <FontAwesomeIcon icon={faTwitter} className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

